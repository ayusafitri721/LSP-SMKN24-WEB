/* eslint-disable no-irregular-whitespace */
// src/DashboardAsesi/AK-03/AK-03.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';

// Custom hook to detect screen size
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};

const AK03 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 768px)');

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
    padding: isMobile ? '10px' : '20px',
  };

  const navContainerStyle = {
    backgroundColor: 'white',
    padding: isMobile ? '5px 10px' : '5px 15px',
    borderRadius: '15px 15px 40px 15px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    margin: isMobile ? '10px' : '15px 15px 0 15px',
    overflowX: 'auto',
    maxWidth: isMobile ? '100%' : '50%',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
  };

  const imageBannerStyle = {
    backgroundImage:
      "linear-gradient(rgba(255,140,0,0.7), rgba(255,140,0,0.7)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: isMobile ? '120px' : '160px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    marginTop: isMobile ? '15px' : '20px',
  };

  const logoTextStyle = {
    color: 'white',
    fontSize: isMobile ? '32px' : '48px',
    fontWeight: 'bold',
    margin: 0,
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    letterSpacing: isMobile ? '1px' : '2px',
  };

  const formContainerStyle = {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: isMobile ? '15px' : '25px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    marginTop: isMobile ? '15px' : '20px',
  };

  const headerSectionStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: isMobile ? '10px' : '20px',
    marginBottom: '20px',
    paddingBottom: '15px',
    borderBottom: '1px solid #ddd',
    flexDirection: isMobile ? 'column' : 'row',
    textAlign: isMobile ? 'center' : 'left',
    justifyContent: isMobile ? 'center' : 'flex-start',
    alignItems: isMobile ? 'center' : 'flex-start',
  };

  const logoContainerStyle = {
    flexShrink: 0,
  };

  const headerContentStyle = {
    flex: 1,
  };

  const titleStyle = {
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 'bold',
    margin: '0 0 5px 0',
    color: '#333',
    textAlign: 'center',
  };

  const subtitleStyle = {
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 'bold',
    margin: '0 0 15px 0',
    color: '#333',
    textAlign: 'center',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
    display: isMobile ? 'block' : 'table',
    overflowX: isMobile ? 'auto' : 'visible',
    whiteSpace: isMobile ? 'nowrap' : 'normal',
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
    padding: isMobile ? '20px' : '40px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    minWidth: isMobile ? '90%' : '320px',
    maxWidth: '400px',
    boxSizing: 'border-box',
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
    gap: isMobile ? '10px' : '15px',
    flexDirection: isMobile ? 'column' : 'row',
  };

  const listLinesStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'row' : 'column',
    gap: isMobile ? '4px' : '6px',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const checkCircleStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#FF8C00',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: isMobile ? '0' : '6px',
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

  // Helper component for mobile view to display table rows as cards
  const MobileTable = ({ data }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {data.map((item) => (
        <div
          key={item.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            backgroundColor: 'white',
          }}
        >
          <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>
            {item.text}
          </div>
          <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={formData.isAnswered[item.id] === 'ya'}
                onChange={() => handleCheckboxChange(item.id, 'ya')}
              />
              <span style={{ marginLeft: '8px' }}>Ya</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={formData.isAnswered[item.id] === 'tidak'}
                onChange={() => handleCheckboxChange(item.id, 'tidak')}
              />
              <span style={{ marginLeft: '8px' }}>Tidak</span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={pageContainerStyle}>
      {showWarning && (
        <div style={warningNotificationStyle}>
          Silakan isi dan kirim formulir FR.AK.03 terlebih dahulu!
        </div>
      )}

      <div style={navContainerStyle}>
        <NavAsesi activeTab="FR.AK.03" />
      </div>

      <div style={imageBannerStyle}>
        <h1 style={logoTextStyle}>MyLSP</h1>
      </div>

      <div style={formContainerStyle}>
        <div style={headerSectionStyle}>
          <div style={logoContainerStyle}>
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
            <div style={titleStyle}>FR.AK.03</div>
            <div style={subtitleStyle}>UMPAN BALIK DAN CATATAN ASESMEN</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td
                  style={{ ...tableTopCellStyle, width: '25%', verticalAlign: 'middle' }}
                >
                  Skema Sertifikasi (KKNI/OKUPASI/KLASTER)
                </td>
                <td style={{ ...tableTopCellStyle, width: '0%' }}></td>
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
                <td style={{ ...tableTopCellStyle, width: '25%' }}></td>
                <td style={{ ...tableTopCellStyle, width: '0%' }}></td>
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

          <p style={{ textAlign: 'center' }}>Umpan balik dari Asesi (diisi oleh Asesi setelah pengambilan keputusan)</p>

          <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
            {isMobile ? (
              <MobileTable
                data={[
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
                ]}
              />
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ ...tableHeaderStyle, width: '70%', border: '1px solid #ccc' }}>Komponen</th>
                    <th style={{ ...tableHeaderStyle, width: '15%', border: '1px solid #ccc', textAlign: 'center' }}>Ya</th>
                    <th style={{ ...tableHeaderStyle, width: '15%', border: '1px solid #ccc', textAlign: 'center' }}>Tidak</th>
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
                      <td style={tableCellStyle}>{item.text}</td>
                      <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={formData.isAnswered[item.id] === 'ya'}
                          onChange={() => handleCheckboxChange(item.id, 'ya')}
                        />
                      </td>
                      <td style={{ ...tableCellStyle, textAlign: 'center' }}>
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
            )}
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
                resize: 'vertical',
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
                  <div style={{ width: isMobile ? '30px' : '60px', height: '12px', backgroundColor: '#FF8C00', borderRadius: '6px' }}></div>
                  <div style={{ width: isMobile ? '50px' : '80px', height: '12px', backgroundColor: '#FF8C00', borderRadius: '6px' }}></div>
                  <div style={{ width: isMobile ? '70px' : '100px', height: '12px', backgroundColor: '#FF8C00', borderRadius: '6px' }}></div>
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