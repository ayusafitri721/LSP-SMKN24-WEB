import React, { useState } from 'react';
import { Check } from 'lucide-react';

// Header styles from CeklisObservasi (IA-01.CL)
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
  alignItems: 'center',
  gap: '20px',
  marginBottom: '20px',
  paddingBottom: '10px',
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

// Original form styles
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
  width: 'auto',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  margin: '40px 20px 20px 20px', // Increased top margin for more spacing
  paddingBottom: '20px',
};

const buttonStyle = {
  padding: '12px 30px', // Increased padding for more rounded appearance
  border: 'none',
  borderRadius: '25px', // More rounded
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
              <td style={{ ...tableCellStyle, width: '150px', backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
                Skema Sertifikasi
                <br />
                <span style={{ fontWeight: 'normal', fontSize: '10px' }}>(KKNI/OKUPASI/KLASTER)</span>
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

        {/* Button Container with More Spacing and Rounded Buttons */}
        <div style={buttonContainerStyle}>
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

export default RekamanAsesmen;