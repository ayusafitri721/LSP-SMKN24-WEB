import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Check } from "lucide-react";
import {
  getApl02ById,
  getApl02ByAssesi,
  submitFormIa01,
  getFormIa01ByAssesi,
} from "../../api/api";
import { useAssesment } from "../../context/AssesmentContext";

const pageContainerStyle = {
  backgroundColor: "white",
  fontFamily: "Arial, sans-serif",
  padding: "15px",
  minHeight: "100vh",
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
  height: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "20px",
  marginBottom: "20px",
};

const logoTextStyle = {
  color: "white",
  fontSize: "56px",
  fontWeight: "bold",
  margin: 0,
  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  letterSpacing: "1px",
};

const contentCardStyle = {
  backgroundColor: "white",
  borderRadius: "0 0 15px 15px",
  padding: "30px",
  boxShadow: "none",
  marginTop: "0",
  border: "none",
};

const headerSectionStyle2 = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginBottom: "20px",
  paddingBottom: "10px",
  borderBottom: "2px solid #FF8C00",
};

const logoContainer2Style = {
  flexShrink: 0,
};

const headerContentStyle = {
  flex: 1,
};

const titleStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0 0 5px 0",
  color: "#333",
  textAlign: "center",
};

const subtitleStyle = {
  fontSize: "16px",
  fontWeight: "bold",
  margin: "0 0 15px 0",
  color: "#333",
  textAlign: "center",
};

const instructionBoxStyle = {
  backgroundColor: "#F4D5A7",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "25px",
  height: "fit-content",
};

const instructionTitleStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  marginBottom: "15px",
  color: "#333",
};

const instructionListStyle = {
  listStyle: "disc",
  paddingLeft: "20px",
  margin: 0,
};

const instructionItemStyle = {
  fontSize: "12px",
  color: "#333",
  marginBottom: "10px",
  lineHeight: "1.4",
};

const instructionSectionStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 300px",
  gap: "30px",
  alignItems: "flex-start",
  marginBottom: "25px",
};

const mainContentStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "30px",
  alignItems: "flex-start",
};

const leftContentStyle = {
  display: "flex",
  flexDirection: "column",
};

const elementTitleStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  marginBottom: "15px",
  color: "#333",
};

const criteriaListStyle = {
  listStyle: "disc",
  paddingLeft: "20px",
  marginBottom: "15px",
};

const criteriaItemStyle = {
  fontSize: "12px",
  color: "#333",
  marginBottom: "15px",
  lineHeight: "1.4",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  width: "100%",
};

const checkboxGroupStyle = {
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  alignItems: "center",
  minWidth: "120px",
};

const checkboxLabelStyle = {
  display: "flex",
  alignItems: "center",
  gap: "5px",
  fontSize: "12px",
  color: "#333",
  cursor: "pointer",
};

const checkboxStyle = {
  width: "16px",
  height: "16px",
  cursor: "pointer",
};

const kelompokPekerjaanStyle = {
  border: "2px solid #333",
  borderRadius: "8px",
  padding: "20px",
  height: "fit-content",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
};

const kelompokHeaderStyle = {
  fontSize: "14px",
  fontWeight: "bold",
  marginBottom: "15px",
  color: "#333",
};

const kelompokListStyle = {
  listStyle: "decimal",
  paddingLeft: "20px",
  margin: 0,
};

const kelompokItemStyle = {
  fontSize: "12px",
  color: "#333",
  marginBottom: "5px",
  lineHeight: "1.3",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  marginTop: "30px",
  width: "100%",
};

const approveButtonStyle = {
  backgroundColor: "white",
  color: "#333",
  border: "1px solid #ccc",
  borderRadius: "25px",
  padding: "12px 30px",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  minWidth: "120px",
  transition: "all 0.2s ease",
};

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
  padding: "10px",
};

