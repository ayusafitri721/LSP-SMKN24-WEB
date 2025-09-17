import React, { useState } from 'react';
import Image12 from '../../img/image 12.png';
import { useNavigate } from 'react-router-dom';

const IA03 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    judulUnit: '',
    kodeUnit: '',
    checkedAnswers: {},
    responses: {}
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (questionId, answerType) => {
    const oppositeType = answerType === 'ya' ? 'tidak' : 'ya';
    setFormData(prev => ({
      ...prev,
      checkedAnswers: {
        ...prev.checkedAnswers,
        [questionId]: {
          ...prev.checkedAnswers[questionId],
          [answerType]: !prev.checkedAnswers[questionId]?.[answerType],
          [oppositeType]: false
        }
      }
    }));
  };

  const handleResponseChange = (questionId, value) => {
    setFormData(prev => ({
      ...prev,
      responses: {
        ...prev.responses,
        [questionId]: value
      }
    }));
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif', padding: '15px' }}>
      {/* Navigation Bar - Putih */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          backgroundColor: 'white',
          color: '#333',
          padding: '10px 20px',
          borderRadius: '15px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '20px',
        }}
      >
        <div style={{ cursor: 'pointer' }} onClick={() => handleNavigate('/dashboard-asesi/apl-01')}>FR.APL.01</div>
        <div style={{ cursor: 'pointer' }} onClick={() => handleNavigate('/dashboard-asesi/apl-02')}>FR.APL.02</div>
        <div style={{ cursor: 'pointer' }} onClick={() => handleNavigate('/dashboard-asesi/ak-01')}>FR.AK.01</div>
        <div style={{ cursor: 'pointer' }} onClick={() => handleNavigate('/dashboard-asesi/ak-04')}>FR.AK.04</div>
        <div style={{ cursor: 'pointer' }} onClick={() => handleNavigate('/dashboard-asesi/ia-01')}>FR.IA.01.CL</div>
        <div style={{ cursor: 'pointer' }} onClick={() => handleNavigate('/dashboard-asesi/ia-02')}>FR.IA.02.TPD</div>
        <div style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => handleNavigate('/dashboard-asesi/ia-03')}>FR.IA.03</div>
        <div style={{ cursor: 'pointer' }} onClick={() => handleNavigate('/dashboard-asesi/ia-06')}>FR.IA.06A.DPT</div>
      </div>

      {/* Header dengan gambar, tema oranye, dan sudut melengkung */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,140,0,0.7), rgba(255,140,0,0.7)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '160px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        }}
      >
        <h1
          style={{
            color: 'white',
            fontSize: '48px',
            fontWeight: 'bold',
            margin: 0,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            letterSpacing: '2px',
          }}
        >
          MyLSP
        </h1>
      </div>

      {/* Main Content */}
        {/* Header with Logo - Diperbaiki untuk logo di kiri */}
        <div style={styles.header}>
        <div style={styles.logoWrapper}>
          <img src={Image12} alt="Logo" style={styles.logoImage} />
        </div>
        <div style={styles.titleWrapper}>
          <h2 style={styles.formNumber}>FR.IA.03</h2>
          <h3 style={styles.formTitle}>Pertanyaan Untuk Mendukung Observasi</h3>
          <br></br>
        </div>

        {/* Schema Information */}
        <table style={styles.schemaTable}>
          <tbody>
            <tr>
              <td style={styles.schemaLabelCell} rowSpan={2}>
                Skema Sertifikasi<br />
                <span style={styles.schemaSubtext}>(KKNI/OKUPASI/KLASTER)</span>
              </td>
              <td style={styles.schemaSubLabelCell}>Judul Unit</td>
              <td style={styles.colonCell}>:</td>
              <td style={styles.schemaInputCell}>
                <input
                  type="text"
                  value={formData.judulUnit}
                  onChange={(e) => handleInputChange('judulUnit', e.target.value)}
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
                  onChange={(e) => handleInputChange('kodeUnit', e.target.value)}
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
            <p style={styles.instructionTitle}><strong>Instruksi:</strong></p>
            <ul style={styles.instructionList}>
              <li>Formulir ini di isi oleh asesor kompetensi dapat sebelum, pada saat atau setelah melakukan asesmen dengan metode observasi demonstrasi.</li>
              <li>Pertanyaan dibuat dengan tujuan untuk menggali, dapat berisi pertanyaan yang berkaitan dengan dimensi kompetensi, batasan variabel dan aspek kritis yang relevan dengan skenario tugas dan praktek demonstrasi.</li>
              <li>Jika pertanyaan disampaikan sebelum asesi melakukan praktek demonstrasi, maka pertanyaan dibuat berkaitan dengan aspek K3L, SOP, penggunaan peralatan dan perlengkapan.</li>
              <li>Jika setelah asesi melakukan praktik demonstrasi terdapat item pertanyaan pendukung observasi telah terpenuhi, maka pertanyaan tersebut tidak perlu ditanyakan lagi dan cukup memberi catatan bahwa sudah terpenuhi pada saat tugas praktek demonstrasi pada kolom tanggapan.</li>
              <li>Jika pada saat observasi ada hal yang perlu dikonfirmasi sedangkan di instrumen daftar pertanyaan pendukung observasi tidak ada, maka asesor dapat memberikan pertanyaan dengan syarat pertanyaan harus berkaitan dengan tugas praktek demonstrasi. Jika dilakukan, asesor harus mencatat dalam instrumen pertanyaan pendukung observasi.</li>
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
                  Anda seorang operator yunior busana, sebelum memulai kegiatan menjahit blus, anda perlu memperhatikan SOP kesehatan dan keselamatan kerja, apa yang akan anda lakukan supaya tidak terjadi kecelakaan kerja pada waktu menjahit blus? (JRES)
                </div>
                <div style={styles.responseBox}>
                  <div style={styles.responseLabel}>isi TanggapanMu disini:</div>
                  <textarea
                    value={formData.responses.question1 || ''}
                    onChange={(e) => handleResponseChange('question1', e.target.value)}
                    placeholder="Tulis tanggapan asesi di sini..."
                    style={{
                      width: '100%',
                      minHeight: '60px',
                      border: 'none',
                      outline: 'none',
                      backgroundColor: 'transparent',
                      resize: 'vertical',
                      fontSize: '12px',
                      color: '#333'
                    }}
                  />
                </div>
              </td>
              <td style={styles.checkboxCell}>
                <input
                  type="checkbox"
                  checked={formData.checkedAnswers.question1?.ya || false}
                  onChange={() => handleCheckboxChange('question1', 'ya')}
                  style={styles.checkbox}
                />
              </td>
              <td style={styles.checkboxCell}>
                <input
                  type="checkbox"
                  checked={formData.checkedAnswers.question1?.tidak || false}
                  onChange={() => handleCheckboxChange('question1', 'tidak')}
                  style={styles.checkbox}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Send Button */}
        <div style={styles.buttonContainer}>
          <button style={styles.sendButton}>
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default IA03;

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '20px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
    fontSize: '12px',
    lineHeight: '1.4'
  },
  header: {
    display: "grid",
     // kiri 100px buat logo, kanan sisanya buat judul
    alignItems: "center",
    marginBottom: "20px",
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "50px"
  },
  logoImage: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
    
    alignItems: "center"
    
  },
  titleWrapper: {
    textAlign: "center",
  },
  formNumber: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: "0 0 5px 0",
    color: "#333",
    
  },
  formTitle: {
    fontSize: "14px",
    fontWeight: "bold",
    margin: 0,
    color: "#333",
    
  },
  schemaTable: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
    border: '2px solid #333'
  },
  schemaLabelCell: {
    border: '1px solid #333',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    width: '20%',
    verticalAlign: 'middle',
    textAlign: 'center'
  },
  schemaSubtext: {
    fontSize: '10px',
    fontWeight: 'normal'
  },
  schemaSubLabelCell: {
    border: '1px solid #333',
    padding: '8px',
    fontWeight: 'bold',
    width: '15%',
    textAlign: 'left'
  },
  colonCell: {
    border: '1px solid #333',
    padding: '8px',
    width: '3%',
    textAlign: 'center'
  },
  schemaInputCell: {
    border: '1px solid #333',
    padding: '8px',
    width: '62%'
  },
  input: {
    width: '100%',
    border: 'none',
    outline: 'none',
    fontSize: '12px',
    backgroundColor: 'transparent'
  },
  instructionSection: {
    marginBottom: '20px',
    border: '2px solid #f6b27a',
    borderRadius: '6px',
    overflow: 'hidden'
  },
  instructionHeader: {
    backgroundColor: '#f6b27a',
    padding: '12px 16px',
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#333'
  },
  instructionContent: {
    backgroundColor: '#fde6d2',
    padding: '16px'
  },
  instructionTitle: {
    margin: '0 0 10px 0',
    fontSize: '12px'
  },
  instructionList: {
    margin: '0',
    paddingLeft: '20px',
    fontSize: '11px',
    lineHeight: '1.5'
  },
  jobGroupSection: {
    marginBottom: '20px'
  },
  jobGroupTitle: {
    fontSize: '13px',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  jobList: {
    margin: '0',
    paddingLeft: '20px',
    fontSize: '12px',
    lineHeight: '1.5'
  },
  questionTable: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
    border: '2px solid #333'
  },
  questionHeaderCell: {
    border: '1px solid #333',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '70%'
  },
  answerHeaderCell: {
    border: '1px solid #333',
    padding: '10px',
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '15%'
  },
  questionCell: {
    border: '1px solid #333',
    padding: '15px',
    verticalAlign: 'top'
  },
  questionText: {
    fontSize: '12px',
    lineHeight: '1.5',
    marginBottom: '15px'
  },
  responseBox: {
    backgroundColor: '#f5f5f5',
    padding: '10px',
    minHeight: '40px',
    border: '1px solid #ccc'
  },
  responseLabel: {
    fontSize: '10px',
    fontStyle: 'italic',
    color: '#666'
  },
  checkboxCell: {
    border: '1px solid #333',
    padding: '15px',
    textAlign: 'center',
    verticalAlign: 'middle'
  },
  checkbox: {
    transform: 'scale(1.5)',
    cursor: 'pointer'
  },
  buttonContainer: {
    textAlign: 'center',
    marginTop: '20px'
  },
  sendButton: {
    backgroundColor: '#4a90e2',
    color: 'white',
    padding: '12px 30px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
  }
};