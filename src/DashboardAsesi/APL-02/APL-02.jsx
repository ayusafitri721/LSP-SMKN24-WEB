// src/DashboardAsesi/APL-02/APL-02.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';
import { submitFormApl02, fetchCsrfCookie, getMyBuktiDokumenSelf, getApl02ById } from '../../api/api';
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
  const { currentAssesi, apl01Data, userAssessments, ensureUserAssesmentAsesi, fetchUserAssessments } = useDashboardAsesi();
  // Hapus data dummy asesor; akan diisi dari API jika tersedia
  const [assessorData, setAssessorData] = useState([]);
  
  const [showPopup, setShowPopup] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [checkAllState, setCheckAllState] = useState({ K: false, BK: false });
  // Hilangkan nilai default; biarkan kosong sampai ada data API
  const [asesiApproval, setAsesiApproval] = useState('');
  const [asesorApproval, setAsesorApproval] = useState('');
  const [individualChecks, setIndividualChecks] = useState({
    elemen1K: false,
    elemen1BK: false
  });

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
  // selections keyed by elementId: { kompetensinitas: 'k'|'bk'|'', bukti: '' }
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

  // Prefill from context: schema_id from APL-01, assesment_asesi_id from user assessments, asesi name from current asesi
  useEffect(() => {
    // asesi full name preference order
    const pickFullName = (obj) => {
      if (!obj) return '';
      return (
        obj.fullname || obj.full_name || obj.nama_lengkap || obj.namaLengkap || obj.name || obj.username || ''
      );
    };
    let name = pickFullName(currentAssesi) || pickFullName(currentAssesi?.user);
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

    // assesment_asesi_id choose first available
    if (!assesmentAsesiId && Array.isArray(userAssessments) && userAssessments.length > 0) {
      setAssesmentAsesiId(String(userAssessments[0].id));
    }
  }, [currentAssesi, apl01Data, userAssessments, asesiName, skemaId, assesmentAsesiId]);

  // Load bukti options for the logged-in asesi
  useEffect(() => {
    (async () => {
      try {
        await fetchCsrfCookie();
        const res = await getMyBuktiDokumenSelf();
        const items = Array.isArray(res.data?.data) ? res.data.data : [];
        setBuktiOptions(items.map(it => ({ id: it.id, label: it.description })));
      } catch (e) {
        // silently ignore; user can still type manually
      }
    })();
  }, []);

  // Ensure assesment_asesi exists when entering APL-02, then pick default
  useEffect(() => {
    (async () => {
      await ensureUserAssesmentAsesi?.();
      await fetchUserAssessments?.();
    })();
  }, []);

  // Select default assesmentAsesiId when list becomes available
  useEffect(() => {
    if (!assesmentAsesiId && Array.isArray(userAssessments) && userAssessments.length > 0) {
      setAssesmentAsesiId(String(userAssessments[0].id));
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
        setSchemaDetail({ units: data });
        // Initialize selections for each element
        const sel = {};
        data.forEach((unit) => {
          const elemenObj = unit.elemen || {};
          Object.values(elemenObj).forEach((el) => {
            if (el?.id) sel[el.id] = { kompetensinitas: '', bukti: '' };
          });
        });
        setElementSelections(sel);
      } catch (e) {
        // ignore; UI will allow manual
      }
    })();
  }, [skemaId]);

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
        if (!sel.bukti) {
          alert(`Pilih bukti untuk elemen: ${el.nama_elemen}`);
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
            bukti_yang_relevan: [{ bukti_description: sel.bukti }],
          };
        }),
      };
    });

    const payload = {
      skema_id: Number(skemaId),
      assesment_assesi_id: Number(assesmentAsesiId),
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

  // Check All Component
  const CheckAllComponent = () => {
    const handleCheckAll = () => {
      const newState = !(checkAllState.K && checkAllState.BK);
      setCheckAllState({ K: newState, BK: newState });
      // Update individual checks as well
      setIndividualChecks(prev => ({
        ...prev,
        elemen1K: newState,
        elemen1BK: newState
      }));
    };

    const handleKChange = () => {
      const newValue = !checkAllState.K;
      setCheckAllState(prev => ({ ...prev, K: newValue }));
      setIndividualChecks(prev => ({ ...prev, elemen1K: newValue }));
    };

    const handleBKChange = () => {
      const newValue = !checkAllState.BK;
      setCheckAllState(prev => ({ ...prev, BK: newValue }));
      setIndividualChecks(prev => ({ ...prev, elemen1BK: newValue }));
    };

    return (
      <div style={{
        backgroundColor: '#f8f9fa',
        border: '1px solid #ddd',
        padding: '15px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        minWidth: '180px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        {/* Check All Button */}
        <button 
          onClick={handleCheckAll}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            padding: '6px 12px',
            backgroundColor: 'transparent',
            border: '1px solid #ff8c00',
            borderRadius: '4px',
            fontSize: '12px',
            cursor: 'pointer',
            color: '#ff8c00',
            fontWeight: '600',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#fff5e6';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          Check All
        </button>
        
        {/* K Checkbox */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px'
        }}>
          <label style={{
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#333'
          }}>
            K
          </label>
          <div 
            onClick={handleKChange}
            style={{
              width: '28px',
              height: '28px',
              border: '2px solid #999',
              backgroundColor: 'white',
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              borderColor: checkAllState.K ? '#ff8c00' : '#999'
            }}
          >
            {checkAllState.K && (
              <span style={{ 
                color: 'black', 
                fontSize: '16px', 
                fontWeight: 'bold' 
              }}>
                ✓
              </span>
            )}
          </div>

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
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flex: 1 }}>
                      <label style={{ fontSize: '12px' }}>Bukti:</label>
                      {buktiOptions.length > 0 ? (
                        <select
                          value={elementSelections[el.id]?.bukti || ''}
                          onChange={(e)=> setElementSelections((prev)=> ({ ...prev, [el.id]: { ...(prev[el.id]||{}), bukti: e.target.value } }))}
                          style={{ flex: 1, padding: '6px 8px' }}
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
                          value={elementSelections[el.id]?.bukti || ''}
                          onChange={(e)=> setElementSelections((prev)=> ({ ...prev, [el.id]: { ...(prev[el.id]||{}), bukti: e.target.value } }))}
                          style={{ flex: 1, padding: '6px 8px' }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        </div>
        
        {/* BK Checkbox */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px'
        }}>
          <label style={{
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#333'
          }}>
            BK
          </label>
          <div 
            onClick={handleBKChange}
            style={{
              width: '28px',
              height: '28px',
              border: '2px solid #999',
              backgroundColor: 'white',
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              borderColor: checkAllState.BK ? '#ff8c00' : '#999'
            }}
          >
            {checkAllState.BK && (
              <span style={{ 
                color: 'black', 
                fontSize: '16px', 
                fontWeight: 'bold' 
              }}>
                ✓
              </span>
            )}
          </div>
        </div>
      </div>
    );
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
        {/* Header dengan logo - diganti dengan gambar */}
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
            <select value={assesmentAsesiId} onChange={(e)=>setAssesmentAsesiId(e.target.value)} style={{ padding: '6px 8px', fontSize: '12px' }}>
              <option value="">Pilih...</option>
              {Array.isArray(userAssessments) && userAssessments.map((a) => (
                <option key={a.id} value={a.id}>{`ID ${a.id}`}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Unit & Elemen (API binding) */}
        <div style={{
          backgroundColor: '#e2f0ff',
          border: '1px solid #b6e0ff',
          borderRadius: '8px',
          padding: '12px',
          marginBottom: '15px',
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {schemaDetail ? (
            <div style={{ fontSize: '12px', color: '#0b5ed7' }}>Struktur skema dimuat. Gunakan tabel di bawah untuk mengisi K/BK dan bukti per elemen.</div>
          ) : (
            <>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <label style={{ fontSize: '12px' }}>Unit Ke:</label>
                <input type="number" min="1" value={unitKe} onChange={(e)=>setUnitKe(e.target.value)} style={{ padding: '6px 8px', fontSize: '12px', width: '90px' }} />
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <label style={{ fontSize: '12px' }}>Elemen ID:</label>
                <input type="number" value={elemenId} onChange={(e)=>setElemenId(e.target.value)} style={{ padding: '6px 8px', fontSize: '12px', width: '140px' }} />
              </div>
            </>
          )}
        </div>

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
            Belum ada Bukti Dokumen untuk akun Anda. Isi/approve APL-01 atau minta admin menambahkan bukti agar dropdown terisi. Anda juga bisa mengetik manual, namun harus persis sama dengan deskripsi bukti yang tersimpan.
          </div>
        )}

        {/* Skema Sertifikasi Section - table format */}
        <div style={{
          backgroundColor: '#f8f9fa',
          border: '1px solid #ddd',
          borderRadius: '8px',
          marginBottom: '20px',
          fontSize: '14px',
          fontWeight: 'bold',
          display: 'flex',
          overflow: 'hidden'
        }} className="form-table-responsive">
          <div style={{ 
            minWidth: '140px',
            padding: '15px 10px',
            borderRight: '1px solid #ddd',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            Skema Sertifikasi
          </div>
          <div style={{
            flex: 1,
            fontSize: '12px',
            fontWeight: 'normal'
          }}>
            <div style={{ 
              display: 'flex',
              borderBottom: '1px solid #ddd'
            }} className="form-table-responsive">
              <div style={{
                padding: '8px 10px',
                borderRight: '1px solid #ddd',
                minWidth: '80px'
              }}>
                Judul Unit
              </div>
              <div style={{
                padding: '8px 5px',
                borderRight: '1px solid #ddd',
                minWidth: '20px',
                textAlign: 'center'
              }}>
                :
              </div>
              <div style={{
                flex: 1,
                padding: '3px'
              }}>
                <input 
                  type="text" 
                  style={{
                    width: '100%',
                    border: 'none',
                    padding: '5px',
                    fontSize: '12px',
                    outline: 'none',
                    backgroundColor: 'transparent'
                  }}
                />
              </div>
            </div>
            <div style={{ 
              display: 'flex'
            }} className="form-table-responsive">
              <div style={{
                padding: '8px 10px',
                borderRight: '1px solid #ddd',
                minWidth: '80px'
              }}>
                Kode Unit
              </div>
              <div style={{
                padding: '8px 5px',
                borderRight: '1px solid #ddd',
                minWidth: '20px',
                textAlign: 'center'
              }}>
                :
              </div>
              <div style={{
                flex: 1,
                padding: '3px'
              }}>
                <input 
                  type="text" 
                  style={{
                    width: '100%',
                    border: 'none',
                    padding: '5px',
                    fontSize: '12px',
                    outline: 'none',
                    backgroundColor: 'transparent'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* PADUAN ASESMEN MANDIRI - updated design with gap between sections */}
        <div style={{
          marginBottom: '20px',
          display: 'flex',
          gap: '3px'
        }}>
          {/* Main orange section */}
          <div style={{
            backgroundColor: 'rgba(255, 131, 3, 0.34)',
            padding: '15px',
            flex: 1,
            borderRadius: '8px',
            border: '1px solid #ddd'
          }}>
            <div style={{
              fontWeight: 'bold',
              fontSize: '14px',
              marginBottom: '10px'
            }}>
              PADUAN ASESMEN MANDIRI
            </div>
            
            <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>
              Instruksi:
            </div>
            <ul style={{ 
              margin: '0',
              paddingLeft: '20px',
              fontSize: '12px',
              lineHeight: '1.4'
            }}>
              <li style={{ marginBottom: '4px' }}>
                Baca setiap pertanyaan di kolom sebelah kiri.
              </li>
              <li style={{ marginBottom: '4px' }}>
                Beri tanda centang pada kotak jika Anda yakin dapat melakukan tugas yang dijelaskan.
              </li>
              <li>
                Isi kolom di sebelah kanan dengan mendaftar bukti yang Anda miliki untuk menunjukkan bahwa Anda melakukan tugas-tugas ini.
              </li>
            </ul>
          </div>

          {/* Updated Check All Section */}
          <CheckAllComponent />
        </div>

        {/* Unit Kompetensi 1 */}
        <div style={{
          border: '1px solid #ddd',
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden',
          marginBottom: '0'
        }}>
          <div style={{
            display: 'flex'
          }} className="form-table-responsive">
            {/* Left side - Unit Kompetensi 1 */}
            <div style={{
              backgroundColor: '#e9ecef',
              padding: '15px 20px',
              fontSize: '14px',
              fontWeight: 'bold',
              minWidth: '180px',
              borderRight: '1px solid #ddd',
              display: 'flex',
              alignItems: 'center'
            }}>
              Unit Kompetensi 1
            </div>
            
            {/* Right side - Judul Unit and Kode Unit */}
            <div style={{ flex: 1 }}>
              <div style={{
                display: 'flex',
                borderBottom: '1px solid #ddd'
              }} className="form-table-responsive">
                <div style={{
                  padding: '8px 15px',
                  fontSize: '12px',
                  minWidth: '80px',
                  borderRight: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  Judul Unit
                </div>
                <div style={{
                  padding: '8px 10px',
                  fontSize: '12px',
                  minWidth: '20px',
                  borderRight: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  :
                </div>
                <div style={{
                  flex: 1,
                  padding: '5px'
                }}>
                  <input 
                    type="text"
                    value={kodeUnit}
                    onChange={(e)=>setKodeUnit(e.target.value)}
                    style={{
                      width: '100%',
                      border: 'none',
                      padding: '3px 8px',
                      fontSize: '12px',
                      outline: 'none',
                      backgroundColor: 'transparent'
                    }}
                  />
                </div>
              </div>
              
              <div style={{
                display: 'flex'
              }} className="form-table-responsive">
                <div style={{
                  padding: '8px 15px',
                  fontSize: '12px',
                  minWidth: '80px',
                  borderRight: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  Kode Unit
                </div>
                <div style={{
                  padding: '8px 10px',
                  fontSize: '12px',
                  minWidth: '20px',
                  borderRight: '1px solid #ddd',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  :
                </div>
                <div style={{
                  flex: 1,
                  padding: '5px'
                }}>
                  <input 
                    type="text"
                    style={{
                      width: '100%',
                      border: 'none',
                      padding: '3px 8px',
                      fontSize: '12px',
                      outline: 'none',
                      backgroundColor: 'transparent'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dapatkah Saya Section */}
        <div style={{
          border: '1px solid #ddd',
          borderTop: 'none',
          borderRadius: '0 0 8px 8px'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '10px 20px',
            fontSize: '14px',
            fontWeight: 'bold',
            borderBottom: '1px solid #ddd'
          }}>
            Dapatkah Saya?
          </div>

          <div style={{ 
            padding: '20px',
            display: 'flex',
            gap: '25px'
          }} className="main-form-content">
            {/* Left side - Form content */}
            <div style={{ flex: '1' }}>
              <div style={{
                fontWeight: 'bold',
                fontSize: '13px',
                marginBottom: '8px'
              }}>
                Elemen 1: Mengidentifikasi konsep data dan struktur data
              </div>
              <div style={{
                fontSize: '12px',
                color: '#333',
                fontWeight: 'bold',
                marginBottom: '8px'
              }}>
                Kriteria Untuk Kerja:
              </div>
              <div style={{
                fontSize: '12px',
                lineHeight: '1.5',
                marginBottom: '20px',
                color: '#333'
              }}>
                1.1 Mengidentifikasi konsep data dan struktur data sesuai dengan konteks<br/>
                1.2 Membandingkan alternatif struktur data berdasarkan efisiensi dan keunggulannya untuk konteks permasalahan yang dihadapkan
              </div>

              <div style={{ 
                display: 'flex', 
                gap: '30px',
                alignItems: 'center'
              }}>
                <div 
                  onClick={() => { setKompetensinitas('k'); setIndividualChecks(prev => ({ ...prev, elemen1K: true, elemen1BK: false })); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid #999',
                    backgroundColor: 'white',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: (kompetensinitas==='k') ? '#ff8c00' : '#999'
                  }}>
                    {(kompetensinitas==='k') && (
                      <span style={{ color: 'black', fontSize: '12px', fontWeight: 'bold' }}>✓</span>
                    )}
                  </div>
                  K
                </div>
                
                <div 
                  onClick={() => { setKompetensinitas('bk'); setIndividualChecks(prev => ({ ...prev, elemen1K: false, elemen1BK: true })); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    width: '20px',
                    height: '20px',
                    border: '2px solid #999',
                    backgroundColor: 'white',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: (kompetensinitas==='bk') ? '#ff8c00' : '#999'
                  }}>
                    {(kompetensinitas==='bk') && (
                      <span style={{ color: 'black', fontSize: '12px', fontWeight: 'bold' }}>✓</span>
                    )}
                  </div>
                  BK
                </div>
              </div>
            </div>

            {/* Right side - Bukti yang relevan */}
            <div style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '15px',
              backgroundColor: '#f8f9fa',
              minWidth: '400px',
              maxWidth: '400px'
            }} className="bukti-section">
              <div style={{
                fontWeight: 'bold',
                fontSize: '13px',
                marginBottom: '15px'
              }}>
                Bukti yang relevan
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                fontSize: '12px'
              }}>
                {buktiList.map((val, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    {buktiOptions.length > 0 ? (
                      <select
                        value={val}
                        onChange={(e)=>{
                          const cp = [...buktiList]; cp[idx] = e.target.value; setBuktiList(cp);
                        }}
                        style={{ flex: 1, padding: '6px 8px' }}
                      >
                        <option value="">Pilih deskripsi bukti…</option>
                        {buktiOptions.map(opt => (
                          <option key={opt.id} value={opt.label}>{opt.label}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type="text"
                        placeholder={`Deskripsi bukti ${idx+1}`}
                        value={val}
                        onChange={(e)=>{
                          const cp = [...buktiList]; cp[idx] = e.target.value; setBuktiList(cp);
                        }}
                        style={{ flex: 1, padding: '6px 8px' }}
                      />
                    )}
                    <button
                      type="button"
                      onClick={()=>{
                        const cp = [...buktiList]; cp.splice(idx,1); setBuktiList(cp.length?cp:['']);
                      }}
                      style={{ padding: '6px 10px', fontSize: '12px' }}
                    >
                      Hapus
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={()=>setBuktiList((prev)=>[...prev, ''])}
                  style={{ marginTop: '8px', padding: '6px 10px', fontSize: '12px' }}
                >
                  + Tambah Bukti
                </button>
              </div>
            </div>
          </div>
        </div>

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
                placeholder="Nama Asesi"
                readOnly
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  fontSize: '12px',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  width: '250px'
                }}
              />
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              minWidth: '80px'
            }} className="assessor-input-group">
              <span style={{ fontSize: '11px', color: '#666' }}>Tanggal</span>
              <input 
                type="text" 
                value="14/02/2027"
                readOnly
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  fontSize: '12px',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  width: '100px'
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
              <span style={{ fontSize: '11px', color: '#666' }}>Persetujuan Asesi</span>
              <button 
                onClick={() => setAsesiApproval(asesiApproval === 'Approve' ? 'Menunggu' : 'Approve')}
                style={{
                  padding: '8px 20px',
                  backgroundColor: asesiApproval === 'Approve' ? '#28a745' : '#6c757d',
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
                {asesiApproval}
              </button>
            </div>
          </div>

          {/* Assessor 2 */}
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
              <span style={{ fontSize: '11px', color: '#666' }}>Nama Asesor</span>
              <input 
                type="text" 
                value="Prof. Arul Maulido Singo M.Kom."
                readOnly
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  fontSize: '12px',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  width: '250px'
                }}
              />
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
              minWidth: '80px'
            }} className="assessor-input-group">
              <span style={{ fontSize: '11px', color: '#666' }}>Tanggal</span>
              <input 
                type="text" 
                value="14/02/2027"
                readOnly
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  fontSize: '12px',
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  width: '100px'
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