const CeklisObservasi = () => {
  const id = useParams().id;
  const navigate = useNavigate();
  const { assesmentAsesis, assesments } = useAssesment();
  const [assesidata, setAssesidata] = useState(null);
  const [apl02, setApl02] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    judulUnit: "",
    nomorUnit: "",
    kodeUnit: "",
    judulUnitKompetensi: "",
  });
  const [formIa01Data, setFormIa01Data] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const [assessmentData, setAssessmentData] = useState({});
  const [textAssessments, setTextAssessments] = useState({});

  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showRejectionModal, setShowRejectionModal] = useState(false);

  // Derive selected assessment and schema from context
  const selectedAssesmenAsesi = assesmentAsesis.find((a) => a?.asesi?.id == id);
  console.log("selectedAssesmenAsesi", selectedAssesmenAsesi);
  const selectedAssesment = assesments.find(
    (a) => a.id == selectedAssesmenAsesi?.assesment_id
  );

  useEffect(() => {
    const fetchBukti = async () => {
      if (!id) return;

      try {
        const res = await getApl02ByAssesi(id);
        setAssesidata(res.data);
        console.log("Assesi Data:", res.data.data[0]);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch assesi data");
      }
    };
    fetchBukti();
  }, [id]);

  useEffect(() => {
    const fetchApl02 = async () => {
      // Use schema id from selected assessment; assesidata may not contain skema_id
      if (!selectedAssesment?.schema?.id) return;

      try {
        const res = await getApl02ById(selectedAssesment.schema.id);
        setApl02(res.data);
        console.log("APL02 Data:", res.data);

        // Prefill header form fields from schema information
        setFormData((prev) => ({
          ...prev,
          judulUnit: selectedAssesment?.schema?.judul_skema || "",
          nomorUnit: selectedAssesment?.schema?.nomor_skema || "",
        }));
      } catch (err) {
        console.error("Error fetching APL-02:", err);
        setError("Failed to fetch APL-02 data");
      }
    };

    fetchApl02();
  }, [selectedAssesment?.schema?.id]);
  console.log("selected assesmen", selectedAssesment);

  useEffect(() => {
    const fetchFormIa01 = async () => {
      try {
        const res = await getFormIa01ByAssesi(id);
        console.log("Respons API Form IA01:", res.data); // Log respons API

        // Jika IA ditemukan, kunci form. Tidak digunakan untuk isi elemen/KUK.
        if (res.data.success && res.data.data.length > 0) {
          const found = res.data.data[0];
          setFormIa01Data(found);
          setIsDisabled(true);
        }
      } catch (err) {
        console.error("Error fetching Form IA01:", err);
      }
    };

    fetchFormIa01();
  }, [id]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSKKNIChange = (unitIndex, elemenIndex, kukId, value) => {
    if (isDisabled) return; // Jangan ubah jika form *disabled*
    const key = `${unitIndex}_${elemenIndex}_${kukId}`;
    setAssessmentData((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        skkni: value,
      },
    }));
  };

  const handleTextAssessmentChange = (unitIndex, elemenIndex, kukId, value) => {
    if (isDisabled) return; // Jangan ubah jika form *disabled*
    const key = `${unitIndex}_${elemenIndex}_${kukId}`;
    setTextAssessments((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmitForm = async () => {
    if (!assesidata || !apl02) {
      setError("Missing required data");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const assesmentAssesiId = assesidata?.data[0]?.id;
      if (!assesmentAssesiId) {
        throw new Error("Missing assesment_asesi_id");
      }

      // Prepare submissions data - DIUBAH untuk struktur data baru
      const submissions = apl02.data.units.map((unit, unitIndex) => {
        const elemenArray = unit.elements.map((elemen) => {
          const kukArray = elemen.kriteria_untuk_kerja.map((kuk) => {
            const key = `${unitIndex}_${elemen.elemen_index}_${kuk.id}`;
            const assessmentInfo = assessmentData[key] || {};
            const textAssessment = textAssessments[key] || "";

            return {
              kuk_id: kuk.id,
              skkni: assessmentInfo.skkni === "ya" ? "ya" : "tidak",
              teks_penilaian: textAssessment,
            };
          });

          return {
            elemen_id: elemen.id,
            kuk: kukArray,
          };
        });

        return {
          unit_ke: unit.unit_ke,
          kode_unit: unit.kode_unit,
          elemen: elemenArray,
        };
      });

      // Client-side validation to align with backend rules
      for (const [uIdx, unit] of submissions.entries()) {
        if (!Array.isArray(unit.elemen) || unit.elemen.length === 0) {
          throw new Error(`Data elemen wajib diisi untuk setiap submission (unit index ${uIdx}).`);
        }
        for (const [eIdx, el] of unit.elemen.entries()) {
          if (!el.elemen_id) {
            throw new Error(`ID elemen wajib diisi untuk setiap elemen (unit ${uIdx}, elemen ${eIdx}).`);
          }
          if (!Array.isArray(el.kuk) || el.kuk.length === 0) {
            throw new Error(`Data KUK wajib diisi untuk setiap elemen (unit ${uIdx}, elemen ${eIdx}).`);
          }
          for (const [kIdx, k] of el.kuk.entries()) {
            if (!k.kuk_id) {
              throw new Error(`ID KUK wajib diisi (unit ${uIdx}, elemen ${eIdx}, kuk ${kIdx}).`);
            }
            if (k.skkni !== "ya" && k.skkni !== "tidak") {
              throw new Error(`SKKNI hanya boleh bernilai "ya" atau "tidak" (unit ${uIdx}, elemen ${eIdx}, kuk ${kIdx}).`);
            }
            if (typeof k.teks_penilaian !== "string") {
              throw new Error(`Teks penilaian harus berupa teks (unit ${uIdx}, elemen ${eIdx}, kuk ${kIdx}).`);
            }
          }
        }
      }

      const requestBody = {
        assesment_asesi_id: assesmentAssesiId,
        submissions: submissions,
      };

      console.log("Submitting IA01 data:", requestBody);

      const response = await submitFormIa01(requestBody);
      console.log("IA01 submission successful:", response.data);

      setShowApprovalModal(true);
    } catch (error) {
      console.error("Error submitting IA01:", error);
      // Tampilkan pesan error dari backend jika ada, kalau tidak pakai pesan dari client-side validation
      setError(
        error?.response?.data?.message ||
          error?.response?.data?.errors ||
          error?.message ||
          "Failed to submit form"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = () => {
    handleSubmitForm();
  };

  const handleReject = () => {
    setShowRejectionModal(true);
  };

  const handleModalOke = () => {
    setShowApprovalModal(false);
    navigate("/dashboard-asesor/lembar-jawaban/0893923923");
  };

  const handleRejectionOke = () => {
    setShowRejectionModal(false);
    navigate("/dashboard-asesor/approved-unapproved/08939239239");
  };

  // Fungsi untuk render KUK checkboxes - DIUBAH untuk struktur data baru
  const renderKUKCheckboxes = (unit, unitIndex, elemen, elemenIndex) => {
    if (!elemen || !elemen.kriteria_untuk_kerja) return null;

    return elemen.kriteria_untuk_kerja.map((kuk) => {
      const key = `${unitIndex}_${elemenIndex}_${kuk.id}`;
      const currentAssessment = assessmentData[key] || {};
      const currentTextAssessment = textAssessments[key] || "";

      return (
        <div key={kuk.id} style={{ marginBottom: "15px" }}>
          <div style={criteriaItemStyle} className="criteria-item">
            <span>
              • {kuk.urutan} {kuk.deskripsi_kuk}
            </span>
            <div style={checkboxGroupStyle} className="checkbox-group">
              <label style={checkboxLabelStyle}>
                <input
                  type="radio"
                  name={`kuk_${key}`}
                  style={checkboxStyle}
                  checked={currentAssessment.skkni === "ya"}
                  onChange={() =>
                    handleSKKNIChange(unitIndex, elemenIndex, kuk.id, "ya")
                  }
                  disabled={isDisabled} // Disable jika form *disabled*
                />
                Ya
              </label>
              <label style={checkboxLabelStyle}>
                <input
                  type="radio"
                  name={`kuk_${key}`}
                  style={checkboxStyle}
                  checked={currentAssessment.skkni === "tidak"}
                  onChange={() =>
                    handleSKKNIChange(unitIndex, elemenIndex, kuk.id, "tidak")
                  }
                  disabled={isDisabled} // Disable jika form *disabled*
                />
                Tidak
              </label>
            </div>
          </div>

          {/* Tambahkan textarea untuk penilaian lanjut per KUK */}
          <textarea
            placeholder={`Penilaian lanjut untuk KUK ${kuk.urutan}...`}
            style={{
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px",
              fontSize: "12px",
              minHeight: "50px",
              resize: "vertical",
              fontFamily: "Arial, sans-serif",
              outline: "none",
            }}
            value={currentTextAssessment}
            onChange={(e) =>
              handleTextAssessmentChange(
                unitIndex,
                elemenIndex,
                kuk.id,
                e.target.value
              )
            }
            disabled={isDisabled} // Disable jika form *disabled*
          />
        </div>
      );
    });
  };

  // Fungsi untuk render semua unit dan elemen - DIUBAH untuk struktur data baru
  const renderUnitBoxes = () => {
    if (
      !apl02 ||
      !apl02.data ||
      !apl02.data.units ||
      apl02.data.units.length === 0
    ) {
      return <div>Loading...</div>;
    }

    return apl02.data.units.map((unit, unitIndex) => (
      <div key={unit.id}>
        {/* Unit Kompetensi Table untuk setiap unit */}
        <table
          style={{
            width: "100%",
            marginBottom: "20px",
            fontSize: "12px",
            borderCollapse: "collapse",
          }}
          className="data-table"
        >
          <tbody>
            <tr>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  backgroundColor: "#f8f9fa",
                  fontWeight: "bold",
                  width: "150px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                Unit Kompetensi {unit.unit_ke}
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className="table-input-row"
                  >
                    <span
                      style={{
                        minWidth: "80px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      Kode Unit
                    </span>
                    <span style={{ margin: "0 8px" }}>:</span>
                    <input
                      type="text"
                      style={{
                        flex: 1,
                        padding: "4px 8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "12px",
                      }}
                      className="input-field"
                      value={unit.kode_unit}
                      readOnly
                    />
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className="table-input-row"
                  >
                    <span
                      style={{
                        minWidth: "80px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      Judul Unit
                    </span>
                    <span style={{ margin: "0 8px" }}>:</span>
                    <input
                      type="text"
                      style={{
                        flex: 1,
                        padding: "4px 8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "12px",
                      }}
                      className="input-field"
                      value={unit.judul_unit}
                      readOnly
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Render elemen untuk unit ini */}
        <div style={leftContentStyle}>
          {unit.elements.map((elemen) => (
            <div
              key={elemen.id}
              style={{
                border: "2px solid #333",
                borderRadius: "8px",
                padding: "20px",
                marginBottom: "10px",
              }}
              className="element-box"
            >
              <div style={elementTitleStyle} className="element-title">
                Elemen {elemen.elemen_index}: {elemen.nama_elemen}
              </div>
              <div style={elementTitleStyle} className="element-title">
                Kriteria Untuk Kerja
              </div>

              <div style={criteriaListStyle}>
                {renderKUKCheckboxes(
                  unit,
                  unitIndex,
                  elemen,
                  elemen.elemen_index
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    ));
  };

  if (error) {
    return (
      <div style={pageContainerStyle}>
        <div style={{ ...contentCardStyle, textAlign: "center", color: "red" }}>
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div style={pageContainerStyle} className="page-container">
      {/* RESPONSIVE CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .page-container { padding: 10px !important; }
            .content-card { padding: 20px !important; }
            .logo-text { font-size: 36px !important; }
            .logo-container { height: 150px !important; margin-top: 15px !important; margin-bottom: 15px !important; }
            .header-section2 { flex-direction: column !important; text-align: center !important; align-items: center !important; gap: 15px !important; }
            .logo-container2 { align-self: center !important; }
            .title-text { font-size: 14px !important; }
            .subtitle-text { font-size: 13px !important; }
            .data-table { font-size: 11px !important; }
            .data-table td { padding: 8px !important; }
            .input-field { font-size: 11px !important; padding: 3px 6px !important; min-width: 0 !important; }
            .table-input-row { flex-wrap: wrap !important; gap: 5px !important; }
            .table-input-row span { min-width: auto !important; }
            .table-input-row input { min-width: 150px !important; flex: 1 !important; }
            .instruction-section { grid-template-columns: 1fr !important; gap: 20px !important; }
            .instruction-box { padding: 15px !important; margin-bottom: 15px !important; }
            .instruction-title { font-size: 13px !important; }
            .instruction-item { font-size: 11px !important; }
            .kelompok-pekerjaan { padding: 15px !important; }
            .kelompok-header { font-size: 13px !important; }
            .kelompok-item { font-size: 11px !important; }
            .main-content { grid-template-columns: 1fr !important; gap: 20px !important; }
            .element-box { padding: 15px !important; margin-bottom: 15px !important; }
            .element-title { font-size: 13px !important; }
            .criteria-item { flex-direction: column !important; align-items: flex-start !important; gap: 10px !important; }
            .checkbox-group { gap: 15px !important; min-width: auto !important; }
            .checkbox-label { font-size: 11px !important; }
            .pencapaian-controls { align-self: flex-start !important; width: 100% !important; }
            .pencapaian-checkboxes { gap: 20px !important; }
            .tanggapan-label { font-size: 11px !important; }
            .button-container { flex-direction: column !important; gap: 10px !important; margin-top: 20px !important; }
            .approve-button { width: 100% !important; min-width: auto !important; padding: 12px 20px !important; font-size: 13px !important; }
            .modal-container { min-width: 90% !important; margin: 10px !important; padding: 20px 25px !important; }
            .modal-header { margin-bottom: 20px !important; }
            .modal-icon { width: 40px !important; height: 40px !important; }
            .modal-title { font-size: 18px !important; padding-top: 2px !important; }
            .modal-description { font-size: 13px !important; margin-bottom: 20px !important; }
            .textarea-field { font-size: 10px !important; min-height: 25px !important; padding: 5px !important; }
          }
          
          @media (max-width: 480px) {
            .logo-text { font-size: 28px !important; }
            .logo-container { height: 120px !important; }
            .content-card { padding: 15px !important; }
            .instruction-box { padding: 12px !important; }
            .kelompok-pekerjaan { padding: 12px !important; }
            .element-box { padding: 12px !important; }
            .data-table { font-size: 10px !important; }
            .data-table td { padding: 6px !important; }
            .input-field { font-size: 10px !important; padding: 2px 4px !important; }
            .table-input-row input { min-width: 120px !important; }
            .instruction-title { font-size: 12px !important; }
            .instruction-item { font-size: 10px !important; }
            .element-title { font-size: 12px !important; }
            .criteria-item { font-size: 10px !important; }
            .approve-button { font-size: 12px !important; padding: 10px 15px !important; }
            .modal-container { padding: 15px 20px !important; }
            .modal-title { font-size: 16px !important; }
            .modal-description { font-size: 12px !important; }
          }
        `}
      </style>

      {/* Header Section */}
      <div style={headerSectionStyle}>
        <div style={logoContainerStyle} className="logo-container">
          <h1 style={logoTextStyle} className="logo-text">
            MyLSP
          </h1>
        </div>
      </div>

      {/* Content Card */}
      <div style={contentCardStyle} className="content-card">
        <div style={headerSectionStyle2} className="header-section2">
          <div style={logoContainer2Style} className="logo-container2">
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
            />
          </div>
          <div style={headerContentStyle}>
            <div style={titleStyle} className="title-text">
              FR.IA.01.CL
            </div>
            <div style={subtitleStyle} className="subtitle-text">
              CEKLIS OBSERVASI AKTIVITAS DI TEMPAT KERJA ATAU TEMPAT KERJA
              SIMULASI
            </div>
          </div>
        </div>

        {/* Skema Sertifikasi */}
        <table
          style={{ width: "100%", marginBottom: "15px", fontSize: "12px" }}
          className="data-table"
        >
          <tbody>
            <tr>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  backgroundColor: "#f8f9fa",
                  fontWeight: "bold",
                  width: "150px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                Skema Sertifikasi
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className="table-input-row"
                  >
                    <span
                      style={{
                        minWidth: "80px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      Judul Skema
                    </span>
                    <span style={{ margin: "0 8px" }}>:</span>
                    <input
                      type="text"
                      style={{
                        flex: 1,
                        padding: "4px 8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "12px",
                      }}
                      className="input-field"
                      value={formData.judulUnit}
                      onChange={(e) =>
                        handleInputChange("judulUnit", e.target.value)
                      }
                      placeholder="Masukkan judul skema"
                    />
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className="table-input-row"
                  >
                    <span
                      style={{
                        minWidth: "80px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      Nomor Skema
                    </span>
                    <span style={{ margin: "0 8px" }}>:</span>
                    <input
                      type="text"
                      style={{
                        flex: 1,
                        padding: "4px 8px",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                        fontSize: "12px",
                      }}
                      className="input-field"
                      value={formData.nomorUnit}
                      onChange={(e) =>
                        handleInputChange("nomorUnit", e.target.value)
                      }
                      placeholder="Masukkan nomor skema"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div style={instructionSectionStyle} className="instruction-section">
          <div style={instructionBoxStyle} className="instruction-box">
            <div style={instructionTitleStyle} className="instruction-title">
              PADUAN ASESMEN MANDIRI
            </div>
            <div style={instructionTitleStyle} className="instruction-title">
              Instruksi:
            </div>
            <ul style={instructionListStyle}>
              <li style={instructionItemStyle} className="instruction-item">
                Lengkapi nama unit kompetensi, elemen, dan kriteria/unjuk kerja
                sesuai/kolom dalam tabel.
              </li>
              <li style={instructionItemStyle} className="instruction-item">
                Isi kolom standar industri atau tempat kerja
              </li>
              <li style={instructionItemStyle} className="instruction-item">
                Beri tanda centang (O) pada kolom "YA" jika Anda yakin asesi
                dapat melakukan/mendemonstrasikan tugas sesuai KUK, atau
                centang(O) pada kolom "Tidak" bila sebaliknya.
              </li>
              <li style={instructionItemStyle} className="instruction-item">
                Penilaian lanjut bila hasil belum dapat disimpulkan, untuk itu
                gunakan/metode lain
              </li>
              <li style={instructionItemStyle} className="instruction-item">
                sehingga keputusan dapat/dibuat.
              </li>
              <li style={instructionItemStyle} className="instruction-item">
                isi kolom KUK sesuai dengan Unit Kompetensi/SKKNI
              </li>
            </ul>
          </div>

          <div style={kelompokPekerjaanStyle} className="kelompok-pekerjaan">
            <div style={kelompokHeaderStyle} className="kelompok-header">
              {apl02?.jurusan?.nama_jurusan || "Kelompok Pekerjaan"}
            </div>
            <ol style={kelompokListStyle}>
              {apl02?.data?.units?.map((unit, index) => (
                <li
                  key={index}
                  style={kelompokItemStyle}
                  className="kelompok-item"
                >
                  {unit.unit_ke}. {unit.kode_unit} {unit.judul_unit}
                </li>
              )) || (
                <li style={kelompokItemStyle} className="kelompok-item">
                  Loading...
                </li>
              )}
            </ol>
          </div>
        </div>

        {/* Render semua unit dan elemen */}
        <div style={mainContentStyle} className="main-content">
          {renderUnitBoxes()}
        </div>

        {/* Loading indicator */}
        {loading && (
          <div
            style={{
              textAlign: "center",
              padding: "20px",
              color: "#666",
              fontSize: "14px",
            }}
          >
            Sedang mengirim data...
          </div>
        )}

        {/* Error display */}
        {error && (
          <div
            style={{
              textAlign: "center",
              padding: "20px",
              color: "red",
              fontSize: "14px",
              backgroundColor: "#ffebee",
              borderRadius: "8px",
              marginTop: "20px",
            }}
          >
            {error}
          </div>
        )}

        {/* Approve/Reject Buttons */}
        {!isDisabled && (
          <div style={buttonContainerStyle} className="button-container">
            <button
              style={{
                ...approveButtonStyle,
                backgroundColor: loading ? "#f0f0f0" : "white",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.6 : 1,
              }}
              className="approve-button"
              onClick={handleApprove}
              disabled={loading}
              onMouseEnter={(e) =>
                !loading && (e.target.style.backgroundColor = "#f8f9fa")
              }
              onMouseLeave={(e) =>
                !loading && (e.target.style.backgroundColor = "white")
              }
            >
              {loading ? "SUBMITTING..." : "APPROVE"}
            </button>
            <button
              style={{
                ...approveButtonStyle,
                backgroundColor: loading ? "#f0f0f0" : "white",
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.6 : 1,
              }}
              className="approve-button"
              onClick={handleReject}
              disabled={loading}
              onMouseEnter={(e) =>
                !loading && (e.target.style.backgroundColor = "#f8f9fa")
              }
              onMouseLeave={(e) =>
                !loading && (e.target.style.backgroundColor = "white")
              }
            >
              REJECT
            </button>
          </div>
        )}

        {/* Modals (tetap sama seperti sebelumnya) */}
        {showApprovalModal && (
          <div style={modalOverlayStyle}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "30px 40px",
                minWidth: "500px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                position: "relative",
              }}
              className="modal-container"
            >
              {/* Header dengan Icon dan Close Button */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "25px",
                }}
                className="modal-header"
              >
                {/* Icon clipboard biru dengan checkmark di kiri */}
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#4A90E2",
                    borderRadius: "6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    position: "relative",
                  }}
                  className="modal-icon"
                >
                  {/* Clipboard shape */}
                  <div
                    style={{
                      width: "36px",
                      height: "40px",
                      backgroundColor: "white",
                      borderRadius: "3px",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* Top clip part */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-3px",
                        width: "16px",
                        height: "6px",
                        backgroundColor: "#4A90E2",
                        borderRadius: "3px 3px 0 0",
                      }}
                    ></div>

                    {/* Checkmark */}
                    <Check size={18} color="#4A90E2" strokeWidth={4} />
                  </div>
                </div>

                {/* Title di tengah - sejajar dengan icon */}
                <div
                  style={{
                    flex: 1,
                    textAlign: "center",
                    paddingTop: "5px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "4px",
                      lineHeight: "1.2",
                    }}
                    className="modal-title"
                  >
                    Form IA01 berhasil dikirim
                  </h3>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "#333",
                      margin: "0",
                      lineHeight: "1.2",
                    }}
                    className="modal-title"
                  >
                    dan disetujui
                  </h3>
                </div>

                {/* Close button di kanan */}
                <button
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: "#f0f0f0",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    color: "#666",
                    flexShrink: 0,
                  }}
                  onClick={() => setShowApprovalModal(false)}
                >
                  ×
                </button>
              </div>

              {/* Separator line */}
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#e0e0e0",
                  margin: "20px 0",
                }}
              ></div>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  marginBottom: "25px",
                  lineHeight: "1.5",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
                className="modal-description"
              >
                Data penilaian telah berhasil disimpan ke sistem dengan
                penilaian yang sebenar-benarnya
              </p>

              {/* Button di kanan */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  style={{
                    padding: "10px 30px",
                    backgroundColor: "#4A90E2",
                    color: "white",
                    border: "none",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "600",
                    transition: "all 0.2s ease",
                  }}
                  onClick={handleModalOke}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#357ABD")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#4A90E2")
                  }
                >
                  Oke
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Rejection Modal - Updated Design */}
        {showRejectionModal && (
          <div style={modalOverlayStyle}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                padding: "30px 40px",
                minWidth: "500px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                position: "relative",
              }}
              className="modal-container"
            >
              {/* Header dengan Icon dan Close Button */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "25px",
                }}
                className="modal-header"
              >
                {/* Icon document dengan X orange di kiri */}
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    position: "relative",
                  }}
                  className="modal-icon"
                >
                  {/* Document outline */}
                  <div
                    style={{
                      width: "36px",
                      height: "42px",
                      border: "2px solid #FF8C00",
                      borderRadius: "2px",
                      backgroundColor: "white",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      padding: "4px",
                    }}
                  >
                    {/* Document lines */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                        marginTop: "2px",
                      }}
                    >
                      <div
                        style={{
                          height: "2px",
                          backgroundColor: "#FF8C00",
                          width: "100%",
                          borderRadius: "1px",
                        }}
                      ></div>
                      <div
                        style={{
                          height: "2px",
                          backgroundColor: "#FF8C00",
                          width: "100%",
                          borderRadius: "1px",
                        }}
                      ></div>
                      <div
                        style={{
                          height: "2px",
                          backgroundColor: "#FF8C00",
                          width: "80%",
                          borderRadius: "1px",
                        }}
                      ></div>
                      <div
                        style={{
                          height: "2px",
                          backgroundColor: "#FF8C00",
                          width: "90%",
                          borderRadius: "1px",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* X mark di pojok kanan bawah */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "2px",
                      right: "2px",
                      width: "18px",
                      height: "18px",
                      backgroundColor: "#FF8C00",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      color: "white",
                      fontWeight: "bold",
                      border: "2px solid white",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    }}
                  >
                    ✗
                  </div>
                </div>

                {/* Title di tengah - sejajar dengan icon */}
                <div
                  style={{
                    flex: 1,
                    textAlign: "center",
                    paddingTop: "5px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "4px",
                      lineHeight: "1.2",
                    }}
                    className="modal-title"
                  >
                    Anda menolak
                  </h3>
                  <h3
                    style={{
                      fontSize: "22px",
                      fontWeight: "600",
                      color: "#333",
                      margin: "0",
                      lineHeight: "1.2",
                    }}
                    className="modal-title"
                  >
                    rekaman Asesmen ini
                  </h3>
                </div>

                {/* Close button di kanan */}
                <button
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    backgroundColor: "#f0f0f0",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    color: "#666",
                    flexShrink: 0,
                  }}
                  onClick={() => setShowRejectionModal(false)}
                >
                  ×
                </button>
              </div>

              {/* Separator line */}
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "#e0e0e0",
                  margin: "20px 0",
                }}
              ></div>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  marginBottom: "25px",
                  lineHeight: "1.5",
                  fontStyle: "italic",
                  textAlign: "center",
                }}
                className="modal-description"
              >
                Dokumen ini ditolak karena dokumen dan keaslian data tidak
                valid.
              </p>

              {/* Button di kanan */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  style={{
                    padding: "10px 30px",
                    backgroundColor: "#FF8C00",
                    color: "white",
                    border: "none",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "600",
                    transition: "all 0.2s ease",
                  }}
                  onClick={handleRejectionOke}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#E67A00")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#FF8C00")
                  }
                >
                  Oke
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CeklisObservasi;
