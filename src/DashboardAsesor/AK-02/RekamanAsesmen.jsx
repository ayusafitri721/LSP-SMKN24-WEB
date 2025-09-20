import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

// Responsive styles
const pageContainerStyle = {
  backgroundColor: 'white',
  fontFamily: 'Arial, sans-serif',
  padding: '1rem',
  minHeight: '100vh',
  boxSizing: 'border-box',
};

const headerSectionStyle = {
  backgroundImage: "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '0 0 2.5rem 2.5rem',
  overflow: 'hidden',
  marginBottom: '0',
};

const logoContainerStyle = {
  height: '20vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '1.25rem 0',
};

const logoTextStyle = {
  color: 'white',
  fontSize: 'clamp(2rem, 8vw, 3.5rem)', // Responsive font size
  fontWeight: 'bold',
  margin: 0,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  letterSpacing: '0.0625rem',
};

const contentCardStyle = {
  backgroundColor: 'white',
  borderRadius: '0 0 0.9375rem 0.9375rem',
  padding: '1.875rem',
  boxShadow: 'none',
  marginTop: '0',
  border: 'none',
};

const headerSectionStyle2 = {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',
  marginBottom: '1.25rem',
  paddingBottom: '0.625rem',
  borderBottom: '2px solid #FF8C00',
};

const logoContainer2Style = {
  flexShrink: 0,
};

const headerContentStyle = {
  flex: 1,
};

const titleStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
  margin: '0 0 0.3125rem 0',
  color: '#333',
  textAlign: 'center',
};

const subtitleStyle = {
  fontSize: '1rem',
  fontWeight: 'bold',
  margin: '0 0 0.9375rem 0',
  color: '#333',
  textAlign: 'center',
};

const tableHeaderStyle = {
  backgroundColor: '#f8f9fa',
  padding: '0.75rem 1.25rem',
  borderBottom: '1px solid #dee2e6',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  color: '#333',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '0.6875rem',
};

const tableRowStyle = {
  borderBottom: '1px solid #dee2e6',
};

const tableCellStyle = {
  padding: '0.5rem 0.75rem',
  borderRight: '1px solid #dee2e6',
  verticalAlign: 'top',
};

const inputCellStyle = {
  padding: '0.25rem 0.5rem',
  borderRight: '1px solid #dee2e6',
};

const inputStyle = {
  width: '100%',
  border: 'none',
  outline: 'none',
  fontSize: '0.625rem',
  padding: '0.25rem',
  backgroundColor: 'transparent',
  boxSizing: 'border-box',
};

const sectionStyle = {
  backgroundColor: '#f8f9fa',
  margin: '1.25rem',
  borderRadius: '0.5rem',
  border: '1px solid #dee2e6',
};

const sectionHeaderStyle = {
  backgroundColor: '#e9ecef',
  padding: '0.5rem 0.75rem',
  fontSize: '0.6875rem',
  fontWeight: 'bold',
  borderBottom: '1px solid #dee2e6',
};

const checkboxTableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '0.5625rem',
};

const checkboxHeaderStyle = {
  backgroundColor: '#f8f9fa',
  padding: '0.375rem 0.5rem',
  textAlign: 'center',
  fontSize: '0.5625rem',
  fontWeight: 'normal',
  borderRight: '1px solid #dee2e6',
  borderBottom: '1px solid #dee2e6',
};

const checkboxCellStyle = {
  padding: '0.25rem',
  textAlign: 'center',
  borderRight: '1px solid #dee2e6',
  borderBottom: '1px solid #dee2e6',
  width: 'auto',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1.25rem',
  margin: '3rem 1.25rem 1.25rem 1.25rem',
  paddingBottom: '1.25rem',
  flexWrap: 'wrap',
};

const modalOverlayStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: 'white',
  borderRadius: '0.5rem',
  padding: '1.25rem',
  width: '90%',
  maxWidth: '400px',
  textAlign: 'center',
  boxShadow: '0 0.125rem 0.625rem rgba(0,0,0,0.1)',
  boxSizing: 'border-box',
};

const modalIconStyle = {
  width: '2.5rem',
  height: '2.5rem',
  backgroundColor: '#4A90E2',
  borderRadius: '50%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '0.625rem',
};

const modalTextStyle = {
  fontSize: 'clamp(1rem, 3vw, 1.125rem)',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '0.625rem',
  lineHeight: '1.2',
};

const modalDescStyle = {
  fontSize: 'clamp(0.625rem, 1.5vw, 0.75rem)',
  color: '#666',
  fontStyle: 'italic',
  marginBottom: '1.25rem',
};

