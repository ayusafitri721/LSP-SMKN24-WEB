// src/DashboardAsesi/AK-01/AK-01.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';

// Modal styles
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
  backgroundColor: 'white',
  borderRadius: '20px',
  padding: '40px',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  minWidth: '320px',
  maxWidth: '400px',
};

const iconContainerStyle = {
  marginBottom: '20px',
};

const successIconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 20px',
  position: 'relative',
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
  marginTop: '6px',
};

const checkMarkStyle = {
  color: 'white',
  fontSize: '24px',
  fontWeight: 'bold',
};

const modalTitleStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '8px',
  lineHeight: '1.3',
};

const modalSubtitleStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '30px',
  lineHeight: '1.3',
};

const dividerStyle = {
  height: '2px',
  backgroundColor: '#ddd',
  margin: '25px 0',
  borderRadius: '1px',
};

const okayButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#666',
  cursor: 'pointer',
  padding: '10px 20px',
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
    "linear-gradient(rgba(255,165,0,0.8), rgba(255,140,0,0.8)), url('/image/auditoriums.png')",
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

const headerSectionStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '20px',
  marginBottom: '20px',
  paddingBottom: '15px',
  borderBottom: '1px solid #ddd',
};

const logoContainerStyle = {
  flexShrink: 0,
};

const logoStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '8px',
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

const transparentBoxStyle = {
  backgroundColor: 'rgba(240, 240, 240, 0.7)',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  marginBottom: '15px',
};

const boxTitleStyle = {
  fontSize: '12px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '8px',
};

const boxTextStyle = {
  fontSize: '11px',
  color: '#333',
  lineHeight: '1.4',
  textAlign: 'center',
  fontWeight: 'bold',
};

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

const checkboxGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '8px 15px',
  marginBottom: '15px',
};

const checkboxItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  fontSize: '12px',
  color: '#333',
  lineHeight: '1.4',
};

const checkboxStyle = {
  marginRight: '6px',
  marginTop: '1px',
  flexShrink: 0,
};

const scheduleRowStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '8px',
};

const scheduleLabelStyle = {
  width: '100px',
  fontSize: '13px',
  color: '#333',
  fontWeight: '500',
};

const scheduleInputStyle = {
  flex: 1,
  padding: '4px 8px',
  border: '1px solid #ddd',
  borderRadius: '3px',
  fontSize: '11px',
  marginLeft: '10px',
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
  float: 'right',
  marginTop: '20px',
};

const sectionTextStyle = {
  fontSize: '13px',
  color: '#333',
  lineHeight: '1.5',
  marginBottom: '12px',
};

