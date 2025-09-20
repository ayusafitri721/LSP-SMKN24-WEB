/* eslint-disable no-irregular-whitespace */
// src/DashboardAsesi/AK-03/AK-03.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';

const AK03 = () => {
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
    isAnswered: {
      q1: null,
      q2: null,
      q3: null,
      q4: null,
      q5: null,
      q6: null,
      q7: null,
      q8: null,
      q9: null,
      q10: null,
    },
    catatan: '',
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
      if (!isFormSubmitted && !newPath.includes('/dashboard-asesi/fr-ak-03')) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalPushState.apply(window.history, args);
    };

    window.history.replaceState = function(...args) {
      const newPath = args[2];
      if (!isFormSubmitted && !newPath.includes('/dashboard-asesi/fr-ak-03')) {
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

  const handleCheckboxChange = (question, value) => {
    setFormData((prev) => ({
      ...prev,
      isAnswered: {
        ...prev.isAnswered,
        [question]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form FR.AK.03 submitted:', formData);
    localStorage.setItem('ak03FormData', JSON.stringify(formData));
    setIsFormSubmitted(true);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => {
      navigate('/dashboard-asesi/ak-05');
    }, 300);
  };

  // Styles as JavaScript objects
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

  const tableCellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  const tableTopCellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    verticalAlign: 'top',
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

  return (
    <div style={pageContainerStyle}>
      <style>
        {`
          /* Responsive Styles */
          @media (max-width: 768px) {
            .nav-container {
              max-width: 100%;
              margin: 10px;
              border-radius: 15px;
            }
            .image-banner {
              height: 120px;
              margin-top: 15px;
            }
            .logo-text {
              font-size: 32px;
              letter-spacing: 1px;
            }
            .form-container {
              padding: 15px;
            }
            .header-section {
              flex-direction: column;
              align-items: center;
              gap: 10px;
              text-align: center;
            }
            .logo-img {
              width: 60px;
              height: 60px;
            }
            .table-responsive {
              overflow-x: auto;
            }
            .form-table {
              width: 100%;
              display: block;
              overflow-x: auto;
              white-space: nowrap;
            }
            .form-table tr {
              display: block;
              margin-bottom: 10px;
            }
            .form-table td {
              display: block;
              width: 100%;
              box-sizing: border-box;
            }
            
            /* Responsive styles for the main table (desktop view) */
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 20px;
            }
            th, td {
              padding: 8px;
              text-align: left;
              border: 1px solid #ddd;
            }
            thead {
              display: table-header-group;
            }
            tr {
              display: table-row;
            }

            /* Responsive styles for the question table */
            .question-table {
              width: 100%;
              border-collapse: collapse;
            }
            .question-table th, .question-table td {
              border: 1px solid #ccc;
              padding: 8px;
            }
            .question-table thead {
              display: none;
            }
            .question-table tr {
              display: block;
              margin-bottom: 15px;
              border: 1px solid #ccc;
              border-radius: 8px;
              padding: 10px;
            }
            .question-table td {
              display: block;
              text-align: left;
              border: none;
              border-bottom: 1px solid #eee;
            }
            .question-table td:last-child {
              border-bottom: none;
            }
            .question-table td:before {
              content: attr(data-label);
              font-weight: bold;
              display: block;
              margin-bottom: 5px;
            }
          }
          
          @media (max-width: 480px) {
            .form-container {
              padding: 10px;
            }
            .modal-container {
              min-width: 90%;
              padding: 20px;
            }
            .success-icon {
              flex-direction: column;
              gap: 10px;
            }
            .list-lines {
              flex-direction: row;
              justify-content: center;
              gap: 4px;
            }
            .line, .line-medium, .line-long {
              height: 8px;
            }
          }

          /* General Utility Classes */
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
          Silakan isi dan kirim formulir FR.AK.03 terlebih dahulu!
        </div>
      )}

      <div style={navContainerStyle} className="nav-scrollbar">
        <NavAsesi activeTab="FR.AK.03" />
      </div>

      <div style={imageBannerStyle}>
        <h1 style={logoTextStyle}>
          MyLSP
        </h1>
      </div>

      <div style={formContainerStyle}>
        <div style={headerSectionStyle}>
          <div style={logoContainerStyle}>
            <img
              src="/src/img/image 12.png"
              alt="LSP Logo"
              className="logo-img"
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
            <div style={titleStyle}>FR.AK.03</div>
            <div style={subtitleStyle}>UMPAN BALIK DAN CATATAN ASESMEN</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td style={{ ...tableTopCellStyle, width: '25%' }} rowSpan="2" data-label="Skema Sertifikasi">Skema Sertifikasi (KKNI/OKUPASI/KLASTER)</td>
                <td style={{ ...tableTopCellStyle, width: '0%' }} rowSpan="2"></td>
                <td style={{ ...tableCellStyle, width: '15%' }} data-label="Judul Unit">Judul Unit</td>
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
                <td style={{ ...tableCellStyle, width: '15%' }} data-label="Kode Unit">Kode Unit</td>
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
                <td style={{ ...tableCellStyle, width: '25%' }} data-label="TUK">TUK</td>
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
                <td style={{ ...tableCellStyle, width: '25%' }} data-label="Nama Asesor">Nama Asesor</td>
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
                <td style={{ ...tableCellStyle, width: '25%' }} data-label="Nama Asesi">Nama Asesi</td>
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
                <td style={{ ...tableCellStyle, width: '25%' }} data-label="Tanggal">Tanggal</td>
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

          <p style={{ textAlign: 'center' }}>Umpan balik dari Asesi (diisi oleh Asesi setelah pengambilan keputusan)</p>

          <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
            <table className="question-table" style={tableStyle}>
              <thead>
                <tr>
                  <th style={{ ...tableHeaderStyle, width: '70%', border: '1px solid #ccc' }}>Komponen</th>
                  <th style={{ ...tableHeaderStyle, width: '15%', border: '1px solid #ccc', textAlign: 'center' }}>
                    Ya
                  </th>
                  <th style={{ ...tableHeaderStyle, width: '15%', border: '1px solid #ccc', textAlign: 'center' }}>
                    Tidak
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 'q1', text: 'Saya mendapatkan penjelasan yang cukup memadai mengenai proses asesmen/uji kompetensi.' },
                  { id: 'q2', text: 'Saya diberikan kesempatan untuk mempelajari standar kompetensi yang akan diujikan dan menilai diri sendiri terhadap pencapaiannya.' },
                  { id: 'q3', text: 'Asesor memberikan kesempatan untuk mendiskusikan/menegosiasikan metoda, instrumen dan sumber asesmen serta jadwal asesmen.' },
                  { id: 'q4', text: 'Asesor berusaha menggali seluruh bukti pendukung yang sesuai dengan latar belakang pelatihan dan pengalaman yang saya miliki.' },
                  { id: 'q5', text: 'Saya sepenuhnya diberikan kesempatan untuk mendemonstrasikan kompetensi yang saya miliki selama asesmen.' },
                  { id: 'q6', text: 'Saya mendapatkan penjelasan yang memadai mengenai keputusan asesmen.' },
                  { id: 'q7', text: 'Asesor memberikan umpan balik yang mendukung setelah asesmen serta tidak lanjutnya.' },
                  { id: 'q8', text: 'Asesor bersama saya mempelajari semua dokumen asesmen serta menandatanganinya.' },
                  { id: 'q9', text: 'Saya mendapatkan jaminan kerahasiaan hasil asesmen serta penjelasan penanganan dokumen asesmen.' },
                  { id: 'q10', text: 'Asesor menggunakan keterampilan komunikasi yang efektif selama asesmen.' },
                ].map((item) => (
                  <tr key={item.id}>
                    <td style={tableCellStyle} data-label="Komponen">{item.text}</td>
                    <td style={{ ...tableCellStyle, textAlign: 'center' }} data-label="Ya">
                      <input
                        type="checkbox"
                        checked={formData.isAnswered[item.id] === 'ya'}
                        onChange={() => handleCheckboxChange(item.id, 'ya')}
                      />
                    </td>
                    <td style={{ ...tableCellStyle, textAlign: 'center' }} data-label="Tidak">
                      <input
                        type="checkbox"
                        checked={formData.isAnswered[item.id] === 'tidak'}
                        onChange={() => handleCheckboxChange(item.id, 'tidak')}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '20px' }}>
            <p>Catatan/ komentar lainnya (apabila ada):</p>
            <textarea
              style={{
                width: '100%',
                minHeight: '100px',
                padding: '10px',
                boxSizing: 'border-box',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
              value={formData.catatan}
              onChange={(e) => handleInputChange('catatan', e.target.value)}
            ></textarea>
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

export default AK03;