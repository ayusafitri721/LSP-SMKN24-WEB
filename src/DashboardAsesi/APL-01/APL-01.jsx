// src/DashboardAsesi/APL-01/APL-01.jsx

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
    "linear-gradient(rgba(255,165,0,0.8), rgba(255,140,0,0.8)), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '180px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '15px 15px 0 0',
  boxShadow: 'none',
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
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  marginTop: '0',
};

const titleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '25px',
  color: '#333',
  fontFamily: 'Arial, sans-serif',
};

const formContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px',
  alignItems: 'start',
};

const leftColumnStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const rightColumnStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  position: 'relative',
  marginTop: '15px',
};

const labelStyle = {
  fontSize: '14px',
  color: '#333',
  fontWeight: 'normal',
  position: 'absolute',
  top: '-10px',
  left: '20px',
  backgroundColor: 'white',
  padding: '0 8px',
  zIndex: 1,
};

const inputStyle = {
  padding: '12px 15px',
  border: '2px solid #007bff',
  borderRadius: '25px',
  fontSize: '14px',
  outline: 'none',
  backgroundColor: 'white',
  fontFamily: 'Arial, sans-serif',
  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 6px, #ccc 6px, #ccc 8px)',
  backgroundPosition: '15px calc(100% - 8px)',
  backgroundSize: '100% 2px',
  backgroundRepeat: 'repeat-x',
};

const textareaStyle = {
  padding: '12px 15px',
  border: '2px solid #007bff',
  borderRadius: '15px',
  fontSize: '14px',
  outline: 'none',
  backgroundColor: 'white',
  fontFamily: 'Arial, sans-serif',
  resize: 'vertical',
  minHeight: '80px',
  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 6px, #ccc 6px, #ccc 8px)',
  backgroundPosition: '15px calc(100% - 8px)',
  backgroundSize: '100% 2px',
  backgroundRepeat: 'repeat-x',
};

const radioGroupStyle = {
  display: 'flex',
  gap: '30px',
  marginTop: '10px',
  alignItems: 'center',
};

const radioLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '14px',
  color: '#666',
  cursor: 'pointer',
};

const radioInputStyle = {
  width: '20px',
  height: '20px',
  cursor: 'pointer',
};

const fileUploadStyle = {
  position: 'relative',
  display: 'inline-block',
  width: '100%',
};

const fileInputStyle = {
  position: 'absolute',
  opacity: 0,
  width: '100%',
  height: '100%',
  cursor: 'pointer',
};

const fileButtonStyle = {
  padding: '12px 15px',
  border: '2px solid #007bff',
  borderRadius: '25px',
  backgroundColor: 'white',
  fontSize: '14px',
  color: '#666',
  cursor: 'pointer',
  width: '100%',
  textAlign: 'left',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 6px, #ccc 6px, #ccc 8px)',
  backgroundPosition: '15px calc(100% - 8px)',
  backgroundSize: '100% 2px',
  backgroundRepeat: 'repeat-x',
};

const uploadIconStyle = {
  color: '#999',
  fontSize: '18px',
  fontWeight: 'bold',
};

const checkboxGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginTop: '10px',
};

const checkboxLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '14px',
  color: '#666',
  cursor: 'pointer',
  lineHeight: '1.4',
};

