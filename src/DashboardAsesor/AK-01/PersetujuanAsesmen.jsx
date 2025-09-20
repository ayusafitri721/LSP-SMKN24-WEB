import React, { useState } from 'react';
import { Check, User } from 'lucide-react';

const PersetujuanAsesmen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [formData, setFormData] = useState({
    skemaSerifikasi: '',
    judulUnit: '',
    nomorUnit: '',
    checkedItems: {
      hasilVerifikasi: false,
      hasilObservasi: false,
      hasilPerformance: false,
      hasilReview: false,
      hasilKegiatan: false,
      hasilPerformanceTerstruktur: false,
      hasilPertanyaan: false
    },
    tanggal: '',
    waktu: '',
    tuk: ''
  });

  // Mencegah navigasi dengan menonaktifkan back button dan shortcuts
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

    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', () => {
      window.history.pushState(null, '', window.location.href);
    });

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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

  const mainContentStyle = {
    display: 'flex',
    gap: '25px',
    marginTop: '20px'
  };

  const leftSectionStyle = {
    flex: '1',
    fontSize: '14px'
  };

  const rightSectionStyle = {
    flex: '1',
    fontSize: '14px'
  };

  const checkboxListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
    margin: '15px 0'
  };

  const checkboxItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
    fontSize: '12px'
  };

  const infoBoxStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: '#fafafa'
  };

  const infoTitleStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#333'
  };

  const infoTextStyle = {
    fontSize: '12px',
    lineHeight: '1.4',
    color: '#555',
    margin: 0
  };

  const scheduleStyle = {
    marginTop: '20px',
    fontSize: '14px'
  };

  const scheduleRowStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px'
  };

  const scheduleLabelStyle = {
    minWidth: '120px',
    fontSize: '14px'
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
    // Redirect ke approved-unapproved page
    setTimeout(() => {
      window.location.href = '/dashboard-asesor/approved-unapproved/0893923923';
    }, 100);
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
            alt="LSP SMKN 24 Logo"
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '8px',
              objectFit: 'contain'
            }}
          />
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={headerTitleStyle}>FR.AK.01</div>
            <div style={headerSubtitleStyle}>PERSETUJUAN ASESMEN DAN KERAHASIAAN</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={contentContainerStyle}>
        {/* Tabel Skema Sertifikasi */}
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td style={leftColumnStyle}>
                Skema Sertifikasi
              </td>
              <td style={rightColumnStyle}>
                <div style={inputRowStyle}>
                  <span style={inputLabelStyle}>Judul Unit</span>
                  <span style={{margin: '0 5px'}}>:</span>
                  <input
                    type="text"
                    style={inputFieldStyle}
                    value={formData.judulUnit}
                    onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                  />
                </div>
                <div style={inputRowStyle}>
                  <span style={inputLabelStyle}>Nomor Unit</span>
                  <span style={{margin: '0 5px'}}>:</span>
                  <input
                    type="text"
                    style={inputFieldStyle}
                    value={formData.nomorUnit}
                    onChange={(e) => handleInputChange('nomorUnit', e.target.value)}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginBottom: '25px', lineHeight: '1.6', color: '#333', fontSize: '14px' }}>
          Persetujuan Asesmen ini untuk menjamin bahwa Asesi telah diberi arahan secara rinci tentang perencanaan dan proses asesmen.
        </p>

        <div style={mainContentStyle}>
          {/* Left Section */}
          <div style={leftSectionStyle}>
            <div style={{marginBottom: '20px'}}>
              <strong>TUK</strong> : Sewaktu/Tempat Kerja/Mandiri* <span style={{color: '#666', fontSize: '12px'}}>(coret yang tidak perlu)</span>
            </div>
            <div style={{marginBottom: '15px'}}>
              <strong>Nama Asesor</strong> :
            </div>
            <div style={{marginBottom: '15px'}}>
              <strong>Nama Asesi</strong> :
            </div>
            <div style={{marginBottom: '15px'}}>
              <strong>Bukti yang akan dikumpulkan:</strong>
            </div>

            <div style={checkboxListStyle}>
              <div style={checkboxItemStyle}>
                <input type="checkbox" style={{marginTop: '2px'}} />
                <span>Hasil verifikasi Portofolio</span>
              </div>
              <div style={checkboxItemStyle}>
                <input type="checkbox" style={{marginTop: '2px'}} />
                <span>Hasil review produk</span>
              </div>
              <div style={checkboxItemStyle}>
                <input type="checkbox" style={{marginTop: '2px'}} />
                <span>Hasil Observasi Langsung</span>
              </div>
              <div style={checkboxItemStyle}>
                <input type="checkbox" style={{marginTop: '2px'}} />
                <span>Hasil kegiatan Terstruktur</span>
              </div>
              <div style={checkboxItemStyle}>
                <input type="checkbox" style={{marginTop: '2px'}} />
                <span>Hasil Performance Tusan</span>
              </div>
              <div style={checkboxItemStyle}>
                <input type="checkbox" style={{marginTop: '2px'}} />
                <span>Hasil Pertanyaan Tertulis</span>
              </div>
              <div style={checkboxItemStyle}>
                <input type="checkbox" style={{marginTop: '2px'}} />
                <span>Hasil Pertanyaan Lisan</span>
              </div>
              <div style={checkboxItemStyle}>
                <input type="checkbox" style={{marginTop: '2px'}} />
                <span>Hasil Pertanyaan wawancara</span>
              </div>
            </div>

            <div style={scheduleStyle}>
              <div style={{fontWeight: 'bold', marginBottom: '15px'}}>Pelaksanaan asesmen disepakati pada:</div>
              
              <div style={scheduleRowStyle}>
                <span style={scheduleLabelStyle}>Hari/Tanggal</span>
                <span style={{margin: '0 5px'}}>:</span>
              </div>
              
              <div style={scheduleRowStyle}>
                <span style={scheduleLabelStyle}>Waktu</span>
                <span style={{margin: '0 5px'}}>:</span>
              </div>
              
              <div style={scheduleRowStyle}>
                <span style={scheduleLabelStyle}>TUK</span>
                <span style={{margin: '0 5px'}}>:</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div style={rightSectionStyle}>
            <div style={infoBoxStyle}>
              <div style={infoTitleStyle}>Asesi:</div>
              <p style={infoTextStyle}>
                Bahwa saya telah mendapatkan penjelasan terkait hak dan prosedur banding asesmen dari asesor.
              </p>
            </div>

            <div style={infoBoxStyle}>
              <div style={infoTitleStyle}>Asesor:</div>
              <p style={infoTextStyle}>
                Menyatakan tidak akan membuka hasil pekerjaan yang telah diperoleh karena penugasan saya sebagai Asesor dalam pelaksanaan Asesmen kepada siapapun atau organisasi manapun selain kepada pihak yang berwenang sehubungan dengan kewajiban saya sebagai Asesor yang ditugaskan oleh LSP.
              </p>
            </div>

            <div style={infoBoxStyle}>
              <div style={infoTitleStyle}>Asesi:</div>
              <p style={infoTextStyle}>
                Saya setuju mengikuti Asesmen dengan pemahaman bahwa informasi yang dikumpulkan hanya digunakan untuk pengembangan profesional dan hanya dapat diakses oleh orang tertentu saja.
              </p>
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
            <div style={modalIconStyle}>
              <Check size={30} color="white" />
            </div>
            <h3 style={modalTitleStyle}>Anda menyetujui</h3>
            <h3 style={modalTitleStyle}>rekaman Asesmen ini</h3>
            <p style={modalSubtitleStyle}>
              Anda menyetujui dokumen sertifikat asesi ini dengan penilaian yang sebenar-benarnya
            </p>
            <button
              style={modalButtonStyle}
              onClick={handleModalOke}
              onMouseOver={(e) => e.target.style.backgroundColor = '#1976D2'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#2196F3'}
            >
              Oke
            </button>
          </div>
        </div>
      )}

      {/* Modal Notifikasi Reject */}
      {showRejectModal && (
        <div style={modalOverlayStyle}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '25px 30px',
            minWidth: '400px',
            maxWidth: '500px',
            textAlign: 'center',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            border: '1px solid #e0e0e0'
          }}>
            {/* Icon dengan background orange dan simbol X */}
            <div style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#FF8C00',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px auto',
              fontSize: '24px',
              color: 'white',
              fontWeight: 'bold'
            }}>
              ✗
            </div>
            
            {/* Title */}
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '6px',
              lineHeight: '1.2'
            }}>
              Anda menolak
            </h3>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '15px',
              lineHeight: '1.2'
            }}>
              rekaman Asesmen ini
            </h3>
            
            {/* Separator line */}
            <div style={{
              width: '100%',
              height: '1px',
              backgroundColor: '#e0e0e0',
              margin: '15px 0'
            }}></div>
            
            {/* Description */}
            <p style={{
              fontSize: '13px',
              color: '#666',
              marginBottom: '20px',
              lineHeight: '1.4',
              fontStyle: 'italic'
            }}>
              Dokumen ini ditolak karena dokumen dan keaslian data tidak valid.
            </p>
            
            {/* Button */}
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
                minWidth: '80px',
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
      )}
    </div>
  );
};

export default PersetujuanAsesmen;