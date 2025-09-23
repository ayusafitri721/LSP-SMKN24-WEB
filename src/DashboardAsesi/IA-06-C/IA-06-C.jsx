/* eslint-disable no-irregular-whitespace */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';
import { useDashboardAsesi } from '../../context/DashboardAsesiContext';
import { fetchCsrfCookie, getAssesmentById, downloadIaDoc, listIaDocs } from '../../api/api';
import { useAuth } from '../../context/AuthContext';

// Styles as JavaScript objects
const pageContainerStyle = {
  backgroundColor: '#f5f5f5',
  fontFamily: 'Arial, sans-serif',
  padding: '15px',
  minHeight: '100vh',
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
  padding: '0',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  marginTop: '20px',
  overflow: 'hidden',
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

const tableInputStyle = {
  border: 'none',
  width: '100%',
  fontSize: '14px',
  padding: '0',
  backgroundColor: 'transparent',
  outline: 'none',
};

const separatorStyle = {
  width: '1%',
  textAlign: 'center',
};

// removed upload UI styles

// removed popup styles

// removed submit styles


const IA06C = () => {
  const [formData, setFormData] = useState({
    skemaSertifikasi: '',
    judulUnit: '',
    kodeUnit: '',
    tuk: '',
    namaAsesor: '',
    namaAsesi: '',
    tanggal: '',
  });
  const [docAvailable, setDocAvailable] = useState(null); // null=unknown, true/false=known
  const navigate = useNavigate();
  const { userAssessments } = useDashboardAsesi();
  const { currentAsesi } = useDashboardAsesi();
  const { user } = useAuth();

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Auto-populate fields from current assessment
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
      const tuk = assesmentDetail?.tuk || assesmentDetail?.lokasi || '';
      const tanggalRaw = assesmentDetail?.tanggal_mulai || assesmentDetail?.tanggal_assesment || '';
      const tanggal = tanggalRaw ? String(tanggalRaw).substring(0, 10) : '';
      const namaAsesor = assesmentDetail?.assesor?.nama_lengkap || assesmentDetail?.assesor?.name || assesmentDetail?.assesor_name || '';
      const namaAsesi =
        currentAsesi?.nama_lengkap ||
        currentAsesi?.nama ||
        currentAsesi?.user?.nama_lengkap ||
        currentAsesi?.user?.name ||
        currentAsesi?.user?.username ||
        user?.name ||
        user?.username ||
        '';

      // Try to derive skema/title and unit info if present on the assessment payload
      const skemaObj = assesmentDetail?.skema || assesmentDetail?.schema || assesmentDetail?.scheme || null;
      const units = assesmentDetail?.units || assesmentDetail?.unit_kompetensi || assesmentDetail?.unitKompetensi || [];
      const firstUnit = Array.isArray(units) ? units[0] : (units || {});
      const skemaSertifikasi = skemaObj?.nama || skemaObj?.name || skemaObj?.judul || '';
      const judulUnit = firstUnit?.judul || firstUnit?.nama || firstUnit?.name || '';
      const kodeUnit = firstUnit?.kode || firstUnit?.code || '';

      setFormData((prev) => ({
        ...prev,
        skemaSertifikasi,
        judulUnit,
        kodeUnit,
        tuk,
        namaAsesor,
        namaAsesi,
        tanggal,
      }));
    };
    populate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(userAssessments), JSON.stringify(currentAsesi), user?.name, user?.username]);

  // Check IA-06-C document availability for current skema
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
        const exists = Array.isArray(items) && items.some(d => String(d.form || d.name).toUpperCase() === 'IA-06-C');
        setDocAvailable(!!exists);
      } catch {
        setDocAvailable(false);
      }
    };
    checkDoc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(userAssessments)]);

  // removed upload handlers and popup

  const handleDownloadSoal = async () => {
    // Derive skemaId
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
      alert('Skema belum ditemukan. Pastikan Anda memiliki jadwal asesmen aktif.');
      return;
    }
    try {
      await fetchCsrfCookie();
      // Optional pre-check to avoid 404
      try {
        const list = await listIaDocs(Number(skemaId));
        const items = list.data?.data || list.data || [];
        const exists = Array.isArray(items) && items.some(d => String(d.form || d.name).toUpperCase() === 'IA-06-C');
        if (!exists) {
          alert('Dokumen IA-06-C belum tersedia untuk skema ini. Hubungi admin.');
          return;
        }
      } catch {}
      const res = await downloadIaDoc('IA-06-C', Number(skemaId));
      const blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `IA-06-C-SKEMA-${Number(skemaId)}.docx`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      const status = err?.response?.status;
      const message = err?.response?.data?.message || err?.message;
      alert(`Gagal mengunduh dokumen.${status ? `\nStatus: ${status}` : ''}${message ? `\nPesan: ${message}` : ''}`);
      console.error('Download IA-06-C failed:', err);
    }
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
          .upload-box:hover {
            background-color: #e2f2ff;
          }
        `}
      </style>

      <div style={navContainerStyle} className="nav-scrollbar">
        <NavAsesi activeTab="FR.IA.06.C" />
      </div>

      <div style={imageBannerStyle}>
        <h1 style={logoTextStyle}>MyLSP</h1>
      </div>

      <div style={formContainerStyle}>
        <div style={headerStyle}>
          <img src="/src/img/image 12.png" alt="LSP Logo" style={lspLogoStyle} />
          <div style={formTitleSectionStyle}>
            <h2 style={formTitleLargeStyle}>FR.IA.06C</h2>
            <h3 style={formTitleSmallStyle}>LEMBAR JAWABAN PERTANYAAN TERTULIS ESAI</h3>
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
        </div>

        <div style={formBodyStyle}>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td style={{ ...tableTopCellStyle, width: '25%' }} rowSpan="2">Skema Sertifikasi (KKNI/OKUPASI/KLASTER)</td>
                <td style={{ ...tableTopCellStyle, width: '0%' }} rowSpan="2">

                </td>
                <td style={{ ...tableCellStyle, width: '15%' }}>Judul Unit</td>
                <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
                <td style={{ ...tableCellStyle, width: '34%' }}>
                  <input
                    type="text"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.judulUnit}
                    onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                    readOnly
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
                    readOnly
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
                    readOnly
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
                    readOnly
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
                    readOnly
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
                    readOnly
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Download-only view; upload removed */}
        </div>
      </div>
      {/* Upload popup removed; download only */}
    </div>
  );
};

export default IA06C;
