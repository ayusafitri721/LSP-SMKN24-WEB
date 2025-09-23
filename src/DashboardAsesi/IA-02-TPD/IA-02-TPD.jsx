// src/DashboardAsesi/IA-02/IA-02.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';
import { useDashboardAsesi } from '../../context/DashboardAsesiContext';
import { getAssesmentById, submitFormIa02, getFormIa02ByAssesi } from '../../api/api';

const pageContainerStyle = {
  backgroundColor: 'white',
  fontFamily: 'Arial, sans-serif',
  padding: '15px',
  minHeight: '100vh',
};

const headerSectionStyle = {
  backgroundImage: "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '0 0 40px 40px',
  overflow: 'hidden',
  marginBottom: '0',
};

const navContainerStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  padding: '5px 15px',
  borderRadius: '15px 15px 40px 15px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  margin: '0 15px 0 0',
  overflowX: 'auto',
  maxWidth: '50%',
  whiteSpace: 'nowrap',
  backdropFilter: 'blur(10px)',
  position: 'relative',
  zIndex: 2,
};

const logoContainerStyle = {
  height: '180px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
  padding: '28px',
  boxShadow: 'none',
  marginTop: '0',
  border: 'none',
};

const headerWithTextStyle = {
  marginBottom: '18px',
  paddingBottom: '16px',
  borderBottom: '2px solid #f1f5f9',
  textAlign: 'center',
};

const formSectionStyle = { marginTop: '18px' };

const formGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '22px',
  marginBottom: '18px',
};

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  marginTop: '6px',
  marginBottom: '14px',
  borderRadius: '8px',
  border: '2px solid #e6edf3',
  fontSize: '14px',
  transition: 'all 0.15s ease',
  backgroundColor: '#fbfbfb',
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'Arial, sans-serif',
  color: '#0f172a',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
};

const labelStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#0f172a',
  display: 'block',
  marginBottom: '6px',
  lineHeight: '1.3',
};

const instructionStyle = {
  backgroundColor: '#fff7ed',
  padding: '18px',
  borderRadius: '10px',
  marginTop: '14px',
  border: '1px solid #ffedd5',
  borderLeft: '5px solid #fb923c',
};

const tableContainerStyle = {
  overflowX: 'auto',
  marginTop: '14px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.03)',
  border: '1px solid #e6edf3',
  backgroundColor: 'white',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  backgroundColor: 'white',
};

const thStyle = {
  padding: '14px 16px',
  textAlign: 'left',
  backgroundColor: '#f8fafc',
  fontWeight: 'bold',
  fontSize: '12px',
  color: '#0f172a',
  borderBottom: '2px solid #e6edf3',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
};

const tdStyle = {
  padding: '12px 16px',
  textAlign: 'left',
  fontSize: '14px',
  color: '#475569',
  backgroundColor: 'white',
  borderBottom: '1px solid #f3f6f9',
  lineHeight: '1.5',
  verticalAlign: 'top',
};

const tdCodeStyle = {
  ...tdStyle,
  fontSize: '13px',
  color: '#0b1220',
  fontWeight: 'bold',
  fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Consolas, "Courier New", monospace',
  letterSpacing: '0.02em',
};

const scenarioContainerStyle = {
  marginTop: '16px',
  padding: '16px',
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  border: '1px solid #e6edf3',
};

const bottomSectionStyle = {
  marginTop: '20px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr auto',
  gap: '18px',
  alignItems: 'end',
  padding: '18px',
  backgroundColor: '#fbfbfd',
  borderRadius: '12px',
  border: '1px solid #e2e8f0',
};

const submitButtonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '12px 26px',
  borderRadius: '22px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 'bold',
  boxShadow: '0 8px 18px rgba(0,123,255,0.16)',
  transition: 'all 0.18s ease',
};

// Popup overlay style
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

// Popup container style
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

// Icon container style
const iconContainerStyle = {
  marginBottom: '20px',
};

// Success icon style
const successIconStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 25px',
  gap: '15px',
};

// List lines container
const listLinesStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

// Check mark circle style
const checkCircleStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: '#FF8C00',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

// Check mark style
const checkMarkStyle = {
  color: 'white',
  fontSize: '24px',
  fontWeight: 'bold',
};

