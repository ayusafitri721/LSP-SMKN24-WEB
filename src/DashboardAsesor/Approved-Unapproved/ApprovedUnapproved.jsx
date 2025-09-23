import React, { useState, useEffect, use } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAssesment } from "../../context/AssesmentContext";
import {
  api,
  getApl02ByAssesi,
  getFormAk05ByAssesi,
  getFormIa01ByAssesi,
} from "../../api/api";

// Komponen Utama
const ApprovedUnapproved = () => {
  const nis = useParams().id;
  const { assesmentAsesis } = useAssesment();
  const navigate = useNavigate();
  const [bukti, setBukti] = useState(null);
  const selectedAsesi = assesmentAsesis.find((a) => a?.asesi.id == nis);
  const [formIa01Data, setFormIa01Data] = useState(null);
  const [formAk01Data, setFormAk01Data] = useState(null);
  const [formAk05Data, setFormAk05Data] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [akisDisabled, setAkisDisabled] = useState(false);
  useEffect(() => {
    if (!selectedAsesi) return;
    const fetchBukti = async () => {
      if (!selectedAsesi) return;

      try {
        const res = await getApl02ByAssesi(selectedAsesi.asesi.id);
        setBukti(res.data.data?.[0]?.ttd_assesor);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBukti();
  }, [selectedAsesi]);

  useEffect(() => {
    const fetchAk01 = async () => {
      if (!nis) return;
      try {
        const res = await api.get(`/assesment/formak01/${nis}`);
        setFormAk01Data(res.data.data[0]);
        setAkisDisabled(!!res.data.data[0]);
        console.log(formAk01Data);
      } catch (err) {
        console.error("Failed fetch AK01:", err);
      }
    };
    fetchAk01();
    const fetchIa01 = async () => {
      if (!selectedAsesi) return;
      try {
        const res = await getFormIa01ByAssesi(selectedAsesi.asesi.id);
        setFormIa01Data(res.data.data?.[0] || null);
        setIsDisabled(!!res.data.data?.[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchIa01();
  }, [bukti]);

  useEffect(() => {
    if (!nis) return;
    const fetchAk01 = async () => {
      try {
        const res = await api.get(`/assesment/formak01/${nis}`);
        setFormAk01Data(res.data.data[0]);
        setAkisDisabled(!!res.data.data[0]);
        console.log(formAk01Data);
      } catch (err) {
        console.error("Failed fetch AK01:", err);
      }
    };
    fetchAk01();
    
    const fetchAk05 = async () => {
      if (!nis) return;
      try {
        const res = await getFormAk05ByAssesi(nis);
        setFormAk05Data(res);
      } catch (error) {
        console.error("Failed fetch AK05:", error);
      }
    };
    fetchAk05();
  }, [bukti]);
  // State untuk status persetujuan setiap formulir
  const [formulirStatus, setFormulirStatus] = useState([
    {
      code: "FR.APL.02",
      title: "ASESMEN MANDIRI",
      status: bukti || null,
      route: "/asesmen-mandiri",
    },
    {
      code: "FR.AK.01",
      title: "PERSETUJUAN ASESMEN DAN KERAHASIAAN",
      status: null,
      route: "/persetujuan-asesmen",
    },
    {
      code: "FR.IA.01.CL",
      title: "CEKLIS OBSERVASI AKTIVITAS DI TEMPAT KERJA/SIMULASI",
      status: null,
      route: "/ceklis-observasi",
    },
    {
      code: "FR.AK.02",
      title: "REKAMAN ASESMEN KOMPETENSI",
      status: null,
      route: "/rekaman-asesmen",
    },
    {
      code: "FR.AK.05",
      title: "LAPORAN ASESMEN",
      status: null,
      route: "/laporan-asesmen",
    },
  ]);
  const [allApproved, setAllApproved] = useState(false);
  const asesiName =
    selectedAsesi?.asesi.nama_lengkap || "NAMA ASESI TIDAK DITEMUKAN";

  // Memperbarui status 'allApproved' ketika ada perubahan pada 'formulirStatus'
  useEffect(() => {
    const isApproved = formulirStatus.every(
      (item) => item.status === "approved"
    );
    setAllApproved(isApproved);
  }, [formulirStatus]);

  useEffect(() => {
    if (bukti) {
      setFormulirStatus((prev) =>
        prev.map((form) =>
          form.code === "FR.APL.02" ? { ...form, status: bukti } : form
        )
      );
    }
    if (formIa01Data) {
      setFormulirStatus((prev) =>
        prev.map((form) =>
          form.code === "FR.IA.01.CL" ? { ...form, status: "approved" } : form
        )
      );
    }
    if (formAk01Data) {
      setFormulirStatus((prev) =>
        prev.map((form) =>
          form.code === "FR.AK.01" ? { ...form, status: "approved" } : form
        )
      );
    }
    if (formAk05Data) {
      setFormulirStatus((prev) =>
        prev.map((form) =>
          form.code === "FR.AK.05" ? { ...form, status: "approved" } : form
        )
      );
    }
  }, [bukti, formIa01Data]);

  // Handler untuk klik tombol Approve/Unapprove
  const handleApproveUnapprove = (index, status) => {
    setFormulirStatus((prevStatus) => {
      const newStatus = [...prevStatus];
      newStatus[index].status = status;
      return newStatus;
    });
  };

  // Handler untuk navigasi ke form detail
  const handleNavigateToForm = (formulir) => {
    if (formulir.code === "FR.IA.01.CL") return;
    navigate(`/dashboard-asesor${formulir.route}/${nis}`);
  };

  // Handler untuk tombol Rekomendasikan - WORKING VERSION
  const handleRecommend = () => {
    if (allApproved) {
      // Langsung navigasi ke halaman rekomendasi
      navigate(`/dashboard-asesor/rekomendasi/${nis}`);
    } else {
      alert("Anda harus menyetujui semua formulir terlebih dahulu.");
    }
  };

  // Fungsi untuk mendapatkan style yang sama untuk setiap card (warna biru solid)
  const getFormItemStyle = () => {
    return {
      backgroundColor: "#2C94FF",
      borderRadius: "12px",
      padding: "0",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      overflow: "hidden",
      transition: "transform 0.2s ease",
      cursor: "pointer",
      marginBottom: "8px",
      width: "100%",
    };
  };

  // Styling Object
  const pageContainerStyle = {
    backgroundColor: "white",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    padding: "15px",
  };

  const headerSectionStyle = {
    backgroundImage:
      "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "0 0 40px 40px",
    overflow: "hidden",
    marginBottom: "0",
  };

  const logoContainerStyle = {
    height: "180px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
  };

  const logoTextStyle = {
    color: "white",
    fontSize: "48px",
    fontWeight: "bold",
    margin: 0,
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    letterSpacing: "2px",
  };

  const contentCardStyle = {
    backgroundColor: "white",
    borderRadius: "0 0 15px 15px",
    padding: "30px 5px 15px 5px",
    boxShadow: "none",
    marginTop: "0",
    border: "none",
  };

  const subHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: "15px 20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    margin: "0 auto",
    maxWidth: "100%",
    borderRadius: "12px",
    marginBottom: "10px",
  };

  const asesiNameStyle = {
    fontSize: "18px",
    fontWeight: "600",
    margin: 0,
    color: "#333",
  };

  const recommendButtonStyle = {
    color: "white",
    border: "none",
    borderRadius: "25px",
    padding: "12px 24px",
    fontSize: "14px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  };

  const formsListContainerStyle = {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    margin: "0 auto",
    maxWidth: "100%",
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const formContentStyle = {
    flex: 1,
    padding: "16px 20px",
    color: "white",
    cursor: "pointer",
  };

  const formCodeStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "white",
    margin: 0,
  };

  const formTitleStyle = {
    fontSize: "12px",
    color: "white",
    margin: "2px 0 0 0",
    opacity: 0.9,
  };

  const formNisStyle = {
    fontSize: "11px",
    color: "white",
    margin: "2px 0 0 0",
    opacity: 0.8,
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "6px",
    padding: "16px 20px",
  };

  const actionButtonStyle = {
    color: "white",
    border: "none",
    borderRadius: "9999px",
    padding: "8px 16px",
    fontSize: "13px",
    fontWeight: "600",
    transition: "all 0.3s ease",
    minWidth: "80px",
  };

  return (
    <div style={pageContainerStyle}>
      {/* Header dengan background gambar */}
      <div style={headerSectionStyle}>
        <div style={logoContainerStyle}>
          <h1 style={logoTextStyle}>MyLSP</h1>
        </div>
      </div>

      {/* Content card yang membungkus sub-header dan forms list */}
      <div style={contentCardStyle}>
        {/* Sub-header dengan nama asesi dan tombol Rekomendasikan */}
        <div style={subHeaderStyle}>
          <h2 style={asesiNameStyle}>{asesiName}</h2>
          <button
            style={{
              ...recommendButtonStyle,
              backgroundColor: allApproved ? "#33b069" : "#f97316",
              cursor: allApproved ? "pointer" : "not-allowed",
              opacity: allApproved ? 1 : 0.6,
            }}
            onClick={handleRecommend}
            disabled={!allApproved}
          >
            Rekomendasikan
          </button>
        </div>

        <div style={formsListContainerStyle}>
          {formulirStatus.map((formulir, index) => (
            <div key={index} style={getFormItemStyle()}>
              <div
                style={formContentStyle}
                onClick={() => handleNavigateToForm(formulir)}
              >
                <p style={formCodeStyle}>{formulir.code}</p>
                <p style={formTitleStyle}>{formulir.title}</p>
                <p style={formNisStyle}>NIS: {nis}</p>
              </div>
              <div style={buttonContainerStyle}>
                <button
                  style={{
                    ...actionButtonStyle,
                    backgroundColor:
                      formulir.status === "approved" ? "#FF8303" : "#6c757d",
                    cursor:
                      formulir.status === "approved"
                        ? "not-allowed"
                        : "pointer",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleApproveUnapprove(index, "approved");
                  }}
                  disabled={true} // Disable jika FR.IA.01.CL dan isDisabled true
                >
                  Approve
                </button>
                <button
                  style={{
                    ...actionButtonStyle,
                    backgroundColor:
                      formulir.status === "rejected" ? "#dc3545" : "#6c757d",
                    cursor:
                      formulir.status === "rejected"
                        ? "not-allowed"
                        : "pointer",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleApproveUnapprove(index, "unapproved");
                  }}
                  disabled={
                    formulir.code === "FR.IA.01.CL" ? isDisabled : false
                  } // Disable jika FR.IA.01.CL dan isDisabled true
                >
                  Unapprove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Status indicator untuk debugging */}
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          Status:{" "}
          {formulirStatus.filter((item) => item.status === "approved").length}{" "}
          dari {formulirStatus.length} formulir disetujui
          {allApproved && (
            <div
              style={{ color: "#33b069", fontWeight: "bold", marginTop: "5px" }}
            >
              ✅ Semua formulir sudah disetujui! Tombol Rekomendasikan dapat
              diklik.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApprovedUnapproved;
