import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';

const pageContainerStyle = {
  backgroundColor: 'white',
  fontFamily: 'Arial, sans-serif',
  padding: '2vw',
  minHeight: '100vh',
  width: '100%',
  boxSizing: 'border-box',
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

const navContainerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  padding: '0.5rem 1rem',
  borderRadius: '0 1rem 2rem 1rem',
  boxShadow: '0 0.2rem 0.8rem rgba(0,0,0,0.1)',
  margin: '0 auto',
  overflowX: 'auto',
  maxWidth: '90%',
  whiteSpace: 'nowrap',
  backdropFilter: 'blur(10px)',
  position: 'relative',
  zIndex: 2,
};

const logoContainerStyle = {
  height: '20vw',
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
  padding: 'clamp(1rem, 3vw, 1.5rem)',
  boxShadow: 'none',
  marginTop: '0',
  border: 'none',
  width: '100%',
  boxSizing: 'border-box',
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '2rem',
  borderBottom: '1px solid #FF8C00',
  paddingBottom: '1.25rem',
  flexWrap: 'wrap',
};

const logoStyle = {
  width: 'clamp(2.5rem, 8vw, 3.125rem)',
  height: 'clamp(2.5rem, 8vw, 3.125rem)',
  backgroundColor: '#ff8c00',
  borderRadius: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: 'clamp(1rem, 3vw, 1.25rem)',
  overflow: 'hidden',
};

const logoImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '0.5rem',
};

const titleStyle = {
  fontSize: 'clamp(1rem, 3vw, 1.125rem)',
  fontWeight: 'bold',
  margin: 0,
  color: '#333',
};

const subtitleStyle = {
  fontSize: 'clamp(0.625rem, 2vw, 0.75rem)',
  color: '#333',
  margin: '0.125rem 0 0 0',
};

const inputStyle = {
  width: '100%',
  padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1rem)',
  border: '1px solid #ddd',
  borderRadius: '0.25rem',
  fontSize: 'clamp(0.625rem, 2vw, 0.75rem)',
  backgroundColor: 'white',
  outline: 'none',
  boxSizing: 'border-box',
};

const textareaStyle = {
  width: '100%',
  padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1rem)',
  border: '1px solid #ddd',
  borderRadius: '0.25rem',
  fontSize: 'clamp(0.625rem, 2vw, 0.75rem)',
  backgroundColor: 'white',
  outline: 'none',
  resize: 'vertical',
  minHeight: '3.75rem',
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
  borderRadius: '1.25rem',
  padding: 'clamp(1.5rem, 4vw, 2rem) clamp(2rem, 5vw, 3rem)',
  textAlign: 'center',
  boxShadow: '0 0.625rem 1.875rem rgba(0, 0, 0, 0.2)',
  minWidth: 'clamp(15rem, 80vw, 37.5rem)',
  maxWidth: '90%',
  position: 'relative',
};

const iconContainerStyle = {
  marginBottom: '1.25rem',
};

const successIconStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 1.5rem',
  gap: '0.9375rem',
};

const listLinesStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.375rem',
};

const checkCircleStyle = {
  width: 'clamp(2.5rem, 8vw, 3.75rem)',
  height: 'clamp(2.5rem, 8vw, 3.75rem)',
  borderRadius: '50%',
  backgroundColor: '#FF8C00',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '0.375rem',
};

const checkMarkStyle = {
  color: 'white',
  fontSize: 'clamp(1rem, 3vw, 1.5rem)',
  fontWeight: 'bold',
};

const popupTitleStyle = {
  fontSize: 'clamp(1rem, 3vw, 1.125rem)',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '1.875rem',
  lineHeight: '1.4',
};

const okayButtonStyle = {
  backgroundColor: '#FF8C00',
  border: 'none',
  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
  fontWeight: '600',
  color: 'white',
  cursor: 'pointer',
  padding: 'clamp(0.5rem, 1.5vw, 0.625rem) clamp(1rem, 3vw, 1.5rem)',
  borderRadius: '1.25rem',
  position: 'absolute',
  bottom: '1.25rem',
  right: '1.875rem',
  transition: 'all 0.2s ease',
};