// Popup text styles
const popupTitleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '30px',
  lineHeight: '1.4',
};

// Okay button style
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

// Warning notification style
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
  const { userAssessments, currentAsesi, apl01Data } = useDashboardAsesi();
  const [assessmentUnits, setAssessmentUnits] = useState([]);
  const [existingIa02, setExistingIa02] = useState(null);

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

  // Prefill from assessment and profile (top-level hook)
  useEffect(() => {
    (async () => {
      const ua = Array.isArray(userAssessments) ? userAssessments : [];
      const chosen = ua.find((a) => a?.status === 'active' || a?.status === 'scheduled') || ua[0];
      if (!chosen) return;
      let assesmentDetail = chosen?.assesment || null;
      if (!assesmentDetail && chosen?.assesment_id) {
        try {
          const res = await getAssesmentById(chosen.assesment_id);
          assesmentDetail = res.data?.data ?? null;
        } catch {}
      }
      if (!assesmentDetail) return;
      const skema = assesmentDetail?.skema || assesmentDetail?.schema || null;
      const skemaSertifikasi = skema?.nama || skema?.name || skema?.judul || '';
      const units = assesmentDetail?.units || assesmentDetail?.unit_kompetensi || assesmentDetail?.unitKompetensi || [];
      const u = Array.isArray(units) ? units : [];
      setAssessmentUnits(u);
      const firstUnit = Array.isArray(u) ? u[0] : {};
      const judulUnit = firstUnit?.judul || firstUnit?.nama || firstUnit?.name || '';
      const kodeUnit = firstUnit?.kode || firstUnit?.code || '';
      const tuk = assesmentDetail?.tuk || assesmentDetail?.lokasi || '';
      const namaAssesor = assesmentDetail?.assesor?.nama_lengkap || assesmentDetail?.assesor?.name || '';
      const tanggalRaw = assesmentDetail?.tanggal_mulai || assesmentDetail?.tanggal_assesment || '';
      const tanggalAsesmen = tanggalRaw ? String(tanggalRaw).substring(0,10) : '';

      const pickFullName = (obj) => obj ? (obj.fullname || obj.full_name || obj.nama_lengkap || obj.namaLengkap || obj.name || obj.username || '') : '';
      let namaAsesi = pickFullName(currentAsesi) || pickFullName(currentAsesi?.user);
      if (!namaAsesi) {
        const a = Array.isArray(apl01Data) ? apl01Data[0] : apl01Data;
        namaAsesi = pickFullName(a) || pickFullName(a?.user);
      }

      setFormData(prev => ({
        ...prev,
        skemaSertifikasi: prev.skemaSertifikasi || skemaSertifikasi,
        judulUnit: prev.judulUnit || judulUnit,
        kodeUnit: prev.kodeUnit || kodeUnit,
        tuk: prev.tuk || tuk,
        namaAssesor: prev.namaAssesor || namaAssesor,
        namaAsesi: prev.namaAsesi || namaAsesi,
        tanggalAsesmen: prev.tanggalAsesmen || tanggalAsesmen,
      }));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(userAssessments), JSON.stringify(currentAsesi), JSON.stringify(apl01Data)]);

  // Fetch existing IA-02 for current asesi to prefill (optional)
  useEffect(() => {
    (async () => {
      try {
        const assesiId = currentAsesi?.id || currentAsesi?.assesi_id || currentAsesi?.user_id;
        if (!assesiId) return;
        const res = await getFormIa02ByAssesi(assesiId);
        const first = res?.data?.data?.[0];
        if (first) {
          setExistingIa02(first);
          setFormData(prev => ({
            ...prev,
            skemaSertifikasi: first.skema_sertifikasi || prev.skemaSertifikasi,
            judulUnit: first.judul_unit || prev.judulUnit,
            kodeUnit: first.kode_unit || prev.kodeUnit,
            tuk: first.tuk || prev.tuk,
            namaAssesor: first.nama_asesor || prev.namaAssesor,
            namaAsesi: first.nama_asesi || prev.namaAsesi,
            tanggalAsesmen: first.tanggal_asesmen ? String(first.tanggal_asesmen).substring(0,10) : prev.tanggalAsesmen,
          }));
        }
      } catch (e) {
        // 404 means no previous submission; ignore
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(currentAsesi)]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    try {
      // derive assesment_asesi_id & skema_id from active assessment
      const ua = Array.isArray(userAssessments) ? userAssessments : [];
      const chosen = ua.find((a) => a?.status === 'active' || a?.status === 'scheduled') || ua[0];
      const assesment_asesi_id = chosen?.id;
      const assesmentDetail = chosen?.assesment;
      const skema_id = assesmentDetail?.skema_id || assesmentDetail?.skema?.id || assesmentDetail?.schema?.id;

      if (!assesment_asesi_id) {
        alert('Tidak dapat menemukan assesment_asesi_id. Pastikan Anda memiliki asesmen aktif.');
        return;
      }

      const payload = {
        assesment_asesi_id,
        skema_id,
        skema_sertifikasi: formData.skemaSertifikasi || null,
        judul_unit: formData.judulUnit || null,
        kode_unit: formData.kodeUnit || null,
        tuk: formData.tuk || null,
        nama_asesor: formData.namaAssesor || null,
        nama_asesi: formData.namaAsesi || null,
        tanggal_asesmen: formData.tanggalAsesmen || null,
        extra: {},
      };

      await submitFormIa02(payload);
      setIsFormSubmitted(true);
      setShowSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      console.error('Submit IA-02 error', e);
      alert('Gagal mengirim IA-02. Mohon coba lagi.');
    }
  };

  const handleOkay = () => {
    setShowSuccess(false);
    // Auto redirect ke IA-03 setelah close popup
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
    <div style={pageContainerStyle}>
      <style>{`
        @keyframes modalPop {
          0% { transform: translateY(8px) scale(0.98); opacity: 0; }
          60% { transform: translateY(-6px) scale(1.02); opacity: 1;}
          100% { transform: translateY(0) scale(1); opacity: 1;}
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
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>

      {/* Warning Notification */}
      {showWarning && (
        <div style={warningNotificationStyle}>
          Silakan isi dan kirim formulir IA-02 terlebih dahulu!
        </div>
      )}

      {/* Header dengan background image */}
      <div style={headerSectionStyle}>
        <div style={navContainerStyle} className="nav-scrollbar">
          <NavAsesi activeTab="FR.IA.02.TPD" />
        </div>

        <div style={logoContainerStyle}>
          <h1 style={logoTextStyle}>MyLSP</h1>
        </div>
      </div>

      {/* Content */}
      <div style={contentCardStyle}>
        <div style={headerWithTextStyle}>
          <div style={{ position: 'relative' }}>
            {/* Logo positioned at top left corner */}
            <img
              src="/src/img/LOGO_LSP_SMKN_24.jpg"
              alt="Logo LSP"
              style={{
                position: 'absolute',
                top: '-10px',
                left: '0',
                width: '80px',
                height: '80px',
                objectFit: 'contain',
                zIndex: 1
              }}
            />

            <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 'bold', color: '#0f172a', textAlign: 'center' }}>
              FR.IA.02.TPD
            </h2>
            <p style={{ margin: '6px 0 0 0', fontSize: '14px', color: '#475569', fontWeight: '600', textAlign: 'center' }}>
              TUGAS PRAKTIK DEMONSTRASI
            </p>
          </div>
        </div>

        {/* Remove the separate logo container */}

        {/* form section */}
        <div style={formSectionStyle}>
          <div style={tableContainerStyle}>
            <table style={tableStyle}>
              <tbody>
                <tr>
                  <td style={{ ...tdStyle, fontWeight: 'bold', backgroundColor: '#f8fafc', width: '250px', borderRight: '1px solid #e6edf3' }}>
                    Skema Sertifikasi<br />(KKN/OKUPASI/KLASTER)
                  </td>
                  <td style={tdStyle}>:</td>
                  <td style={{ ...tdStyle, padding: '8px' }}>
                    <input
                      type="text"
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: 'white',
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: 'Arial, sans-serif',
                        color: '#374151'
                      }}
                      value={formData.skemaSertifikasi}
                      onChange={(e) => handleInputChange('skemaSertifikasi', e.target.value)}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Masukkan skema sertifikasi"
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle, fontWeight: 'bold', backgroundColor: '#f8fafc', borderRight: '1px solid #e6edf3' }}>
                    Judul Unit
                  </td>
                  <td style={tdStyle}>:</td>
                  <td style={{ ...tdStyle, padding: '8px' }}>
                    <input
                      type="text"
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: 'white',
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: 'Arial, sans-serif',
                        color: '#374151'
                      }}
                      value={formData.judulUnit}
                      onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Masukkan judul unit"
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle, fontWeight: 'bold', backgroundColor: '#f8fafc', borderRight: '1px solid #e6edf3' }}>
                    Kode Unit
                  </td>
                  <td style={tdStyle}>:</td>
                  <td style={{ ...tdStyle, padding: '8px' }}>
                    <input
                      type="text"
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: 'white',
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: 'Arial, sans-serif',
                        color: '#374151'
                      }}
                      value={formData.kodeUnit}
                      onChange={(e) => handleInputChange('kodeUnit', e.target.value)}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Masukkan kode unit"
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle, fontWeight: 'bold', backgroundColor: '#f8fafc', borderRight: '1px solid #e6edf3' }}>
                    TUK
                  </td>
                  <td style={tdStyle}>:</td>
                  <td style={{ ...tdStyle, padding: '8px' }}>
                    <input
                      type="text"
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: 'white',
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: 'Arial, sans-serif',
                        color: '#374151'
                      }}
                      value={formData.tuk || ''}
                      onChange={(e) => handleInputChange('tuk', e.target.value)}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Masukkan TUK"
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle, fontWeight: 'bold', backgroundColor: '#f8fafc', borderRight: '1px solid #e6edf3' }}>
                    Nama Asesor
                  </td>
                  <td style={tdStyle}>:</td>
                  <td style={{ ...tdStyle, padding: '8px' }}>
                    <input
                      type="text"
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: 'white',
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: 'Arial, sans-serif',
                        color: '#374151'
                      }}
                      value={formData.namaAssesor}
                      onChange={(e) => handleInputChange('namaAssesor', e.target.value)}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Masukkan nama asesor"
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle, fontWeight: 'bold', backgroundColor: '#f8fafc', borderRight: '1px solid #e6edf3' }}>
                    Nama Asesi
                  </td>
                  <td style={tdStyle}>:</td>
                  <td style={{ ...tdStyle, padding: '8px' }}>
                    <input
                      type="text"
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: 'white',
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: 'Arial, sans-serif',
                        color: '#374151'
                      }}
                      value={formData.namaAsesi}
                      onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                      placeholder="Masukkan nama asesi"
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle, fontWeight: 'bold', backgroundColor: '#f8fafc', borderRight: '1px solid #e6edf3', borderBottom: 'none' }}>
                    Tanggal
                  </td>
                  <td style={{ ...tdStyle, borderBottom: 'none' }}>:</td>
                  <td style={{ ...tdStyle, padding: '8px', borderBottom: 'none' }}>
                    <input
                      type="date"
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: 'white',
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: 'Arial, sans-serif',
                        color: '#374151'
                      }}
                      value={formData.tanggalAsesmen}
                      onChange={(e) => handleInputChange('tanggalAsesmen', e.target.value)}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#d1d5db';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* instructions */}
          <div style={{ ...instructionStyle, backgroundColor: '#fff3cd', border: '1px solid #ffeaa7', borderLeft: '4px solid #fdcb6e' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#856404', margin: '0 0 10px 0' }}>
              A. Petunjuk
            </h3>
            <div style={{ color: '#856404', fontSize: '14px' }}>
              <div style={{ marginBottom: '5px' }}>1. Baca dan pelajari setiap instruksi kerja di bawah ini dengan cermat sebelum melaksanakan praktek.</div>
              <div style={{ marginBottom: '5px' }}>2. Klarifikasi kepada asesor kompetesi apabila ada hal-hal yang belum jelas.</div>
              <div style={{ marginBottom: '5px' }}>3. Laksanakan pekerjaan sesuai dengan urutan proses yang sudah di tetapkan.</div>
              <div>4. Seluruh proses kerja mengacu kepada SOP/WI yang dipersyaratkan.</div>
            </div>
          </div>

          {/* scenario */}
          <div style={{ marginTop: '20px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>
              B. Skenario Tugas Praktik Demonstrasi
            </h3>
            <p style={{ fontSize: '13px', color: '#6b7280', fontStyle: 'italic', marginBottom: '15px' }}>
              Kelompok Pekerjaan I
            </p>

            <div style={{
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '20px'
            }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                backgroundColor: 'white',
              }}>
                <thead>
                  <tr>
                    <th style={{
                      padding: '10px 15px',
                      textAlign: 'center',
                      backgroundColor: '#f9fafb',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      color: '#374151',
                      border: '1px solid #d1d5db',
                      width: '80px'
                    }}>
                      No
                    </th>
                    <th style={{
                      padding: '10px 15px',
                      textAlign: 'center',
                      backgroundColor: '#f9fafb',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      color: '#374151',
                      border: '1px solid #d1d5db',
                      width: '180px'
                    }}>
                      Kode Unit
                    </th>
                    <th style={{
                      padding: '10px 15px',
                      textAlign: 'center',
                      backgroundColor: '#f9fafb',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      color: '#374151',
                      border: '1px solid #d1d5db'
                    }}>
                      Judul Unit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(assessmentUnits) && assessmentUnits.length > 0 ? (
                    assessmentUnits.map((u, idx) => (
                      <tr key={idx}>
                        <td style={{
                          padding: '8px 15px', textAlign: 'center', fontSize: '14px', color: '#374151', border: '1px solid #d1d5db', backgroundColor: 'white'
                        }}>{idx + 1}.</td>
                        <td style={{
                          padding: '8px 15px', fontSize: '14px', color: '#374151', border: '1px solid #d1d5db', backgroundColor: 'white', fontFamily: 'monospace'
                        }}>{u.kode || u.code || ''}</td>
                        <td style={{
                          padding: '8px 15px', fontSize: '14px', color: '#374151', border: '1px solid #d1d5db', backgroundColor: 'white'
                        }}>{u.judul || u.nama || u.name || ''}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} style={{ padding: '10px', textAlign: 'center', color: '#6b7280' }}>
                        Unit kompetensi tidak tersedia pada asesmen aktif.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div style={{
              marginBottom: '20px',
              padding: '0'
            }}>
              <div style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#374151',
                marginBottom: '8px'
              }}>
                Skenario Tugas Praktik Demonstrasi : <span style={{
                  fontWeight: 'normal',
                  fontStyle: 'italic',
                  color: '#9ca3af',
                  marginLeft: '10px'
                }}>stimulus demonstrasi</span>
              </div>
            </div>
          </div>

          {/* bottom sections */}
          <div style={{
            borderTop: '1px solid #d1d5db',
            paddingTop: '15px',
            marginTop: '20px'
          }}>
            {/* Perlengkapan dan Peralatan */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '15px',
              paddingBottom: '10px',
              borderBottom: '1px solid #e5e7eb'
            }}>
              <div style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#374151',
                width: '250px',
                flexShrink: 0
              }}>
                Perlengkapan dan Peralatan
              </div>
              <div style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#374151',
                marginRight: '20px'
              }}>
                :
              </div>
              <div style={{
                fontSize: '14px',
                color: '#374151',
                lineHeight: '1.6'
              }}>
                <div>• peralatan 1</div>
                <div>• peralatan 2</div>
              </div>
            </div>

            {/* Durasi Waktu */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '25px'
            }}>
              <div style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#374151',
                width: '250px',
                flexShrink: 0,
                textDecoration: 'underline'
              }}>
                Durasi Waktu
              </div>
              <div style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#374151',
                marginRight: '20px'
              }}>
                :
              </div>
              <div style={{
                fontSize: '14px',
                color: '#374151'
              }}>
                30 Menit
              </div>

              {/* Button Kirim */}
              <div style={{ marginLeft: 'auto' }}>
                <button
                  className="submit-btn"
                  style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    padding: '8px 25px',
                    borderRadius: '20px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    boxShadow: '0 2px 8px rgba(59,130,246,0.3)',
                    transition: 'all 0.2s ease'
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

      {/* Success Popup dengan design yang konsisten */}
      {showSuccess && (
        <div style={popupOverlayStyle} onClick={handleOkay}>
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