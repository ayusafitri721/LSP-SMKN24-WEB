/* eslint-disable no-irregular-whitespace */
// src/DashboardAsesi/AK-05/AK-05.jsx

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

// Existing styles
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

const formContainerStyle = {
  backgroundColor: 'white',
  borderRadius: '15px',
  padding: '25px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  marginTop: '20px',
};

// Header styles from APL-02
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

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '20px',
};

const tableHeaderStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  backgroundColor: '#f2f2f2',
  textAlign: 'left',
};

const tableTopCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  verticalAlign: 'top',
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};

const buttonStyle = {
  backgroundColor: '#1a73e8',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
};

const greyButtonStyle = {
  backgroundColor: '#ccc',
  color: '#666',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'not-allowed',
  fontSize: '16px',
  fontWeight: 'bold',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
};

const AK05 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    skemaSertifikasi: '',
    tuk: '',
    namaAsesor: '',
    namaAsesi: '',
    tanggal: '',
    judulUnit: '',
    kodeUnit: '',
    namaAsesi1: '',
    rekomendasi1: null,
    keterangan1: '',
    namaAsesi2: '',
    rekomendasi2: null,
    keterangan2: '',
    namaAsesi3: '',
    rekomendasi3: null,
    keterangan3: '',
    aspekNegatif: '',
    pencatatanPenolakan: '',
    saranPerbaikan: '',
    namaAsesorAkhir: '',
    noRegAsesor: '',
    catatanAkhir: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

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
      const newPath = args[2];
      if (!isFormSubmitted && !newPath.includes('/dashboard-asesi/fr-ak-05')) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalPushState.apply(window.history, args);
    };

    window.history.replaceState = function(...args) {
      const newPath = args[2];
      if (!isFormSubmitted && !newPath.includes('/dashboard-asesi/fr-ak-05')) {
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
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (row, value) => {
    setFormData(prev => ({
      ...prev,
      [`rekomendasi${row}`]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form FR.AK.05 submitted:', formData);
    localStorage.setItem('ak05FormData', JSON.stringify(formData));
    setIsFormSubmitted(true);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => {
      navigate('/dashboard-asesi/ia-09');
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

      {showWarning && (
        <div style={warningNotificationStyle}>
          Silakan isi dan kirim formulir FR.AK.05 terlebih dahulu!
        </div>
      )}

      <div style={navContainerStyle} className="nav-scrollbar">
        <NavAsesi activeTab="FR.AK.05" />
      </div>

      <div style={imageBannerStyle}>
        <h1 style={logoTextStyle}>
          MyLSP
        </h1>
      </div>

      <div style={formContainerStyle}>
        {/* Tambahan: Header dengan Logo dan Judul */}
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
            <div style={titleStyle}>FR.AK.05</div>
            <div style={subtitleStyle}>LAPORAN ASESMEN</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td style={{ ...tableTopCellStyle, width: '25%' }} rowSpan="2">Skema Sertifikasi (KKNI/OKUPASI/KLASTER)</td>
                <td style={{ ...tableTopCellStyle, width: '0%' }} rowSpan="2"></td>
                
                <td style={{ ...tableCellStyle, width: '15%' }}>Judul Unit</td>
                <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
                <td style={{ ...tableCellStyle, width: '34%' }}>
                  <input
                    type="text"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.judulUnit}
                    onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, width: '15%' }}>Kode Unit</td>
                <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
                <td style={{ ...tableCellStyle, width: '34%' }}>
                  <input
                    type="text"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.kodeUnit}
                    onChange={(e) => handleInputChange('kodeUnit', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, width: '25%' }}>TUK</td>
                <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
                <td style={{ ...tableCellStyle, width: '74%' }} colSpan="4">
                  <input
                    type="text"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.tuk}
                    onChange={(e) => handleInputChange('tuk', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, width: '25%' }}>Nama Asesor</td>
                <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
                <td style={{ ...tableCellStyle, width: '74%' }} colSpan="4">
                  <input
                    type="text"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.namaAsesor}
                    onChange={(e) => handleInputChange('namaAsesor', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, width: '25%' }}>Nama Asesi</td>
                <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
                <td style={{ ...tableCellStyle, width: '74%' }} colSpan="4">
                  <input
                    type="text"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.namaAsesi}
                    onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, width: '25%' }}>Tanggal</td>
                <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
                <td style={{ ...tableCellStyle, width: '74%' }} colSpan="4">
                  <input
                    type="date"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.tanggal}
                    onChange={(e) => handleInputChange('tanggal', e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
            <table style={{ ...tableStyle, border: 'none' }}>
              <thead>
                <tr>
                  <th style={{ ...tableHeaderStyle, width: '5%', border: '1px solid #ccc', textAlign: 'center' }}>No</th>
                  <th style={{ ...tableHeaderStyle, width: '25%', border: '1px solid #ccc', textAlign: 'center' }}>Nama Asesi</th>
                  <th style={{ ...tableHeaderStyle, width: '20%', border: '1px solid #ccc', textAlign: 'center' }}>Rekomendasi</th>
                  <th style={{ ...tableHeaderStyle, width: '50%', border: '1px solid #ccc', textAlign: 'center' }}>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((row) => (
                  <tr key={row}>
                    <td style={{ ...tableCellStyle, textAlign: 'center' }}>{row}.</td>
                    <td style={tableCellStyle}>
                      <input
                        type="text"
                        style={{ width: '100%', border: 'none', outline: 'none' }}
                        value={formData[`namaAsesi${row}`]}
                        onChange={(e) => handleInputChange(`namaAsesi${row}`, e.target.value)}
                      />
                    </td>
                    <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                      K <input type="checkbox" checked={formData[`rekomendasi${row}`] === 'K'} onChange={() => handleCheckboxChange(row, 'K')} />
                      &nbsp; &nbsp; &nbsp;
                      BK <input type="checkbox" checked={formData[`rekomendasi${row}`] === 'BK'} onChange={() => handleCheckboxChange(row, 'BK')} />
                    </td>
                    <td style={tableCellStyle}>
                      <input
                        type="text"
                        style={{ width: '100%', border: 'none', outline: 'none' }}
                        value={formData[`keterangan${row}`]}
                        onChange={(e) => handleInputChange(`keterangan${row}`, e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: '12px', marginTop: '10px' }}>
            **tuliskan Kode dan Judul Unit Kompetensi yang dinyatakan BK bila mengses satu skema
          </p>

          <div style={{ marginTop: '20px' }}>
            <p>1. Aspek Negatif dan Positif dalam Asesmen</p>
            <textarea
              style={{
                width: '100%',
                minHeight: '100px',
                padding: '10px',
                boxSizing: 'border-box',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
              value={formData.aspekNegatif}
              onChange={(e) => handleInputChange('aspekNegatif', e.target.value)}
            ></textarea>
          </div>

          <div style={{ marginTop: '20px' }}>
            <p>2. Pencatatan Penolakan Hasil Asesmen</p>
            <textarea
              style={{
                width: '100%',
                minHeight: '100px',
                padding: '10px',
                boxSizing: 'border-box',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
              value={formData.pencatatanPenolakan}
              onChange={(e) => handleInputChange('pencatatanPenolakan', e.target.value)}
            ></textarea>
          </div>

          <div style={{ marginTop: '20px' }}>
            <p>3. Saran perbaikan: (Asesor/PersonilTerkait)</p>
            <textarea
              style={{
                width: '100%',
                minHeight: '100px',
                padding: '10px',
                boxSizing: 'border-box',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
              value={formData.saranPerbaikan}
              onChange={(e) => handleInputChange('saranPerbaikan', e.target.value)}
            ></textarea>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
            <div>
              <p>Nama Asesor</p>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '10px',
                  boxSizing: 'border-box',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
                value={formData.namaAsesorAkhir}
                onChange={(e) => handleInputChange('namaAsesorAkhir', e.target.value)}
              />
              <p style={{ marginTop: '10px' }}>No.Reg</p>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '10px',
                  boxSizing: 'border-box',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
                value={formData.noRegAsesor}
                onChange={(e) => handleInputChange('noRegAsesor', e.target.value)}
              />
              <p style={{ marginTop: '20px' }}>Persetujuan Asesi</p>
              <button
                type="button"
                style={{ ...greyButtonStyle, display: 'block', width: '100%' }}
                disabled
              >
                Approve
              </button>
            </div>
            <div>
              <p>Catatan</p>
              <textarea
                style={{
                  width: '100%',
                  minHeight: '200px',
                  padding: '10px',
                  boxSizing: 'border-box',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                }}
                value={formData.catatanAkhir}
                onChange={(e) => handleInputChange('catatanAkhir', e.target.value)}
              ></textarea>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <button type="submit" style={buttonStyle}>
              Kirim
            </button>
          </div>
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

export default AK05;