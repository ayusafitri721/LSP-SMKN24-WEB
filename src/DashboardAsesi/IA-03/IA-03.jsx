import React, { useEffect, useState } from "react";
import Image12 from "../../img/image 12.png";
import { useNavigate } from "react-router-dom";
import NavAsesi from "../../components/NavAsesi";

const IA03 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    judulUnit: "",
    kodeUnit: "",
    checkedAnswers: {},
    responses: {},
  });

  const [showModal, setShowModal] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  // Blok navigasi ke tab lain sebelum submit
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!isFormSubmitted) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      if (
        !isFormSubmitted &&
        !String(args[2] || "").includes("/dashboard-asesi/ia-03")
      ) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalPushState.apply(window.history, args);
    };

    window.history.replaceState = function (...args) {
      if (
        !isFormSubmitted &&
        !String(args[2] || "").includes("/dashboard-asesi/ia-03")
      ) {
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

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (questionId, answerType) => {
    const oppositeType = answerType === "ya" ? "tidak" : "ya";
    setFormData((prev) => ({
      ...prev,
      checkedAnswers: {
        ...prev.checkedAnswers,
        [questionId]: {
          ...prev.checkedAnswers[questionId],
          [answerType]: !prev.checkedAnswers[questionId]?.[answerType],
          [oppositeType]: false,
        },
      },
    }));
  };

  const handleResponseChange = (questionId, value) => {
    setFormData((prev) => ({
      ...prev,
      responses: {
        ...prev.responses,
        [questionId]: value,
      },
    }));
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const isFormValid = () => {
    const requiredFields = ["judulUnit", "kodeUnit"];
    const hasRequiredFields = requiredFields.every(
      (f) => (formData[f] || "").trim() !== ""
    );
    const hasResponseQ1 = (formData.responses?.question1 || "").trim() !== "";
    const hasAnswerQ1 = !!(
      formData.checkedAnswers?.question1?.ya ||
      formData.checkedAnswers?.question1?.tidak
    );
    return hasRequiredFields && hasResponseQ1 && hasAnswerQ1;
  };

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!isFormValid()) {
      alert(
        "Harap lengkapi semua data (Judul Unit, Kode Unit, Tanggapan, dan pilih Ya/Tidak)."
      );
      return;
    }
    try {
      localStorage.setItem("ia03FormData", JSON.stringify(formData));
    } catch (_) {}
    setIsFormSubmitted(true);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => {
      // Navigate to ia-06 page
      navigate("/dashboard-asesi/ia-06");
    }, 300);
  };

  return (
    <div style={pageContainerStyle}>
      {/* Scrollbar styling for WebKit browsers */}
      <style>
        {`
          .nav-scrollbar::-webkit-scrollbar { height: 5px; }
          .nav-scrollbar::-webkit-scrollbar-track { background: transparent; }
          .nav-scrollbar::-webkit-scrollbar-thumb { background: #888; border-radius: 5px; }
          .nav-scrollbar::-webkit-scrollbar-thumb:hover { background: #555; }
        `}
      </style>

      {showWarning && (
        <div style={warningNotificationStyle}>
          Silakan isi dan kirim formulir FR.IA.03 terlebih dahulu!
        </div>
      )}

      {/* Header ala AK-01 (Nav + Logo) */}
      <div style={headerSectionStyle}>
        <div style={navContainerStyle} className="nav-scrollbar">
          <NavAsesi activeTab="FR.IA.03" />
        </div>
        <div style={logoContainerStyle}>
          <h1 style={logoTextStyle}>MyLSP</h1>
        </div>
      </div>

      {/* Header konten (judul form) */}
      <div style={styles.headerSectionStyle2}>
        <div style={styles.logoContainer2Style}>
          <img
            src={Image12}
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
        <div style={styles.headerContentStyle}>
          <div style={styles.titleStyle}>FR.IA.03</div>
          <div style={styles.subtitleStyle}>
            Pertanyaan Untuk Mendukung Observasi
          </div>
        </div>
      </div>

      {/* Main Content */}
      {/* Schema Information */}
      <table style={styles.schemaTable}>
        <tbody>
          <tr>
            <td style={styles.schemaLabelCell} rowSpan={2}>
              Skema Sertifikasi
              <br />
              <span style={styles.schemaSubtext}>(KKNI/OKUPASI/KLASTER)</span>
            </td>
            <td style={styles.schemaSubLabelCell}>Judul Unit</td>
            <td style={styles.colonCell}>:</td>
            <td style={styles.schemaInputCell}>
              <input
                type="text"
                value={formData.judulUnit}
                onChange={(e) => handleInputChange("judulUnit", e.target.value)}
                style={styles.input}
              />
            </td>
          </tr>
          <tr>
            <td style={styles.schemaSubLabelCell}>Kode Unit</td>
            <td style={styles.colonCell}>:</td>
            <td style={styles.schemaInputCell}>
              <input
                type="text"
                value={formData.kodeUnit}
                onChange={(e) => handleInputChange("kodeUnit", e.target.value)}
                style={styles.input}
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Instructions Section */}
      <div style={styles.instructionSection}>
        <div style={styles.instructionHeader}>
          <strong>PADUAN ASESMEN MANDIRI</strong>
        </div>
        <div style={styles.instructionContent}>
          <p style={styles.instructionTitle}>
            <strong>Instruksi:</strong>
          </p>
          <ul style={styles.instructionList}>
            <li>
              Formulir ini di isi oleh asesor kompetensi dapat sebelum, pada
              saat atau setelah melakukan asesmen dengan metode observasi
              demonstrasi.
            </li>
            <li>
              Pertanyaan dibuat dengan tujuan untuk menggali, dapat berisi
              pertanyaan yang berkaitan dengan dimensi kompetensi, batasan
              variabel dan aspek kritis yang relevan dengan skenario tugas dan
              praktek demonstrasi.
            </li>
            <li>
              Jika pertanyaan disampaikan sebelum asesi melakukan praktek
              demonstrasi, maka pertanyaan dibuat berkaitan dengan aspek K3L,
              SOP, penggunaan peralatan dan perlengkapan.
            </li>
            <li>
              Jika setelah asesi melakukan praktik demonstrasi terdapat item
              pertanyaan pendukung observasi telah terpenuhi, maka pertanyaan
              tersebut tidak perlu ditanyakan lagi dan cukup memberi catatan
              bahwa sudah terpenuhi pada saat tugas praktek demonstrasi pada
              kolom tanggapan.
            </li>
            <li>
              Jika pada saat observasi ada hal yang perlu dikonfirmasi sedangkan
              di instrumen daftar pertanyaan pendukung observasi tidak ada, maka
              asesor dapat memberikan pertanyaan dengan syarat pertanyaan harus
              berkaitan dengan tugas praktek demonstrasi. Jika dilakukan, asesor
              harus mencatat dalam instrumen pertanyaan pendukung observasi.
            </li>
            <li>Tanggapan asesi ditulis pada kolom tanggapan.</li>
          </ul>
        </div>
      </div>

      {/* Job Group Section */}
      <div style={styles.jobGroupSection}>
        <h4 style={styles.jobGroupTitle}>Kelompok Pekerjaan 1</h4>
        <ol style={styles.jobList}>
          <li>GAB.CM01.003.01 Mengikuti Prosedur Kesehatan</li>
          <li>dst</li>
          <li>dst</li>
          <li>dst</li>
        </ol>
      </div>

      {/* Questions Table */}
      <table style={styles.questionTable}>
        <thead>
          <tr>
            <th style={styles.questionHeaderCell}>Pertanyaan</th>
            <th style={styles.answerHeaderCell}>Ya</th>
            <th style={styles.answerHeaderCell}>Tidak</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.questionCell}>
              <div style={styles.questionText}>
                Anda seorang operator yunior busana, sebelum memulai kegiatan
                menjahit blus, anda perlu memperhatikan SOP kesehatan dan
                keselamatan kerja, apa yang akan anda lakukan supaya tidak
                terjadi kecelakaan kerja pada waktu menjahit blus? (JRES)
              </div>
              <div style={styles.responseBox}>
                <div style={styles.responseLabel}>isi TanggapanMu disini:</div>
                <textarea
                  value={formData.responses.question1 || ""}
                  onChange={(e) =>
                    handleResponseChange("question1", e.target.value)
                  }
                  placeholder="Tulis tanggapan asesi di sini..."
                  style={{
                    width: "100%",
                    minHeight: "60px",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    resize: "vertical",
                    fontSize: "12px",
                    color: "#333",
                  }}
                />
              </div>
            </td>
            <td style={styles.checkboxCell}>
              <input
                type="checkbox"
                checked={formData.checkedAnswers.question1?.ya || false}
                onChange={() => handleCheckboxChange("question1", "ya")}
                style={styles.checkbox}
              />
            </td>
            <td style={styles.checkboxCell}>
              <input
                type="checkbox"
                checked={formData.checkedAnswers.question1?.tidak || false}
                onChange={() => handleCheckboxChange("question1", "tidak")}
                style={styles.checkbox}
              />
            </td>
          </tr>
        </tbody>
      </table>

      {/* Send Button */}
      <div style={styles.buttonContainer}>
        <button type="button" onClick={handleSubmit} style={styles.sendButton}>
          Kirim
        </button>
      </div>

      {showModal && (
        <div style={modalOverlayStyle} onClick={handleCloseModal}>
          <div style={modalContainerStyle} onClick={(e) => e.stopPropagation()}>
            <div style={iconContainerStyle}>
              <div style={successIconStyle}>
                <div style={checkCircleStyle}>
                  <div style={checkMarkStyle}>✓</div>
                </div>
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
            <div style={modalTitleStyle}>Jawaban anda telah direkam!</div>
            <button
              style={okayButtonStyle}
              onClick={handleCloseModal}
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

export default IA03;

const styles = {
  container: {
    maxWidth: "1000px",
    margin: "20px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "white",
    fontSize: "12px",
    lineHeight: "1.4",
  },
  logoContainer2Style: {
    flexShrink: 0,
  },

  headerContentStyle: {
    flex: 1,
  },

  headerSectionStyle2: {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    marginBottom: "20px",
    paddingBottom: "15px",
    borderBottom: "2px solid #FF8C00",
  },

  titleStyle: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0 0 5px 0",
    color: "#333",
    textAlign: "center",
  },

  subtitleStyle: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0 0 15px 0",
    color: "#333",
    textAlign: "center",
  },
  schemaTable: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
    border: "2px solid #333",
  },
  schemaLabelCell: {
    border: "1px solid #333",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    width: "20%",
    verticalAlign: "middle",
    textAlign: "center",
  },
  schemaSubtext: {
    fontSize: "10px",
    fontWeight: "normal",
  },
  schemaSubLabelCell: {
    border: "1px solid #333",
    padding: "8px",
    fontWeight: "bold",
    width: "15%",
    textAlign: "left",
  },
  colonCell: {
    border: "1px solid #333",
    padding: "8px",
    width: "3%",
    textAlign: "center",
  },
  schemaInputCell: {
    border: "1px solid #333",
    padding: "8px",
    width: "62%",
  },
  input: {
    width: "100%",
    border: "none",
    outline: "none",
    fontSize: "12px",
    backgroundColor: "transparent",
  },
  instructionSection: {
    marginBottom: "20px",
    border: "2px solid #f6b27a",
    borderRadius: "6px",
    overflow: "hidden",
  },
  instructionHeader: {
    backgroundColor: "#f6b27a",
    padding: "12px 16px",
    fontSize: "14px",
    fontWeight: "bold",
    textAlign: "left",
    color: "#333",
  },
  instructionContent: {
    backgroundColor: "#fde6d2",
    padding: "16px",
  },
  instructionTitle: {
    margin: "0 0 10px 0",
    fontSize: "12px",
  },
  instructionList: {
    margin: "0",
    paddingLeft: "20px",
    fontSize: "11px",
    lineHeight: "1.5",
  },
  jobGroupSection: {
    marginBottom: "20px",
  },
  jobGroupTitle: {
    fontSize: "13px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  jobList: {
    margin: "0",
    paddingLeft: "20px",
    fontSize: "12px",
    lineHeight: "1.5",
  },
  questionTable: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
    border: "2px solid #333",
  },
  questionHeaderCell: {
    border: "1px solid #333",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    textAlign: "center",
    width: "70%",
  },
  answerHeaderCell: {
    border: "1px solid #333",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    textAlign: "center",
    width: "15%",
  },
  questionCell: {
    border: "1px solid #333",
    padding: "15px",
    verticalAlign: "top",
  },
  questionText: {
    fontSize: "12px",
    lineHeight: "1.5",
    marginBottom: "15px",
  },
  responseBox: {
    backgroundColor: "#f5f5f5",
    padding: "10px",
    minHeight: "40px",
    border: "1px solid #ccc",
  },
  responseLabel: {
    fontSize: "10px",
    fontStyle: "italic",
    color: "#666",
  },
  checkboxCell: {
    border: "1px solid #333",
    padding: "15px",
    textAlign: "center",
    verticalAlign: "middle",
  },
  checkbox: {
    transform: "scale(1.5)",
    cursor: "pointer",
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: "20px",
  },
  sendButton: {
    backgroundColor: "#4a90e2",
    color: "white",
    padding: "12px 30px",
    border: "none",
    borderRadius: "5px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },
};

// Styles tambahan (konsisten dengan AK-01)
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
  marginBottom: "20px",
};

const navContainerStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.95)",
  padding: "5px 15px",
  borderRadius: "0 15px 40px 15px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  margin: "0",
  overflowX: "auto",
  maxWidth: "50%",
  whiteSpace: "nowrap",
  backdropFilter: "blur(10px)",
  position: "relative",
  zIndex: 2,
};

const logoContainerStyle = {
  height: "120px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "10px",
  marginBottom: "10px",
};

const logoTextStyle = {
  color: "white",
  fontSize: "36px",
  fontWeight: "bold",
  margin: 0,
  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  letterSpacing: "1px",
};

const modalOverlayStyle = {
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

const modalContainerStyle = {
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

const modalTitleStyle = {
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
};
