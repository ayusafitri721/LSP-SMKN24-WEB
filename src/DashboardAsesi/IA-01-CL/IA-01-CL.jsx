// src/DashboardAsesi/IA-01/IA-01.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';

// Modal styles - Updated to match AK-01 design
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
};

const pageContainerStyle = {
  backgroundColor: 'white',
  fontFamily: 'Arial, sans-serif',
  padding: '15px',
  minHeight: '100vh',
};

// Header section matching AK-01 design
const headerSectionStyle = {
  backgroundImage: "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '0 0 40px 40px',
  overflow: 'hidden',
  marginBottom: '0',
};

// Navigation container matching AK-01
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

// Logo container matching AK-01
const logoContainerStyle = {
  height: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10px',
  marginBottom: '10px',
};

// Logo text matching AK-01
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

// Updated schema section styles to match AK-01
const tableStyle = {
  width: '100%',
  marginBottom: '15px',
  fontSize: '12px',
};

const instructionBoxStyle = {
  backgroundColor: '#F4D5A7',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '25px',
};

const instructionTitleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '15px',
  color: '#333',
};

const instructionListStyle = {
  listStyle: 'disc',
  paddingLeft: '20px',
  margin: 0,
};

const instructionItemStyle = {
  fontSize: '12px',
  color: '#333',
  marginBottom: '10px',
  lineHeight: '1.4',
};

const instructionSectionStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 300px',
  gap: '30px',
  alignItems: 'stretch',
  marginBottom: '25px',
};

const mainContentStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '30px',
  alignItems: 'stretch',
};

const leftContentStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const rightContentStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const unitSectionStyle = {
  marginBottom: '30px',
};

const unitHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
};

const unitTitleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginRight: '20px',
  color: '#333',
};

const unitFieldContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
};

const unitFieldStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
};

const unitFieldLabelStyle = {
  fontSize: '12px',
  color: '#333',
};

const unitFieldInputStyle = {
  border: 'none',
  borderBottom: '1px solid #ccc',
  padding: '2px 5px',
  fontSize: '12px',
  backgroundColor: 'transparent',
  outline: 'none',
  minWidth: '100px',
};

const elementBoxStyle = {
  border: '2px solid #333',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '20px',
  flex: 1,
};

const elementTitleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '15px',
  color: '#333',
};

const criteriaListStyle = {
  listStyle: 'disc',
  paddingLeft: '20px',
  marginBottom: '15px',
};

const criteriaItemStyle = {
  fontSize: '12px',
  color: '#333',
  marginBottom: '15px',
  lineHeight: '1.4',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',
};

const checkboxGroupStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  alignItems: 'center',
  minWidth: '120px',
};

const checkboxLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  fontSize: '12px',
  color: '#333',
  cursor: 'pointer',
};

const checkboxStyle = {
  width: '16px',
  height: '16px',
  cursor: 'pointer',
};

const kelompokPekerjaanStyle = {
  border: '2px solid #333',
  borderRadius: '8px',
  padding: '20px',
};

const kelompokHeaderStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '15px',
  color: '#333',
};

const kelompokListStyle = {
  listStyle: 'decimal',
  paddingLeft: '20px',
  margin: 0,
};

const kelompokItemStyle = {
  fontSize: '12px',
  color: '#333',
  marginBottom: '5px',
  lineHeight: '1.3',
};

const pertanyaanSectionStyle = {
  marginTop: '30px',
  border: '2px solid #333',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '20px', // Reduced from 300px to 20px
  flex: 1,
};

const pertanyaanItemStyle = {
  marginBottom: '2px',
  paddingBottom: '2px',
  borderBottom: '1px solid #eee',
};

const pertanyaanTextStyle = {
  fontSize: '12px',
  color: '#333',
  marginBottom: '10px',
  lineHeight: '1.4',
};

const tanggapanContainerStyle = {
  marginTop: '10px',
};

const tanggapanLabelStyle = {
  fontSize: '12px',
  color: '#333',
  marginBottom: '3px',
  fontWeight: 'bold',
};

const tanggapanInputStyle = {
  width: '100%',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '8px',
  fontSize: '12px',
  minHeight: '40px',
  resize: 'vertical',
  fontFamily: 'Arial, sans-serif',
  outline: 'none',
};

