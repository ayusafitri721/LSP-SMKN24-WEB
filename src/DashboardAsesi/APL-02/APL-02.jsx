// src/DashboardAsesi/APL-02/APL-02.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';

const pageContainerStyle = {
  backgroundColor: '#f5f5f5',
  fontFamily: 'Arial, sans-serif',
  padding: '15px',
};

const navContainerStyle = {
  backgroundColor: 'white',
  padding: '5px 15px',
  borderRadius: '15px 15px 40px 15px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  margin: '15px 15px 0 15px',
  overflowX: 'auto',
  maxWidth: '50%',
  whiteSpace: 'nowrap',
};

const imageBannerStyle = {
  backgroundImage:
    "linear-gradient(rgba(255,140,0,0.7), rgba(255,140,0,0.7)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '160px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '15px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
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
  borderRadius: '15px',
  padding: '25px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  marginTop: '20px',
};

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  marginBottom: '20px',
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
};

const titleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  margin: 0,
  color: '#333',
};

const subtitleStyle = {
  fontSize: '12px',
  color: '#666',
  margin: '2px 0 0 0',
};

const sectionStyle = {
  marginBottom: '25px',
};

const sectionHeaderStyle = {
  backgroundColor: '#ffeaa7',
  padding: '12px 15px',
  borderRadius: '8px',
  marginBottom: '15px',
};

const sectionTitleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  margin: 0,
  color: '#333',
};

const listStyle = {
  margin: '10px 0',
  paddingLeft: '20px',
};

const listItemStyle = {
  marginBottom: '5px',
  fontSize: '13px',
  lineHeight: '1.4',
};

const competencyHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '15px',
};

const competencyTitleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#333',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
  fontSize: '12px',
  cursor: 'pointer',
};

const formSectionStyle = {
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '20px',
};

const formTitleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '15px',
  color: '#333',
};

const formDescStyle = {
  fontSize: '12px',
  color: '#666',
  marginBottom: '20px',
  lineHeight: '1.5',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '12px',
  marginBottom: '20px',
};

const thStyle = {
  backgroundColor: '#f8f9fa',
  padding: '10px',
  border: '1px solid #dee2e6',
  textAlign: 'left',
  fontWeight: 'bold',
  fontSize: '11px',
};

const tdStyle = {
  padding: '10px',
  border: '1px solid #dee2e6',
  verticalAlign: 'top',
};

const checkboxContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  fontSize: '11px',
};

const assessorSectionStyle = {
  backgroundColor: '#f8f9fa',
  padding: '15px',
  borderRadius: '8px',
  marginBottom: '15px',
};

const assessorTitleStyle = {
  fontSize: '13px',
  fontWeight: 'bold',
  marginBottom: '10px',
  textAlign: 'center',
};

const assessorRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  marginBottom: '10px',
};

const inputStyle = {
  flex: 1,
  padding: '8px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '12px',
};

const buttonStyle = {
  padding: '8px 15px',
  backgroundColor: '#6c757d',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  fontSize: '11px',
  cursor: 'pointer',
};

