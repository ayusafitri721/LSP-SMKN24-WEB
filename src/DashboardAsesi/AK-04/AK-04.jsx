// src/DashboardAsesi/AK-04/AK-04.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';

const pageContainerStyle = {
  backgroundColor: 'white',
  fontFamily: 'Arial, sans-serif',
  padding: '10px',
  minHeight: '100vh',
};

const headerSectionStyle = {
  backgroundImage: "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '0 0 20px 20px',
  overflow: 'hidden',
  marginBottom: '0',
};

const navContainerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  padding: '5px 10px',
  borderRadius: '0 15px 20px 15px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  margin: '0',
  overflowX: 'auto',
  maxWidth: '100%',
  whiteSpace: 'nowrap',
  backdropFilter: 'blur(10px)',
  position: 'relative',
  zIndex: 2,
};

const logoContainerStyle = {
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10px',
  marginBottom: '10px',
};

const logoTextStyle = {
  color: 'white',
  fontSize: 'clamp(24px, 5vw, 36px)',
  fontWeight: 'bold',
  margin: 0,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  letterSpacing: '1px',
};

const contentCardStyle = {
  backgroundColor: 'white',
  borderRadius: '0 0 15px 15px',
  padding: '15px',
  boxShadow: 'none',
  marginTop: '0',
  border: 'none',
};

const headerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
  borderBottom: '1px solid #FF8C00',
  paddingBottom: '15px',
  flexWrap: 'wrap',
};

const logoStyle = {
  width: '40px',
  height: '40px',
  backgroundColor: '#ff8c00',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '16px',
  overflow: 'hidden',
  flexShrink: 0,
};

const logoImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '8px',
};

const titleStyle = {
  fontSize: 'clamp(16px, 3vw, 18px)',
  fontWeight: 'bold',
  margin: 0,
  color: '#333',
};

const subtitleStyle = {
  fontSize: 'clamp(10px, 2vw, 12px)',
  color: '#333',
  margin: '2px 0 0 0',
};

// Input field style - responsive
const inputStyle = {
  width: '100%',
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: 'clamp(10px, 2vw, 12px)',
  backgroundColor: 'white',
  outline: 'none',
  boxSizing: 'border-box',
};

const textareaStyle = {
  width: '100%',
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: 'clamp(10px, 2vw, 12px)',
  backgroundColor: 'white',
  outline: 'none',
  resize: 'vertical',
  minHeight: '60px',
  boxSizing: 'border-box',
};

// Popup overlay style - responsive
const popupOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
  padding: '20px',
  boxSizing: 'border-box',
};

// Popup container style - responsive
const popupContainerStyle = {
  backgroundColor: '#f0f0f0',
  borderRadius: '20px',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  width: '100%',
  maxWidth: '500px',
  position: 'relative',
  boxSizing: 'border-box',
};

// Icon container style
const iconContainerStyle = {
  marginBottom: '15px',
};

// Success icon style
const successIconStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 20px',
  gap: '10px',
};

// List lines container
const listLinesStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

// Check mark circle style - responsive
const checkCircleStyle = {
  width: 'clamp(50px, 10vw, 60px)',
  height: 'clamp(50px, 10vw, 60px)',
  borderRadius: '50%',
  backgroundColor: '#FF8C00',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '6px',
};

// Check mark style
const checkMarkStyle = {
  color: 'white',
  fontSize: 'clamp(18px, 4vw, 24px)',
  fontWeight: 'bold',
};

// Popup text styles - responsive
const popupTitleStyle = {
  fontSize: 'clamp(14px, 3vw, 18px)',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '20px',
  lineHeight: '1.4',
};

// Okay button style - responsive
const okayButtonStyle = {
  backgroundColor: '#FF8C00',
  border: 'none',
  fontSize: 'clamp(12px, 2.5vw, 14px)',
  fontWeight: '600',
  color: 'white',
  cursor: 'pointer',
  padding: '10px 20px',
  borderRadius: '20px',
  position: 'absolute',
  bottom: '15px',
  right: '20px',
  transition: 'all 0.2s ease',
};

// Warning notification style - responsive
const warningNotificationStyle = {
  position: 'fixed',
  top: '20px',
  right: '20px',
  left: '20px',
  backgroundColor: '#ff6b6b',
  color: 'white',
  padding: '15px',
  borderRadius: '10px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  zIndex: 1001,
  fontSize: 'clamp(12px, 2.5vw, 14px)',
  fontWeight: 'bold',
  animation: 'slideIn 0.3s ease-out',
  textAlign: 'center',
  maxWidth: '400px',
  margin: '0 auto',
};

