import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';

// Modal styles - Updated to match AK-01 design and responsive
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
  padding: '20px',
};

const modalContainerStyle = {
  backgroundColor: '#f0f0f0',
  borderRadius: '20px',
  padding: '30px',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  minWidth: '300px',
  maxWidth: '90vw',
  width: '100%',
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
  maxWidth: 'calc(100vw - 40px)',
  wordWrap: 'break-word',
};

const pageContainerStyle = {
  backgroundColor: 'white',
  fontFamily: 'Arial, sans-serif',
  padding: '15px',
  minHeight: '100vh',
};

// Header section matching AK-01 design - responsive
const headerSectionStyle = {
  backgroundImage: "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '0 0 40px 40px',
  overflow: 'hidden',
  marginBottom: '0',
};

// Navigation container matching AK-01 - responsive
const navContainerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  padding: '5px 15px',
  borderRadius: '0 15px 40px 15px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  margin: '0',
  overflowX: 'auto',
  maxWidth: '100%',
  whiteSpace: 'nowrap',
  backdropFilter: 'blur(10px)',
  position: 'relative',
  zIndex: 2,
};

// Logo container matching AK-01 - responsive
const logoContainerStyle = {
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10px',
  marginBottom: '10px',
};

// Logo text matching AK-01 - responsive
const logoTextStyle = {
  color: 'white',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: 0,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  letterSpacing: '1px',
};

const contentCardStyle = {
  backgroundColor: 'white',
  borderRadius: '0 0 15px 15px',
  padding: '20px',
  boxShadow: 'none',
  marginTop: '0',
  border: 'none',
};

const headerSectionStyle2 = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  marginBottom: '20px',
  paddingBottom: '10px',
  borderBottom: '2px solid #FF8C00',
  flexWrap: 'wrap',
};

const logoContainer2Style = {
  flexShrink: 0,
};

const headerContentStyle = {
  flex: 1,
  minWidth: '200px',
};

const titleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 5px 0',
  color: '#333',
  textAlign: 'center',
};

const subtitleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  margin: '0 0 15px 0',
  color: '#333',
  textAlign: 'center',
  lineHeight: '1.3',
};

const instructionBoxStyle = {
  backgroundColor: '#F4D5A7',
  borderRadius: '8px',
  padding: '15px',
  marginBottom: '20px',
  height: 'fit-content',
};

const instructionTitleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#333',
};

const instructionListStyle = {
  listStyle: 'disc',
  paddingLeft: '20px',
  margin: 0,
};

const instructionItemStyle = {
  fontSize: '11px',
  color: '#333',
  marginBottom: '8px',
  lineHeight: '1.4',
};

const instructionSectionStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '20px',
  alignItems: 'flex-start',
  marginBottom: '20px',
};

const mainContentStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '20px',
  alignItems: 'flex-start',
};

const leftContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
};

const rightContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
};

const elementTitleStyle = {
  fontSize: '13px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#333',
};

const criteriaListStyle = {
  listStyle: 'disc',
  paddingLeft: '20px',
  marginBottom: '15px',
};

const criteriaItemStyle = {
  fontSize: '11px',
  color: '#333',
  marginBottom: '15px',
  lineHeight: '1.4',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',
  flexWrap: 'wrap',
  gap: '10px',
};

const checkboxGroupStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: '15px',
  alignItems: 'center',
  minWidth: '100px',
  flexShrink: 0,
};

const checkboxLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  fontSize: '11px',
  color: '#333',
  cursor: 'pointer',
};

const checkboxStyle = {
  width: '14px',
  height: '14px',
  cursor: 'pointer',
};

const kelompokPekerjaanStyle = {
  border: '2px solid #333',
  borderRadius: '8px',
  padding: '15px',
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
};

const kelompokHeaderStyle = {
  fontSize: '13px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#333',
};

const kelompokListStyle = {
  listStyle: 'decimal',
  paddingLeft: '20px',
  margin: 0,
};

const kelompokItemStyle = {
  fontSize: '11px',
  color: '#333',
  marginBottom: '5px',
  lineHeight: '1.3',
};

const pertanyaanSectionStyle = {
  border: '2px solid #333',
  borderRadius: '8px',
  padding: '15px',
  backgroundColor: 'white',
  height: 'fit-content',
};

const pertanyaanItemStyle = {
  marginBottom: '2px',
  paddingBottom: '2px',
  borderBottom: '1px solid #eee',
};

