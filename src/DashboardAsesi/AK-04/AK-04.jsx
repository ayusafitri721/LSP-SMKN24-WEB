// src/DashboardAsesi/AK-04/AK-04.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';

const pageContainerStyle = {
  backgroundColor: 'white',
  fontFamily: 'Arial, sans-serif',
  padding: '15px',
  minHeight: '100vh',
};

const headerSectionStyle = {
  backgroundImage: "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '0 0 40px 40px',
  overflow: 'hidden',
  marginBottom: '0',
};

const navContainerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  padding: '5px 15px',
  borderRadius: '15px 15px 40px 15px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  margin: '0 15px 0 0',
  overflowX: 'auto',
  maxWidth: '50%',
  whiteSpace: 'nowrap',
  backdropFilter: 'blur(10px)',
  position: 'relative',
  zIndex: 2,
};

const logoContainerStyle = {
  height: '180px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
};

const logoTextStyle = {
  color: 'white',
  fontSize: '48px',
  fontWeight: 'bold',
  margin: 0,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  letterSpacing: '2px',
};

const contentCardStyle = {
  backgroundColor: 'white',
  borderRadius: '0 0 15px 15px',
  padding: '25px',
  boxShadow: 'none',
  marginTop: '0',
  border: 'none',
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  marginBottom: '30px',
  borderBottom: '1px solid #eee',
  paddingBottom: '20px',
};

const logoStyle = {
  width: '50px',
  height: '50px',
  backgroundColor: '#ff8c00',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '20px',
  overflow: 'hidden',
};

const logoImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '8px',
};

const titleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  margin: 0,
  color: '#333',
};

const subtitleStyle = {
  fontSize: '12px',
  color: '#333',
  margin: '2px 0 0 0',
};

// Input field style
const inputStyle = {
  width: '100%',
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '12px',
  backgroundColor: 'white',
  outline: 'none',
};

const textareaStyle = {
  width: '100%',
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '12px',
  backgroundColor: 'white',
  outline: 'none',
  resize: 'vertical',
  minHeight: '60px',
};

// Popup overlay style
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
};

// Popup container style
const popupContainerStyle = {
  backgroundColor: '#f0f0f0',
  borderRadius: '20px',
  padding: '30px 50px',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  minWidth: '550px',
  maxWidth: '600px',
  position: 'relative',
};

// Icon container style
const iconContainerStyle = {
  marginBottom: '20px',
};

// Success icon style
const successIconStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 25px',
  gap: '15px',
};

// List lines container
const listLinesStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

// Check mark circle style
const checkCircleStyle = {
  width: '60px',
  height: '60px',
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
  fontSize: '24px',
  fontWeight: 'bold',
};

// Popup text styles
const popupTitleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '30px',
  lineHeight: '1.4',
};

// Okay button style
const okayButtonStyle = {
  backgroundColor: '#FF8C00',
  border: 'none',
  fontSize: '14px',
  fontWeight: '600',
  color: 'white',
  cursor: 'pointer',
  padding: '10px 25px',
  borderRadius: '20px',
  position: 'absolute',
  bottom: '20px',
  right: '30px',
  transition: 'all 0.2s ease',
};

// Warning notification style
const warningNotificationStyle = {
  position: 'fixed',
  top: '20px',
  right: '20px',
  backgroundColor: '#ff6b6b',
  color: 'white',
  padding: '15px 20px',
  borderRadius: '10px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  zIndex: 1001,
  fontSize: '14px',
  fontWeight: 'bold',
  animation: 'slideIn 0.3s ease-out',
};

