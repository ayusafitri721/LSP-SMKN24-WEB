import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';
import { submitFormAk01, fetchCsrfCookie, getFormAk01ByAssesi, getAssesmentById } from '../../api/api';
import { useDashboardAsesi } from '../../context/DashboardAsesiContext';

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
  padding: '10px',
};

const modalContainerStyle = {
  backgroundColor: '#f0f0f0',
  borderRadius: '20px',
  padding: '30px 50px',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  minWidth: '550px',
  maxWidth: '600px',
  position: 'relative',
  maxHeight: '90vh',
  overflowY: 'auto',
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
  maxWidth: '250px',
  wordWrap: 'break-word',
};

const pageContainerStyle = {
  backgroundColor: 'white',
  fontFamily: 'Arial, sans-serif',
  padding: '15px',
  minHeight: '100vh',
};

// Header section matching APL-01 design
const headerSectionStyle = {
  backgroundImage: "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '0 0 40px 40px',
  overflow: 'hidden',
  marginBottom: '0',
};

// Navigation container matching APL-01
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

// Logo container matching APL-01
const logoContainerStyle = {
  height: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10px',
  marginBottom: '10px',
};

// Logo text matching APL-01
const logoTextStyle = {
  color: 'white',
  fontSize: '36px',
  fontWeight: 'bold',
  margin: 0,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  letterSpacing: '1px',
};

const contentCardStyle = {
  backgroundColor: 'white',
  borderRadius: '0 0 15px 15px',
  padding: '30px',
  boxShadow: 'none',
  marginTop: '0',
  border: 'none',
};

const headerSectionStyle2 = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '20px',
  marginBottom: '20px',
  paddingBottom: '15px',
  borderBottom: '2px solid #FF8C00',
};

const logoContainer2Style = {
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

const transparentBoxStyle = {
  backgroundColor: 'rgba(240, 240, 240, 0.7)',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  marginBottom: '10px',
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

const checkboxGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4px 8px',
  marginTop: '8px',
};

const checkboxItemStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  fontSize: '10px',
  color: '#333',
  lineHeight: '1.3',
};

const checkboxStyle = {
  marginRight: '6px',
  marginTop: '1px',
  flexShrink: 0,
  transform: 'scale(0.8)',
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
  fontSize: '11px',
  color: '#333',
  lineHeight: '1.3',
  marginBottom: '6px',
};

// Style for date and time input
const dateInputStyle = {
  flex: 1, 
  fontSize: '11px', 
  padding: '4px 6px', 
  border: '1px solid #ddd', 
  borderRadius: '3px',
  fontFamily: 'Arial, sans-serif',
  cursor: 'pointer',
  minWidth: '120px',
};

// Style for editable TUK text
const editableTextStyle = {
  fontSize: '11px',
  color: '#333',
  border: 'none',
  background: 'transparent',
  outline: 'none',
  fontFamily: 'Arial, sans-serif',
  width: '100%',
  padding: '2px',
};