const pertanyaanTextStyle = {
  fontSize: '11px',
  color: '#333',
  marginBottom: '10px',
  lineHeight: '1.4',
};

const tanggapanContainerStyle = {
  marginTop: '10px',
};

const tanggapanLabelStyle = {
  fontSize: '11px',
  color: '#333',
  marginBottom: '3px',
  fontWeight: 'bold',
};

const submitButtonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '15px',
  padding: '8px 20px',
  fontSize: '12px',
  fontWeight: 'bold',
  cursor: 'pointer',
  marginTop: '15px',
  alignSelf: 'flex-end',
  transition: 'all 0.2s ease',
  minWidth: '80px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '15px',
  width: '100%',
  paddingRight: '0',
};

// Responsive input style
const inputStyle = {
  flex: 1,
  padding: '6px 8px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '12px',
  minWidth: '0',
  width: '100%',
};

// Responsive table style
const tableStyle = {
  width: '100%',
  marginBottom: '15px',
  fontSize: '11px',
  borderCollapse: 'collapse',
  overflowX: 'auto',
  display: 'block',
};

const tableCellStyle = {
  padding: '8px',
  border: '1px solid #ddd',
  backgroundColor: '#f8f9fa',
  fontWeight: 'bold',
  width: '120px',
  textAlign: 'center',
  verticalAlign: 'middle',
  display: 'table-cell',
};

const tableContentStyle = {
  padding: '8px',
  border: '1px solid #ddd',
  backgroundColor: 'white',
  display: 'table-cell',
};

