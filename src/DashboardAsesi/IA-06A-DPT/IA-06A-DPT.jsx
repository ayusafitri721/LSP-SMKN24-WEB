// src/DashboardAsesi/IA-06A-DPT/IA-06A-DPT.jsx

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';

const pageContainerStyle = {
  backgroundColor: 'white',
  fontFamily: 'Arial, sans-serif',
  padding: '15px',
  minHeight: '100vh',
};

const headerSectionStyle = {
  backgroundImage: "linear-gradient(rgba(255,140,0,0.7), rgba(255,140,0,0.7)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
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

const formContainerStyle = {
  backgroundColor: 'white',
  borderRadius: '0 0 15px 15px',
  padding: '0',
  boxShadow: 'none',
  marginTop: '0',
  overflow: 'hidden',
  border: 'none',
};

const headerStyle = {
  backgroundColor: 'white',
  borderTop: '5px solid #ffffffff', 
  borderBottom: '5px solid #ffffffff', 
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center',
};

const formTitleSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
};

const formTitleLargeStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0',
};

const formTitleSmallStyle = {
  fontSize: '14px',
  fontWeight: 'normal',
  color: '#666',
  marginTop: '5px',
};

const lspLogoStyle = {
  width: '50px',
  height: '50px',
  objectFit: 'contain',
  marginRight: '15px',
  position: 'absolute',
  left: '20px',
};

const formBodyStyle = {
  padding: '25px',
  backgroundColor: 'white',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '20px',
  border: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '8px',
  border: '1px solid #ddd',
  fontSize: '14px',
  color: '#333',
};

const tableTopCellStyle = {
  ...tableCellStyle,
  backgroundColor: '#f5f5f5',
  fontWeight: 'bold',
};

const uploadButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '12px 20px',
  backgroundColor: 'white',
  border: '2px solid #ddd',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '14px',
  color: '#333',
  marginTop: '20px',
  transition: 'all 0.3s ease',
  width: 'fit-content',
};

const pdfIconStyle = {
  width: '32px',
  height: '32px',
  backgroundColor: '#131111ff',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '12px',
  fontWeight: 'bold',
};

const uploadTextStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
};

const uploadTitleStyle = {
  fontSize: '14px',
  fontWeight: '500',
  color: '#333',
  margin: 0,
};

const uploadSubtitleStyle = {
  fontSize: '12px',
  color: '#666',
  margin: 0,
};

const submitButtonStyle = {
  backgroundColor: '#FF8C00',
  color: 'white',
  border: 'none',
  padding: '12px 30px',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '30px',
  transition: 'all 0.3s ease',
  width: 'fit-content',
  alignSelf: 'flex-end',
};

const popupOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const popupContainerStyle = {
  backgroundColor: 'white',
  borderRadius: '15px',
  padding: '40px',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
  maxWidth: '400px',
  width: '90%',
  position: 'relative',
  transform: 'scale(1)',
  transition: 'transform 0.3s ease',
};

const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
};

const successIconStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
};

const checkCircleStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#FF8C00',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: 'checkAnimation 0.6s ease',
};

const checkMarkStyle = {
  color: 'white',
  fontSize: '40px',
  fontWeight: 'bold',
};

const listLinesStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  alignItems: 'center',
};

const popupTitleStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '30px',
  lineHeight: '1.4',
};

const okayButtonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '12px 40px',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
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

