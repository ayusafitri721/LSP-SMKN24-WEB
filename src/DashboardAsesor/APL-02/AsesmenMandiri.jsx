import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

const AsesmenMandiri = () => {
  const navigate = useNavigate(); // Tambahkan hook navigasi
  const [showModal, setShowModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [formData, setFormData] = useState({
    skemaSerfikasi: '',
    judulUnit: '',
    nomorUnit: '',
    unitKompetensi: '',
    dapatkahSaya: '',
    checkItems: {
      bukti1: false,
      bukti2: false,
      bukti3: false,
      bukti4: false,
      bukti5: false
    },
    namaAsesi: '',
    tanggal: '',
    namaAsesor: '',
    tanggalAsesor: '',
    keteranganAsesor: ''
  });

  // Mencegah navigasi dengan menonaktifkan back button dan shortcuts + redirect back ke approved-unapproved
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'F5' || 
          (e.ctrlKey && e.key === 'r') || 
          (e.altKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) ||
          (e.ctrlKey && e.key === 'w') ||
          (e.ctrlKey && e.key === 't')) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    // Handle browser back button - redirect ke approved-unapproved
    window.history.pushState(null, '', window.location.href);
    
    const handlePopState = () => {
      // Ketika user klik back button, redirect ke approved-unapproved
      navigate('/dashboard-asesor/approved-unapproved/08939239239');
    };
    
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [navigate]);

  const mainHeaderStyle = {
    backgroundImage: `url('/src/img/kontak.png')`,
    backgroundColor: '#FFA500',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '220px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
    fontSize: '60px',
    fontWeight: 'bold',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '0 0 30px 30px',
    margin: '15px 0'
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(255,165,0,0.7) 0%, rgba(255,140,0,0.6) 100%)',
    zIndex: 1
  };

  const textStyle = {
    position: 'relative',
    zIndex: 2
  };

  const pageContainerStyle = {
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    position: 'relative'
  };

  const subHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '20px 30px',
    margin: '0 20px',
    borderRadius: '0 0 15px 15px',
    transform: 'translateY(-15px)',
    position: 'relative',
    zIndex: 3,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  };

  const contentContainerStyle = {
    padding: '25px 30px',
    margin: '0 20px',
    backgroundColor: 'white',
    borderRadius: '15px',
    marginTop: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  };

  const headerTitleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 5px 0',
    color: '#333',
    textAlign: 'center',
  };

  const headerSubtitleStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: 0,
    color: '#333',
    textAlign: 'center',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '25px',
    fontSize: '14px'
  };

  const tableCellStyle = {
    border: '1px solid #333',
    padding: '12px 15px',
    verticalAlign: 'top'
  };

  const leftColumnStyle = {
    ...tableCellStyle,
    backgroundColor: '#f8f9fa',
    fontWeight: 'bold',
    width: '180px',
    textAlign: 'center'
  };

  const rightColumnStyle = {
    ...tableCellStyle,
    backgroundColor: 'white'
  };

  const inputRowStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px'
  };

  const inputLabelStyle = {
    minWidth: '100px',
    fontSize: '12px',
    fontWeight: 'normal'
  };

  const inputFieldStyle = {
    flex: 1,
    marginLeft: '10px',
    padding: '4px 8px',
    border: '1px solid #ddd',
    fontSize: '12px',
    borderRadius: '3px'
  };

  const orangeBoxStyle = {
    backgroundColor: '#FFE4CC',
    border: '1px solid #FF8C00',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '20px'
  };

  const orangeBoxTitleStyle = {
    fontWeight: 'bold',
    marginBottom: '10px',
    fontSize: '14px',
    color: '#333'
  };

  const orangeBoxListStyle = {
    paddingLeft: '0',
    margin: '0',
    listStyle: 'none'
  };

  const orangeBoxListItemStyle = {
    marginBottom: '5px',
    fontSize: '13px',
    lineHeight: '1.4'
  };

  const unitKompetensiStyle = {
    border: '1px solid #333',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '20px',
    backgroundColor: 'white'
  };

  const unitTitleStyle = {
    fontWeight: 'bold',
    marginBottom: '10px',
    fontSize: '14px',
    color: '#333'
  };

  const unitContentStyle = {
    fontSize: '13px',
    lineHeight: '1.5',
    marginBottom: '15px'
  };

  const dapatkahSayaStyle = {
    border: '1px solid #333',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '20px',
    backgroundColor: 'white'
  };

  const checkboxListStyle = {
    paddingLeft: '20px',
    margin: '10px 0'
  };

  const checkboxItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    fontSize: '13px',
    marginBottom: '8px'
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '40px',
    paddingTop: '25px'
  };

  const buttonStyle = {
    padding: '12px 35px',
    backgroundColor: 'white',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    minWidth: '120px',
    transition: 'all 0.2s ease'
  };

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  };

  const modalStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    minWidth: '400px',
    textAlign: 'center',
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
  };

  const modalIconStyle = {
    width: '60px',
    height: '60px',
    backgroundColor: '#4CAF50',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px auto'
  };

  const modalTitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '8px'
  };

  const modalSubtitleStyle = {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
    lineHeight: '1.5'
  };

  const modalButtonStyle = {
    padding: '10px 30px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500'
  };

  const signaturesStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px',
    gap: '40px'
  };

  const signatureBoxStyle = {
    flex: 1,
    textAlign: 'center',
    fontSize: '13px'
  };

  const signatureLineStyle = {
    borderBottom: '1px solid #333',
    marginBottom: '5px',
    height: '50px',
    display: 'flex',
    alignItems: 'end',
    paddingBottom: '5px'
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field) => {
    setFormData(prev => ({
      ...prev,
      checkItems: {
        ...prev.checkItems,
        [field]: !prev.checkItems[field]
      }
    }));
  };

  const handleApprove = () => {
    setShowModal(true);
  };

  // Perbaiki fungsi ini - gunakan navigate seperti di kode teman
  const handleModalOke = () => {
    setShowModal(false);
    // Gunakan navigate dengan NIS yang sama seperti di kode teman
    navigate('/dashboard-asesor/persetujuan-asesmen/0893923923');
  };

  const handleReject = () => {
    setShowRejectModal(true);
  };

  // Perbaiki fungsi ini juga - gunakan navigate ke approved-unapproved
  const handleRejectModalOke = () => {
    setShowRejectModal(false);
    // Gunakan navigate ke approved-unapproved seperti di kode teman
    navigate('/dashboard-asesor/approved-unapproved/0893923923');
  };

  return (
    <div style={pageContainerStyle}>
      {/* Header Utama */}
      <div style={mainHeaderStyle}>
        <div style={overlayStyle}></div>
        <div style={textStyle}>MyLSP</div>
      </div>

      {/* Sub Header */}
      <div style={subHeaderStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%' }}>
          <img
            src="/src/img/image 12.png"
            alt="LSP Logo"
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '4px',
              objectFit: 'contain'
            }}
          />
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{
              fontSize: '18px',
              fontWeight: 'bold',
              margin: 0,
              color: '#333'
            }}>FR.APL.02 ASESMEN MANDIRI</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={contentContainerStyle}>
        {/* Skema Sertifikasi Table */}
        <table style={{...tableStyle, marginBottom: '15px'}}>
          <tbody>
            <tr>
              <td style={{
                ...leftColumnStyle,
                width: '150px',
                fontSize: '13px',
                lineHeight: '1.3'
              }}>
                Skema Sertifikasi<br/>
                (KKNI/OKUPASI/KLASTER)
              </td>
              <td style={rightColumnStyle}>
                <div style={inputRowStyle}>
                  <span style={{...inputLabelStyle, minWidth: '80px'}}>Judul Unit</span>
                  <span style={{margin: '0 5px'}}>:</span>
                  <div style={{flex: 1, borderBottom: '1px solid #333', minHeight: '20px'}}></div>
                </div>
                <div style={inputRowStyle}>
                  <span style={{...inputLabelStyle, minWidth: '80px'}}>Kode Unit</span>
                  <span style={{margin: '0 5px'}}>:</span>
                  <div style={{flex: 1, borderBottom: '1px solid #333', minHeight: '20px'}}></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Orange Box */}
        <div style={{
          display: 'flex',
          gap: '15px',
          marginBottom: '20px'
        }}>
          {/* Main Orange Box */}
          <div style={{
            backgroundColor: '#FFE4CC',
            border: '1px solid #FF8C00',
            borderRadius: '8px',
            padding: '15px',
            flex: 1
          }}>
            <div style={{
              fontWeight: 'bold',
              marginBottom: '8px',
              fontSize: '14px',
              color: '#333'
            }}>PANDUAN ASESMEN MANDIRI</div>
            
            <div style={{
              fontWeight: 'bold',
              marginBottom: '10px',
              fontSize: '13px',
              color: '#333'
            }}>Instruksi:</div>
            
            <div style={{fontSize: '13px', lineHeight: '1.4', color: '#333'}}>
              <div style={{marginBottom: '4px'}}>• Baca setiap pertanyaan di kolom sebelah kiri.</div>
              <div style={{marginBottom: '4px'}}>• Beri tanda centang pada kotak jika Anda yakin dapat melakukan tugas yang dijelaskan.</div>
              <div>• Isi kolom di sebelah kanan dengan mendaftar bukti yang Anda miliki untuk menunjukkan bahwa Anda melakukan tugas-tugas ini.</div>
            </div>
          </div>

          {/* Check All Section - Separate Box */}
          <div style={{
            backgroundColor: '#f8f9fa',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            minWidth: '140px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px'
          }}>
            <span style={{
              fontSize: '12px', 
              fontWeight: '500',
              color: '#FF8C00',
              fontStyle: 'italic'
            }}>Check All</span>
            <div style={{display: 'flex', gap: '15px'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                <input type="checkbox" style={{transform: 'scale(1)'}} />
                <span style={{fontSize: '12px', fontWeight: 'bold'}}>K</span>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
                <input type="checkbox" style={{transform: 'scale(1)'}} />
                <span style={{fontSize: '12px', fontWeight: 'bold'}}>BK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Unit Kompetensi 1 */}
        <table style={{...tableStyle, marginBottom: '20px'}}>
          <tbody>
            <tr>
              <td style={{
                ...leftColumnStyle,
                width: '150px',
                fontSize: '13px'
              }}>
                Unit Kompetensi 1
              </td>
              <td style={rightColumnStyle}>
                <div style={inputRowStyle}>
                  <span style={{...inputLabelStyle, minWidth: '80px'}}>Judul Unit</span>
                  <span style={{margin: '0 5px'}}>:</span>
                  <div style={{flex: 1, borderBottom: '1px solid #333', minHeight: '20px'}}></div>
                </div>
                <div style={inputRowStyle}>
                  <span style={{...inputLabelStyle, minWidth: '80px'}}>Kode Unit</span>
                  <span style={{margin: '0 5px'}}>:</span>
                  <div style={{flex: 1, borderBottom: '1px solid #333', minHeight: '20px'}}></div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Dapatkah Saya? Section */}
        <div style={{
          marginBottom: '20px'
        }}>
          <div style={{
            fontWeight: 'bold',
            marginBottom: '15px',
            fontSize: '14px',
            color: '#333'
          }}>Dapatkah Saya?</div>
          
          <div style={{
            display: 'flex',
            gap: '20px'
          }}>
            {/* Left Side */}
            <div style={{flex: 2}}>
              <div style={{
                border: '1px solid #ccc',
                borderRadius: '6px',
                padding: '12px',
                backgroundColor: '#f9f9f9',
                marginBottom: '15px'
              }}>
                <div style={{
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  fontSize: '13px'
                }}>Elemen 1: Mengidentifikasi konsep data dan struktur data</div>
                <div style={{
                  fontWeight: 'bold',
                  marginBottom: '8px',
                  fontSize: '13px'
                }}>Kriteria Unjuk Kerja:</div>
                
                <div style={{fontSize: '12px', lineHeight: '1.4', marginBottom: '8px'}}>
                  1.1 Mengidentifikasi konsep data dan struktur data sesuai dengan konteks
                </div>
                <div style={{fontSize: '12px', lineHeight: '1.4'}}>
                  1.2 Membandingkan alternatif struktur data kelebihan dan kekurangannya untuk konteks permasalahan yang diselesaikan
                </div>
              </div>
              
              {/* Checkbox Section */}
              <div style={{display: 'flex', gap: '30px', alignItems: 'center'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <input 
                    type="checkbox" 
                    style={{transform: 'scale(1.1)'}}
                    checked={formData.checkItems.bukti1}
                    onChange={() => handleCheckboxChange('bukti1')}
                  />
                  <span style={{fontSize: '13px', fontWeight: 'bold'}}>K</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                  <input 
                    type="checkbox" 
                    style={{transform: 'scale(1.1)'}}
                    checked={formData.checkItems.bukti2}
                    onChange={() => handleCheckboxChange('bukti2')}
                  />
                  <span style={{fontSize: '13px', fontWeight: 'bold'}}>BK</span>
                </div>
              </div>
            </div>
            
            {/* Right Side */}
            <div style={{flex: 1}}>
              <div style={{
                border: '1px solid #ccc',
                borderRadius: '6px',
                padding: '12px',
                backgroundColor: '#f9f9f9',
                minHeight: '140px'
              }}>
                <div style={{
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  fontSize: '13px',
                  color: '#333'
                }}>Bukti yang relevan</div>
                
                <div style={{fontSize: '12px', lineHeight: '1.3'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px'}}>
                    <input type="checkbox" style={{transform: 'scale(0.8)'}} />
                    <span>bukti 1</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px'}}>
                    <input type="checkbox" style={{transform: 'scale(0.8)'}} />
                    <span>bukti 1</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px'}}>
                    <input type="checkbox" style={{transform: 'scale(0.8)'}} />
                    <span>bukti 1</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px'}}>
                    <input type="checkbox" style={{transform: 'scale(0.8)'}} />
                    <span>bukti 1</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px'}}>
                    <input type="checkbox" style={{transform: 'scale(0.8)'}} />
                    <span>bukti 1</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                    <input type="checkbox" style={{transform: 'scale(0.8)'}} />
                    <span>bukti 1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Signatures Section */}
        <div style={{marginTop: '30px'}}>
          {/* First Section - Ditinjau oleh Asesor */}
          <div style={{
            borderTop: '1px solid #FF8C00',
            paddingTop: '15px',
            marginBottom: '20px'
          }}>
            <div style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '14px',
              marginBottom: '15px',
              borderBottom: '1px solid #FF8C00',
              paddingBottom: '8px'
            }}>Ditinjau oleh Asesor:</div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '20px'
            }}>
              <div style={{flex: 1}}>
                <div style={{fontSize: '12px', marginBottom: '5px'}}>Nama Asesi</div>
                <div style={{
                  padding: '8px',
                  backgroundColor: '#f5f5f5',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '13px'
                }}>
                  Afathat Ezhar Rahma Pangastu
                </div>
              </div>
              
              <div style={{flex: 1}}>
                <div style={{fontSize: '12px', marginBottom: '5px'}}>Tanggal</div>
                <div style={{
                  padding: '8px',
                  backgroundColor: '#f5f5f5',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '13px'
                }}>
                  14/02/2027
                </div>
              </div>
              
              <div style={{flex: 1, textAlign: 'center'}}>
                <div style={{fontSize: '12px', marginBottom: '5px'}}>Persetujuan Asesi</div>
                <button style={{
                  padding: '6px 20px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '15px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  Approve
                </button>
              </div>
            </div>
          </div>

          {/* Second Section - Ditinjau oleh Asesor */}
          <div style={{
            borderTop: '1px solid #FF8C00',
            paddingTop: '15px'
          }}>
            <div style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '14px',
              marginBottom: '15px',
              borderBottom: '1px solid #FF8C00',
              paddingBottom: '8px'
            }}>Ditinjau oleh Asesor:</div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '20px'
            }}>
              <div style={{flex: 1}}>
                <div style={{fontSize: '12px', marginBottom: '5px'}}>Nama Asesor</div>
                <div style={{
                  padding: '8px',
                  backgroundColor: '#f5f5f5',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '13px'
                }}>
                  Prof. Arul Maulida Singo M.kom.
                </div>
              </div>
              
              <div style={{flex: 1}}>
                <div style={{fontSize: '12px', marginBottom: '5px'}}>Tanggal</div>
                <div style={{
                  padding: '8px',
                  backgroundColor: '#f5f5f5',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '13px'
                }}>
                  14/02/2027
                </div>
              </div>
              
              <div style={{flex: 1, textAlign: 'center'}}>
                <div style={{fontSize: '12px', marginBottom: '5px'}}>Persetujuan Asesor</div>
                <button style={{
                  padding: '6px 20px',
                  backgroundColor: '#666',
                  color: 'white',
                  border: 'none',
                  borderRadius: '15px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  Menunggu
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={buttonContainerStyle}>
          <button
            style={buttonStyle}
            onClick={handleApprove}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f8f9fa'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
          >
            APPROVE
          </button>
          <button
            style={buttonStyle}
            onClick={handleReject}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f8f9fa'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
          >
            REJECT
          </button>
        </div>
      </div>

      {/* Modal Notifikasi Approve */}
      {showModal && (
        <div style={modalOverlayStyle}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '30px 40px',
            minWidth: '500px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            position: 'relative'
          }}>
            {/* Header dengan Icon dan Close Button */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: '25px'
            }}>
              {/* Icon clipboard biru dengan checkmark di kiri */}
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#4A90E2',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                position: 'relative'
              }}>
                {/* Clipboard shape */}
                <div style={{
                  width: '36px',
                  height: '40px',
                  backgroundColor: 'white',
                  borderRadius: '3px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {/* Top clip part */}
                  <div style={{
                    position: 'absolute',
                    top: '-3px',
                    width: '16px',
                    height: '6px',
                    backgroundColor: '#4A90E2',
                    borderRadius: '3px 3px 0 0'
                  }}></div>
                  
                  {/* Checkmark */}
                  <Check size={18} color="#4A90E2" strokeWidth={4} />
                </div>
              </div>
              
              {/* Title di tengah - sejajar dengan icon */}
              <div style={{ 
                flex: 1, 
                textAlign: 'center',
                paddingTop: '5px'
              }}>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '4px',
                  lineHeight: '1.2'
                }}>
                  Anda menyetujui
                </h3>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#333',
                  margin: '0',
                  lineHeight: '1.2'
                }}>
                  rekaman Asesmen ini
                </h3>
              </div>
              
              {/* Close button di kanan */}
              <button 
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  color: '#666',
                  flexShrink: 0
                }}
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>
            
            {/* Separator line */}
            <div style={{
              width: '100%',
              height: '1px',
              backgroundColor: '#e0e0e0',
              margin: '20px 0'
            }}></div>
            
            {/* Description */}
            <p style={{
              fontSize: '14px',
              color: '#666',
              marginBottom: '25px',
              lineHeight: '1.5',
              fontStyle: 'italic',
              textAlign: 'center'
            }}>
              Anda menyetujui dokumen sertifikat asesi ini dengan penilaian yang sebenar-benarnya
            </p>
            
            {/* Button di kanan */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                style={{
                  padding: '10px 30px',
                  backgroundColor: '#4A90E2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
                onClick={handleModalOke}
                onMouseOver={(e) => e.target.style.backgroundColor = '#357ABD'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#4A90E2'}
              >
                Oke
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Notifikasi Reject */}
      {showRejectModal && (
        <div style={modalOverlayStyle}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '30px 40px',
            minWidth: '500px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            position: 'relative'
          }}>
            {/* Header dengan Icon dan Close Button */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: '25px'
            }}>
              {/* Icon document dengan X orange di kiri */}
              <div style={{
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                position: 'relative'
              }}>
                {/* Document outline */}
                <div style={{
                  width: '36px',
                  height: '42px',
                  border: '2px solid #FF8C00',
                  borderRadius: '2px',
                  backgroundColor: 'white',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '4px'
                }}>
                  {/* Document lines */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    marginTop: '2px'
                  }}>
                    <div style={{
                      height: '2px',
                      backgroundColor: '#FF8C00',
                      width: '100%',
                      borderRadius: '1px'
                    }}></div>
                    <div style={{
                      height: '2px',
                      backgroundColor: '#FF8C00',
                      width: '100%',
                      borderRadius: '1px'
                    }}></div>
                    <div style={{
                      height: '2px',
                      backgroundColor: '#FF8C00',
                      width: '80%',
                      borderRadius: '1px'
                    }}></div>
                    <div style={{
                      height: '2px',
                      backgroundColor: '#FF8C00',
                      width: '90%',
                      borderRadius: '1px'
                    }}></div>
                  </div>
                </div>
                
                {/* X mark di pojok kanan bawah */}
                <div style={{
                  position: 'absolute',
                  bottom: '2px',
                  right: '2px',
                  width: '18px',
                  height: '18px',
                  backgroundColor: '#FF8C00',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  color: 'white',
                  fontWeight: 'bold',
                  border: '2px solid white',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)'
                }}>
                  ✗
                </div>
              </div>
              
              {/* Title di tengah - sejajar dengan icon */}
              <div style={{ 
                flex: 1, 
                textAlign: 'center',
                paddingTop: '5px'
              }}>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '4px',
                  lineHeight: '1.2'
                }}>
                  Anda menolak
                </h3>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#333',
                  margin: '0',
                  lineHeight: '1.2'
                }}>
                  rekaman Asesmen ini
                </h3>
              </div>
              
              {/* Close button di kanan */}
              <button 
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  color: '#666',
                  flexShrink: 0
                }}
                onClick={() => setShowRejectModal(false)}
              >
                ×
              </button>
            </div>
            
            {/* Separator line */}
            <div style={{
              width: '100%',
              height: '1px',
              backgroundColor: '#e0e0e0',
              margin: '20px 0'
            }}></div>
            
            {/* Description */}
            <p style={{
              fontSize: '14px',
              color: '#666',
              marginBottom: '25px',
              lineHeight: '1.5',
              fontStyle: 'italic',
              textAlign: 'center'
            }}>
              Dokumen ini ditolak karena dokumen dan keaslian data tidak valid.
            </p>
            
            {/* Button di kanan */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                style={{
                  padding: '10px 30px',
                  backgroundColor: '#FF8C00',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
                onClick={handleRejectModalOke}
                onMouseOver={(e) => e.target.style.backgroundColor = '#E67A00'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#FF8C00'}
              >
                Oke
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AsesmenMandiri;