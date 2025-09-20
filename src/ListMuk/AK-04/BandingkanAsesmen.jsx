import React, { useState } from "react";

function BandingkanAsesmen({ onBack, onNavigate }) {
  const [formData, setFormData] = useState({
    namaAsesi: "",
    namaAsesor: "",
    tanggalAsesmen: "",

    // Pertanyaan banding
    jawabPertanyaan: { ya: false, tidak: false },
    prosesBanding: { ya: false, tidak: false },
    diskusiBanding: { ya: false, tidak: false },
    bantuan: { ya: false, tidak: false },

    // Text areas
    alasanBanding: "",
    tandaTangan: null,
    tanggalTandaTangan: "",
  });

  const [showNotification, setShowNotification] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "application/pdf" || file.type.startsWith("image/"))
    ) {
      setFormData((prev) => ({
        ...prev,
        tandaTangan: file,
      }));
    } else {
      alert("Mohon pilih file PDF atau gambar (PNG, JPG, dll)");
    }
  };

  const handleSave = () => {
    // Simulasi proses save
    setShowNotification(true);

    // Auto hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleRadioChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: {
        ya: value === "ya" ? !prev[field].ya : false,
        tidak: value === "tidak" ? !prev[field].tidak : false,
      },
    }));
  };

  const inputStyle = {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
    backgroundColor: "white",
  };

  const labelStyle = {
    fontSize: "14px",
    fontWeight: "500",
    color: "#333",
    marginBottom: "8px",
    display: "block",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    border: "2px solid #ff8c42",
    borderRadius: "12px",
    overflow: "hidden",
    marginBottom: "20px",
  };

  const cellStyle = {
    border: "1px solid #ff8c42",
    padding: "12px",
    fontSize: "14px",
    backgroundColor: "white",
  };

  // Updated header cell style - removed textAlign: "center"
  const headerCellStyle = {
    ...cellStyle,
    backgroundColor: "#e6f3ff",
    fontWeight: "600",
    textAlign: "left", // Changed from "center" to "left"
    width: "180px", // Fixed width to fit the text properly
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Success Notification */}
      {showNotification && (
        <div
          style={{
            position: "fixed",
            top: "20px",
            right: "20px",
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "16px 24px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "14px",
            fontWeight: "500",
            animation: "slideIn 0.3s ease-out",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Data berhasil disimpan!
        </div>
      )}

      <style jsx>{`
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
      `}</style>
      {/* Header with back + nav buttons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          justifyContent: "flex-start",
          gap: "20px",
        }}
      >
        {/* Tombol Back */}
        <button
          onClick={onBack}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#666"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Navigation Tabs - DIPERBAIKI SEPERTI LISTMUK */}
        <div
          style={{
            display: "flex",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "4px",
          }}
        >
          <button
            onClick={() => onNavigate && onNavigate("list-muk")}
            style={{
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "transparent",
              color: "#666",
              cursor: "pointer",
              margin: "4px",
              borderRadius: "8px",
              flexShrink: 0,
              minWidth: "fit-content",
            }}
          >
            FR.AK.02
          </button>
          <button
            onClick={() => onNavigate && onNavigate("listmuk/AK-03/UmpanBalik")}
            style={{
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "transparent",
              color: "#666",
              cursor: "pointer",
              margin: "4px",
              borderRadius: "8px",
              flexShrink: 0,
              minWidth: "fit-content",
            }}
          >
            FR.AK.03
          </button>
          <button
            style={{
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "#ff6b35", // AKTIF - ORANGE
              color: "white",
              borderRadius: "8px",
              cursor: "pointer",
              margin: "4px",
              flexShrink: 0,
              minWidth: "fit-content",
            }}
          >
            FR.AK.04
          </button>
          <button
            onClick={() =>
              onNavigate && onNavigate("listmuk/AK-05/LaporanAsesment")
            }
            style={{
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "transparent",
              color: "#666",
              cursor: "pointer",
              margin: "4px",
              borderRadius: "8px",
              flexShrink: 0,
              minWidth: "fit-content",
            }}
          >
            FR.AK.05
          </button>
          <button
            onClick={() =>
              onNavigate && onNavigate("listmuk/IA-01/CeklisObservasiAktivitas")
            }
            style={{
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "transparent",
              color: "#666",
              cursor: "pointer",
              margin: "4px",
              borderRadius: "8px",
              flexShrink: 0,
              minWidth: "fit-content",
            }}
          >
            FR.IA.01
          </button>
          <button
            onClick={() => onNavigate && onNavigate("listmuk/ia02")}
            style={{
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "transparent",
              color: "#666",
              cursor: "pointer",
              margin: "4px",
              borderRadius: "8px",
              flexShrink: 0,
              minWidth: "fit-content",
            }}
          >
            FR.IA.02
          </button>
          <button
            onClick={() =>
              onNavigate && onNavigate("listmuk/IA-05C/LembarJawabanPG")
            }
            style={{
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "transparent",
              color: "#666",
              cursor: "pointer",
              margin: "4px",
              borderRadius: "8px",
              flexShrink: 0,
              minWidth: "fit-content",
            }}
          >
            FR.IA.05.C
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          padding: "24px",
        }}
      >
        {/* Header Form */}
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td style={headerCellStyle}>Nama Asesi:</td>
              <td style={cellStyle}>
                <input
                  type="text"
                  value={formData.namaAsesi}
                  onChange={(e) =>
                    handleInputChange("namaAsesi", e.target.value)
                  }
                  style={{ ...inputStyle, border: "none", padding: "4px" }}
                />
              </td>
            </tr>
            <tr>
              <td style={headerCellStyle}>Nama Asesor:</td>
              <td style={cellStyle}>
                <input
                  type="text"
                  value={formData.namaAsesor}
                  onChange={(e) =>
                    handleInputChange("namaAsesor", e.target.value)
                  }
                  style={{ ...inputStyle, border: "none", padding: "4px" }}
                />
              </td>
            </tr>
            <tr>
              <td style={headerCellStyle}>Tanggal Asesmen:</td>
              <td style={cellStyle}>
                <input
                  type="date"
                  value={formData.tanggalAsesmen}
                  onChange={(e) =>
                    handleInputChange("tanggalAsesmen", e.target.value)
                  }
                  style={{ ...inputStyle, border: "none", padding: "4px" }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Pertanyaan Section */}
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td style={cellStyle}>
                Jawablah dengan "Ya atau Tidak pertanyaan-pertanyaan berikut ini
                :"
              </td>
              <td
                style={{
                  ...headerCellStyle,
                  width: "80px",
                  textAlign: "center",
                }}
              >
                YA
              </td>
              <td
                style={{
                  ...headerCellStyle,
                  width: "80px",
                  textAlign: "center",
                }}
              >
                TIDAK
              </td>
            </tr>

            <tr>
              <td style={cellStyle}>
                Apakah Proses Banding telah dijelaskan kepada Anda?
              </td>
              <td style={{ ...cellStyle, textAlign: "center" }}>
                <input
                  type="checkbox"
                  checked={formData.prosesBanding.ya}
                  onChange={() => handleRadioChange("prosesBanding", "ya")}
                  style={{ transform: "scale(1.2)" }}
                />
              </td>
              <td style={{ ...cellStyle, textAlign: "center" }}>
                <input
                  type="checkbox"
                  checked={formData.prosesBanding.tidak}
                  onChange={() => handleRadioChange("prosesBanding", "tidak")}
                  style={{ transform: "scale(1.2)" }}
                />
              </td>
            </tr>

            <tr>
              <td style={cellStyle}>
                Apakah Anda telah mendiskusikan Banding dengan Asesor?
              </td>
              <td style={{ ...cellStyle, textAlign: "center" }}>
                <input
                  type="checkbox"
                  checked={formData.diskusiBanding.ya}
                  onChange={() => handleRadioChange("diskusiBanding", "ya")}
                  style={{ transform: "scale(1.2)" }}
                />
              </td>
              <td style={{ ...cellStyle, textAlign: "center" }}>
                <input
                  type="checkbox"
                  checked={formData.diskusiBanding.tidak}
                  onChange={() => handleRadioChange("diskusiBanding", "tidak")}
                  style={{ transform: "scale(1.2)" }}
                />
              </td>
            </tr>

            <tr>
              <td style={cellStyle}>
                Apakah Anda mau melibatkan "orang lain" membantu Anda dalam
                Proses Banding?
              </td>
              <td style={{ ...cellStyle, textAlign: "center" }}>
                <input
                  type="checkbox"
                  checked={formData.bantuan.ya}
                  onChange={() => handleRadioChange("bantuan", "ya")}
                  style={{ transform: "scale(1.2)" }}
                />
              </td>
              <td style={{ ...cellStyle, textAlign: "center" }}>
                <input
                  type="checkbox"
                  checked={formData.bantuan.tidak}
                  onChange={() => handleRadioChange("bantuan", "tidak")}
                  style={{ transform: "scale(1.2)" }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Text Areas Section */}
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td style={cellStyle}>
                <strong>
                  Banding ini diajukan atas keputusan Asesmen yang dibuat
                  terhadap Skema Sertifikasi (Kualifikasi/Kluster/Okupasi)
                  berikut:
                </strong>
                <br />
                <br />
                Skema Sertifikasi&nbsp;&nbsp;&nbsp;&nbsp;: Pemrogram Junior
                (Junior Coder)
                <br />
                No. Skema Sertifikasi&nbsp;&nbsp;:
                <input
                  type="text"
                  style={{
                    border: "none",
                    borderBottom: "1px solid #333",
                    padding: "2px 4px",
                    marginLeft: "8px",
                    width: "200px",
                  }}
                />
              </td>
            </tr>

            <tr>
              <td style={cellStyle}>
                <strong>
                  Banding ini diajukan atas alasan sebagai berikut :
                </strong>
                <br />
                <br />
                <textarea
                  value={formData.alasanBanding}
                  onChange={(e) =>
                    handleInputChange("alasanBanding", e.target.value)
                  }
                  style={{
                    width: "100%",
                    height: "100px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    padding: "8px",
                    fontSize: "14px",
                    resize: "vertical",
                  }}
                  placeholder="Tulis alasan banding di sini..."
                />
              </td>
            </tr>

            <tr>
              <td style={cellStyle}>
                <strong>
                  Anda mempunyai hak mengajukan banding jika Anda menilai Proses
                  Asesmen tidak sesuai SOP dan tidak memenuhi Prinsip Asesmen.
                </strong>
              </td>
            </tr>

            <tr>
              <td style={cellStyle}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                  }}
                >
                  <div>
                    <strong>Tanda tangan Asesi :</strong>
                    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                      <input
                        type="file"
                        accept=".pdf,.png,.jpg,.jpeg,.gif"
                        onChange={handleFileUpload}
                        style={{
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          padding: "8px",
                          fontSize: "14px",
                          width: "250px",
                          backgroundColor: "white",
                        }}
                      />
                      {formData.tandaTangan && (
                        <div
                          style={{
                            marginTop: "8px",
                            fontSize: "12px",
                            color: "#666",
                            fontStyle: "italic",
                          }}
                        >
                          File terpilih: {formData.tandaTangan.name}
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <strong>Tanggal :</strong>
                    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                      <input
                        type="date"
                        value={formData.tanggalTandaTangan}
                        onChange={(e) =>
                          handleInputChange(
                            "tanggalTandaTangan",
                            e.target.value
                          )
                        }
                        style={{
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          padding: "8px",
                          fontSize: "14px",
                          width: "150px",
                          backgroundColor: "white",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            marginTop: "24px",
          }}
        >
          <button
            style={{
              padding: "12px 24px",
              fontSize: "14px",
              fontWeight: "600",
              border: "2px solid #ff8c42",
              backgroundColor: "white",
              color: "#ff8c42",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#ff8c42";
              e.target.style.color = "white";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "#ff8c42";
            }}
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            style={{
              padding: "12px 24px",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "#ff8c42",
              color: "white",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#e6742e";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#ff8c42";
            }}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

export default BandingkanAsesmen;