const IA06A = () => {
  const [formData, setFormData] = useState({
    namaAssesor: '',
    namaAsesi: '',
    tanggalAsesment: ''
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      console.log('File uploaded:', file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form fields
    const requiredFields = [
      { field: formData.namaAssesor, name: 'Nama Assesor' },
      { field: formData.namaAsesi, name: 'Nama Asesi' },
      { field: formData.tanggalAsesment, name: 'Tanggal Assessment' }
    ];
    
    const emptyFields = requiredFields.filter(item => !item.field.trim());
    
    if (emptyFields.length > 0 || !uploadedFile) {
      let warningMessage = '';
      if (emptyFields.length > 0) {
        const fieldNames = emptyFields.map(item => item.name).join(', ');
        warningMessage = `Mohon lengkapi: ${fieldNames}`;
      }
      if (!uploadedFile) {
        warningMessage += emptyFields.length > 0 ? ' dan File Soal' : 'Mohon upload File Soal';
      }
      
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 4000);
      return;
    }
    
    console.log('Form submitted:', formData);
    console.log('Uploaded file:', uploadedFile);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    // Navigate to IA-06-C after closing popup
    navigate('/dashboard-asesi/ia-06c');
  };

  return (
    <div style={pageContainerStyle} className="page-container">
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
          .upload-button:hover {
            border-color: #ff8c00;
            background-color: #fffbf5;
          }
          @keyframes checkAnimation {
            0% { transform: scale(0); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
          .popup-container {
            animation: popupFadeIn 0.3s ease;
          }
          @keyframes popupFadeIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
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
          .okay-button:hover {
            background-color: #FF8C00;
          }

          /* Mobile Responsive Styles */
          @media (max-width: 768px) {
            .page-container {
              padding: 10px !important;
              overflow-x: hidden !important;
            }

            .header-section {
              border-radius: 0 0 20px 20px !important;
            }

            .nav-container {
              max-width: 80% !important;
              padding: 5px 10px !important;
              border-radius: 0 10px 20px 10px !important;
            }

            .logo-container {
              height: 120px !important;
              margin: 15px 0 !important;
            }

            .logo-text {
              font-size: 32px !important;
              letter-spacing: 1px !important;
            }

            .form-container {
              padding: 15px !important;
              overflow-x: hidden !important;
            }

            .header-style {
              padding: 8px 15px !important;
            }

            .lsp-logo {
              width: 40px !important;
              height: 40px !important;
              left: 15px !important;
            }

            .form-title-large {
              font-size: 16px !important;
            }

            .form-title-small {
              font-size: 12px !important;
            }

            .form-body {
              padding: 15px !important;
            }

            .table-cell {
              padding: 6px !important;
              font-size: 12px !important;
            }

            .upload-button {
              padding: 10px 15px !important;
              font-size: 12px !important;
              width: 100% !important;
            }

            .pdf-icon {
              width: 28px !important;
              height: 28px !important;
              font-size: 10px !important;
            }

            .upload-title {
              font-size: 12px !important;
            }

            .upload-subtitle {
              font-size: 10px !important;
            }

            .submit-button {
              width: 100% !important;
              padding: 12px 20px !important;
              font-size: 14px !important;
            }

            .warning-notification {
              top: 10px !important;
              right: 10px !important;
              left: 10px !important;
              font-size: 12px !important;
              padding: 10px 15px !important;
            }

            .popup-container {
              margin: 20px !important;
              padding: 20px 25px !important;
              max-width: calc(100vw - 40px) !important;
              width: auto !important;
            }

            .popup-title {
              font-size: 16px !important;
              margin-bottom: 20px !important;
            }

            .success-icon {
              gap: 10px !important;
            }

            .check-circle {
              width: 60px !important;
              height: 60px !important;
            }

            .check-mark {
              font-size: 30px !important;
            }

            .okay-button {
              width: 100% !important;
              padding: 12px 20px !important;
            }
          }

          /* Very small screens */
          @media (max-width: 480px) {
            .page-container {
              padding: 8px !important;
            }

            .form-container {
              padding: 12px !important;
            }

            .logo-text {
              font-size: 28px !important;
            }

            .nav-container {
              max-width: 85% !important;
            }

            .popup-container {
              margin: 15px !important;
              padding: 15px 20px !important;
            }
          }
        `}
      </style>

      {/* Warning Notification */}
      {showWarning && (
        <div style={warningNotificationStyle} className="warning-notification">
          Mohon lengkapi semua field yang diperlukan!
        </div>
      )}

      <div style={headerSectionStyle} className="header-section">
        <div style={navContainerStyle} className="nav-scrollbar nav-container">
          <NavAsesi activeTab="FR.IA.06A.DPT" />
        </div>

        <div style={logoContainerStyle} className="logo-container">
          <h1 style={logoTextStyle} className="logo-text">
            MyLSP
          </h1>
        </div>
      </div>

      <div style={formContainerStyle} className="form-container">
        <div style={headerStyle} className="header-style">
          <img src="/src/img/image 12.png" alt="LSP Logo" style={lspLogoStyle} className="lsp-logo" />
          <div style={formTitleSectionStyle}>
            <h2 style={formTitleLargeStyle} className="form-title-large">FR.IA.06.A</h2>
            <h3 style={formTitleSmallStyle} className="form-title-small">DAFTAR PERTANYAAN TERTULIS ESAI</h3>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={formBodyStyle} className="form-body">
            <table style={tableStyle}>
              <tbody>
                <tr>
                  <td style={{ ...tableCellStyle, width: '25%' }} className="table-cell">Nama Assesor</td>
                  <td style={{ ...tableCellStyle, width: '1%' }} className="table-cell">:</td>
                  <td style={{ ...tableCellStyle, width: '74%' }} className="table-cell">
                    <input
                      type="text"
                      style={{ width: '100%', border: 'none', outline: 'none' }}
                      value={formData.namaAssesor}
                      onChange={(e) => handleInputChange('namaAssesor', e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ ...tableCellStyle, width: '25%' }} className="table-cell">Nama Asesi</td>
                  <td style={{ ...tableCellStyle, width: '1%' }} className="table-cell">:</td>
                  <td style={{ ...tableCellStyle, width: '74%' }} className="table-cell">
                    <input
                      type="text"
                      style={{ width: '100%', border: 'none', outline: 'none' }}
                      value={formData.namaAsesi}
                      onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ ...tableCellStyle, width: '25%' }} className="table-cell">Tanggal Asesment</td>
                  <td style={{ ...tableCellStyle, width: '1%' }} className="table-cell">:</td>
                  <td style={{ ...tableCellStyle, width: '74%' }} className="table-cell">
                    <input
                      type="text"
                      style={{ width: '100%', border: 'none', outline: 'none' }}
                      value={formData.tanggalAsesment}
                      onChange={(e) => handleInputChange('tanggalAsesment', e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}
              accept=".pdf,.doc,.docx"
            />

            <div 
              style={uploadButtonStyle}
              className="upload-button"
              onClick={handleFileUpload}
            >
              <div style={pdfIconStyle} className="pdf-icon">PDF</div>
              <div style={uploadTextStyle}>
                <div style={uploadTitleStyle} className="upload-title">
                  {uploadedFile ? uploadedFile.name : 'Download soal'}
                </div>
                <div style={uploadSubtitleStyle} className="upload-subtitle">
                  {uploadedFile 
                    ? `File berhasil dipilih`
                    : 'Silahkan klik tombol ini untuk mendownload soal'
                  }
                </div>
              </div>
            </div>

            {uploadedFile && (
              <div style={{ 
                marginTop: '10px', 
                padding: '10px', 
                backgroundColor: '#e8f5e8', 
                borderRadius: '4px',
                fontSize: '12px',
                color: '#2e7d32'
              }}>
                File terpilih: {uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(1)} KB)
              </div>
            )}

             <div
              style={{ textAlign: "right", marginTop: "20px" }}
              className="submit-button"
            >
              <button
                type="submit"
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  padding: "12px 40px",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                
                Kirim
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div style={popupOverlayStyle} onClick={handleClosePopup}>
          <div style={popupContainerStyle} className="popup-container" onClick={(e) => e.stopPropagation()}>
            <div style={iconContainerStyle}>
              <div style={successIconStyle} className="success-icon">
                {/* Check mark circle - di atas */}
                <div style={checkCircleStyle} className="check-circle">
                  <div style={checkMarkStyle} className="check-mark">✓</div>
                </div>
                
                {/* List lines (3 horizontal lines) - di bawah */}
                <div style={listLinesStyle} className="list-lines">
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
            
            <div style={popupTitleStyle} className="popup-title">Jawaban anda telah direkam!</div>
            
            <button 
              style={okayButtonStyle} 
              className="okay-button"
              onClick={handleClosePopup}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#FF8C00'}
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

export default IA06A;