import React, { useState, useEffect } from "react";
import { Check, X } from "lucide-react";

const LaporanAsesmen = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    skemaSerfikasi: "",
    unitKompetensi: "",
    namaAsesor: "",
    namaAsesi: "",
    tanggalAsesmen: "",
    // Data untuk tabel asesmen
    unitData: [
      { no: 1, unitKompetensi: "", elemenKompetensi: "" },
      { no: 2, unitKompetensi: "", elemenKompetensi: "" },
      { no: 3, unitKompetensi: "", elemenKompetensi: "" },
      { no: 4, unitKompetensi: "", elemenKompetensi: "" },
    ],
    // Rekomendasi
    rekomendasi: {
      lulus: false,
      belumLulus: false,
    },
    // Aspek negatif
    aspekNegatif: "",
    // Pencatatan penolakan hasil asesmen
    pencatatanPenolakan: "",
    // Saran perbaikan
    saranPerbaikan: "",
    // Nama asesor dan catatan
    namaAsesorBawah: "",
    catatan: "",
  });

  // Check if mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Prevent navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === "F5" ||
        (e.ctrlKey && e.key === "r") ||
        (e.altKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) ||
        (e.ctrlKey && e.key === "w") ||
        (e.ctrlKey && e.key === "t")
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const pageContainerStyle = {
    backgroundColor: "white",
    fontFamily: "Arial, sans-serif",
    padding: isMobile ? "10px" : "15px",
    minHeight: "100vh",
  };

  const headerSectionStyle = {
    backgroundImage:
      "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: isMobile ? "0 0 20px 20px" : "0 0 40px 40px",
    overflow: "hidden",
    marginBottom: "0",
  };

  const logoContainerStyle = {
    height: isMobile ? "120px" : "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: isMobile ? "10px" : "20px",
    marginBottom: isMobile ? "10px" : "20px",
  };

  const logoTextStyle = {
    color: "white",
    fontSize: isMobile ? "36px" : "56px",
    fontWeight: "bold",
    margin: 0,
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    letterSpacing: "1px",
  };

  const contentCardStyle = {
    backgroundColor: "white",
    borderRadius: "0 0 15px 15px",
    padding: isMobile ? "15px" : "30px",
    boxShadow: "none",
    marginTop: "0",
    border: "none",
  };

  const headerSectionStyle2 = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "center" : "flex-start",
    gap: isMobile ? "15px" : "20px",
    marginBottom: "20px",
    paddingBottom: "15px",
    borderBottom: "2px solid #FF8C00",
    textAlign: isMobile ? "center" : "left",
  };

  const logoContainer2Style = {
    flexShrink: 0,
    order: isMobile ? 1 : 0,
  };

  const headerContentStyle = {
    flex: 1,
    order: isMobile ? 2 : 1,
  };

  const titleStyle = {
    fontSize: isMobile ? "14px" : "16px",
    fontWeight: "bold",
    margin: "0 0 5px 0",
    color: "#333",
    textAlign: "center",
  };

  const subtitleStyle = {
    fontSize: isMobile ? "14px" : "16px",
    fontWeight: "bold",
    margin: "0 0 15px 0",
    color: "#333",
    textAlign: "center",
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUnitDataChange = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      unitData: prev.unitData.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const handleRecommendationChange = (field) => {
    setFormData((prev) => ({
      ...prev,
      rekomendasi: {
        lulus: field === "lulus",
        belumLulus: field === "belumLulus",
      },
    }));
  };

  const handleSubmit = () => {
    setShowModal(true);
  };

  const handleModalOke = () => {
    setShowModal(false);
    setTimeout(() => {
      // Navigate to next page or dashboard
      window.location.href = "/dashboard-asesor";
    }, 100);
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
    paddingTop: "20px",
  };

  const buttonStyle = {
    padding: isMobile ? "14px 25px" : "12px 35px",
    backgroundColor: "#4A90E2",
    color: "white",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontSize: isMobile ? "16px" : "14px",
    fontWeight: "600",
    minWidth: isMobile ? "200px" : "150px",
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
    padding: isMobile ? "20px" : "0",
  };

  const modalStyle = {
    backgroundColor: "white",
    borderRadius: "16px",
    padding: isMobile ? "20px 25px" : "30px 40px",
    minWidth: isMobile ? "100%" : "500px",
    maxWidth: isMobile ? "100%" : "500px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
    position: "relative",
    maxHeight: isMobile ? "90vh" : "auto",
    overflowY: isMobile ? "auto" : "visible",
  };

  return (
    <div style={pageContainerStyle}>
      {/* Header Section */}
      <div style={headerSectionStyle}>
        <div style={logoContainerStyle}>
          <h1 style={logoTextStyle}>MyLSP</h1>
        </div>
      </div>

      {/* Content Card */}
      <div style={contentCardStyle}>
        <div style={headerSectionStyle2}>
          <div style={logoContainer2Style}>
            <img
              src="/src/img/image 12.png"
              alt="LSP Logo"
              style={{
                width: isMobile ? "60px" : "80px",
                height: isMobile ? "60px" : "80px",
                borderRadius: "8px",
                objectFit: "contain",
                backgroundColor: "#f8f9fa",
                padding: "4px",
              }}
            />
          </div>
          <div style={headerContentStyle}>
            <div style={titleStyle}>FR.AK.05</div>
            <div style={subtitleStyle}>LAPORAN ASESMEN</div>
          </div>
        </div>

        {/* Form Content */}
        <div style={{ marginBottom: "20px" }}>
          {/* Basic Information Table */}
          <table
            style={{
              width: "100%",
              marginBottom: "20px",
              fontSize: isMobile ? "10px" : "12px",
            }}
          >
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    border: "1px solid #ddd",
                    fontWeight: "bold",
                    backgroundColor: "#f8f9fa",
                    width: isMobile ? "140px" : "200px",
                  }}
                >
                  Skema Sertifikasi (KKNI/Okupasi/Klaster)
                </td>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "4px 8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: isMobile ? "10px" : "12px",
                    }}
                    value={formData.skemaSerfikasi}
                    onChange={(e) =>
                      handleInputChange("skemaSerfikasi", e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    border: "1px solid #ddd",
                    fontWeight: "bold",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  Unit Kompetensi
                </td>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "4px 8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: isMobile ? "10px" : "12px",
                    }}
                    value={formData.unitKompetensi}
                    onChange={(e) =>
                      handleInputChange("unitKompetensi", e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    border: "1px solid #ddd",
                    fontWeight: "bold",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  Nama Asesor
                </td>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "4px 8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: isMobile ? "10px" : "12px",
                    }}
                    value={formData.namaAsesor}
                    onChange={(e) =>
                      handleInputChange("namaAsesor", e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    border: "1px solid #ddd",
                    fontWeight: "bold",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  Nama Asesi
                </td>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                  <input
                    type="text"
                    style={{
                      width: "100%",
                      padding: "4px 8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: isMobile ? "10px" : "12px",
                    }}
                    value={formData.namaAsesi}
                    onChange={(e) =>
                      handleInputChange("namaAsesi", e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "8px",
                    border: "1px solid #ddd",
                    fontWeight: "bold",
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  Tanggal
                </td>
                <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                  <input
                    type="date"
                    style={{
                      width: "100%",
                      padding: "4px 8px",
                      border: "1px solid #ddd",
                      borderRadius: "4px",
                      fontSize: isMobile ? "10px" : "12px",
                    }}
                    value={formData.tanggalAsesmen}
                    onChange={(e) =>
                      handleInputChange("tanggalAsesmen", e.target.value)
                    }
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Assessment Table */}
          <div style={{ marginBottom: "20px", overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                fontSize: isMobile ? "9px" : "11px",
                minWidth: "600px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "8px",
                      border: "1px solid #ddd",
                      backgroundColor: "#f8f9fa",
                      textAlign: "center",
                      width: "40px",
                    }}
                  >
                    No
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      border: "1px solid #ddd",
                      backgroundColor: "#f8f9fa",
                      textAlign: "center",
                    }}
                  >
                    Nama Asesi
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      border: "1px solid #ddd",
                      backgroundColor: "#f8f9fa",
                      textAlign: "center",
                      width: "80px",
                    }}
                  >
                    Rekomendasi
                  </th>
                  <th
                    style={{
                      padding: "8px",
                      border: "1px solid #ddd",
                      backgroundColor: "#f8f9fa",
                      textAlign: "center",
                    }}
                  >
                    Keterangan
                  </th>
                </tr>
              </thead>
              <tbody>
                {formData.unitData.map((item, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        padding: "8px",
                        border: "1px solid #ddd",
                        textAlign: "center",
                      }}
                    >
                      {item.no}
                    </td>
                    <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          border: "none",
                          padding: "2px",
                          fontSize: isMobile ? "9px" : "11px",
                        }}
                        value={item.unitKompetensi}
                        onChange={(e) =>
                          handleUnitDataChange(
                            index,
                            "unitKompetensi",
                            e.target.value
                          )
                        }
                      />
                    </td>
                    <td
                      style={{
                        padding: "8px",
                        border: "1px solid #ddd",
                        textAlign: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "8px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2px",
                          }}
                        >
                          <input
                            type="checkbox"
                            style={{ transform: "scale(0.8)" }}
                          />
                          <span style={{ fontSize: isMobile ? "8px" : "10px" }}>
                            K
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "2px",
                          }}
                        >
                          <input
                            type="checkbox"
                            style={{ transform: "scale(0.8)" }}
                          />
                          <span style={{ fontSize: isMobile ? "8px" : "10px" }}>
                            BK
                          </span>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "8px", border: "1px solid #ddd" }}>
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          border: "none",
                          padding: "2px",
                          fontSize: isMobile ? "9px" : "11px",
                        }}
                        value={item.elemenKompetensi}
                        onChange={(e) =>
                          handleUnitDataChange(
                            index,
                            "elemenKompetensi",
                            e.target.value
                          )
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Note */}
          <p
            style={{
              fontSize: isMobile ? "9px" : "10px",
              fontStyle: "italic",
              color: "#666",
              marginBottom: "20px",
            }}
          >
            ***Tuliskan hasil dari Jenis Unit Kompetensi yang tersedia di Klis
            mampuan spesifik akurasi
          </p>

          {/* Sections */}
          <div style={{ marginBottom: "20px" }}>
            <div
              style={{
                backgroundColor: "#f8f9fa",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            >
              <h4
                style={{
                  margin: "0 0 10px 0",
                  fontSize: isMobile ? "12px" : "14px",
                  fontWeight: "bold",
                }}
              >
                1. Aspek Negatif dan Positif dalam Asesmen
              </h4>
              <textarea
                style={{
                  width: "100%",
                  minHeight: "80px",
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: isMobile ? "10px" : "12px",
                  resize: "vertical",
                }}
                value={formData.aspekNegatif}
                onChange={(e) =>
                  handleInputChange("aspekNegatif", e.target.value)
                }
                placeholder="Jelaskan aspek negatif dan positif dalam asesmen..."
              />
            </div>

            <div
              style={{
                backgroundColor: "#f8f9fa",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            >
              <h4
                style={{
                  margin: "0 0 10px 0",
                  fontSize: isMobile ? "12px" : "14px",
                  fontWeight: "bold",
                }}
              >
                2. Pencatatan Penolakan Hasil Asesmen
              </h4>
              <textarea
                style={{
                  width: "100%",
                  minHeight: "80px",
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: isMobile ? "10px" : "12px",
                  resize: "vertical",
                }}
                value={formData.pencatatanPenolakan}
                onChange={(e) =>
                  handleInputChange("pencatatanPenolakan", e.target.value)
                }
                placeholder="Tuliskan penolakan hasil asesmen jika ada..."
              />
            </div>

            <div
              style={{
                backgroundColor: "#f8f9fa",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                marginBottom: "20px",
              }}
            >
              <h4
                style={{
                  margin: "0 0 10px 0",
                  fontSize: isMobile ? "12px" : "14px",
                  fontWeight: "bold",
                }}
              >
                3. Saran perbaikan (Asesor/Penilai/Peninjau)
              </h4>
              <textarea
                style={{
                  width: "100%",
                  minHeight: "80px",
                  padding: "8px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: isMobile ? "10px" : "12px",
                  resize: "vertical",
                }}
                value={formData.saranPerbaikan}
                onChange={(e) =>
                  handleInputChange("saranPerbaikan", e.target.value)
                }
                placeholder="Berikan saran perbaikan..."
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            {/* Left Section */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  padding: "15px",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <div
                  style={{
                    fontSize: isMobile ? "11px" : "13px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Nama Asesor
                </div>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: "6px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: isMobile ? "10px" : "12px",
                    marginBottom: "10px",
                  }}
                  value={formData.namaAsesorBawah}
                  onChange={(e) =>
                    handleInputChange("namaAsesorBawah", e.target.value)
                  }
                />
                <div
                  style={{
                    fontSize: isMobile ? "10px" : "11px",
                    color: "#666",
                    marginBottom: "10px",
                  }}
                >
                  No.Reg
                </div>
                <div
                  style={{
                    height: "40px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    backgroundColor: "white",
                  }}
                ></div>
              </div>
            </div>

            {/* Right Section */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  padding: "15px",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <div
                  style={{
                    fontSize: isMobile ? "11px" : "13px",
                    fontWeight: "bold",
                    marginBottom: "10px",
                  }}
                >
                  Catatan
                </div>
                <textarea
                  style={{
                    width: "100%",
                    minHeight: "80px",
                    padding: "8px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: isMobile ? "10px" : "12px",
                    resize: "vertical",
                  }}
                  value={formData.catatan}
                  onChange={(e) => handleInputChange("catatan", e.target.value)}
                  placeholder="Tambahkan catatan..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={buttonContainerStyle}>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "white",
              color: "#333",
              border: "1px solid #ccc",
            }}
            onClick={handleSubmit}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#f8f9fa")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
          >
            APPROVE
          </button>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "white",
              color: "#333",
              border: "1px solid #ccc",
            }}
            onClick={() => {}}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#f8f9fa")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
          >
            REJECT
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: "25px",
              }}
            >
              <div
                style={{
                  width: isMobile ? "40px" : "50px",
                  height: isMobile ? "40px" : "50px",
                  backgroundColor: "#4A90E2",
                  borderRadius: "6px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: isMobile ? "28px" : "36px",
                    height: isMobile ? "32px" : "40px",
                    backgroundColor: "white",
                    borderRadius: "3px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-3px",
                      width: isMobile ? "12px" : "16px",
                      height: "6px",
                      backgroundColor: "#4A90E2",
                      borderRadius: "3px 3px 0 0",
                    }}
                  ></div>
                  <Check
                    size={isMobile ? 14 : 18}
                    color="#4A90E2"
                    strokeWidth={4}
                  />
                </div>
              </div>

              <div
                style={{
                  flex: 1,
                  textAlign: "center",
                  paddingTop: "5px",
                  paddingLeft: isMobile ? "10px" : "0",
                  paddingRight: isMobile ? "10px" : "0",
                }}
              >
                <h3
                  style={{
                    fontSize: isMobile ? "18px" : "22px",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "4px",
                    lineHeight: "1.2",
                  }}
                >
                  Laporan Asesmen
                </h3>
                <h3
                  style={{
                    fontSize: isMobile ? "18px" : "22px",
                    fontWeight: "600",
                    color: "#333",
                    margin: "0",
                    lineHeight: "1.2",
                  }}
                >
                  Berhasil Disimpan
                </h3>
              </div>

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
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>

            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#e0e0e0",
                margin: "20px 0",
              }}
            ></div>

            <p
              style={{
                fontSize: isMobile ? "12px" : "14px",
                color: "#666",
                marginBottom: "25px",
                lineHeight: "1.5",
                fontStyle: "italic",
                textAlign: "center",
              }}
            >
              Laporan asesmen telah berhasil disimpan dan dapat diakses di
              dashboard asesor
            </p>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                style={{
                  padding: isMobile ? "12px 25px" : "10px 30px",
                  backgroundColor: "#4A90E2",
                  color: "white",
                  border: "none",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontSize: isMobile ? "16px" : "14px",
                  fontWeight: "600",
                  transition: "all 0.2s ease",
                  width: isMobile ? "100%" : "auto",
                }}
                onClick={handleModalOke}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#357ABD")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#4A90E2")}
              >
                Oke
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LaporanAsesmen;
