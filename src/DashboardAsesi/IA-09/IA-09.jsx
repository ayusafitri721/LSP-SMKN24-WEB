// src/DashboardAsesi/IA-09/IA-09.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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

const logoContainerStyle = {
  height: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10px',
  marginBottom: '10px',
};

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

const headerStyle = {
  textAlign: 'center',
  marginBottom: '30px',
};

const titleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#333',
  margin: '5px 0',
};

const subtitleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#333',
  margin: '0',
};

const mainContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '30px',
  marginTop: '20px',
};

const leftSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const rightSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const sectionStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  backgroundColor: '#fafafa',
};

const sectionTitleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '10px',
  borderBottom: '1px solid #ddd',
  paddingBottom: '5px',
};

const fieldRowStyle = {
  display: 'flex',
  marginBottom: '8px',
  alignItems: 'flex-start',
};

const labelStyle = {
  fontSize: '12px',
  color: '#333',
  minWidth: '120px',
  paddingRight: '10px',
};

const colonStyle = {
  marginRight: '10px',
  fontSize: '12px',
};

const valueStyle = {
  fontSize: '12px',
  color: '#333',
  flex: 1,
};

const inputStyle = {
  fontSize: '12px',
  color: '#333',
  flex: 1,
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  padding: '2px 0',
  borderBottom: '1px solid #ccc',
};

const dateTimeInputStyle = {
  fontSize: '12px',
  color: '#333',
  flex: 1,
  border: '1px solid #ccc',
  outline: 'none',
  backgroundColor: 'white',
  padding: '4px 6px',
  borderRadius: '4px',
};

const competencyListStyle = {
  fontSize: '12px',
  color: '#333',
  marginBottom: '15px',
};

const competencyItemStyle = {
  marginBottom: '8px',
};

const tableContainerStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: 'white',
};

const tableHeaderStyle = {
  backgroundColor: '#f8f9fa',
  padding: '12px',
  fontSize: '13px',
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
  borderBottom: '1px solid #ddd',
};

const tableRowStyle = {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr',
  borderBottom: '1px solid #eee',
};

const tableCellStyle = {
  padding: '12px',
  fontSize: '12px',
  color: '#333',
  borderRight: '1px solid #eee',
  display: 'flex',
  alignItems: 'center',
};

const checkboxCellStyle = {
  padding: '12px',
  fontSize: '12px',
  color: '#333',
  borderRight: '1px solid #eee',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const checkboxStyle = {
  width: '16px',
  height: '16px',
  cursor: 'pointer',
};

const bottomSectionStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '30px',
  marginTop: '30px',
};

const signatureBoxStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  backgroundColor: 'white',
  textAlign: 'center',
};

const signatureNameStyle = {
  fontSize: '13px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '5px',
};

const signatureValueStyle = {
  fontSize: '12px',
  color: '#333',
  padding: '8px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  backgroundColor: '#fafafa',
  marginBottom: '10px',
};

const signatureLabelStyle = {
  fontSize: '12px',
  color: '#333',
  marginBottom: '15px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '30px',
  gap: '15px',
};

const approveButtonStyle = {
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  padding: '8px 20px',
  fontSize: '13px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const submitButtonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  padding: '8px 20px',
  fontSize: '13px',
  fontWeight: 'bold',
  cursor: 'pointer',
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
  backgroundColor: 'white',
  borderRadius: '20px',
  padding: '40px',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  minWidth: '320px',
  maxWidth: '400px',
};

const iconContainerStyle = {
  marginBottom: '20px',
};

const successIconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 20px',
  position: 'relative',
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
  marginTop: '6px',
};

const checkMarkStyle = {
  color: 'white',
  fontSize: '24px',
  fontWeight: 'bold',
};

const popupTitleStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '8px',
  lineHeight: '1.3',
};

const popupSubtitleStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '30px',
  lineHeight: '1.3',
};

const dividerStyle = {
  height: '2px',
  backgroundColor: '#ddd',
  margin: '25px 0',
  borderRadius: '1px',
};

const okayButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#666',
  cursor: 'pointer',
  padding: '10px 20px',
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
};

const IA09 = () => {
  const [checkboxes, setCheckboxes] = useState({
    sesuai1: false,
    rekomendasi1: false,
    sesuai2: false,
    rekomendasi2: false,
    sesuai3: false,
    rekomendasi3: false,
  });
  
  const [formData, setFormData] = useState({
    judulUnit: '',
    nomorUnit: '',
    namaAsesor: '',
    namaAsesi: '',
    buktiKumpul: '',
    tanggal: '',
    waktu: '',
    bukti1: '',
    bukti2: '',
    bukti3: '',
    namaAsesiSignature: 'YUSMAYATI',
    namaAsesorSignature: 'ROSMANI'
  });
  
  const [showPopup, setShowPopup] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function(...args) {
      if (!args[2].includes('/dashboard-asesi/ia-09')) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalPushState.apply(window.history, args);
    };

    window.history.replaceState = function(...args) {
      if (!args[2].includes('/dashboard-asesi/ia-09')) {
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
  }, []);

  const handleCheckboxChange = (name) => {
    setCheckboxes(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
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

          /* Mobile Responsive Styles */
          @media (max-width: 768px) {
            /* Page container */
            .page-container {
              padding: 10px !important;
            }

            /* Header section */
            .header-section {
              border-radius: 0 0 20px 20px !important;
            }

            /* Navigation */
            .nav-container {
              max-width: 80% !important;
              padding: 5px 10px !important;
              border-radius: 0 10px 20px 10px !important;
            }

            /* Logo */
            .logo-container {
              height: 80px !important;
              margin: 10px 0 !important;
            }

            .logo-text {
              font-size: 24px !important;
            }

            /* Content card */
            .content-card {
              padding: 15px !important;
              overflow-x: hidden !important;
            }

            /* Main container - Stack vertically */
            .main-container {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
              margin-top: 15px !important;
            }

            /* Section styles */
            .section {
              padding: 10px !important;
              overflow-x: hidden !important;
            }

            .section-title {
              font-size: 12px !important;
              margin-bottom: 8px !important;
            }

            /* Field rows - Stack on mobile */
            .field-row {
              flex-direction: column !important;
              margin-bottom: 12px !important;
              gap: 5px !important;
              width: 100% !important;
              overflow-x: hidden !important;
            }

            .field-row-label {
              min-width: unset !important;
              padding-right: 0 !important;
              font-weight: bold !important;
              word-wrap: break-word !important;
              white-space: normal !important;
            }

            .field-row-colon {
              display: none !important;
            }

            .field-row-input {
              width: 100% !important;
              max-width: 100% !important;
              padding: 8px !important;
              border: 1px solid #ccc !important;
              border-radius: 4px !important;
              background: white !important;
              box-sizing: border-box !important;
              font-size: 12px !important;
            }

            /* Fix for long text values */
            .field-row-value {
              word-wrap: break-word !important;
              white-space: normal !important;
              line-height: 1.4 !important;
            }

            /* Table responsive */
            .table-container {
              overflow-x: auto !important;
              max-width: 100% !important;
            }

            .table-row {
              grid-template-columns: 3fr 1fr 1fr !important;
              min-width: 300px !important;
            }

            .table-cell {
              padding: 6px !important;
              font-size: 10px !important;
              word-wrap: break-word !important;
              overflow-wrap: break-word !important;
              hyphens: auto !important;
            }

            .table-cell-input {
              min-width: 80px !important;
              max-width: 120px !important;
              font-size: 10px !important;
              padding: 4px !important;
              box-sizing: border-box !important;
            }

            .checkbox-cell {
              padding: 8px !important;
            }

            .table-header {
              padding: 8px !important;
              font-size: 11px !important;
            }

            /* Bottom section - Stack signatures */
            .bottom-section {
              grid-template-columns: 1fr !important;
              gap: 15px !important;
              margin-top: 20px !important;
            }

            .signature-box {
              padding: 10px !important;
            }

            .signature-name {
              font-size: 12px !important;
            }

            .signature-value {
              font-size: 11px !important;
              padding: 6px !important;
            }

            .signature-label {
              font-size: 11px !important;
            }

            /* Buttons - Stack on small screens */
            .button-container {
              flex-direction: column !important;
              align-items: stretch !important;
              gap: 10px !important;
              margin-top: 20px !important;
            }

            .button {
              padding: 12px 20px !important;
              font-size: 14px !important;
              width: 100% !important;
            }

            /* Competency items */
            .competency-item {
              flex-direction: column !important;
              gap: 5px !important;
              width: 100% !important;
              overflow-x: hidden !important;
            }

            .competency-item-input {
              width: 100% !important;
              max-width: 100% !important;
              padding: 8px !important;
              border: 1px solid #ccc !important;
              border-radius: 4px !important;
              background: white !important;
              box-sizing: border-box !important;
              font-size: 12px !important;
            }

            /* Warning notification */
            .warning-notification {
              top: 10px !important;
              right: 10px !important;
              left: 10px !important;
              font-size: 12px !important;
              padding: 10px 15px !important;
            }

            /* Popup responsive */
            .popup-container {
              margin: 20px !important;
              padding: 20px !important;
              min-width: unset !important;
              max-width: calc(100vw - 40px) !important;
            }

            .popup-title, .popup-subtitle {
              font-size: 16px !important;
            }

            .success-icon {
              gap: 10px !important;
            }

            .check-circle {
              width: 40px !important;
              height: 40px !important;
            }

            .check-mark {
              font-size: 18px !important;
            }

            .list-lines div {
              width: 40px !important;
              height: 8px !important;
            }

            .list-lines div:nth-child(2) {
              width: 50px !important;
            }

            .list-lines div:nth-child(3) {
              width: 60px !important;
            }
          }

          /* Very small screens */
          @media (max-width: 480px) {
            .content-card {
              padding: 10px !important;
            }

            .field-row {
              flex-direction: column !important;
              margin-bottom: 10px !important;
            }

            .field-row-input {
              font-size: 11px !important;
              padding: 6px !important;
            }

            .table-row {
              grid-template-columns: 2fr 1fr 1fr !important;
              min-width: 280px !important;
            }

            .table-cell {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 3px !important;
              padding: 4px !important;
              font-size: 9px !important;
            }

            .table-cell-input {
              width: 100% !important;
              min-width: unset !important;
              max-width: 100% !important;
              font-size: 9px !important;
              padding: 3px !important;
            }

            .nav-container {
              max-width: 95% !important;
            }

            .competency-item-input {
              font-size: 11px !important;
              padding: 6px !important;
            }

            .section {
              padding: 8px !important;
            }
          }
        `}
      </style>
      
      {/* Warning Notification */}
      {showWarning && (
        <div style={warningNotificationStyle} className="warning-notification">
          Anda sedang di halaman terakhir!
        </div>
      )}
      
      <div style={headerSectionStyle} className="header-section">
        <div style={navContainerStyle} className="nav-scrollbar nav-container">
          <NavAsesi activeTab="FR.IA.09" />
        </div>

        <div style={logoContainerStyle} className="logo-container">
          <h1 style={logoTextStyle} className="logo-text">MyLSP</h1>
        </div>
      </div>
      
      <div style={contentCardStyle} className="content-card">
        <div style={headerStyle}>
          <div style={titleStyle}>FR.IA.09</div>
          <div style={subtitleStyle}>PERTANYAAN WAWANCARA</div>
        </div>

        <div style={mainContainerStyle} className="main-container">
          <div style={leftSectionStyle}>
            {/* Skema Sertifikasi */}
            <div style={sectionStyle} className="section">
              <div style={sectionTitleStyle} className="section-title">Skema Sertifikasi</div>
              <div style={fieldRowStyle} className="field-row">
                <span style={labelStyle} className="field-row-label">Judul Unit</span>
                <span style={colonStyle} className="field-row-colon">:</span>
                <input 
                  type="text"
                  style={inputStyle}
                  className="field-row-input"
                  value={formData.judulUnit}
                  onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                />
              </div>
              <div style={fieldRowStyle} className="field-row">
                <span style={labelStyle} className="field-row-label">Nomor Unit</span>
                <span style={colonStyle} className="field-row-colon">:</span>
                <input 
                  type="text"
                  style={inputStyle}
                  className="field-row-input"
                  value={formData.nomorUnit}
                  onChange={(e) => handleInputChange('nomorUnit', e.target.value)}
                />
              </div>
            </div>

            {/* Form Fields */}
            <div>
              <div style={fieldRowStyle} className="field-row">
                <span style={labelStyle} className="field-row-label">TUK</span>
                <span style={colonStyle} className="field-row-colon">:</span>
                <span style={valueStyle} className="field-row-value">Sewaktu/Tempat Kerja/Mandiri* (coret yang tidak perlu)</span>
              </div>
              <div style={fieldRowStyle} className="field-row">
                <span style={labelStyle} className="field-row-label">Nama Asesor</span>
                <span style={colonStyle} className="field-row-colon">:</span>
                <input 
                  type="text"
                  style={inputStyle}
                  className="field-row-input"
                  value={formData.namaAsesor}
                  onChange={(e) => handleInputChange('namaAsesor', e.target.value)}
                />
              </div>
              <div style={fieldRowStyle} className="field-row">
                <span style={labelStyle} className="field-row-label">Nama Asesi</span>
                <span style={colonStyle} className="field-row-colon">:</span>
                <input 
                  type="text"
                  style={inputStyle}
                  className="field-row-input"
                  value={formData.namaAsesi}
                  onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                />
              </div>
              <div style={fieldRowStyle} className="field-row">
                <span style={labelStyle} className="field-row-label">Bukti yang akan dikumpulkan</span>
                <span style={colonStyle} className="field-row-colon">:</span>
                <input 
                  type="text"
                  style={inputStyle}
                  className="field-row-input"
                  value={formData.buktiKumpul}
                  onChange={(e) => handleInputChange('buktiKumpul', e.target.value)}
                />
              </div>
              <div style={fieldRowStyle} className="field-row">
                <span style={labelStyle} className="field-row-label">Tanggal</span>
                <span style={colonStyle} className="field-row-colon">:</span>
                <input 
                  type="date"
                  style={dateTimeInputStyle}
                  className="field-row-input"
                  value={formData.tanggal}
                  onChange={(e) => handleInputChange('tanggal', e.target.value)}
                />
              </div>
              <div style={fieldRowStyle} className="field-row">
                <span style={labelStyle} className="field-row-label">Waktu</span>
                <span style={colonStyle} className="field-row-colon">:</span>
                <input 
                  type="time"
                  style={dateTimeInputStyle}
                  className="field-row-input"
                  value={formData.waktu}
                  onChange={(e) => handleInputChange('waktu', e.target.value)}
                />
              </div>
            </div>

            {/* Setiap pertanyaan */}
            <div>
              <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
                Setiap pertanyaan harus terkait dengan Elemen
              </div>
              <div style={{ fontSize: '12px', color: '#666', marginBottom: '15px' }}>
                Tuliskan bukti-bukti yang terdapat pada Ceklis Verifikasi Portofolio yang memerlukan wawancara
              </div>
              
              <div style={sectionStyle} className="section">
                <div style={sectionTitleStyle} className="section-title">Bukti-bukti Kompetensi</div>
                <div style={competencyListStyle}>
                  <div style={{...competencyItemStyle, display: 'flex', alignItems: 'flex-start', gap: '8px'}} className="competency-item">
                    <span>1.</span>
                    <input 
                      type="text"
                      style={{...inputStyle, flex: 1}}
                      className="competency-item-input"
                      value={formData.bukti1}
                      onChange={(e) => handleInputChange('bukti1', e.target.value)}
                    />
                  </div>
                  <div style={{...competencyItemStyle, display: 'flex', alignItems: 'flex-start', gap: '8px'}} className="competency-item">
                    <span>2.</span>
                    <input 
                      type="text"
                      style={{...inputStyle, flex: 1}}
                      className="competency-item-input"
                      value={formData.bukti2}
                      onChange={(e) => handleInputChange('bukti2', e.target.value)}
                    />
                  </div>
                  <div style={{...competencyItemStyle, display: 'flex', alignItems: 'flex-start', gap: '8px'}} className="competency-item">
                    <span>3.</span>
                    <input 
                      type="text"
                      style={{...inputStyle, flex: 1}}
                      className="competency-item-input"
                      value={formData.bukti3}
                      onChange={(e) => handleInputChange('bukti3', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={rightSectionStyle}>
            {/* Unit Kompetensi */}
            <div style={sectionStyle} className="section">
              <div style={sectionTitleStyle} className="section-title">Unit Kompetensi</div>
              <div style={fieldRowStyle} className="field-row">
                <span style={labelStyle} className="field-row-label">Kode Unit</span>
                <span style={colonStyle} className="field-row-colon">:</span>
                <span style={valueStyle} className="field-row-value">J.555HHR000.001.2</span>
              </div>
              <div style={fieldRowStyle} className="field-row">
                <span style={labelStyle} className="field-row-label">Judul Unit</span>
                <span style={colonStyle} className="field-row-colon">:</span>
                <span style={valueStyle} className="field-row-value">Memproses Reservasi</span>
              </div>
            </div>

            {/* Table */}
            <div style={tableContainerStyle} className="table-container">
              <div style={{...tableRowStyle, gridTemplateColumns: '2fr 1fr 1fr'}} className="table-row">
                <div style={tableHeaderStyle} className="table-header">Daftar Pertanyaan Wawancara</div>
                <div style={{...tableHeaderStyle, gridColumn: 'span 2'}} className="table-header">Rekomendasi</div>
              </div>
              
              <div style={{...tableRowStyle, gridTemplateColumns: '2fr 1fr 1fr'}} className="table-row">
                <div style={{...tableCellStyle, visibility: 'hidden'}}></div>
                <div style={{...checkboxCellStyle, fontSize: '11px', fontWeight: 'bold'}}>K</div>
                <div style={{...checkboxCellStyle, fontSize: '11px', fontWeight: 'bold', borderRight: 'none'}}>BK</div>
              </div>
              
              <div style={{...tableRowStyle, gridTemplateColumns: '2fr 1fr 1fr'}} className="table-row">
                <div style={tableCellStyle} className="table-cell">
                  <span style={{marginRight: '8px'}}>1. Sesuai dengan bukti :</span>
                  <input 
                    type="text"
                    style={{...inputStyle, minWidth: '150px'}}
                    className="table-cell-input"
                  />
                </div>
                <div style={checkboxCellStyle} className="checkbox-cell">
                  <input 
                    type="checkbox" 
                    style={checkboxStyle}
                    checked={checkboxes.sesuai1}
                    onChange={() => handleCheckboxChange('sesuai1')}
                  />
                </div>
                <div style={{...checkboxCellStyle, borderRight: 'none'}} className="checkbox-cell">
                  <input 
                    type="checkbox" 
                    style={checkboxStyle}
                    checked={checkboxes.rekomendasi1}
                    onChange={() => handleCheckboxChange('rekomendasi1')}
                  />
                </div>
              </div>
              
              <div style={{...tableRowStyle, gridTemplateColumns: '2fr 1fr 1fr'}} className="table-row">
                <div style={tableCellStyle} className="table-cell">
                  <span style={{marginRight: '8px'}}>2. Sesuai dengan bukti :</span>
                  <input 
                    type="text"
                    style={{...inputStyle, minWidth: '150px'}}
                    className="table-cell-input"
                  />
                </div>
                <div style={checkboxCellStyle} className="checkbox-cell">
                  <input 
                    type="checkbox" 
                    style={checkboxStyle}
                    checked={checkboxes.sesuai2}
                    onChange={() => handleCheckboxChange('sesuai2')}
                  />
                </div>
                <div style={{...checkboxCellStyle, borderRight: 'none'}} className="checkbox-cell">
                  <input 
                    type="checkbox" 
                    style={checkboxStyle}
                    checked={checkboxes.rekomendasi2}
                    onChange={() => handleCheckboxChange('rekomendasi2')}
                  />
                </div>
              </div>
              
              <div style={{...tableRowStyle, borderBottom: 'none', gridTemplateColumns: '2fr 1fr 1fr'}} className="table-row">
                <div style={tableCellStyle} className="table-cell">
                  <span style={{marginRight: '8px'}}>3. Sesuai dengan bukti :</span>
                  <input 
                    type="text"
                    style={{...inputStyle, minWidth: '150px'}}
                    className="table-cell-input"
                  />
                </div>
                <div style={checkboxCellStyle} className="checkbox-cell">
                  <input 
                    type="checkbox" 
                    style={checkboxStyle}
                    checked={checkboxes.sesuai3}
                    onChange={() => handleCheckboxChange('sesuai3')}
                  />
                </div>
                <div style={{...checkboxCellStyle, borderRight: 'none'}} className="checkbox-cell">
                  <input 
                    type="checkbox" 
                    style={checkboxStyle}
                    checked={checkboxes.rekomendasi3}
                    onChange={() => handleCheckboxChange('rekomendasi3')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Signatures */}
        <div style={bottomSectionStyle} className="bottom-section">
          <div style={signatureBoxStyle} className="signature-box">
            <div style={signatureNameStyle} className="signature-name">Nama Asesi</div>
            <input 
              type="text"
              style={{
                ...signatureValueStyle,
                border: '1px solid #ddd',
                outline: 'none',
                textAlign: 'center',
                fontWeight: 'bold'
              }}
              className="signature-value"
              value={formData.namaAsesiSignature}
              onChange={(e) => handleInputChange('namaAsesiSignature', e.target.value)}
            />
            <div style={signatureLabelStyle} className="signature-label">Persetujuan Asesi</div>
          </div>
          
          <div style={signatureBoxStyle} className="signature-box">
            <div style={signatureNameStyle} className="signature-name">Nama Asesor</div>
            <input 
              type="text"
              style={{
                ...signatureValueStyle,
                border: '1px solid #ddd',
                outline: 'none',
                textAlign: 'center',
                fontWeight: 'bold'
              }}
              className="signature-value"
              value={formData.namaAsesorSignature}
              onChange={(e) => handleInputChange('namaAsesorSignature', e.target.value)}
            />
            <div style={signatureLabelStyle} className="signature-label">Persetujuan Asesor</div>
          </div>
        </div>

        {/* Buttons */}
        <div style={buttonContainerStyle} className="button-container">
          <button style={approveButtonStyle} className="button">Setujui</button>
          <button style={submitButtonStyle} className="button" onClick={handleSubmit}>Kirim Jawaban</button>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div style={popupOverlayStyle} onClick={handleClosePopup}>
          <div style={popupContainerStyle} className="popup-container" onClick={(e) => e.stopPropagation()}>
            <div style={iconContainerStyle}>
              <div style={successIconStyle} className="success-icon">
                {/* List lines (3 horizontal lines) */}
                <div style={listLinesStyle} className="list-lines">
                  <div style={{
                    width: '60px',
                    height: '12px',
                    backgroundColor: '#FF8C00',
                    borderRadius: '6px'
                  }}></div>
                  <div style={{
                    width: '80px',
                    height: '12px',
                    backgroundColor: '#FF8C00',
                    borderRadius: '6px'
                  }}></div>
                  <div style={{
                    width: '100px',
                    height: '12px',
                    backgroundColor: '#FF8C00',
                    borderRadius: '6px'
                  }}></div>
                </div>
                
                {/* Check mark circle */}
                <div style={checkCircleStyle} className="check-circle">
                  <div style={checkMarkStyle} className="check-mark">✓</div>
                </div>
              </div>
            </div>
            
            <div style={popupTitleStyle} className="popup-title">Jawaban Anda</div>
            <div style={popupSubtitleStyle} className="popup-subtitle">Berhasil Direkam!</div>
            
            <div style={dividerStyle}></div>
            
            <button style={okayButtonStyle} onClick={handleClosePopup}>
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IA09;