// src/DashboardAsesi/APL-02/APL-02.jsx

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
  padding: '25px',
  boxShadow: 'none',
  marginTop: '0',
  border: 'none',
  maxWidth: '100%',
};

// Popup styles
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
  padding: '30px 50px',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  minWidth: '550px',
  maxWidth: '600px',
  position: 'relative',
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

const popupTitleStyle = {
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

  // Handle submit - langsung show popup tanpa validasi field
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setShowPopup(true);
  };

  // Handle close popup - redirect ke AK-01
  const handleClosePopup = () => {
    setShowPopup(false);
    // Auto redirect ke AK-01 setelah close popup
    setTimeout(() => {
      navigate('/dashboard-asesi/ak-01');
    }, 300);
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
          Silakan isi dan kirim formulir APL-02 terlebih dahulu!
        </div>
      )}
      
      {/* Navigation dan Header dengan background image */}
      <div style={headerSectionStyle}>
        <div style={navContainerStyle} className="nav-scrollbar">
          <NavAsesi activeTab="FR.APL.02" />
        </div>

        <div style={logoContainerStyle}>
          <h1 style={logoTextStyle}>MyLSP</h1>
        </div>
      </div>

      <div style={contentCardStyle}>
        {/* Header dengan logo - diganti dengan gambar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '20px',
          paddingBottom: '15px',
          borderBottom: '2px solid #FF8C00'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <img 
              src="/src/img/LOGO_LSP_SMKN_24.jpg" 
              alt="LSP SMKN 24 Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <h1 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            margin: 0,
            color: '#333',
            textAlign: 'center',
            flex: 1
          }}>
            FR.APL.02 ASESMEN MANDIRI
          </h1>
        </div>

        {/* Skema Sertifikasi Section - table format */}
        <div style={{
          backgroundColor: '#f8f9fa',
          border: '1px solid #ddd',
          borderRadius: '8px',
          marginBottom: '20px',
          fontSize: '14px',
          fontWeight: 'bold',
          display: 'flex',
          overflow: 'hidden'
        }}>
          <div style={{ 
            minWidth: '140px',
            padding: '15px 10px',
            borderRight: '1px solid #ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            Skema Sertifikasi
          </div>
          <div style={{
            flex: 1,
            fontSize: '12px',
            fontWeight: 'normal'
          }}>
            <div style={{ 
              display: 'flex',
              borderBottom: '1px solid #ddd'
            }}>
              <div style={{
                padding: '8px 10px',
                borderRight: '1px solid #ddd',
                minWidth: '80px'
              }}>
                Judul Unit
              </div>
              <div style={{
                padding: '8px 5px',
                borderRight: '1px solid #ddd',
                minWidth: '20px',
                textAlign: 'center'
              }}>
                :
              </div>
              <div style={{
                flex: 1,
                padding: '3px'
              }}>
                <input 
                  type="text" 
                  style={{
                    width: '100%',
                    border: 'none',
                    padding: '5px',
                    fontSize: '12px',
                    outline: 'none',
                    backgroundColor: 'transparent'
                  }}
                />
              </div>
            </div>
            <div style={{ 
              display: 'flex'
            }}>
              <div style={{
                padding: '8px 10px',
                borderRight: '1px solid #ddd',
                minWidth: '80px'
              }}>
                Kode Unit
              </div>
              <div style={{
                padding: '8px 5px',
                borderRight: '1px solid #ddd',
                minWidth: '20px',
                textAlign: 'center'
              }}>
                :
              </div>
              <div style={{
                flex: 1,
                padding: '3px'
              }}>
                <input 
                  type="text" 
                  style={{
                    width: '100%',
                    border: 'none',
                    padding: '5px',
                    fontSize: '12px',
                    outline: 'none',
                    backgroundColor: 'transparent'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* PADUAN ASESMEN MANDIRI - updated design with gap between sections */}
        <div style={{
          marginBottom: '20px',
          display: 'flex',
          gap: '3px'
        }}>
          {/* Main orange section */}
          <div style={{
            backgroundColor: 'rgba(255, 131, 3, 0.34)',
            padding: '15px',
            flex: 1,
            borderRadius: '8px',
            border: '1px solid #ddd'
          }}>
            <div style={{
              fontWeight: 'bold',
              fontSize: '14px',
              marginBottom: '10px'
            }}>
              PADUAN ASESMEN MANDIRI
            </div>
            
            <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>
              Instruksi:
            </div>
            <ul style={{ 
              margin: '0',
              paddingLeft: '20px',
              fontSize: '12px',
              lineHeight: '1.4'
            }}>
              <li style={{ marginBottom: '4px' }}>
                Baca setiap pertanyaan di kolom sebelah kiri.
              </li>
              <li style={{ marginBottom: '4px' }}>
                Beri tanda centang pada kotak jika Anda yakin dapat melakukan tugas yang dijelaskan.
              </li>
              <li>
                Isi kolom di sebelah kanan dengan mendaftar bukti yang Anda miliki untuk menunjukkan bahwa Anda melakukan tugas-tugas ini.
              </li>
            </ul>
          </div>

          {/* Separate check all section */}
          <div style={{
            backgroundColor: '#f8f9fa',
            border: '1px solid #ddd',
            padding: '15px 20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            minWidth: '120px',
            borderRadius: '8px'
          }}>
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '4px 8px',
              backgroundColor: 'transparent',
              border: '1px solid #999',
              borderRadius: '3px',
              fontSize: '11px',
              cursor: 'pointer',
              color: '#ff8c00',
              fontWeight: 'normal'
            }}>
              Check All
            </button>
            <div style={{
              display: 'flex',
              gap: '8px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              <div style={{
                border: '1px solid #999',
                padding: '4px 8px',
                backgroundColor: 'white',
                minWidth: '25px',
                textAlign: 'center',
                borderRadius: '2px'
              }}>
                K
              </div>
              <div style={{
                border: '1px solid #999',
                padding: '4px 8px',
                backgroundColor: 'white',
                minWidth: '25px',
                textAlign: 'center',
                borderRadius: '2px'
              }}>
                BK
              </div>
            </div>
          </div>
        </div>

        {/* Unit Kompetensi 1 */}
        <div style={{
          border: '1px solid #ddd',
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden',
          marginBottom: '0'
        }}>
          <div style={{
            display: 'flex'
          }}>
            {/* Left side - Unit Kompetensi 1 */}
            <div style={{
              backgroundColor: '#e9ecef',
              padding: '15px 20px',
              fontSize: '14px',
              fontWeight: 'bold',
              minWidth: '180px',
              borderRight: '1px solid #ddd',
              display: 'flex',
              alignItems: 'center'
            }}>
              Unit Kompetensi 1
            </div>
            
            {/* Right side - Judul Unit and Kode Unit */}
            <div style={{ flex: 1 }}>
              <div style={{
                display: 'flex',
                borderBottom: '1px solid #ddd'
              }}>
                <div style={{
                  padding: '8px 15px',
                  fontSize: '12px',
                  minWidth: '80px',
                  borderRight: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  Judul Unit
                </div>
                <div style={{
                  padding: '8px 10px',
                  fontSize: '12px',
                  minWidth: '20px',
                  borderRight: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  :
                </div>
                <div style={{
                  flex: 1,
                  padding: '5px'
                }}>
                  <input 
                    type="text"
                    style={{
                      width: '100%',
                      border: 'none',
                      padding: '3px 8px',
                      fontSize: '12px',
                      outline: 'none',
                      backgroundColor: 'transparent'
                    }}
                  />
                </div>
              </div>
              
              <div style={{
                display: 'flex'
              }}>
                <div style={{
                  padding: '8px 15px',
                  fontSize: '12px',
                  minWidth: '80px',
                  borderRight: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  Kode Unit
                </div>
                <div style={{
                  padding: '8px 10px',
                  fontSize: '12px',
                  minWidth: '20px',
                  borderRight: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  :
                </div>
                <div style={{
                  flex: 1,
                  padding: '5px'
                }}>
                  <input 
                    type="text"
                    style={{
                      width: '100%',
                      border: 'none',
                      padding: '3px 8px',
                      fontSize: '12px',
                      outline: 'none',
                      backgroundColor: 'transparent'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dapatkah Saya Section */}
        <div style={{
          border: '1px solid #ddd',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: 'bold',
            borderBottom: '1px solid #ddd'
          }}>
            Dapatkah Saya?
          </div>

          <div style={{ 
            padding: '20px',
            display: 'flex',
            gap: '25px'
          }}>
            {/* Left side - Form content */}
            <div style={{ flex: '1' }}>
              <div style={{
                fontWeight: 'bold',
                fontSize: '13px',
                marginBottom: '8px'
              }}>
                Elemen 1: Mengidentifikasi konsep data dan struktur data
              </div>
              <div style={{
                fontSize: '12px',
                color: '#333',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
                Kriteria Untuk Kerja:
              </div>
              <div style={{
                fontSize: '12px',
                lineHeight: '1.5',
                marginBottom: '20px',
                color: '#333'
              }}>
                1.1 Mengidentifikasi konsep data dan struktur data sesuai dengan konteks<br/>
                1.2 Membandingkan alternatif struktur data berdasarkan efisiensi dan keunggulannya untuk konteks permasalahan yang dihadapkan
              </div>

              <div style={{ 
                display: 'flex', 
                gap: '30px',
                alignItems: 'center'
              }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: 'bold'
                }}>
                  <input 
                    type="checkbox" 
                    style={{
                      width: '16px',
                      height: '16px'
                    }}
                  />
                  K
                </label>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: 'bold'
                }}>
                  <input 
                    type="checkbox"
                    style={{
                      width: '16px',
                      height: '16px'
                    }}
                  />
                  BK
                </label>
              </div>
            </div>

            {/* Right side - Bukti yang relevan */}
            <div style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              backgroundColor: '#f8f9fa',
              minWidth: '400px',
              maxWidth: '400px'
            }}>
              <div style={{
                fontWeight: 'bold',
                fontSize: '13px',
                marginBottom: '15px'
              }}>
                Bukti yang relevan
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                fontSize: '12px'
              }}>
                {['bukti I', 'bukti I', 'bukti I', 'bukti I', 'bukti I', 'bukti I'].map((bukti, index) => (
                  <label key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    cursor: 'pointer'
                  }}>
                    <input 
                      type="checkbox" 
                      style={{ 
                        width: '14px', 
                        height: '14px' 
                      }} 
                    />
                    <span>☐ {bukti}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Assessor Sections */}
        <div style={{ marginTop: '30px' }}>
          {/* Assessor 1 */}
          <div style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '14px',
            marginBottom: '15px',
            borderTop: '2px solid #FF8C00',
            borderBottom: '2px solid #FF8C00',
            paddingTop: '10px',
            paddingBottom: '10px'
          }}>
            Ditinjau oleh Asesor:
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '30px',
            fontSize: '12px'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              minWidth: '100px'
            }}>
              <span style={{ fontSize: '11px', color: '#666' }}>Nama Asesi</span>
              <input 
                type="text" 
                value="Afghal Ezhar Rahma Pangestu"
                readOnly
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  fontSize: '12px',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  width: '250px'
                }}
              />
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              minWidth: '80px'
            }}>
              <span style={{ fontSize: '11px', color: '#666' }}>Tanggal</span>
              <input 
                type="text" 
                value="14/02/2027"
                readOnly
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  fontSize: '12px',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  width: '100px'
                }}
              />
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              alignItems: 'flex-end',
              flex: 1,
              paddingRight: '50px'
            }}>
              <span style={{ fontSize: '11px', color: '#666' }}>Persetujuan Asesi</span>
              <button style={{
                padding: '8px 20px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                Approve
              </button>
            </div>
          </div>

          {/* Assessor 2 */}
          <div style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '14px',
            marginBottom: '15px',
            borderTop: '2px solid #FF8C00',
            borderBottom: '2px solid #FF8C00',
            paddingTop: '10px',
            paddingBottom: '10px'
          }}>
            Ditinjau oleh Asesor:
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '30px',
            fontSize: '12px'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              minWidth: '100px'
            }}>
              <span style={{ fontSize: '11px', color: '#666' }}>Nama Asesor</span>
              <input 
                type="text" 
                value="Prof. Arul Maulido Singo M.Kom."
                readOnly
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  fontSize: '12px',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  width: '250px'
                }}
              />
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              minWidth: '80px'
            }}>
              <span style={{ fontSize: '11px', color: '#666' }}>Tanggal</span>
              <input 
                type="text" 
                value="14/02/2027"
                readOnly
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  fontSize: '12px',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  width: '100px'
                }}
              />
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              alignItems: 'flex-end',
              flex: 1,
              paddingRight: '50px'
            }}>
              <span style={{ fontSize: '11px', color: '#666' }}>Persetujuan Asesor</span>
              <button style={{
                padding: '8px 20px',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                Menunggu
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div style={{ 
          textAlign: 'right',
          marginTop: '20px'
        }}>
          <button 
            onClick={handleSubmit}
            style={{
              padding: '10px 30px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              fontSize: '14px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Kirim
          </button>
        </div>
      </div>

      {/* Success Popup */}
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
  );
};

export default APL02;