const AK01 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    skemaSertifikasi: '',
    judulUnit: '',
    nomorUnit: '',
    tuk: 'Sewaktu/Tempat Kerja/Mandiri*',
    namaAsesor: '',
    namaAsesi: '',
    checkedItems: {
      portfolio: false,
      observasi: false,
      pertanyaan: false,
      reviewProduk: false,
      kegiatanTerstruktur: false,
      pertanyaanTertulis: false,
      wawancara: false,
    },
    tanggal: '',
    waktu: '',
    tukPelaksanaan: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  // Block navigation jika form belum di-submit - mengikuti pola APL-02
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
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/fr-ak-01')) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalPushState.apply(window.history, args);
    };

    window.history.replaceState = function(...args) {
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/fr-ak-01')) {
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

  const handleCheckboxChange = (item) => {
    setFormData((prev) => ({
      ...prev,
      checkedItems: {
        ...prev.checkedItems,
        [item]: !prev.checkedItems[item],
      },
    }));
  };

  const isFormValid = () => {
    const requiredFields = [
      'judulUnit',
      'nomorUnit',
      'namaAsesor',
      'namaAsesi',
      'tanggal',
      'waktu',
      'tukPelaksanaan',
    ];
    const hasRequiredFields = requiredFields.every((field) => formData[field].trim() !== '');
    const hasCheckedItems = Object.values(formData.checkedItems).some((item) => item);
    return hasRequiredFields && hasCheckedItems;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log('Form FR.AK.01 submitted:', formData);
      localStorage.setItem('ak01FormData', JSON.stringify(formData)); // Save to localStorage
      setIsFormSubmitted(true);
      setShowModal(true);
    } else {
      alert('Harap lengkapi semua field yang diperlukan dan pilih minimal satu bukti yang akan dikumpulkan.');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Auto redirect ke AK-04 setelah close popup - mengikuti pola APL-02
    setTimeout(() => {
      navigate('/dashboard-asesi/ak-04');
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
            borderRadius: '5px';
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
          Silakan isi dan kirim formulir FR.AK.01 terlebih dahulu!
        </div>
      )}

      <div style={navContainerStyle} className="nav-scrollbar">
        <NavAsesi activeTab="FR.AK.01" />
      </div>

      <div style={imageBannerStyle}>
        <h1 style={logoTextStyle}>MyLSP</h1>
      </div>

      <div style={contentCardStyle}>
        <div style={headerSectionStyle}>
          <div style={logoContainerStyle}>
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
            <div style={titleStyle}>FR.AK.01</div>
            <div style={subtitleStyle}>PERSETUJUAN ASESMEN DAN KERAHASIAAN</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
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

          <div style={transparentBoxStyle}>
            <div style={boxTextStyle}>
              Persetujuan Asesmen ini untuk menjamin bahwa Asesi telah diberi arahan secara rinci tentang perencanaan dan
              proses asesmen.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
              <div style={{...transparentBoxStyle, minHeight: '120px', padding: '18px'}}>
                <div style={sectionTextStyle}>
                  <strong>TUK:</strong> {formData.tuk}{' '}
                  <span style={{ color: '#999', fontSize: '11px', fontWeight: 'normal' }}>
                    (coret yang tidak perlu)
                  </span>
                </div>
                <div style={sectionTextStyle}>
                  <strong>Nama Asesor:</strong>
                  <input
                    type="text"
                    style={{ ...inputFieldStyle, border: '1px solid #ddd', padding: '6px 10px', marginLeft: '10px', fontSize: '13px' }}
                    value={formData.namaAsesor}
                    onChange={(e) => handleInputChange('namaAsesor', e.target.value)}
                  />
                </div>
                <div style={sectionTextStyle}>
                  <strong>Nama Asesi:</strong>
                  <input
                    type="text"
                    style={{ ...inputFieldStyle, border: '1px solid #ddd', padding: '6px 10px', marginLeft: '10px', fontSize: '13px' }}
                    value={formData.namaAsesi}
                    onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                  />
                </div>
              </div>

              <div style={{...transparentBoxStyle, minHeight: '280px', padding: '18px'}}>
                <div style={{ ...sectionTextStyle, fontWeight: 'bold', marginBottom: '18px', fontSize: '14px' }}>
                  Bukti yang akan dikumpulkan:
                </div>
                <div style={checkboxGridStyle}>
                  {[
                    { key: 'portfolio', label: 'Hasil verifikasi Portofolio' },
                    { key: 'reviewProduk', label: 'Hasil review produk' },
                    { key: 'observasi', label: 'Hasil Observasi Langsung' },
                    { key: 'kegiatanTerstruktur', label: 'Hasil kegiatan Terstruktur' },
                    { key: 'pertanyaan', label: 'Hasil Pertanyaan Lisan' },
                    { key: 'pertanyaanTertulis', label: 'Hasil Pertanyaan Tertulis' },
                    { key: 'wawancara', label: 'Hasil Pertanyaan wawancara' },
                  ].map((item) => (
                    <div key={item.key} style={checkboxItemStyle}>
                      <input
                        type="checkbox"
                        style={checkboxStyle}
                        checked={formData.checkedItems[item.key]}
                        onChange={() => handleCheckboxChange(item.key)}
                      />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{...transparentBoxStyle, minHeight: '140px', padding: '18px'}}>
                <div style={{ ...sectionTextStyle, fontWeight: 'bold', marginBottom: '18px', fontSize: '14px' }}>
                  Pelaksanaan asesmen disepakati pada:
                </div>
                <div style={scheduleRowStyle}>
                  <span style={scheduleLabelStyle}>Hari/Tanggal:</span>
                  <input
                    type="text"
                    style={{...scheduleInputStyle, fontSize: '12px', padding: '6px 10px'}}
                    value={formData.tanggal}
                    onChange={(e) => handleInputChange('tanggal', e.target.value)}
                  />
                </div>
                <div style={scheduleRowStyle}>
                  <span style={scheduleLabelStyle}>Waktu:</span>
                  <input
                    type="text"
                    style={{...scheduleInputStyle, fontSize: '12px', padding: '6px 10px'}}
                    value={formData.waktu}
                    onChange={(e) => handleInputChange('waktu', e.target.value)}
                  />
                </div>
                <div style={scheduleRowStyle}>
                  <span style={scheduleLabelStyle}>TUK:</span>
                  <input
                    type="text"
                    style={{...scheduleInputStyle, fontSize: '12px', padding: '6px 10px'}}
                    value={formData.tukPelaksanaan}
                    onChange={(e) => handleInputChange('tukPelaksanaan', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{...transparentBoxStyle, minHeight: '120px'}}>
                <div style={boxTitleStyle}>Asesi:</div>
                <div style={{ ...boxTextStyle, textAlign: 'justify', fontWeight: 'normal' }}>
                  Bahwa saya telah mendapatkan penjelasan terkait hak dan prosedur banding asesmen dari asesor.
                </div>
              </div>

              <div style={{...transparentBoxStyle, minHeight: '280px'}}>
                <div style={boxTitleStyle}>Asesor:</div>
                <div style={{ ...boxTextStyle, textAlign: 'justify', fontWeight: 'normal' }}>
                  Menyatakan tidak akan membuka hasil pekerjaan yang diperoleh karena penguasaan saya sebagai Asesor dalam
                  pekerjaan Asesmen kepada siapapun atau organisasi manapun selain kepada pihak yang berwenang sehubungan
                  dengan kewajiban saya sebagai Asesor yang ditugaskan oleh LSP.
                </div>
              </div>

              <div style={{...transparentBoxStyle, minHeight: '140px'}}>
                <div style={boxTitleStyle}>Asesi:</div>
                <div style={{ ...boxTextStyle, textAlign: 'justify', fontWeight: 'normal' }}>
                  Saya setuju mengikuti Asesmen dengan pemahaman bahwa informasi yang dikumpulkan hanya digunakan untuk
                  pengembangan profesional dan hanya dapat diakses oleh orang tertentu saja.
                </div>
              </div>
            </div>
          </div>

          <button type="submit" style={submitButtonStyle}>
            Kirim
          </button>
          <div style={{ clear: 'both', marginBottom: '20px' }}></div>
        </form>
      </div>

      {showModal && (
        <div style={modalOverlayStyle} onClick={handleCloseModal}>
          <div style={modalContainerStyle} onClick={(e) => e.stopPropagation()}>
            <div style={iconContainerStyle}>
              <div style={successIconStyle}>
                <div style={listLinesStyle}>
                  <div style={{ width: '60px', height: '12px', backgroundColor: '#FF8C00', borderRadius: '6px' }}></div>
                  <div style={{ width: '80px', height: '12px', backgroundColor: '#FF8C00', borderRadius: '6px' }}></div>
                  <div style={{ width: '100px', height: '12px', backgroundColor: '#FF8C00', borderRadius: '6px' }}></div>
                </div>
                <div style={checkCircleStyle}>
                  <div style={checkMarkStyle}>✓</div>
                </div>
              </div>
            </div>
            <div style={modalTitleStyle}>Jawaban Anda</div>
            <div style={modalSubtitleStyle}>Berhasil Direkam!</div>
            <div style={dividerStyle}></div>
            <button style={okayButtonStyle} onClick={handleCloseModal}>
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AK01;