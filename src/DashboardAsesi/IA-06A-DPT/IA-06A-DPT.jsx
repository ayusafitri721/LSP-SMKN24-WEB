// src/DashboardAsesi/IA-06A-DPT/IA-06A-DPT.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';
import { useDashboardAsesi } from '../../context/DashboardAsesiContext';
import { fetchCsrfCookie, getAssesmentById, downloadIaDoc, listIaDocs, submitFormIa06a } from '../../api/api';
import { useAuth } from '../../context/AuthContext';

const pageContainerStyle = {
  backgroundColor: 'white',
  fontFamily: 'Arial, sans-serif',
  padding: '15px',
  minHeight: '100vh',
};

const headerSectionStyle = {
  backgroundImage: "linear-gradient(rgba(255,140,0,0.7), rgba(255,140,0,0.7)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '0 0 40px 40px',
  overflow: 'hidden',
  marginBottom: '0',
};

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

const formContainerStyle = {
  backgroundColor: 'white',
  borderRadius: '0 0 15px 15px',
  padding: '0',
  boxShadow: 'none',
  marginTop: '0',
  overflow: 'hidden',
  border: 'none',
};

const headerStyle = {
  backgroundColor: 'white',
  borderTop: '5px solid #ffffffff', 
  borderBottom: '5px solid #ffffffff', 
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center',
};

const formTitleSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
};

const formTitleLargeStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0',
};

const formTitleSmallStyle = {
  fontSize: '14px',
  fontWeight: 'normal',
  color: '#666',
  marginTop: '5px',
};

const lspLogoStyle = {
  width: '50px',
  height: '50px',
  objectFit: 'contain',
  marginRight: '15px',
  position: 'absolute',
  left: '20px',
};

const formBodyStyle = {
  padding: '25px',
  backgroundColor: 'white',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '20px',
  border: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '8px',
  border: '1px solid #ddd',
  fontSize: '14px',
  color: '#333',
};

const tableTopCellStyle = {
  ...tableCellStyle,
  backgroundColor: '#f5f5f5',
  fontWeight: 'bold',
};

