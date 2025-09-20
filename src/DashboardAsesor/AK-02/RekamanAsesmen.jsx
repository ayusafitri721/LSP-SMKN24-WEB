import React, { useState } from 'react';

// Header styles from IA-01.CL
const headerSectionStyle = {
  backgroundImage: "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '0 0 40px 40px',
  overflow: 'hidden',
  marginBottom: '0',
  padding: '20px 0',
};

const logoContainerStyle = {
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
  marginBottom: '20px',
};

const logoTextStyle = {
  color: 'white',
  fontSize: '56px',
  fontWeight: 'bold',
  margin: 0,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  letterSpacing: '1px',
};

// Subheader styles
const subHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '15px 20px',
  backgroundColor: 'white',
};

const logoLspStyle = {
  width: '50px',
  height: '50px',
  marginRight: '15px',
};

const titleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#333',
  margin: '0',
  flexGrow: 1,
  textAlign: 'center',
};

const codeStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '5px',
};

// Orange line style
const orangeLineStyle = {
  width: '100%',
  height: '3px',
  backgroundColor: '#FF8C00',
  margin: '0',
};

// Styling untuk komponen (sisanya tetap sama)
const pageContainerStyle = {
  backgroundColor: '#f8f9fa',
  minHeight: '100vh',
  fontFamily: 'Arial, sans-serif',
  padding: '20px 0',
};

const contentContainerStyle = {
  margin: '0 20px',
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  overflow: 'hidden',
};

const tableHeaderStyle = {
  backgroundColor: '#f8f9fa',
  padding: '12px 20px',
  borderBottom: '1px solid #dee2e6',
  fontSize: '12px',
  fontWeight: 'bold',
  color: '#333',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '11px',
};

const tableRowStyle = {
  borderBottom: '1px solid #dee2e6',
};

const tableCellStyle = {
  padding: '8px 12px',
  borderRight: '1px solid #dee2e6',
  verticalAlign: 'top',
};

const inputCellStyle = {
  padding: '4px 8px',
  borderRight: '1px solid #dee2e6',
};

const inputStyle = {
  width: '100%',
  border: 'none',
  outline: 'none',
  fontSize: '10px',
  padding: '4px',
  backgroundColor: 'transparent',
};

const sectionStyle = {
  backgroundColor: '#f8f9fa',
  margin: '20px',
  borderRadius: '8px',
  border: '1px solid #dee2e6',
};

const sectionHeaderStyle = {
  backgroundColor: '#e9ecef',
  padding: '8px 12px',
  fontSize: '11px',
  fontWeight: 'bold',
  borderBottom: '1px solid #dee2e6',
};

const checkboxTableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '9px',
};

const checkboxHeaderStyle = {
  backgroundColor: '#f8f9fa',
  padding: '6px 8px',
  textAlign: 'center',
  fontSize: '9px',
  fontWeight: 'normal',
  borderRight: '1px solid #dee2e6',
  borderBottom: '1px solid #dee2e6',
};

const checkboxCellStyle = {
  padding: '4px',
  textAlign: 'center',
  borderRight: '1px solid #dee2e6',
  borderBottom: '1px solid #dee2e6',
  width: '40px',
};

const detailCellStyle = {
  padding: '6px 8px',
  fontSize: '8px',
  color: '#666',
  borderRight: '1px solid #dee2e6',
  borderBottom: '1px solid #dee2e6',
  lineHeight: '1.2',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  margin: '20px',
  paddingBottom: '20px',
};

const buttonStyle = {
  padding: '8px 25px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '12px',
  fontWeight: 'bold',
};

const approveButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'white',
  color: '#333',
  border: '1px solid #ddd',
};

const rejectButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'white',
  color: '#333',
  border: '1px solid #ddd',
};

// Modal styles
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
  zIndex: '1000',
};

const modalContentStyle = {
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '30px',
  textAlign: 'center',
  maxWidth: '400px',
  width: '90%',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
};

const modalIconStyle = {
  fontSize: '48px',
  marginBottom: '20px',
  display: 'block',
};

const modalTitleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0 0 10px 0',
  color: '#333',
};

const modalSubtitleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  margin: '0 0 15px 0',
  color: '#333',
};

const modalDescriptionStyle = {
  fontSize: '14px',
  color: '#666',
  margin: '0 0 25px 0',
  lineHeight: '1.4',
};

const modalButtonStyle = {
  padding: '10px 30px',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 'bold',
  color: 'white',
};