const modalButtonStyle = {
  padding: '0.625rem 1.25rem',
  backgroundColor: '#4A90E2',
  color: 'white',
  border: 'none',
  borderRadius: '1.25rem',
  cursor: 'pointer',
  fontSize: '0.875rem',
  fontWeight: 'bold',
};

// Media queries for responsiveness
const mediaQueries = `
  @media (max-width: 768px) {
    .contentCardStyle {
      padding: 1rem;
    }
    .tableCellStyle, .inputCellStyle {
      padding: 0.25rem;
    }
    .ak04-button {
      padding: 0.3125rem 0.625rem !important;
      font-size: 0.625rem !important;
    }
    .modalStyle {
      width: 85%;
      padding: 1rem;
    }
    .modalTextStyle {
      font-size: clamp(0.875rem, 2.5vw, 1rem);
    }
    .modalDescStyle {
      font-size: clamp(0.5rem, 1.5vw, 0.625rem);
    }
    .modalButtonStyle {
      padding: 0.5rem 1rem;
      font-size: 0.75rem;
    }
  }
  @media (max-width: 480px) {
    .headerSectionStyle {
      border-radius: 0 0 1.25rem 1.25rem;
    }
    .logoTextStyle {
      font-size: clamp(1.5rem, 6vw, 2rem);
    }
    .buttonContainerStyle {
      flex-direction: column;
      gap: 0.625rem;
    }
    .modalIconStyle {
      width: 2rem;
      height: 2rem;
    }
    .tableStyle td, .tableStyle th {
      font-size: 0.5rem;
    }
  }
`;

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

  useEffect(() => {
    // Menyisipkan gaya khusus untuk tombol AK.04
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .ak04-button {
        padding: 0.375rem 0.75rem !important;
        border: 1px solid #ddd !important;
        border-radius: 0.5rem !important;
        cursor: pointer !important;
        font-size: 0.6875rem !important;
        font-weight: bold !important;
        background-color: white !important;
        color: #333 !important;
        white-space: nowrap !important;
        min-width: auto !important;
        box-sizing: border-box !important;
      }
      .ak04-button:hover {
        background-color: #f5f5f5 !important; /* Efek hover opsional */
      }
    `;
    document.head.appendChild(styleElement);

    // Membersihkan gaya saat komponen unmount
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

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
      window.location.href = '/dashboard-asesor/laporan-asesmen/08939239239';
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
      <style>{mediaQueries}</style>
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
        <div style={headerSectionStyle2}>
          <div style={logoContainer2Style}>
            <img
              src="/src/img/image 12.png"
              alt="LSP Logo"
              style={{
                width: '5rem',
                height: '5rem',
                borderRadius: '0.5rem',
                objectFit: 'contain',
                backgroundColor: '#f8f9fa',
                padding: '0.25rem',
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
              <td style={{ ...tableCellStyle, width: '9.375rem', backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '0.6875rem' }}>
                Skema Sertifikasi
                <br />
                <span style={{ fontWeight: 'normal', fontSize: '0.625rem' }}>(KKNI/OKUPASI/KLASTER)</span>
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2">
                <input
                  style={{ ...inputStyle, fontSize: '0.625rem' }}
                  type="text"
                  value={formData.judulUnit || ''}
                  onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                  placeholder="JUDUL UNIT"
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '0.6875rem' }}>
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2">
                <input
                  style={{ ...inputStyle, fontSize: '0.625rem' }}
                  type="text"
                  value={formData.kodeUnit || ''}
                  onChange={(e) => handleInputChange('kodeUnit', e.target.value)}
                  placeholder="KODE UNIT"
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '0.6875rem' }}>
                TUK
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2">
                <input
                  style={{ ...inputStyle, fontSize: '0.625rem' }}
                  type="text"
                  value={formData.tuk || ''}
                  onChange={(e) => handleInputChange('tuk', e.target.value)}
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '0.6875rem' }}>
                Nama Asesor
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2">
                <input
                  style={{ ...inputStyle, fontSize: '0.625rem' }}
                  type="text"
                  value={formData.namaAsesor || ''}
                  onChange={(e) => handleInputChange('namaAsesor', e.target.value)}
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '0.6875rem' }}>
                Nama Asesi
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2">
                <input
                  style={{ ...inputStyle, fontSize: '0.625rem' }}
                  type="text"
                  value={formData.namaAsesi || ''}
                  onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '0.6875rem' }}>
                Tanggal
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2">
                <input
                  style={{ ...inputStyle, fontSize: '0.625rem' }}
                  type="date"
                  value={formData.tanggal || ''}
                  onChange={(e) => handleInputChange('tanggal', e.target.value)}
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '0.6875rem' }}>
                Waktu
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }} colSpan="2">
                <input
                  style={{ ...inputStyle, fontSize: '0.625rem' }}
                  type="time"
                  value={formData.waktu || ''}
                  onChange={(e) => handleInputChange('waktu', e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Grid untuk 4 section dalam layout 2x2 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
          {renderCheckboxSection(1)}
          {renderCheckboxSection(2)}
          {renderCheckboxSection(3)}
          {renderCheckboxSection(4)}
        </div>

        {/* Button Container with More Spacing and Rounded Buttons */}
        <div style={buttonContainerStyle}>
          <button
            className="ak04-button"
            style={{
              padding: '0.375rem 0.75rem',
              border: '1px solid #ddd',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '0.6875rem',
              fontWeight: 'bold',
              backgroundColor: 'white',
              color: '#333',
              whiteSpace: 'nowrap',
              minWidth: 'auto',
              boxSizing: 'border-box',
            }}
            onClick={handleApprove}
          >
            APPROVE
          </button>
          <button
            className="ak04-button"
            style={{
              padding: '0.375rem 0.75rem',
              border: '1px solid #ddd',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '0.6875rem',
              fontWeight: 'bold',
              backgroundColor: 'white',
              color: '#333',
              whiteSpace: 'nowrap',
              minWidth: 'auto',
              boxSizing: 'border-box',
            }}
            onClick={handleReject}
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
              <Check size={20} color="white" />
            </div>
            <div style={modalTextStyle}>
              Anda menyetujui<br />rekaman Asesmen ini
            </div>
            <div style={modalDescStyle}>
              Anda menyetujui dokumen sertifikat asesi ini dengan penilaian yang sebenar-benarnya
            </div>
            <button style={modalButtonStyle} onClick={handleModalOke}>
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
            borderRadius: '0.5rem',
            padding: '1.25rem',
            width: '90%',
            maxWidth: '500px',
            textAlign: 'center',
            boxShadow: '0 0.125rem 0.625rem rgba(0,0,0,0.1)',
            boxSizing: 'border-box',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem',
            }}>
              <div style={{
                width: '3.125rem',
                height: '3.125rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}>
                <div style={{
                  width: '2.25rem',
                  height: '2.625rem',
                  border: '2px solid #FF8C00',
                  borderRadius: '0.125rem',
                  backgroundColor: 'white',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0.25rem',
                }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.125rem',
                    marginTop: '0.125rem',
                  }}>
                    <div style={{ height: '0.125rem', backgroundColor: '#FF8C00', width: '100%', borderRadius: '0.0625rem' }}></div>
                    <div style={{ height: '0.125rem', backgroundColor: '#FF8C00', width: '100%', borderRadius: '0.0625rem' }}></div>
                    <div style={{ height: '0.125rem', backgroundColor: '#FF8C00', width: '80%', borderRadius: '0.0625rem' }}></div>
                    <div style={{ height: '0.125rem', backgroundColor: '#FF8C00', width: '90%', borderRadius: '0.0625rem' }}></div>
                  </div>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '0.125rem',
                  right: '0.125rem',
                  width: '1.125rem',
                  height: '1.125rem',
                  backgroundColor: '#FF8C00',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  color: 'white',
                  fontWeight: 'bold',
                  border: '2px solid white',
                  boxShadow: '0 0.0625rem 0.1875rem rgba(0,0,0,0.2)',
                }}>
                  ✗
                </div>
              </div>
            </div>
            <div style={{
              fontSize: 'clamp(1rem, 3vw, 1.375rem)',
              fontWeight: '600',
              color: '#333',
              marginBottom: '0.25rem',
              lineHeight: '1.2',
            }}>
              Anda menolak<br />rekaman Asesmen ini
            </div>
            <div style={{
              fontSize: 'clamp(0.625rem, 1.5vw, 0.875rem)',
              color: '#666',
              marginBottom: '1.25rem',
              lineHeight: '1.5',
              fontStyle: 'italic',
            }}>
              Dokumen ini ditolak karena dokumen dan keaslian data tidak valid.
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                style={{
                  padding: '0.625rem 1.875rem',
                  backgroundColor: '#FF8C00',
                  color: 'white',
                  border: 'none',
                  borderRadius: '1.25rem',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  transition: 'all 0.2s ease',
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

export default RekamanAsesmen;