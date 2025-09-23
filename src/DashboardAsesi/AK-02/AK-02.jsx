import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavAsesi from "../../components/NavAsesi";
import { submitFormAk02, fetchCsrfCookie, getAssesmentById, getApl02ById, getFormAk02ByAssesi } from "../../api/api";

import { useDashboardAsesi } from "../../context/DashboardAsesiContext";

const pageContainerStyle = {
  backgroundColor: "white",
  fontFamily: "Arial, sans-serif",
  padding: "8px",
  minHeight: "100vh",
};

// Header section matching AK-01 design
const headerSectionStyle = {
  backgroundImage:
    "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "0 0 40px 40px",
  overflow: "hidden",
  marginBottom: "0",
};

// Navigation container matching AK-01
const navContainerStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  padding: "3px 10px",
  borderRadius: "0 15px 40px 15px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  margin: "0",
  overflowX: "auto",
  maxWidth: "60%",
  whiteSpace: "nowrap",
  backdropFilter: "blur(10px)",
  position: "relative",
  zIndex: 2,
};

// Logo container matching AK-01
const logoContainerStyle = {
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "8px",
  marginBottom: "8px",
};

// Logo text matching AK-01
const logoTextStyle = {
  color: "white",
  fontSize: "32px",
  fontWeight: "bold",
  margin: 0,
  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  letterSpacing: "1px",
};

const contentCardStyle = {
  backgroundColor: "white",
  borderRadius: "0 0 15px 15px",
  padding: "20px",
  boxShadow: "none",
  marginTop: "0",
  border: "none",
};