const RekamanAsesmen = () => {
  const [formData, setFormData] = useState({
    judulUnit: '',
    kodeUnit: '',
    tuk: '',
    namaAsesi: '',
    namaAsesor: '',
    tanggal: '',
    waktu: '',
    checkboxes: {},
  });

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'approve' or 'reject'

  const handleCheckboxChange = (section, item) => {
    setFormData((prev) => ({
      ...prev,
      checkboxes: {
        ...prev.checkboxes,
        [`${section}_${item}`]: !prev.checkboxes[`${section}_${item}`],
      },
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleApprove = () => {
    setModalType('approve');
    setShowModal(true);
  };

  const handleReject = () => {
    setModalType('reject');
    setShowModal(true);
  };

  const handleModalOk = () => {
    setShowModal(false);
    setTimeout(() => {
      if (modalType === 'approve') {
        window.location.href = '/dashboard-asesor/laporan-asesmen/0893923923';
      } else if (modalType === 'reject') {
        window.location.href = '/dashboard-asesor/approved-unapproved/08939239239';
      }
    }, 100);
  };

  const renderCheckboxSection = (sectionNum) => (
    <div style={sectionStyle}>
      <div style={sectionHeaderStyle}>Menggunakan Struktur Data</div>
      <table style={checkboxTableStyle}>
        <thead>
          <tr>
            <th style={{ ...checkboxHeaderStyle, width: '40px' }}>Observasi</th>
            <th style={{ ...checkboxHeaderStyle, width: '40px' }}>Demonstrasi</th>
            <th style={{ ...checkboxHeaderStyle, width: '40px' }}>Portofolio</th>
            <th style={{ ...checkboxHeaderStyle, width: '60px' }}>Pertanyaan Lisan</th>
            <th style={{ ...checkboxHeaderStyle, width: '40px' }}>Proyek Kerja</th>
            <th style={{ ...checkboxHeaderStyle, width: '60px' }}>Pertanyaan Tertulis</th>
            <th style={{ ...checkboxHeaderStyle, width: '80px' }}>Lainnya</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={checkboxCellStyle}>
              <input
                type="checkbox"
                checked={formData.checkboxes[`section${sectionNum}_observasi`] || false}
                onChange={() => handleCheckboxChange(`section${sectionNum}`, 'observasi')}
              />
            </td>
            <td style={checkboxCellStyle}>
              <input
                type="checkbox"
                checked={formData.checkboxes[`section${sectionNum}_demonstrasi`] || false}
                onChange={() => handleCheckboxChange(`section${sectionNum}`, 'demonstrasi')}
              />
            </td>
            <td style={checkboxCellStyle}>
              <input
                type="checkbox"
                checked={formData.checkboxes[`section${sectionNum}_portofolio`] || false}
                onChange={() => handleCheckboxChange(`section${sectionNum}`, 'portofolio')}
              />
            </td>
            <td style={checkboxCellStyle}>
              <input
                type="checkbox"
                checked={formData.checkboxes[`section${sectionNum}_pertanyaan_lisan`] || false}
                onChange={() => handleCheckboxChange(`section${sectionNum}`, 'pertanyaan_lisan')}
              />
            </td>
            <td style={checkboxCellStyle}>
              <input
                type="checkbox"
                checked={formData.checkboxes[`section${sectionNum}_proyek`] || false}
                onChange={() => handleCheckboxChange(`section${sectionNum}`, 'proyek')}
              />
            </td>
            <td style={checkboxCellStyle}>
              <input
                type="checkbox"
                checked={formData.checkboxes[`section${sectionNum}_pertanyaan_tertulis`] || false}
                onChange={() => handleCheckboxChange(`section${sectionNum}`, 'pertanyaan_tertulis')}
              />
            </td>
            <td style={checkboxCellStyle}>
              <input
                type="checkbox"
                checked={formData.checkboxes[`section${sectionNum}_lainnya`] || false}
                onChange={() => handleCheckboxChange(`section${sectionNum}`, 'lainnya')}
              />
            </td>
          </tr>
          <tr>
            <td style={detailCellStyle} colSpan="3">
              <strong>Pertanyaan untuk mencakup:</strong>
              <br />
              Kriteria Persyaratan
              <br />
              Kinerja/cara
            </td>
            <td style={detailCellStyle} colSpan="2">
              <strong>Persyaratan</strong>
              <br />
              Variabel
            </td>
            <td style={detailCellStyle} colSpan="2">
              <strong>Persyaratan</strong>
              <br />
              Lingkungan
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div style={pageContainerStyle}>
      {/* Header Section matching IA-01 design - ENLARGED */}
      <div style={headerSectionStyle}>
        <div style={logoContainerStyle}>
          <h1 style={logoTextStyle}>
            MyLSP
          </h1>
        </div>
      </div>

      {/* Subheader with Logo and Text */}
      <div style={subHeaderStyle}>
        <img
          src="/src/img/image 12.png" // Ganti dengan path logo LSP yang sesuai
          alt="LSP Logo"
          style={logoLspStyle}
        />
        <div style={titleStyle}>
          <div style={codeStyle}>FR.AK.02</div>
          REKAMAN ASESMEN
        </div>
      </div>

      {/* Orange Line */}
      <div style={orangeLineStyle}></div>

      {/* Konten Utama */}
      <div style={contentContainerStyle}>
        {/* Header Tabel */}
        <div style={tableHeaderStyle}>
          Skema Sertifikasi
        </div>

        {/* Tabel Informasi */}
        <table style={tableStyle}>
          <tbody>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, width: '150px', backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
                Skema Sertifikasi
                <br />
                <span style={{ fontWeight: 'normal', fontSize: '10px' }}>(JUNIOR WEB DEVELOPER)</span>
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2">
                <input
                  style={{ ...inputStyle, fontSize: '10px' }}
                  type="text"
                  value={formData.judulUnit || ''}
                  onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                  placeholder="JUDUL UNIT"
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2">
                <input
                  style={{ ...inputStyle, fontSize: '10px' }}
                  type="text"
                  value={formData.kodeUnit || ''}
                  onChange={(e) => handleInputChange('kodeUnit', e.target.value)}
                  placeholder="KODE UNIT"
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
                TUK
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2">
                <input
                  style={{ ...inputStyle, fontSize: '10px' }}
                  type="text"
                  value={formData.tuk || ''}
                  onChange={(e) => handleInputChange('tuk', e.target.value)}
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
                Nama Asesi
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2">
                <input
                  style={{ ...inputStyle, fontSize: '10px' }}
                  type="text"
                  value={formData.namaAsesi || ''}
                  onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
                Nama Asesor
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2">
                <input
                  style={{ ...inputStyle, fontSize: '10px' }}
                  type="text"
                  value={formData.namaAsesor || ''}
                  onChange={(e) => handleInputChange('namaAsesor', e.target.value)}
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
                Tanggal
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2">
                <input
                  style={{ ...inputStyle, fontSize: '10px' }}
                  type="date"
                  value={formData.tanggal || ''}
                  onChange={(e) => handleInputChange('tanggal', e.target.value)}
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
                Waktu
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2">
                <input
                  style={{ ...inputStyle, fontSize: '10px' }}
                  type="time"
                  value={formData.waktu || ''}
                  onChange={(e) => handleInputChange('waktu', e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Grid untuk 4 section dalam layout 2x2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0px' }}>
          {renderCheckboxSection(1)}
          {renderCheckboxSection(2)}
          {renderCheckboxSection(3)}
          {renderCheckboxSection(4)}
        </div>

        {/* Button Container */}
        <div style={buttonContainerStyle}>
          <button style={approveButtonStyle} onClick={handleApprove}>
            APPROVE
          </button>
          <button style={rejectButtonStyle} onClick={handleReject}>
            REJECT
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            {modalType === 'approve' ? (
              <>
                <span style={{ ...modalIconStyle, color: '#4CAF50' }}>✓</span>
                <h3 style={modalTitleStyle}>Anda menyetujui</h3>
                <h3 style={modalSubtitleStyle}>rekaman Asesmen ini</h3>
                <p style={modalDescriptionStyle}>
                  Anda menyetujui dokumen sertifikasi asesi ini dengan penilaian yang sebenar-benarnya
                </p>
                <button style={{ ...modalButtonStyle, backgroundColor: '#2196F3' }} onClick={handleModalOk}>
                  Oke
                </button>
              </>
            ) : (
              <>
                <span style={{ ...modalIconStyle, color: '#FF9800' }}>📋</span>
                <h3 style={modalTitleStyle}>Anda menolak</h3>
                <h3 style={modalSubtitleStyle}>rekaman Asesmen ini</h3>
                <p style={modalDescriptionStyle}>
                  Dokumen ini ditolak karena dokumen dan kesesaian data tidak valid.
                </p>
                <button style={{ ...modalButtonStyle, backgroundColor: '#FF9500' }} onClick={handleModalOk}>
                  Oke
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RekamanAsesmen;