const submitButtonStyle = {
  padding: '10px 30px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  fontSize: '12px',
  cursor: 'pointer',
  float: 'right',
  marginTop: '20px',
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

const APL02 = () => {
  const [assessorData, setAssessorData] = useState([
    { name: 'Ahmad Fahmi Rizwan Pangestu', date: '14/02/2023', status: 'Approve' },
    { name: 'Prof. Arya Mauludi Suripto M.Kom.', date: '14/02/2023', status: 'Menunggu' }
  ]);
  
  const [showPopup, setShowPopup] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Block navigation jika form belum di-submit
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

    window.history.pushState = function(...args) {
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/apl-02')) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalPushState.apply(window.history, args);
    };

    window.history.replaceState = function(...args) {
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/apl-02')) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    // Auto redirect ke AK-01 setelah close popup
    setTimeout(() => {
      navigate('/dashboard-asesi/ak-01');
    }, 300);
  };

  return (
    <div style={pageContainerStyle}>
      {/* Scrollbar styling for WebKit browsers */}
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
          Silakan isi dan kirim formulir APL-02 terlebih dahulu!
        </div>
      )}
      
      <div style={navContainerStyle} className="nav-scrollbar">
        <NavAsesi activeTab="FR.APL.02" />
      </div>

      <div style={imageBannerStyle}>
        <h1 style={logoTextStyle}>MyLSP</h1>
      </div>

      <div style={contentCardStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <div style={logoStyle}>LSP</div>
          <div>
            <h1 style={titleStyle}>FR.APL.02 ASESMEN MANDIRI</h1>
            <p style={subtitleStyle}>Skema Sertifikasi<br />JUNIOR DEVELOPER APLIKASI (LEVEL III)</p>
          </div>
        </div>

        {/* Petunjuk Section */}
        <div style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            <h3 style={sectionTitleStyle}>PETUNJUK ASESMEN MANDIRI</h3>
          </div>
          <p style={{ fontSize: '12px', marginBottom: '10px', fontWeight: 'bold' }}>INSTRUKSI:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Baca setiap pernyataan di kolom sebelah kiri</li>
            <li style={listItemStyle}>Beri tanda centang pada kolom jika Anda yakin dapat melakukan tugas yang dijelaskan</li>
            <li style={listItemStyle}>Isi kolom di sebelah kanan dengan mendaftar bukti yang Anda miliki untuk menunjukkan bahwa Anda melakukan tugas – tugas ini</li>
          </ul>
        </div>

        {/* Unit Kompetensi */}
        <div style={sectionStyle}>
          <div style={competencyHeaderStyle}>
            <h3 style={competencyTitleStyle}>Unit Kompetensi 1</h3>
            <a href="#" style={linkStyle}>Lihat Unit</a>
            <a href="#" style={linkStyle}>Kode Unit</a>
          </div>
        </div>

        {/* Form Section */}
        <div style={formSectionStyle}>
          <h4 style={formTitleStyle}>Dapatkah Saya?</h4>
          <div style={formDescStyle}>
            <strong>Elemen 1: Mengidentifikasi konsep data dan struktur data</strong><br />
            Kriteria untuk kerja:
          </div>
          
          <div style={{ fontSize: '11px', marginBottom: '15px' }}>
            1.1 Mengidentifikasi konsep data dan struktur data sesuai dengan konteks<br />
            1.2 Membandingkan alternatif struktur data besihiran dan keunggulannya untuk konteks permasalahan yang dihadapkan
          </div>

          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={{...thStyle, width: '50px'}}>K</th>
                <th style={{...thStyle, width: '50px'}}>BK</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>
                  <input type="checkbox" />
                </td>
                <td style={tdStyle}>
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Bukti yang relevan */}
          <div style={{ marginTop: '15px' }}>
            <div style={checkboxContainerStyle}>
              <label style={{ fontWeight: 'bold', fontSize: '12px', marginBottom: '10px' }}>
                Bukti yang relevan:
              </label>
              <label><input type="checkbox" /> Bukti L</label>
              <label><input type="checkbox" /> Bukti P</label>
              <label><input type="checkbox" /> Bukti T</label>
              <label><input type="checkbox" /> Bukti WE</label>
              <label><input type="checkbox" /> Bukti V</label>
              <label><input type="checkbox" /> Bukti I</label>
            </div>
          </div>
        </div>

        {/* Assessor Sections */}
        <div style={assessorSectionStyle}>
          <div style={assessorTitleStyle}>Ditinjau oleh Asesor:</div>
          <div style={assessorRowStyle}>
            <span style={{ fontSize: '12px', minWidth: '80px' }}>Nama Asesor</span>
            <input 
              type="text" 
              style={inputStyle} 
              value={assessorData[0].name}
              readOnly
            />
            <span style={{ fontSize: '12px', minWidth: '60px' }}>Tanggal</span>
            <input 
              type="text" 
              style={{...inputStyle, maxWidth: '100px'}} 
              value={assessorData[0].date}
              readOnly
            />
            <span style={{ fontSize: '12px', minWidth: '100px' }}>Rekomendasi Asesor</span>
            <button 
              style={{...buttonStyle, backgroundColor: assessorData[0].status === 'Approve' ? '#28a745' : '#6c757d'}}
            >
              {assessorData[0].status}
            </button>
          </div>
        </div>

        <div style={assessorSectionStyle}>
          <div style={assessorTitleStyle}>Ditinjau oleh Asesor:</div>
          <div style={assessorRowStyle}>
            <span style={{ fontSize: '12px', minWidth: '80px' }}>Nama Asesor</span>
            <input 
              type="text" 
              style={inputStyle} 
              value={assessorData[1].name}
              readOnly
            />
            <span style={{ fontSize: '12px', minWidth: '60px' }}>Tanggal</span>
            <input 
              type="text" 
              style={{...inputStyle, maxWidth: '100px'}} 
              value={assessorData[1].date}
              readOnly
            />
            <span style={{ fontSize: '12px', minWidth: '100px' }}>Rekomendasi Asesor</span>
            <button 
              style={{...buttonStyle, backgroundColor: assessorData[1].status === 'Menunggu' ? '#ffc107' : '#6c757d'}}
            >
              {assessorData[1].status}
            </button>
          </div>
        </div>

        <button style={submitButtonStyle} onClick={handleSubmit}>Kirim</button>
        <div style={{ clear: 'both' }}></div>
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

export default APL02;