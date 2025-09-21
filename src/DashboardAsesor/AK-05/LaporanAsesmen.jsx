import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Check, AlertTriangle } from 'lucide-react';

// Header styles from Wawancara.jsx
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

// Name box style
const nameBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '15px 20px',
  backgroundColor: 'white',
  margin: '0 20px',
  border: '1px solid #dee2e6',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
};

const nameStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#333',
  margin: '0',
};

// Styling untuk komponen
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

const formContainerStyle = {
  margin: '0 20px',
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  overflow: 'hidden',
  padding: '15px',
};

const sectionTitleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '15px',
  color: '#333',
};

const formRowStyle = {
  display: 'flex',
  gap: '20px',
  marginBottom: '15px',
};

const formGroupStyle = {
  flex: 1,
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontSize: '14px',
  fontWeight: '500',
  color: '#555',
};

const thStyle = {
  backgroundColor: '#f5f5f5',
  padding: '12px',
  border: '1px solid #ddd',
  textAlign: 'center',
  fontSize: '14px',
  fontWeight: 'bold',
};

const tdStyle = {
  padding: '12px',
  border: '1px solid #ddd',
  textAlign: 'center',
};

const checkboxStyle = {
  width: '18px',
  height: '18px',
};

const textareaStyle = {
  width: '100%',
  padding: '12px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  fontSize: '14px',
  minHeight: '100px',
  resize: 'vertical',
  boxSizing: 'border-box',
};

const noteStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#333',
};

const signatureSectionStyle = {
  display: 'flex',
  gap: '30px',
  marginBottom: '30px',
};

const signatureFieldsStyle = {
  flex: 1,
};

const notesFieldStyle = {
  flex: 2,
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '30px',
};

