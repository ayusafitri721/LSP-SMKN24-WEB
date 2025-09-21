// src/DashboardAsesi/AK-01/AK-01.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';
import { submitFormAk01 } from '../../api/api';

// Modal styles - Updated to match APL-01 design
const modalOverlayStyle = {
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
  padding: '10px',
};

const modalContainerStyle = {
  backgroundColor: '#f0f0f0',
  borderRadius: '20px',
  padding: '30px 50px',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  minWidth: '550px',
  maxWidth: '600px',
  position: 'relative',
  maxHeight: '90vh',
  overflowY: 'auto',
};

const iconContainerStyle = {
  marginBottom: '20px',
};

const successIconStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 25px',
  gap: '15px',
};

const listLinesStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

const checkCircleStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: '#FF8C00',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const checkMarkStyle = {
  color: 'white',
  fontSize: '24px',
  fontWeight: 'bold',
};

const modalTitleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '30px',
  lineHeight: '1.4',
};

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
  maxWidth: '250px',
  wordWrap: 'break-word',
};

const pageContainerStyle = {
  backgroundColor: 'white',
  fontFamily: 'Arial, sans-serif',
  padding: '15px',
  minHeight: '100vh',
};

// Header section matching APL-01 design
const headerSectionStyle = {
  backgroundImage: "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '0 0 40px 40px',
  overflow: 'hidden',
  marginBottom: '0',
};

// Navigation container matching APL-01
const navContainerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  padding: '5px 15px',
  borderRadius: '0 15px 40px 15px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  margin: '0',
  overflowX: 'auto',
  maxWidth: '50%',
  whiteSpace: 'nowrap',
  backdropFilter: 'blur(10px)',
  position: 'relative',
  zIndex: 2,
};

// Logo container matching APL-01
const logoContainerStyle = {
  height: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10px',
  marginBottom: '10px',
};

// Logo text matching APL-01
const logoTextStyle = {
  color: 'white',
  fontSize: '36px',
  fontWeight: 'bold',
  margin: 0,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  letterSpacing: '1px',
};

const contentCardStyle = {
  backgroundColor: 'white',
  borderRadius: '0 0 15px 15px',
  padding: '30px',
  boxShadow: 'none',
  marginTop: '0',
  border: 'none',
};

const headerSectionStyle2 = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '20px',
  marginBottom: '20px',
  paddingBottom: '15px',
  borderBottom: '2px solid #FF8C00',
};

const logoContainer2Style = {
  flexShrink: 0,
};

const headerContentStyle = {
  flex: 1,
};

const titleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 5px 0',
  color: '#333',
  textAlign: 'center',
};

const subtitleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 15px 0',
  color: '#333',
  textAlign: 'center',
};

const transparentBoxStyle = {
  backgroundColor: 'rgba(240, 240, 240, 0.7)',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  marginBottom: '10px',
};

const boxTitleStyle = {
  fontSize: '12px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '8px',
};

const boxTextStyle = {
  fontSize: '11px',
  color: '#333',
  lineHeight: '1.4',
  textAlign: 'center',
  fontWeight: 'bold',
};

const checkboxGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4px 8px',
  marginTop: '8px',
};

const checkboxItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  fontSize: '10px',
  color: '#333',
  lineHeight: '1.3',
};

const checkboxStyle = {
  marginRight: '6px',
  marginTop: '1px',
  flexShrink: 0,
  transform: 'scale(0.8)',
};

const submitButtonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '20px',
  padding: '12px 40px',
  fontSize: '14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  float: 'right',
  marginTop: '20px',
};

const sectionTextStyle = {
  fontSize: '11px',
  color: '#333',
  lineHeight: '1.3',
  marginBottom: '6px',
};

// Style for date and time input
const dateInputStyle = {
  flex: 1, 
  fontSize: '11px', 
  padding: '4px 6px', 
  border: '1px solid #ddd', 
  borderRadius: '3px',
  fontFamily: 'Arial, sans-serif',
  cursor: 'pointer',
  minWidth: '120px',
};

// Style for editable TUK text
const editableTextStyle = {
  fontSize: '11px',
  color: '#333',
  border: 'none',
  background: 'transparent',
  outline: 'none',
  fontFamily: 'Arial, sans-serif',
  width: '100%',
  padding: '2px',
};

