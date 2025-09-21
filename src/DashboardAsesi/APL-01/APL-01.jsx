// src/DashboardAsesi/APL-01/APL-01.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';
import { showapl01, fetchCsrfCookie, submitFormApl01 } from '../../api/api';
import { useAuth } from '../../context/AuthContext';

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

const contentCardStyle = {
  backgroundColor: 'white',
  borderRadius: '0 0 15px 15px',
  padding: '30px',
  boxShadow: 'none',
  marginTop: '0',
  border: 'none',
};

const titleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '25px',
  color: '#333',
  fontFamily: 'Arial, sans-serif',
};

const formContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px',
  alignItems: 'start',
};

const leftColumnStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const rightColumnStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  position: 'relative',
  marginTop: '15px',
};

const labelStyle = {
  fontSize: '14px',
  color: '#333',
  fontWeight: 'normal',
  position: 'absolute',
  top: '-10px',
  left: '20px',
  backgroundColor: 'white',
  padding: '0 8px',
  zIndex: 1,
};

const inputStyle = {
  padding: '12px 15px',
  border: '2px solid #007bff',
  borderRadius: '25px',
  fontSize: '14px',
  outline: 'none',
  backgroundColor: 'white',
  fontFamily: 'Arial, sans-serif',
  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 6px, #ccc 6px, #ccc 8px)',
  backgroundPosition: '15px calc(100% - 8px)',
  backgroundSize: '100% 2px',
  backgroundRepeat: 'repeat-x',
};

const textareaStyle = {
  padding: '12px 15px',
  border: '2px solid #007bff',
  borderRadius: '15px',
  fontSize: '14px',
  outline: 'none',
  backgroundColor: 'white',
  fontFamily: 'Arial, sans-serif',
  resize: 'vertical',
  minHeight: '80px',
  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 6px, #ccc 6px, #ccc 8px)',
  backgroundPosition: '15px calc(100% - 8px)',
  backgroundSize: '100% 2px',
  backgroundRepeat: 'repeat-x',
};

const radioGroupStyle = {
  display: 'flex',
  gap: '30px',
  marginTop: '10px',
  alignItems: 'center',
};

const radioLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '14px',
  color: '#666',
  cursor: 'pointer',
};

const radioInputStyle = {
  width: '20px',
  height: '20px',
  cursor: 'pointer',
};

const fileUploadStyle = {
  position: 'relative',
  display: 'inline-block',
  width: '100%',
};

const fileInputStyle = {
  position: 'absolute',
  opacity: 0,
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  top: 0,
  left: 0,
  zIndex: 1,
};

const fileButtonStyle = {
  padding: '12px 15px',
  border: '2px solid #007bff',
  borderRadius: '25px',
  backgroundColor: 'white',
  fontSize: '14px',
  color: '#666',
  cursor: 'pointer',
  width: '100%',
  textAlign: 'left',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 6px, #ccc 6px, #ccc 8px)',
  backgroundPosition: '15px calc(100% - 8px)',
  backgroundSize: '100% 2px',
  backgroundRepeat: 'repeat-x',
};

const uploadIconStyle = {
  color: '#999',
  fontSize: '18px',
  fontWeight: 'bold',
};

const checkboxGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginTop: '10px',
};

const checkboxLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '14px',
  color: '#666',
  cursor: 'pointer',
  lineHeight: '1.4',
};