const approveButtonStyle = {
  padding: '12px 30px',
  backgroundColor: 'white',
  color: '#333',
  border: '2px solid #333',
  borderRadius: '4px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const rejectButtonStyle = {
  padding: '12px 30px',
  backgroundColor: '#f44336',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

// Modal styles from Wawancara.jsx
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

const LaporanAsesmen = () => {
  const { nis } = useParams();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showValidationModal, setShowValidationModal] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const [validationAction, setValidationAction] = useState('');

  const [formData, setFormData] = useState({
    skemaSertifikasi: '',
    tuk: '',
    namaAsesor: '',
    tanggal: '',
    judulUnit: '',
    kodeUnit: '',
    asesi: [
      { nama: '', rekomendasi: '', keterangan: '' },
      { nama: '', rekomendasi: '', keterangan: '' },
      { nama: '', rekomendasi: '', keterangan: '' },
      { nama: '', rekomendasi: '', keterangan: '' }
    ],
    aspekNegatifPositif: '',
    pencatatanPenolakan: '',
    saranPerbaikan: '',
    namaAsesorTtd: '',
    noReg: '',
    catatan: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAsesiChange = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      asesi: prev.asesi.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const validateForm = (action) => {
    const emptyFields = [];
    
    // Validasi field dasar
    if (!formData.judulUnit.trim()) emptyFields.push('Judul Unit');
    if (!formData.kodeUnit.trim()) emptyFields.push('Kode Unit');
    if (!formData.namaAsesor.trim()) emptyFields.push('Nama Asesor');
    if (!formData.tanggal) emptyFields.push('Tanggal');
    
    // Validasi asesi (minimal ada satu yang diisi lengkap)
    const hasCompleteAsesi = formData.asesi.some(asesi => 
      asesi.nama.trim() && asesi.rekomendasi && asesi.keterangan.trim()
    );
    
    if (!hasCompleteAsesi) {
      emptyFields.push('Minimal satu data asesi lengkap (Nama, Rekomendasi, dan Keterangan)');
    }
    
    // Validasi field feedback
    if (!formData.aspekNegatifPositif.trim()) emptyFields.push('Aspek Negatif dan Positif dalam Asesmen');
    if (!formData.pencatatanPenolakan.trim()) emptyFields.push('Pencatatan Penolakan Hasil Asesmen');
    if (!formData.saranPerbaikan.trim()) emptyFields.push('Saran perbaikan');
    
    // Validasi tanda tangan
    if (!formData.namaAsesorTtd.trim()) emptyFields.push('Nama Asesor (Tanda Tangan)');
    if (!formData.noReg.trim()) emptyFields.push('No.Reg');
    if (!formData.catatan.trim()) emptyFields.push('Catatan');
    
    return emptyFields;
  };

  const handleApprove = () => {
    const emptyFields = validateForm('approve');
    
    if (emptyFields.length > 0) {
      setValidationMessage(emptyFields);
      setValidationAction('approve');
      setShowValidationModal(true);
    } else {
      setShowModal(true);
    }
  };

  const handleReject = () => {
    const emptyFields = validateForm('reject');
    
    if (emptyFields.length > 0) {
      setValidationMessage(emptyFields);
      setValidationAction('reject');
      setShowValidationModal(true);
    } else {
      setShowRejectModal(true);
    }
  };

  const handleModalOke = () => {
    setShowModal(false);
    setTimeout(() => {
      navigate('/dashboard-asesor/approved-unapproved/' + nis);
    }, 100);
  };

  const handleRejectModalOke = () => {
    setShowRejectModal(false);
    setTimeout(() => {
      navigate('/dashboard-asesor/approved-unapproved/' + nis);
    }, 100);
  };

  const handleValidationOk = () => {
    setShowValidationModal(false);
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 767px) {
            .responsive-table {
              font-size: 9px !important;
              min-width: 100% !important;
            }
            .responsive-table td {
              padding: 4px 6px !important;
              white-space: nowrap !important;
            }
            .responsive-table th {
              padding: 6px !important;
              font-size: 9px !important;
              white-space: nowrap !important;
            }
            .responsive-input {
              font-size: 8px !important;
              padding: 3px !important;
              width: 100% !important;
              box-sizing: border-box !important;
            }
            .responsive-textarea {
              font-size: 9px !important;
              min-height: 50px !important;
              width: 100% !important;
              box-sizing: border-box !important;
            }
            .responsive-button {
              font-size: 10px !important;
              padding: 6px 10px !important;
            }
            .table-container {
              overflow-x: auto !important;
              -webkit-overflow-scrolling: touch !important;
            }
            .responsive-modal {
              min-width: 320px !important;
              max-width: 90vw !important;
              margin: 0 10px !important;
              padding: 20px !important;
            }
          }
          
          @media (min-width: 768px) and (max-width: 1024px) {
            .responsive-table {
              font-size: 10px !important;
              min-width: 100% !important;
            }
            .responsive-table td {
              padding: 7px 10px !important;
            }
            .responsive-table th {
              padding: 7px !important;
              font-size: 10px !important;
            }
            .responsive-input {
              font-size: 9px !important;
              padding: 4px !important;
              width: 100% !important;
              box-sizing: border-box !important;
            }
            .responsive-textarea {
              font-size: 9px !important;
              min-height: 55px !important;
              width: 100% !important;
              box-sizing: border-box !important;
            }
            .responsive-button {
              font-size: 11px !important;
              padding: 7px 20px !important;
            }
            .table-container {
              overflow-x: auto !important;
              -webkit-overflow-scrolling: touch !important;
            }
          }
        `}
      </style>
      
      <div style={pageContainerStyle}>
        {/* Header Section */}
        <div style={headerSectionStyle}>
          <div style={logoContainerStyle}>
            <h1 style={logoTextStyle}>MyLSP</h1>
          </div>
        </div>

        {/* Name Box dengan Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          padding: '15px 20px',
          backgroundColor: 'white',
          margin: '0 20px',
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          borderBottom: '2px solid #FF8C00'
        }}>
          <div style={{ flexShrink: 0 }}>
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
          <div style={{
            flex: 1,
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '16px',
              fontWeight: 'bold',
              margin: '0 0 5px 0',
              color: '#333'
            }}>FR.AK.05</div>
            <div style={{
              fontSize: '16px',
              fontWeight: 'bold',
              margin: '0',
              color: '#333'
            }}>LAPORAN ASESMEN</div>
          </div>
        </div>

        {/* Konten Utama dalam Satu Container */}
        <div style={formContainerStyle}>
          {/* Header Skema Sertifikasi */}
          <div style={tableHeaderStyle}>Skema Sertifikasi</div>

          {/* Tabel Skema Sertifikasi */}
          <div className="table-container">
            <table style={tableStyle} className="responsive-table">
              <tbody>
                <tr style={tableRowStyle}>
                  <td style={{ ...tableCellStyle, width: '150px', backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
                    Skema Sertifikasi<br />
                    <span style={{ fontWeight: 'normal', fontSize: '10px' }}>(KKNI/OKUPASI/KLASTER)</span>
                  </td>
                  <td style={{ ...tableCellStyle, width: '80px', backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
                    Judul Unit
                  </td>
                  <td style={{ ...inputCellStyle, backgroundColor: 'white' }}>
                    <input
                      style={inputStyle}
                      className="responsive-input"
                      type="text"
                      value={formData.judulUnit}
                      onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                    />
                  </td>
                </tr>
                <tr style={tableRowStyle}>
                  <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
                    TUK
                  </td>
                  <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
                    Kode Unit
                  </td>
                  <td style={{ ...inputCellStyle, backgroundColor: 'white' }}>
                    <input
                      style={inputStyle}
                      className="responsive-input"
                      type="text"
                      value={formData.kodeUnit}
                      onChange={(e) => handleInputChange('kodeUnit', e.target.value)}
                    />
                  </td>
                </tr>
                <tr style={tableRowStyle}>
                  <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
                    Nama Asesor
                  </td>
                  <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa' }}></td>
                  <td style={{ ...inputCellStyle, backgroundColor: 'white' }}>
                    <input
                      style={inputStyle}
                      className="responsive-input"
                      type="text"
                      value={formData.namaAsesor}
                      onChange={(e) => handleInputChange('namaAsesor', e.target.value)}
                    />
                  </td>
                </tr>
                <tr style={tableRowStyle}>
                  <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
                    Tanggal
                  </td>
                  <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa' }}></td>
                  <td style={{ ...inputCellStyle, backgroundColor: 'white' }}>
                    <input
                      style={inputStyle}
                      className="responsive-input"
                      type="date"
                      value={formData.tanggal}
                      onChange={(e) => handleInputChange('tanggal', e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Header Tabel Hasil Asesmen */}
          <div style={{ ...tableHeaderStyle, marginTop: '20px' }}>Hasil Asesmen</div>

          {/* Tabel Hasil Asesmen */}
          <div className="table-container">
            <table style={tableStyle} className="responsive-table">
              <thead>
                <tr>
                  <th style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px', textAlign: 'center' }}>No</th>
                  <th style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px', textAlign: 'center' }}>Nama Asesi</th>
                  <th style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px', textAlign: 'center' }} colSpan="2">Rekomendasi</th>
                  <th style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px', textAlign: 'center' }}>Keterangan</th>
                </tr>
                <tr>
                  <th style={{ ...tableCellStyle, backgroundColor: '#f8f9fa' }}></th>
                  <th style={{ ...tableCellStyle, backgroundColor: '#f8f9fa' }}></th>
                  <th style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px', textAlign: 'center' }}>K</th>
                  <th style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px', textAlign: 'center' }}>BK</th>
                  <th style={{ ...tableCellStyle, backgroundColor: '#f8f9fa' }}></th>
                </tr>
              </thead>
              <tbody>
                {formData.asesi.map((item, index) => (
                  <tr key={index} style={tableRowStyle}>
                    <td style={{ ...tableCellStyle, textAlign: 'center', backgroundColor: 'white' }}>{index + 1}</td>
                    <td style={{ ...tableCellStyle, backgroundColor: 'white' }}>
                      <input
                        type="text"
                        style={{ ...inputStyle, border: 'none', textAlign: 'center', width: '100%' }}
                        className="responsive-input"
                        value={item.nama}
                        onChange={(e) => handleAsesiChange(index, 'nama', e.target.value)}
                      />
                    </td>
                    <td style={{ ...tableCellStyle, textAlign: 'center', backgroundColor: 'white' }}>
                      <input
                        type="checkbox"
                        style={checkboxStyle}
                        checked={item.rekomendasi === 'K'}
                        onChange={(e) => handleAsesiChange(index, 'rekomendasi', e.target.checked ? 'K' : '')}
                      />
                    </td>
                    <td style={{ ...tableCellStyle, textAlign: 'center', backgroundColor: 'white' }}>
                      <input
                        type="checkbox"
                        style={checkboxStyle}
                        checked={item.rekomendasi === 'BK'}
                        onChange={(e) => handleAsesiChange(index, 'rekomendasi', e.target.checked ? 'BK' : '')}
                      />
                    </td>
                    <td style={{ ...tableCellStyle, backgroundColor: 'white' }}>
                      <input
                        type="text"
                        style={{ ...inputStyle, border: 'none', textAlign: 'center', width: '100%' }}
                        className="responsive-input"
                        value={item.keterangan}
                        onChange={(e) => handleAsesiChange(index, 'keterangan', e.target.value)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ margin: '20px', fontSize: '11px', fontWeight: 'bold', color: '#333' }}>
            <strong>tuliskan Kode dan Judul Unit Kompetensi yang dinyatakan BK bila mengses satu skema</strong>
          </div>

          {/* Section Feedback Detail */}
          <div style={{ margin: '20px 0' }}>
            <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
              1. Aspek Negatif dan Positif dalam Asesmen
            </div>
            <textarea
              style={{ ...textareaStyle, margin: '0 20px', fontSize: '11px' }}
              className="responsive-textarea"
              placeholder="Tulis jawaban disini"
              value={formData.aspekNegatifPositif}
              onChange={(e) => handleInputChange('aspekNegatifPositif', e.target.value)}
            />
          </div>

          <div style={{ margin: '20px 0' }}>
            <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
              2. Pencatatan Penolakan Hasil Asesmen
            </div>
            <textarea
              style={{ ...textareaStyle, margin: '0 20px', fontSize: '11px' }}
              className="responsive-textarea"
              placeholder="Tulis jawaban disini"
              value={formData.pencatatanPenolakan}
              onChange={(e) => handleInputChange('pencatatanPenolakan', e.target.value)}
            />
          </div>

          <div style={{ margin: '20px 0' }}>
            <div style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '10px', color: '#333' }}>
              3. Saran perbaikan: (Asesor/Personil Terkait)
            </div>
            <textarea
              style={{ ...textareaStyle, margin: '0 20px', fontSize: '11px' }}
              className="responsive-textarea"
              placeholder="Tulis jawaban disini"
              value={formData.saranPerbaikan}
              onChange={(e) => handleInputChange('saranPerbaikan', e.target.value)}
            />
          </div>

          {/* Section Tanda Tangan */}
          <div style={{ display: 'flex', gap: '30px', margin: '20px', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '11px', fontWeight: '500', color: '#555' }}>Nama Asesor</label>
                <input
                  type="text"
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '11px', boxSizing: 'border-box' }}
                  value={formData.namaAsesorTtd}
                  onChange={(e) => handleInputChange('namaAsesorTtd', e.target.value)}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontSize: '11px', fontWeight: '500', color: '#555' }}>No.Reg</label>
                <input
                  type="text"
                  style={{ width: '100%', padding: '8px 12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '11px', boxSizing: 'border-box' }}
                  value={formData.noReg}
                  onChange={(e) => handleInputChange('noReg', e.target.value)}
                />
              </div>
            </div>
            <div style={{ flex: 2 }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '11px', fontWeight: '500', color: '#555' }}>Catatan</label>
              <textarea
                style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '4px', fontSize: '11px', minHeight: '120px', resize: 'vertical', boxSizing: 'border-box' }}
                value={formData.catatan}
                onChange={(e) => handleInputChange('catatan', e.target.value)}
              />
            </div>
          </div>

          {/* Tombol Action */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '25px',
            margin: '30px 20px',
            paddingBottom: '30px'
          }}>
            <button
              onClick={handleApprove}
              className="responsive-button"
              style={{
                padding: '12px 35px',
                backgroundColor: 'white',
                color: '#333',
                border: '1px solid #ccc',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                minWidth: '120px',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f8f9fa';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
              }}
            >
              APPROVE
            </button>
            <button
              onClick={handleReject}
              className="responsive-button"
              style={{
                padding: '12px 35px',
                backgroundColor: 'white',
                color: '#333',
                border: '1px solid #ccc',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                minWidth: '120px',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#f8f9fa';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
              }}
            >
              REJECT
            </button>
          </div>
        </div>

        {/* Modal Validasi Form */}
        {showValidationModal && (
          <div style={modalOverlayStyle}>
            <div className="responsive-modal" style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '30px 40px',
              minWidth: '500px',
              maxWidth: '500px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
              position: 'relative',
              maxHeight: '80vh',
              overflowY: 'auto'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '25px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#ff9800',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  position: 'relative'
                }}>
                  <AlertTriangle size={24} color="white" strokeWidth={2} />
                </div>
                <div style={{
                  flex: 1,
                  textAlign: 'center',
                  paddingTop: '5px'
                }}>
                  <h3 className="responsive-modal" style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '4px',
                    lineHeight: '1.2'
                  }}>
                    Form Tidak Lengkap
                  </h3>
                  <h3 className="responsive-modal" style={{
                    fontSize: '18px',
                    fontWeight: '400',
                    color: '#666',
                    margin: '0',
                    lineHeight: '1.2'
                  }}>
                    Harap lengkapi field berikut:
                  </h3>
                </div>
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
                  onClick={() => setShowValidationModal(false)}
                >
                  ×
                </button>
              </div>
              <div style={{
                width: '100%',
                height: '1px',
                backgroundColor: '#e0e0e0',
                margin: '20px 0'
              }}></div>
              <div style={{
                maxHeight: '300px',
                overflowY: 'auto',
                marginBottom: '20px'
              }}>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0'
                }}>
                  {validationMessage.map((field, index) => (
                    <li key={index} style={{
                      fontSize: '14px',
                      color: '#333',
                      marginBottom: '8px',
                      padding: '8px 12px',
                      backgroundColor: '#fff3cd',
                      border: '1px solid #ffeaa7',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#ff9800',
                        borderRadius: '50%',
                        marginRight: '10px',
                        flexShrink: 0
                      }}></span>
                      {field}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  className="responsive-button"
                  style={{
                    padding: '10px 30px',
                    backgroundColor: '#ff9800',
                    color: 'white',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={handleValidationOk}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#f57c00'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#ff9800'}
                >
                  Oke, Saya Mengerti
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Notifikasi Approve */}
        {showModal && (
          <div style={modalOverlayStyle}>
            <div className="responsive-modal" style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '30px 40px',
              minWidth: '500px',
              maxWidth: '500px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
              position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '25px'
              }}>
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
                    <div style={{
                      position: 'absolute',
                      top: '-3px',
                      width: '16px',
                      height: '6px',
                      backgroundColor: '#4A90E2',
                      borderRadius: '3px 3px 0 0'
                    }}></div>
                    <Check size={18} color="#4A90E2" strokeWidth={4} />
                  </div>
                </div>
                <div style={{
                  flex: 1,
                  textAlign: 'center',
                  paddingTop: '5px'
                }}>
                  <h3 className="responsive-modal" style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '4px',
                    lineHeight: '1.2'
                  }}>
                    Anda menyetujui
                  </h3>
                  <h3 className="responsive-modal" style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#333',
                    margin: '0',
                    lineHeight: '1.2'
                  }}>
                    Laporan Asesmen ini
                  </h3>
                </div>
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
              <div style={{
                width: '100%',
                height: '1px',
                backgroundColor: '#e0e0e0',
                margin: '20px 0'
              }}></div>
              <p className="responsive-modal" style={{
                fontSize: '14px',
                color: '#666',
                marginBottom: '25px',
                lineHeight: '1.5',
                fontStyle: 'italic',
                textAlign: 'center'
              }}>
                Anda menyetujui dokumen laporan asesmen ini dengan penilaian yang sebenar-benarnya
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  className="responsive-button"
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
            <div className="responsive-modal" style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '30px 40px',
              minWidth: '500px',
              maxWidth: '500px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
              position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '25px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  position: 'relative'
                }}>
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
                <div style={{
                  flex: 1,
                  textAlign: 'center',
                  paddingTop: '5px'
                }}>
                  <h3 className="responsive-modal" style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#333',
                    marginBottom: '4px',
                    lineHeight: '1.2'
                  }}>
                    Anda menolak
                  </h3>
                  <h3 className="responsive-modal" style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#333',
                    margin: '0',
                    lineHeight: '1.2'
                  }}>
                    Laporan Asesmen ini
                  </h3>
                </div>
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
              <div style={{
                width: '100%',
                height: '1px',
                backgroundColor: '#e0e0e0',
                margin: '20px 0'
              }}></div>
              <p className="responsive-modal" style={{
                fontSize: '14px',
                color: '#666',
                marginBottom: '25px',
                lineHeight: '1.5',
                fontStyle: 'italic',
                textAlign: 'center'
              }}>
                Dokumen ini ditolak karena dokumen dan keaslian data tidak valid.
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  className="responsive-button"
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
    </>
  );
};

export default LaporanAsesmen;