const warningNotificationStyle = {
  position: 'fixed',
  top: '1.25rem',
  right: '1.25rem',
  backgroundColor: '#ff6b6b',
  color: 'white',
  padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1rem, 3vw, 1.25rem)',
  borderRadius: '0.625rem',
  boxShadow: '0 0.25rem 0.9375rem rgba(0,0,0,0.2)',
  zIndex: 1001,
  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
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

  const [formData, setFormData] = useState({
    namaAsesor: '',
    namaAsesi: '',
    tanggalAsesmen: '',
    skemaSertifikasi: '',
    noSkemaSertifikasi: '',
    alasanBanding: ''
  });

  const navigate = useNavigate();

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
          @media (max-width: 768px) {
            .flex-container {
              flex-direction: column;
            }
            .question-container, .banding-form {
              width: 100%;
            }
            .popup-container {
              padding: 1rem;
              min-width: 90%;
            }
            .nav-container {
              max-width: 100%;
            }
            .logo-container {
              height: 15vw;
            }
            .table-cell {
              font-size: clamp(0.625rem, 2vw, 0.75rem);
              padding: 0.5rem;
            }
            .input-field {
              font-size: clamp(0.625rem, 2vw, 0.75rem);
            }
            .checkbox-container {
              min-width: 80px;
            }
            .list-lines div {
              width: clamp(3rem, 20vw, 8rem);
            }
          }
          @media (max-width: 480px) {
            .header-style {
              flex-direction: column;
              align-items: flex-start;
            }
            .logo-style {
              width: clamp(2rem, 10vw, 2.5rem);
              height: clamp(2rem, 10vw, 2.5rem);
            }
            .title-style {
              font-size: clamp(0.875rem, 4vw, 1rem);
            }
            .subtitle-style {
              font-size: clamp(0.5rem, 2.5vw, 0.625rem);
            }
            .button-kirim {
              padding: 0.5rem 1rem;
              font-size: clamp(0.625rem, 2vw, 0.75rem);
            }
            .okay-button {
              padding: 0.5rem 1rem;
              font-size: clamp(0.625rem, 2vw, 0.75rem);
              right: 1rem;
              bottom: 1rem;
            }
          }
        `}
      </style>

      {showWarning && (
        <div style={warningNotificationStyle}>
          Silakan isi dan kirim formulir AK-04 terlebih dahulu!
        </div>
      )}

      <div style={headerSectionStyle}>
        <div style={navContainerStyle} className="nav-scrollbar nav-container">
          <NavAsesi activeTab="FR.AK.04" />
        </div>

        <div style={logoContainerStyle} className="logo-container">
          <h1 style={logoTextStyle}>MyLSP</h1>
        </div>
      </div>

      <div style={contentCardStyle}>
        <div style={headerStyle} className="header-style">
          <div style={logoStyle} className="logo-style">
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
            <h1 style={titleStyle} className="title-style">FR.AK.04</h1>
            <p style={subtitleStyle} className="subtitle-style">REKAMAN ASESMEN KOMPETENSI</p>
          </div>
        </div>

        <div style={{ marginBottom: '1.875rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'clamp(0.625rem, 2vw, 0.75rem)' }}>
            <tbody>
              <tr>
                <td style={{
                  padding: 'clamp(0.5rem, 1.5vw, 0.625rem) clamp(0.75rem, 2vw, 1rem)',
                  backgroundColor: '#f8f8f8',
                  border: '1px solid #ddd',
                  fontWeight: 'bold',
                  color: '#333',
                  width: '20%',
                }} className="table-cell">Nama Asesor</td>
                <td style={{
                  padding: 'clamp(0.5rem, 1.5vw, 0.625rem) clamp(0.75rem, 2vw, 1rem)',
                  border: '1px solid #ddd',
                  backgroundColor: 'white',
                  width: '80%',
                }} className="table-cell">
                  <input
                    type="text"
                    style={inputStyle}
                    value={formData.namaAsesor}
                    onChange={(e) => handleInputChange('namaAsesor', e.target.value)}
                    placeholder="Masukkan nama asesor"
                    className="input-field"
                  />
                </td>
              </tr>
              <tr>
                <td style={{
                  padding: 'clamp(0.5rem, 1.5vw, 0.625rem) clamp(0.75rem, 2vw, 1rem)',
                  backgroundColor: '#f8f8f8',
                  border: '1px solid #ddd',
                  fontWeight: 'bold',
                  color: '#333',
                }} className="table-cell">Nama Asesi</td>
                <td style={{
                  padding: 'clamp(0.5rem, 1.5vw, 0.625rem) clamp(0.75rem, 2vw, 1rem)',
                  border: '1px solid #ddd',
                  backgroundColor: 'white',
                }} className="table-cell">
                  <input
                    type="text"
                    style={inputStyle}
                    value={formData.namaAsesi}
                    onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                    placeholder="Masukkan nama asesi"
                    className="input-field"
                  />
                </td>
              </tr>
              <tr>
                <td style={{
                  padding: 'clamp(0.5rem, 1.5vw, 0.625rem) clamp(0.75rem, 2vw, 1rem)',
                  backgroundColor: '#f8f8f8',
                  border: '1px solid #ddd',
                  fontWeight: 'bold',
                  color: '#333',
                }} className="table-cell">Tanggal Asesmen</td>
                <td style={{
                  padding: 'clamp(0.5rem, 1.5vw, 0.625rem) clamp(0.75rem, 2vw, 1rem)',
                  border: '1px solid #ddd',
                  backgroundColor: 'white',
                }} className="table-cell">
                  <input
                    type="date"
                    style={inputStyle}
                    value={formData.tanggalAsesmen}
                    onChange={(e) => handleInputChange('tanggalAsesmen', e.target.value)}
                    className="input-field"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', gap: '1.875rem', flexWrap: 'wrap' }} className="flex-container">
          <div style={{ flex: '1', minWidth: '100%' }} className="question-container">
            <h3 style={{
              fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)',
              fontWeight: 'bold',
              marginBottom: '0.9375rem',
              color: '#333',
            }}>
              Jawablah dengan Ya atau Tidak pertanyaan-pertanyaan berikut ini :
            </h3>

            <div style={{ marginBottom: '0.5rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: 'clamp(0.625rem, 2vw, 0.75rem) clamp(0.75rem, 2vw, 1rem)',
                border: '1px solid #ddd',
                borderRadius: '0.25rem',
                backgroundColor: 'white',
                fontSize: 'clamp(0.625rem, 2vw, 0.75rem)',
              }}>
                <span style={{ flex: '1', paddingRight: '0.9375rem', lineHeight: '1.4' }}>
                  Apakah proses branding telah di jelaskan kepada asesi?
                </span>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', minWidth: '6.25rem' }} className="checkbox-container">
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(0.5625rem, 1.5vw, 0.6875rem)', fontWeight: 'bold', marginBottom: '0.25rem' }}>Ya</div>
                    <input
                      type="checkbox"
                      style={{ width: '1rem', height: '1rem' }}
                      checked={answers.question1.yes}
                      onChange={() => handleCheckboxChange('question1', 'yes', true)}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(0.5625rem, 1.5vw, 0.6875rem)', fontWeight: 'bold', marginBottom: '0.25rem' }}>Tidak</div>
                    <input
                      type="checkbox"
                      style={{ width: '1rem', height: '1rem' }}
                      checked={answers.question1.no}
                      onChange={() => handleCheckboxChange('question1', 'no', false)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '0.5rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: 'clamp(0.625rem, 2vw, 0.75rem) clamp(0.75rem, 2vw, 1rem)',
                border: '1px solid #ddd',
                borderRadius: '0.25rem',
                backgroundColor: 'white',
                fontSize: 'clamp(0.625rem, 2vw, 0.75rem)',
              }}>
                <span style={{ flex: '1', paddingRight: '0.9375rem', lineHeight: '1.4' }}>
                  Apakah anda telah memperlihatkan branding dengan asesor?
                </span>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', minWidth: '6.25rem' }} className="checkbox-container">
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(0.5625rem, 1.5vw, 0.6875rem)', fontWeight: 'bold', marginBottom: '0.25rem' }}>Ya</div>
                    <input
                      type="checkbox"
                      style={{ width: '1rem', height: '1rem' }}
                      checked={answers.question2.yes}
                      onChange={() => handleCheckboxChange('question2', 'yes', true)}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(0.5625rem, 1.5vw, 0.6875rem)', fontWeight: 'bold', marginBottom: '0.25rem' }}>Tidak</div>
                    <input
                      type="checkbox"
                      style={{ width: '1rem', height: '1rem' }}
                      checked={answers.question2.no}
                      onChange={() => handleCheckboxChange('question2', 'no', false)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '0.5rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: 'clamp(0.625rem, 2vw, 0.75rem) clamp(0.75rem, 2vw, 1rem)',
                border: '1px solid #ddd',
                borderRadius: '0.25rem',
                backgroundColor: 'white',
                fontSize: 'clamp(0.625rem, 2vw, 0.75rem)',
              }}>
                <span style={{ flex: '1', paddingRight: '0.9375rem', lineHeight: '1.4' }}>
                  Apakah anda mau melibatkan "orang lain" membantu anda dalam proses branding?
                </span>
                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', minWidth: '6.25rem' }} className="checkbox-container">
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(0.5625rem, 1.5vw, 0.6875rem)', fontWeight: 'bold', marginBottom: '0.25rem' }}>Ya</div>
                    <input
                      type="checkbox"
                      style={{ width: '1rem', height: '1rem' }}
                      checked={answers.question3.yes}
                      onChange={() => handleCheckboxChange('question3', 'yes', true)}
                    />
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 'clamp(0.5625rem, 1.5vw, 0.6875rem)', fontWeight: 'bold', marginBottom: '0.25rem' }}>Tidak</div>
                    <input
                      type="checkbox"
                      style={{ width: '1rem', height: '1rem' }}
                      checked={answers.question3.no}
                      onChange={() => handleCheckboxChange('question3', 'no', false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ flex: '1', minWidth: '100%' }} className="banding-form">
            <h4 style={{
              fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)',
              fontWeight: 'bold',
              marginBottom: '0.9375rem',
              color: '#333',
            }}>
              Banding ini di ajukan atas keputusan asesmen yang dibuat terhadap skema sertifikasi (Kualifikasi/Klaster/Okupasi) berikut :
            </h4>

            <div style={{
              border: '1px solid #ddd',
              borderRadius: '0.25rem',
              padding: '0.75rem',
              backgroundColor: 'white',
              marginBottom: '0.9375rem',
            }}>
              <div style={{ fontSize: 'clamp(0.5625rem, 1.5vw, 0.6875rem)', color: '#666', marginBottom: '0.5rem' }}>
                Skema Sertifikasi:
              </div>
              <input
                type="text"
                style={{ ...inputStyle, marginBottom: '0.625rem' }}
                value={formData.skemaSertifikasi}
                onChange={(e) => handleInputChange('skemaSertifikasi', e.target.value)}
                placeholder="Masukkan skema sertifikasi"
                className="input-field"
              />
              <div style={{ fontSize: 'clamp(0.5625rem, 1.5vw, 0.6875rem)', color: '#666', marginBottom: '0.5rem' }}>
                No. Skema Sertifikasi:
              </div>
              <input
                type="text"
                style={inputStyle}
                value={formData.noSkemaSertifikasi}
                onChange={(e) => handleInputChange('noSkemaSertifikasi', e.target.value)}
                placeholder="Masukkan nomor skema sertifikasi"
                className="input-field"
              />
            </div>

            <div style={{
              border: '1px solid #ddd',
              borderRadius: '0.25rem',
              padding: '0.75rem',
              backgroundColor: 'white',
              marginBottom: '0.9375rem',
            }}>
              <div style={{ fontSize: 'clamp(0.5625rem, 1.5vw, 0.6875rem)', color: '#666', marginBottom: '0.5rem' }}>
                Banding ini di ajukan atas alasan sebagai berikut:
              </div>
              <textarea
                style={textareaStyle}
                value={formData.alasanBanding}
                onChange={(e) => handleInputChange('alasanBanding', e.target.value)}
                placeholder="Masukkan alasan banding"
                className="input-field"
              />
            </div>

            <div style={{ marginBottom: '0.9375rem' }}>
              <div style={{ fontSize: 'clamp(0.5625rem, 1.5vw, 0.6875rem)', color: '#666', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                Anda mempunyai hak mengajukan banding bila tidak merasa puas asesmen tidak sesuai SAP dan tidak memenuhi prinsip asesmen.
              </div>

              <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: 'clamp(0.5625rem, 1.5vw, 0.6875rem)', color: '#666' }}>Persyaratan asesi :</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: 'clamp(0.5625rem, 1.5vw, 0.6875rem)', color: '#666' }}>Tanggal :</span>
                  <input
                    type="date"
                    style={{ ...inputStyle, width: 'clamp(8rem, 30vw, 9.375rem)' }}
                    value={formData.tanggalApprove || ''}
                    onChange={(e) => handleInputChange('tanggalApprove', e.target.value)}
                    className="input-field"
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <span style={{
                  backgroundColor: '#6c757d',
                  color: 'white',
                  padding: '0.1875rem 0.625rem',
                  borderRadius: '0.75rem',
                  fontSize: 'clamp(0.5rem, 1.5vw, 0.625rem)',
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
                    padding: 'clamp(0.5rem, 1.5vw, 0.5rem) clamp(0.75rem, 2vw, 1.25rem)',
                    borderRadius: '0.9375rem',
                    fontSize: 'clamp(0.625rem, 2vw, 0.75rem)',
                    cursor: 'pointer',
                  }}
                  className="button-kirim"
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>

        {showPopup && (
          <div style={popupOverlayStyle} onClick={handleClosePopup}>
            <div style={popupContainerStyle} onClick={(e) => e.stopPropagation()} className="popup-container">
              <div style={iconContainerStyle}>
                <div style={successIconStyle}>
                  <div style={checkCircleStyle}>
                    <div style={checkMarkStyle}>✓</div>
                  </div>
                  <div style={listLinesStyle} className="list-lines">
                    <div style={{
                      width: 'clamp(3rem, 15vw, 5rem)',
                      height: '0.625rem',
                      backgroundColor: '#FF8C00',
                      borderRadius: '0.3125rem',
                    }}></div>
                    <div style={{
                      width: 'clamp(4rem, 20vw, 7.5rem)',
                      height: '0.625rem',
                      backgroundColor: '#FF8C00',
                      borderRadius: '0.3125rem',
                    }}></div>
                    <div style={{
                      width: 'clamp(5rem, 25vw, 8.75rem)',
                      height: '0.625rem',
                      backgroundColor: '#FF8C00',
                      borderRadius: '0.3125rem',
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
                className="okay-button"
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