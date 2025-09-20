import React, { useState } from 'react';
import { Check } from 'lucide-react';

// Header styles from CeklisObservasi (IA-01.CL)
const pageContainerStyle = {
  backgroundColor: 'white',
  fontFamily: 'Arial, sans-serif',
  padding: 'clamp(10px, 2vw, 15px)', // Responsif
  minHeight: '100vh',
  boxSizing: 'border-box',
};

const headerSectionStyle = {
  backgroundImage: "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '0 0 clamp(20px, 4vw, 40px) clamp(20px, 4vw, 40px)', // Responsif
  overflow: 'hidden',
  marginBottom: '0',
  width: '100%',
};

const logoContainerStyle = {
  height: 'clamp(100px, 20vw, 200px)', // Responsif
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 'clamp(10px, 2vw, 20px)', // Responsif
  marginBottom: 'clamp(10px, 2vw, 20px)', // Responsif
};

const logoTextStyle = {
  color: 'white',
  fontSize: 'clamp(24px, 5vw, 56px)', // Responsif
  fontWeight: 'bold',
  margin: 0,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  letterSpacing: '1px',
};

const contentCardStyle = {
  backgroundColor: 'white',
  borderRadius: '0 0 clamp(10px, 2vw, 15px) clamp(10px, 2vw, 15px)', // Responsif
  padding: 'clamp(15px, 3vw, 30px)', // Responsif
  boxShadow: 'none',
  marginTop: '0',
  border: 'none',
  width: '100%',
  boxSizing: 'border-box',
};

const headerSectionStyle2 = {
  display: 'flex',
  alignItems: 'center',
  gap: 'clamp(10px, 2vw, 20px)', // Responsif
  marginBottom: 'clamp(10px, 2vw, 20px)', // Responsif
  paddingBottom: 'clamp(5px, 1vw, 10px)', // Responsif
  borderBottom: '2px solid #FF8C00',
  flexWrap: 'wrap', // Tambah untuk responsivitas
};

const logoContainer2Style = {
  flexShrink: 0,
};

const headerContentStyle = {
  flex: 1,
};

const titleStyle = {
  fontSize: 'clamp(12px, 2.5vw, 16px)', // Responsif
  fontWeight: 'bold',
  margin: '0 0 5px 0',
  color: '#333',
  textAlign: 'center',
};

const subtitleStyle = {
  fontSize: 'clamp(12px, 2.5vw, 16px)', // Responsif
  fontWeight: 'bold',
  margin: '0 0 clamp(10px, 2vw, 15px) 0', // Responsif
  color: '#333',
  textAlign: 'center',
};

// Original form styles
const tableHeaderStyle = {
  backgroundColor: '#f8f9fa',
  padding: 'clamp(8px, 1.5vw, 12px) clamp(12px, 2vw, 20px)', // Responsif
  borderBottom: '1px solid #dee2e6',
  fontSize: 'clamp(10px, 2vw, 12px)', // Responsif
  fontWeight: 'bold',
  color: '#333',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: 'clamp(9px, 2vw, 11px)', // Responsif
};

const tableRowStyle = {
  borderBottom: '1px solid #dee2e6',
};

const tableCellStyle = {
  padding: 'clamp(6px, 1.5vw, 8px) clamp(8px, 2vw, 12px)', // Responsif
  borderRight: '1px solid #dee2e6',
  verticalAlign: 'top',
};

const inputCellStyle = {
  padding: 'clamp(3px, 1vw, 4px) clamp(6px, 1.5vw, 8px)', // Responsif
  borderRight: '1px solid #dee2e6',
};

const inputStyle = {
  width: '100%',
  border: 'none',
  outline: 'none',
  fontSize: 'clamp(8px, 2vw, 10px)', // Responsif
  padding: 'clamp(3px, 1vw, 4px)', // Responsif
  backgroundColor: 'transparent',
};

const sectionStyle = {
  backgroundColor: '#f8f9fa',
  margin: 'clamp(10px, 2vw, 20px)', // Responsif
  borderRadius: '8px',
  border: '1px solid #dee2e6',
};

const sectionHeaderStyle = {
  backgroundColor: '#e9ecef',
  padding: 'clamp(6px, 1.5vw, 8px) clamp(8px, 2vw, 12px)', // Responsif
  fontSize: 'clamp(9px, 2vw, 11px)', // Responsif
  fontWeight: 'bold',
  borderBottom: '1px solid #dee2e6',
};

const checkboxTableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: 'clamp(8px, 1.8vw, 9px)', // Responsif
};

