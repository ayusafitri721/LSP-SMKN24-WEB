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
      padding: '0.5rem',
      minHeight: '100vh',
      boxSizing: 'border-box',
    }}>
      <style>{`
@keyframes modalPop {
  0 % { transform: translateY(8px) scale(0.98); opacity: 0; }
  60 % { transform: translateY(-6px) scale(1.02); opacity: 1; }
  100 % { transform: translateY(0) scale(1); opacity: 1; }
}
        .nav - scrollbar:: -webkit - scrollbar {
  height: 4px;
}
        .nav - scrollbar:: -webkit - scrollbar - track {
  background: transparent;
}
        .nav - scrollbar:: -webkit - scrollbar - thumb {
  background: #888;
  border - radius: 4px;
}
        .nav - scrollbar:: -webkit - scrollbar - thumb:hover {
  background: #555;
}
        .table - row:hover {
  background - color: #fbfbfd;
}
        .submit - btn:hover {
  transform: translateY(-2px);
}
@keyframes slideIn {
          from { transform: translateX(100 %); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
}
@media(max - width: 768px) {
          .nav - container {
    max - width: 100 %;
    margin: 0;
    padding: 0.4rem;
    overflow - x: auto;
  }
          .logo - text {
    font - size: 1.8rem;
  }
          .content - card {
    padding: 0.8rem;
    margin: 0;
  }
          .form - table {
    width: 100 %;
    table - layout: fixed;
  }
          .form - table td: first - child {
    background - color: #f8fafc;
    font - weight: bold;
    padding: 0.4rem 0.6rem;
    font - size: 0.8rem;
    width: 30 %;
    border - right: 1px solid #e6edf3;
    border - bottom: 1px solid #e6edf3;
    white - space: normal;
    word - wrap: break-word;
  }
          .form - table td: nth - child(2) {
    width: 5 %;
    padding: 0.4rem;
    font - size: 0.8rem;
    border - bottom: 1px solid #e6edf3;
  }
          .form - table td: last - child {
    padding: 0.4rem;
    border - bottom: 1px solid #e6edf3;
  }
          .form - table input {
    width: 100 %;
    font - size: 0.8rem;
    padding: 0.4rem 0.6rem;
    border - radius: 0.25rem;
  }
          .scenario - table {
    width: 100 %;
    table - layout: fixed;
  }
          .scenario - table th, .scenario - table td {
    font - size: 0.7rem;
    padding: 0.4rem;
    white - space: normal;
    word - wrap: break-word;
  }
          .scenario - table th {
    width: 33.33 %;
  }
          .bottom - section {
    flex - direction: column;
    align - items: flex - start;
    gap: 0.4rem;
    margin - bottom: 0.5rem;
  }
          .duration - section {
    flex - direction: row!important;
    flex - wrap: nowrap!important;
    align - items: center;
    gap: 0.3rem;
  }
          .duration - section.label {
    max - width: 8rem;
    font - size: 0.8rem;
  }
          .duration - section.colon {
    font - size: 0.8rem;
    margin - right: 0.3rem;
  }
          .duration - section.value {
    font - size: 0.75rem;
  }
          .submit - btn - container {
    display: flex;
    justify - content: flex - end;
    width: 100 %;
    margin - top: 0.4rem;
  }
          .submit - btn {
    padding: 0.4rem 0.8rem!important;
    font - size: 0.75rem!important;
  }
          .popup - container {
    min - width: 90vw;
    max - width: 95vw;
    padding: 1rem;
    margin: 0 0.5rem;
  }
          .popup - container div {
    font - size: 0.85rem;
  }
          .popup - checkmark {
    width: 2.5rem!important;
    height: 2.5rem!important;
  }
          .popup - checkmark - text {
    font - size: 1.2rem!important;
  }
          .popup - bars div {
    height: 0.4rem!important;
  }
          .warning - notification {
    top: 8px;
    right: 8px;
    padding: 0.5rem 0.7rem;
    font - size: 0.75rem;
    max - width: 75 %;
    opacity: 0.95;
    border - radius: 0.4rem;
  }
          .logo - img {
    width: 2.5rem!important;
    height: 2.5rem!important;
    top: 0!important;
    left: 0.5rem!important;
  }
          .header - title {
    font - size: 1rem!important;
  }
          .header - subtitle {
    font - size: 0.7rem!important;
  }
          .instruction - box {
    padding: 0.7rem;
    font - size: 0.7rem;
    margin - top: 0.5rem;
  }
          .scenario - title {
    font - size: 0.85rem!important;
    margin - bottom: 0.3rem!important;
  }
          .scenario - subtitle {
    font - size: 0.7rem!important;
    margin - bottom: 0.5rem!important;
  }
}
@media(max - width: 480px) {
          .logo - text {
    font - size: 1.5rem;
  }
          .content - card {
    padding: 0.6rem;
  }
          .form - table td: first - child {
    font - size: 0.75rem;
    padding: 0.3rem 0.5rem;
    width: 35 %;
  }
          .form - table td: nth - child(2) {
    font - size: 0.75rem;
    padding: 0.3rem;
  }
          .form - table td: last - child {
    padding: 0.3rem;
  }
          .form - table input {
    font - size: 0.75rem;
    padding: 0.3rem 0.5rem;
  }
          .scenario - table th, .scenario - table td {
    font - size: 0.65rem;
    padding: 0.3rem;
  }
          .popup - container {
    padding: 0.8rem;
  }
          .warning - notification {
    font - size: 0.7rem;
    padding: 0.4rem 0.6rem;
    max - width: 80 %;
  }
          .duration - section.label {
    font - size: 0.75rem;
    max - width: 7rem;
  }
          .duration - section.colon {
    font - size: 0.75rem;
  }
          .duration - section.value {
    font - size: 0.7rem;
  }
          .submit - btn {
    padding: 0.3rem 0.6rem!important;
    font - size: 0.7rem!important;
  }
}
`}</style>

      {showWarning && (
        <div className="warning-notification" style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          backgroundColor: '#ff6b6b',
          color: 'white',
          padding: '0.8rem 1rem',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          zIndex: 1001,
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
        borderRadius: '0 0 1.5rem 1.5rem',
        overflow: 'hidden',
        marginBottom: '0',
      }}>
        <div className="nav-container nav-scrollbar" style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '0.4rem 0.8rem',
          borderRadius: '0.4rem 0.4rem 1.5rem 0.4rem',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          margin: '0 0.5rem 0 0',
          overflowX: 'auto',
          maxWidth: '100%',
          whiteSpace: 'nowrap',
          backdropFilter: 'blur(8px)',
          position: 'relative',
          zIndex: 2,
        }}>
          <NavAsesi activeTab="FR.IA.02.TPD" />
        </div>

        <div style={{
          height: '8rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '0.8rem',
        }}>
          <h1 className="logo-text" style={{
            color: 'white',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            margin: 0,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            letterSpacing: '1.5px',
          }}>MyLSP</h1>
        </div>
      </div>

      <div className="content-card" style={{
        backgroundColor: 'white',
        borderRadius: '0 0 0.6rem 0.6rem',
        padding: '1rem',
        marginTop: '0',
        border: 'none',
      }}>
        <div style={{
          marginBottom: '0.8rem',
          paddingBottom: '0.6rem',
          borderBottom: '1.5px solid #f1f5f9',
          textAlign: 'center',
        }}>
          <div style={{ position: 'relative' }}>
            <img
              src="/src/img/LOGO_LSP_SMKN_24.jpg"
              alt="Logo LSP"
              className="logo-img"
              style={{
                position: 'absolute',
                top: '-0.4rem',
                left: '0',
                width: '3.5rem',
                height: '3.5rem',
                objectFit: 'contain',
                zIndex: 1,
              }}
            />
            <h2 className="header-title" style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', textAlign: 'center' }}>
              FR.IA.02.TPD
            </h2>
            <p className="header-subtitle" style={{ margin: '0.2rem 0 0 0', fontSize: '0.75rem', color: '#475569', fontWeight: '600', textAlign: 'center' }}>
              TUGAS PRAKTIK DEMONSTRASI
            </p>
          </div>
        </div>

        <div style={{ marginTop: '0.8rem' }}>
          <div style={{
            overflowX: 'auto',
            borderRadius: '0.4rem',
            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.03)',
            border: '1px solid #e6edf3',
            backgroundColor: 'white',
          }}>
            <table className="form-table" style={{
              width: '100%',
              borderCollapse: 'collapse',
              backgroundColor: 'white',
            }}>
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
                      padding: '0.5rem 0.8rem',
                      fontSize: '0.85rem',
                      color: '#0f172a',
                      borderBottom: index === 6 ? 'none' : '1px solid #f3f6f9',
                    }} dangerouslySetInnerHTML={{ __html: field.label }} />
                    <td style={{
                      padding: '0.5rem 0.8rem',
                      fontSize: '0.85rem',
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
                          padding: '0.4rem 0.6rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '0.25rem',
                          fontSize: '0.85rem',
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

          <div className="instruction-box" style={{
            backgroundColor: '#fff3cd',
            padding: '0.8rem',
            borderRadius: '0.4rem',
            marginTop: '0.6rem',
            border: '1px solid #ffeaa7',
            borderLeft: '3px solid #fdcb6e',
          }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#856404', margin: '0 0 0.4rem 0' }}>
              A. Petunjuk
            </h3>
            <div style={{ color: '#856404', fontSize: '0.75rem' }}>
              <div style={{ marginBottom: '0.2rem' }}>1. Baca dan pelajari setiap instruksi kerja di bawah ini dengan cermat sebelum melaksanakan praktek.</div>
              <div style={{ marginBottom: '0.2rem' }}>2. Klarifikasi kepada asesor kompetesi apabila ada hal-hal yang belum jelas.</div>
              <div style={{ marginBottom: '0.2rem' }}>3. Laksanakan pekerjaan sesuai dengan urutan proses yang sudah di tetapkan.</div>
              <div>4. Seluruh proses kerja mengacu kepada SOP/WI yang dipersyaratkan.</div>
            </div>
          </div>

          <div style={{ marginTop: '0.8rem' }}>
            <h3 className="scenario-title" style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.4rem' }}>
              B. Skenario Tugas Praktik Demonstrasi
            </h3>
            <p className="scenario-subtitle" style={{ fontSize: '0.75rem', color: '#6b7280', fontStyle: 'italic', marginBottom: '0.6rem' }}>
              Kelompok Pekerjaan I
            </p>

            <div style={{
              border: '1px solid #d1d5db',
              borderRadius: '0.4rem',
              overflow: 'hidden',
              marginBottom: '0.8rem',
            }}>
              <table className="scenario-table" style={{
                width: '100%',
                borderCollapse: 'collapse',
                backgroundColor: 'white',
              }}>
                <thead>
                  <tr>
                    <th style={{
                      padding: '0.5rem 0.7rem',
                      textAlign: 'center',
                      backgroundColor: '#f9fafb',
                      fontWeight: 'bold',
                      fontSize: '0.8rem',
                      color: '#374151',
                      border: '1px solid #d1d5db',
                      width: '15%',
                    }}></th>
                    <th style={{
                      padding: '0.5rem 0.7rem',
                      textAlign: 'center',
                      backgroundColor: '#f9fafb',
                      fontWeight: 'bold',
                      fontSize: '0.8rem',
                      color: '#374151',
                      border: '1px solid #d1d5db',
                      width: '30%',
                    }}>Kode Unit</th>
                    <th style={{
                      padding: '0.5rem 0.7rem',
                      textAlign: 'center',
                      backgroundColor: '#f9fafb',
                      fontWeight: 'bold',
                      fontSize: '0.8rem',
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
                        padding: '0.4rem 0.7rem',
                        textAlign: 'center',
                        fontSize: '0.8rem',
                        color: '#374151',
                        border: '1px solid #d1d5db',
                        backgroundColor: 'white',
                      }}>{index + 1}.</td>
                      <td style={{
                        padding: '0.4rem 0.7rem',
                        fontSize: '0.8rem',
                        color: '#374151',
                        border: '1px solid #d1d5db',
                        backgroundColor: 'white',
                        fontFamily: 'monospace',
                      }}>{item.code}</td>
                      <td style={{
                        padding: '0.4rem 0.7rem',
                        fontSize: '0.8rem',
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
              fontSize: '0.85rem',
              fontWeight: 'bold',
              color: '#374151',
              marginBottom: '0.4rem',
            }}>
              Skenario Tugas Praktik Demonstrasi : <span style={{
                fontWeight: 'normal',
                fontStyle: 'italic',
                color: '#9ca3af',
                marginLeft: '0.4rem',
              }}>stimulus demonstrasi</span>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid #d1d5db',
            paddingTop: '0.6rem',
            marginTop: '0.8rem',
          }}>
            <div className="bottom-section" style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '0.6rem',
              paddingBottom: '0.4rem',
              borderBottom: '1px solid #e5e7eb',
              flexWrap: 'wrap',
            }}>
              <div style={{
                fontSize: '0.85rem',
                fontWeight: 'bold',
                color: '#374151',
                width: '100%',
                maxWidth: '12rem',
                flexShrink: 0,
              }}>
                Perlengkapan dan Peralatan
              </div>
              <div style={{
                fontSize: '0.85rem',
                fontWeight: 'bold',
                color: '#374151',
                marginRight: '0.8rem',
              }}>:</div>
              <div style={{
                fontSize: '0.75rem',
                color: '#374151',
                lineHeight: '1.4',
              }}>
                <div>• peralatan 1</div>
                <div>• peralatan 2</div>
              </div>
            </div>

            <div className="bottom-section duration-section" style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '0.8rem',
              flexWrap: 'wrap',
            }}>
              <div className="label" style={{
                fontSize: '0.85rem',
                fontWeight: 'bold',
                color: '#374151',
                maxWidth: '12rem',
                flexShrink: 0,
                textDecoration: 'underline',
              }}>
                Durasi Waktu
              </div>
              <div className="colon" style={{
                fontSize: '0.85rem',
                fontWeight: 'bold',
                color: '#374151',
                marginRight: '0.8rem',
              }}>:</div>
              <div className="value" style={{
                fontSize: '0.75rem',
                color: '#374151',
              }}>30 Menit</div>
            </div>
            <div className="submit-btn-container" style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
            }}>
              <button
                className="submit-btn"
                style={{
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '0.8rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 6px rgba(59,130,246,0.3)',
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
          <div className="popup-container" style={{
            backgroundColor: '#f0f0f0',
            borderRadius: '0.8rem',
            padding: '1.2rem 1.5rem',
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
            minWidth: '85%',
            maxWidth: '28rem',
            position: 'relative',
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ marginBottom: '0.8rem' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.2rem',
                gap: '0.6rem',
              }}>
                <div className="popup-checkmark" style={{
                  width: '2.8rem',
                  height: '2.8rem',
                  borderRadius: '50%',
                  backgroundColor: '#FF8C00',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div className="popup-checkmark-text" style={{
                    color: 'white',
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                  }}>✓</div>
                </div>
                <div className="popup-bars" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                }}>
                  <div style={{
                    width: '3.5rem',
                    height: '0.4rem',
                    backgroundColor: '#FF8C00',
                    borderRadius: '0.25rem',
                  }}></div>
                  <div style={{
                    width: '5rem',
                    height: '0.4rem',
                    backgroundColor: '#FF8C00',
                    borderRadius: '0.25rem',
                  }}></div>
                  <div style={{
                    width: '6.5rem',
                    height: '0.4rem',
                    backgroundColor: '#FF8C00',
                    borderRadius: '0.25rem',
                  }}></div>
                </div>
              </div>
            </div>
            <div style={{
              fontSize: '0.9rem',
              fontWeight: 'bold',
              color: '#333',
              marginBottom: '1.2rem',
              lineHeight: '1.3',
            }}>
              Jawaban anda telah direkam!
            </div>
            <button
              style={{
                backgroundColor: '#FF8C00',
                border: 'none',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: 'white',
                cursor: 'pointer',
                padding: '0.4rem 1.2rem',
                borderRadius: '0.8rem',
                position: 'absolute',
                bottom: '1rem',
                right: '1.2rem',
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