const AK02 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();
  const { currentAsesi, apl01Data, userAssessments, ensureUserAssesmentAsesi, fetchUserAssessments } = useDashboardAsesi();

  const [formData, setFormData] = useState({
    skemaSertifikasi: "",
    judulUnit: "",
    kodeUnit: "",
    tuk: "",
    namaAsesor: "",
    namaAsesi: "",
    tanggal: "",
    waktu: "",
    rekomendasiHasilAssessment: "",
    alasanKompeten: false,
    selesaiKompeten: false,
    tindakanKompeten: false,
    tindakanBelumKompeten: false,
    komentar: "",
    tanggapanAsesi: "",
  });

  // Dynamic units fetched from schema and selections per unit
  const [schemaUnits, setSchemaUnits] = useState([]); // from getApl02ById(skemaId)
  const [unitSelections, setUnitSelections] = useState({}); // key: kode_unit -> {kompeten, portfolio_sesuai, penguatan_evidence_sesuai, hasil_penguatan_evidence_sesuai, rekomendasi_belum_kompeten}
  const [resolvedSkemaId, setResolvedSkemaId] = useState(null);

  // Block navigation jika form belum di-submit
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!isFormSubmitted) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    // Intercept navigation attempts dengan history API
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      if (!isFormSubmitted && !args[2].includes("/dashboard-asesi/ak-02")) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalPushState.apply(window.history, args);
    };

    window.history.replaceState = function (...args) {
      if (!isFormSubmitted && !args[2].includes("/dashboard-asesi/ak-02")) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalReplaceState.apply(window.history, args);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, [isFormSubmitted]);

  useEffect(() => {
    const now = new Date();
    const tanggal = now.toISOString().split("T")[0]; // Format YYYY-MM-DD
    const waktu = now.toTimeString().split(" ")[0].slice(0, 5); // Format HH:MM

    setFormData((prev) => ({
      ...prev,
      tanggal,
      waktu,
    }));
  }, []);

  // Ensure we have a user assessment linked, and refresh list on page enter
  useEffect(() => {
    (async () => {
      try {
        await ensureUserAssesmentAsesi?.();
      } catch {}
      try {
        await fetchUserAssessments?.();
      } catch {}
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Prefill Nama Asesi dari context (mirip AK-01)
  useEffect(() => {
    const pickFullName = (obj) => {
      if (!obj) return "";
      return (
        obj.fullname || obj.full_name || obj.nama_lengkap || obj.namaLengkap || obj.name || obj.username || ""
      );
    };
    if (!formData.namaAsesi) {
      let name = pickFullName(currentAsesi) || pickFullName(currentAsesi?.user);
      if (!name) {
        const a = Array.isArray(apl01Data) ? apl01Data[0] : apl01Data;
        name = pickFullName(a) || pickFullName(a?.user);
      }
      if (name) setFormData((prev) => ({ ...prev, namaAsesi: name }));
    }
  }, [currentAsesi, apl01Data, formData.namaAsesi]);

  // Helper derive asesi_id
  const deriveAsesiId = () => {
    const fromCurrent = currentAsesi?.id ?? currentAsesi?.assesi_id ?? currentAsesi?.user?.assesi_id;
    if (fromCurrent) return Number(fromCurrent);
    const fromApl01 = Array.isArray(apl01Data)
      ? (apl01Data[0]?.id ?? apl01Data[0]?.assesi_id)
      : (apl01Data?.id ?? apl01Data?.assesi_id);
    if (fromApl01) return Number(fromApl01);
    try {
      const lp = JSON.parse(localStorage.getItem("asesiProfile"));
      const fromLS = lp?.id ?? lp?.assesi_id;
      if (fromLS) return Number(fromLS);
    } catch {}
    return undefined;
  };

  // Existing AK-02 fetched lazily
  const [existingAk02, setExistingAk02] = useState(null);
  useEffect(() => {
    (async () => {
      const asesiId = deriveAsesiId();
      if (!asesiId) return;
      try {
        await fetchCsrfCookie();
        const res = await getFormAk02ByAssesi(asesiId);
        const payload = res.data?.data ?? res.data ?? null;
        if (payload) setExistingAk02(payload);
      } catch (e) {
        // 404 if none; ignore
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAsesi, apl01Data]);

  // Auto-populate top fields from active assessment
  useEffect(() => {
    (async () => {
      const ua = Array.isArray(userAssessments) ? userAssessments : [];
      const chosen = ua.find((a) => a?.status === "active" || a?.status === "scheduled") || ua[0];
      if (!chosen) return;
      let assesmentDetail = chosen?.assesment || null;
      if (!assesmentDetail && chosen?.assesment_id) {
        try {
          const res = await getAssesmentById(chosen.assesment_id);
          assesmentDetail = res.data?.data ?? null;
        } catch {}
      }
      if (!assesmentDetail) return;
      const units = assesmentDetail?.units || assesmentDetail?.unit_kompetensi || assesmentDetail?.unitKompetensi || [];
      const firstUnit = Array.isArray(units) ? units[0] : (units || {});
      const judulUnit = firstUnit?.judul || firstUnit?.nama || firstUnit?.name || '';
      const kodeUnit = firstUnit?.kode || firstUnit?.code || '';
      const tuk = assesmentDetail?.tuk || assesmentDetail?.lokasi || '';
      const namaAsesor = assesmentDetail?.assesor?.nama_lengkap || assesmentDetail?.assesor?.name || '';
      const tanggalRaw = assesmentDetail?.tanggal_mulai || assesmentDetail?.tanggal_assesment || '';
      const tanggal = tanggalRaw ? String(tanggalRaw).substring(0,10) : '';
      setFormData(prev => ({
        ...prev,
        judulUnit: prev.judulUnit || judulUnit,
        kodeUnit: prev.kodeUnit || kodeUnit,
        tuk: prev.tuk || tuk,
        namaAsesor: prev.namaAsesor || namaAsesor,
        tanggal: prev.tanggal || tanggal,
      }));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(userAssessments)]);

  // Resolve skemaId from userAssessments and fetch schema units
  useEffect(() => {
    const ua = Array.isArray(userAssessments) ? userAssessments : [];
    const chosen = ua.find((a) => a?.status === "active" || a?.status === "scheduled") || ua[0];
    const skemaId = chosen?.assesment?.skema_id || chosen?.skema_id || chosen?.schema_id;
    let sid = chosen?.assesment?.skema_id || chosen?.skema_id || chosen?.schema_id;
    (async () => {
      if (!sid && chosen?.assesment_id) {
        try {
          const res = await getAssesmentById(chosen.assesment_id);
          sid = res.data?.data?.skema_id ?? sid;
        } catch {}
      }
      if (sid && sid !== resolvedSkemaId) {
        setResolvedSkemaId(Number(sid));
      }
    })();
  }, [userAssessments, resolvedSkemaId]);

  useEffect(() => {
    if (!resolvedSkemaId) return;
    (async () => {
      try {
        await fetchCsrfCookie();
        const res = await getApl02ById(Number(resolvedSkemaId));
        const units = Array.isArray(res.data?.data) ? res.data.data : [];
        setSchemaUnits(units);
        // Initialize selections if empty
        setUnitSelections((prev) => {
          const next = { ...prev };
          units.forEach((u) => {
            const key = u.kode_unit || String(u.unit_ke);
            if (!next[key]) {
              next[key] = {
                kompeten: false,
                portfolio_sesuai: false,
                penguatan_evidence_sesuai: false,
                hasil_penguatan_evidence_sesuai: false,
                rekomendasi_belum_kompeten: false,
              };
            }
          });
          return next;
        });
      } catch (e) {
        // ignore; user can still submit non-unit content but API may require units
      }
    })();
  }, [resolvedSkemaId]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUnitChange = (kodeUnit, field, value) => {
    setUnitSelections((prev) => ({
      ...prev,
      [kodeUnit]: {
        ...(prev[kodeUnit] || {}),
        [field]: value,
      },
    }));
  };

  const handleRekomendasiChange = (field, value) => {
    if (field === "alasanKompeten" && value) {
      // Jika pilih Kompeten, uncheck Belum Kompeten
      setFormData((prev) => ({
        ...prev,
        alasanKompeten: true,
        selesaiKompeten: false,
      }));
    } else if (field === "selesaiKompeten" && value) {
      // Jika pilih Belum Kompeten, uncheck Kompeten
      setFormData((prev) => ({
        ...prev,
        alasanKompeten: false,
        selesaiKompeten: true,
      }));
    } else {
      // Jika uncheck
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi form
    const requiredFields = [
      { field: "judulUnit", name: "Judul Unit" },
      { field: "kodeUnit", name: "Kode Unit" },
      { field: "tuk", name: "TUK" },
      { field: "namaAsesor", name: "Nama Asesor" },
      { field: "namaAsesi", name: "Nama Asesi" },
      { field: "tanggal", name: "Tanggal" },
      { field: "waktu", name: "Waktu" },
      { field: "komentar", name: "Alasan/Komentar" },
      { field: "tanggapanAsesi", name: "Tindakan Selanjutnya" },
    ];

    // Cek field yang kosong
    const emptyFields = requiredFields.filter(
      ({ field }) => !formData[field].trim()
    );

    if (emptyFields.length > 0) {
      alert(
        `Harap lengkapi field berikut:\n${emptyFields
          .map((f) => `- ${f.name}`)
          .join("\n")}`
      );
      return;
    }

    // Cek apakah minimal satu unit kompetensi ada yang dicentang (dari schemaUnits)
    const hasAnyUnitChecked = schemaUnits.some((u) => {
      const key = u.kode_unit || String(u.unit_ke);
      const sel = unitSelections[key] || {};
      return (
        sel.kompeten ||
        sel.portfolio_sesuai ||
        sel.penguatan_evidence_sesuai ||
        sel.hasil_penguatan_evidence_sesuai ||
        sel.rekomendasi_belum_kompeten
      );
    });

    if (!hasAnyUnitChecked) {
      alert("Harap centang minimal satu opsi pada Unit Kompetensi");
      return;
    }

    // Cek rekomendasi hasil asesmen (harus pilih salah satu)
    if (!formData.alasanKompeten && !formData.selesaiKompeten) {
      alert(
        "Harap pilih salah satu: Kompeten atau Belum Kompeten pada Rekomendasi hasil Asesmen"
      );
      return;
    }

    // Derive assesment_asesi_id dan skema_id dari userAssessments
    const ua = Array.isArray(userAssessments) ? userAssessments : [];
    const chosen = ua.find((a) => a?.status === "active" || a?.status === "scheduled") || ua[0];
    const assesmentAsesiId = chosen?.id;
    let skemaId = chosen?.assesment?.skema_id || chosen?.skema_id || chosen?.schema_id;

    // Jika perlu, ambil skema_id dari assesment detail
    if (!skemaId && chosen?.assesment_id) {
      try {
        const res = await getAssesmentById(chosen.assesment_id);
        skemaId = res.data?.data?.skema_id ?? skemaId;
      } catch {}
    }

    if (!assesmentAsesiId || !skemaId) {
      alert(
        "Tidak menemukan assesment aktif untuk dikaitkan (assesment_asesi_id/skema_id). Silakan pilih jadwal terlebih dahulu di dashboard atau muat ulang halaman."
      );
      return;
    }

    // Cegah submit ganda jika sudah ada AK-02
    if (existingAk02) {
      const confirmProceed = window.confirm(
        "Data AK-02 sudah ada untuk akun ini. Kirim ulang untuk mengganti/menambah?"
      );
      if (!confirmProceed) return;
    }

    try {
      await fetchCsrfCookie();
      // Build unit_kompetensi array required by API
      const unit_kompetensi = Array.isArray(schemaUnits)
        ? schemaUnits.map((u) => {
            const key = u.kode_unit || String(u.unit_ke);
            const sel = unitSelections[key] || {};
            return {
              unit_ke: Number(u.unit_ke),
              kode_unit: u.kode_unit,
              judul_unit: u.judul_unit,
              kompeten: !!sel.kompeten,
              portfolio_sesuai: !!sel.portfolio_sesuai,
              penguatan_evidence_sesuai: !!sel.penguatan_evidence_sesuai,
              hasil_penguatan_evidence_sesuai: !!sel.hasil_penguatan_evidence_sesuai,
              rekomendasi_belum_kompeten: !!sel.rekomendasi_belum_kompeten,
            };
          })
        : [];
      const rekomendasi = formData.alasanKompeten
        ? "kompeten"
        : formData.selesaiKompeten
        ? "belum_kompeten"
        : undefined;
      const payload = {
        assesment_asesi_id: Number(assesmentAsesiId),
        skema_id: Number(skemaId),
        // flat keys (snake_case) that many Laravel validators expect
        judul_unit: formData.judulUnit,
        kode_unit: formData.kodeUnit,
        tuk: formData.tuk,
        nama_asesor: formData.namaAsesor,
        nama_asesi: formData.namaAsesi,
        tanggal: formData.tanggal,
        waktu: formData.waktu,
        unit_kompetensi,
        rekomendasi,
        komentar: formData.komentar,
        tanggapan_asesi: formData.tanggapanAsesi,
        // keep original form for backward compatibility on server
        form: formData,
      };
      // Log payload for debugging (no files included)
      console.debug("AK-02 submit payload:", payload);
      await submitFormAk02(payload);
      setIsFormSubmitted(true);
      setShowPopup(true);
    } catch (err) {
      const status = err?.response?.status;
      const message = err?.response?.data?.message || err?.message;
      const errors = err?.response?.data?.errors;
      console.error("Gagal submit FR.AK.02 ke server:", { status, message, errors, err });
      try {
        localStorage.setItem(
          "ak02FormData",
          JSON.stringify({ assesment_asesi_id: assesmentAsesiId, skema_id: skemaId, form: formData })
        );
      } catch {}
      let alertMsg = "Gagal mengirim ke server. Data disimpan sementara di perangkat Anda. Coba lagi nanti.";
      if (status) alertMsg += `\nStatus: ${status}`;
      if (message) alertMsg += `\nPesan: ${message}`;
      if (errors && typeof errors === "object") {
        const detail = Object.entries(errors)
          .map(([k, v]) => `- ${k}: ${Array.isArray(v) ? v.join(", ") : String(v)}`)
          .join("\n");
        if (detail) alertMsg += `\nDetail:\n${detail}`;
      }
      alert(alertMsg);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    // Auto redirect ke AK-03 setelah close popup
    setTimeout(() => {
      navigate("/dashboard-asesi/ak-03");
    }, 300);
  };

  const inputStyle = {
    border: "none",
    outline: "none",
    background: "transparent",
    width: "100%",
    fontSize: "12px",
    padding: "0",
  };

  // Popup styles - sama persis kayak AK-01
  const popupOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const popupContainerStyle = {
    backgroundColor: "#f0f0f0",
    borderRadius: "20px",
    padding: "30px 50px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    minWidth: "550px",
    maxWidth: "600px",
    position: "relative",
  };

  const iconContainerStyle = {
    marginBottom: "20px",
  };

  const successIconStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 25px",
    gap: "15px",
  };

  const listLinesStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  };

  const checkCircleStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#FF8C00",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const checkMarkStyle = {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
  };

  const popupTitleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "30px",
    lineHeight: "1.4",
  };

  const okayButtonStyle = {
    backgroundColor: "#FF8C00",
    border: "none",
    fontSize: "14px",
    fontWeight: "600",
    color: "white",
    cursor: "pointer",
    padding: "10px 25px",
    borderRadius: "20px",
    position: "absolute",
    bottom: "20px",
    right: "30px",
    transition: "all 0.2s ease",
  };

  const warningNotificationStyle = {
    position: "fixed",
    top: "20px",
    right: "20px",
    backgroundColor: "#ff6b6b",
    color: "white",
    padding: "15px 20px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    zIndex: 1001,
    fontSize: "14px",
    fontWeight: "bold",
    animation: "slideIn 0.3s ease-out",
  };

  return (
    <div style={{ ...pageContainerStyle }} className="page-container">
      <style>
        {`
          .nav-scrollbar::-webkit-scrollbar {
            height: 5px;
          }
          .nav-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .nav-scrollbar::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 5px;
          }
          .nav-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          
          .form-table {
            border-collapse: separate;
          }
          
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            .page-container {
              padding: 8px !important;
            }
            
            .nav-container {
              max-width: 85% !important;
              padding: 3px 10px !important;
            }
            
            .logo-text {
              font-size: 24px !important;
            }
            
            .content-card {
              padding: 15px !important;
            }
            
            .header-section {
              flex-direction: column !important;
              align-items: center !important;
              text-align: center;
              gap: 10px !important;
            }
            
            .logo-image {
              width: 60px !important;
              height: 60px !important;
            }
            
            .form-table {
              font-size: 11px !important;
            }
            
            .form-table td {
              padding: 6px 8px !important;
            }
            
            .unit-checkboxes {
              flex-direction: column !important;
              gap: 10px !important;
            }
            
            .recommendation-section {
              flex-direction: column !important;
              gap: 15px !important;
            }
            
            .textarea-field {
              height: 80px !important;
              font-size: 10px !important;
            }
            
            .submit-button {
              width: 100% !important;
              text-align: center !important;
            }
            
            .popup-container {
              min-width: 90% !important;
              max-width: 95% !important;
              margin: 0 10px;
              padding: 20px 25px !important;
            }
            
            .warning-notification {
              right: 10px !important;
              left: 10px !important;
              font-size: 12px !important;
            }
          }
          
          @media (max-width: 480px) {
            .logo-container {
              height: 80px !important;
            }
            
            .logo-text {
              font-size: 20px !important;
            }
            
            .content-card {
              padding: 10px !important;
            }
            
            .form-table {
              font-size: 10px !important;
            }
            
            .form-table td {
              padding: 4px 6px !important;
            }
            
            .unit-title {
              font-size: 11px !important;
            }
            
            .checkbox-label {
              font-size: 9px !important;
            }
            
            .textarea-field {
              height: 70px !important;
              font-size: 9px !important;
            }
          }
        `}
      </style>

      {/* Warning Notification */}
      {showWarning && (
        <div style={warningNotificationStyle} className="warning-notification">
          Silakan isi dan kirim formulir AK-02 terlebih dahulu!
        </div>
      )}

      {/* Header Section matching AK-01 design */}
      <div style={headerSectionStyle}>
        <div style={navContainerStyle} className="nav-scrollbar nav-container">
          <NavAsesi activeTab="FR.AK.02" />
        </div>

        <div style={logoContainerStyle} className="logo-container">
          <h1 style={logoTextStyle} className="logo-text">
            MyLSP
          </h1>
        </div>
      </div>

      {/* Content Card */}
      <div style={contentCardStyle} className="content-card">
        {/* Header Section */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "20px",
            marginBottom: "20px",
            paddingBottom: "15px",
            borderBottom: "2px solid #FF8C00",
          }}
          className="header-section"
        >
          <div style={{ flexShrink: 0 }}>
            <img
              src="/src/img/image 12.png"
              alt="LSP Logo"
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "8px",
                objectFit: "contain",
                backgroundColor: "#f8f9fa",
                padding: "4px",
              }}
              className="logo-image"
            />
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                margin: "0 0 5px 0",
                color: "#333",
                textAlign: "center",
              }}
            >
              FR.AK.02
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                margin: "0 0 15px 0",
                color: "#333",
                textAlign: "center",
              }}
            >
              REKAMAN ASESMEN KOMPETENSI
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Form Section - Clean Table Design */}
          <table
            style={{
              width: "100%",
              border: "1px solid #ccc",
              borderCollapse: "collapse",
              fontSize: "12px",
            }}
            className="form-table"
          >
            <tbody>
              <tr>
                <td
                  rowSpan={2}
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "#f8f9fa",
                    fontWeight: "500",
                    verticalAlign: "top",
                    width: "200px",
                  }}
                >
                  <span style={{ fontWeight: "500", color: "#000" }}>
                    Skema Sertifikasi
                  </span>
                  <br />
                  <span style={{ fontSize: "11px", color: "#000" }}>
                    (KODE/OKUPASI/KLASTER)
                  </span>
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "#f8f9fa",
                    fontWeight: "500",
                    textAlign: "center",
                    width: "80px",
                  }}
                >
                  Judul Unit
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "white",
                    width: "20px",
                  }}
                >
                  :
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "white",
                  }}
                >
                  <input
                    type="text"
                    value={formData.judulUnit}
                    onChange={(e) =>
                      handleInputChange("judulUnit", e.target.value)
                    }
                    placeholder="Masukkan judul unit"
                    style={inputStyle}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "#f8f9fa",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  Kode Unit
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "white",
                  }}
                >
                  :
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "white",
                  }}
                >
                  <input
                    type="text"
                    value={formData.kodeUnit}
                    onChange={(e) =>
                      handleInputChange("kodeUnit", e.target.value)
                    }
                    placeholder="Masukkan kode unit"
                    style={inputStyle}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "#f8f9fa",
                    fontWeight: "500",
                  }}
                >
                  TUK
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "#f8f9fa",
                  }}
                ></td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "white",
                  }}
                >
                  :
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "white",
                  }}
                >
                  <input
                    type="text"
                    value={formData.tuk}
                    onChange={(e) => handleInputChange("tuk", e.target.value)}
                    placeholder="Masukkan TUK"
                    style={inputStyle}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "#f8f9fa",
                    fontWeight: "500",
                  }}
                >
                  Nama Asesor
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "#f8f9fa",
                  }}
                ></td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "white",
                  }}
                >
                  :
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "white",
                  }}
                >
                  <input
                    type="text"
                    value={formData.namaAsesor}
                    onChange={(e) =>
                      handleInputChange("namaAsesor", e.target.value)
                    }
                    placeholder="Masukkan nama asesor"
                    style={inputStyle}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "#f8f9fa",
                    fontWeight: "500",
                  }}
                >
                  Nama Asesi
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "#f8f9fa",
                  }}
                ></td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "white",
                  }}
                >
                  :
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "white",
                  }}
                >
                  <input
                    type="text"
                    value={formData.namaAsesi}
                    onChange={(e) =>
                      handleInputChange("namaAsesi", e.target.value)
                    }
                    placeholder="Masukkan nama asesi"
                    style={inputStyle}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "#f8f9fa",
                    fontWeight: "500",
                  }}
                >
                  Tanggal
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "#f8f9fa",
                  }}
                ></td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "white",
                  }}
                >
                  :
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "white",
                  }}
                >
                  <input
                    type="date"
                    value={formData.tanggal}
                    onChange={(e) =>
                      handleInputChange("tanggal", e.target.value)
                    }
                    style={inputStyle}
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "#f8f9fa",
                    fontWeight: "500",
                  }}
                >
                  Waktu
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "#f8f9fa",
                  }}
                ></td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "white",
                  }}
                >
                  :
                </td>
                <td
                  style={{
                    border: "1px solid #ccc",
                    padding: "8px 12px",
                    backgroundColor: "white",
                  }}
                >
                  <input
                    type="time"
                    value={formData.waktu}
                    onChange={(e) => handleInputChange("waktu", e.target.value)}
                    style={inputStyle}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Unit Kompetensi Section */}
          <div style={{ marginTop: "30px" }}>
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px 15px",
                backgroundColor: "white",
                marginBottom: "15px",
              }}
            >
              <p
                style={{
                  fontSize: "12px",
                  textAlign: "center",
                  margin: "0",
                  color: "#666",
                }}
              >
                Beri tanda centang (✔) dikolom yang sesuai untuk mencerminkan
                bukti yang sesuai untuk setiap Unit Kompetensi.
              </p>
            </div>

            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px 0",
                backgroundColor: "white",
                marginBottom: "15px",
              }}
            >
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "bold",
                  margin: "0",
                }}
              >
                Unit Kompetensi
              </h3>
            </div>

            {(Array.isArray(schemaUnits) ? schemaUnits : []).map((unit, index) => (
              <div
                key={unit.kode_unit || unit.unit_ke || index}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "15px",
                  marginBottom: "15px",
                  backgroundColor: "white",
                }}
              >
                <div style={{ marginBottom: "10px" }}>
                  <label
                    style={{ fontSize: "12px", fontWeight: "500" }}
                    className="unit-title"
                  >
                    {unit.judul_unit || unit.title || `Unit ${unit.unit_ke}`}
                  </label>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                  className="unit-checkboxes"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={!!(unitSelections[unit.kode_unit || String(unit.unit_ke)]?.kompeten)}
                      onChange={(e) => handleUnitChange(unit.kode_unit || String(unit.unit_ke), "kompeten", e.target.checked)}
                    />
                    <span style={{ fontSize: "12px" }}>Kompeten</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      minWidth: "200px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={!!(unitSelections[unit.kode_unit || String(unit.unit_ke)]?.portfolio_sesuai)}
                      onChange={(e) => handleUnitChange(unit.kode_unit || String(unit.unit_ke), "portfolio_sesuai", e.target.checked)}
                    />
                    <span style={{ fontSize: "12px" }}>Portofolio sesuai</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={!!(unitSelections[unit.kode_unit || String(unit.unit_ke)]?.penguatan_evidence_sesuai)}
                      onChange={(e) => handleUnitChange(unit.kode_unit || String(unit.unit_ke), "penguatan_evidence_sesuai", e.target.checked)}
                    />
                    <span style={{ fontSize: "12px" }}>Penguatan Evidence sesuai</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={!!(unitSelections[unit.kode_unit || String(unit.unit_ke)]?.hasil_penguatan_evidence_sesuai)}
                      onChange={(e) => handleUnitChange(unit.kode_unit || String(unit.unit_ke), "hasil_penguatan_evidence_sesuai", e.target.checked)}
                    />
                    <span style={{ fontSize: "12px" }}>Hasil Penguatan Evidence sesuai</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={!!(unitSelections[unit.kode_unit || String(unit.unit_ke)]?.rekomendasi_belum_kompeten)}
                      onChange={(e) => handleUnitChange(unit.kode_unit || String(unit.unit_ke), "rekomendasi_belum_kompeten", e.target.checked)}
                    />
                    <span style={{ fontSize: "12px" }}>Rekomendasi Belum Kompeten</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Rekomendasi Hasil Assessment */}
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                marginTop: "20px",
                backgroundColor: "white",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
                className="recommendation-section"
              >
                {/* Left Section - Rekomendasi */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "15px",
                      paddingBottom: "10px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    <label style={{ fontSize: "12px", fontWeight: "500" }}>
                      Rekomendasi hasil Asesmen
                    </label>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <span style={{ fontSize: "11px" }}>Kompeten</span>
                        <input
                          type="checkbox"
                          checked={formData.alasanKompeten}
                          onChange={(e) =>
                            handleRekomendasiChange(
                              "alasanKompeten",
                              e.target.checked
                            )
                          }
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <span style={{ fontSize: "11px" }}>Belum Kompeten</span>
                        <input
                          type="checkbox"
                          checked={formData.selesaiKompeten}
                          onChange={(e) =>
                            handleRekomendasiChange(
                              "selesaiKompeten",
                              e.target.checked
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <textarea
                    placeholder="Tindak lanjut yang dibutuhkan
(masukan pekrjaan tambahan dan asesmen yang diperlukan untuk mencapai
kompetensi) :"
                    value={formData.komentar}
                    onChange={(e) =>
                      handleInputChange("komentar", e.target.value)
                    }
                    style={{
                      width: "100%",
                      height: "100px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      padding: "8px",
                      fontSize: "11px",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                    className="textarea-field"
                  />
                </div>

                {/* Right Section - Tindakan Selanjutnya */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      marginBottom: "15px",
                      paddingBottom: "10px",
                      borderBottom: "1px solid #eee",
                    }}
                  >
                    <label style={{ fontSize: "12px", fontWeight: "500" }}>
                      Tindakan Selanjutnya
                    </label>
                  </div>

                  <textarea
                    placeholder="Komentar / Observasi oleh Asesor"
                    value={formData.tanggapanAsesi}
                    onChange={(e) =>
                      handleInputChange("tanggapanAsesi", e.target.value)
                    }
                    style={{
                      width: "100%",
                      height: "100px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      padding: "8px",
                      fontSize: "11px",
                      resize: "vertical",
                      boxSizing: "border-box",
                    }}
                    className="textarea-field"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div
              style={{ textAlign: "right", marginTop: "20px" }}
              className="submit-button"
            >
              <button
                type="submit"
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "12px 40px",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,123,255,0.3)",
                }}
              >
                Kirim Jawaban
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Success Popup - sama persis kayak AK-01 */}
      {showPopup && (
        <div style={popupOverlayStyle} onClick={handleClosePopup}>
          <div
            style={popupContainerStyle}
            onClick={(e) => e.stopPropagation()}
            className="popup-container"
          >
            <div style={iconContainerStyle}>
              <div style={successIconStyle}>
                {/* Check mark circle - di atas */}
                <div style={checkCircleStyle}>
                  <div style={checkMarkStyle}>✓</div>
                </div>

                {/* List lines (3 horizontal lines) - di bawah */}
                <div style={listLinesStyle}>
                  <div
                    style={{
                      width: "80px",
                      height: "10px",
                      backgroundColor: "#FF8C00",
                      borderRadius: "5px",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "120px",
                      height: "10px",
                      backgroundColor: "#FF8C00",
                      borderRadius: "5px",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "140px",
                      height: "10px",
                      backgroundColor: "#FF8C00",
                      borderRadius: "5px",
                    }}
                  ></div>
                </div>
              </div>
            </div>

            <div style={popupTitleStyle}>Jawaban anda telah direkam!</div>

            <button
              style={okayButtonStyle}
              onClick={handleClosePopup}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#e67e00")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#FF8C00")}
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AK02;