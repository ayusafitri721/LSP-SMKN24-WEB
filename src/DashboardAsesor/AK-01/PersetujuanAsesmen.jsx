
import React, { useState, useEffect } from 'react';
import { Check, User } from 'lucide-react';

const PersetujuanAsesmen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    skemaSerifikasi: '',
    judulUnit: '',
    nomorUnit: '',
    namaAsesor: '',
    namaAsesi: '',
    checkedItems: {
      portfolio: false,
      observasi: false,
      pertanyaan: false,
      reviewProduk: false,
      kegiatanTerstruktur: false,
      pertanyaanTertulis: false,
      wawancara: false
    },
    tanggal: '',
    waktu: '',
    tukPelaksanaan: ''
  });

  // Check if mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Prevent navigation
  useEffect(() => {
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
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const pageContainerStyle = {
    backgroundColor: 'white',
    fontFamily: 'Arial, sans-serif',
    padding: isMobile ? '10px' : '15px',
    minHeight: '100vh',
  };

  const headerSectionStyle = {
    backgroundImage: "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: isMobile ? '0 0 20px 20px' : '0 0 40px 40px',
    overflow: 'hidden',
    marginBottom: '0',
  };

  const logoContainerStyle = {
    height: isMobile ? '120px' : '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: isMobile ? '10px' : '20px',
    marginBottom: isMobile ? '10px' : '20px',
  };

  const logoTextStyle = {
    color: 'white',
    fontSize: isMobile ? '36px' : '56px',
    fontWeight: 'bold',
    margin: 0,
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    letterSpacing: '1px',
  };

  const contentCardStyle = {
    backgroundColor: 'white',
    borderRadius: '0 0 15px 15px',
    padding: isMobile ? '15px' : '30px',
    boxShadow: 'none',
    marginTop: '0',
    border: 'none',
  };

  const headerSectionStyle2 = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'center' : 'flex-start',
    gap: isMobile ? '15px' : '20px',
    marginBottom: '20px',
    paddingBottom: '15px',
    borderBottom: '2px solid #FF8C00',
    textAlign: isMobile ? 'center' : 'left',
  };

  const logoContainer2Style = {
    flexShrink: 0,
    order: isMobile ? 1 : 0,
  };

  const headerContentStyle = {
    flex: 1,
    order: isMobile ? 2 : 1,
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

  const transparentBoxStyle = {
    backgroundColor: 'rgba(240, 240, 240, 0.7)',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: isMobile ? '12px' : '15px',
    marginBottom: '10px',
  };

  const boxTextStyle = {
    fontSize: isMobile ? '10px' : '11px',
    color: '#333',
    lineHeight: '1.4',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const checkboxGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '6px' : '4px 8px',
    marginTop: '8px',
  };

  const checkboxItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: isMobile ? '9px' : '10px',
    color: '#333',
    lineHeight: '1.3',
  };

  const checkboxStyle = {
    marginRight: '6px',
    marginTop: '1px',
    flexShrink: 0,
    transform: 'scale(0.8)',
  };

  const sectionTextStyle = {
    fontSize: isMobile ? '10px' : '11px',
    color: '#333',
    lineHeight: '1.3',
    marginBottom: '6px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    gap: isMobile ? '15px' : '20px',
    marginTop: '40px',
    paddingTop: '25px'
  };

  const buttonStyle = {
    padding: isMobile ? '14px 25px' : '12px 35px',
    backgroundColor: 'white',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: isMobile ? '16px' : '14px',
    fontWeight: '500',
    minWidth: isMobile ? '100%' : '120px',
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
    zIndex: 1000,
    padding: isMobile ? '20px' : '0'
  };

  const modalStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: isMobile ? '20px 25px' : '30px 40px',
    minWidth: isMobile ? '100%' : '500px',
    maxWidth: isMobile ? '100%' : '500px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
    position: 'relative',
    maxHeight: isMobile ? '90vh' : 'auto',
    overflowY: isMobile ? 'auto' : 'visible'
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
      checkedItems: {
        ...prev.checkedItems,
        [field]: !prev.checkedItems[field]
      }
    }));
  };

  const handleApprove = () => {
    setShowModal(true);
  };

  const handleModalOke = () => {
    setShowModal(false);
    setTimeout(() => {
      window.location.href = '/dashboard-asesor/ceklis-observasi/0893923923';
    }, 100);
  };

  const handleReject = () => {
    setShowRejectModal(true);
  };

  const handleRejectModalOke = () => {
    setShowRejectModal(false);
    setTimeout(() => {
      window.location.href = '/dashboard-asesor/approved-unapproved/0893923923';
    }, 100);
  };

  return (
    <div style={pageContainerStyle}>
      {/* Header Section */}
      <div style={headerSectionStyle}>
        <div style={logoContainerStyle}>
          <h1 style={logoTextStyle}>
            MyLSP
          </h1>
        </div>
      </div>

      {/* Content Card */}
      <div style={contentCardStyle}>
        <div style={headerSectionStyle2}>
          <div style={logoContainer2Style}>
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
            <div style={titleStyle}>FR.AK.01</div>
            <div style={subtitleStyle}>PERSETUJUAN ASESMEN DAN KERAHASIAAN</div>
          </div>
        </div>

        {/* Skema Sertifikasi */}
        <div style={{marginBottom: '15px', overflowX: 'auto'}}>
          <table style={{width: '100%', fontSize: isMobile ? '10px' : '12px', minWidth: isMobile ? '300px' : 'auto'}}>
            <tbody>
              <tr>
                <td style={{
                  padding: isMobile ? '8px' : '10px',
                  border: '1px solid #ddd',
                  backgroundColor: '#f8f9fa',
                  fontWeight: 'bold',
                  width: isMobile ? '120px' : '150px',
                  textAlign: 'center',
                  verticalAlign: 'middle'
                }}>
                  Skema Sertifikasi
                </td>
                <td style={{
                  padding: isMobile ? '8px' : '10px',
                  border: '1px solid #ddd',
                  backgroundColor: 'white'
                }}>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                    <div style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? '4px' : '0'}}>
                      <span style={{minWidth: isMobile ? 'auto' : '80px', fontSize: isMobile ? '10px' : '12px', fontWeight: 'bold'}}>Judul Unit</span>
                      {!isMobile && <span style={{margin: '0 8px'}}>:</span>}
                      <input
                        type="text"
                        style={{
                          flex: 1,
                          width: isMobile ? '100%' : 'auto',
                          padding: '4px 8px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: isMobile ? '10px' : '12px'
                        }}
                        value={formData.judulUnit}
                        onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                        placeholder="Masukkan judul unit"
                      />
                    </div>
                    <div style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? '4px' : '0'}}>
                      <span style={{minWidth: isMobile ? 'auto' : '80px', fontSize: isMobile ? '10px' : '12px', fontWeight: 'bold'}}>Nomor Unit</span>
                      {!isMobile && <span style={{margin: '0 8px'}}>:</span>}
                      <input
                        type="text"
                        style={{
                          flex: 1,
                          width: isMobile ? '100%' : 'auto',
                          padding: '4px 8px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: isMobile ? '10px' : '12px'
                        }}
                        value={formData.nomorUnit}
                        onChange={(e) => handleInputChange('nomorUnit', e.target.value)}
                        placeholder="Masukkan nomor unit"
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={transparentBoxStyle}>
          <div style={boxTextStyle}>
            Persetujuan Asesmen ini untuk menjamin bahwa Asesi telah diberi arahan secara rinci tentang perencanaan dan
            proses asesmen.
          </div>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '15px' : '20px', 
          alignItems: 'flex-start' 
        }}>
          <div style={{ flex: 1, width: isMobile ? '100%' : 'auto' }}>
            {/* Box 1 Kiri - TUK, Nama Asesor, Nama Asesi */}
            <div style={{
              ...transparentBoxStyle, 
              height: isMobile ? 'auto' : '120px', 
              minHeight: isMobile ? '140px' : '120px',
              display: 'flex', 
              flexDirection: 'column', 
              padding: isMobile ? '12px' : '15px', 
              justifyContent: 'flex-start'
            }}>
              <div style={{...sectionTextStyle, marginBottom: '8px'}}>
                <strong>TUK</strong> : <span style={{fontWeight: 'normal'}}>Sewaktu/Tempat Kerja/Mandiri*</span>{' '}
                <span style={{ color: '#999', fontSize: isMobile ? '9px' : '10px', fontWeight: 'normal' }}>
                  (coret yang tidak perlu)
                </span>
              </div>
              <div style={{...sectionTextStyle, marginBottom: '8px', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? '4px' : '0'}}>
                <strong style={{minWidth: isMobile ? 'auto' : '90px'}}>Nama Asesor</strong>
                {!isMobile && <span style={{margin: '0 5px'}}>:</span>}
                <input
                  type="text"
                  style={{ 
                    flex: 1, 
                    width: isMobile ? '100%' : 'auto',
                    fontSize: isMobile ? '10px' : '11px', 
                    padding: '3px 6px', 
                    border: '1px solid #ddd', 
                    borderRadius: '3px' 
                  }}
                  value={formData.namaAsesor}
                  onChange={(e) => handleInputChange('namaAsesor', e.target.value)}
                />
              </div>
              <div style={{...sectionTextStyle, marginBottom: '0', display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? '4px' : '0'}}>
                <strong style={{minWidth: isMobile ? 'auto' : '90px'}}>Nama Asesi</strong>
                {!isMobile && <span style={{margin: '0 5px'}}>:</span>}
                <input
                  type="text"
                  style={{ 
                    flex: 1, 
                    width: isMobile ? '100%' : 'auto',
                    fontSize: isMobile ? '10px' : '11px', 
                    padding: '3px 6px', 
                    border: '1px solid #ddd', 
                    borderRadius: '3px' 
                  }}
                  value={formData.namaAsesi}
                  onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                />
              </div>
            </div>

            {/* Box 2 Kiri - Bukti yang akan dikumpulkan */}
            <div style={{
              ...transparentBoxStyle, 
              height: isMobile ? 'auto' : '130px', 
              minHeight: isMobile ? '180px' : '130px',
              display: 'flex', 
              flexDirection: 'column', 
              padding: isMobile ? '12px' : '15px'
            }}>
              <div style={{ ...sectionTextStyle, fontWeight: 'bold', marginBottom: '8px', fontSize: isMobile ? '11px' : '13px' }}>
                Bukti yang akan dikumpulkan:
              </div>
              <div style={checkboxGridStyle}>
                {[
                  { key: 'portfolio', label: 'Hasil verifikasi Portofolio' },
                  { key: 'reviewProduk', label: 'Hasil review produk' },
                  { key: 'observasi', label: 'Hasil Observasi Langsung' },
                  { key: 'kegiatanTerstruktur', label: 'Hasil kegiatan Terstruktur' },
                  { key: 'pertanyaan', label: 'Hasil Pertanyaan Lisan' },
                  { key: 'pertanyaanTertulis', label: 'Hasil Pertanyaan Tertulis' },
                  { key: 'wawancara', label: 'Hasil Pertanyaan wawancara' },
                ].map((item) => (
                  <div key={item.key} style={checkboxItemStyle}>
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
            <div style={{
              ...transparentBoxStyle, 
              height: isMobile ? 'auto' : '130px', 
              minHeight: isMobile ? '160px' : '130px',
              display: 'flex', 
              flexDirection: 'column', 
              padding: isMobile ? '12px' : '15px'
            }}>
              <div style={{ ...sectionTextStyle, fontWeight: 'bold', marginBottom: '10px', fontSize: isMobile ? '11px' : '13px' }}>
                Pelaksanaan asesmen disepakati pada:
              </div>
              <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: isMobile ? '8px' : '5px'}}>
                <div style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', marginBottom: isMobile ? '0' : '5px', gap: isMobile ? '4px' : '0'}}>
                  <span style={{minWidth: isMobile ? 'auto' : '90px', fontSize: isMobile ? '10px' : '12px'}}>Hari/Tanggal</span>
                  {!isMobile && <span style={{margin: '0 5px'}}>:</span>}
                  <input
                    type="date"
                    style={{
                      flex: 1, 
                      width: isMobile ? '100%' : 'auto',
                      fontSize: isMobile ? '10px' : '11px', 
                      padding: '4px 6px', 
                      border: '1px solid #ddd', 
                      borderRadius: '3px'
                    }}
                    value={formData.tanggal}
                    onChange={(e) => handleInputChange('tanggal', e.target.value)}
                  />
                </div>
                <div style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', marginBottom: isMobile ? '0' : '5px', gap: isMobile ? '4px' : '0'}}>
                  <span style={{minWidth: isMobile ? 'auto' : '90px', fontSize: isMobile ? '10px' : '12px'}}>Waktu</span>
                  {!isMobile && <span style={{margin: '0 5px'}}>:</span>}
                  <input
                    type="time"
                    style={{
                      flex: 1, 
                      width: isMobile ? '100%' : 'auto',
                      fontSize: isMobile ? '10px' : '11px', 
                      padding: '4px 6px', 
                      border: '1px solid #ddd', 
                      borderRadius: '3px'
                    }}
                    value={formData.waktu}
                    onChange={(e) => handleInputChange('waktu', e.target.value)}
                  />
                </div>
                <div style={{display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? '4px' : '0'}}>
                  <span style={{minWidth: isMobile ? 'auto' : '90px', fontSize: isMobile ? '10px' : '12px'}}>TUK</span>
                  {!isMobile && <span style={{margin: '0 5px'}}>:</span>}
                  <input
                    type="text"
                    style={{
                      flex: 1, 
                      width: isMobile ? '100%' : 'auto',
                      fontSize: isMobile ? '10px' : '11px', 
                      padding: '4px 6px', 
                      border: '1px solid #ddd', 
                      borderRadius: '3px'
                    }}
                    value={formData.tukPelaksanaan}
                    onChange={(e) => handleInputChange('tukPelaksanaan', e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div style={{ flex: 1, width: isMobile ? '100%' : 'auto' }}>
            {/* Box 1 Kanan - Asesi */}
            <div style={{
              ...transparentBoxStyle, 
              height: isMobile ? 'auto' : '120px', 
              minHeight: isMobile ? '100px' : '120px',
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'flex-start', 
              padding: isMobile ? '12px' : '15px'
            }}>
              <div style={{fontSize: isMobile ? '11px' : '13px', fontWeight: 'bold', marginBottom: '10px', color: '#333'}}>Asesi:</div>
              <div style={{ fontSize: isMobile ? '10px' : '12px', color: '#333', lineHeight: '1.4', textAlign: 'justify', fontWeight: 'normal' }}>
                Bahwa saya telah mendapatkan penjelasan terkait hak dan prosedur banding asesmen dari asesor.
              </div>
            </div>

            {/* Box 2 Kanan - Asesor */}
            <div style={{
              ...transparentBoxStyle, 
              height: isMobile ? 'auto' : '130px', 
              minHeight: isMobile ? '140px' : '130px',
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'flex-start', 
              padding: isMobile ? '12px' : '15px'
            }}>
              <div style={{fontSize: isMobile ? '11px' : '13px', fontWeight: 'bold', marginBottom: '8px', color: '#333'}}>Asesor:</div>
              <div style={{ fontSize: isMobile ? '9px' : '11px', color: '#333', lineHeight: '1.3', textAlign: 'justify', fontWeight: 'normal' }}>
                Menyatakan tidak akan membuka hasil pekerjaan yang diperoleh karena penguasaan saya sebagai Asesor dalam
                pekerjaan Asesmen kepada siapapun atau organisasi manapun selain kepada pihak yang berwenang sehubungan
                dengan kewajiban saya sebagai Asesor yang ditugaskan oleh LSP.
              </div>
            </div>

            {/* Box 3 Kanan - Asesi */}
            <div style={{
              ...transparentBoxStyle, 
              height: isMobile ? 'auto' : '130px', 
              minHeight: isMobile ? '120px' : '130px',
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'flex-start', 
              padding: isMobile ? '12px' : '15px'
            }}>
              <div style={{fontSize: isMobile ? '11px' : '13px', fontWeight: 'bold', marginBottom: '10px', color: '#333'}}>Asesi:</div>
              <div style={{ fontSize: isMobile ? '10px' : '12px', color: '#333', lineHeight: '1.4', textAlign: 'justify', fontWeight: 'normal' }}>
                Saya setuju mengikuti Asesmen dengan pemahaman bahwa informasi yang dikumpulkan hanya digunakan untuk
                pengembangan profesional dan hanya dapat diakses oleh orang tertentu saja.
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
          <div style={modalStyle}>
            {/* Header dengan Icon dan Close Button */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: '25px'
            }}>
              {/* Icon clipboard biru dengan checkmark di kiri */}
              <div style={{
                width: isMobile ? '40px' : '50px',
                height: isMobile ? '40px' : '50px',
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
                  width: isMobile ? '28px' : '36px',
                  height: isMobile ? '32px' : '40px',
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
                    width: isMobile ? '12px' : '16px',
                    height: '6px',
                    backgroundColor: '#4A90E2',
                    borderRadius: '3px 3px 0 0'
                  }}></div>
                  
                  {/* Checkmark */}
                  <Check size={isMobile ? 14 : 18} color="#4A90E2" strokeWidth={4} />
                </div>
              </div>
              
              {/* Title di tengah - sejajar dengan icon */}
              <div style={{ 
                flex: 1, 
                textAlign: 'center',
                paddingTop: '5px',
                paddingLeft: isMobile ? '10px' : '0',
                paddingRight: isMobile ? '10px' : '0'
              }}>
                <h3 style={{
                  fontSize: isMobile ? '18px' : '22px',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '4px',
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
              fontSize: isMobile ? '12px' : '14px',
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
                  padding: isMobile ? '12px 25px' : '10px 30px',
                  backgroundColor: '#4A90E2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: isMobile ? '16px' : '14px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease',
                  width: isMobile ? '100%' : 'auto'
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
          <div style={modalStyle}>
            {/* Header dengan Icon dan Close Button */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: '25px'
            }}>
              {/* Icon document dengan X orange di kiri */}
              <div style={{
                width: isMobile ? '40px' : '50px',
                height: isMobile ? '40px' : '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                position: 'relative'
              }}>
                {/* Document outline */}
                <div style={{
                  width: isMobile ? '28px' : '36px',
                  height: isMobile ? '34px' : '42px',
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
                  width: isMobile ? '14px' : '18px',
                  height: isMobile ? '14px' : '18px',
                  backgroundColor: '#FF8C00',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: isMobile ? '10px' : '12px',
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
                paddingTop: '5px',
                paddingLeft: isMobile ? '10px' : '0',
                paddingRight: isMobile ? '10px' : '0'
              }}>
                <h3 style={{
                  fontSize: isMobile ? '18px' : '22px',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '4px',
                  lineHeight: '1.2'
                }}>
                  Anda menolak
                </h3>
                <h3 style={{
                  fontSize: isMobile ? '18px' : '22px',
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
              fontSize: isMobile ? '12px' : '14px',
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
                  padding: isMobile ? '12px 25px' : '10px 30px',
                  backgroundColor: '#FF8C00',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: isMobile ? '16px' : '14px',
                  fontWeight: '600',
                  transition: 'all 0.2s ease',
                  width: isMobile ? '100%' : 'auto'
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

export default PersetujuanAsesmen;