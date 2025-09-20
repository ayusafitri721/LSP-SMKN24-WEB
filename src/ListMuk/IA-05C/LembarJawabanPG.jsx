import React, { useState } from "react";

const LembarJawabanPG = ({ onBack, onNavigate }) => {
  const [formData, setFormData] = useState({
    judul: "Pemrogram Junior (Junior Coder)",
    nomor: "SKM.RPL.PJ/LSPSMK24/2023",
    tuk: "Sewaktu/Tempat Kerja/Mandiri*",
    namaAsesor: "",
    namaAsesi: "",
    tanggal: "",
    waktu: "",
    answers: {},
    umpanBalik: "",
    aspekPengetahuan: "",
    unitBelumTercapai: "",
    asesiNama: "",
    asesiTanggal: "",
    asesorNama: "",
    asesorNoReg: "",
    asesorTanggal: "",
  });

  const [checkedAnswers, setCheckedAnswers] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (questionNo, answerType) => {
    const key = `${questionNo}-${answerType}`;
    const oppositeKey = `${questionNo}-${answerType === "ya" ? "tidak" : "ya"}`;

    setCheckedAnswers((prev) => ({
      ...prev,
      [key]: !prev[key],
      [oppositeKey]: false,
    }));
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "0",
        margin: "0",
        minHeight: "100vh",
      }}
    >
      {/* Header Navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "16px 24px",
          backgroundColor: "white",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <button
          onClick={onBack}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            marginRight: "20px",
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
        {/* Nav Tabs inside the header */}
        <div
          style={{
            display: "flex",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "4px",
            flexGrow: 1,
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
              flexShrink: "0",
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
              flexShrink: "0",
              minWidth: "fit-content",
            }}
          >
            FR.AK.04
          </button>
          <button
            onClick={() => onNavigate && onNavigate("listmuk/ak05")}
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
              flexShrink: "0",
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
              flexShrink: "0",
              minWidth: "fit-content",
            }}
          >
            FR.IA.02
          </button>
          <button
            onClick={() => onNavigate && onNavigate("listmuk/ia05c")}
            style={{
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "#ff6b35",
              color: "white",
              borderRadius: "8px",
              cursor: "pointer",
              margin: "4px",
              flexShrink: "0",
              minWidth: "fit-content",
            }}
          >
            FR.IA.05.C
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>FR.IA.05.C. LEMBAR JAWABAN PILIHAN GANDA</h2>
        </div>

        {/* Main Information Table */}
        <table style={styles.mainTable}>
          <tbody>
            <tr>
              <td style={styles.labelCell} rowSpan={2}>
                Skema Sertifikasi
                <br />
                (KKNI/Okupasi/Klaster)
              </td>
              <td style={styles.subLabelCell}>Judul</td>
              <td style={styles.colonCell}>:</td>
              <td style={styles.inputCell}>
                <input
                  type="text"
                  value={formData.judul}
                  onChange={(e) => handleInputChange("judul", e.target.value)}
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.subLabelCell}>Nomor</td>
              <td style={styles.colonCell}>:</td>
              <td style={styles.inputCell}>
                <input
                  type="text"
                  value={formData.nomor}
                  onChange={(e) => handleInputChange("nomor", e.target.value)}
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.labelCell}>TUK</td>
              <td style={styles.emptyCell}></td>
              <td style={styles.colonCell}>:</td>
              <td style={styles.inputCell}>
                <input
                  type="text"
                  value={formData.tuk}
                  onChange={(e) => handleInputChange("tuk", e.target.value)}
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.labelCell}>Nama Asesor</td>
              <td style={styles.emptyCell}></td>
              <td style={styles.colonCell}>:</td>
              <td style={styles.inputCell}>
                <input
                  type="text"
                  value={formData.namaAsesor}
                  onChange={(e) =>
                    handleInputChange("namaAsesor", e.target.value)
                  }
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.labelCell}>Nama Asesi</td>
              <td style={styles.emptyCell}></td>
              <td style={styles.colonCell}>:</td>
              <td style={styles.inputCell}>
                <input
                  type="text"
                  value={formData.namaAsesi}
                  onChange={(e) =>
                    handleInputChange("namaAsesi", e.target.value)
                  }
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.labelCell}>Tanggal</td>
              <td style={styles.emptyCell}></td>
              <td style={styles.colonCell}>:</td>
              <td style={styles.inputCell}>
                <input
                  type="date"
                  value={formData.tanggal}
                  onChange={(e) => handleInputChange("tanggal", e.target.value)}
                  style={styles.input}
                />
              </td>
            </tr>
            <tr>
              <td style={styles.labelCell}>Waktu</td>
              <td style={styles.emptyCell}></td>
              <td style={styles.colonCell}>:</td>
              <td style={styles.inputCell}>
                <input
                  type="time"
                  value={formData.waktu}
                  onChange={(e) => handleInputChange("waktu", e.target.value)}
                  style={styles.input}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <p style={styles.note}>*Coret yang tidak perlu</p>

        {/* Questions Section */}
        <div style={styles.questionSection}>
          <h3 style={styles.questionTitle}>
            Lembar Jawaban Pertanyaan Tertulis – Pilihan Ganda:
          </h3>

          <div style={styles.answersContainer}>
            {/* Left Column */}
            <table style={styles.answerTable}>
              <thead>
                <tr>
                  <th style={styles.questionHeader}>No.</th>
                  <th style={styles.questionHeader}>Jawaban</th>
                  <th style={styles.answerHeader} colSpan={2}>
                    Pencapaian
                  </th>
                </tr>
                <tr>
                  <td style={styles.emptyHeader}></td>
                  <td style={styles.emptyHeader}></td>
                  <td style={styles.subAnswerHeader}>Ya</td>
                  <td style={styles.subAnswerHeader}>Tidak</td>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((num) => (
                  <tr key={num}>
                    <td style={styles.questionNumberCell}>{num}.</td>
                    <td style={styles.answerInputCell}>
                      <input
                        type="text"
                        style={styles.answerInput}
                        onChange={(e) =>
                          handleInputChange(`jawaban${num}`, e.target.value)
                        }
                      />
                    </td>
                    <td style={styles.checkboxCell}>
                      <input
                        type="checkbox"
                        checked={checkedAnswers[`${num}-ya`] || false}
                        onChange={() => handleCheckboxChange(num, "ya")}
                        style={styles.checkbox}
                      />
                    </td>
                    <td style={styles.checkboxCell}>
                      <input
                        type="checkbox"
                        checked={checkedAnswers[`${num}-tidak`] || false}
                        onChange={() => handleCheckboxChange(num, "tidak")}
                        style={styles.checkbox}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Right Column */}
            <table style={styles.answerTable}>
              <thead>
                <tr>
                  <th style={styles.questionHeader}>No.</th>
                  <th style={styles.questionHeader}>Jawaban</th>
                  <th style={styles.answerHeader} colSpan={2}>
                    Pencapaian
                  </th>
                </tr>
                <tr>
                  <td style={styles.emptyHeader}></td>
                  <td style={styles.emptyHeader}></td>
                  <td style={styles.subAnswerHeader}>Ya</td>
                  <td style={styles.subAnswerHeader}>Tidak</td>
                </tr>
              </thead>
              <tbody>
                {[6, 7, 8, 9, 10].map((num) => (
                  <tr key={num}>
                    <td style={styles.questionNumberCell}>{num}.</td>
                    <td style={styles.answerInputCell}>
                      <input
                        type="text"
                        style={styles.answerInput}
                        onChange={(e) =>
                          handleInputChange(`jawaban${num}`, e.target.value)
                        }
                      />
                    </td>
                    <td style={styles.checkboxCell}>
                      <input
                        type="checkbox"
                        checked={checkedAnswers[`${num}-ya`] || false}
                        onChange={() => handleCheckboxChange(num, "ya")}
                        style={styles.checkbox}
                      />
                    </td>
                    <td style={styles.checkboxCell}>
                      <input
                        type="checkbox"
                        checked={checkedAnswers[`${num}-tidak`] || false}
                        onChange={() => handleCheckboxChange(num, "tidak")}
                        style={styles.checkbox}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Feedback Section */}
        <table style={styles.feedbackTable}>
          <tbody>
            <tr>
              <td style={styles.feedbackLabelCell}>Umpan balik untuk asesi</td>
              <td style={styles.feedbackContentCell}>
                <div style={styles.feedbackHeader}>
                  Aspek pengetahuan seluruh unit kompetensi yang diujikan
                  <br />
                  (tercapai/ belum tercapai)*
                </div>
                <textarea
                  value={formData.aspekPengetahuan}
                  onChange={(e) =>
                    handleInputChange("aspekPengetahuan", e.target.value)
                  }
                  style={styles.feedbackTextarea}
                  placeholder="Aspek pengetahuan..."
                />
                <div style={styles.feedbackSubtext}>
                  Tuliskan unit/elemen/KUK jika belum tercapai: ....
                </div>
                <textarea
                  value={formData.unitBelumTercapai}
                  onChange={(e) =>
                    handleInputChange("unitBelumTercapai", e.target.value)
                  }
                  style={styles.feedbackTextarea}
                  placeholder="Unit/elemen/KUK yang belum tercapai..."
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Signature Sections */}
        <div style={styles.signatureContainer}>
          <table style={styles.signatureTable}>
            <tbody>
              <tr>
                <td style={styles.signatureTitle} colSpan={3}>
                  Asesi :
                </td>
              </tr>
              <tr>
                <td style={styles.signatureLabel}>Nama</td>
                <td style={styles.signatureColon}>:</td>
                <td style={styles.signatureInput}>
                  <input
                    type="text"
                    value={formData.asesiNama}
                    onChange={(e) =>
                      handleInputChange("asesiNama", e.target.value)
                    }
                    style={styles.input}
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.signatureLabel}>Tanda tangan/Tanggal</td>
                <td style={styles.signatureColon}>:</td>
                <td style={styles.signatureInput}>
                  <input
                    type="date"
                    value={formData.asesiTanggal}
                    onChange={(e) =>
                      handleInputChange("asesiTanggal", e.target.value)
                    }
                    style={styles.input}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Asesor Section - Below Asesi */}
        <div style={{ marginTop: "20px" }}>
          <table style={styles.signatureTable}>
            <tbody>
              <tr>
                <td style={styles.signatureTitle} colSpan={3}>
                  Asesor :
                </td>
              </tr>
              <tr>
                <td style={styles.signatureLabel}>Nama</td>
                <td style={styles.signatureColon}>:</td>
                <td style={styles.signatureInput}>
                  <input
                    type="text"
                    value={formData.asesorNama}
                    onChange={(e) =>
                      handleInputChange("asesorNama", e.target.value)
                    }
                    style={styles.input}
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.signatureLabel}>No. Reg</td>
                <td style={styles.signatureColon}>:</td>
                <td style={styles.signatureInput}>
                  <input
                    type="text"
                    value={formData.asesorNoReg}
                    onChange={(e) =>
                      handleInputChange("asesorNoReg", e.target.value)
                    }
                    style={styles.input}
                  />
                </td>
              </tr>
              <tr>
                <td style={styles.signatureLabel}>Tanda tangan/Tanggal</td>
                <td style={styles.signatureColon}>:</td>
                <td style={styles.signatureInput}>
                  <input
                    type="date"
                    value={formData.asesorTanggal}
                    onChange={(e) =>
                      handleInputChange("asesorTanggal", e.target.value)
                    }
                    style={styles.input}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "20px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "white",
    border: "2px solid #ff6200",
    fontSize: "12px",
    lineHeight: "1.4",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "14px",
    fontWeight: "bold",
    margin: "0",
  },
  mainTable: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "10px",
    border: "2px solid #ff6200",
  },
  labelCell: {
    border: "1px solid #ff6200",
    padding: "8px",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    width: "20%",
    verticalAlign: "middle",
  },
  subLabelCell: {
    border: "1px solid #ff6200",
    padding: "8px",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    width: "10%",
  },
  colonCell: {
    border: "1px solid #ff6200",
    padding: "8px",
    width: "3%",
    textAlign: "center",
  },
  inputCell: {
    border: "1px solid #ff6200",
    padding: "8px",
    width: "67%",
  },
  emptyCell: {
    border: "1px solid #ff6200",
    padding: "8px",
    width: "10%",
  },
  input: {
    width: "100%",
    border: "none",
    outline: "none",
    fontSize: "12px",
    backgroundColor: "transparent",
  },
  note: {
    fontSize: "11px",
    margin: "5px 0 20px 0",
    fontStyle: "italic",
  },
  questionSection: {
    marginBottom: "20px",
  },
  questionTitle: {
    fontSize: "12px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  answersContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
  },
  answerTable: {
    width: "48%",
    borderCollapse: "collapse",
    border: "2px solid #ff6200",
  },
  questionHeader: {
    border: "1px solid #ff6200",
    padding: "8px",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    textAlign: "center",
  },
  answerHeader: {
    border: "1px solid #ff6200",
    padding: "8px",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    textAlign: "center",
  },
  emptyHeader: {
    border: "1px solid #ff6200",
    padding: "4px",
    backgroundColor: "#f0f0f0",
  },
  subAnswerHeader: {
    border: "1px solid #ff6200",
    padding: "4px",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "11px",
  },
  questionNumberCell: {
    border: "1px solid #ff6200",
    padding: "8px",
    width: "15%",
    textAlign: "center",
    fontWeight: "bold",
  },
  answerInputCell: {
    border: "1px solid #ff6200",
    padding: "8px",
    width: "50%",
  },
  answerInput: {
    width: "100%",
    border: "none",
    outline: "none",
    fontSize: "11px",
    backgroundColor: "transparent",
    minHeight: "30px",
  },
  checkboxCell: {
    border: "1px solid #ff6200",
    padding: "8px",
    width: "17.5%",
    textAlign: "center",
  },
  checkbox: {
    transform: "scale(1.2)",
  },
  feedbackTable: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
    border: "2px solid #ff6200",
  },
  feedbackLabelCell: {
    border: "1px solid #ff6200",
    padding: "8px",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    width: "25%",
    verticalAlign: "top",
  },
  feedbackContentCell: {
    border: "1px solid #ff6200",
    padding: "8px",
    width: "75%",
    verticalAlign: "top",
  },
  feedbackHeader: {
    fontWeight: "bold",
    marginBottom: "10px",
    lineHeight: "1.3",
  },
  feedbackTextarea: {
    width: "100%",
    minHeight: "60px",
    border: "1px solid #ccc",
    padding: "5px",
    fontSize: "11px",
    resize: "vertical",
    marginBottom: "10px",
  },
  feedbackSubtext: {
    fontSize: "11px",
    marginBottom: "5px",
    fontStyle: "italic",
  },
  signatureContainer: {
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
  },
  signatureTable: {
    width: "48%",
    borderCollapse: "collapse",
    border: "2px solid #ff6200",
  },
  signatureTitle: {
    border: "1px solid #ff6200",
    padding: "8px",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
  signatureLabel: {
    border: "1px solid #ff6200",
    padding: "8px",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    width: "40%",
  },
  signatureColon: {
    border: "1px solid #ff6200",
    padding: "8px",
    width: "5%",
    textAlign: "center",
  },
  signatureInput: {
    border: "1px solid #ff6200",
    padding: "8px",
    width: "55%",
  },
};

export default LembarJawabanPG;
