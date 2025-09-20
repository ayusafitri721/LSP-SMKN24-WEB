import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';

const IA02 = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    skemaSertifikasi: '',
    judulUnit: '',
    kodeUnit: '',
    tuk: '',
    namaAssesor: '',
    namaAsesi: '',
    tanggalAsesmen: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

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
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/ia-02')) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalPushState.apply(window.history, args);
    };

    window.history.replaceState = function (...args) {
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/ia-02')) {
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
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setIsFormSubmitted(true);
    setShowSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOkay = () => {
    setShowSuccess(false);
    setTimeout(() => {
      navigate('/dashboard-asesi/ia-03');
    }, 300);
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = '#60a5fa';
    e.target.style.boxShadow = '0 0 0 4px rgba(59,130,246,0.06)';
    e.target.style.backgroundColor = '#ffffff';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = '#e6edf3';
    e.target.style.boxShadow = 'none';
    e.target.style.backgroundColor = '#fbfbfb';
  };

  return (
    <div style={{
      backgroundColor: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '1rem',
      minHeight: '100vh',
      boxSizing: 'border-box',
    }}>
      <style>{`
        @keyframes modalPop {
          0% { transform: translateY(8px) scale(0.98); opacity: 0; }
          60% { transform: translateY(-6px) scale(1.02); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
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
        .table-row:hover { 
          background-color: #fbfbfd; 
        }
        .submit-btn:hover { 
          transform: translateY(-3px); 
        }
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @media (max-width: 768px) {
          .nav-container { 
            max-width: 100%; 
            margin: 0; 
            padding: 0.5rem;
          }
          .logo-text { 
            font-size: 2rem; 
          }
          .content-card { 
            padding: 1rem; 
          }
          .form-table td { 
            display: block; 
            width: 100%; 
            box-sizing: border-box; 
            border: none; 
            padding: 0.5rem; 
          }
          .form-table td:first-child { 
            background-color: #f8fafc; 
            font-weight: bold; 
          }
          .form-table td:nth-child(2) { 
            display: none; 
          }
          .scenario-table th, .scenario-table td { 
            font-size: 0.8rem; 
            padding: 0.5rem; 
          }
          .bottom-section { 
            flex-direction: column; 
            align-items: flex-start; 
          }
          .popup-container { 
            min-width: 80vw; 
            padding: 1.5rem; 
          }
          .warning-notification { 
            top: 10px; 
            right: 10px; 
            padding: 0.8rem; 
            font-size: 0.9rem; 
          }
        }
      `}</style>

      {showWarning && (
        <div style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          backgroundColor: '#ff6b6b',
          color: 'white',
          padding: '0.8rem 1rem',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          zIndex: 1001,
          fontSize: '0.9rem',
          fontWeight: 'bold',
          animation: 'slideIn 0.3s ease-out',
        }}>
          Silakan isi dan kirim formulir IA-02 terlebih dahulu!
        </div>
      )}

      <div style={{
        backgroundImage: "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0 0 2rem 2rem',
        overflow: 'hidden',
        marginBottom: '0',
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem 0.5rem 2rem 0.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          margin: '0 1rem 0 0',
          overflowX: 'auto',
          maxWidth: '100%',
          whiteSpace: 'nowrap',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          zIndex: 2,
        }} className="nav-container nav-scrollbar">
          <NavAsesi activeTab="FR.IA.02.TPD" />
        </div>

        <div style={{
          height: '10rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '1rem',
        }}>
          <h1 style={{
            color: 'white',
            fontSize: '3rem',
            fontWeight: 'bold',
            margin: 0,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            letterSpacing: '2px',
          }} className="logo-text">MyLSP</h1>
        </div>
      </div>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '0 0 0.8rem 0.8rem',
        padding: '1.5rem',
        marginTop: '0',
        border: 'none',
      }} className="content-card">
        <div style={{
          marginBottom: '1rem',
          paddingBottom: '0.8rem',
          borderBottom: '2px solid #f1f5f9',
          textAlign: 'center',
        }}>
          <div style={{ position: 'relative' }}>
            <img
              src="/src/img/LOGO_LSP_SMKN_24.jpg"
              alt="Logo LSP"
              style={{
                position: 'absolute',
                top: '-0.5rem',
                left: '0',
                width: '4rem',
                height: '4rem',
                objectFit: 'contain',
                zIndex: 1,
              }}
            />
            <h2 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold', color: '#0f172a', textAlign: 'center' }}>
              FR.IA.02.TPD
            </h2>
            <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.8rem', color: '#475569', fontWeight: '600', textAlign: 'center' }}>
              TUGAS PRAKTIK DEMONSTRASI
            </p>
          </div>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <div style={{
            overflowX: 'auto',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.03)',
            border: '1px solid #e6edf3',
            backgroundColor: 'white',
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              backgroundColor: 'white',
            }} className="form-table">
              <tbody>
                {[
                  { label: 'Skema Sertifikasi<br />(KKN/OKUPASI/KLASTER)', key: 'skemaSertifikasi', placeholder: 'Masukkan skema sertifikasi' },
                  { label: 'Judul Unit', key: 'judulUnit', placeholder: 'Masukkan judul unit' },
                  { label: 'Kode Unit', key: 'kodeUnit', placeholder: 'Masukkan kode unit' },
                  { label: 'TUK', key: 'tuk', placeholder: 'Masukkan TUK' },
                  { label: 'Nama Asesor', key: 'namaAssesor', placeholder: 'Masukkan nama asesor' },
                  { label: 'Nama Asesi', key: 'namaAsesi', placeholder: 'Masukkan nama asesi' },
                  { label: 'Tanggal', key: 'tanggalAsesmen', type: 'date' },
                ].map((field, index) => (
                  <tr key={field.key} className="table-row">
                    <td style={{
                      fontWeight: 'bold',
                      backgroundColor: '#f8fafc',
                      width: '40%',
                      borderRight: '1px solid #e6edf3',
                      padding: '0.5rem 1rem',
                      fontSize: '0.9rem',
                      color: '#0f172a',
                      borderBottom: index === 6 ? 'none' : '1px solid #f3f6f9',
                    }} dangerouslySetInnerHTML={{ __html: field.label }} />
                    <td style={{
                      padding: '0.5rem 1rem',
                      fontSize: '0.9rem',
                      color: '#475569',
                      borderBottom: index === 6 ? 'none' : '1px solid #f3f6f9',
                    }}>:</td>
                    <td style={{
                      padding: '0.5rem',
                      borderBottom: index === 6 ? 'none' : '1px solid #f3f6f9',
                    }}>
                      <input
                        type={field.type || 'text'}
                        style={{
                          width: '100%',
                          padding: '0.5rem 0.7rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.3rem',
                          fontSize: '0.9rem',
                          backgroundColor: 'white',
                          outline: 'none',
                          boxSizing: 'border-box',
                          fontFamily: 'Arial, sans-serif',
                          color: '#374151',
                        }}
                        value={formData[field.key]}
                        onChange={(e) => handleInputChange(field.key, e.target.value)}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        placeholder={field.placeholder}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{
            backgroundColor: '#fff3cd',
            padding: '1rem',
            borderRadius: '0.5rem',
            marginTop: '0.8rem',
            border: '1px solid #ffeaa7',
            borderLeft: '4px solid #fdcb6e',
          }}>
            <h3 style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#856404', margin: '0 0 0.5rem 0' }}>
              A. Petunjuk
            </h3>
            <div style={{ color: '#856404', fontSize: '0.8rem' }}>
              <div style={{ marginBottom: '0.3rem' }}>1. Baca dan pelajari setiap instruksi kerja di bawah ini dengan cermat sebelum melaksanakan praktek.</div>
              <div style={{ marginBottom: '0.3rem' }}>2. Klarifikasi kepada asesor kompetesi apabila ada hal-hal yang belum jelas.</div>
              <div style={{ marginBottom: '0.3rem' }}>3. Laksanakan pekerjaan sesuai dengan urutan proses yang sudah di tetapkan.</div>
              <div>4. Seluruh proses kerja mengacu kepada SOP/WI yang dipersyaratkan.</div>
            </div>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>
              B. Skenario Tugas Praktik Demonstrasi
            </h3>
            <p style={{ fontSize: '0.8rem', color: '#6b7280', fontStyle: 'italic', marginBottom: '0.8rem' }}>
              Kelompok Pekerjaan I
            </p>

            <div style={{
              border: '1px solid #d1d5db',
              borderRadius: '0.5rem',
              overflow: 'hidden',
              marginBottom: '1rem',
            }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                backgroundColor: 'white',
              }} className="scenario-table">
                <thead>
                  <tr>
                    <th style={{
                      padding: '0.6rem 0.9rem',
                      textAlign: 'center',
                      backgroundColor: '#f9fafb',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      color: '#374151',
                      border: '1px solid #d1d5db',
                      width: '15%',
                    }}></th>
                    <th style={{
                      padding: '0.6rem 0.9rem',
                      textAlign: 'center',
                      backgroundColor: '#f9fafb',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      color: '#374151',
                      border: '1px solid #d1d5db',
                      width: '30%',
                    }}>Kode Unit</th>
                    <th style={{
                      padding: '0.6rem 0.9rem',
                      textAlign: 'center',
                      backgroundColor: '#f9fafb',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      color: '#374151',
                      border: '1px solid #d1d5db',
                    }}>Judul Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { code: 'GAR.CM01.001.01', title: 'Memberikan Layanan Secara Prima Kepada Pelanggan' },
                    { code: 'GAR.CM01.002.01', title: 'Melakukan Pekerjaan dalam Lingkungan Sosial yang Beragam' },
                    { code: 'GAR.CM01.003.01', title: 'Mengikuti Prosedur Kesehatan, Keselamatan dan Keamanan dalam Bekerja' },
                    { code: 'GAR.CM01.004.01', title: 'Memelihara Alat Jahit' },
                  ].map((item, index) => (
                    <tr key={index}>
                      <td style={{
                        padding: '0.5rem 0.9rem',
                        textAlign: 'center',
                        fontSize: '0.9rem',
                        color: '#374151',
                        border: '1px solid #d1d5db',
                        backgroundColor: 'white',
                      }}>{index + 1}.</td>
                      <td style={{
                        padding: '0.5rem 0.9rem',
                        fontSize: '0.9rem',
                        color: '#374151',
                        border: '1px solid #d1d5db',
                        backgroundColor: 'white',
                        fontFamily: 'monospace',
                      }}>{item.code}</td>
                      <td style={{
                        padding: '0.5rem 0.9rem',
                        fontSize: '0.9rem',
                        color: '#374151',
                        border: '1px solid #d1d5db',
                        backgroundColor: 'white',
                      }}>{item.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{
              fontSize: '0.9rem',
              fontWeight: 'bold',
              color: '#374151',
              marginBottom: '0.5rem',
            }}>
              Skenario Tugas Praktik Demonstrasi : <span style={{
                fontWeight: 'normal',
                fontStyle: 'italic',
                color: '#9ca3af',
                marginLeft: '0.5rem',
              }}>stimulus demonstrasi</span>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid #d1d5db',
            paddingTop: '0.8rem',
            marginTop: '1rem',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '0.8rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid #e5e7eb',
              flexWrap: 'wrap',
            }} className="bottom-section">
              <div style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#374151',
                width: '100%',
                maxWidth: '15rem',
                flexShrink: 0,
              }}>
                Perlengkapan dan Peralatan
              </div>
              <div style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#374151',
                marginRight: '1rem',
              }}>:</div>
              <div style={{
                fontSize: '0.8rem',
                color: '#374151',
                lineHeight: '1.6',
              }}>
                <div>• peralatan 1</div>
                <div>• peralatan 2</div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1rem',
              flexWrap: 'wrap',
            }} className="bottom-section">
              <div style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#374151',
                width: '100%',
                maxWidth: '15rem',
                flexShrink: 0,
                textDecoration: 'underline',
              }}>
                Durasi Waktu
              </div>
              <div style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#374151',
                marginRight: '1rem',
              }}>:</div>
              <div style={{
                fontSize: '0.8rem',
                color: '#374151',
              }}>30 Menit</div>

              <div style={{ marginLeft: 'auto' }}>
                <button
                  className="submit-btn"
                  style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '1rem',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    boxShadow: '0 2px 8px rgba(59,130,246,0.3)',
                    transition: 'all 0.2s ease',
                  }}
                  onClick={handleSubmit}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#2563eb';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#3b82f6';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div style={{
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
        }} onClick={handleOkay}>
          <div style={{
            backgroundColor: '#f0f0f0',
            borderRadius: '1rem',
            padding: '1.5rem 2rem',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
            minWidth: '90%',
            maxWidth: '30rem',
            position: 'relative',
          }} className="popup-container" onClick={(e) => e.stopPropagation()}>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                gap: '0.8rem',
              }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '50%',
                  backgroundColor: '#FF8C00',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                  }}>✓</div>
                </div>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.3rem',
                }}>
                  <div style={{
                    width: '4rem',
                    height: '0.5rem',
                    backgroundColor: '#FF8C00',
                    borderRadius: '0.3rem',
                  }}></div>
                  <div style={{
                    width: '6rem',
                    height: '0.5rem',
                    backgroundColor: '#FF8C00',
                    borderRadius: '0.3rem',
                  }}></div>
                  <div style={{
                    width: '8rem',
                    height: '0.5rem',
                    backgroundColor: '#FF8C00',
                    borderRadius: '0.3rem',
                  }}></div>
                </div>
              </div>
            </div>
            <div style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '1.5rem',
              lineHeight: '1.4',
            }}>
              Jawaban anda telah direkam!
            </div>
            <button
              style={{
                backgroundColor: '#FF8C00',
                border: 'none',
                fontSize: '0.9rem',
                fontWeight: '600',
                color: 'white',
                cursor: 'pointer',
                padding: '0.5rem 1.5rem',
                borderRadius: '1rem',
                position: 'absolute',
                bottom: '1rem',
                right: '1.5rem',
                transition: 'all 0.2s ease',
              }}
              onClick={handleOkay}
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

export default IA02;