const AK01 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userAssessments, currentAsesi, apl01Data } = useDashboardAsesi();

  const [formData, setFormData] = useState({
    skemaSertifikasi: '',
    judulUnit: '',
    nomorUnit: '',
    tukTemplate: 'Sewaktu/Tempat Kerja/Mandiri*',
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
  const [files, setFiles] = useState([]); // PDF files
  const [fileDescription, setFileDescription] = useState('Persetujuan asesmen');
  const [existingAk01, setExistingAk01] = useState(null);

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

  // Prefill Nama Asesi from context (similar strategy as APL-02)
  useEffect(() => {
    const pickFullName = (obj) => {
      if (!obj) return '';
      return (
        obj.fullname || obj.full_name || obj.nama_lengkap || obj.namaLengkap || obj.name || obj.username || ''
      );
    };
    if (!formData.namaAsesi) {
      let name = pickFullName(currentAsesi) || pickFullName(currentAsesi?.user);
      if (!name) {
        const a = Array.isArray(apl01Data) ? apl01Data[0] : apl01Data;
        name = pickFullName(a) || pickFullName(a?.user);
      }
      if (name) setFormData(prev => ({ ...prev, namaAsesi: name }));
    }
  }, [currentAsesi, apl01Data, formData.namaAsesi]);

  // Auto-populate from active assessment: unit info, TUK, assessor name, date
  useEffect(() => {
    (async () => {
      const ua = Array.isArray(userAssessments) ? userAssessments : [];
      const chosen = ua.find((a) => a?.status === 'mengerjakan' || a?.status === 'belum') || ua[0];
      if (!chosen) {
        console.warn('AK-01 No assessments found - using development fallback');
        // DEVELOPMENT FALLBACK: Set minimal test values for development/testing
        setFormData(prev => ({
          ...prev,
          judulUnit: prev.judulUnit || 'Test Unit Kompetensi',
          nomorUnit: prev.nomorUnit || 'TIK.PR02.001.01',
          skemaSertifikasi: prev.skemaSertifikasi || 'Test Skema Sertifikasi',
          tukPelaksanaan: prev.tukPelaksanaan || 'SMK Negeri 24 Jakarta - Test Lab',
          namaAsesor: prev.namaAsesor || 'Test Asesor, S.Kom., M.T.',
          tanggal: prev.tanggal || new Date().toISOString().slice(0, 10),
          waktu: prev.waktu || '08:00'
        }));
        return;
      }
      
      let assesmentDetail = chosen?.assesment || null;
      if (!assesmentDetail && chosen?.assesment_id) {
        try {
          await fetchCsrfCookie();
          const res = await getAssesmentById(chosen.assesment_id);
          assesmentDetail = res.data?.data ?? null;
        } catch (error) {
          console.warn('Failed to fetch assessment detail:', error);
        }
      }
      if (!assesmentDetail) return;

      // Derive unit info with better fallback
      const units = assesmentDetail?.units || assesmentDetail?.unit_kompetensi || assesmentDetail?.unitKompetensi || [];
      const firstUnit = Array.isArray(units) ? units[0] : (units || {});
      const judulUnit = firstUnit?.judul_unit || firstUnit?.judul || firstUnit?.nama || firstUnit?.name || '';
      const nomorUnit = firstUnit?.kode_unit || firstUnit?.kode || firstUnit?.code || '';

      // Schema info for better context
      const skemaSertifikasi = assesmentDetail?.skema?.nama_skema || assesmentDetail?.skema?.name || 
                              assesmentDetail?.nama_skema || assesmentDetail?.skema_name || '';

      // TUK info with multiple fallbacks
      const tukPelaksanaan = assesmentDetail?.tuk?.nama || assesmentDetail?.tuk?.lokasi || 
                            assesmentDetail?.tuk || assesmentDetail?.lokasi || 
                            assesmentDetail?.tempat_asesmen || formData.tukPelaksanaan;

      // Assessor info with better extraction
      const asesor = assesmentDetail?.assesor || assesmentDetail?.assessor;
      const namaAsesor = asesor?.nama_lengkap || asesor?.full_name || asesor?.name || 
                        asesor?.fullname || formData.namaAsesor;

      // Date handling with better parsing
      const tanggalRaw = assesmentDetail?.tanggal_mulai || assesmentDetail?.tanggal_assesment || 
                        assesmentDetail?.start_date || assesmentDetail?.assessment_date || '';
      const tanggal = formData.tanggal || (tanggalRaw ? String(tanggalRaw).substring(0,10) : '');

      // Time extraction if available
      const waktuRaw = assesmentDetail?.waktu_mulai || assesmentDetail?.start_time || '';
      const waktu = formData.waktu || (waktuRaw ? String(waktuRaw).substring(0,5) : '');

      console.log('AK-01 Auto-populated data:', {
        judulUnit, nomorUnit, skemaSertifikasi, tukPelaksanaan, namaAsesor, tanggal, waktu
      });

      setFormData((prev) => ({
        ...prev,
        skemaSertifikasi: prev.skemaSertifikasi || skemaSertifikasi,
        judulUnit: prev.judulUnit || judulUnit,
        nomorUnit: prev.nomorUnit || nomorUnit,
        tukPelaksanaan: tukPelaksanaan || prev.tukPelaksanaan,
        namaAsesor: namaAsesor || prev.namaAsesor,
        tanggal: tanggal || prev.tanggal,
        waktu: waktu || prev.waktu,
      }));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(userAssessments)]);

  // Helper to derive asesi_id from context/localStorage
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

  // Fetch existing AK-01 submission for this asesi (align with API)
  useEffect(() => {
    (async () => {
      const asesiId = deriveAsesiId();
      if (!asesiId) return;
      try {
        await fetchCsrfCookie();
        const res = await getFormAk01ByAssesi(asesiId);
        // Backend may return array or object with data
        const payload = res.data?.data ?? res.data ?? null;
        if (payload && (Array.isArray(payload) ? payload.length > 0 : true)) {
          const existingData = Array.isArray(payload) ? payload[0] : payload;
          setExistingAk01(existingData);
          
          // Pre-fill form with existing data if available
          if (existingData) {
            console.log('Found existing AK-01 data:', existingData);
            setFormData((prev) => ({
              ...prev,
              skemaSertifikasi: existingData.skema_sertifikasi || prev.skemaSertifikasi,
              judulUnit: existingData.judul_unit || prev.judulUnit,
              nomorUnit: existingData.nomor_unit || prev.nomorUnit,
              tukTemplate: existingData.tuk_template || prev.tukTemplate,
              namaAsesor: existingData.nama_asesor || prev.namaAsesor,
              namaAsesi: existingData.nama_asesi || prev.namaAsesi,
              tanggal: existingData.tanggal ? String(existingData.tanggal).substring(0,10) : prev.tanggal,
              waktu: existingData.waktu ? String(existingData.waktu).substring(0,5) : prev.waktu,
              tukPelaksanaan: existingData.tuk_pelaksanaan || prev.tukPelaksanaan,
              // Parse checkedItems if stored as JSON or object
              checkedItems: existingData.bukti_dikumpulkan ? 
                (typeof existingData.bukti_dikumpulkan === 'string' ? 
                  JSON.parse(existingData.bukti_dikumpulkan) : existingData.bukti_dikumpulkan) 
                : prev.checkedItems,
            }));
          }
        }
      } catch (e) {
        // 404 means none exists yet; ignore silently
        console.log('No existing AK-01 found for asesi:', asesiId);
      }
    })();
    // only run once after mount + when context becomes available
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAsesi, apl01Data]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert('Harap lengkapi semua field yang diperlukan dan pilih minimal satu bukti yang akan dikumpulkan.');
      return;
    }
    // Derive assesment_asesi_id and skema_id from userAssessments
    const ua = Array.isArray(userAssessments) ? userAssessments : [];
    const chosen = ua.find((a) => a?.status === 'active' || a?.status === 'scheduled') || ua[0];
    const assesmentAsesiId = chosen?.id;
    let skemaId = chosen?.assesment?.skema_id || chosen?.skema_id || chosen?.schema_id;

    // If skemaId is still missing but we have assesment_id, fetch it from the backend
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

    if (!files || files.length === 0) {
      alert('Lampirkan minimal satu file PDF untuk persetujuan (attachments).');
      return;
    }
    try {
      // Ensure CSRF/session is fresh before posting (Sanctum)
      await fetchCsrfCookie();
      // Build multipart payload per backend validation
      const payload = new FormData();
      payload.append('assesment_asesi_id', String(assesmentAsesiId));
      payload.append('skema_id', String(skemaId));
      files.forEach((file, idx) => {
        payload.append(`attachments[${idx}][file]`, file);
        payload.append(`attachments[${idx}][description]`, fileDescription || 'Lampiran AK01');
      });

      // Attempt to submit to backend
      await submitFormAk01(payload);
      setIsFormSubmitted(true);
      setShowModal(true);
    } catch (err) {
      // Fallback: store locally if backend fails, and inform the user
      console.error('Gagal submit FR.AK.01 ke server:', err);
      try {
        const backup = { assesment_asesi_id: assesmentAsesiId, skema_id: skemaId, description: fileDescription, filenames: Array.from(files).map(f => f.name) };
        localStorage.setItem('ak01FormData', JSON.stringify({ form: formData, attachments: backup }));
      } catch {}
      alert('Gagal mengirim ke server. Data disimpan sementara di perangkat Anda. Coba lagi nanti.');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimeout(() => {
      navigate('/dashboard-asesi/ak-04');
    }, 300);
  };

  return (
    <div style={pageContainerStyle} className="page-container">
      {/* Scrollbar styling for WebKit browsers + RESPONSIVE CSS */}
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

          /* RESPONSIVE STYLES */
          @media (max-width: 768px) {
            .page-container {
              padding: 10px !important;
            }
            
            .content-card {
              padding: 20px !important;
            }
            
            .logo-text {
              font-size: 28px !important;
            }
            
            .logo-container {
              height: 100px !important;
            }
            
            .nav-container {
              max-width: 80% !important;
            }
            
            .header-section2 {
              flex-direction: column !important;
              text-align: center !important;
              align-items: center !important;
            }
            
            .logo-container2 {
              align-self: center !important;
            }
            
            .title-text {
              font-size: 14px !important;
            }
            
            .subtitle-text {
              font-size: 14px !important;
            }
            
            .two-column-layout {
              flex-direction: column !important;
              gap: 10px !important;
            }
            
            .transparent-box {
              height: auto !important;
              min-height: 100px !important;
              padding: 12px !important;
            }
            
            .checkbox-grid {
              grid-template-columns: 1fr !important;
            }
            
            .submit-button {
              width: 100% !important;
              float: none !important;
              margin-top: 15px !important;
            }
            
            .data-table {
              font-size: 11px !important;
            }
            
            .data-table td {
              padding: 8px !important;
            }
            
            .input-field {
              font-size: 11px !important;
              padding: 3px 6px !important;
              min-width: 0 !important;
            }
            
            .date-time-input {
              min-width: 100px !important;
              font-size: 10px !important;
            }
            
            .warning-notification {
              right: 10px !important;
              left: 10px !important;
              max-width: none !important;
              font-size: 12px !important;
            }
            
            .modal-container {
              min-width: 90% !important;
              max-width: 90% !important;
              padding: 20px 30px !important;
              margin: 10px !important;
            }
            
            .modal-title {
              font-size: 16px !important;
              margin-bottom: 20px !important;
              padding-bottom: 20px !important;
            }
            
            .modal-button {
              position: relative !important;
              bottom: auto !important;
              right: auto !important;
              width: 100% !important;
              margin-top: 20px !important;
            }

            .table-input-row {
              flex-wrap: wrap !important;
              gap: 5px !important;
            }
            
            .table-input-row span {
              min-width: auto !important;
            }
            
            .table-input-row input {
              min-width: 150px !important;
              flex: 1 !important;
            }

            .form-row {
              flex-wrap: wrap !important;
              gap: 3px !important;
            }
            
            .form-row strong {
              min-width: auto !important;
            }
          }
          
          @media (max-width: 480px) {
            .logo-text {
              font-size: 24px !important;
            }
            
            .nav-container {
              max-width: 90% !important;
              padding: 5px 10px !important;
            }
            
            .content-card {
              padding: 15px !important;
            }
            
            .transparent-box {
              padding: 10px !important;
            }
            
            .section-text {
              font-size: 10px !important;
            }
            
            .box-text {
              font-size: 10px !important;
            }
            
            .checkbox-item {
              font-size: 9px !important;
            }
            
            .input-field {
              font-size: 10px !important;
            }
            
            .submit-button {
              font-size: 12px !important;
              padding: 10px 20px !important;
            }
            
            .data-table {
              font-size: 10px !important;
            }
            
            .data-table td {
              padding: 6px !important;
            }

            .table-input-row input {
              min-width: 120px !important;
            }
          }
        `}
      </style>

      {/* Warning Notification */}
      {showWarning && (
        <div style={warningNotificationStyle} className="warning-notification">
          Silakan isi dan kirim formulir FR.AK.01 terlebih dahulu!
        </div>
      )}

      {/* Header Section matching APL-01 design */}
      <div style={headerSectionStyle}>
        <div style={navContainerStyle} className="nav-scrollbar nav-container">
          <NavAsesi activeTab="FR.AK.01" />
        </div>

        <div style={logoContainerStyle} className="logo-container">
          <h1 style={logoTextStyle} className="logo-text">
            MyLSP
          </h1>
        </div>
      </div>

      {/* Content Card */}
      <div style={contentCardStyle} className="content-card">
        <div style={headerSectionStyle2} className="header-section2">
          <div style={logoContainer2Style} className="logo-container2">
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
            <div style={titleStyle} className="title-text">FR.AK.01</div>
            <div style={subtitleStyle} className="subtitle-text">PERSETUJUAN ASESMEN DAN KERAHASIAAN</div>
          </div>
        </div>

        {/* Status Banner */}
        {existingAk01 && (
          <div style={{
            backgroundColor: '#d1ecf1',
            border: '1px solid #bee5eb',
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '15px',
            fontSize: '13px',
            color: '#0c5460'
          }}>
            <strong>📋 Data Existing:</strong> Form AK-01 sudah pernah disubmit sebelumnya. 
            Data di bawah sudah terisi otomatis dari submission sebelumnya dan data assessment aktif.
          </div>
        )}

        {/* Development Mode Banner */}
        {formData.namaAsesor === 'Test Asesor, S.Kom., M.T.' && (
          <div style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffeeba',
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '15px',
            fontSize: '13px',
            color: '#856404'
          }}>
            <strong>🧪 DEVELOPMENT MODE:</strong> Menggunakan data test karena tidak ada assessment aktif. 
            Semua fitur tetap berfungsi untuk keperluan testing.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Skema Sertifikasi */}
          <table style={{width: '100%', marginBottom: '15px', fontSize: '12px'}} className="data-table">
            <tbody>
              <tr>
                <td style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  backgroundColor: '#f8f9fa',
                  fontWeight: 'bold',
                  width: '150px',
                  textAlign: 'center',
                  verticalAlign: 'middle'
                }}>
                  Skema Sertifikasi
                </td>
                <td style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  backgroundColor: 'white'
                }}>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <div style={{display: 'flex', alignItems: 'center'}} className="table-input-row">
                      <span style={{minWidth: '100px', fontSize: '12px', fontWeight: 'bold'}}>Nama Skema</span>
                      <span style={{margin: '0 8px'}}>:</span>
                      <input
                        type="text"
                        style={{
                          flex: 1,
                          padding: '4px 8px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: '12px',
                          backgroundColor: formData.skemaSertifikasi ? '#f0f8ff' : 'white'
                        }}
                        className="input-field"
                        value={formData.skemaSertifikasi}
                        onChange={(e) => handleInputChange('skemaSertifikasi', e.target.value)}
                        placeholder="Auto-filled dari assessment"
                        title={formData.skemaSertifikasi ? 'Data dari API' : 'Belum ada data'}
                      />
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}} className="table-input-row">
                      <span style={{minWidth: '100px', fontSize: '12px', fontWeight: 'bold'}}>Judul Unit</span>
                      <span style={{margin: '0 8px'}}>:</span>
                      <input
                        type="text"
                        style={{
                          flex: 1,
                          padding: '4px 8px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: '12px',
                          backgroundColor: formData.judulUnit ? '#f0f8ff' : 'white'
                        }}
                        className="input-field"
                        value={formData.judulUnit}
                        onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                        placeholder="Auto-filled dari assessment"
                        title={formData.judulUnit ? 'Data dari API' : 'Belum ada data'}
                      />
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}} className="table-input-row">
                      <span style={{minWidth: '100px', fontSize: '12px', fontWeight: 'bold'}}>Nomor Unit</span>
                      <span style={{margin: '0 8px'}}>:</span>
                      <input
                        type="text"
                        style={{
                          flex: 1,
                          padding: '4px 8px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: '12px',
                          backgroundColor: formData.nomorUnit ? '#f0f8ff' : 'white'
                        }}
                        className="input-field"
                        value={formData.nomorUnit}
                        onChange={(e) => handleInputChange('nomorUnit', e.target.value)}
                        placeholder="Auto-filled dari assessment"
                        title={formData.nomorUnit ? 'Data dari API' : 'Belum ada data'}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div style={transparentBoxStyle} className="transparent-box">
            <div style={boxTextStyle} className="box-text">
              Persetujuan Asesmen ini untuk menjamin bahwa Asesi telah diberi arahan secara rinci tentang perencanaan dan
              proses asesmen.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }} className="two-column-layout">
            <div style={{ flex: 1 }}>
              {/* Box 1 Kiri - TUK, Nama Asesor, Nama Asesi */}
              <div style={{...transparentBoxStyle, height: '120px', display: 'flex', flexDirection: 'column', padding: '15px', justifyContent: 'flex-start'}} className="transparent-box">
                <div style={{...sectionTextStyle, marginBottom: '8px', display: 'flex', alignItems: 'center'}} className="section-text form-row">
                  <strong style={{minWidth: '25px'}}>TUK</strong>
                  <span style={{margin: '0 5px'}}>{' : '}</span>
                  <input
                    type="text"
                    style={editableTextStyle}
                    value={formData.tukTemplate}
                    onChange={(e) => handleInputChange('tukTemplate', e.target.value)}
                    placeholder="Coret yang tidak perlu"
                  />
                </div>
                <div style={{...sectionTextStyle, marginBottom: '8px', display: 'flex', alignItems: 'center'}} className="section-text form-row">
                  <strong style={{minWidth: '90px'}}>Nama Asesor</strong>
                  <span style={{margin: '0 5px'}}>{' : '}</span>
                  <input
                    type="text"
                    style={{ 
                      flex: 1, 
                      fontSize: '11px', 
                      padding: '3px 6px', 
                      border: '1px solid #ddd', 
                      borderRadius: '3px',
                      backgroundColor: formData.namaAsesor ? '#f0f8ff' : 'white'
                    }}
                    className="input-field"
                    value={formData.namaAsesor}
                    onChange={(e) => handleInputChange('namaAsesor', e.target.value)}
                    placeholder="Auto-filled dari assessment"
                    title={formData.namaAsesor ? 'Data dari API' : 'Belum ada data'}
                  />
                </div>
                <div style={{...sectionTextStyle, marginBottom: '0', display: 'flex', alignItems: 'center'}} className="section-text form-row">
                  <strong style={{minWidth: '90px'}}>Nama Asesi</strong>
                  <span style={{margin: '0 5px'}}>{' : '}</span>
                  <input
                    type="text"
                    style={{ 
                      flex: 1, 
                      fontSize: '11px', 
                      padding: '3px 6px', 
                      border: '1px solid #ddd', 
                      borderRadius: '3px',
                      backgroundColor: formData.namaAsesi ? '#f0f8ff' : 'white'
                    }}
                    className="input-field"
                    value={formData.namaAsesi}
                    onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                    placeholder="Auto-filled dari profile"
                    title={formData.namaAsesi ? 'Data dari API' : 'Belum ada data'}
                  />
                </div>
              </div>

              {/* Box 2 Kiri - Bukti yang akan dikumpulkan */}
              <div style={{...transparentBoxStyle, height: '130px', display: 'flex', flexDirection: 'column', padding: '15px'}} className="transparent-box">
                <div style={{ ...sectionTextStyle, fontWeight: 'bold', marginBottom: '8px', fontSize: '13px' }} className="section-text">
                  Bukti yang akan dikumpulkan:
                </div>
                <div style={{...checkboxGridStyle, gap: '5px 10px'}} className="checkbox-grid">
                  {[
                    { key: 'portfolio', label: 'Hasil verifikasi Portofolio' },
                    { key: 'reviewProduk', label: 'Hasil review produk' },
                    { key: 'observasi', label: 'Hasil Observasi Langsung' },
                    { key: 'kegiatanTerstruktur', label: 'Hasil kegiatan Terstruktur' },
                    { key: 'pertanyaan', label: 'Hasil Pertanyaan Lisan' },
                    { key: 'pertanyaanTertulis', label: 'Hasil Pertanyaan Tertulis' },
                    { key: 'wawancara', label: 'Hasil Pertanyaan wawancara' },
                  ].map((item) => (
                    <div key={item.key} style={{...checkboxItemStyle, fontSize: '11px'}} className="checkbox-item">
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

              {/* Box 3 Kiri - Pelaksanaan Asesmen */}
              <div style={{...transparentBoxStyle, height: '150px', display: 'flex', flexDirection: 'column', padding: '15px'}} className="transparent-box">
                <div style={{ ...sectionTextStyle, fontWeight: 'bold', marginBottom: '10px', fontSize: '13px' }} className="section-text">
                  Pelaksanaan asesmen disepakati pada:
                </div>
                <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', gap: '10px'}}>
                  <div style={{display: 'flex', alignItems: 'center'}} className="form-row">
                    <span style={{minWidth: '90px', fontSize: '12px'}}>Tanggal</span>
                    <span style={{margin: '0 5px'}}>{' : '}</span>
                    <input
                      type="date"
                      style={{
                        ...dateInputStyle,
                        backgroundColor: formData.tanggal ? '#f0f8ff' : 'white'
                      }}
                      className="date-time-input"
                      value={formData.tanggal}
                      onChange={(e) => handleInputChange('tanggal', e.target.value)}
                      title={formData.tanggal ? 'Data dari API' : 'Belum ada data'}
                    />
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}} className="form-row">
                    <span style={{minWidth: '90px', fontSize: '12px'}}>Waktu</span>
                    <span style={{margin: '0 5px'}}>{' : '}</span>
                    <input
                      type="time"
                      style={{
                        ...dateInputStyle,
                        backgroundColor: formData.waktu ? '#f0f8ff' : 'white'
                      }}
                      className="date-time-input"
                      value={formData.waktu}
                      onChange={(e) => handleInputChange('waktu', e.target.value)}
                      title={formData.waktu ? 'Data dari API' : 'Belum ada data'}
                    />
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}} className="form-row">
                    <span style={{minWidth: '90px', fontSize: '12px'}}>TUK</span>
                    <span style={{margin: '0 5px'}}>{' : '}</span>
                    <input
                      type="text"
                      style={{
                        flex: 1, 
                        fontSize: '11px', 
                        padding: '4px 6px', 
                        border: '1px solid #ddd', 
                        borderRadius: '3px',
                        backgroundColor: formData.tukPelaksanaan ? '#f0f8ff' : 'white'
                      }}
                      className="input-field"
                      value={formData.tukPelaksanaan}
                      onChange={(e) => handleInputChange('tukPelaksanaan', e.target.value)}
                      placeholder="Auto-filled dari assessment"
                      title={formData.tukPelaksanaan ? 'Data dari API' : 'Belum ada data'}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ flex: 1 }}>
              {/* Box 1 Kanan - Asesi */}
              <div style={{...transparentBoxStyle, height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '15px'}} className="transparent-box">
                <div style={{...boxTitleStyle, marginBottom: '10px', fontSize: '13px'}}>Asesi:</div>
                <div style={{ ...boxTextStyle, textAlign: 'justify', fontWeight: 'normal', fontSize: '12px', lineHeight: '1.4' }} className="box-text">
                  Bahwa saya telah mendapatkan penjelasan terkait hak dan prosedur banding asesmen dari asesor.
                </div>
              </div>

              {/* Box 2 Kanan - Asesor */}
              <div style={{...transparentBoxStyle, height: '130px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '15px'}} className="transparent-box">
                <div style={{fontSize: '13px', fontWeight: 'bold', marginBottom: '8px', color: '#333'}}>Asesor:</div>
                <div style={{ fontSize: '11px', color: '#333', lineHeight: '1.3', textAlign: 'justify', fontWeight: 'normal' }} className="box-text">
                  Menyatakan tidak akan membuka hasil pekerjaan yang diperoleh karena penguasaan saya sebagai Asesor dalam
                  pekerjaan Asesmen kepada siapapun atau organisasi manapun selain kepada pihak yang berwenang sehubungan
                  dengan kewajiban saya sebagai Asesor yang ditugaskan oleh LSP.
                </div>
              </div>

              {/* Box 3 Kanan - Asesi */}
              <div style={{...transparentBoxStyle, height: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '15px'}} className="transparent-box">
                <div style={{...boxTitleStyle, marginBottom: '10px', fontSize: '13px'}}>Asesi:</div>
                <div style={{ ...boxTextStyle, textAlign: 'justify', fontWeight: 'normal', fontSize: '12px', lineHeight: '1.4' }} className="box-text">
                  Saya setuju mengikuti Asesmen dengan pemahaman bahwa informasi yang dikumpulkan hanya digunakan untuk
                  pengembangan profesional dan hanya dapat diakses oleh orang tertentu saja.
                </div>
              </div>
            </div>
          </div>

          {/* Attachments Section (required by backend) */}
          <div style={{...transparentBoxStyle, marginTop: '10px'}} className="transparent-box">
            <div style={{ ...sectionTextStyle, fontWeight: 'bold', marginBottom: '8px', fontSize: '13px' }} className="section-text">
              Lampiran Persetujuan (PDF)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <input
                type="file"
                accept="application/pdf"
                multiple
                onChange={(e) => setFiles(Array.from(e.target.files || []))}
                style={{ fontSize: '12px' }}
              />
              <input
                type="text"
                placeholder="Deskripsi lampiran"
                value={fileDescription}
                onChange={(e) => setFileDescription(e.target.value)}
                style={{ fontSize: '12px', padding: '6px 8px', border: '1px solid #ddd', borderRadius: '4px' }}
              />
              {files?.length > 0 && (
                <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '12px', color: '#555' }}>
                  {files.map((f, idx) => (
                    <li key={idx}>{f.name}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <button type="submit" style={submitButtonStyle} className="submit-button">
            Kirim
          </button>
          <div style={{ clear: 'both', marginBottom: '20px' }}></div>
        </form>
      </div>

      {showModal && (
        <div style={modalOverlayStyle} onClick={handleCloseModal}>
          <div style={modalContainerStyle} className="modal-container" onClick={(e) => e.stopPropagation()}>
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
            
            <div style={modalTitleStyle} className="modal-title">Jawaban anda telah direkam!</div>
            
            <button 
              style={okayButtonStyle} 
              className="modal-button"
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

export default AK01;