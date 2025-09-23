import React, { useEffect, useState } from "react";
import Image12 from "../../img/image 12.png";
import { useNavigate } from "react-router-dom";
import NavAsesi from "../../components/NavAsesi";
import { useDashboardAsesi } from "../../context/DashboardAsesiContext";
import { getAssesmentById, getQuestionsBySkema, submitFormIa03 } from "../../api/api";

const IA03 = () => {
  const navigate = useNavigate();
  const { userAssessments } = useDashboardAsesi();
  const [formData, setFormData] = useState({
    judulUnit: "",
    kodeUnit: "",
    checkedAnswers: {},
    responses: {},
  });
  const [questions, setQuestions] = useState([]);

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

  // Auto-populate judulUnit/kodeUnit from active assessment
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
      const judulUnit = firstUnit?.judul || firstUnit?.nama || firstUnit?.name || "";
      const kodeUnit = firstUnit?.kode || firstUnit?.code || "";
      setFormData((prev) => ({
        ...prev,
        judulUnit: prev.judulUnit || judulUnit,
        kodeUnit: prev.kodeUnit || kodeUnit,
      }));

      // Fetch questions by skema for IA-03 from API, replacing dummy
      const skemaId = assesmentDetail?.skema_id || assesmentDetail?.skema?.id || assesmentDetail?.schema?.id;
      if (skemaId) {
        try {
          const qres = await getQuestionsBySkema(skemaId);
          const list = qres?.data?.data || [];
          setQuestions(Array.isArray(list) ? list : []);
        } catch (e) {
          // 404 when no questions -> keep empty, UI will show no data
          setQuestions([]);
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(userAssessments)]);

  const isFormValid = () => {
    // required top fields
    const requiredFields = ["judulUnit", "kodeUnit"];
    const hasRequiredFields = requiredFields.every(
      (f) => (formData[f] || "").trim() !== ""
    );

    // if there are questions, require each to have a choice (ya/tidak) and a response
    if (Array.isArray(questions) && questions.length > 0) {
      for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const key = `q_${q.id ?? i}`;
        const ans = formData.checkedAnswers?.[key] || {};
        const hasAnswer = !!(ans.ya || ans.tidak);
        const resp = (formData.responses?.[key] || "").trim();
        if (!hasAnswer || !resp) return false;
      }
    }

    return hasRequiredFields;
  };

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!isFormValid()) {
      alert(
        "Harap lengkapi semua data (Judul Unit, Kode Unit, Tanggapan, dan pilih Ya/Tidak)."
      );
      return;
    }
    try {
      // derive assesment_asesi_id & skema_id from active assessment
      const ua = Array.isArray(userAssessments) ? userAssessments : [];
      const chosen = ua.find((a) => a?.status === "active" || a?.status === "scheduled") || ua[0];
      const assesment_asesi_id = chosen?.id;
      const assesmentDetail = chosen?.assesment;
      const skema_id = assesmentDetail?.skema_id || assesmentDetail?.skema?.id || assesmentDetail?.schema?.id;

      if (!assesment_asesi_id) {
        alert("Tidak dapat menemukan assesment_asesi_id. Pastikan Anda memiliki asesmen aktif.");
        return;
      }

      // build questions payload from current selections
      const qPayload = (questions || []).map((q, idx) => {
        const key = `q_${q.id ?? idx}`;
        const ans = formData.checkedAnswers?.[key] || {};
        const selected_option = ans.ya ? 'ya' : (ans.tidak ? 'tidak' : null);
        return {
          question_id: q.id,
          selected_option,
          response_text: formData.responses?.[key] || "",
        };
      }).filter(x => x.question_id && x.selected_option && (x.response_text || '').trim() !== '');

      await submitFormIa03({
        assesment_asesi_id,
        skema_id,
        questions: qPayload,
      });

      // Also keep a local copy (optional)
      try { localStorage.setItem("ia03FormData", JSON.stringify(formData)); } catch(_) {}

      setIsFormSubmitted(true);
      setShowModal(true);
    } catch (err) {
      console.error('Submit IA-03 error', err);
      alert('Gagal mengirim IA-03. Mohon coba lagi.');
    }
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

      {/* Job Group Section removed (dummy content) */}

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
          {Array.isArray(questions) && questions.length > 0 ? (
            questions.map((q, idx) => {
              const key = `q_${q.id ?? idx}`;
              const ya = formData.checkedAnswers?.[key]?.ya || false;
              const tidak = formData.checkedAnswers?.[key]?.tidak || false;
              const resp = formData.responses?.[key] || "";
              return (
                <tr key={key}>
                  <td style={styles.questionCell}>
                    <div style={styles.questionText}>
                      {q.question_text || q.text || q.soal || `Pertanyaan ${idx + 1}`}
                    </div>
                    <div style={styles.responseBox}>
                      <div style={styles.responseLabel}>Isi Tanggapanmu di sini:</div>
                      <textarea
                        value={resp}
                        onChange={(e) => handleResponseChange(key, e.target.value)}
                        placeholder="Tulis tanggapan asesi di sini..."
                        style={styles.textArea}
                      />
                    </div>
                  </td>
                  <td style={styles.checkboxCell}>
                    <input
                      type="checkbox"
                      checked={ya}
                      onChange={() => handleCheckboxChange(key, "ya")}
                      style={styles.checkbox}
                    />
                  </td>
                  <td style={styles.checkboxCell}>
                    <input
                      type="checkbox"
                      checked={tidak}
                      onChange={() => handleCheckboxChange(key, "tidak")}
                      style={styles.checkbox}
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={3} style={{ textAlign: "center", padding: "12px", color: "#6b7280" }}>
                Tidak ada pertanyaan untuk skema ini.
              </td>
            </tr>
          )}
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