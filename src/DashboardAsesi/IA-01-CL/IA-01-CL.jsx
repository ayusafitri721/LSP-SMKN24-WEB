// src/DashboardAsesi/IA-01/IA-01.jsx

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

const headerTitleStyle = {
  textAlign: 'center',
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '5px',
  color: '#333',
};

const headerSubtitleStyle = {
  textAlign: 'center',
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '25px',
  color: '#333',
};

// Updated schema section styles to match AK-01
const tableStyle = {
  width: '100%',
  marginBottom: '15px',
  fontSize: '12px',
};

const tableCellStyle = {
  padding: '5px 10px',
  border: '1px solid #ddd',
  verticalAlign: 'middle',
};

const tableLabelStyle = {
  ...tableCellStyle,
  backgroundColor: '#f8f9fa',
  fontWeight: 'bold',
  width: '150px',
};

const tableInputStyle = {
  ...tableCellStyle,
  backgroundColor: 'white',
};

const inputFieldStyle = {
  border: 'none',
  outline: 'none',
  width: '100%',
  padding: '2px',
  fontSize: '12px',
  backgroundColor: 'transparent',
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
  marginBottom: '8px',
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
  marginBottom: '300px',
  flex: 1,
};

const pertanyaanHeaderStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#333',
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

// Popup styles (matching APL-01)
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

const IA01 = () => {
  const [showPopup, setShowPopup] = useState(false);
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

    // Intercept navigation attempts dengan history API
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
    setIsFormSubmitted(true);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    // Auto redirect ke IA-02 setelah close popup
    setTimeout(() => {
      navigate('/dashboard-asesi/ia-02');
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
          Silakan isi dan kirim formulir FR.IA.01.CL terlebih dahulu!
        </div>
      )}

      <div style={navContainerStyle} className="nav-scrollbar">
        <NavAsesi activeTab="FR.IA.01.CL" />
      </div>

      <div style={imageBannerStyle}>
        <h1 style={logoTextStyle}>
          MyLSP
        </h1>
      </div>

      <div style={contentCardStyle}>
        <div style={headerTitleStyle}>FR.IA.01.CL</div>
        <div style={headerSubtitleStyle}>CEKLIS OBSERVASI AKTIVITAS DI TEMPAT KERJA ATAU TEMPAT KERJA SIMULASI</div>

        <table style={tableStyle}>
          <tbody>
            <tr>
              <td style={{...tableLabelStyle, verticalAlign: 'top', paddingTop: '10px'}}>
                Skema Sertifikasi
              </td>
              <td style={tableInputStyle}>
                <div style={{marginBottom: '8px'}}>
                  <div style={{fontSize: '11px', fontWeight: 'bold', marginBottom: '3px'}}>Judul Unit:</div>
                  <input
                    type="text"
                    style={{...inputFieldStyle, border: '1px solid #ddd', padding: '4px 6px'}}
                    value={formData.judulUnit}
                    onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                    placeholder="Masukkan judul unit"
                  />
                </div>
                <div>
                  <div style={{fontSize: '11px', fontWeight: 'bold', marginBottom: '3px'}}>Nomor Unit:</div>
                  <input
                    type="text"
                    style={{...inputFieldStyle, border: '1px solid #ddd', padding: '4px 6px'}}
                    value={formData.nomorUnit}
                    onChange={(e) => handleInputChange('nomorUnit', e.target.value)}
                    placeholder="Masukkan nomor unit"
                  />
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

        <form onSubmit={handleSubmit}>
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

              <button type="submit" style={submitButtonStyle}>
                Kirim
              </button>
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
        </form>
      </div>

      {/* Success Popup (matching APL-01 style) */}
      {showPopup && (
        <div style={popupOverlayStyle} onClick={handleClosePopup}>
          <div style={popupContainerStyle} onClick={(e) => e.stopPropagation()}>
            <div style={iconContainerStyle}>
              <div style={successIconStyle}>
                {/* Check mark circle - di atas */}
                <div style={checkCircleStyle}>
                  <div style={checkMarkStyle}>✓</div>
                </div>
                
                {/* List lines (3 horizontal lines) - di bawah */}
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

export default IA01;