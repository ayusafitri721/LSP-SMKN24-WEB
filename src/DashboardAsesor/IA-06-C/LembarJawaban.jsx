import React, { useState } from 'react';
import { Check } from 'lucide-react';

const IA06C = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [formData, setFormData] = useState({
    skemaSertifikasi: '',
    judulUnit: '',
    kodeUnit: '',
    tuk: '',
    namaAsesor: '',
    namaAsesi: '',
    tanggal: '',
    waktu: '',
    responses: {
      q1: { answer: '', text: '' },
      q2: { answer: '', text: '' },
      q3: { answer: '', text: '' },
      q4: { answer: '', text: '' },
      q5: { answer: '', text: '' },
    },
  });

  // Mencegah navigasi dengan menonaktifkan shortcuts tetapi membolehkan back button normal
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'F5' || 
          (e.ctrlKey && e.key === 'r') || 
          (e.ctrlKey && e.key === 'w') ||
          (e.ctrlKey && e.key === 't')) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Mencegah navigasi dengan menonaktifkan back button dan shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'F5' || 
          (e.ctrlKey && e.key === 'r') || 
          (e.altKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) ||
          (e.ctrlKey && e.key === 'w') ||
          (e.ctrlKey && e.key === 't')) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', () => {
      window.location.href = '/dashboard-asesor/approved-unapproved/0893923923';
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const mainHeaderStyle = {
    backgroundImage: `url('/src/img/kontak.png')`,
    backgroundColor: '#FFA500',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
    fontSize: 'clamp(32px, 8vw, 60px)',
    fontWeight: 'bold',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '0 0 30px 30px',
    margin: '15px 0',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(255,165,0,0.7) 0%, rgba(255,140,0,0.6) 100%)',
    zIndex: 1
  };

  const textStyle = {
    position: 'relative',
    zIndex: 2
  };

  const pageContainerStyle = {
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    position: 'relative'
  };

  const subHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 'clamp(15px, 3vw, 30px) clamp(15px, 3vw, 30px)',
    margin: '0 clamp(10px, 2vw, 20px)',
    borderRadius: '0 0 15px 15px',
    transform: 'translateY(-15px)',
    position: 'relative',
    zIndex: 3,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  };

  const contentContainerStyle = {
    padding: 'clamp(15px, 3vw, 30px) clamp(15px, 3vw, 30px)',
    margin: '0 clamp(10px, 2vw, 20px)',
    backgroundColor: 'white',
    borderRadius: '15px',
    marginTop: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
    border: '2px solid #333',
  };

  const tableCellStyle = {
    padding: 'clamp(6px, 1.5vw, 12px)',
    border: '1px solid #333',
    fontSize: 'clamp(12px, 2.5vw, 14px)',
    color: '#333',
    verticalAlign: 'middle',
  };

  const tableTopCellStyle = {
    ...tableCellStyle,
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold',
    textAlign: 'center',
    verticalAlign: 'middle',
  };

  const formSectionHeaderStyle = {
    backgroundColor: '#f8f8f8',
    border: '1px solid #333',
    padding: 'clamp(10px, 2vw, 15px)',
    textAlign: 'center',
    fontSize: 'clamp(14px, 3vw, 16px)',
    fontWeight: 'bold',
    margin: '20px 0',
    color: '#333',
  };

  const questionBoxStyle = {
    border: '1px solid #333',
    borderRadius: '8px',
    padding: 'clamp(10px, 2vw, 15px)',
    marginBottom: '15px',
    backgroundColor: 'white',
  };

  const questionTextStyle = {
    fontSize: 'clamp(12px, 2.5vw, 14px)',
    lineHeight: '1.5',
    marginBottom: '15px',
    color: '#333',
  };

  const answerInputStyle = {
    width: '100%',
    minHeight: '80px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: 'white',
    fontSize: 'clamp(12px, 2.5vw, 14px)',
    boxSizing: 'border-box',
    resize: 'vertical',
    marginBottom: '10px',
  };

  const responseSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '10px',
  };

  const responseLabelStyle = {
    fontSize: 'clamp(12px, 2.5vw, 14px)',
    fontWeight: 'bold',
    color: '#495057',
    marginRight: '15px',
  };

  const checkboxContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  };

  const checkboxLabelStyle = {
    fontSize: 'clamp(12px, 2.5vw, 14px)',
    color: '#555',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: 'clamp(15px, 3vw, 20px)',
    marginTop: '40px',
    paddingTop: '25px',
    flexWrap: 'wrap',
  };

  const buttonStyle = {
    padding: 'clamp(10px, 2vw, 12px) clamp(25px, 5vw, 35px)',
    backgroundColor: 'white',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: 'clamp(12px, 2.5vw, 14px)',
    fontWeight: '500',
    minWidth: 'clamp(100px, 20vw, 120px)',
    transition: 'all 0.2s ease'
  };

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px'
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: 'clamp(20px, 4vw, 40px)',
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
    position: 'relative'
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleResponseChange = (questionNum, value) => {
    setFormData((prev) => ({
      ...prev,
      responses: {
        ...prev.responses,
        [questionNum]: {
          ...prev.responses[questionNum],
          answer: prev.responses[questionNum].answer === value ? '' : value,
        },
      },
    }));
  };

  const handleTextChange = (questionNum, value) => {
    setFormData((prev) => ({
      ...prev,
      responses: {
        ...prev.responses,
        [questionNum]: {
          ...prev.responses[questionNum],
          text: value,
        },
      },
    }));
  };

  const handleApprove = () => {
    setShowModal(true);
  };

  const handleModalOke = () => {
    setShowModal(false);
    setTimeout(() => {
      window.location.href = '/dashboard-asesor/wawancara/0893923923';
    }, 100);
  };

  const handleReject = () => {
    setShowRejectModal(true);
  };

  const handleRejectModalOke = () => {
    setShowRejectModal(false);
    setTimeout(() => {
      window.location.href = '/dashboard-asesor/approved-unapproved/0893923923';
    }, 100);
  };

  const questions = [
    "Bagaimana cara Anda jika menghadapi pelanggan yang mengeluh karena adanya produk yang tidak sesuai dengan pesanannya?",
    "Perbedaan pendapat yang terjadi di lingkungan tempat kerja bisa menjadi tantangan tersendiri jika tidak dihadapi dengan baik. Sebab, bisa menurunkan konflik yang berdampak negatif pada produktivitas dan kesejahteraan anggota tim. Bagaimana mengatasi perbedaan pendapat di tempat kerja dengan cara yang professional?",
    "Apakah tujuan diadakannya prosedur keamanan kesehatan dan keselamatan kerja?",
    "Sehabis menggunting mesin jahit bahan jahitan, sebaiknya membersihkan sisa benang pada mesin. Jika kita melakukan membersihkan sisa kain, benang, atau debu halus yang menempel pada mesin. Tuliskan peralatan yang digunakan untuk membersihkan mesin jahit!",
    "Mengukur tubuh merupakan langkah pertama pada kegiatan membuat suatu busana. Tuliskan salah satu fungsi mengukur tubuh!",
  ];

  return (
    <div style={pageContainerStyle}>
      {/* Header Utama */}
      <div style={mainHeaderStyle}>
        <div style={overlayStyle}></div>
        <div style={textStyle}>MyLSP</div>
      </div>

      {/* Sub Header */}
      <div style={subHeaderStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(10px, 2vw, 20px)', width: '100%' }}>
          <img
            src="/src/img/image 12.png"
            alt="LSP Logo"
            style={{
              width: 'clamp(40px, 8vw, 50px)',
              height: 'clamp(40px, 8vw, 50px)',
              borderRadius: '4px',
              objectFit: 'contain'
            }}
          />
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{
              fontSize: 'clamp(14px, 3vw, 18px)',
              fontWeight: 'bold',
              margin: 0,
              color: '#333'
            }}>FR.IA.06.C LEMBAR JAWABAN DAN PERTANYAN TERTULIS ESAI</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={contentContainerStyle}>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td style={{ ...tableTopCellStyle, width: '20%', verticalAlign: 'middle' }} rowSpan="2">
                Skema Sertifikasi<br/>
                (KKNI/OKUPASI/KLASTER)
              </td>
              <td style={{ ...tableTopCellStyle, width: '2%', verticalAlign: 'middle' }} rowSpan="2">:</td>

              <td style={{ ...tableCellStyle, width: '78%', verticalAlign: 'middle' }}>
                <div style={{ marginBottom: '8px' }}>
                  <label style={{ fontSize: 'clamp(10px, 2vw, 12px)', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>
                    Judul Unit:
                  </label>
                  <input
                    type="text"
                    style={{ 
                      width: '100%', 
                      border: '1px solid #ddd', 
                      outline: 'none', 
                      backgroundColor: 'white',
                      fontSize: 'clamp(11px, 2vw, 13px)',
                      padding: '4px',
                      borderRadius: '3px'
                    }}
                    value={formData.judulUnit}
                    onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ ...tableCellStyle, width: '78%', verticalAlign: 'middle' }}>
                <div>
                  <label style={{ fontSize: 'clamp(10px, 2vw, 12px)', fontWeight: 'bold', display: 'block', marginBottom: '4px' }}>
                    Kode Unit:
                  </label>
                  <input
                    type="text"
                    style={{ 
                      width: '100%', 
                      border: '1px solid #ddd', 
                      outline: 'none', 
                      backgroundColor: 'white',
                      fontSize: 'clamp(11px, 2vw, 13px)',
                      padding: '4px',
                      borderRadius: '3px'
                    }}
                    value={formData.kodeUnit}
                    onChange={(e) => handleInputChange('kodeUnit', e.target.value)}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ ...tableCellStyle, width: '20%' }}>TUK</td>
              <td style={{ ...tableCellStyle, width: '2%' }}>:</td>
              <td style={{ ...tableCellStyle, width: '78%' }} colSpan="2">
                <input
                  type="text"
                  style={{ 
                    width: '100%', 
                    border: 'none', 
                    outline: 'none', 
                    backgroundColor: 'transparent',
                    fontSize: 'clamp(12px, 2.5vw, 14px)'
                  }}
                  value={formData.tuk}
                  onChange={(e) => handleInputChange('tuk', e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td style={{ ...tableCellStyle, width: '20%' }}>Nama Asesor</td>
              <td style={{ ...tableCellStyle, width: '2%' }}>:</td>
              <td style={{ ...tableCellStyle, width: '78%' }} colSpan="2">
                <input
                  type="text"
                  style={{ 
                    width: '100%', 
                    border: 'none', 
                    outline: 'none', 
                    backgroundColor: 'transparent',
                    fontSize: 'clamp(12px, 2.5vw, 14px)'
                  }}
                  value={formData.namaAsesor}
                  onChange={(e) => handleInputChange('namaAsesor', e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td style={{ ...tableCellStyle, width: '20%' }}>Nama Asesi</td>
              <td style={{ ...tableCellStyle, width: '2%' }}>:</td>
              <td style={{ ...tableCellStyle, width: '78%' }} colSpan="2">
                <input
                  type="text"
                  style={{ 
                    width: '100%', 
                    border: 'none', 
                    outline: 'none', 
                    backgroundColor: 'transparent',
                    fontSize: 'clamp(12px, 2.5vw, 14px)'
                  }}
                  value={formData.namaAsesi}
                  onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td style={{ ...tableCellStyle, width: '20%' }}>Tanggal</td>
              <td style={{ ...tableCellStyle, width: '2%' }}>:</td>
              <td style={{ ...tableCellStyle, width: '78%' }} colSpan="2">
                <input
                  type="date"
                  style={{ 
                    width: '100%', 
                    border: 'none', 
                    outline: 'none', 
                    backgroundColor: 'transparent',
                    fontSize: 'clamp(12px, 2.5vw, 14px)',
                    color: '#333'
                  }}
                  value={formData.tanggal}
                  onChange={(e) => handleInputChange('tanggal', e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td style={{ ...tableCellStyle, width: '20%' }}>Waktu</td>
              <td style={{ ...tableCellStyle, width: '2%' }}>:</td>
              <td style={{ ...tableCellStyle, width: '78%' }} colSpan="2">
                <input
                  type="time"
                  style={{ 
                    width: '100%', 
                    border: 'none', 
                    outline: 'none', 
                    backgroundColor: 'transparent',
                    fontSize: 'clamp(12px, 2.5vw, 14px)',
                    color: '#333'
                  }}
                  value={formData.waktu}
                  onChange={(e) => handleInputChange('waktu', e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div style={formSectionHeaderStyle}>
          Jawablah semua pertanyaan dibawah ini:
        </div>

        {questions.map((question, index) => {
          const qNum = `q${index + 1}`;
          return (
            <div key={qNum} style={questionBoxStyle}>
              <div style={questionTextStyle}>
                {index + 1}. {question}
              </div>
              <textarea
                style={answerInputStyle}
                placeholder="Tulis jawaban disini"
                value={formData.responses[qNum].text}
                onChange={(e) => handleTextChange(qNum, e.target.value)}
              />
              <div style={responseSectionStyle}>
                <span style={responseLabelStyle}>Pencapaian:</span>
                <div style={checkboxContainerStyle}>
                  <label style={checkboxLabelStyle}>
                    <input
                      type="checkbox"
                      checked={formData.responses[qNum].answer === 'Ya'}
                      onChange={() => handleResponseChange(qNum, 'Ya')}
                    />
                    Ya
                  </label>
                  <label style={checkboxLabelStyle}>
                    <input
                      type="checkbox"
                      checked={formData.responses[qNum].answer === 'Tidak'}
                      onChange={() => handleResponseChange(qNum, 'Tidak')}
                    />
                    Tidak
                  </label>
                </div>
              </div>
            </div>
          );
        })}

        {/* Action Buttons */}
        <div style={buttonContainerStyle}>
          <button
            style={buttonStyle}
            onClick={handleApprove}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f8f9fa'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
          >
            APPROVE
          </button>
          <button
            style={buttonStyle}
            onClick={handleReject}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f8f9fa'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
          >
            REJECT
          </button>
        </div>
      </div>

      {/* Modal Notifikasi */}
      {showModal && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            {/* Header dengan Icon dan Close Button */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: '25px'
            }}>
              {/* Icon clipboard biru dengan checkmark di kiri */}
              <div style={{
                width: 'clamp(40px, 8vw, 50px)',
                height: 'clamp(40px, 8vw, 50px)',
                backgroundColor: '#4A90E2',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                position: 'relative'
              }}>
                {/* Clipboard shape */}
                <div style={{
                  width: '70%',
                  height: '80%',
                  backgroundColor: 'white',
                  borderRadius: '3px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {/* Top clip part */}
                  <div style={{
                    position: 'absolute',
                    top: '-3px',
                    width: '50%',
                    height: '6px',
                    backgroundColor: '#4A90E2',
                    borderRadius: '3px 3px 0 0'
                  }}></div>
                  
                  {/* Checkmark */}
                  <Check size="clamp(16px, 3vw, 18px)" color="#4A90E2" strokeWidth={4} />
                </div>
              </div>
              
              {/* Title di tengah - sejajar dengan icon */}
              <div style={{ 
                flex: 1, 
                textAlign: 'center',
                paddingTop: '5px'
              }}>
                <h3 style={{
                  fontSize: 'clamp(18px, 4vw, 22px)',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '4px',
                  lineHeight: '1.2'
                }}>
                  Anda menyetujui
                </h3>
                <h3 style={{
                  fontSize: 'clamp(18px, 4vw, 22px)',
                  fontWeight: '600',
                  color: '#333',
                  margin: '0',
                  lineHeight: '1.2'
                }}>
                  rekaman Asesmen ini
                </h3>
              </div>
              
              {/* Close button di kanan */}
              <button 
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  color: '#666',
                  flexShrink: 0
                }}
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>
            
            {/* Description */}
            <p style={{
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              color: '#666',
              marginBottom: '25px',
              lineHeight: '1.5',
              fontStyle: 'italic',
              textAlign: 'center'
            }}>
              Anda menyetujui dokumen sertifikat asesi ini dengan penilaian yang sebenar-benarnya
            </p>
            
            {/* Button di kanan */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                style={{
                  padding: 'clamp(8px, 2vw, 10px) clamp(20px, 4vw, 30px)',
                  backgroundColor: '#4A90E2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: 'clamp(12px, 2.5vw, 14px)',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
                onClick={handleModalOke}
                onMouseOver={(e) => e.target.style.backgroundColor = '#357ABD'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#4A90E2'}
              >
                Oke
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Notifikasi Reject */}
      {showRejectModal && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            {/* Header dengan Icon dan Close Button */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: '25px'
            }}>
              {/* Icon document dengan X orange di kiri */}
              <div style={{
                width: 'clamp(40px, 8vw, 50px)',
                height: 'clamp(40px, 8vw, 50px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                position: 'relative'
              }}>
                {/* Document outline */}
                <div style={{
                  width: '70%',
                  height: '80%',
                  border: '2px solid #FF8C00',
                  borderRadius: '2px',
                  backgroundColor: 'white',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '4px'
                }}>
                  {/* Document lines */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    marginTop: '2px'
                  }}>
                    <div style={{
                      height: '2px',
                      backgroundColor: '#FF8C00',
                      width: '100%',
                      borderRadius: '1px'
                    }}></div>
                    <div style={{
                      height: '2px',
                      backgroundColor: '#FF8C00',
                      width: '100%',
                      borderRadius: '1px'
                    }}></div>
                    <div style={{
                      height: '2px',
                      backgroundColor: '#FF8C00',
                      width: '80%',
                      borderRadius: '1px'
                    }}></div>
                    <div style={{
                      height: '2px',
                      backgroundColor: '#FF8C00',
                      width: '90%',
                      borderRadius: '1px'
                    }}></div>
                  </div>
                </div>
                
                {/* X mark di pojok kanan bawah */}
                <div style={{
                  position: 'absolute',
                  bottom: '2px',
                  right: '2px',
                  width: '18px',
                  height: '18px',
                  backgroundColor: '#FF8C00',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  color: 'white',
                  fontWeight: 'bold',
                  border: '2px solid white',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                }}>
                  ✗
                </div>
              </div>
              
              {/* Title di tengah - sejajar dengan icon */}
              <div style={{ 
                flex: 1, 
                textAlign: 'center',
                paddingTop: '5px'
              }}>
                <h3 style={{
                  fontSize: 'clamp(18px, 4vw, 22px)',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '4px',
                  lineHeight: '1.2'
                }}>
                  Anda menolak
                </h3>
                <h3 style={{
                  fontSize: 'clamp(18px, 4vw, 22px)',
                  fontWeight: '600',
                  color: '#333',
                  margin: '0',
                  lineHeight: '1.2'
                }}>
                  rekaman Asesmen ini
                </h3>
              </div>
              
              {/* Close button di kanan */}
              <button 
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  color: '#666',
                  flexShrink: 0
                }}
                onClick={() => setShowRejectModal(false)}
              >
                ×
              </button>
            </div>
            
            {/* Separator line */}
            <div style={{
              width: '100%',
              height: '1px',
              backgroundColor: '#e0e0e0',
              margin: '20px 0'
            }}></div>
            
            {/* Description */}
            <p style={{
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              color: '#666',
              marginBottom: '25px',
              lineHeight: '1.5',
              fontStyle: 'italic',
              textAlign: 'center'
            }}>
              Dokumen ini ditolak karena dokumen dan keaslian data tidak valid.
            </p>
            
            {/* Button di kanan */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                style={{
                  padding: 'clamp(8px, 2vw, 10px) clamp(20px, 4vw, 30px)',
                  backgroundColor: '#FF8C00',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: 'clamp(12px, 2.5vw, 14px)',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
                onClick={handleRejectModalOke}
                onMouseOver={(e) => e.target.style.backgroundColor = '#E67A00'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#FF8C00'}
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

export default IA06C;