const radioAssessmentInputStyle = {
  width: '18px',
  height: '18px',
  cursor: 'pointer',
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
  alignSelf: 'flex-end',
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

const APL01 = () => {
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
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/apl-01')) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalPushState.apply(window.history, args);
    };

    window.history.replaceState = function(...args) {
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/apl-01')) {
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
    // Auto redirect ke APL-02 setelah close popup
    setTimeout(() => {
      navigate('/dashboard-asesi/apl-02');
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
          Silakan isi dan kirim formulir APL-01 terlebih dahulu!
        </div>
      )}

      <div style={navContainerStyle} className="nav-scrollbar">
        <NavAsesi activeTab="FR.APL.01" />
      </div>

      <div style={imageBannerStyle}>
        <h1 style={logoTextStyle}>
          MyLSP
        </h1>
      </div>

      <div style={contentCardStyle}>
        <h2 style={titleStyle}>Lengkapi identitas anda</h2>
        
        <form style={formContainerStyle} onSubmit={handleSubmit}>
          <div style={leftColumnStyle}>
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Nama Lengkap</label>
              <input type="text" style={inputStyle} />
            </div>
            
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Tanggal lahir</label>
              <input type="date" style={inputStyle} />
            </div>
            
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Kelas</label>
              <input type="text" style={inputStyle} />
            </div>
            
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Jurusan</label>
              <input type="text" style={inputStyle} />
            </div>
            
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Alamat</label>
              <textarea style={textareaStyle}></textarea>
            </div>
            
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Jenis kelamin</label>
              <div style={radioGroupStyle}>
                <label style={radioLabelStyle}>
                  <input type="radio" name="gender" value="laki-laki" style={radioInputStyle} />
                  Laki-laki
                </label>
                <label style={radioLabelStyle}>
                  <input type="radio" name="gender" value="perempuan" style={radioInputStyle} />
                  Perempuan
                </label>
              </div>
            </div>
            
            <div style={inputGroupStyle}>
              <label style={labelStyle}>KTP/Kartu Pelajar</label>
              <div style={fileUploadStyle}>
                <input type="file" style={fileInputStyle} />
                <div style={fileButtonStyle}>
                  <span></span>
                  <span style={uploadIconStyle}>↑</span>
                </div>
              </div>
            </div>
            
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Foto 3x4</label>
              <div style={fileUploadStyle}>
                <input type="file" style={fileInputStyle} />
                <div style={fileButtonStyle}>
                  <span></span>
                  <span style={uploadIconStyle}>↑</span>
                </div>
              </div>
            </div>
            
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Sertifikat</label>
              <div style={fileUploadStyle}>
                <input type="file" style={fileInputStyle} />
                <div style={fileButtonStyle}>
                  <span></span>
                  <span style={uploadIconStyle}>↑</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style={rightColumnStyle}>
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Jenis Skema</label>
              <input type="text" style={inputStyle} />
            </div>
            
            <div style={inputGroupStyle}>
              <label style={labelStyle}>No Skema</label>
              <input type="text" style={inputStyle} />
            </div>
            
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Tujuan Assessment</label>
              <div style={checkboxGroupStyle}>
                <label style={checkboxLabelStyle}>
                  <input type="radio" name="tujuan_assessment" value="sertifikasi" style={radioAssessmentInputStyle} />
                  <span>Sertifikasi</span>
                </label>
                <label style={checkboxLabelStyle}>
                  <input type="radio" name="tujuan_assessment" value="pkt" style={radioAssessmentInputStyle} />
                  <span>Pengakuan Kompetensi Terkini (PKT)</span>
                </label>
                <label style={checkboxLabelStyle}>
                  <input type="radio" name="tujuan_assessment" value="rpl" style={radioAssessmentInputStyle} />
                  <span>Rekognisi Pembelajaran Lampau (RPL)</span>
                </label>
                <label style={checkboxLabelStyle}>
                  <input type="radio" name="tujuan_assessment" value="lainnya" style={radioAssessmentInputStyle} />
                  <span>Lainnya</span>
                </label>
              </div>
            </div>
            
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Asesor</label>
              <input type="text" style={inputStyle} />
            </div>
            
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Surat keterangan TH</label>
              <div style={fileUploadStyle}>
                <input type="file" style={fileInputStyle} />
                <div style={fileButtonStyle}>
                  <span></span>
                  <span style={uploadIconStyle}>↑</span>
                </div>
              </div>
            </div>
            
            <div style={inputGroupStyle}>
              <label style={labelStyle}>Surat keterangan UNIK</label>
              <div style={fileUploadStyle}>
                <input type="file" style={fileInputStyle} />
                <div style={fileButtonStyle}>
                  <span></span>
                  <span style={uploadIconStyle}>↑</span>
                </div>
              </div>
            </div>
            
            <button type="submit" style={submitButtonStyle}>
              Kirim
            </button>
          </div>
        </form>
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

export default APL01;