const IA06A = () => {
  const [formData, setFormData] = useState({
    namaAssesor: '',
    namaAsesi: '',
    tanggalAsesment: '',
    catatan: '',
    ttdAsesi: 'belum',
    ttdAsesor: 'belum',
  });

  const [showWarning, setShowWarning] = useState(false);
  const navigate = useNavigate();
  const { userAssessments, currentAsesi } = useDashboardAsesi();
  const { user } = useAuth();
  const [docAvailable, setDocAvailable] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Auto-populate from current assessment
  useEffect(() => {
    const populate = async () => {
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
      const namaAssesorVar = assesmentDetail?.assesor?.nama_lengkap || assesmentDetail?.assesor?.name || assesmentDetail?.assesor_name || '';
      const namaAsesi =
        currentAsesi?.nama_lengkap ||
        currentAsesi?.nama ||
        currentAsesi?.user?.nama_lengkap ||
        currentAsesi?.user?.name ||
        currentAsesi?.user?.username ||
        user?.name ||
        user?.username || '';
      const tanggalRaw = assesmentDetail?.tanggal_mulai || assesmentDetail?.tanggal_assesment || '';
      const tanggalAsesment = tanggalRaw ? String(tanggalRaw).substring(0,10) : '';

      setFormData((prev) => ({
        ...prev,
        namaAssesor: namaAssesorVar,
        namaAsesi,
        tanggalAsesment,
      }));
    };
    populate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(userAssessments), JSON.stringify(currentAsesi), user?.name, user?.username]);

  const handleDownloadSoal = async () => {
    // Derive skemaId from dashboard context or fallback by fetching assesment detail
    const ua = Array.isArray(userAssessments) ? userAssessments : [];
    const chosen = ua.find((a) => a?.status === 'active' || a?.status === 'scheduled') || ua[0];
    let skemaId = chosen?.assesment?.skema_id || chosen?.skema_id || chosen?.schema_id;
    if (!skemaId && chosen?.assesment_id) {
      try {
        const res = await getAssesmentById(chosen.assesment_id);
        skemaId = res.data?.data?.skema_id ?? skemaId;
      } catch {}
    }
    if (!skemaId) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
      return;
    }
    try {
      await fetchCsrfCookie();
      // Optional pre-check to avoid 404
      try {
        const list = await listIaDocs(Number(skemaId));
        const items = list.data?.data || list.data || [];
        const exists = Array.isArray(items) && items.some(d => String(d.form || d.name).toUpperCase() === 'IA-06A-DPT');
        if (!exists) {
          alert('Dokumen IA-06A-DPT belum tersedia untuk skema ini. Hubungi admin.');
          return;
        }
      } catch {}
      const res = await downloadIaDoc('IA-06A-DPT', Number(skemaId));
      const blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `IA-06A-DPT-SKEMA-${Number(skemaId)}.docx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      const status = err?.response?.status;
      const message = err?.response?.data?.message || err?.message;
      alert(`Gagal mengunduh dokumen.${status ? `\nStatus: ${status}` : ''}${message ? `\nPesan: ${message}` : ''}`);
      console.error('Download IA-06A-DPT failed:', err);
    }
  };

  // Check IA-06A-DPT doc availability for current skema
  useEffect(() => {
    const checkDoc = async () => {
      const ua = Array.isArray(userAssessments) ? userAssessments : [];
      const chosen = ua.find((a) => a?.status === 'active' || a?.status === 'scheduled') || ua[0];
      if (!chosen) { setDocAvailable(false); return; }
      let skemaId = chosen?.assesment?.skema_id || chosen?.skema_id || chosen?.schema_id;
      if (!skemaId && chosen?.assesment_id) {
        try {
          const res = await getAssesmentById(chosen.assesment_id);
          skemaId = res.data?.data?.skema_id ?? skemaId;
        } catch {}
      }
      if (!skemaId) { setDocAvailable(false); return; }
      try {
        const list = await listIaDocs(Number(skemaId));
        const items = list.data?.data || list.data || [];
        const exists = Array.isArray(items) && items.some(d => String(d.form || d.name).toUpperCase() === 'IA-06A-DPT');
        setDocAvailable(!!exists);
      } catch { setDocAvailable(false); }
    };
    checkDoc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(userAssessments)]);

  return (
    <div style={pageContainerStyle} className="page-container">
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
          @keyframes checkAnimation {
            0% { transform: scale(0); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
          .popup-container {
            animation: popupFadeIn 0.3s ease;
          }
          @keyframes popupFadeIn {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
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
          .okay-button:hover {
            background-color: #FF8C00;
          }

          /* Mobile Responsive Styles */
          @media (max-width: 768px) {
            .page-container {
              padding: 10px !important;
              overflow-x: hidden !important;
            }

            .header-section {
              border-radius: 0 0 20px 20px !important;
            }

            .nav-container {
              max-width: 80% !important;
              padding: 5px 10px !important;
              border-radius: 0 10px 20px 10px !important;
            }

            .logo-container {
              height: 120px !important;
              margin: 15px 0 !important;
            }

            .logo-text {
              font-size: 32px !important;
              letter-spacing: 1px !important;
            }

            .form-container {
              padding: 15px !important;
              overflow-x: hidden !important;
            }

            .header-style {
              padding: 8px 15px !important;
            }

            .lsp-logo {
              width: 40px !important;
              height: 40px !important;
              left: 15px !important;
            }

            .form-title-large {
              font-size: 16px !important;
            }

            .form-title-small {
              font-size: 12px !important;
            }

            .form-body {
              padding: 15px !important;
            }

            .table-cell {
              padding: 6px !important;
              font-size: 12px !important;
            }

            .warning-notification {
              top: 10px !important;
              right: 10px !important;
              left: 10px !important;
              font-size: 12px !important;
              padding: 10px 15px !important;
            }

            .popup-container {
              margin: 20px !important;
              padding: 20px 25px !important;
              max-width: calc(100vw - 40px) !important;
              width: auto !important;
            }

            .popup-title {
              font-size: 16px !important;
              margin-bottom: 20px !important;
            }

            .success-icon {
              gap: 10px !important;
            }

            .check-circle {
              width: 60px !important;
              height: 60px !important;
            }

            .check-mark {
              font-size: 30px !important;
            }

            .okay-button {
              width: 100% !important;
              padding: 12px 20px !important;
            }
          }

          /* Very small screens */
          @media (max-width: 480px) {
            .page-container {
              padding: 8px !important;
            }

            .form-container {
              padding: 12px !important;
            }

            .logo-text {
              font-size: 28px !important;
            }

            .nav-container {
              max-width: 85% !important;
            }

            .popup-container {
              margin: 15px !important;
              padding: 15px 20px !important;
            }
          }
        `}
      </style>

      {/* Warning Notification */}
      {showWarning && (
        <div style={{
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
        }} className="warning-notification">
          Mohon lengkapi semua field yang diperlukan!
        </div>
      )}

      <div style={headerSectionStyle} className="header-section">
        <div style={navContainerStyle} className="nav-scrollbar nav-container">
          <NavAsesi activeTab="FR.IA.06A.DPT" />
        </div>

        <div style={logoContainerStyle} className="logo-container">
          <h1 style={logoTextStyle} className="logo-text">
            MyLSP
          </h1>
        </div>
      </div>

      <div style={formContainerStyle} className="form-container">
        <div style={headerStyle} className="header-style">
          <img src="/src/img/image 12.png" alt="LSP Logo" style={lspLogoStyle} className="lsp-logo" />
          <div style={formTitleSectionStyle}>
            <h2 style={formTitleLargeStyle} className="form-title-large">FR.IA.06.A</h2>
            <h3 style={formTitleSmallStyle} className="form-title-small">DAFTAR PERTANYAAN TERTULIS ESAI</h3>
          </div>
          <button
            type="button"
            onClick={handleDownloadSoal}
            style={{
              position: 'absolute',
              right: 20,
              top: 10,
              backgroundColor: '#1a73e8',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 12px',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: docAvailable === false ? 'not-allowed' : 'pointer',
              opacity: docAvailable === false ? 0.6 : 1
            }}
            disabled={docAvailable === false}
          >
            Download Soal (.docx)
          </button>
          <button
            type="button"
            onClick={async () => {
              try {
                setSubmitting(true);
                // derive assesment_asesi_id & skema_id
                const ua = Array.isArray(userAssessments) ? userAssessments : [];
                const chosen = ua.find((a) => a?.status === 'active' || a?.status === 'scheduled') || ua[0];
                const assesment_asesi_id = chosen?.id;
                let skema_id = chosen?.assesment?.skema_id || chosen?.skema_id || chosen?.schema_id;
                if (!skema_id && chosen?.assesment_id) {
                  try {
                    const res = await getAssesmentById(chosen.assesment_id);
                    skema_id = res.data?.data?.skema_id ?? skema_id;
                  } catch {}
                }
                if (!assesment_asesi_id) {
                  alert('Tidak dapat menemukan assesment_asesi_id. Pastikan Anda memiliki asesmen aktif.');
                  return;
                }
                const payload = {
                  assesment_asesi_id,
                  skema_id: skema_id || null,
                  catatan: formData.catatan || null,
                  ttd_asesi: formData.ttdAsesi || 'belum',
                  ttd_asesor: formData.ttdAsesor || 'belum',
                  extra: {},
                };
                await submitFormIa06a(payload);
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 2500);
              } catch (e) {
                console.error('Submit IA-06.A error', e);
                alert('Gagal mengirim IA-06.A. Mohon coba lagi.');
              } finally {
                setSubmitting(false);
              }
            }}
            style={{
              position: 'absolute',
              right: 20,
              top: 50,
              backgroundColor: submitting ? '#9ca3af' : '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 12px',
              fontSize: '12px',
              fontWeight: 'bold',
              cursor: submitting ? 'not-allowed' : 'pointer',
              opacity: submitting ? 0.8 : 1,
              marginLeft: '10px'
            }}
            disabled={submitting}
          >
            {submitting ? 'Mengirim...' : 'Kirim'}
          </button>
        </div>
        <div style={formBodyStyle} className="form-body">
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td style={{ ...tableCellStyle, width: '25%' }} className="table-cell">Nama Assesor</td>
                <td style={{ ...tableCellStyle, width: '1%' }} className="table-cell">:</td>
                <td style={{ ...tableCellStyle, width: '74%' }} className="table-cell">
                  <input
                    type="text"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.namaAssesor}
                    onChange={(e) => handleInputChange('namaAssesor', e.target.value)}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, width: '25%' }} className="table-cell">Nama Asesi</td>
                <td style={{ ...tableCellStyle, width: '1%' }} className="table-cell">:</td>
                <td style={{ ...tableCellStyle, width: '74%' }} className="table-cell">
                  <input
                    type="text"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.namaAsesi}
                    onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, width: '25%' }} className="table-cell">Tanggal Asesment</td>
                <td style={{ ...tableCellStyle, width: '1%' }} className="table-cell">:</td>
                <td style={{ ...tableCellStyle, width: '74%' }} className="table-cell">
                  <input
                    type="date"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.tanggalAsesment}
                    onChange={(e) => handleInputChange('tanggalAsesment', e.target.value)}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, width: '25%' }} className="table-cell">Catatan</td>
                <td style={{ ...tableCellStyle, width: '1%' }} className="table-cell">:</td>
                <td style={{ ...tableCellStyle, width: '74%' }} className="table-cell">
                  <textarea
                    style={{ width: '100%', border: '1px solid #ddd', outline: 'none', minHeight: 80, padding: 8 }}
                    value={formData.catatan}
                    onChange={(e) => handleInputChange('catatan', e.target.value)}
                    placeholder="Tulis catatan asesmen (opsional)"
                  />
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, width: '25%' }} className="table-cell">Tanda Tangan</td>
                <td style={{ ...tableCellStyle, width: '1%' }} className="table-cell">:</td>
                <td style={{ ...tableCellStyle, width: '74%', display: 'flex', gap: 16, alignItems: 'center' }} className="table-cell">
                  <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <input type="checkbox" checked={formData.ttdAsesi === 'sudah'} onChange={(e) => handleInputChange('ttdAsesi', e.target.checked ? 'sudah' : 'belum')} />
                    Asesi sudah tanda tangan
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <input type="checkbox" checked={formData.ttdAsesor === 'sudah'} onChange={(e) => handleInputChange('ttdAsesor', e.target.checked ? 'sudah' : 'belum')} />
                    Asesor sudah tanda tangan
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
          {showSuccess && (
            <div style={{
              marginTop: 10,
              padding: '10px 12px',
              borderRadius: 8,
              backgroundColor: '#ecfdf5',
              color: '#065f46',
              border: '1px solid #a7f3d0',
              fontSize: 12,
              fontWeight: 600,
            }}>
              IA-06.A berhasil dikirim.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IA06A;