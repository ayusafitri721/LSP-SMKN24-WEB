import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavAsesi from "../../components/NavAsesi";

const pageContainerStyle = {
  backgroundColor: "#f5f5f5",
  fontFamily: "Arial, sans-serif",
  padding: "15px",
};

const navContainerStyle = {
  backgroundColor: "white",
  padding: "5px 15px",
  borderRadius: "15px 15px 40px 15px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  margin: "15px 15px 0 15px",
  overflowX: "auto",
  maxWidth: "50%",
  whiteSpace: "nowrap",
};

const imageBannerStyle = {
  backgroundImage:
    "linear-gradient(rgba(255,140,0,0.7), rgba(255,140,0,0.7)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "160px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "15px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
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
  borderRadius: "15px",
  padding: "25px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  marginTop: "20px",
};

const AK02 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    skemaSertifikasi: "",
    judulUnit: "",
    kodeUnit: "",
    tuk: "",
    namaAsesor: "",
    namaAsesi: "",
    tanggal: "",
    waktu: "",
    // Unit Kompetensi data
    unitKompetensi: [
      {
        id: 1,
        title: "Memberikan layanan secara prima kepada pelanggan.",
        kompeten: false,
        portfolioSesuai: false,
        penguatanEvidenceSesuai: false,
        hasilPenguatanEvidenceSesuai: false,
        rekomendasiBelumKompeten: false,
      },
      {
        id: 2,
        title: "Melakukan pelacakan dalam lingkungan sosial yang beragam",
        kompeten: false,
        portfolioSesuai: false,
        penguatanEvidenceSesuai: false,
        hasilPenguatanEvidenceSesuai: false,
        rekomendasiBelumKompeten: false,
      },
      {
        id: 3,
        title:
          "Mengkuti prosedur keselamatan, kesehatan dan keamanan dalam bekerja",
        kompeten: false,
        portfolioSesuai: false,
        penguatanEvidenceSesuai: false,
        hasilPenguatanEvidenceSesuai: false,
        rekomendasiBelumKompeten: false,
      },
      {
        id: 4,
        title: "Memelihara Alat Jahit",
        kompeten: false,
        portfolioSesuai: false,
        penguatanEvidenceSesuai: false,
        hasilPenguatanEvidenceSesuai: false,
        rekomendasiBelumKompeten: false,
      },
      {
        id: 5,
        title: "Memelihara Alat Jahit",
        kompeten: false,
        portfolioSesuai: false,
        penguatanEvidenceSesuai: false,
        hasilPenguatanEvidenceSesuai: false,
        rekomendasiBelumKompeten: false,
      },
    ],
    rekomendasiHasilAssessment: "",
    alasanKompeten: false,
    selesaiKompeten: false,
    tindakanKompeten: false,
    tindakanBelumKompeten: false,
    komentar: "",
    tanggapanAsesi: "",
  });

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

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUnitChange = (unitId, field, value) => {
    setFormData((prev) => ({
      ...prev,
      unitKompetensi: prev.unitKompetensi.map((unit) =>
        unit.id === unitId ? { ...unit, [field]: value } : unit
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setShowPopup(true);
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

  // Popup styles - sama persis kayak APL-01
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
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "40px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    minWidth: "320px",
    maxWidth: "400px",
  };

  const iconContainerStyle = {
    marginBottom: "20px",
  };

  const successIconStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 20px",
    position: "relative",
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
    marginTop: "6px",
  };

  const checkMarkStyle = {
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
  };

  const popupTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "8px",
    lineHeight: "1.3",
  };

  const popupSubtitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "30px",
    lineHeight: "1.3",
  };

  const dividerStyle = {
    height: "2px",
    backgroundColor: "#ddd",
    margin: "25px 0",
    borderRadius: "1px",
  };

  const okayButtonStyle = {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#666",
    cursor: "pointer",
    padding: "10px 20px",
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
  const formRowStyle = {
    display: "flex",
    borderBottom: "2px solid #ddd",
  };

  const lastFormRowStyle = {
    display: "flex",
    borderBottom: "2px solid #ddd", // Added border for last row
  };

  const labelStyle = {
    width: "200px",
    padding: "8px 12px",
    backgroundColor: "#f8f9fa",
    borderRight: "2px solid #ddd",
    fontSize: "12px",
    fontWeight: "500",
  };

  const subLabelStyle = {
    width: "80px",
    padding: "8px 12px",
    backgroundColor: "#f8f9fa",
    borderRight: "2px solid #ddd",
    fontSize: "12px",
    fontWeight: "500",
    textAlign: "center",
  };

  const valueStyle = {
    flex: 1,
    padding: "8px 12px",
    backgroundColor: "white",
    fontSize: "12px",
    borderRight: "2px solid #ddd",
    position: "relative",
  };

  const colonStyle = {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    fontWeight: "bold",
  };

  return (
    <div style={pageContainerStyle}>
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
        `}
      </style>

      {/* Warning Notification */}
      {showWarning && (
        <div style={warningNotificationStyle}>
          Silakan isi dan kirim formulir AK-02 terlebih dahulu!
        </div>
      )}
      <div style={navContainerStyle} className="nav-scrollbar">
        <NavAsesi activeTab="FR.AK.02" />
      </div>
      <div style={imageBannerStyle}>
        <h1 style={logoTextStyle}>MyLSP</h1>
      </div>
      <form onSubmit={handleSubmit} style={contentCardStyle}>
        {/* Header Section */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            marginBottom: "20px",
          }}
        >
          {/* Logo */}
          <div style={{ marginRight: "20px", marginTop: "5px" }}>
            <div
              style={{
                width: "40px",
                height: "30px",
                backgroundColor: "#FF8C00",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              LSP
            </div>
          </div>

          {/* Title Section */}
          <div style={{ flex: 1, textAlign: "center" }}>
            <h2
              style={{
                margin: "0 0 5px 0",
                fontSize: "14px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              FR.AK.02
            </h2>
            <h3
              style={{
                margin: 0,
                fontSize: "14px",
                fontWeight: "bold",
                color: "#333",
              }}
            >
              REKAMAN ASESMEN KOMPETENSI
            </h3>
          </div>
        </div>

        {/* Form Section - Clean Table Design */}
        <table
          style={{
            width: "100%",
            border: "1px solid #ccc",
            borderCollapse: "collapse",
            fontSize: "12px",
          }}
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
                <input
                  type="text"
                  value={formData.skemaSertifikasi}
                  onChange={(e) =>
                    handleInputChange("skemaSertifikasi", e.target.value)
                  }
                  placeholder="Skema Sertifikasi"
                  style={{ ...inputStyle, fontWeight: "500" }}
                />
                <br />
                <span style={{ fontSize: "11px", color: "#666" }}>
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
                  onChange={(e) => handleInputChange("tanggal", e.target.value)}
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

          {formData.unitKompetensi.map((unit, index) => (
            <div
              key={unit.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                marginBottom: "15px",
                backgroundColor: "white",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <label style={{ fontSize: "12px", fontWeight: "500" }}>
                  {unit.title}
                </label>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <input
                    type="checkbox"
                    checked={unit.kompeten}
                    onChange={(e) =>
                      handleUnitChange(unit.id, "kompeten", e.target.checked)
                    }
                    style={{ margin: "0" }}
                  />
                  <span style={{ fontSize: "11px" }}>
                    Kompeten/ Demonstrasi
                  </span>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <input
                    type="checkbox"
                    checked={unit.portfolioSesuai}
                    onChange={(e) =>
                      handleUnitChange(
                        unit.id,
                        "portfolioSesuai",
                        e.target.checked
                      )
                    }
                    style={{ margin: "0" }}
                  />
                  <span style={{ fontSize: "11px" }}>Portofolio</span>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <input
                    type="checkbox"
                    checked={unit.penguatanEvidenceSesuai}
                    onChange={(e) =>
                      handleUnitChange(
                        unit.id,
                        "penguatanEvidenceSesuai",
                        e.target.checked
                      )
                    }
                    style={{ margin: "0" }}
                  />
                  <span style={{ fontSize: "11px" }}>
                    Penguatan Hasil evidence Evidence Demonstrasi
                  </span>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <input
                    type="checkbox"
                    checked={unit.hasilPenguatanEvidenceSesuai}
                    onChange={(e) =>
                      handleUnitChange(
                        unit.id,
                        "hasilPenguatanEvidenceSesuai",
                        e.target.checked
                      )
                    }
                    style={{ margin: "0" }}
                  />
                  <span style={{ fontSize: "11px" }}>
                    Penguatan Hasil evidence Evidence Wawancara
                  </span>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <input
                    type="checkbox"
                    checked={unit.rekomendasiBelumKompeten}
                    onChange={(e) =>
                      handleUnitChange(
                        unit.id,
                        "rekomendasiBelumKompeten",
                        e.target.checked
                      )
                    }
                    style={{ margin: "0" }}
                  />
                  <span style={{ fontSize: "11px" }}>Belum Kompeten</span>
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
              style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
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
                          handleInputChange("alasanKompeten", e.target.checked)
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
                          handleInputChange("selesaiKompeten", e.target.checked)
                        }
                      />
                    </div>
                  </div>
                </div>

                <textarea
                  placeholder="Tuliskan alasan yang dibutuhkan:
Evidensi pendukung kompetensi dari kesesuaian yang dinyatakan untuk mencapai kompetensi"
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
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#007bff",
                color: "white",
                padding: "10px 30px",
                border: "none",
                borderRadius: "5px",
                fontSize: "12px",
                fontWeight: "500",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0,123,255,0.3)",
              }}
            >
              Kirim Jawaban
            </button>
          </div>
        </div>
      </form>

      {/* Success Popup - sama persis kayak APL-01 */}
      {showPopup && (
        <div style={popupOverlayStyle} onClick={handleClosePopup}>
          <div style={popupContainerStyle} onClick={(e) => e.stopPropagation()}>
            <div style={iconContainerStyle}>
              <div style={successIconStyle}>
                {/* List lines (3 horizontal lines) */}
                <div style={listLinesStyle}>
                  <div
                    style={{
                      width: "60px",
                      height: "12px",
                      backgroundColor: "#FF8C00",
                      borderRadius: "6px",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "80px",
                      height: "12px",
                      backgroundColor: "#FF8C00",
                      borderRadius: "6px",
                    }}
                  ></div>
                  <div
                    style={{
                      width: "100px",
                      height: "12px",
                      backgroundColor: "#FF8C00",
                      borderRadius: "6px",
                    }}
                  ></div>
                </div>

                {/* Check mark circle */}
                <div style={checkCircleStyle}>
                  <div style={checkMarkStyle}>✓</div>
                </div>
              </div>
            </div>

            <div style={popupTitleStyle}>Jawaban Anda</div>
            <div style={popupSubtitleStyle}>Berhasil Direkam!</div>

            <div style={dividerStyle}></div>

            <button style={okayButtonStyle} onClick={handleClosePopup}>
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AK02;
