/* eslint-disable no-irregular-whitespace */
// src/DashboardAsesi/AK-03/AK-03.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';
import { submitFormAk03, fetchCsrfCookie, getAssesmentById, getFormAk03ByAssesi, getKomponen } from '../../api/api';
import { useDashboardAsesi } from '../../context/DashboardAsesiContext';

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
  const { currentAsesi, apl01Data, userAssessments } = useDashboardAsesi();

  const [formData, setFormData] = useState({
    skemaSertifikasi: '',
    tuk: '',
    namaAsesor: '',
    namaAsesi: '',
    tanggal: '',
    judulUnit: '',
    kodeUnit: '',
    catatan: '',
  });

  const [showModal, setShowModal] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [existingAk03, setExistingAk03] = useState(null);
  const [komponenList, setKomponenList] = useState([]);
  const [komponenAnswers, setKomponenAnswers] = useState({});

  // Helper derive asesi_id
  const deriveAsesiId = () => {
    const fromCurrent = currentAsesi?.id ?? currentAsesi?.assesi_id ?? currentAsesi?.user?.assesi_id;
    if (fromCurrent) return Number(fromCurrent);
    const fromApl01 = Array.isArray(apl01Data)
      ? (apl01Data[0]?.id ?? apl01Data[0]?.assesi_id)
      : (apl01Data?.id ?? apl01Data?.assesi_id);
    if (fromApl01) return Number(fromApl01);
    try {
      const lp = JSON.parse(localStorage.getItem('asesiProfile'));
      const fromLS = lp?.id ?? lp?.assesi_id;
      if (fromLS) return Number(fromLS);
    } catch {}
    return undefined;
  };

  // Prefill Nama Asesi berdasarkan context
  useEffect(() => {
    const pickFullName = (obj) => {
      if (!obj) return '';
      return (
        obj.fullname || obj.full_name || obj.nama_lengkap || obj.namaLengkap || obj.name || obj.username || ''
      );
    };

    let namaAsesi = pickFullName(currentAsesi) || pickFullName(currentAsesi?.user);
    if (!namaAsesi) {
      const a = Array.isArray(apl01Data) ? apl01Data[0] : apl01Data;
      namaAsesi = pickFullName(a) || pickFullName(a?.user);
    }

    if (namaAsesi) {
      setFormData(prev => ({
        ...prev,
        namaAsesi: prev.namaAsesi || namaAsesi,
      }));
    }
  }, [currentAsesi, apl01Data]);

  // Fetch komponen data from API
  useEffect(() => {
    (async () => {
      try {
        await fetchCsrfCookie();
        const res = await getKomponen();
        const komponenData = res.data?.data ?? res.data ?? [];
        console.log('AK-03: Fetched komponen data:', komponenData);
        setKomponenList(komponenData);
        
        // Initialize answers for all komponen
        const initialAnswers = {};
        komponenData.forEach(komponen => {
          initialAnswers[komponen.id] = {
            hasil: null,
            catatan_asesi: ''
          };
        });
        setKomponenAnswers(initialAnswers);
      } catch (error) {
        console.error('AK-03: Error fetching komponen:', error);
        // Fallback to empty array if API fails
        setKomponenList([]);
      }
    })();
  }, []);

  // Auto-populate fields from current assessment
  useEffect(() => {
    (async () => {
      const ua = Array.isArray(userAssessments) ? userAssessments : [];
      const chosen = ua.find((a) => a?.status === 'mengerjakan' || a?.status === 'active' || a?.status === 'scheduled') || ua[0];
      if (!chosen) return;
      let assesmentDetail = chosen?.assesment || null;
      if (!assesmentDetail && chosen?.assesment_id) {
        try {
          const res = await getAssesmentById(chosen.assesment_id);
          assesmentDetail = res.data?.data ?? null;
        } catch {}
      }
      if (!assesmentDetail) return;
      const tuk = assesmentDetail?.tuk || assesmentDetail?.lokasi || '';
      const namaAsesor = assesmentDetail?.assesor?.nama_lengkap || assesmentDetail?.assesor?.name || '';
      const tanggalRaw = assesmentDetail?.tanggal_mulai || assesmentDetail?.tanggal_assesment || '';
      const tanggal = tanggalRaw ? String(tanggalRaw).substring(0,10) : '';
      const units = assesmentDetail?.units || assesmentDetail?.unit_kompetensi || assesmentDetail?.unitKompetensi || [];
      const firstUnit = Array.isArray(units) ? units[0] : (units || {});
      const judulUnit = firstUnit?.judul || firstUnit?.nama || firstUnit?.name || '';
      const kodeUnit = firstUnit?.kode || firstUnit?.code || '';
      setFormData(prev => ({
        ...prev,
        tuk: prev.tuk || tuk,
        namaAsesor: prev.namaAsesor || namaAsesor,
        tanggal: prev.tanggal || tanggal,
        judulUnit: prev.judulUnit || judulUnit,
        kodeUnit: prev.kodeUnit || kodeUnit,
      }));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(userAssessments)]);

  // Fetch existing AK-03 for this asesi (if exists)
  useEffect(() => {
    (async () => {
      const asesiId = deriveAsesiId();
      if (!asesiId) return;
      try {
        await fetchCsrfCookie();
        const res = await getFormAk03ByAssesi(asesiId);
        const payload = res.data?.data ?? res.data ?? null;
        if (payload) setExistingAk03(payload);
      } catch (e) {
        // ignore 404
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAsesi, apl01Data]);

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

  const handleKomponenChange = (komponenId, field, value) => {
    setKomponenAnswers(prev => ({
      ...prev,
      [komponenId]: {
        ...prev[komponenId],
        [field]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Derive assesment_asesi_id dan skema_id dari userAssessments
    const ua = Array.isArray(userAssessments) ? userAssessments : [];
    const chosen = ua.find((a) => a?.status === 'mengerjakan' || a?.status === 'active' || a?.status === 'scheduled') || ua[0];
    const assesmentAsesiId = chosen?.id;
    let skemaId = chosen?.assesment?.skema_id || chosen?.skema_id || chosen?.schema_id;

    if (!skemaId && chosen?.assesment_id) {
      try {
        const res = await getAssesmentById(chosen.assesment_id);
        skemaId = res.data?.data?.skema_id ?? skemaId;
      } catch {}
    }

    if (!assesmentAsesiId || !skemaId) {
      alert('Tidak menemukan assesment aktif untuk dikaitkan (assesment_asesi_id/skema_id). Silakan pilih jadwal terlebih dahulu di dashboard atau muat ulang halaman.');
      return;
    }

    try {
      await fetchCsrfCookie();
      
      // Convert komponenAnswers to the format expected by backend
      const komponenData = Object.entries(komponenAnswers).map(([komponenId, answer]) => ({
        komponen_id: Number(komponenId),
        hasil: answer.hasil, // 'ya' or 'tidak'
        catatan_asesi: answer.catatan_asesi || null
      })).filter(item => item.hasil !== null); // Only include answered items
      
      if (komponenData.length === 0) {
        alert('Silakan jawab minimal satu komponen sebelum mengirim.');
        return;
      }
      
      const payload = {
        assesment_asesi_id: Number(assesmentAsesiId),
        catatan_tambahan: formData.catatan || null,
        komponen: komponenData
      };
      
      console.debug('AK-03 submit payload:', payload);
      await submitFormAk03(payload);
      setIsFormSubmitted(true);
      setShowModal(true);
    } catch (err) {
      const status = err?.response?.status;
      const message = err?.response?.data?.message || err?.message;
      const errors = err?.response?.data?.errors;
      console.error('Gagal submit FR.AK.03 ke server:', { status, message, errors, err });
      try {
        localStorage.setItem('ak03FormData', JSON.stringify({ assesment_asesi_id: assesmentAsesiId, skema_id: skemaId, form: formData }));
      } catch {}
      let alertMsg = 'Gagal mengirim ke server. Data disimpan sementara di perangkat Anda. Coba lagi nanti.';
      if (status) alertMsg += `\nStatus: ${status}`;
      if (message) alertMsg += `\nPesan: ${message}`;
      if (errors && typeof errors === 'object') {
        const detail = Object.entries(errors)
          .map(([k, v]) => `- ${k}: ${Array.isArray(v) ? v.join(', ') : String(v)}`)
          .join('\n');
        if (detail) alertMsg += `\nDetail:\n${detail}`;
      }
      alert(alertMsg);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => {
      navigate('/dashboard-asesi/ak-04');
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
                checked={komponenAnswers[item.id]?.hasil === 'ya'}
                onChange={() => handleKomponenChange(item.id, 'hasil', 'ya')}
              />
              <span style={{ marginLeft: '8px' }}>Ya</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={komponenAnswers[item.id]?.hasil === 'tidak'}
                onChange={() => handleKomponenChange(item.id, 'hasil', 'tidak')}
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
                data={komponenList.map(komponen => ({
                  id: komponen.id,
                  text: komponen.nama || komponen.name || komponen.deskripsi || komponen.description || `Komponen ${komponen.id}`
                }))}
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
                  {komponenList.map((komponen) => (
                    <tr key={komponen.id}>
                      <td style={tableCellStyle}>
                        {komponen.nama || komponen.name || komponen.deskripsi || komponen.description || `Komponen ${komponen.id}`}
                      </td>
                      <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={komponenAnswers[komponen.id]?.hasil === 'ya'}
                          onChange={() => handleKomponenChange(komponen.id, 'hasil', 'ya')}
                        />
                      </td>
                      <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                        <input
                          type="checkbox"
                          checked={komponenAnswers[komponen.id]?.hasil === 'tidak'}
                          onChange={() => handleKomponenChange(komponen.id, 'hasil', 'tidak')}
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