const checkboxHeaderStyle = {
  backgroundColor: '#f8f9fa',
  padding: 'clamp(4px, 1vw, 6px) clamp(6px, 1.5vw, 8px)', // Responsif
  textAlign: 'center',
  fontSize: 'clamp(8px, 1.8vw, 9px)', // Responsif
  fontWeight: 'normal',
  borderRight: '1px solid #dee2e6',
  borderBottom: '1px solid #dee2e6',
  width: 'auto',
};

const checkboxCellStyle = {
  padding: 'clamp(3px, 1vw, 4px)', // Responsif
  textAlign: 'center',
  borderRight: '1px solid #dee2e6',
  borderBottom: '1px solid #dee2e6',
  width: 'auto',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: 'clamp(10px, 2vw, 15px)', // Responsif
  margin: 'clamp(20px, 4vw, 40px) clamp(10px, 2vw, 20px) clamp(10px, 2vw, 20px)', // Responsif
  paddingBottom: 'clamp(10px, 2vw, 20px)', // Responsif
  flexWrap: 'wrap', // Tambah untuk responsivitas
};

const buttonStyle = {
  padding: 'clamp(8px, 1.5vw, 12px) clamp(20px, 3vw, 30px)', // Responsif
  border: 'none',
  borderRadius: 'clamp(15px, 3vw, 25px)', // Responsif
  cursor: 'pointer',
  fontSize: 'clamp(10px, 2vw, 12px)', // Responsif
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
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
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
  const [showRejectModal, setShowRejectModal] = useState(false);

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
    setShowModal(true);
  };

  const handleReject = () => {
    setShowRejectModal(true);
  };

  const handleModalOke = () => {
    setShowModal(false);
    setTimeout(() => {
      window.location.href = '/dashboard-asesor/laporan-asesmen/0893923923';
    }, 100);
  };

  const handleRejectModalOke = () => {
    setShowRejectModal(false);
    setTimeout(() => {
      window.location.href = '/dashboard-asesor/approved-unapproved/08939239239';
    }, 100);
  };

  const renderCheckboxSection = (sectionNum) => (
    <div style={sectionStyle}>
      <div style={sectionHeaderStyle}>Menggunakan Struktur Data</div>
      <table style={checkboxTableStyle}>
        <thead>
          <tr>
            <th style={{ ...checkboxHeaderStyle, width: 'auto' }}>Observasi Demonstrasi</th>
            <th style={{ ...checkboxHeaderStyle, width: 'auto' }}>Pertanyaan Tertulis</th>
            <th style={{ ...checkboxHeaderStyle, width: 'auto' }}>Portofolio</th>
            <th style={{ ...checkboxHeaderStyle, width: 'auto' }}>Proyek Kerja</th>
            <th style={{ ...checkboxHeaderStyle, width: 'auto' }}>Pernyataan Pihak Ketiga Pertanyaan Wawancara</th>
            <th style={{ ...checkboxHeaderStyle, width: 'auto' }}>Pertanyaan Lisan</th>
            <th style={{ ...checkboxHeaderStyle, width: 'auto' }}>Lainnya</th>
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
                checked={formData.checkboxes[`section${sectionNum}_pertanyaan_lisan`] || false}
                onChange={() => handleCheckboxChange(`section${sectionNum}`, 'pertanyaan_lisan')}
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
        </tbody>
      </table>
    </div>
  );

  return (
    <div style={pageContainerStyle}>
      <style>
        {`
          @media (max-width: 768px) {
            .grid-container {
              grid-template-columns: 1fr;
            }
            .modal-container {
              min-width: clamp(250px, 90vw, 400px);
              padding: clamp(15px, 3vw, 20px);
            }
            .header-section-2 {
              flex-direction: column;
              align-items: center;
            }
            .logo-container-2 img {
              width: clamp(50px, 15vw, 60px);
              height: clamp(50px, 15vw, 60px);
            }
            .table-cell {
              display: block;
              width: 100%;
              border-right: none;
              border-bottom: 1px solid #dee2e6;
            }
            .input-cell {
              border-right: none;
            }
            .checkbox-table th {
              font-size: clamp(7px, 1.5vw, 8px);
              padding: clamp(3px, 1vw, 5px);
            }
            .checkbox-table td {
              padding: clamp(2px, 0.8vw, 3px);
            }
          }
          @media (max-width: 480px) {
            .header-section-2 {
              gap: clamp(5px, 1vw, 10px);
            }
            .button-container {
              flex-direction: column;
              align-items: center;
            }
            .modal-container {
              min-width: clamp(200px, 90vw, 300px);
              padding: clamp(10px, 2vw, 15px);
            }
            .modal-icon {
              width: clamp(30px, 10vw, 40px);
              height: clamp(30px, 10vw, 40px);
            }
            .modal-title {
              font-size: clamp(14px, 3vw, 16px);
            }
            .modal-description {
              font-size: clamp(10px, 2vw, 12px);
            }
            .modal-button {
              padding: clamp(6px, 1.5vw, 8px) clamp(15px, 3vw, 20px);
              font-size: clamp(10px, 2vw, 12px);
            }
            .modal-close-button {
              width: clamp(18px, 5vw, 20px);
              height: clamp(18px, 5vw, 20px);
              font-size: clamp(10px, 2vw, 12px);
            }
            .table-cell {
              font-size: clamp(8px, 1.8vw, 9px);
            }
            .input-field {
              font-size: clamp(8px, 1.8vw, 9px);
            }
          }
        `}
      </style>

      {/* Header Section from CeklisObservasi (IA-01.CL) */}
      <div style={headerSectionStyle}>
        <div style={logoContainerStyle}>
          <h1 style={logoTextStyle}>
            MyLSP
          </h1>
        </div>
      </div>

      {/* Content Card with Orange Line and LSP Logo */}
      <div style={contentCardStyle}>
        <div style={headerSectionStyle2} className="header-section-2">
          <div style={logoContainer2Style} className="logo-container-2">
            <img
              src="/src/img/image 12.png"
              alt="LSP Logo"
              style={{
                width: 'clamp(60px, 15vw, 80px)', // Responsif
                height: 'clamp(60px, 15vw, 80px)', // Responsif
                borderRadius: '8px',
                objectFit: 'contain',
                backgroundColor: '#f8f9fa',
                padding: 'clamp(3px, 1vw, 4px)', // Responsif
              }}
            />
          </div>
          <div style={headerContentStyle}>
            <div style={titleStyle}>FR.AK.02</div>
            <div style={subtitleStyle}>REKAMAN ASESMEN</div>
          </div>
        </div>

        {/* Header Tabel */}
        <div style={tableHeaderStyle}>
          Skema Sertifikasi
        </div>

        {/* Tabel Informasi */}
        <table style={tableStyle}>
          <tbody>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, width: 'clamp(100px, 25vw, 150px)', backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: 'clamp(9px, 2vw, 11px)' }} className="table-cell">
                Skema Sertifikasi
                <br />
                <span style={{ fontWeight: 'normal', fontSize: 'clamp(8px, 1.8vw, 10px)' }}>(KKNI/OKUPASI/KLASTER)</span>
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2" className="input-cell">
                <input
                  style={{ ...inputStyle, fontSize: 'clamp(8px, 1.8vw, 10px)' }} // Responsif
                  type="text"
                  value={formData.judulUnit || ''}
                  onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                  placeholder="JUDUL UNIT"
                  className="input-field"
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: 'clamp(9px, 2vw, 11px)' }} className="table-cell">
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2" className="input-cell">
                <input
                  style={{ ...inputStyle, fontSize: 'clamp(8px, 1.8vw, 10px)' }} // Responsif
                  type="text"
                  value={formData.kodeUnit || ''}
                  onChange={(e) => handleInputChange('kodeUnit', e.target.value)}
                  placeholder="KODE UNIT"
                  className="input-field"
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: 'clamp(9px, 2vw, 11px)' }} className="table-cell">
                TUK
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2" className="input-cell">
                <input
                  style={{ ...inputStyle, fontSize: 'clamp(8px, 1.8vw, 10px)' }} // Responsif
                  type="text"
                  value={formData.tuk || ''}
                  onChange={(e) => handleInputChange('tuk', e.target.value)}
                  className="input-field"
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: 'clamp(9px, 2vw, 11px)' }} className="table-cell">
                Nama Asesor
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2" className="input-cell">
                <input
                  style={{ ...inputStyle, fontSize: 'clamp(8px, 1.8vw, 10px)' }} // Responsif
                  type="text"
                  value={formData.namaAsesor || ''}
                  onChange={(e) => handleInputChange('namaAsesor', e.target.value)}
                  className="input-field"
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: 'clamp(9px, 2vw, 11px)' }} className="table-cell">
                Nama Asesi
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2" className="input-cell">
                <input
                  style={{ ...inputStyle, fontSize: 'clamp(8px, 1.8vw, 10px)' }} // Responsif
                  type="text"
                  value={formData.namaAsesi || ''}
                  onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                  className="input-field"
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: 'clamp(9px, 2vw, 11px)' }} className="table-cell">
                Tanggal
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2" className="input-cell">
                <input
                  style={{ ...inputStyle, fontSize: 'clamp(8px, 1.8vw, 10px)' }} // Responsif
                  type="date"
                  value={formData.tanggal || ''}
                  onChange={(e) => handleInputChange('tanggal', e.target.value)}
                  className="input-field"
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: 'clamp(9px, 2vw, 11px)' }} className="table-cell">
                Waktu
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2" className="input-cell">
                <input
                  style={{ ...inputStyle, fontSize: 'clamp(8px, 1.8vw, 10px)' }} // Responsif
                  type="time"
                  value={formData.waktu || ''}
                  onChange={(e) => handleInputChange('waktu', e.target.value)}
                  className="input-field"
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Grid untuk 4 section dalam layout 2x2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(0px, 2vw, 10px)' }} className="grid-container">
          {renderCheckboxSection(1)}
          {renderCheckboxSection(2)}
          {renderCheckboxSection(3)}
          {renderCheckboxSection(4)}
        </div>

        {/* Button Container with More Spacing and Rounded Buttons */}
        <div style={buttonContainerStyle} className="button-container">
          <button style={approveButtonStyle} onClick={handleApprove}>
            APPROVE
          </button>
          <button style={rejectButtonStyle} onClick={handleReject}>
            REJECT
          </button>
        </div>
      </div>

      {/* Modal Notifikasi Approve */}
      {showModal && (
        <div style={modalOverlayStyle}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: 'clamp(10px, 2vw, 16px)', // Responsif
            padding: 'clamp(15px, 3vw, 30px) clamp(20px, 4vw, 40px)', // Responsif
            minWidth: 'clamp(300px, 80vw, 500px)', // Responsif
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            position: 'relative'
          }} className="modal-container">
            {/* Header dengan Icon dan Close Button */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: 'clamp(15px, 3vw, 25px)', // Responsif
            }}>
              {/* Icon clipboard biru dengan checkmark di kiri */}
              <div style={{
                width: 'clamp(40px, 10vw, 50px)', // Responsif
                height: 'clamp(40px, 10vw, 50px)', // Responsif
                backgroundColor: '#4A90E2',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                position: 'relative'
              }} className="modal-icon">
                {/* Clipboard shape */}
                <div style={{
                  width: 'clamp(28px, 7vw, 36px)', // Responsif
                  height: 'clamp(32px, 8vw, 40px)', // Responsif
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
                    width: 'clamp(12px, 3vw, 16px)', // Responsif
                    height: '6px',
                    backgroundColor: '#4A90E2',
                    borderRadius: '3px 3px 0 0'
                  }}></div>

                  {/* Checkmark */}
                  <Check size={clamp(14, 3, 18)} color="#4A90E2" strokeWidth={4} />
                </div>
              </div>

              {/* Title di tengah - sejajar dengan icon */}
              <div style={{
                flex: 1,
                textAlign: 'center',
                paddingTop: 'clamp(3px, 1vw, 5px)', // Responsif
              }}>
                <h3 style={{
                  fontSize: 'clamp(16px, 3vw, 22px)', // Responsif
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '4px',
                  lineHeight: '1.2'
                }} className="modal-title">
                  Anda menyetujui
                </h3>
                <h3 style={{
                  fontSize: 'clamp(16px, 3vw, 22px)', // Responsif
                  fontWeight: '600',
                  color: '#333',
                  margin: '0',
                  lineHeight: '1.2'
                }} className="modal-title">
                  rekaman Asesmen ini
                </h3>
              </div>

              {/* Close button di kanan */}
              <button
                style={{
                  width: 'clamp(20px, 5vw, 24px)', // Responsif
                  height: 'clamp(20px, 5vw, 24px)', // Responsif
                  borderRadius: '50%',
                  backgroundColor: '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(12px, 2vw, 14px)', // Responsif
                  color: '#666',
                  flexShrink: 0
                }}
                onClick={() => setShowModal(false)}
                className="modal-close-button"
              >
                ×
              </button>
            </div>

            {/* Separator line */}
            <div style={{
              width: '100%',
              height: '1px',
              backgroundColor: '#e0e0e0',
              margin: 'clamp(15px, 3vw, 20px) 0', // Responsif
            }}></div>

            {/* Description */}
            <p style={{
              fontSize: 'clamp(12px, 2vw, 14px)', // Responsif
              color: '#666',
              marginBottom: 'clamp(15px, 3vw, 25px)', // Responsif
              lineHeight: '1.5',
              fontStyle: 'italic',
              textAlign: 'center'
            }} className="modal-description">
              Anda menyetujui dokumen sertifikat asesi ini dengan penilaian yang sebenar-benarnya
            </p>

            {/* Button di kanan */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                style={{
                  padding: 'clamp(8px, 1.5vw, 10px) clamp(20px, 3vw, 30px)', // Responsif
                  backgroundColor: '#4A90E2',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'clamp(15px, 3vw, 20px)', // Responsif
                  cursor: 'pointer',
                  fontSize: 'clamp(12px, 2vw, 14px)', // Responsif
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
                onClick={handleModalOke}
                onMouseOver={(e) => e.target.style.backgroundColor = '#357ABD'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#4A90E2'}
                className="modal-button"
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
            borderRadius: 'clamp(10px, 2vw, 16px)', // Responsif
            padding: 'clamp(15px, 3vw, 30px) clamp(20px, 4vw, 40px)', // Responsif
            minWidth: 'clamp(300px, 80vw, 500px)', // Responsif
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
            position: 'relative'
          }} className="modal-container">
            {/* Header dengan Icon dan Close Button */}
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginBottom: 'clamp(15px, 3vw, 25px)', // Responsif
            }}>
              {/* Icon document dengan X orange di kiri */}
              <div style={{
                width: 'clamp(40px, 10vw, 50px)', // Responsif
                height: 'clamp(40px, 10vw, 50px)', // Responsif
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                position: 'relative'
              }} className="modal-icon">
                {/* Document outline */}
                <div style={{
                  width: 'clamp(28px, 7vw, 36px)', // Responsif
                  height: 'clamp(34px, 8vw, 42px)', // Responsif
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
                  width: 'clamp(14px, 4vw, 18px)', // Responsif
                  height: 'clamp(14px, 4vw, 18px)', // Responsif
                  backgroundColor: '#FF8C00',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(10px, 2vw, 12px)', // Responsif
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
                paddingTop: 'clamp(3px, 1vw, 5px)', // Responsif
              }}>
                <h3 style={{
                  fontSize: 'clamp(16px, 3vw, 22px)', // Responsif
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '4px',
                  lineHeight: '1.2'
                }} className="modal-title">
                  Anda menolak
                </h3>
                <h3 style={{
                  fontSize: 'clamp(16px, 3vw, 22px)', // Responsif
                  fontWeight: '600',
                  color: '#333',
                  margin: '0',
                  lineHeight: '1.2'
                }} className="modal-title">
                  rekaman Asesmen ini
                </h3>
              </div>

              {/* Close button di kanan */}
              <button
                style={{
                  width: 'clamp(20px, 5vw, 24px)', // Responsif
                  height: 'clamp(20px, 5vw, 24px)', // Responsif
                  borderRadius: '50%',
                  backgroundColor: '#f0f0f0',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(12px, 2vw, 14px)', // Responsif
                  color: '#666',
                  flexShrink: 0
                }}
                onClick={() => setShowRejectModal(false)}
                className="modal-close-button"
              >
                ×
              </button>
            </div>

            {/* Separator line */}
            <div style={{
              width: '100%',
              height: '1px',
              backgroundColor: '#e0e0e0',
              margin: 'clamp(15px, 3vw, 20px) 0', // Responsif
            }}></div>

            {/* Description */}
            <p style={{
              fontSize: 'clamp(12px, 2vw, 14px)', // Responsif
              color: '#666',
              marginBottom: 'clamp(15px, 3vw, 25px)', // Responsif
              lineHeight: '1.5',
              fontStyle: 'italic',
              textAlign: 'center'
            }} className="modal-description">
              Dokumen ini ditolak karena dokumen dan keaslian data tidak valid.
            </p>

            {/* Button di kanan */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                style={{
                  padding: 'clamp(8px, 1.5vw, 10px) clamp(20px, 3vw, 30px)', // Responsif
                  backgroundColor: '#FF8C00',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'clamp(15px, 3vw, 20px)', // Responsif
                  cursor: 'pointer',
                  fontSize: 'clamp(12px, 2vw, 14px)', // Responsif
                  fontWeight: '600',
                  transition: 'all 0.2s ease'
                }}
                onClick={handleRejectModalOke}
                onMouseOver={(e) => e.target.style.backgroundColor = '#E67A00'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#FF8C00'}
                className="modal-button"
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

export default RekamanAsesmen;