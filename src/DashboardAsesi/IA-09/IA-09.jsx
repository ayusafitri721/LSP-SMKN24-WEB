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

const logoLSPContainerStyle = {
  position: 'absolute',
  top: '20px',
  left: '30px',
  backgroundColor: '#ff8c00',
  color: 'white',
  padding: '8px 12px',
  fontSize: '14px',
  fontWeight: 'bold',
  borderRadius: '4px',
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

const textareaStyle = {
  width: '100%',
  minHeight: '80px',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '12px',
  fontFamily: 'Arial, sans-serif',
  resize: 'vertical',
  backgroundColor: 'white',
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
  backgroundColor: 'white',
  borderRadius: '20px',
  padding: '40px',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  minWidth: '320px',
  maxWidth: '400px',
};

// Icon container style
const iconContainerStyle = {
  marginBottom: '20px',
};

// Success icon style
const successIconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 20px',
  position: 'relative',
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

// Divider style
const dividerStyle = {
  height: '2px',
  backgroundColor: '#ddd',
  margin: '25px 0',
  borderRadius: '1px',
};

// Okay button style
const okayButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#666',
  cursor: 'pointer',
  padding: '10px 20px',
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

const IA09 = () => {
  const [checkboxes, setCheckboxes] = useState({
    sesuai1: false,
    rekomendasi1: false,
    sesuai2: false,
    rekomendasi2: false,
    sesuai3: false,
    rekomendasi3: false,
  });
  const [showPopup, setShowPopup] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Block navigation - hanya allow IA-09
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };

    // Intercept navigation attempts dengan history API
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
        `}
      </style>
      
      {/* Warning Notification */}
      {showWarning && (
        <div style={warningNotificationStyle}>
          Anda sedang di halaman terakhir!
        </div>
      )}
      
      <div style={headerSectionStyle}>
        <div style={navContainerStyle} className="nav-scrollbar">
          <NavAsesi activeTab="FR.IA.09" />
        </div>

        <div style={logoContainerStyle}>
          <h1 style={logoTextStyle}>MyLSP</h1>
        </div>
      </div>
      
      <div style={contentCardStyle}>
        <div style={headerStyle}>
          <div style={titleStyle}>FR.IA.09</div>
          <div style={subtitleStyle}>PERTANYAAN WAWANCARA</div>
        </div>

        <div style={mainContainerStyle}>
          <div style={leftSectionStyle}>
            {/* Skema Sertifikasi */}
            <div style={sectionStyle}>
              <div style={sectionTitleStyle}>Skema Sertifikasi</div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Judul Unit</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}></span>
              </div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Nomor Unit</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}></span>
              </div>
            </div>

            {/* Form Fields */}
            <div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>TUK</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}>Sewaktu/Tempat Kerja/Mandiri* (coret yang tidak perlu)</span>
              </div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Nama Asesor</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}></span>
              </div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Nama Asesi</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}></span>
              </div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Bukti yang akan dikumpulkan</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}></span>
              </div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Tanggal</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}></span>
              </div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Waktu</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}></span>
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
              
              <div style={sectionStyle}>
                <div style={sectionTitleStyle}>Bukti-bukti Kompetensi</div>
                <div style={competencyListStyle}>
                  <div style={competencyItemStyle}>1.</div>
                  <div style={competencyItemStyle}>2.</div>
                  <div style={competencyItemStyle}>3.</div>
                </div>
              </div>
            </div>
          </div>

          <div style={rightSectionStyle}>
            {/* Unit Kompetensi */}
            <div style={sectionStyle}>
              <div style={sectionTitleStyle}>Unit Kompetensi</div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Kode Unit</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}>J.555HHR000.001.2</span>
              </div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Judul Unit</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}>Memproses Reservasi</span>
              </div>
            </div>

            {/* Table */}
            <div style={tableContainerStyle}>
              <div style={tableRowStyle}>
                <div style={tableHeaderStyle}>Daftar Pertanyaan Wawancara</div>
                <div style={tableHeaderStyle}>Rekomendasi</div>
                <div style={tableHeaderStyle}>Rekomendasi</div>
              </div>
              
              <div style={tableRowStyle}>
                <div style={tableCellStyle}>1. Sesuai dengan bukti :</div>
                <div style={checkboxCellStyle}>
                  <input 
                    type="checkbox" 
                    style={checkboxStyle}
                    checked={checkboxes.sesuai1}
                    onChange={() => handleCheckboxChange('sesuai1')}
                  />
                </div>
                <div style={checkboxCellStyle}>
                  <input 
                    type="checkbox" 
                    style={checkboxStyle}
                    checked={checkboxes.rekomendasi1}
                    onChange={() => handleCheckboxChange('rekomendasi1')}
                  />
                </div>
              </div>
              
              <div style={tableRowStyle}>
                <div style={tableCellStyle}>2. Sesuai dengan bukti :</div>
                <div style={checkboxCellStyle}>
                  <input 
                    type="checkbox" 
                    style={checkboxStyle}
                    checked={checkboxes.sesuai2}
                    onChange={() => handleCheckboxChange('sesuai2')}
                  />
                </div>
                <div style={checkboxCellStyle}>
                  <input 
                    type="checkbox" 
                    style={checkboxStyle}
                    checked={checkboxes.rekomendasi2}
                    onChange={() => handleCheckboxChange('rekomendasi2')}
                  />
                </div>
              </div>
              
              <div style={tableRowStyle}>
                <div style={tableCellStyle}>3. Sesuai dengan bukti :</div>
                <div style={checkboxCellStyle}>
                  <input 
                    type="checkbox" 
                    style={checkboxStyle}
                    checked={checkboxes.sesuai3}
                    onChange={() => handleCheckboxChange('sesuai3')}
                  />
                </div>
                <div style={checkboxCellStyle}>
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
        <div style={bottomSectionStyle}>
          <div style={signatureBoxStyle}>
            <div style={signatureNameStyle}>Nama Asesi</div>
            <div style={signatureValueStyle}>YUSMAYATI</div>
            <div style={signatureLabelStyle}>Persetujuan Asesi</div>
          </div>
          
          <div style={signatureBoxStyle}>
            <div style={signatureNameStyle}>Nama Asesor</div>
            <div style={signatureValueStyle}>ROSMANI</div>
            <div style={signatureLabelStyle}>Persetujuan Asesor</div>
          </div>
        </div>

        {/* Buttons */}
        <div style={buttonContainerStyle}>
          <button style={approveButtonStyle}>Setujui</button>
          <button style={submitButtonStyle} onClick={handleSubmit}>Kirim Jawaban</button>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div style={popupOverlayStyle} onClick={handleClosePopup}>
          <div style={popupContainerStyle} onClick={(e) => e.stopPropagation()}>
            <div style={iconContainerStyle}>
              <div style={successIconStyle}>
                {/* List lines (3 horizontal lines) */}
                <div style={listLinesStyle}>
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
                <div style={checkCircleStyle}>
                  <div style={checkMarkStyle}>✓</div>
                </div>
              </div>
            </div>
            
            <div style={popupTitleStyle}>Jawaban Anda</div>
            <div style={popupSubtitleStyle}>Berhasil Direkam!</div>
            
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