const radioAssessmentInputStyle = {
  width: '18px',
  height: '18px',
  cursor: 'pointer',
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

const APL01 = () => {
  const { user } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [apl01Loading, setApl01Loading] = useState(false);
  const [apl01Error, setApl01Error] = useState(null);
  const [apl01Data, setApl01Data] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const [uploadedFiles, setUploadedFiles] = useState({
    ktp: null,
    foto: null,
    sertifikat: null,
    suratTH: null,
    suratUNIK: null
  });

  // Controlled inputs for backend-required fields
  const [form, setForm] = useState({
    tujuan_asesmen: '',
    schema_id: '', // numeric but keep as string for input
    nama_lengkap: '',
    no_ktp: '',
    tanggal_lahir: '',
    tempat_lahir: '',
    jenis_kelamin: '', // 'Laki-laki' | 'Perempuan'
    kebangsaan: 'Indonesia',
    alamat_rumah: '',
    kode_pos: '',
    no_telepon_rumah: '',
    no_telepon_kantor: '',
    no_telepon: '',
    email: '',
    kualifikasi_pendidikan: 'SMK',
    nama_institusi: 'SMKN 24 Jakarta',
    jabatan: 'Siswa',
    alamat_kantor: '',
    kode_pos_kantor: '',
    fax_kantor: '',
    email_kantor: '',
  });

  const updateForm = (key, val) => setForm((prev) => ({ ...prev, [key]: val }));

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchApl01 = async () => {
      setApl01Loading(true);
      setApl01Error(null);
      try {
        await fetchCsrfCookie();
        const res = await showapl01();
        const payload = res.data?.data ?? res.data?.user ?? res.data ?? null;
        setApl01Data(payload);
      } catch (err) {
        setApl01Error(err?.response?.status === 404 ? 'Belum ada data APL-01' : (err?.response?.data?.message || 'Gagal mengambil status APL-01'));
        setApl01Data(null);
        console.warn('APL-01 fetch error:', err?.response?.status, err?.response?.data || err?.message);
      } finally {
        setApl01Loading(false);
      }
    };
    fetchApl01();

    const handleBeforeUnload = (e) => {
      if (!isFormSubmitted) {
        e.preventDefault();
        e.returnValue = '';
      }
    };

    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function(...args) {
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/apl-01')) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalPushState.apply(window.history, args);
    };

    window.history.replaceState = function(...args) {
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/apl-01')) {
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

  const handleFileUpload = (fileType, event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ['application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        alert('File harus berformat PDF (sesuai validasi backend).');
        event.target.value = '';
        return;
      }

      const maxSize = 2 * 1024 * 1024; // 2MB (backend max: 2048 KB)
      if (file.size > maxSize) {
        alert('Ukuran file maksimal 2MB (sesuai validasi backend).');
        event.target.value = '';
        return;
      }

      setUploadedFiles(prev => ({
        ...prev,
        [fileType]: file
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    // Basic validation
    const requiredKeys = [
      'tujuan_asesmen','schema_id','nama_lengkap','no_ktp','tanggal_lahir','tempat_lahir','jenis_kelamin',
      'kebangsaan','alamat_rumah','kode_pos','no_telepon_rumah','no_telepon','email','kualifikasi_pendidikan',
      'nama_institusi','jabatan'
    ];
    const missing = requiredKeys.filter((k) => !form[k] || String(form[k]).trim() === '');
    if (missing.length > 0) {
      alert('Mohon lengkapi semua field wajib: ' + missing.join(', '));
      return;
    }

    // At least one attachment (PDFs accepted; images also allowed by UI but backend requires PDF)
    const attachments = [];
    const fileMap = [
      ['ktp','KTP/Kartu Pelajar'],
      ['foto','Foto 3x4'],
      ['sertifikat','Sertifikat'],
      ['suratTH','Surat Keterangan TH'],
      ['suratUNIK','Surat Keterangan UNIK']
    ];
    fileMap.forEach(([key, desc]) => {
      const f = uploadedFiles[key];
      if (f) attachments.push({ file: f, description: desc });
    });
    if (attachments.length === 0) {
      alert('Lampirkan minimal satu dokumen (PDF disarankan)');
      return;
    }

    try {
      setSubmitting(true);
      await fetchCsrfCookie();
      const fd = new FormData();
      // Required fields
      fd.append('tujuan_asesmen', form.tujuan_asesmen);
      fd.append('schema_id', String(form.schema_id));
      fd.append('nama_lengkap', form.nama_lengkap);
      fd.append('no_ktp', form.no_ktp);
      fd.append('tanggal_lahir', form.tanggal_lahir);
      fd.append('tempat_lahir', form.tempat_lahir);
      fd.append('jenis_kelamin', form.jenis_kelamin);
      fd.append('kebangsaan', form.kebangsaan);
      fd.append('alamat_rumah', form.alamat_rumah);
      fd.append('kode_pos', form.kode_pos);
      fd.append('no_telepon_rumah', form.no_telepon_rumah);
      if (form.no_telepon_kantor) fd.append('no_telepon_kantor', form.no_telepon_kantor);
      fd.append('no_telepon', form.no_telepon);
      fd.append('email', form.email);
      fd.append('kualifikasi_pendidikan', form.kualifikasi_pendidikan);
      fd.append('nama_institusi', form.nama_institusi);
      fd.append('jabatan', form.jabatan);
      if (form.alamat_kantor) fd.append('alamat_kantor', form.alamat_kantor);
      if (form.kode_pos_kantor) fd.append('kode_pos_kantor', form.kode_pos_kantor);
      if (form.fax_kantor) fd.append('fax_kantor', form.fax_kantor);
      if (form.email_kantor) fd.append('email_kantor', form.email_kantor);
      fd.append('status', 'pending');

      attachments.forEach((att, idx) => {
        fd.append(`attachments[${idx}][file]`, att.file);
        fd.append(`attachments[${idx}][description]`, att.description);
      });

      await submitFormApl01(fd);
      setShowPopup(true);
    } catch (err) {
      console.error('Submit APL-01 failed:', err);
      const msg = err?.response?.data?.message || 'Gagal mengirim APL-01';
      const errors = err?.response?.data?.errors;
      setSubmitError(msg);
      if (errors && typeof errors === 'object') {
        const flat = Object.entries(errors)
          .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`)
          .join('\n');
        alert(`Validasi gagal:\n${flat}`);
      } else {
        alert(msg);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setIsFormSubmitted(true);
    setTimeout(() => {
      navigate('/dashboard-asesi/apl-02');
    }, 300);
  };

  const getFileDisplayName = (fileType) => {
    const file = uploadedFiles[fileType];
    if (file) {
      return file.name.length > 20 ? file.name.substring(0, 20) + '...' : file.name;
    }
    return '';
  };

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

            .content-card {
              padding: 15px !important;
              overflow-x: hidden !important;
            }

            .title {
              font-size: 16px !important;
              margin-bottom: 20px !important;
              text-align: center !important;
            }

            .form-container {
              grid-template-columns: 1fr !important;
              gap: 15px !important;
            }

            .input-group {
              margin-top: 20px !important;
              width: 100% !important;
              overflow-x: hidden !important;
            }

            .label {
              position: static !important;
              background: none !important;
              padding: 0 !important;
              margin-bottom: 8px !important;
              font-weight: bold !important;
              font-size: 13px !important;
              color: #333 !important;
            }

            .input {
              width: 100% !important;
              max-width: 100% !important;
              padding: 10px 15px !important;
              font-size: 13px !important;
              border-radius: 15px !important;
              box-sizing: border-box !important;
              background-image: none !important;
            }

            .textarea {
              width: 100% !important;
              max-width: 100% !important;
              padding: 10px 15px !important;
              font-size: 13px !important;
              border-radius: 10px !important;
              min-height: 60px !important;
              box-sizing: border-box !important;
              background-image: none !important;
            }

            .radio-group {
              flex-direction: column !important;
              gap: 15px !important;
              margin-top: 10px !important;
              align-items: flex-start !important;
            }

            .radio-label {
              font-size: 13px !important;
              gap: 10px !important;
            }

            .radio-input {
              width: 18px !important;
              height: 18px !important;
            }

            .file-upload {
              width: 100% !important;
              overflow-x: hidden !important;
            }

            .file-button {
              width: 100% !important;
              max-width: 100% !important;
              padding: 10px 15px !important;
              font-size: 13px !important;
              border-radius: 15px !important;
              box-sizing: border-box !important;
              background-image: none !important;
              word-wrap: break-word !important;
              overflow-wrap: break-word !important;
            }

            .file-button span:first-child {
              max-width: 70% !important;
              overflow: hidden !important;
              text-overflow: ellipsis !important;
              white-space: nowrap !important;
            }

            .upload-icon {
              font-size: 16px !important;
              flex-shrink: 0 !important;
            }

            .checkbox-group {
              gap: 10px !important;
              margin-top: 10px !important;
            }

            .checkbox-label {
              font-size: 13px !important;
              gap: 8px !important;
              line-height: 1.3 !important;
            }

            .radio-assessment-input {
              width: 16px !important;
              height: 16px !important;
              flex-shrink: 0 !important;
            }

            .submit-button {
              width: 100% !important;
              align-self: stretch !important;
              padding: 12px 20px !important;
              font-size: 14px !important;
              margin-top: 25px !important;
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
              min-width: unset !important;
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
              width: 50px !important;
              height: 50px !important;
            }

            .check-mark {
              font-size: 20px !important;
            }

            .list-lines div {
              height: 8px !important;
            }

            .list-lines div:nth-child(1) {
              width: 60px !important;
            }

            .list-lines div:nth-child(2) {
              width: 80px !important;
            }

            .list-lines div:nth-child(3) {
              width: 100px !important;
            }

            .okay-button {
              position: static !important;
              margin-top: 20px !important;
              width: 100% !important;
              padding: 12px 20px !important;
            }
          }

          /* Very small screens */
          @media (max-width: 480px) {
            .page-container {
              padding: 8px !important;
            }

            .content-card {
              padding: 12px !important;
            }

            .logo-text {
              font-size: 28px !important;
            }

            .input-group {
              margin-top: 15px !important;
            }

            .input, .textarea {
              padding: 8px 12px !important;
              font-size: 12px !important;
            }

            .file-button {
              padding: 8px 12px !important;
              font-size: 12px !important;
            }

            .radio-label, .checkbox-label {
              font-size: 12px !important;
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
        <div style={warningNotificationStyle} className="warning-notification">
          Silakan isi dan kirim formulir APL-01 terlebih dahulu!
        </div>
      )}

      <div style={headerSectionStyle} className="header-section">
        <div style={navContainerStyle} className="nav-scrollbar nav-container">
          <NavAsesi activeTab="FR.APL.01" />
        </div>

        <div style={logoContainerStyle} className="logo-container">
          <h1 style={logoTextStyle} className="logo-text">
            MyLSP
          </h1>
        </div>
      </div>

      <div style={contentCardStyle} className="content-card">
        <h2 style={titleStyle} className="title">Lengkapi identitas anda</h2>
        {/* Status panel */}
        <div style={{
          padding: '12px',
          borderRadius: '10px',
          marginBottom: '10px',
          backgroundColor: apl01Loading ? '#f1f3f5' : (apl01Data ? '#d1ecf1' : '#fff3cd'),
          border: `1px solid ${apl01Data ? '#bee5eb' : '#ffeeba'}`,
          color: apl01Data ? '#0c5460' : '#856404',
          fontSize: '13px',
        }}>
          {apl01Loading && 'Memeriksa status APL-01...'}
          {!apl01Loading && apl01Data && 'Status: Data APL-01/Profil ditemukan.'}
          {!apl01Loading && !apl01Data && (apl01Error || 'Belum ada data APL-01, silakan lengkapi dan kirim formulir ini.')}
        </div>

        <form style={formContainerStyle} className="form-container" onSubmit={handleSubmit}>
          <div style={leftColumnStyle}>
            <div style={inputGroupStyle} className="input-group">
              <label style={labelStyle} className="label">Nama Lengkap</label>
              <input type="text" style={inputStyle} className="input" value={form.nama_lengkap} onChange={(e)=>updateForm('nama_lengkap', e.target.value)} />
            </div>
            
            <div style={inputGroupStyle} className="input-group">
              <label style={labelStyle} className="label">Tanggal lahir</label>
              <input type="date" style={inputStyle} className="input" value={form.tanggal_lahir} onChange={(e)=>updateForm('tanggal_lahir', e.target.value)} />
            </div>
            
            <div style={inputGroupStyle} className="input-group">
              <label style={labelStyle} className="label">Kelas</label>
              <input type="text" style={inputStyle} className="input" />
            </div>
            
            <div style={inputGroupStyle} className="input-group">
              <label style={labelStyle} className="label">Jurusan</label>
              <input type="text" style={inputStyle} className="input" />
            </div>
            
            <div style={inputGroupStyle} className="input-group">
              <label style={labelStyle} className="label">Alamat</label>
              <textarea style={textareaStyle} className="textarea" value={form.alamat_rumah} onChange={(e)=>updateForm('alamat_rumah', e.target.value)}></textarea>
            </div>
            
            <div style={inputGroupStyle} className="input-group">
              <label style={labelStyle} className="label">Jenis kelamin</label>
              <div style={radioGroupStyle} className="radio-group">
                <label style={radioLabelStyle} className="radio-label">
                  <input type="radio" name="gender" value="Laki-laki" checked={form.jenis_kelamin==='Laki-laki'} onChange={(e)=>updateForm('jenis_kelamin', e.target.value)} style={radioInputStyle} className="radio-input" />
                  Laki-laki
                </label>
                <label style={radioLabelStyle} className="radio-label">
                  <input type="radio" name="gender" value="Perempuan" checked={form.jenis_kelamin==='Perempuan'} onChange={(e)=>updateForm('jenis_kelamin', e.target.value)} style={radioInputStyle} className="radio-input" />
                  Perempuan
                </label>
              </div>
            </div>
            
            <div style={inputGroupStyle} className="input-group">
              <label style={labelStyle} className="label">KTP/Kartu Pelajar</label>
              <div style={fileUploadStyle} className="file-upload">
                <input 
                  type="file" 
                  accept=".png,.jpg,.jpeg,.pdf"
                  style={fileInputStyle}
                  onChange={(e) => handleFileUpload('ktp', e)}
                />
                <div style={fileButtonStyle} className="file-button">
                  <span style={{ color: uploadedFiles.ktp ? '#333' : '#666' }}>
                    {getFileDisplayName('ktp') || ''}
                  </span>
                  <span style={uploadIconStyle} className="upload-icon">↑</span>
                </div>
              </div>
            </div>
            
            <div style={inputGroupStyle} className="input-group">
              <label style={labelStyle} className="label">Foto 3x4</label>
              <div style={fileUploadStyle} className="file-upload">
                <input 
                  type="file" 
                  accept=".png,.jpg,.jpeg,.pdf"
                  style={fileInputStyle}
                  onChange={(e) => handleFileUpload('foto', e)}
                />
                <div style={fileButtonStyle} className="file-button">
                  <span style={{ color: uploadedFiles.foto ? '#333' : '#666' }}>
                    {getFileDisplayName('foto') || ''}
                  </span>
                  <span style={uploadIconStyle} className="upload-icon">↑</span>
                </div>
              </div>
            </div>
            
            <div style={inputGroupStyle} className="input-group">
              <label style={labelStyle} className="label">Sertifikat</label>
              <div style={fileUploadStyle} className="file-upload">
                <input 
                  type="file" 
                  accept=".png,.jpg,.jpeg,.pdf"
                  style={fileInputStyle}
                  onChange={(e) => handleFileUpload('sertifikat', e)}
                />
                <div style={fileButtonStyle} className="file-button">
                  <span style={{ color: uploadedFiles.sertifikat ? '#333' : '#666' }}>
                    {getFileDisplayName('sertifikat') || ''}
                  </span>
                  <span style={uploadIconStyle} className="upload-icon">↑</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style={rightColumnStyle}>
            <div style={inputGroupStyle} className="input-group">
              <label style={labelStyle} className="label">Jenis Skema</label>
              <input type="text" style={inputStyle} className="input" placeholder="Tujuan asesmen" value={form.tujuan_asesmen} onChange={(e)=>updateForm('tujuan_asesmen', e.target.value)} />
            </div>

            <div style={inputGroupStyle} className="input-group">
              <label style={labelStyle} className="label">No Skema</label>
              <input type="number" style={inputStyle} className="input" placeholder="Schema ID" value={form.schema_id} onChange={(e)=>updateForm('schema_id', e.target.value)} />
            </div>
            
            <div style={inputGroupStyle} className="input-group">
              <label style={labelStyle} className="label">Tujuan Assessment</label>
              <div style={checkboxGroupStyle} className="checkbox-group">
                <label style={checkboxLabelStyle} className="checkbox-label">
                  <input type="radio" name="tujuan_assessment" value="Sertifikasi" checked={form.tujuan_asesmen==='Sertifikasi'} onChange={(e)=>updateForm('tujuan_asesmen', e.target.value)} style={radioAssessmentInputStyle} className="radio-assessment-input" />
                  <span>Sertifikasi</span>
                </label>
                <label style={checkboxLabelStyle} className="checkbox-label">
                  <input type="radio" name="tujuan_assessment" value="PKT" checked={form.tujuan_asesmen==='PKT'} onChange={(e)=>updateForm('tujuan_asesmen', e.target.value)} style={radioAssessmentInputStyle} className="radio-assessment-input" />
                  <span>Pengakuan Kompetensi Terkini (PKT)</span>
                </label>
                <label style={checkboxLabelStyle} className="checkbox-label">
                  <input type="radio" name="tujuan_assessment" value="RPL" checked={form.tujuan_asesmen==='RPL'} onChange={(e)=>updateForm('tujuan_asesmen', e.target.value)} style={radioAssessmentInputStyle} className="radio-assessment-input" />
                  <span>Rekognisi Pembelajaran Lampau (RPL)</span>
                </label>
                <label style={checkboxLabelStyle} className="checkbox-label">
                  <input type="radio" name="tujuan_assessment" value="Lainnya" checked={form.tujuan_asesmen==='Lainnya'} onChange={(e)=>updateForm('tujuan_asesmen', e.target.value)} style={radioAssessmentInputStyle} className="radio-assessment-input" />
                  <span>Lainnya</span>
                </label>
              </div>
            </div>
            
            <div style={inputGroupStyle} className="input-group">
              <label style={labelStyle} className="label">Asesor</label>
              <input type="text" style={inputStyle} className="input" />
            </div>
            
            <div style={inputGroupStyle} className="input-group">
              <label style={labelStyle} className="label">Surat keterangan TH</label>
              <div style={fileUploadStyle} className="file-upload">
                <input 
                  type="file" 
                  accept=".png,.jpg,.jpeg,.pdf"
                  style={fileInputStyle}
                  onChange={(e) => handleFileUpload('suratTH', e)}
                />
                <div style={fileButtonStyle} className="file-button">
                  <span style={{ color: uploadedFiles.suratTH ? '#333' : '#666' }}>
                    {getFileDisplayName('suratTH') || ''}
                  </span>
                  <span style={uploadIconStyle} className="upload-icon">↑</span>
                </div>
              </div>
            </div>
            
            <div style={inputGroupStyle} className="input-group">
              <label style={labelStyle} className="label">Surat keterangan UNIK</label>
              <div style={fileUploadStyle} className="file-upload">
                <input 
                  type="file" 
                  accept=".png,.jpg,.jpeg,.pdf"
                  style={fileInputStyle}
                  onChange={(e) => handleFileUpload('suratUNIK', e)}
                />
                <div style={fileButtonStyle} className="file-button">
                  <span style={{ color: uploadedFiles.suratUNIK ? '#333' : '#666' }}>
                    {getFileDisplayName('suratUNIK') || ''}
                  </span>
                  <span style={uploadIconStyle} className="upload-icon">↑</span>
                </div>
              </div>
            </div>
            
            <button type="submit" style={submitButtonStyle} className="submit-button">
              {submitting ? 'Mengirim...' : 'Kirim'}
            </button>
          </div>
        </form>

        {/* Data Pribadi Tambahan (wajib backend) */}
        <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <div style={inputGroupStyle} className="input-group">
            <label style={labelStyle} className="label">No KTP</label>
            <input type="text" style={inputStyle} className="input" value={form.no_ktp} onChange={(e)=>updateForm('no_ktp', e.target.value)} />
          </div>
          <div style={inputGroupStyle} className="input-group">
            <label style={labelStyle} className="label">Tempat Lahir</label>
            <input type="text" style={inputStyle} className="input" value={form.tempat_lahir} onChange={(e)=>updateForm('tempat_lahir', e.target.value)} />
          </div>
          <div style={inputGroupStyle} className="input-group">
            <label style={labelStyle} className="label">Kebangsaan</label>
            <input type="text" style={inputStyle} className="input" value={form.kebangsaan} onChange={(e)=>updateForm('kebangsaan', e.target.value)} />
          </div>
          <div style={inputGroupStyle} className="input-group">
            <label style={labelStyle} className="label">Kode Pos</label>
            <input type="text" style={inputStyle} className="input" value={form.kode_pos} onChange={(e)=>updateForm('kode_pos', e.target.value)} />
          </div>
          <div style={inputGroupStyle} className="input-group">
            <label style={labelStyle} className="label">Telepon Rumah</label>
            <input type="text" style={inputStyle} className="input" value={form.no_telepon_rumah} onChange={(e)=>updateForm('no_telepon_rumah', e.target.value)} />
          </div>
          <div style={inputGroupStyle} className="input-group">
            <label style={labelStyle} className="label">Telepon</label>
            <input type="text" style={inputStyle} className="input" value={form.no_telepon} onChange={(e)=>updateForm('no_telepon', e.target.value)} />
          </div>
          <div style={inputGroupStyle} className="input-group">
            <label style={labelStyle} className="label">Email</label>
            <input type="email" style={inputStyle} className="input" value={form.email} onChange={(e)=>updateForm('email', e.target.value)} />
          </div>
          <div style={inputGroupStyle} className="input-group">
            <label style={labelStyle} className="label">Pendidikan</label>
            <input type="text" style={inputStyle} className="input" value={form.kualifikasi_pendidikan} onChange={(e)=>updateForm('kualifikasi_pendidikan', e.target.value)} />
          </div>
          <div style={inputGroupStyle} className="input-group">
            <label style={labelStyle} className="label">Nama Institusi</label>
            <input type="text" style={inputStyle} className="input" value={form.nama_institusi} onChange={(e)=>updateForm('nama_institusi', e.target.value)} />
          </div>
          <div style={inputGroupStyle} className="input-group">
            <label style={labelStyle} className="label">Jabatan</label>
            <input type="text" style={inputStyle} className="input" value={form.jabatan} onChange={(e)=>updateForm('jabatan', e.target.value)} />
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div style={popupOverlayStyle} onClick={handleClosePopup}>
          <div style={popupContainerStyle} className="popup-container" onClick={(e) => e.stopPropagation()}>
            <div style={iconContainerStyle}>
              <div style={successIconStyle} className="success-icon">
                {/* Check mark circle - di atas */}
                <div style={checkCircleStyle} className="check-circle">
                  <div style={checkMarkStyle} className="check-mark">✓</div>
                </div>
                
                {/* List lines (3 horizontal lines) - di bawah */}
                <div style={listLinesStyle} className="list-lines">
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
            
            <div style={popupTitleStyle} className="popup-title">Jawaban anda telah direkam!</div>
            
            <button 
              style={okayButtonStyle} 
              className="okay-button"
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

export default APL01;