const AK01 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    skemaSertifikasi: '',
    judulUnit: '',
    nomorUnit: '',
    tukTemplate: 'Sewaktu/Tempat Kerja/Mandiri*',
    namaAsesor: '',
    namaAsesi: '',
    checkedItems: {
      portfolio: false,
      observasi: false,
      pertanyaan: false,
      reviewProduk: false,
      kegiatanTerstruktur: false,
      pertanyaanTertulis: false,
      wawancara: false,
    },
    tanggal: '',
    waktu: '',
    tukPelaksanaan: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  // Block navigation jika form belum di-submit
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!isFormSubmitted) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function(...args) {
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/fr-ak-01')) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalPushState.apply(window.history, args);
    };

    window.history.replaceState = function(...args) {
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/fr-ak-01')) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalReplaceState.apply(window.history, args);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
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

  const handleCheckboxChange = (item) => {
    setFormData((prev) => ({
      ...prev,
      checkedItems: {
        ...prev.checkedItems,
        [item]: !prev.checkedItems[item],
      },
    }));
  };

  const isFormValid = () => {
    const requiredFields = [
      'judulUnit',
      'nomorUnit',
      'namaAsesor',
      'namaAsesi',
      'tanggal',
      'waktu',
      'tukPelaksanaan',
    ];
    const hasRequiredFields = requiredFields.every((field) => formData[field].trim() !== '');
    const hasCheckedItems = Object.values(formData.checkedItems).some((item) => item);
    return hasRequiredFields && hasCheckedItems;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert('Harap lengkapi semua field yang diperlukan dan pilih minimal satu bukti yang akan dikumpulkan.');
      return;
    }
    try {
      // Attempt to submit to backend
      await submitFormAk01(formData);
      setIsFormSubmitted(true);
      setShowModal(true);
    } catch (err) {
      // Fallback: store locally if backend fails, and inform the user
      console.error('Gagal submit FR.AK.01 ke server:', err);
      try {
        localStorage.setItem('ak01FormData', JSON.stringify(formData));
      } catch {}
      alert('Gagal mengirim ke server. Data disimpan sementara di perangkat Anda. Coba lagi nanti.');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => {
      navigate('/dashboard-asesi/ak-04');
    }, 300);
  };

  return (
    <div style={pageContainerStyle} className="page-container">
      {/* Scrollbar styling for WebKit browsers + RESPONSIVE CSS */}
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

          /* RESPONSIVE STYLES */
          @media (max-width: 768px) {
            .page-container {
              padding: 10px !important;
            }
            
            .content-card {
              padding: 20px !important;
            }
            
            .logo-text {
              font-size: 28px !important;
            }
            
            .logo-container {
              height: 100px !important;
            }
            
            .nav-container {
              max-width: 80% !important;
            }
            
            .header-section2 {
              flex-direction: column !important;
              text-align: center !important;
              align-items: center !important;
            }
            
            .logo-container2 {
              align-self: center !important;
            }
            
            .title-text {
              font-size: 14px !important;
            }
            
            .subtitle-text {
              font-size: 14px !important;
            }
            
            .two-column-layout {
              flex-direction: column !important;
              gap: 10px !important;
            }
            
            .transparent-box {
              height: auto !important;
              min-height: 100px !important;
              padding: 12px !important;
            }
            
            .checkbox-grid {
              grid-template-columns: 1fr !important;
            }
            
            .submit-button {
              width: 100% !important;
              float: none !important;
              margin-top: 15px !important;
            }
            
            .data-table {
              font-size: 11px !important;
            }
            
            .data-table td {
              padding: 8px !important;
            }
            
            .input-field {
              font-size: 11px !important;
              padding: 3px 6px !important;
              min-width: 0 !important;
            }
            
            .date-time-input {
              min-width: 100px !important;
              font-size: 10px !important;
            }
            
            .warning-notification {
              right: 10px !important;
              left: 10px !important;
              max-width: none !important;
              font-size: 12px !important;
            }
            
            .modal-container {
              min-width: 90% !important;
              max-width: 90% !important;
              padding: 20px 30px !important;
              margin: 10px !important;
            }
            
            .modal-title {
              font-size: 16px !important;
              margin-bottom: 20px !important;
              padding-bottom: 20px !important;
            }
            
            .modal-button {
              position: relative !important;
              bottom: auto !important;
              right: auto !important;
              width: 100% !important;
              margin-top: 20px !important;
            }

            .table-input-row {
              flex-wrap: wrap !important;
              gap: 5px !important;
            }
            
            .table-input-row span {
              min-width: auto !important;
            }
            
            .table-input-row input {
              min-width: 150px !important;
              flex: 1 !important;
            }

            .form-row {
              flex-wrap: wrap !important;
              gap: 3px !important;
            }
            
            .form-row strong {
              min-width: auto !important;
            }
          }
          
          @media (max-width: 480px) {
            .logo-text {
              font-size: 24px !important;
            }
            
            .nav-container {
              max-width: 90% !important;
              padding: 5px 10px !important;
            }
            
            .content-card {
              padding: 15px !important;
            }
            
            .transparent-box {
              padding: 10px !important;
            }
            
            .section-text {
              font-size: 10px !important;
            }
            
            .box-text {
              font-size: 10px !important;
            }
            
            .checkbox-item {
              font-size: 9px !important;
            }
            
            .input-field {
              font-size: 10px !important;
            }
            
            .submit-button {
              font-size: 12px !important;
              padding: 10px 20px !important;
            }
            
            .data-table {
              font-size: 10px !important;
            }
            
            .data-table td {
              padding: 6px !important;
            }

            .table-input-row input {
              min-width: 120px !important;
            }
          }
        `}
      </style>

      {/* Warning Notification */}
      {showWarning && (
        <div style={warningNotificationStyle} className="warning-notification">
          Silakan isi dan kirim formulir FR.AK.01 terlebih dahulu!
        </div>
      )}

      {/* Header Section matching APL-01 design */}
      <div style={headerSectionStyle}>
        <div style={navContainerStyle} className="nav-scrollbar nav-container">
          <NavAsesi activeTab="FR.AK.01" />
        </div>

        <div style={logoContainerStyle} className="logo-container">
          <h1 style={logoTextStyle} className="logo-text">
            MyLSP
          </h1>
        </div>
      </div>

      {/* Content Card */}
      <div style={contentCardStyle} className="content-card">
        <div style={headerSectionStyle2} className="header-section2">
          <div style={logoContainer2Style} className="logo-container2">
            <img
              src="/src/img/image 12.png"
              alt="LSP Logo"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '8px',
                objectFit: 'contain',
                backgroundColor: '#f8f9fa',
                padding: '4px',
              }}
            />
          </div>
          <div style={headerContentStyle}>
            <div style={titleStyle} className="title-text">FR.AK.01</div>
            <div style={subtitleStyle} className="subtitle-text">PERSETUJUAN ASESMEN DAN KERAHASIAAN</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Skema Sertifikasi */}
          <table style={{width: '100%', marginBottom: '15px', fontSize: '12px'}} className="data-table">
            <tbody>
              <tr>
                <td style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  backgroundColor: '#f8f9fa',
                  fontWeight: 'bold',
                  width: '150px',
                  textAlign: 'center',
                  verticalAlign: 'middle'
                }}>
                  Skema Sertifikasi
                </td>
                <td style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  backgroundColor: 'white'
                }}>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <div style={{display: 'flex', alignItems: 'center'}} className="table-input-row">
                      <span style={{minWidth: '80px', fontSize: '12px', fontWeight: 'bold'}}>Judul Unit</span>
                      <span style={{margin: '0 8px'}}>:</span>
                      <input
                        type="text"
                        style={{
                          flex: 1,
                          padding: '4px 8px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: '12px'
                        }}
                        className="input-field"
                        value={formData.judulUnit}
                        onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                        placeholder="Masukkan judul unit"
                      />
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}} className="table-input-row">
                      <span style={{minWidth: '80px', fontSize: '12px', fontWeight: 'bold'}}>Nomor Unit</span>
                      <span style={{margin: '0 8px'}}>:</span>
                      <input
                        type="text"
                        style={{
                          flex: 1,
                          padding: '4px 8px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: '12px'
                        }}
                        className="input-field"
                        value={formData.nomorUnit}
                        onChange={(e) => handleInputChange('nomorUnit', e.target.value)}
                        placeholder="Masukkan nomor unit"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div style={transparentBoxStyle} className="transparent-box">
            <div style={boxTextStyle} className="box-text">
              Persetujuan Asesmen ini untuk menjamin bahwa Asesi telah diberi arahan secara rinci tentang perencanaan dan
              proses asesmen.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }} className="two-column-layout">
            <div style={{ flex: 1 }}>
              {/* Box 1 Kiri - TUK, Nama Asesor, Nama Asesi */}
              <div style={{...transparentBoxStyle, height: '120px', display: 'flex', flexDirection: 'column', padding: '15px', justifyContent: 'flex-start'}} className="transparent-box">
                <div style={{...sectionTextStyle, marginBottom: '8px', display: 'flex', alignItems: 'center'}} className="section-text form-row">
                  <strong style={{minWidth: '25px'}}>TUK</strong>
                  <span style={{margin: '0 5px'}}>{' : '}</span>
                  <input
                    type="text"
                    style={editableTextStyle}
                    value={formData.tukTemplate}
                    onChange={(e) => handleInputChange('tukTemplate', e.target.value)}
                    placeholder="Coret yang tidak perlu"
                  />
                </div>
                <div style={{...sectionTextStyle, marginBottom: '8px', display: 'flex', alignItems: 'center'}} className="section-text form-row">
                  <strong style={{minWidth: '90px'}}>Nama Asesor</strong>
                  <span style={{margin: '0 5px'}}>{' : '}</span>
                  <input
                    type="text"
                    style={{ flex: 1, fontSize: '11px', padding: '3px 6px', border: '1px solid #ddd', borderRadius: '3px' }}
                    className="input-field"
                    value={formData.namaAsesor}
                    onChange={(e) => handleInputChange('namaAsesor', e.target.value)}
                  />
                </div>
                <div style={{...sectionTextStyle, marginBottom: '0', display: 'flex', alignItems: 'center'}} className="section-text form-row">
                  <strong style={{minWidth: '90px'}}>Nama Asesi</strong>
                  <span style={{margin: '0 5px'}}>{' : '}</span>
                  <input
                    type="text"
                    style={{ flex: 1, fontSize: '11px', padding: '3px 6px', border: '1px solid #ddd', borderRadius: '3px' }}
                    className="input-field"
                    value={formData.namaAsesi}
                    onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                  />
                </div>
              </div>

              {/* Box 2 Kiri - Bukti yang akan dikumpulkan */}
              <div style={{...transparentBoxStyle, height: '130px', display: 'flex', flexDirection: 'column', padding: '15px'}} className="transparent-box">
                <div style={{ ...sectionTextStyle, fontWeight: 'bold', marginBottom: '8px', fontSize: '13px' }} className="section-text">
                  Bukti yang akan dikumpulkan:
                </div>
                <div style={{...checkboxGridStyle, gap: '5px 10px'}} className="checkbox-grid">
                  {[
                    { key: 'portfolio', label: 'Hasil verifikasi Portofolio' },
                    { key: 'reviewProduk', label: 'Hasil review produk' },
                    { key: 'observasi', label: 'Hasil Observasi Langsung' },
                    { key: 'kegiatanTerstruktur', label: 'Hasil kegiatan Terstruktur' },
                    { key: 'pertanyaan', label: 'Hasil Pertanyaan Lisan' },
                    { key: 'pertanyaanTertulis', label: 'Hasil Pertanyaan Tertulis' },
                    { key: 'wawancara', label: 'Hasil Pertanyaan wawancara' },
                  ].map((item) => (
                    <div key={item.key} style={{...checkboxItemStyle, fontSize: '11px'}} className="checkbox-item">
                      <input
                        type="checkbox"
                        style={checkboxStyle}
                        checked={formData.checkedItems[item.key]}
                        onChange={() => handleCheckboxChange(item.key)}
                      />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Box 3 Kiri - Pelaksanaan Asesmen */}
              <div style={{...transparentBoxStyle, height: '150px', display: 'flex', flexDirection: 'column', padding: '15px'}} className="transparent-box">
                <div style={{ ...sectionTextStyle, fontWeight: 'bold', marginBottom: '10px', fontSize: '13px' }} className="section-text">
                  Pelaksanaan asesmen disepakati pada:
                </div>
                <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '10px'}}>
                  <div style={{display: 'flex', alignItems: 'center'}} className="form-row">
                    <span style={{minWidth: '90px', fontSize: '12px'}}>Tanggal</span>
                    <span style={{margin: '0 5px'}}>{' : '}</span>
                    <input
                      type="date"
                      style={dateInputStyle}
                      className="date-time-input"
                      value={formData.tanggal}
                      onChange={(e) => handleInputChange('tanggal', e.target.value)}
                    />
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}} className="form-row">
                    <span style={{minWidth: '90px', fontSize: '12px'}}>Waktu</span>
                    <span style={{margin: '0 5px'}}>{' : '}</span>
                    <input
                      type="time"
                      style={dateInputStyle}
                      className="date-time-input"
                      value={formData.waktu}
                      onChange={(e) => handleInputChange('waktu', e.target.value)}
                    />
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}} className="form-row">
                    <span style={{minWidth: '90px', fontSize: '12px'}}>TUK</span>
                    <span style={{margin: '0 5px'}}>{' : '}</span>
                    <input
                      type="text"
                      style={{flex: 1, fontSize: '11px', padding: '4px 6px', border: '1px solid #ddd', borderRadius: '3px'}}
                      className="input-field"
                      value={formData.tukPelaksanaan}
                      onChange={(e) => handleInputChange('tukPelaksanaan', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              {/* Box 1 Kanan - Asesi */}
              <div style={{...transparentBoxStyle, height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '15px'}} className="transparent-box">
                <div style={{...boxTitleStyle, marginBottom: '10px', fontSize: '13px'}}>Asesi:</div>
                <div style={{ ...boxTextStyle, textAlign: 'justify', fontWeight: 'normal', fontSize: '12px', lineHeight: '1.4' }} className="box-text">
                  Bahwa saya telah mendapatkan penjelasan terkait hak dan prosedur banding asesmen dari asesor.
                </div>
              </div>

              {/* Box 2 Kanan - Asesor */}
              <div style={{...transparentBoxStyle, height: '130px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '15px'}} className="transparent-box">
                <div style={{fontSize: '13px', fontWeight: 'bold', marginBottom: '8px', color: '#333'}}>Asesor:</div>
                <div style={{ fontSize: '11px', color: '#333', lineHeight: '1.3', textAlign: 'justify', fontWeight: 'normal' }} className="box-text">
                  Menyatakan tidak akan membuka hasil pekerjaan yang diperoleh karena penguasaan saya sebagai Asesor dalam
                  pekerjaan Asesmen kepada siapapun atau organisasi manapun selain kepada pihak yang berwenang sehubungan
                  dengan kewajiban saya sebagai Asesor yang ditugaskan oleh LSP.
                </div>
              </div>

              {/* Box 3 Kanan - Asesi */}
              <div style={{...transparentBoxStyle, height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '15px'}} className="transparent-box">
                <div style={{...boxTitleStyle, marginBottom: '10px', fontSize: '13px'}}>Asesi:</div>
                <div style={{ ...boxTextStyle, textAlign: 'justify', fontWeight: 'normal', fontSize: '12px', lineHeight: '1.4' }} className="box-text">
                  Saya setuju mengikuti Asesmen dengan pemahaman bahwa informasi yang dikumpulkan hanya digunakan untuk
                  pengembangan profesional dan hanya dapat diakses oleh orang tertentu saja.
                </div>
              </div>
            </div>
          </div>

          <button type="submit" style={submitButtonStyle} className="submit-button">
            Kirim
          </button>
          <div style={{ clear: 'both', marginBottom: '20px' }}></div>
        </form>
      </div>

      {showModal && (
        <div style={modalOverlayStyle} onClick={handleCloseModal}>
          <div style={modalContainerStyle} className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div style={iconContainerStyle}>
              <div style={successIconStyle}>
                <div style={checkCircleStyle}>
                  <div style={checkMarkStyle}>✓</div>
                </div>
                
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
            
            <div style={modalTitleStyle} className="modal-title">Jawaban anda telah direkam!</div>
            
            <button 
              style={okayButtonStyle} 
              className="modal-button"
              onClick={handleCloseModal}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e67e00'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#FF8C00'}
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AK01;