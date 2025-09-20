import React, { useState } from "react";

const UmpanBalik = ({ onBack, data, onNavigate }) => {
  const [formData, setFormData] = useState({
    // Form information
    judulSkema: "Pemrograman Junior (Junior Coder)",
    nomorSkema: "SKM.RPL.P)/LSPSMKN24/2023",
    tuk: "Sewaktu/Tempat Kerja/Mandiri*",
    namaAsesor: "",
    namaAsesi: "",
    tanggalMulai: "",
    tanggalSelesai: "",

    // Feedback responses
    feedbackResponses: Array(10).fill({ ya: false, tidak: false }),
    feedbackComments: Array(10).fill(""),

    // Additional comments
    catatanLainnya: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFeedbackChange = (index, type) => {
    setFormData((prev) => {
      const newResponses = [...prev.feedbackResponses];
      newResponses[index] = { ya: type === "ya", tidak: type === "tidak" };
      return {
        ...prev,
        feedbackResponses: newResponses,
      };
    });
  };

  const handleCommentChange = (index, value) => {
    setFormData((prev) => {
      const newComments = [...prev.feedbackComments];
      newComments[index] = value;
      return {
        ...prev,
        feedbackComments: newComments,
      };
    });
  };

  const inputStyle = {
    width: "100%",
    padding: "8px 12px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "14px",
    backgroundColor: "white",
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

  const headerCellStyle = {
    ...cellStyle,
    backgroundColor: "#e6f3ff",
    fontWeight: "600",
    textAlign: "center",
  };

  const feedbackQuestions = [
    "Saya mendapatkan penjelasan yang cukup memadai mengenai proses asesmen dan (a) kompetensi",
    "Saya diberikan kesempatan untuk mempelajari standar kompetensi yang akan diatui dan menilai diri sendiri terhadap pencapaiannya",
    "Asesor memberikan kesempatan untuk mendiskusikan/menegosiasikan metode, instrumen dan sumber asesmen serta jadwal asesmen",
    "Asesor bertindak mengelilingi seluruh bukti pendukung yang sesuai dengan yang telah belajar berdasarkan pelatihan dan pengalaman yang saya",
    "Saya sepenuhnya diberikan kesempatan untuk mendemonstrasikan kompetensi saya tanpa hambatan selerma asesmen",
    "Saya mendapatkan penjelasan yang memadai mengenai keputusan asesmen",
    "Asesor memberikan umpan balik yang mendukung setelah asesmen serta tindak lanjutnya",
    "Asesor bersama saya mempelajari semua dokumen asesmen serta menandatanganinya",
    "Saya mendapatkan jaminan kerahasiaan hasil asesmen serta penjelasan peranganan dokumen asesmen",
    "Asesor menggunakan keterampilan komunikasi yang efektif selama asesmen",
  ];

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
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

        {/* Navigation Tabs */}
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
            FR.AK.03
          </button>
          <button
            onClick={() =>
              onNavigate && onNavigate("listmuk/AK-04/BandingkanAsesmen")
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
        {/* Header dengan Logo LSP */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "24px",
            padding: "16px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              backgroundColor: "#ff6b35",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "16px",
              color: "white",
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            LSP
          </div>
          <div>
            <h2
              style={{
                margin: "0 0 4px 0",
                fontSize: "18px",
                fontWeight: "600",
                color: "#333",
              }}
            >
              FR.AK.03. UMPAN BALIK DAN CATATAN ASESMEN
            </h2>
          </div>
        </div>

        {/* Form Information Table */}
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td
                style={{
                  ...cellStyle,
                  backgroundColor: "#e6f3ff",
                  fontWeight: "600",
                  width: "200px",
                }}
              >
                Skema Sertifikasi (KKNI/Okupasi/Klaster)
              </td>
              <td style={{ ...headerCellStyle, width: "80px" }}>Judul</td>
              <td style={cellStyle}>
                <input
                  type="text"
                  value={formData.judulSkema}
                  onChange={(e) =>
                    handleInputChange("judulSkema", e.target.value)
                  }
                  style={{ ...inputStyle, border: "none", padding: "4px" }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ ...cellStyle, backgroundColor: "#e6f3ff" }}></td>
              <td style={headerCellStyle}>Nomor</td>
              <td style={cellStyle}>
                <input
                  type="text"
                  value={formData.nomorSkema}
                  onChange={(e) =>
                    handleInputChange("nomorSkema", e.target.value)
                  }
                  style={{ ...inputStyle, border: "none", padding: "4px" }}
                />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  ...cellStyle,
                  backgroundColor: "#e6f3ff",
                  fontWeight: "600",
                }}
              >
                TUK
              </td>
              <td style={cellStyle}>:</td>
              <td style={cellStyle}>
                <input
                  type="text"
                  value={formData.tuk}
                  onChange={(e) => handleInputChange("tuk", e.target.value)}
                  style={{ ...inputStyle, border: "none", padding: "4px" }}
                />
              </td>
            </tr>
            <tr>
              <td
                style={{
                  ...cellStyle,
                  backgroundColor: "#e6f3ff",
                  fontWeight: "600",
                }}
              >
                Nama Asesor
              </td>
              <td style={cellStyle}>:</td>
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
              <td
                style={{
                  ...cellStyle,
                  backgroundColor: "#e6f3ff",
                  fontWeight: "600",
                }}
              >
                Nama Asesi
              </td>
              <td style={cellStyle}>:</td>
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
              <td
                style={{
                  ...cellStyle,
                  backgroundColor: "#e6f3ff",
                  fontWeight: "600",
                }}
              >
                Tanggal Asesmen
              </td>
              <td style={headerCellStyle}>Mulai</td>
              <td style={cellStyle}>
                <input
                  type="date"
                  value={formData.tanggalMulai}
                  onChange={(e) =>
                    handleInputChange("tanggalMulai", e.target.value)
                  }
                  style={{ ...inputStyle, border: "none", padding: "4px" }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ ...cellStyle, backgroundColor: "#e6f3ff" }}></td>
              <td style={headerCellStyle}>Selesai</td>
              <td style={cellStyle}>
                <input
                  type="date"
                  value={formData.tanggalSelesai}
                  onChange={(e) =>
                    handleInputChange("tanggalSelesai", e.target.value)
                  }
                  style={{ ...inputStyle, border: "none", padding: "4px" }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Umpan Balik Section */}
        <div style={{ marginBottom: "24px" }}>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "600",
              marginBottom: "16px",
              color: "#333",
            }}
          >
            Umpan balik dari Asesi (diisi oleh Asesi setelah pengambilan
            keputusan):
          </p>

          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={headerCellStyle}>KOMPONEN</th>
                <th style={{ ...headerCellStyle, width: "80px" }}>Hasil</th>
                <th style={{ ...headerCellStyle, width: "200px" }}>
                  Catatan/Komentar Asesi
                </th>
              </tr>
              <tr>
                <th style={{ ...cellStyle, backgroundColor: "#e6f3ff" }}></th>
                <th
                  style={{
                    ...cellStyle,
                    backgroundColor: "#e6f3ff",
                    fontSize: "12px",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <span>Ya</span>
                    <span>Tidak</span>
                  </div>
                </th>
                <th style={{ ...cellStyle, backgroundColor: "#e6f3ff" }}></th>
              </tr>
            </thead>
            <tbody>
              {feedbackQuestions.map((question, index) => (
                <tr key={index}>
                  <td
                    style={{
                      ...cellStyle,
                      fontSize: "12px",
                      lineHeight: "1.4",
                    }}
                  >
                    {question}
                  </td>
                  <td style={{ ...cellStyle, textAlign: "center" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <input
                        type="radio"
                        name={`feedback_${index}`}
                        checked={formData.feedbackResponses[index]?.ya || false}
                        onChange={() => handleFeedbackChange(index, "ya")}
                        style={{ transform: "scale(1.2)" }}
                      />
                      <input
                        type="radio"
                        name={`feedback_${index}`}
                        checked={
                          formData.feedbackResponses[index]?.tidak || false
                        }
                        onChange={() => handleFeedbackChange(index, "tidak")}
                        style={{ transform: "scale(1.2)" }}
                      />
                    </div>
                  </td>
                  <td style={cellStyle}>
                    <textarea
                      value={formData.feedbackComments[index]}
                      onChange={(e) =>
                        handleCommentChange(index, e.target.value)
                      }
                      style={{
                        width: "100%",
                        height: "60px",
                        border: "none",
                        resize: "vertical",
                        fontSize: "12px",
                      }}
                      placeholder="Komentar..."
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Catatan/komentar lainnya */}
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td style={cellStyle}>
                <strong>Catatan/komentar lainnya (apabila ada) :</strong>
                <br />
                <br />
                <textarea
                  value={formData.catatanLainnya}
                  onChange={(e) =>
                    handleInputChange("catatanLainnya", e.target.value)
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
                  placeholder="Tulis catatan atau komentar tambahan di sini..."
                />
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
};

export default UmpanBalik;