// Updated submit button style - smaller and positioned to the right
const submitButtonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '15px',
  padding: '8px 20px',
  fontSize: '12px',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '15px', // Reduced margin
  alignSelf: 'flex-end',
  transition: 'all 0.2s ease',
};

// Button container to help with alignment - positioned closer to content
const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '15px', // Reduced from 30px to 15px
  width: '100%',
  paddingRight: '0',
};

const IA01 = () => {
  const [showModal, setShowModal] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    judulUnit: '',
    nomorUnit: '',
  });
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

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function(...args) {
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/ia-01')) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalPushState.apply(window.history, args);
    };

    window.history.replaceState = function(...args) {
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/ia-01')) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form FR.IA.01.CL submitted:', formData);
    localStorage.setItem('ia01FormData', JSON.stringify(formData));
    setIsFormSubmitted(true);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => {
      navigate('/dashboard-asesi/ia-02');
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
          Silakan isi dan kirim formulir FR.IA.01.CL terlebih dahulu!
        </div>
      )}

      {/* Header Section matching AK-01 design */}
      <div style={headerSectionStyle}>
        <div style={navContainerStyle} className="nav-scrollbar">
          <NavAsesi activeTab="FR.IA.01.CL" />
        </div>

        <div style={logoContainerStyle}>
          <h1 style={logoTextStyle}>
            MyLSP
          </h1>
        </div>
      </div>

      {/* Content Card */}
      <div style={contentCardStyle}>
        <div style={headerSectionStyle2}>
          <div style={logoContainer2Style}>
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
            <div style={titleStyle}>FR.IA.01.CL</div>
            <div style={subtitleStyle}>CEKLIS OBSERVASI AKTIVITAS DI TEMPAT KERJA ATAU TEMPAT KERJA SIMULASI</div>
          </div>
        </div>

        {/* Skema Sertifikasi */}
        <table style={{width: '100%', marginBottom: '15px', fontSize: '12px'}}>
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
                  <div style={{display: 'flex', alignItems: 'center'}}>
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
                      value={formData.judulUnit}
                      onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                      placeholder="Masukkan judul unit"
                    />
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}}>
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

        <div style={instructionSectionStyle}>
          <div style={instructionBoxStyle}>
            <div style={instructionTitleStyle}>PADUAN ASESMEN MANDIRI</div>
            <div style={instructionTitleStyle}>Instruksi:</div>
            <ul style={instructionListStyle}>
              <li style={instructionItemStyle}>Lengkapi nama unit kompetensi, elemen, dan kriteria/unjuk kerja sesuai/kolom dalam tabel.</li>
              <li style={instructionItemStyle}>Isi kolom standar industri atau tempat kerja</li>
              <li style={instructionItemStyle}>Beri tanda centang (O) pada kolom "YA" jika Anda yakin asesi dapat melakukan/mendemonstrasikan tugas sesuai KUK, atau centang(O) pada kolom "Tidak" bila sebaliknya.</li>
              <li style={instructionItemStyle}>Penilaian lanjut bila hasil belum dapat disimpulkan, untuk itu gunakan/metode lain</li>
              <li style={instructionItemStyle}>sehingga keputusan dapat/dibuat.</li>
              <li style={instructionItemStyle}>isi kolom KUK sesuai dengan Unit Kompetensi/SKKNI</li>
            </ul>
          </div>

          <div style={kelompokPekerjaanStyle}>
            <div style={kelompokHeaderStyle}>Kelompok Pekerjaan 1</div>
            <ol style={kelompokListStyle}>
              <li style={kelompokItemStyle}>1.J620100.004.02 Menggunakan Struktur Data</li>
              <li style={kelompokItemStyle}>2. dst</li>
              <li style={kelompokItemStyle}>3. dst</li>
              <li style={kelompokItemStyle}>4. dst</li>
            </ol>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{width: '100%'}}>
          <div style={mainContentStyle}>
            <div style={leftContentStyle}>
              <div style={unitSectionStyle}>
                <div style={unitHeaderStyle}>
                  <div style={unitTitleStyle}>Unit Kompetensi 1</div>
                  <div style={unitFieldContainerStyle}>
                    <div style={unitFieldStyle}>
                      <div style={unitFieldLabelStyle}>Kode Unit</div>
                      <div style={unitFieldLabelStyle}>:</div>
                      <input type="text" style={unitFieldInputStyle} />
                    </div>
                    <div style={unitFieldStyle}>
                      <div style={unitFieldLabelStyle}>Judul Unit</div>
                      <div style={unitFieldLabelStyle}>:</div>
                      <input type="text" style={unitFieldInputStyle} />
                    </div>
                  </div>
                </div>

                <div style={elementBoxStyle}>
                  <div style={elementTitleStyle}>Elemen 1: Mengidentifikasi konsep data dan struktur data</div>
                  <div style={elementTitleStyle}>Kriteria Untuk Kerja</div>
                  
                  <div style={criteriaListStyle}>
                    <div style={criteriaItemStyle}>
                      <span>• Mengidentifikasi konsep data dan struktur data sesuai dengan konteks</span>
                      <div style={checkboxGroupStyle}>
                        <label style={checkboxLabelStyle}>
                          <input type="checkbox" name="criteria1_ya" style={checkboxStyle} />
                          Ya
                        </label>
                        <label style={checkboxLabelStyle}>
                          <input type="checkbox" name="criteria1_tidak" style={checkboxStyle} />
                          Tidak
                        </label>
                      </div>
                    </div>
                    <div style={criteriaItemStyle}>
                      <span>• Membandingkan alternatif struktur data kelebihan dan kekurangannya untuk konteks permasalahan yang diselesaikan</span>
                      <div style={checkboxGroupStyle}>
                        <label style={checkboxLabelStyle}>
                          <input type="checkbox" name="criteria2_ya" style={checkboxStyle} />
                          Ya
                        </label>
                        <label style={checkboxLabelStyle}>
                          <input type="checkbox" name="criteria2_tidak" style={checkboxStyle} />
                          Tidak
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={rightContentStyle}>
              <div style={pertanyaanSectionStyle}>
                <div style={pertanyaanItemStyle}>
                  {/* Pertanyaan dan Pencapaian secara horizontal */}
                  <div style={{display: 'flex', gap: '30px', alignItems: 'flex-start'}}>
                    <div style={{flex: 1}}>
                      <div style={{fontSize: '12px', fontWeight: 'bold', color: '#333', marginBottom: '10px'}}>
                        Pertanyaan
                      </div>
                      <div style={pertanyaanTextStyle}>
                        1. Anda seorang operator yunior busana, sebelum memulai kegiatan menjahit blus, anda perlu memperhatikan SOP kesehatan dan keselamatan kerja, apa yang akan anda lakukan supaya tidak terjadi kecelakaan kerja pada waktu menjahit blus? (JRES)
                      </div>
                    </div>
                    <div style={{minWidth: '150px'}}>
                      <div style={{fontSize: '12px', fontWeight: 'bold', color: '#333', marginBottom: '10px'}}>
                        Pencapaian
                      </div>
                      <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                        <label style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#333', cursor: 'pointer'}}>
                          <input type="checkbox" name="pencapaian_ya" style={{width: '16px', height: '16px', cursor: 'pointer'}} />
                          Ya
                        </label>
                        <label style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#333', cursor: 'pointer'}}>
                          <input type="checkbox" name="pencapaian_tidak" style={{width: '16px', height: '16px', cursor: 'pointer'}} />
                          Tidak
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Tanggapan di bawah */}
                  <div style={tanggapanContainerStyle}>
                    <div style={tanggapanLabelStyle}>Tanggapan:</div>
                    <textarea 
                      style={tanggapanInputStyle}
                      placeholder="isi tanggapan asesor"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Button moved closer to content */}
          <div style={buttonContainerStyle}>
            <button 
              type="submit" 
              style={submitButtonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
            >
              Kirim
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal matching AK-01 style */}
      {showModal && (
        <div style={modalOverlayStyle} onClick={handleCloseModal}>
          <div style={modalContainerStyle} onClick={(e) => e.stopPropagation()}>
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
            
            <div style={modalTitleStyle}>Jawaban anda telah direkam!</div>
            
            <button 
              style={okayButtonStyle} 
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

export default IA01;