const AK04 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [answers, setAnswers] = useState({
    question1: { yes: false, no: false },
    question2: { yes: false, no: false },
    question3: { yes: false, no: false },
  });

  // Form input states
  const [formData, setFormData] = useState({
    namaAsesor: '',
    namaAsesi: '',
    tanggalAsesmen: '',
    skemaSertifikasi: '',
    noSkemaSertifikasi: '',
    alasanBanding: ''
  });

  const navigate = useNavigate();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Block navigation - tidak bisa ke page lain dan tidak bisa back
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!isFormSubmitted) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    // Intercept navigation attempts dengan history API
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/ak-04')) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalPushState.apply(window.history, args);
    };

    window.history.replaceState = function (...args) {
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/ak-04')) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalReplaceState.apply(window.history, args);
    };

    // Blokir browser back button secara permanen
    const handlePopState = (e) => {
      e.preventDefault();
      window.history.pushState(null, null, window.location.pathname);
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
    };

    // Push current state to prevent back navigation
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, [isFormSubmitted]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleKirimClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setIsFormSubmitted(true);
    // Auto redirect ke IA-01 setelah close popup
    setTimeout(() => {
      navigate('/dashboard-asesi/ia-01');
    }, 300);
  };

  const handleCheckboxChange = (question, value, isYes) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: {
        yes: isYes ? !prev[question].yes : false,
        no: isYes ? false : !prev[question].no,
      },
    }));
  };

  // Responsive table cell styles
  const tableCellHeaderStyle = {
    padding: isMobile ? '8px 10px' : '10px 15px',
    backgroundColor: '#f8f8f8',
    border: '1px solid #ddd',
    fontWeight: 'bold',
    color: '#333',
    width: isMobile ? '30%' : '20%',
    fontSize: 'clamp(10px, 2vw, 12px)',
    verticalAlign: 'top',
  };

  const tableCellContentStyle = {
    padding: isMobile ? '8px 10px' : '10px 15px',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    width: isMobile ? '70%' : '80%',
    verticalAlign: 'top',
  };

  // Responsive question container style
  const questionContainerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: isMobile ? 'stretch' : 'flex-start',
    padding: '12px 15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: 'white',
    fontSize: 'clamp(10px, 2vw, 12px)',
    gap: isMobile ? '10px' : '15px',
  };

  const questionTextStyle = {
    flex: '1',
    lineHeight: '1.4',
    paddingRight: isMobile ? '0' : '15px',
    marginBottom: isMobile ? '8px' : '0',
  };

  const answerOptionsStyle = {
    display: 'flex',
    gap: isMobile ? '15px' : '20px',
    alignItems: 'center',
    minWidth: isMobile ? 'auto' : '100px',
    justifyContent: isMobile ? 'center' : 'flex-end',
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

          /* Responsive breakpoints */
          @media (max-width: 768px) {
            .nav-container {
              max-width: 100% !important;
              padding: 5px 10px !important;
              border-radius: 0 10px 15px 10px !important;
            }
            
            .header-section {
              border-radius: 0 0 15px 15px !important;
            }
            
            .content-card {
              padding: 10px !important;
            }
            
            .popup-ok-button {
              position: static !important;
              width: 100% !important;
              margin-top: 15px !important;
            }
          }
          
          @media (max-width: 480px) {
            .warning-notification {
              left: 10px !important;
              right: 10px !important;
              top: 10px !important;
            }
            
            .checkbox-input {
              width: 18px !important;
              height: 18px !important;
            }
          }
        `}
      </style>

      {/* Warning Notification */}
      {showWarning && (
        <div style={warningNotificationStyle} className="warning-notification">
          Silakan isi dan kirim formulir AK-04 terlebih dahulu!
        </div>
      )}

      <div style={headerSectionStyle} className="header-section">
        <div style={navContainerStyle} className="nav-scrollbar nav-container">
          <NavAsesi activeTab="FR.AK.04" />
        </div>

        <div style={logoContainerStyle}>
          <h1 style={logoTextStyle}>MyLSP</h1>
        </div>
      </div>

      <div style={contentCardStyle} className="content-card">
        {/* Header with Logo */}
        <div style={headerStyle}>
          <div style={logoStyle}>
            <img
              src="/src/img/LOGO_LSP_SMKN_24.jpg"
              alt="LSP SMKN 24 Logo"
              style={logoImageStyle}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = 'LSP';
              }}
            />
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <h1 style={titleStyle}>FR.AK.04</h1>
            <p style={subtitleStyle}>REKAMAN ASESMEN KOMPETENSI</p>
          </div>
        </div>

        {/* Header Table with Editable Inputs */}
        <div style={{ marginBottom: '20px', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: isMobile ? '300px' : 'auto' }}>
            <tbody>
              <tr>
                <td style={tableCellHeaderStyle}>Nama Asesor</td>
                <td style={tableCellContentStyle}>
                  <input
                    type="text"
                    style={inputStyle}
                    value={formData.namaAsesor}
                    onChange={(e) => handleInputChange('namaAsesor', e.target.value)}
                    placeholder="Masukkan nama asesor"
                  />
                </td>
              </tr>
              <tr>
                <td style={tableCellHeaderStyle}>Nama Asesi</td>
                <td style={tableCellContentStyle}>
                  <input
                    type="text"
                    style={inputStyle}
                    value={formData.namaAsesi}
                    onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                    placeholder="Masukkan nama asesi"
                  />
                </td>
              </tr>
              <tr>
                <td style={tableCellHeaderStyle}>Tanggal Asesmen</td>
                <td style={tableCellContentStyle}>
                  <input
                    type="date"
                    style={inputStyle}
                    value={formData.tanggalAsesmen}
                    onChange={(e) => handleInputChange('tanggalAsesmen', e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '20px' : '30px'
        }}>
          {/* Left Column - Questions */}
          <div style={{ flex: '1', minWidth: isMobile ? 'auto' : '0' }}>
            <h3 style={{
              fontSize: 'clamp(12px, 3vw, 14px)',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#333'
            }}>
              Jawablah dengan Ya atau Tidak pertanyaan-pertanyaan berikut ini :
            </h3>

            <div style={{ marginBottom: '8px' }}>
              <div style={questionContainerStyle}>
                <span style={questionTextStyle}>
                  Apakah proses branding telah di jelaskan kepada asesi?
                </span>
                <div style={answerOptionsStyle}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(9px, 2vw, 11px)', fontWeight: 'bold', marginBottom: '4px' }}>Ya</div>
                    <input
                      type="checkbox"
                      className="checkbox-input"
                      style={{ width: '16px', height: '16px' }}
                      checked={answers.question1.yes}
                      onChange={() => handleCheckboxChange('question1', 'yes', true)}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(9px, 2vw, 11px)', fontWeight: 'bold', marginBottom: '4px' }}>Tidak</div>
                    <input
                      type="checkbox"
                      className="checkbox-input"
                      style={{ width: '16px', height: '16px' }}
                      checked={answers.question1.no}
                      onChange={() => handleCheckboxChange('question1', 'no', false)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '8px' }}>
              <div style={questionContainerStyle}>
                <span style={questionTextStyle}>
                  Apakah anda telah memperlihatkan branding dengan asesor?
                </span>
                <div style={answerOptionsStyle}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(9px, 2vw, 11px)', fontWeight: 'bold', marginBottom: '4px' }}>Ya</div>
                    <input
                      type="checkbox"
                      className="checkbox-input"
                      style={{ width: '16px', height: '16px' }}
                      checked={answers.question2.yes}
                      onChange={() => handleCheckboxChange('question2', 'yes', true)}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(9px, 2vw, 11px)', fontWeight: 'bold', marginBottom: '4px' }}>Tidak</div>
                    <input
                      type="checkbox"
                      className="checkbox-input"
                      style={{ width: '16px', height: '16px' }}
                      checked={answers.question2.no}
                      onChange={() => handleCheckboxChange('question2', 'no', false)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '8px' }}>
              <div style={questionContainerStyle}>
                <span style={questionTextStyle}>
                  Apakah anda mau melibatkan "orang lain" membantu anda dalam proses branding?
                </span>
                <div style={answerOptionsStyle}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(9px, 2vw, 11px)', fontWeight: 'bold', marginBottom: '4px' }}>Ya</div>
                    <input
                      type="checkbox"
                      className="checkbox-input"
                      style={{ width: '16px', height: '16px' }}
                      checked={answers.question3.yes}
                      onChange={() => handleCheckboxChange('question3', 'yes', true)}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(9px, 2vw, 11px)', fontWeight: 'bold', marginBottom: '4px' }}>Tidak</div>
                    <input
                      type="checkbox"
                      className="checkbox-input"
                      style={{ width: '16px', height: '16px' }}
                      checked={answers.question3.no}
                      onChange={() => handleCheckboxChange('question3', 'no', false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Banding Form */}
          <div style={{ flex: '1', minWidth: isMobile ? 'auto' : '0' }}>
            <h4 style={{
              fontSize: 'clamp(12px, 3vw, 14px)',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#333'
            }}>
              Banding ini di ajukan atas keputusan asesmen yang dibuat terhadap skema sertifikasi (Kualifikasi/Klaster/Okupasi) berikut :
            </h4>

            <div style={{
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '12px',
              backgroundColor: 'white',
              marginBottom: '15px',
            }}>
              <div style={{ fontSize: 'clamp(9px, 2vw, 11px)', color: '#666', marginBottom: '8px' }}>
                Skema Sertifikasi:
              </div>
              <input
                type="text"
                style={{ ...inputStyle, marginBottom: '10px' }}
                value={formData.skemaSertifikasi}
                onChange={(e) => handleInputChange('skemaSertifikasi', e.target.value)}
                placeholder="Masukkan skema sertifikasi"
              />
              <div style={{ fontSize: 'clamp(9px, 2vw, 11px)', color: '#666', marginBottom: '8px' }}>
                No. Skema Sertifikasi:
              </div>
              <input
                type="text"
                style={inputStyle}
                value={formData.noSkemaSertifikasi}
                onChange={(e) => handleInputChange('noSkemaSertifikasi', e.target.value)}
                placeholder="Masukkan nomor skema sertifikasi"
              />
            </div>

            <div style={{
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '12px',
              backgroundColor: 'white',
              marginBottom: '15px'
            }}>
              <div style={{ fontSize: 'clamp(9px, 2vw, 11px)', color: '#666', marginBottom: '8px' }}>
                Banding ini di ajukan atas alasan sebagai berikut:
              </div>
              <textarea
                style={textareaStyle}
                value={formData.alasanBanding}
                onChange={(e) => handleInputChange('alasanBanding', e.target.value)}
                placeholder="Masukkan alasan banding"
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <div style={{
                fontSize: 'clamp(9px, 2vw, 11px)',
                color: '#666',
                marginBottom: '12px',
                lineHeight: '1.4'
              }}>
                Anda mempunyai hak mengajukan banding bila tidak merasa puas asesmen tidak sesuai SAP dan tidak memenuhi prinsip asesmen.
              </div>

              <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '15px' : '40px',
                alignItems: isMobile ? 'stretch' : 'center',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: 'clamp(9px, 2vw, 11px)', color: '#666' }}>Persyaratan asesi :</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 'clamp(9px, 2vw, 11px)', color: '#666' }}>Tanggal :</span>
                  <input
                    type="date"
                    style={{ ...inputStyle, width: isMobile ? '100%' : '150px' }}
                    value={formData.tanggalApprove || ''}
                    onChange={(e) => handleInputChange('tanggalApprove', e.target.value)}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <span style={{
                  backgroundColor: '#6c757d',
                  color: 'white',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  fontSize: 'clamp(8px, 2vw, 10px)'
                }}>
                  Approve
                </span>
              </div>

              <div style={{ textAlign: isMobile ? 'center' : 'right' }}>
                <button
                  onClick={handleKirimClick}
                  style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '8px 20px',
                    borderRadius: '15px',
                    fontSize: 'clamp(10px, 2vw, 12px)',
                    cursor: 'pointer',
                    width: isMobile ? '100%' : 'auto',
                  }}
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Success Popup */}
        {showPopup && (
          <div style={popupOverlayStyle} onClick={handleClosePopup}>
            <div style={popupContainerStyle} onClick={(e) => e.stopPropagation()}>
              <div style={iconContainerStyle}>
                <div style={successIconStyle}>
                  {/* Check mark circle - di atas */}
                  <div style={checkCircleStyle}>
                    <div style={checkMarkStyle}>✓</div>
                  </div>

                  {/* List lines (3 horizontal lines) - di bawah */}
                  <div style={listLinesStyle}>
                    <div style={{
                      width: 'clamp(60px, 15vw, 80px)',
                      height: 'clamp(8px, 2vw, 10px)',
                      backgroundColor: '#FF8C00',
                      borderRadius: '5px'
                    }}></div>
                    <div style={{
                      width: 'clamp(90px, 20vw, 120px)',
                      height: 'clamp(8px, 2vw, 10px)',
                      backgroundColor: '#FF8C00',
                      borderRadius: '5px'
                    }}></div>
                    <div style={{
                      width: 'clamp(105px, 25vw, 140px)',
                      height: 'clamp(8px, 2vw, 10px)',
                      backgroundColor: '#FF8C00',
                      borderRadius: '5px'
                    }}></div>
                  </div>
                </div>
              </div>

              <div style={popupTitleStyle}>Jawaban anda telah direkam!</div>

              <button
                className="popup-ok-button"
                style={isMobile ?
                  { ...okayButtonStyle, position: 'static', width: '100%', marginTop: '15px' } :
                  okayButtonStyle
                }
                onClick={handleClosePopup}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e67e00'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#FF8C00'}
              >
                Okay
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AK04;