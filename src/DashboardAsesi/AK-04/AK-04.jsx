import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';

// Custom hook to detect screen size
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

const AK04 = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [showPopup, setShowPopup] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [answers, setAnswers] = useState({
    question1: { yes: false, no: false },
    question2: { yes: false, no: false },
    question3: { yes: false, no: false },
  });

  const [formData, setFormData] = useState({
    namaAsesor: '',
    namaAsesi: '',
    tanggalAsesmen: '',
    skemaSertifikasi: '',
    noSkemaSertifikasi: '',
    alasanBanding: '',
    tanggalApprove: ''
  });

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!isFormSubmitted) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

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

    const handlePopState = (e) => {
      e.preventDefault();
      window.history.pushState(null, null, window.location.pathname);
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
    };

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

  // Styles
  const pageContainerStyle = {
    backgroundColor: 'white',
    fontFamily: 'Arial, sans-serif',
    padding: '2vw',
    minHeight: '100vh',
    width: '100%',
    boxSizing: 'border-box',
  };

  const navContainerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: isMobile ? '3px 8px' : '4px 12px',
    borderRadius: '0 1rem 2rem 1rem',
    boxShadow: '0 0.2rem 0.8rem rgba(0,0,0,0.1)',
    margin: isMobile ? '0 10px 0 0' : '0 15px 0 0',
    overflowX: 'auto',
    maxWidth: isMobile ? '85%' : '50%',
    whiteSpace: 'nowrap',
    backdropFilter: 'blur(10px)',
    position: 'relative',
    zIndex: 2,
    boxSizing: 'border-box',
    display: 'inline-block',
  };

  const headerSectionStyle = {
    backgroundImage: "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '0 0 2rem 2rem',
    overflow: 'hidden',
    marginBottom: '0',
    width: '100%',
  };

  const logoContainerStyle = {
    height: isMobile ? '15vw' : '20vw',
    maxHeight: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1rem',
    marginBottom: '1rem',
  };

  const logoTextStyle = {
    color: 'white',
    fontSize: 'clamp(1.5rem, 5vw, 2.25rem)',
    fontWeight: 'bold',
    margin: 0,
    textShadow: '0.125rem 0.125rem 0.25rem rgba(0,0,0,0.3)',
    letterSpacing: '0.0625rem',
  };

  const contentCardStyle = {
    backgroundColor: 'white',
    borderRadius: '0 0 1rem 1rem',
    padding: isMobile ? '15px' : '25px',
    boxShadow: 'none',
    marginTop: '0',
    border: 'none',
    width: '100%',
    boxSizing: 'border-box',
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '10px' : '1rem',
    marginBottom: '2rem',
    borderBottom: '1px solid #FF8C00',
    paddingBottom: '1.25rem',
    flexWrap: 'wrap',
    textAlign: 'center', // Memastikan teks di dalamnya berada di tengah
    justifyContent: 'center', // Mengatur konten ke tengah secara horizontal
  };

  const logoStyle = {
    width: isMobile ? '60px' : '80px',
    height: isMobile ? '60px' : '80px',
    backgroundColor: '#ff8c00',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: isMobile ? '16px' : '20px',
    overflow: 'hidden',
  };

  const logoImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
  };

  const titleStyle = {
    fontSize: isMobile ? '14px' : '18px',
    fontWeight: 'bold',
    margin: 0,
    color: '#333',
  };

  const subtitleStyle = {
    fontSize: isMobile ? '12px' : '14px',
    color: '#333',
    margin: '5px 0 0 0',
  };

  const inputStyle = {
    width: '100%',
    padding: isMobile ? '8px 12px' : '12px 16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: isMobile ? '10px' : '12px',
    backgroundColor: 'white',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const textareaStyle = {
    width: '100%',
    padding: isMobile ? '8px 12px' : '12px 16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: isMobile ? '10px' : '12px',
    backgroundColor: 'white',
    outline: 'none',
    resize: 'vertical',
    minHeight: '60px',
    boxSizing: 'border-box',
  };

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

  const popupContainerStyle = {
    backgroundColor: '#f0f0f0',
    borderRadius: '20px',
    padding: isMobile ? '20px' : '40px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    minWidth: isMobile ? '90%' : '320px',
    maxWidth: '90%',
    position: 'relative',
    boxSizing: 'border-box',
  };

  const iconContainerStyle = {
    marginBottom: '20px',
  };

  const successIconStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
    gap: '15px',
  };

  const listLinesStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  };

  const checkCircleStyle = {
    width: isMobile ? '40px' : '60px',
    height: isMobile ? '40px' : '60px',
    borderRadius: '50%',
    backgroundColor: '#FF8C00',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '6px',
  };

  const checkMarkStyle = {
    color: 'white',
    fontSize: isMobile ? '16px' : '24px',
    fontWeight: 'bold',
  };

  const popupTitleStyle = {
    fontSize: isMobile ? '16px' : '18px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '30px',
    lineHeight: '1.4',
  };

  const okayButtonStyle = {
    backgroundColor: '#FF8C00',
    border: 'none',
    fontSize: isMobile ? '12px' : '14px',
    fontWeight: '600',
    color: 'white',
    cursor: 'pointer',
    padding: isMobile ? '8px 16px' : '10px 24px',
    borderRadius: '20px',
    position: 'absolute',
    bottom: '20px',
    right: '30px',
    transition: 'all 0.2s ease',
  };

  const warningNotificationStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#ff6b6b',
    color: 'white',
    padding: isMobile ? '12px 16px' : '15px 20px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    zIndex: 1001,
    fontSize: isMobile ? '12px' : '14px',
    fontWeight: 'bold',
    animation: 'slideIn 0.3s ease-out',
  };

  return (
    <div style={pageContainerStyle}>
      <style>
        {`
          .nav-scrollbar::-webkit-scrollbar {
            height: 0.3125rem;
          }
          .nav-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .nav-scrollbar::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 0.3125rem;
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

      {showWarning && (
        <div style={warningNotificationStyle}>
          Silakan isi dan kirim formulir AK-04 terlebih dahulu!
        </div>
      )}

      {/* Header section dengan nav tab compact */}
      <div style={headerSectionStyle}>
        <div style={navContainerStyle} className="nav-scrollbar">
          <NavAsesi activeTab="FR.AK.04" />
        </div>

        <div style={logoContainerStyle}>
          <h1 style={logoTextStyle}>MyLSP</h1>
        </div>
      </div>

      {/* Content card */}
      <div style={contentCardStyle}>
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
          <div style={{ flex: 1, textAlign: isMobile ? 'center' : 'center' }}>
            <h1 style={titleStyle}>FR.AK.04</h1>
            <p style={subtitleStyle}>REKAMAN ASESMEN KOMPETENSI</p>
          </div>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: isMobile ? '10px' : '12px' }}>
            <tbody>
              <tr>
                <td style={{
                  padding: isMobile ? '8px' : '10px 16px',
                  backgroundColor: '#f8f8f8',
                  border: '1px solid #ddd',
                  fontWeight: 'bold',
                  color: '#333',
                  width: '20%',
                }}>Nama Asesor</td>
                <td style={{
                  padding: isMobile ? '8px' : '10px 16px',
                  border: '1px solid #ddd',
                  backgroundColor: 'white',
                  width: '80%',
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
                  padding: isMobile ? '8px' : '10px 16px',
                  backgroundColor: '#f8f8f8',
                  border: '1px solid #ddd',
                  fontWeight: 'bold',
                  color: '#333',
                }}>Nama Asesi</td>
                <td style={{
                  padding: isMobile ? '8px' : '10px 16px',
                  border: '1px solid #ddd',
                  backgroundColor: 'white',
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
                  padding: isMobile ? '8px' : '10px 16px',
                  backgroundColor: '#f8f8f8',
                  border: '1px solid #ddd',
                  fontWeight: 'bold',
                  color: '#333',
                }}>Tanggal Asesmen</td>
                <td style={{
                  padding: isMobile ? '8px' : '10px 16px',
                  border: '1px solid #ddd',
                  backgroundColor: 'white',
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

        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', flexDirection: isMobile ? 'column' : 'row' }}>
          <div style={{ flex: '1', minWidth: '100%' }}>
            <h3 style={{
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#333',
            }}>
              Jawablah dengan Ya atau Tidak pertanyaan-pertanyaan berikut ini :
            </h3>

            <div style={{ marginBottom: '8px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: isMobile ? '10px 12px' : '12px 16px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: 'white',
                fontSize: isMobile ? '10px' : '12px',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '10px' : '0',
              }}>
                <span style={{ flex: '1', paddingRight: isMobile ? '0' : '15px', lineHeight: '1.4' }}>
                  Apakah proses branding telah di jelaskan kepada asesi?
                </span>
                <div style={{ display: 'flex', gap: isMobile ? '15px' : '20px', alignItems: 'center', minWidth: isMobile ? '80px' : '100px', justifyContent: isMobile ? 'center' : 'flex-end' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: isMobile ? '9px' : '11px', fontWeight: 'bold', marginBottom: '4px' }}>Ya</div>
                    <input
                      type="checkbox"
                      style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px' }}
                      checked={answers.question1.yes}
                      onChange={() => handleCheckboxChange('question1', 'yes', true)}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: isMobile ? '9px' : '11px', fontWeight: 'bold', marginBottom: '4px' }}>Tidak</div>
                    <input
                      type="checkbox"
                      style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px' }}
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
                padding: isMobile ? '10px 12px' : '12px 16px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: 'white',
                fontSize: isMobile ? '10px' : '12px',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '10px' : '0',
              }}>
                <span style={{ flex: '1', paddingRight: isMobile ? '0' : '15px', lineHeight: '1.4' }}>
                  Apakah anda telah memperlihatkan branding dengan asesor?
                </span>
                <div style={{ display: 'flex', gap: isMobile ? '15px' : '20px', alignItems: 'center', minWidth: isMobile ? '80px' : '100px', justifyContent: isMobile ? 'center' : 'flex-end' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: isMobile ? '9px' : '11px', fontWeight: 'bold', marginBottom: '4px' }}>Ya</div>
                    <input
                      type="checkbox"
                      style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px' }}
                      checked={answers.question2.yes}
                      onChange={() => handleCheckboxChange('question2', 'yes', true)}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: isMobile ? '9px' : '11px', fontWeight: 'bold', marginBottom: '4px' }}>Tidak</div>
                    <input
                      type="checkbox"
                      style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px' }}
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
                padding: isMobile ? '10px 12px' : '12px 16px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                backgroundColor: 'white',
                fontSize: isMobile ? '10px' : '12px',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '10px' : '0',
              }}>
                <span style={{ flex: '1', paddingRight: isMobile ? '0' : '15px', lineHeight: '1.4' }}>
                  Apakah anda mau melibatkan "orang lain" membantu anda dalam proses branding?
                </span>
                <div style={{ display: 'flex', gap: isMobile ? '15px' : '20px', alignItems: 'center', minWidth: isMobile ? '80px' : '100px', justifyContent: isMobile ? 'center' : 'flex-end' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: isMobile ? '9px' : '11px', fontWeight: 'bold', marginBottom: '4px' }}>Ya</div>
                    <input
                      type="checkbox"
                      style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px' }}
                      checked={answers.question3.yes}
                      onChange={() => handleCheckboxChange('question3', 'yes', true)}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: isMobile ? '9px' : '11px', fontWeight: 'bold', marginBottom: '4px' }}>Tidak</div>
                    <input
                      type="checkbox"
                      style={{ width: isMobile ? '14px' : '16px', height: isMobile ? '14px' : '16px' }}
                      checked={answers.question3.no}
                      onChange={() => handleCheckboxChange('question3', 'no', false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ flex: '1', minWidth: '100%' }}>
            <h4 style={{
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#333',
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
              <div style={{ fontSize: isMobile ? '9px' : '11px', color: '#666', marginBottom: '8px' }}>
                Skema Sertifikasi:
              </div>
              <input
                type="text"
                style={{ ...inputStyle, marginBottom: '10px' }}
                value={formData.skemaSertifikasi}
                onChange={(e) => handleInputChange('skemaSertifikasi', e.target.value)}
                placeholder="Masukkan skema sertifikasi"
              />
              <div style={{ fontSize: isMobile ? '9px' : '11px', color: '#666', marginBottom: '8px' }}>
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
              marginBottom: '15px',
            }}>
              <div style={{ fontSize: isMobile ? '9px' : '11px', color: '#666', marginBottom: '8px' }}>
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
              <div style={{ fontSize: isMobile ? '9px' : '11px', color: '#666', marginBottom: '12px', lineHeight: '1.4' }}>
                Anda mempunyai hak mengajukan banding bila tidak merasa puas asesmen tidak sesuai SAP dan tidak memenuhi prinsip asesmen.
              </div>

              <div style={{ display: 'flex', gap: isMobile ? '15px' : '40px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: isMobile ? '9px' : '11px', color: '#666' }}>Persyaratan asesi :</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: isMobile ? '9px' : '11px', color: '#666' }}>Tanggal :</span>
                  <input
                    type="date"
                    style={{ ...inputStyle, width: isMobile ? '120px' : '150px' }}
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
                  fontSize: isMobile ? '8px' : '10px',
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
                    padding: isMobile ? '8px 12px' : '8px 20px',
                    borderRadius: '15px',
                    fontSize: isMobile ? '10px' : '12px',
                    cursor: 'pointer',
                  }}
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>

        {showPopup && (
          <div style={popupOverlayStyle} onClick={handleClosePopup}>
            <div style={popupContainerStyle} onClick={(e) => e.stopPropagation()}>
              <div style={iconContainerStyle}>
                <div style={successIconStyle}>
                  <div style={checkCircleStyle}>
                    <div style={checkMarkStyle}>✓</div>
                  </div>
                  <div style={listLinesStyle}>
                    <div style={{
                      width: isMobile ? '48px' : '80px',
                      height: '10px',
                      backgroundColor: '#FF8C00',
                      borderRadius: '5px',
                    }}></div>
                    <div style={{
                      width: isMobile ? '64px' : '120px',
                      height: '10px',
                      backgroundColor: '#FF8C00',
                      borderRadius: '5px',
                    }}></div>
                    <div style={{
                      width: isMobile ? '80px' : '140px',
                      height: '10px',
                      backgroundColor: '#FF8C00',
                      borderRadius: '5px',
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