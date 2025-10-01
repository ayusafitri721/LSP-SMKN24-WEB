// src/DashboardAsesi/APL-02/APL-02.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';
import { submitFormApl02, fetchCsrfCookie, getMyBuktiDokumenSelf, getApl01AttachmentsAsBukti, getApl02ById, getAssesmentById, getSkemas } from '../../api/api';
import { useDashboardAsesi } from '../../context/DashboardAsesiContext';

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
  height: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10px',
  marginBottom: '10px',
};

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
  padding: '25px',
  boxShadow: 'none',
  marginTop: '0',
  border: 'none',
  maxWidth: '100%',
};

// Popup styles
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

const APL02 = () => {
  const { currentAsesi, apl01Data, userAssessments, ensureUserAssesmentAsesi, fetchUserAssessments } = useDashboardAsesi();
  // State untuk data dari API
  const [assessorData, setAssessorData] = useState([]);
  
  const [showPopup, setShowPopup] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [checkAllState, setCheckAllState] = useState({ K: false, BK: false });
  // State untuk approval dan checks
  const [asesiApproval, setAsesiApproval] = useState('');
  const [asesorApproval, setAsesorApproval] = useState('Menunggu');
  const [individualChecks, setIndividualChecks] = useState({});

  // Backend-required fields/state
  const [skemaId, setSkemaId] = useState('');
  const [assesmentAsesiId, setAssesmentAsesiId] = useState('');
  const [unitKe, setUnitKe] = useState('1');
  const [kodeUnit, setKodeUnit] = useState('');
  const [elemenId, setElemenId] = useState('');
  const [kompetensinitas, setKompetensinitas] = useState('k'); // 'k' | 'bk'
  const [buktiList, setBuktiList] = useState(['']);
  const [buktiOptions, setBuktiOptions] = useState([]);
  const [asesiName, setAsesiName] = useState('');
  const [schemaDetail, setSchemaDetail] = useState(null);
  const [schemaAutoSelected, setSchemaAutoSelected] = useState(false);
  const [namaAsesor, setNamaAsesor] = useState('');
  const [tanggalAsesmen, setTanggalAsesmen] = useState('');
  // selections keyed by elementId: { kompetensinitas: 'k'|'bk'|'', bukti: [''] }
  const [elementSelections, setElementSelections] = useState({});
  
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

    window.history.pushState = function(...args) {
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/apl-02')) {
        setShowWarning(true);
        setTimeout(() => setShowWarning(false), 3000);
        return;
      }
      originalPushState.apply(window.history, args);
    };

    window.history.replaceState = function(...args) {
      if (!isFormSubmitted && !args[2].includes('/dashboard-asesi/apl-02')) {
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

  // Debug userAssessments to ensure it's loaded (OPTIMIZED - no auto-fetch to prevent spam)
  useEffect(() => {
    console.log('APL-02 userAssessments changed:', userAssessments);
    if (Array.isArray(userAssessments) && userAssessments.length > 0) {
      console.log('APL-02 Available assessments:', userAssessments.map(a => ({
        id: a.id,
        status: a.status,
        assesment_id: a.assesment_id,
        skema_id: a.skema_id
      })));
    } else if (!Array.isArray(userAssessments) || userAssessments.length === 0) {
      console.warn('APL-02 No userAssessments available - using development fallback');
      // DEVELOPMENT FALLBACK: Set minimal test values for development/testing
      if (!assesmentAsesiId) setAssesmentAsesiId('1');
      if (!skemaId) setSkemaId('1');
      if (!asesiName) setAsesiName('Test Asesi');
      if (!namaAsesor) setNamaAsesor('Test Asesor');
      if (!tanggalAsesmen) setTanggalAsesmen(new Date().toISOString().slice(0, 10));
    }
  }, [userAssessments]);

  // Prefill from context: schema_id from APL-01, assesment_asesi_id from user assessments, asesi name from current asesi
  useEffect(() => {
    // asesi full name preference order
    const pickFullName = (obj) => {
      if (!obj) return '';
      return (
        obj.fullname || obj.full_name || obj.nama_lengkap || obj.namaLengkap || obj.name || obj.username || ''
      );
    };
    let name = pickFullName(currentAsesi) || pickFullName(currentAsesi?.user);
    if (!name) {
      const a = Array.isArray(apl01Data) ? apl01Data[0] : apl01Data;
      name = pickFullName(a) || pickFullName(a?.user);
    }
    if (name && !asesiName) setAsesiName(name);

    // schema id from apl01 (robust paths)
    const extractSchemaId = (data) => {
      if (!data) return undefined;
      const pickFromObj = (obj) => (
        obj?.schema_id ||
        obj?.schemaId ||
        obj?.sertification_data?.schema_id ||
        obj?.sertificationData?.schema_id ||
        obj?.sertificationData?.schema?.id ||
        obj?.sertification_data?.schema?.id ||
        obj?.schema?.id
      );
      if (Array.isArray(data) && data.length > 0) {
        const first = data[0];
        return pickFromObj(first) || pickFromObj(first?.user) || pickFromObj(first?.sertificationData);
      }
      return pickFromObj(data) || pickFromObj(data?.user) || pickFromObj(data?.sertificationData);
    };
    const sid = extractSchemaId(apl01Data);
    if (sid && !skemaId) setSkemaId(String(sid));

    // assesment_asesi_id choose first available with better logging (use correct enum values)
    if (!assesmentAsesiId && Array.isArray(userAssessments) && userAssessments.length > 0) {
      const chosen = userAssessments.find(a => a?.status === 'mengerjakan' || a?.status === 'belum') || userAssessments[0];
      console.log('APL-02 Auto-selecting assessment:', chosen);
      if (chosen?.id) {
        setAssesmentAsesiId(String(chosen.id));
        console.log('APL-02 Set assesment_asesi_id:', chosen.id);
      }
    } else if (!Array.isArray(userAssessments) || userAssessments.length === 0) {
      console.warn('APL-02 No userAssessments available - user may need to register for assessment');
      // For new users without assessments, set basic fallback values
      if (!assesmentAsesiId) setAssesmentAsesiId('1');
      if (!skemaId) setSkemaId('1');
      if (!asesiName) setAsesiName(currentAsesi?.username || currentAsesi?.name || 'Asesi Baru');
      if (!namaAsesor) setNamaAsesor('Belum Ditentukan');
      if (!tanggalAsesmen) setTanggalAsesmen(new Date().toISOString().slice(0, 10));
    }
  }, [currentAsesi, apl01Data, userAssessments, asesiName, skemaId, assesmentAsesiId]);

  // Load bukti options for the logged-in asesi (combine regular bukti + APL-01 attachments)
  useEffect(() => {
    (async () => {
      try {
        await fetchCsrfCookie();
        
        let regularBukti = [];
        let apl01Bukti = [];
        
        // Fetch regular bukti dokumen (handle 404 gracefully)
        try {
          const regularBuktiRes = await getMyBuktiDokumenSelf();
          regularBukti = Array.isArray(regularBuktiRes.data?.data) ? regularBuktiRes.data.data : [];
          console.log('APL-02: Regular bukti dokumen:', regularBukti);
        } catch (buktiError) {
          console.warn('APL-02: Regular bukti dokumen endpoint not available:', buktiError.response?.status);
        }
        
        // Fetch APL-01 attachments as bukti options (handle 404 gracefully)
        try {
          const apl01BuktiRes = await getApl01AttachmentsAsBukti();
          apl01Bukti = Array.isArray(apl01BuktiRes.data?.data) ? apl01BuktiRes.data.data : [];
          console.log('APL-02: APL-01 attachments:', apl01Bukti);
        } catch (apl01Error) {
          console.warn('APL-02: APL-01 attachments endpoint error:', apl01Error.response?.status, apl01Error.response?.data);
        }
        
        // Combine both sources
        const combinedBukti = [
          ...regularBukti.map(it => ({ 
            id: it.id, 
            label: it.description,
            source: 'bukti_dokumen'
          })),
          ...apl01Bukti.map(it => ({ 
            id: it.id, 
            label: `📎 ${it.label} (dari APL-01)`,
            source: 'apl01'
          }))
        ];
        
        setBuktiOptions(combinedBukti);
        console.log('APL-02: Combined bukti options:', combinedBukti);
        
        if (apl01Bukti.length > 0) {
          console.log(`APL-02: Loaded ${apl01Bukti.length} APL-01 attachments as bukti options`);
        } else {
          console.warn('APL-02: No APL-01 attachments found');
        }
      } catch (e) {
        console.warn('APL-02: Error loading bukti options, user can still type manually:', e);
        // silently ignore; user can still type manually
      }
    })();
  }, []);

  // Resolve Nama Asesor and Tanggal from active assessment (OPTIMIZED)
  useEffect(() => {
    (async () => {
      const list = Array.isArray(userAssessments) ? userAssessments : [];
      const chosen = list.find(a => a?.status === 'mengerjakan' || a?.status === 'belum') || list[0];
      if (!chosen) return;
      
      let assesment = chosen?.assesment || null;
      if (!assesment && chosen?.assesment_id) {
        try {
          await fetchCsrfCookie();
          const res = await getAssesmentById(chosen.assesment_id);
          assesment = res.data?.data ?? null;
        } catch {}
      }
      if (!assesment) return;
      
      const nm = assesment?.assesor?.nama_lengkap || assesment?.assesor?.name || '';
      const tRaw = assesment?.tanggal_mulai || assesment?.tanggal_assesment || '';
      const tFmt = tRaw ? String(tRaw).slice(0,10) : '';
      if (nm) setNamaAsesor(nm);
      if (tFmt) setTanggalAsesmen(tFmt);
      
      // Resolve skemaId from active assessment if not set yet
      const sid = assesment?.skema_id || chosen?.skema_id || chosen?.schema_id;
      if (sid && !skemaId) setSkemaId(String(sid));
    })();
  }, [JSON.stringify(userAssessments)]);

  // REMOVED: Duplicate fetch calls - context already handles initial loading

  // Select default assesmentAsesiId when list becomes available
  useEffect(() => {
    if (!assesmentAsesiId && Array.isArray(userAssessments) && userAssessments.length > 0) {
      const chosen = userAssessments.find(a => a?.status === 'mengerjakan' || a?.status === 'belum') || userAssessments[0];
      if (chosen?.id) setAssesmentAsesiId(String(chosen.id));
    }
  }, [userAssessments, assesmentAsesiId]);

  // Fetch full schema detail (units, elements, KUK) when skemaId resolved
  useEffect(() => {
    (async () => {
      const idNum = Number(skemaId);
      if (!idNum) return;
      try {
        await fetchCsrfCookie();
        const res = await getApl02ById(idNum);
        const data = res.data?.data || [];
        if (Array.isArray(data) && data.length > 0) {
          setSchemaDetail({ units: data });
          const sel = {};
          data.forEach((unit) => {
            const elemenObj = unit.elemen || {};
            Object.values(elemenObj).forEach((el) => {
              if (el?.id) sel[el.id] = { kompetensinitas: '', bukti: [''] };
            });
          });
          setElementSelections(sel);
          setSchemaAutoSelected(false);
        } else {
          // Fallback: auto-pick first schema that has units
          try {
            const list = await getSkemas();
            const schemas = Array.isArray(list.data?.data) ? list.data.data : [];
            for (const s of schemas) {
              const tryId = s.id || s.schema_id || s.skema_id;
              if (!tryId) continue;
              try {
                const r2 = await getApl02ById(Number(tryId));
                const d2 = r2.data?.data || [];
                if (Array.isArray(d2) && d2.length > 0) {
                  setSkemaId(String(tryId));
                  setSchemaDetail({ units: d2 });
                  const ssel = {};
                  d2.forEach((unit) => {
                    const elemenObj = unit.elemen || {};
                    Object.values(elemenObj).forEach((el) => {
                      if (el?.id) ssel[el.id] = { kompetensinitas: '', bukti: '' };
                    });
                  });
                  setElementSelections(ssel);
                  setSchemaAutoSelected(true);
                  break;
                }
              } catch {}
            }
          } catch {}
        }
      } catch (e) {
        console.warn('APL-02 Schema fetch failed, using development fallback');
        // DEVELOPMENT FALLBACK: Create minimal schema structure for testing
        const testSchema = {
          units: [
            {
              id: 1,
              unit_ke: 1,
              judul_unit: 'Test Unit Kompetensi 1',
              kode_unit: 'TIK.PR02.001.01',
              elemen: {
                1: {
                  id: 1,
                  elemen_index: 1,
                  nama_elemen: 'Test Elemen 1',
                  kuk: [
                    { id: 1, urutan: 1, deskripsi_kuk: 'Test KUK 1.1' },
                    { id: 2, urutan: 2, deskripsi_kuk: 'Test KUK 1.2' }
                  ]
                },
                2: {
                  id: 2,
                  elemen_index: 2,
                  nama_elemen: 'Test Elemen 2',
                  kuk: [
                    { id: 3, urutan: 1, deskripsi_kuk: 'Test KUK 2.1' },
                    { id: 4, urutan: 2, deskripsi_kuk: 'Test KUK 2.2' }
                  ]
                }
              }
            }
          ]
        };
        setSchemaDetail(testSchema);
        const testSelections = {};
        testSchema.units.forEach((unit) => {
          const elemenObj = unit.elemen || {};
          Object.values(elemenObj).forEach((el) => {
            if (el?.id) testSelections[el.id] = { kompetensinitas: '', bukti: [''] };
          });
        });
        setElementSelections(testSelections);
        setSchemaAutoSelected(true);
      }
    })();
  }, [skemaId]);

  // Helper functions for managing multiple bukti per element
  const addBuktiToElement = (elementId) => {
    setElementSelections(prev => ({
      ...prev,
      [elementId]: {
        ...prev[elementId],
        bukti: [...(prev[elementId]?.bukti || ['']), '']
      }
    }));
  };

  const removeBuktiFromElement = (elementId, buktiIndex) => {
    setElementSelections(prev => ({
      ...prev,
      [elementId]: {
        ...prev[elementId],
        bukti: prev[elementId]?.bukti?.filter((_, index) => index !== buktiIndex) || ['']
      }
    }));
  };

  const updateBuktiInElement = (elementId, buktiIndex, value) => {
    setElementSelections(prev => ({
      ...prev,
      [elementId]: {
        ...prev[elementId],
        bukti: prev[elementId]?.bukti?.map((b, index) => index === buktiIndex ? value : b) || ['']
      }
    }));
  };

  // Handle submit - call backend API
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!skemaId || !assesmentAsesiId) {
      alert('Mohon lengkapi skema dan jadwal asesmen.');
      return;
    }

    // Build submissions from schemaDetail
    const units = schemaDetail?.units || [];
    if (!units.length) {
      alert('Skema tidak memiliki unit/elemen.');
      return;
    }

    // Validate each element selection
    for (const unit of units) {
      const elemenArr = Object.values(unit.elemen || {});
      for (const el of elemenArr) {
        const sel = elementSelections[el.id] || {};
        if (!sel.kompetensinitas) {
          alert(`Pilih K/BK untuk elemen: ${el.nama_elemen}`);
          return;
        }
        if (!sel.bukti || !Array.isArray(sel.bukti) || !sel.bukti.some(b => b.trim())) {
          alert(`Pilih minimal satu bukti untuk elemen: ${el.nama_elemen}`);
          return;
        }
      }
    }

    const submissions = units.map((unit) => {
      const elemenArr = Object.values(unit.elemen || {});
      return {
        unit_ke: Number(unit.unit_ke),
        kode_unit: unit.kode_unit,
        elemen: elemenArr.map((el) => {
          const sel = elementSelections[el.id];
          return {
            elemen_id: Number(el.id),
            kompetensinitas: sel.kompetensinitas,
            bukti_yang_relevan: sel.bukti.filter(b => b.trim()).map(b => ({ bukti_description: b })),
          };
        }),
      };
    });

    const payload = {
      skema_id: Number(skemaId),
      assesment_asesi_id: Number(assesmentAsesiId),
      submissions,
    };

    try {
      await fetchCsrfCookie();
      await submitFormApl02(payload);
      setIsFormSubmitted(true);
      setShowPopup(true);
    } catch (err) {
      console.error('Submit APL-02 failed:', err);
      const msg = err?.response?.data?.message || 'Gagal mengirim APL-02';
      const errors = err?.response?.data?.errors;
      if (errors && typeof errors === 'object') {
        const flat = Object.entries(errors)
          .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`)
          .join('\n');
        alert(`Validasi gagal:\n${flat}`);
      } else {
        alert(msg);
      }
    }
  };

  // Handle close popup - redirect ke AK-01
  const handleClosePopup = () => {
    setShowPopup(false);
    // Auto redirect ke AK-01 setelah close popup
    setTimeout(() => {
      navigate('/dashboard-asesi/ak-01');
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

          /* Responsive Design */
          @media (max-width: 768px) {
            .main-form-content {
              flex-direction: column !important;
              gap: 15px !important;
            }
            
            .bukti-section {
              min-width: unset !important;
              max-width: unset !important;
              width: 100% !important;
            }
            
            .assessor-section {
              flex-direction: column !important;
              gap: 10px !important;
              align-items: stretch !important;
            }
            
            .assessor-row {
              flex-direction: column !important;
              gap: 10px !important;
              align-items: stretch !important;
            }
            
            .assessor-input-group {
              min-width: unset !important;
              width: 100% !important;
            }
            
            .assessor-approval {
              align-items: stretch !important;
              padding-right: 0 !important;
            }
            
            .approval-button {
              width: 100% !important;
              text-align: center !important;
            }
            
            .popup-container {
              min-width: 90vw !important;
              max-width: 90vw !important;
              margin: 0 20px !important;
              padding: 20px 30px !important;
            }
            
            .popup-okay-button {
              position: static !important;
              margin-top: 20px !important;
              width: 100% !important;
            }
          }

          @media (max-width: 480px) {
            .content-card {
              padding: 15px !important;
            }
            
            .form-table-responsive {
              display: block !important;
            }
            
            .form-table-responsive > div {
              display: block !important;
              border-right: none !important;
              border-bottom: 1px solid #ddd !important;
            }
            
            .form-table-responsive > div:last-child {
              border-bottom: none !important;
            }
            
            .logo-text {
              font-size: 24px !important;
            }
            
            .nav-container {
              max-width: 80% !important;
            }
          }
        `}
      </style>
      
      {/* Warning Notification */}
      {showWarning && (
        <div style={warningNotificationStyle}>
          Silakan isi dan kirim formulir APL-02 terlebih dahulu!
        </div>
      )}
      
      {/* Navigation dan Header dengan background image */}
      <div style={headerSectionStyle}>
        <div style={navContainerStyle} className="nav-scrollbar nav-container">
          <NavAsesi activeTab="FR.APL.02" />
        </div>

        <div style={logoContainerStyle}>
          <h1 style={logoTextStyle} className="logo-text">MyLSP</h1>
        </div>
      </div>

      <div style={contentCardStyle} className="content-card">
        {/* Header dengan logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '20px',
          paddingBottom: '15px',
          borderBottom: '2px solid #FF8C00'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <img 
              src="/src/img/LOGO_LSP_SMKN_24.jpg" 
              alt="LSP SMKN 24 Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <h1 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            margin: 0,
            color: '#333',
            textAlign: 'center',
            flex: 1
          }}>
            FR.APL.02 ASESMEN MANDIRI
          </h1>
        </div>

        {/* Skema Sertifikasi & Jadwal (API binding) */}
        <div style={{
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeeba',
          borderRadius: '8px',
          padding: '12px',
          marginBottom: '15px',
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#856404' }}>Isian Wajib API:</div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <label style={{ fontSize: '12px' }}>Skema ID:</label>
            <input type="number" value={skemaId} onChange={(e)=>setSkemaId(e.target.value)} style={{ padding: '6px 8px', fontSize: '12px' }} />
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <label style={{ fontSize: '12px' }}>Jadwal (assesment_asesi_id):</label>
            <select 
              value={assesmentAsesiId} 
              onChange={(e)=>setAssesmentAsesiId(e.target.value)} 
              style={{ 
                padding: '6px 8px', 
                fontSize: '12px',
                backgroundColor: assesmentAsesiId ? '#f0f8ff' : 'white',
                border: assesmentAsesiId ? '2px solid #007bff' : '1px solid #ccc'
              }}
              title={assesmentAsesiId ? 'Auto-selected dari assessment aktif' : 'Pilih jadwal assessment'}
            >
              <option value="">
                {Array.isArray(userAssessments) && userAssessments.length > 0 ? 'Pilih...' : 'Loading assessments...'}
              </option>
              {Array.isArray(userAssessments) && userAssessments.map((a) => (
                <option key={a.id} value={a.id}>
                  {`ID ${a.id} - ${a.status || 'unknown'} ${a.assesment?.nama_skema ? `(${a.assesment.nama_skema})` : ''}`}
                </option>
              ))}
            </select>
            {assesmentAsesiId && (
              <span style={{ fontSize: '11px', color: '#28a745', fontWeight: 'bold' }}>✓ Auto</span>
            )}
          </div>
        </div>

        {/* Success banner when assesment_asesi_id is auto-selected */}
        {assesmentAsesiId && (
          <div style={{
            backgroundColor: '#d1ecf1',
            border: '1px solid #bee5eb',
            color: '#0c5460',
            padding: '10px 12px',
            borderRadius: '8px',
            marginBottom: '12px',
            fontSize: '12px'
          }}>
            <><strong>✓ Jadwal Assessment:</strong> ID {assesmentAsesiId} telah dipilih otomatis dari assessment aktif Anda.</>
          </div>
        )}

        {/* Info banner when bukti options empty */}
        {Array.isArray(buktiOptions) && buktiOptions.length === 0 && (
          <div style={{
            backgroundColor: '#fff3cd',
            border: '1px solid #ffeeba',
            color: '#856404',
            padding: '10px 12px',
            borderRadius: '8px',
            marginBottom: '12px',
            fontSize: '12px'
          }}>
            Belum ada Bukti Dokumen untuk akun Anda. Isi/approve APL-01 atau minta admin menambahkan bukti agar dropdown terisi.
          </div>
        )}

        {/* Info banner when APL-01 attachments are available */}
        {Array.isArray(buktiOptions) && buktiOptions.some(opt => opt.source === 'apl01') && (
          <div style={{
            backgroundColor: '#d1ecf1',
            border: '1px solid #bee5eb',
            color: '#0c5460',
            padding: '10px 12px',
            borderRadius: '8px',
            marginBottom: '12px',
            fontSize: '12px'
          }}>
            <strong>📎 Dokumen APL-01 Tersedia:</strong> Dokumen yang Anda upload di APL-01 dapat dipilih sebagai bukti di dropdown (ditandai dengan 📎).
          </div>
        )}

        {/* Dynamic Units -> Elements -> KUK table */}
        {schemaDetail && Array.isArray(schemaDetail.units) && schemaDetail.units.map((unit) => (
          <div key={`unit-${unit.unit_ke}`} style={{ border: '1px solid #ddd', borderRadius: '8px', marginTop: '16px' }}>
            <div style={{ padding: '10px 12px', background: '#f1f5ff', borderBottom: '1px solid #ddd', fontWeight: 'bold', fontSize: '13px' }}>
              Unit {unit.unit_ke} - {unit.kode_unit} — {unit.judul_unit}
            </div>
            <div style={{ padding: '10px 12px' }}>
              {Object.values(unit.elemen || {}).map((el) => (
                <div key={`el-${el.id}`} style={{ marginBottom: '14px', paddingBottom: '12px', borderBottom: '1px dashed #ddd' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '13px', marginBottom: '6px' }}>
                    Elemen {el.elemen_index}: {el.nama_elemen}
                  </div>
                  {Array.isArray(el.kuk) && el.kuk.length > 0 && (
                    <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '12px', color: '#333' }}>
                      {el.kuk.map((k) => (
                        <li key={`kuk-${el.id}-${k.urutan}`}>{k.urutan}. {k.deskripsi_kuk}</li>
                      ))}
                    </ul>
                  )}
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '8px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <label style={{ fontSize: '12px' }}>K/BK:</label>
                      <label style={{ fontSize: '12px' }}>
                        <input
                          type="radio"
                          name={`kompeten-${el.id}`}
                          checked={elementSelections[el.id]?.kompetensinitas === 'k'}
                          onChange={() => setElementSelections((prev) => ({ ...prev, [el.id]: { ...(prev[el.id]||{}), kompetensinitas: 'k' } }))}
                        /> K
                      </label>
                      <label style={{ fontSize: '12px' }}>
                        <input
                          type="radio"
                          name={`kompeten-${el.id}`}
                          checked={elementSelections[el.id]?.kompetensinitas === 'bk'}
                          onChange={() => setElementSelections((prev) => ({ ...prev, [el.id]: { ...(prev[el.id]||{}), kompetensinitas: 'bk' } }))}
                        /> BK
                      </label>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <label style={{ fontSize: '12px', fontWeight: 'bold' }}>Bukti:</label>
                        <button
                          type="button"
                          onClick={() => addBuktiToElement(el.id)}
                          style={{
                            padding: '4px 8px',
                            fontSize: '11px',
                            backgroundColor: '#28a745',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }}
                        >
                          + Tambah Bukti
                        </button>
                      </div>
                      {(elementSelections[el.id]?.bukti || ['']).map((buktiValue, buktiIndex) => (
                        <div key={buktiIndex} style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                          {buktiOptions.length > 0 ? (
                            <select
                              value={buktiValue}
                              onChange={(e) => updateBuktiInElement(el.id, buktiIndex, e.target.value)}
                              style={{ flex: 1, padding: '6px 8px', fontSize: '12px' }}
                            >
                              <option value="">Pilih deskripsi bukti…</option>
                              {buktiOptions.map(opt => (
                                <option key={opt.id} value={opt.label}>{opt.label}</option>
                              ))}
                            </select>
                          ) : (
                            <input
                              type="text"
                              placeholder="Deskripsi bukti"
                              value={buktiValue}
                              onChange={(e) => updateBuktiInElement(el.id, buktiIndex, e.target.value)}
                              style={{ flex: 1, padding: '6px 8px', fontSize: '12px' }}
                            />
                          )}
                          {(elementSelections[el.id]?.bukti || []).length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeBuktiFromElement(el.id, buktiIndex)}
                              style={{
                                padding: '4px 8px',
                                fontSize: '11px',
                                backgroundColor: '#dc3545',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer'
                              }}
                            >
                              Hapus
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Assessor Sections (UI only) */}
        <div style={{ marginTop: '30px' }}>
          {/* Assessor 1 */}
          <div style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: '14px',
            marginBottom: '15px',
            borderTop: '2px solid #FF8C00',
            borderBottom: '2px solid #FF8C00',
            paddingTop: '10px',
            paddingBottom: '10px'
          }}>
            Ditinjau oleh Asesor:
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            marginBottom: '30px',
            fontSize: '12px'
          }} className="assessor-section assessor-row">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              minWidth: '100px'
            }} className="assessor-input-group">
              <span style={{ fontSize: '11px', color: '#666' }}>Nama Asesi</span>
              <input 
                type="text" 
                value={asesiName}
                onChange={(e) => setAsesiName(e.target.value)}
                placeholder="Masukkan Nama Asesi"
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  fontSize: '12px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '4px',
                  width: '250px'
                }}
              />
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              minWidth: '100px'
            }} className="assessor-input-group">
              <span style={{ fontSize: '11px', color: '#666' }}>Nama Asesor</span>
              <input 
                type="text" 
                value={namaAsesor}
                placeholder="Nama Asesor"
                readOnly
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  fontSize: '12px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '4px',
                  width: '200px'
                }}
              />
            </div>
            
            <div style={{
              minWidth: '80px'
            }} className="assessor-input-group">
              <span style={{ fontSize: '11px', color: '#666' }}>Tanggal</span>
              <input 
                type="date" 
                value={tanggalAsesmen}
                readOnly
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  fontSize: '12px',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '4px',
                  width: '140px'
                }}
              />
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              alignItems: 'flex-end',
              flex: 1,
              paddingRight: '50px'
            }} className="assessor-approval">
              <span style={{ fontSize: '11px', color: '#666' }}>Persetujuan Asesor</span>
              <button 
                onClick={() => setAsesorApproval(asesorApproval === 'Approve' ? 'Menunggu' : 'Approve')}
                style={{
                  padding: '8px 20px',
                  backgroundColor: asesorApproval === 'Approve' ? '#28a745' : '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                className="approval-button"
              >
                {asesorApproval}
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div style={{ 
          textAlign: 'right',
          marginTop: '20px'
        }}>
          <button 
            onClick={handleSubmit}
            style={{
              padding: '10px 30px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              fontSize: '14px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Kirim
          </button>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div style={popupOverlayStyle} onClick={handleClosePopup}>
          <div style={popupContainerStyle} onClick={(e) => e.stopPropagation()} className="popup-container">
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
            
            <div style={popupTitleStyle}>Jawaban anda telah direkam!</div>
            
            <button 
              style={okayButtonStyle} 
              onClick={handleClosePopup}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e67e00'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#FF8C00'}
              className="popup-okay-button"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default APL02;