const AK04 = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
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
        `}
      </style>

      {/* Warning Notification */}
      {showWarning && (
        <div style={warningNotificationStyle}>
          Silakan isi dan kirim formulir AK-04 terlebih dahulu!
        </div>
      )}

      <div style={headerSectionStyle}>
        <div style={navContainerStyle} className="nav-scrollbar">
          <NavAsesi activeTab="FR.AK.04" />
        </div>

        <div style={logoContainerStyle}>
          <h1 style={logoTextStyle}>MyLSP</h1>
        </div>
      </div>

      <div style={contentCardStyle}>
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
        <div style={{ marginBottom: '30px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
            <tbody>
              <tr>
                <td style={{
                  padding: '10px 15px',
                  backgroundColor: '#f8f8f8',
                  border: '1px solid #ddd',
                  fontWeight: 'bold',
                  color: '#333',
                  width: '20%'
                }}>Nama Asesor</td>
                <td style={{
                  padding: '10px 15px',
                  border: '1px solid #ddd',
                  backgroundColor: 'white',
                  width: '80%'
                }}>
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
                <td style={{
                  padding: '10px 15px',
                  backgroundColor: '#f8f8f8',
                  border: '1px solid #ddd',
                  fontWeight: 'bold',
                  color: '#333'
                }}>Nama Asesi</td>
                <td style={{
                  padding: '10px 15px',
                  border: '1px solid #ddd',
                  backgroundColor: 'white'
                }}>
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
                <td style={{
                  padding: '10px 15px',
                  backgroundColor: '#f8f8f8',
                  border: '1px solid #ddd',
                  fontWeight: 'bold',
                  color: '#333'
                }}>Tanggal Asesmen</td>
                <td style={{
                  padding: '10px 15px',
                  border: '1px solid #ddd',
                  backgroundColor: 'white'
                }}>
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

        <div style={{ display: 'flex', gap: '30px' }}>
          {/* Left Column - Questions */}
          <div style={{ flex: '1' }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#333'
            }}>
              Jawablah dengan Ya atau Tidak pertanyaan-pertanyaan berikut ini :
            </h3>

            <div style={{ marginBottom: '8px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '12px 15px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: 'white',
                fontSize: '12px'
              }}>
                <span style={{ flex: '1', paddingRight: '15px', lineHeight: '1.4' }}>
                  Apakah proses branding telah di jelaskan kepada asesi?
                </span>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', minWidth: '100px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '4px' }}>Ya</div>
                    <input
                      type="checkbox"
                      style={{ width: '16px', height: '16px' }}
                      checked={answers.question1.yes}
                      onChange={() => handleCheckboxChange('question1', 'yes', true)}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '4px' }}>Tidak</div>
                    <input
                      type="checkbox"
                      style={{ width: '16px', height: '16px' }}
                      checked={answers.question1.no}
                      onChange={() => handleCheckboxChange('question1', 'no', false)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '8px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '12px 15px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: 'white',
                fontSize: '12px'
              }}>
                <span style={{ flex: '1', paddingRight: '15px', lineHeight: '1.4' }}>
                  Apakah anda telah memperlihatkan branding dengan asesor?
                </span>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', minWidth: '100px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '4px' }}>Ya</div>
                    <input
                      type="checkbox"
                      style={{ width: '16px', height: '16px' }}
                      checked={answers.question2.yes}
                      onChange={() => handleCheckboxChange('question2', 'yes', true)}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '4px' }}>Tidak</div>
                    <input
                      type="checkbox"
                      style={{ width: '16px', height: '16px' }}
                      checked={answers.question2.no}
                      onChange={() => handleCheckboxChange('question2', 'no', false)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '8px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '12px 15px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: 'white',
                fontSize: '12px'
              }}>
                <span style={{ flex: '1', paddingRight: '15px', lineHeight: '1.4' }}>
                  Apakah anda mau melibatkan "orang lain" membantu anda dalam proses branding?
                </span>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', minWidth: '100px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '4px' }}>Ya</div>
                    <input
                      type="checkbox"
                      style={{ width: '16px', height: '16px' }}
                      checked={answers.question3.yes}
                      onChange={() => handleCheckboxChange('question3', 'yes', true)}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '4px' }}>Tidak</div>
                    <input
                      type="checkbox"
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
          <div style={{ flex: '1' }}>
            <h4 style={{
              fontSize: '14px',
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
              <div style={{ fontSize: '11px', color: '#666', marginBottom: '8px' }}>
                Skema Sertifikasi:
              </div>
              <input
                type="text"
                style={{ ...inputStyle, marginBottom: '10px' }}
                value={formData.skemaSertifikasi}
                onChange={(e) => handleInputChange('skemaSertifikasi', e.target.value)}
                placeholder="Masukkan skema sertifikasi"
              />
              <div style={{ fontSize: '11px', color: '#666', marginBottom: '8px' }}>
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
              <div style={{ fontSize: '11px', color: '#666', marginBottom: '8px' }}>
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
              <div style={{ fontSize: '11px', color: '#666', marginBottom: '12px', lineHeight: '1.4' }}>
                Anda mempunyai hak mengajukan banding bila tidak merasa puas asesmen tidak sesuai SAP dan tidak memenuhi prinsip asesmen.
              </div>

              <div style={{ display: 'flex', gap: '40px', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '11px', color: '#666' }}>Persyaratan asesi :</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '11px', color: '#666' }}>Tanggal :</span>
                  <input
                    type="date"
                    style={{ ...inputStyle, width: '150px' }}
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
                  fontSize: '10px'
                }}>
                  Approve
                </span>
              </div>

              <div style={{ textAlign: 'right' }}>
                <button
                  onClick={handleKirimClick}
                  style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: '8px 20px',
                    borderRadius: '15px',
                    fontSize: '12px',
                    cursor: 'pointer'
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
                      width: '80px',
                      height: '10px',
                      backgroundColor: '#FF8C00',
                      borderRadius: '5px'
                    }}></div>
                    <div style={{
                      width: '120px',
                      height: '10px',
                      backgroundColor: '#FF8C00',
                      borderRadius: '5px'
                    }}></div>
                    <div style={{
                      width: '140px',
                      height: '10px',
                      backgroundColor: '#FF8C00',
                      borderRadius: '5px'
                    }}></div>
                  </div>
                </div>
              </div>

              <div style={popupTitleStyle}>Jawaban anda telah direkam!</div>

              <button
                style={okayButtonStyle}
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