const IA01 = () => {
  const [showModal, setShowModal] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    judulUnit: '',
    nomorUnit: '',
    kodeUnit: '',
    judulUnitKompetensi: '',
  });
  
  const [checkedItems, setCheckedItems] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Fixed checkbox logic - only one can be selected at a time
  const handleCheckboxChange = (criteriaGroup, value) => {
    setCheckedItems(prev => {
      const newState = { ...prev };
      
      // For criteria checkboxes (Ya/Tidak pairs)
      if (criteriaGroup.includes('criteria')) {
        const baseKey = criteriaGroup.replace('_ya', '').replace('_tidak', '');
        // Clear both options for this criteria
        delete newState[baseKey + '_ya'];
        delete newState[baseKey + '_tidak'];
        // Set the selected one
        newState[criteriaGroup] = value;
      }
      // For pencapaian checkboxes (Ya/Tidak pair)
      else if (criteriaGroup.includes('pencapaian')) {
        // Clear both pencapaian options
        delete newState['pencapaian_ya'];
        delete newState['pencapaian_tidak'];
        // Set the selected one
        newState[criteriaGroup] = value;
      }
      
      return newState;
    });
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

  // Responsive styles
  const responsiveInstructionSectionStyle = {
    ...instructionSectionStyle,
    gridTemplateColumns: isMobile ? '1fr' : '1fr 300px',
  };

  const responsiveMainContentStyle = {
    ...mainContentStyle,
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
  };

  const responsiveLogoTextStyle = {
    ...logoTextStyle,
    fontSize: isMobile ? '24px' : '28px',
  };

  const responsiveSubtitleStyle = {
    ...subtitleStyle,
    fontSize: isMobile ? '12px' : '14px',
  };

  const responsiveModalOkayStyle = {
    ...okayButtonStyle,
    position: isMobile ? 'static' : 'absolute',
    marginTop: isMobile ? '20px' : '0',
    right: isMobile ? 'auto' : '30px',
    bottom: isMobile ? 'auto' : '20px',
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

          @media (max-width: 768px) {
            .responsive-table {
              display: block !important;
              overflow-x: auto !important;
              white-space: nowrap !important;
            }
            
            .responsive-table tbody,
            .responsive-table tr,
            .responsive-table td {
              display: block !important;
              width: 100% !important;
            }
            
            .responsive-table tr {
              border: 1px solid #ddd !important;
              margin-bottom: 10px !important;
              border-radius: 4px !important;
            }
            
            .responsive-table td {
              border: none !important;
              padding: 10px !important;
              text-align: left !important;
            }
            
            .responsive-form-row {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 5px !important;
            }
            
            .responsive-form-row span {
              min-width: auto !important;
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
          <h1 style={responsiveLogoTextStyle}>
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
                width: isMobile ? '60px' : '80px',
                height: isMobile ? '60px' : '80px',
                borderRadius: '8px',
                objectFit: 'contain',
                backgroundColor: '#f8f9fa',
                padding: '4px',
              }}
            />
          </div>
          <div style={headerContentStyle}>
            <div style={titleStyle}>FR.IA.01.CL</div>
            <div style={responsiveSubtitleStyle}>CEKLIS OBSERVASI AKTIVITAS DI TEMPAT KERJA ATAU TEMPAT KERJA SIMULASI</div>
          </div>
        </div>

        {/* Skema Sertifikasi */}
        <div className="responsive-table" style={{...tableStyle, display: 'table'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <tbody>
              <tr>
                <td style={tableCellStyle}>
                  Skema Sertifikasi
                </td>
                <td style={tableContentStyle}>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <div className="responsive-form-row" style={{display: 'flex', alignItems: 'center'}}>
                      <span style={{minWidth: '80px', fontSize: '12px', fontWeight: 'bold'}}>Judul Unit</span>
                      <span style={{margin: '0 8px'}}>:</span>
                      <input
                        type="text"
                        style={inputStyle}
                        value={formData.judulUnit}
                        onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                        placeholder="Masukkan judul unit"
                      />
                    </div>
                    <div className="responsive-form-row" style={{display: 'flex', alignItems: 'center'}}>
                      <span style={{minWidth: '80px', fontSize: '12px', fontWeight: 'bold'}}>Nomor Unit</span>
                      <span style={{margin: '0 8px'}}>:</span>
                      <input
                        type="text"
                        style={inputStyle}
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
        </div>

        <div style={responsiveInstructionSectionStyle}>
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

        {/* Unit Kompetensi Table */}
        <div className="responsive-table" style={{...tableStyle, display: 'table'}}>
          <table style={{width: '100%', borderCollapse: 'collapse'}}>
            <tbody>
              <tr>
                <td style={tableCellStyle}>
                  Unit Kompetensi 1
                </td>
                <td style={tableContentStyle}>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <div className="responsive-form-row" style={{display: 'flex', alignItems: 'center'}}>
                      <span style={{minWidth: '80px', fontSize: '12px', fontWeight: 'bold'}}>Kode Unit</span>
                      <span style={{margin: '0 8px'}}>:</span>
                      <input
                        type="text"
                        style={inputStyle}
                        value={formData.kodeUnit}
                        onChange={(e) => handleInputChange('kodeUnit', e.target.value)}
                        placeholder="Masukkan kode unit"
                      />
                    </div>
                    <div className="responsive-form-row" style={{display: 'flex', alignItems: 'center'}}>
                      <span style={{minWidth: '80px', fontSize: '12px', fontWeight: 'bold'}}>Judul Unit</span>
                      <span style={{margin: '0 8px'}}>:</span>
                      <input
                        type="text"
                        style={inputStyle}
                        value={formData.judulUnitKompetensi}
                        onChange={(e) => handleInputChange('judulUnitKompetensi', e.target.value)}
                        placeholder="Masukkan judul unit kompetensi"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <form onSubmit={handleSubmit} style={{width: '100%'}}>
          <div style={responsiveMainContentStyle}>
            <div style={leftContentStyle}>
              {/* Box Elemen 1 - Made compact */}
              <div style={{
                border: '2px solid #333',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '10px'
              }}>
                <div style={elementTitleStyle}>Elemen 1: Mengidentifikasi konsep data dan struktur data</div>
                <div style={elementTitleStyle}>Kriteria Untuk Kerja</div>
                
                <div style={criteriaListStyle}>
                  <div style={criteriaItemStyle}>
                    <span style={{flex: 1, marginRight: '10px'}}>• Mengidentifikasi konsep data dan struktur data sesuai dengan konteks</span>
                    <div style={checkboxGroupStyle}>
                      <label style={checkboxLabelStyle}>
                        <input 
                          type="checkbox" 
                          style={checkboxStyle}
                          checked={checkedItems['criteria1_ya'] || false}
                          onChange={(e) => handleCheckboxChange('criteria1_ya', e.target.checked)}
                        />
                        Ya
                      </label>
                      <label style={checkboxLabelStyle}>
                        <input 
                          type="checkbox" 
                          style={checkboxStyle}
                          checked={checkedItems['criteria1_tidak'] || false}
                          onChange={(e) => handleCheckboxChange('criteria1_tidak', e.target.checked)}
                        />
                        Tidak
                      </label>
                    </div>
                  </div>
                  <div style={criteriaItemStyle}>
                    <span style={{flex: 1, marginRight: '10px'}}>• Membandingkan alternatif struktur data kelebihan dan kekurangannya untuk konteks permasalahan yang diselesaikan</span>
                    <div style={checkboxGroupStyle}>
                      <label style={checkboxLabelStyle}>
                        <input 
                          type="checkbox" 
                          style={checkboxStyle}
                          checked={checkedItems['criteria2_ya'] || false}
                          onChange={(e) => handleCheckboxChange('criteria2_ya', e.target.checked)}
                        />
                        Ya
                      </label>
                      <label style={checkboxLabelStyle}>
                        <input 
                          type="checkbox" 
                          style={checkboxStyle}
                          checked={checkedItems['criteria2_tidak'] || false}
                          onChange={(e) => handleCheckboxChange('criteria2_tidak', e.target.checked)}
                        />
                        Tidak
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Field Penilaian Lanjut - tanpa box, langsung di bawah */}
              <textarea 
                placeholder="Penilaian Lanjut"
                style={{
                  width: '100%',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  padding: '6px',
                  fontSize: '10px',
                  minHeight: '30px',
                  resize: 'vertical',
                  fontFamily: 'Arial, sans-serif',
                  outline: 'none',
                  backgroundColor: '#e9ecef',
                  color: '#6c757d',
                  boxSizing: 'border-box'
                }}
              ></textarea>
            </div>

            <div style={rightContentStyle}>
              <div style={pertanyaanSectionStyle}>
                <div style={{
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'flex-start', 
                  marginBottom: '20px',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  <div style={{fontSize: '12px', fontWeight: 'bold', color: '#333'}}>
                    Pertanyaan
                  </div>
                  <div style={{fontSize: '12px', fontWeight: 'bold', color: '#333', textAlign: 'center'}}>
                    Pencapaian
                  </div>
                </div>
                
                <div style={pertanyaanItemStyle}>
                  <div style={{display: 'flex', gap: isMobile ? '10px' : '20px', alignItems: 'flex-start', flexWrap: 'wrap'}}>
                    <div style={{flex: 1, minWidth: isMobile ? '100%' : 'auto'}}>
                      <div style={pertanyaanTextStyle}>
                        1. Anda seorang operator yunior busana, sebelum memulai kegiatan menjahit blus, anda perlu memperhatikan SOP kesehatan dan keselamatan kerja, apa yang akan anda lakukan supaya tidak terjadi kecelakaan kerja pada waktu menjahit blus? (JRES)
                      </div>
                    </div>
                    <div style={{
                      minWidth: isMobile ? '100%' : '120px', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'flex-start', 
                      gap: '10px'
                    }}>
                      <div style={{
                        display: 'flex', 
                        gap: isMobile ? '20px' : '30px', 
                        alignItems: 'center', 
                        width: '100%',
                        justifyContent: isMobile ? 'flex-start' : 'space-between'
                      }}>
                        <label style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#333', cursor: 'pointer'}}>
                          <input 
                            type="checkbox" 
                            style={{width: '16px', height: '16px', cursor: 'pointer'}}
                            checked={checkedItems['pencapaian_ya'] || false}
                            onChange={(e) => handleCheckboxChange('pencapaian_ya', e.target.checked)}
                          />
                          Ya
                        </label>
                        <label style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#333', cursor: 'pointer'}}>
                          <input 
                            type="checkbox" 
                            style={{width: '16px', height: '16px', cursor: 'pointer'}}
                            checked={checkedItems['pencapaian_tidak'] || false}
                            onChange={(e) => handleCheckboxChange('pencapaian_tidak', e.target.checked)}
                          />
                          Tidak
                        </label>
                      </div>
                      
                  
                    </div>
                  </div>

                  {/* Tanggapan di bawah */}
                  <div style={tanggapanContainerStyle}>
                    <div style={tanggapanLabelStyle}>Tanggapan:</div>
                    <textarea 
                      style={{
                        width: '100%',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        padding: '6px',
                        fontSize: '10px',
                        minHeight: '30px',
                        resize: 'vertical',
                        fontFamily: 'Arial, sans-serif',
                        outline: 'none',
                        backgroundColor: '#e9ecef',
                        boxSizing: 'border-box'
                      }}
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
              style={responsiveModalOkayStyle} 
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