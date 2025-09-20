import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Check } from 'lucide-react';

// Header styles from AK-02 RekamanAsesmen
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

const mainContentStyle = {
  padding: '15px 20px',
  display: 'flex',
  gap: '20px',
  marginBottom: '20px',
};

const leftColumnStyle = {
  flex: 1,
};

const rightColumnStyle = {
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const formBoxStyle = {
  border: '1px solid #dee2e6',
  borderRadius: '8px',
  padding: '15px',
  backgroundColor: '#f9f9f9',
};

const textareaStyle = {
  width: '100%',
  padding: '6px',
  border: '1px solid #ccc',
  borderRadius: '3px',
  fontSize: '10px',
  minHeight: '60px',
  resize: 'vertical',
  fontFamily: 'inherit',
};

const wawancaraTableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '10px',
  margin: '20px',
};

const wawancaraThStyle = {
  backgroundColor: '#e9ecef',
  padding: '8px',
  border: '1px solid #dee2e6',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '10px',
};

const wawancaraTdStyle = {
  padding: '6px 8px',
  border: '1px solid #dee2e6',
  fontSize: '10px',
  verticalAlign: 'top',
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
  backgroundColor: '#ff9800',
  color: 'white',
};

const rejectButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#f44336',
  color: 'white',
};

// Modal styles from AK-02
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

const Wawancara = () => {
  const { nis } = useParams();
  const navigate = useNavigate();

  // State untuk form data
  const [formData, setFormData] = useState({
    judulUnit: '',
    kodeUnit: '',
    tuk: '',
    namaAsesor: '',
    namaAsesi: '',
    tanggal: '',
    waktu: '',
    unitKompetensi: 'Memproses Reservasi',
    kodeUnitKompetensi: 'USSH0H00C.001.2',
    buktiKompetensi: ['', '', ''],
    namaAsesiForm: '',
    namaAsesorForm: '',
    tandaTanganAsesi: null,
    pertanyaanWawancara: [
      { pertanyaan: 'Sesuai dengan bukti :', rekomendasi: false, reject: false },
      { pertanyaan: 'Sesuai dengan bukti :', rekomendasi: false, reject: false },
      { pertanyaan: 'Sesuai dengan bukti :', rekomendasi: false, reject: false }
    ]
  });

  const [showModal, setShowModal] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBuktiChange = (index, value) => {
    const newBukti = [...formData.buktiKompetensi];
    newBukti[index] = value;
    setFormData(prev => ({
      ...prev,
      buktiKompetensi: newBukti
    }));
  };

  const handlePertanyaanChange = (index, field, value) => {
    const newPertanyaan = [...formData.pertanyaanWawancara];
    if (field === 'rekomendasi' || field === 'reject') {
      // Reset the other option when one is selected
      newPertanyaan[index] = {
        ...newPertanyaan[index],
        rekomendasi: field === 'rekomendasi' ? value : false,
        reject: field === 'reject' ? value : false
      };
    } else {
      newPertanyaan[index] = {
        ...newPertanyaan[index],
        [field]: value
      };
    }
    setFormData(prev => ({
      ...prev,
      pertanyaanWawancara: newPertanyaan
    }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'application/pdf' || file.type === 'image/png')) {
      setFormData(prev => ({
        ...prev,
        tandaTanganAsesi: file
      }));
    } else {
      alert('Hanya file PDF atau PNG yang diperbolehkan');
    }
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
      navigate('/dashboard-asesor/rekaman-asesmen/' + nis);
    }, 100);
  };

  const handleRejectModalOke = () => {
    setShowRejectModal(false);
    setTimeout(() => {
      navigate('/dashboard-asesor/approved-unapproved/' + nis);
    }, 100);
  };

  return (
    <div style={pageContainerStyle}>
      {/* Header Section matching AK-02 design */}
      <div style={headerSectionStyle}>
        <div style={logoContainerStyle}>
          <h1 style={logoTextStyle}>
            MyLSP
          </h1>
        </div>
      </div>

      {/* Name Box */}
      <div style={nameBoxStyle}>
        <div style={nameStyle}>AFDHAL EZHAR RAHMA PANGESTU</div>
      </div>

      {/* Konten Utama */}
      <div style={contentContainerStyle}>
        {/* Header Tabel */}
        <div style={tableHeaderStyle}>
          Skema Sertifikasi
        </div>

        {/* Tabel Skema Sertifikasi */}
        <table style={tableStyle}>
          <tbody>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, width: '150px', backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
                Skema Sertifikasi
                <br />
                <span style={{ fontWeight: 'normal', fontSize: '10px' }}>(KKNI/OKUPASI/KLASTER)</span>
              </td>
              <td style={{ ...tableCellStyle, width: '80px', backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
                Judul Unit
              </td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }}>
                <input
                  style={inputStyle}
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
                  type="text"
                  value={formData.namaAsesor}
                  onChange={(e) => handleInputChange('namaAsesor', e.target.value)}
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
                Nama Asesi
              </td>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa' }}></td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }}>
                <input
                  style={inputStyle}
                  type="text"
                  value={formData.namaAsesi}
                  onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
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
                  type="date"
                  value={formData.tanggal}
                  onChange={(e) => handleInputChange('tanggal', e.target.value)}
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: '11px' }}>
                Waktu
              </td>
              <td style={{ ...tableCellStyle, backgroundColor: '#f8f9fa' }}></td>
              <td style={{ ...inputCellStyle, backgroundColor: 'white' }}>
                <input
                  style={inputStyle}
                  type="time"
                  value={formData.waktu}
                  onChange={(e) => handleInputChange('waktu', e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Unit Kompetensi Section */}
        <div style={sectionStyle}>
          <div style={sectionHeaderStyle}>Unit Kompetensi 1</div>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td style={{...tableCellStyle, fontWeight: 'bold', width: '80px', backgroundColor: '#f8f9fa'}}>Judul Unit</td>
                <td style={tableCellStyle}>{formData.unitKompetensi}</td>
              </tr>
              <tr>
                <td style={{...tableCellStyle, fontWeight: 'bold', backgroundColor: '#f8f9fa'}}>Kode Unit</td>
                <td style={tableCellStyle}>{formData.kodeUnitKompetensi}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section dengan Elemen */}
        <div style={sectionStyle}>
          <div style={sectionHeaderStyle}>
            Setiap pertanyaan harus terkait dengan Elemen
          </div>
          <div style={{padding: '15px'}}>
            <p style={{fontSize: '10px', marginBottom: '15px', fontStyle: 'italic'}}>
              Tuliskan bukti-bukti yang terdapat pada Ceklis Verifikasi Portofolio 
              yang memerlukan wawancara
            </p>
            
            <div style={mainContentStyle}>
              {/* Left Column - Bukti Kompetensi */}
              <div style={leftColumnStyle}>
                <h4 style={{fontSize: '12px', marginBottom: '10px', fontWeight: 'bold'}}>
                  Bukti-bukti Kompetensi
                </h4>
                {formData.buktiKompetensi.map((bukti, index) => (
                  <div key={index} style={{marginBottom: '12px'}}>
                    <div style={{fontSize: '10px', fontWeight: 'bold', marginBottom: '3px'}}>
                      {index + 1}.
                    </div>
                    <textarea
                      style={textareaStyle}
                      value={bukti}
                      onChange={(e) => handleBuktiChange(index, e.target.value)}
                      placeholder={`Masukkan bukti kompetensi ${index + 1}`}  // Benar - dengan backticks
                    />
                  </div>
                ))}
              </div>
              
              {/* Right Column - Form Fields */}
              <div style={rightColumnStyle}>
                <div style={formBoxStyle}>
                  <h4 style={{fontSize: '12px', textAlign: 'center', marginBottom: '8px'}}>
                    Nama Asesi
                  </h4>
                  <input 
                    type="text" 
                    style={{...inputStyle, border: '1px solid #ccc', padding: '6px', fontSize: '10px'}}
                    value={formData.namaAsesiForm}
                    onChange={(e) => handleInputChange('namaAsesiForm', e.target.value)}
                  />
                </div>
                
                <div style={formBoxStyle}>
                  <h4 style={{fontSize: '12px', textAlign: 'center', marginBottom: '8px'}}>
                    Nama Asesor
                  </h4>
                  <input 
                    type="text" 
                    style={{...inputStyle, border: '1px solid #ccc', padding: '6px', fontSize: '10px'}}
                    value={formData.namaAsesorForm}
                    onChange={(e) => handleInputChange('namaAsesorForm', e.target.value)}
                  />
                </div>
                
                 <div style={formBoxStyle}>
                   <h4 style={{fontSize: '12px', textAlign: 'center', marginBottom: '8px'}}>
                     Tanda Tangan Asesi
                   </h4>
                   <div style={{
                     border: '1px solid #ddd',
                     borderRadius: '4px',
                     padding: '10px',
                     minHeight: '60px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     backgroundColor: '#fafafa',
                     flexDirection: 'column',
                     gap: '8px'
                   }}>
                     {formData.tandaTanganAsesi ? (
                       <div style={{
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                         gap: '8px'
                       }}>
                         <span style={{fontSize: '10px', color: '#333'}}>
                           {formData.tandaTanganAsesi.name}
                         </span>
                         <button
                           type="button"
                           onClick={() => setFormData(prev => ({ ...prev, tandaTanganAsesi: null }))}
                           style={{
                             padding: '4px 8px',
                             backgroundColor: '#dc3545',
                             color: 'white',
                             border: 'none',
                             borderRadius: '3px',
                             fontSize: '9px',
                             cursor: 'pointer'
                           }}
                         >
                           Hapus
                         </button>
                       </div>
                     ) : (
                       <label style={{
                         cursor: 'pointer',
                         padding: '8px 16px',
                         backgroundColor: '#007bff',
                         color: 'white',
                         borderRadius: '4px',
                         fontSize: '10px',
                         fontWeight: 'bold',
                         textAlign: 'center'
                       }}>
                         <input
                           type="file"
                           accept=".pdf,.png"
                           onChange={handleFileUpload}
                           style={{ display: 'none' }}
                         />
                         Upload PDF/PNG
                       </label>
                     )}
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Daftar Pertanyaan Wawancara */}
        <table style={wawancaraTableStyle}>
          <thead>
            <tr>
              <td style={{...wawancaraThStyle, width: '150px'}}>Daftar Pertanyaan Wawancara</td>
              <td style={{...wawancaraThStyle, width: '80px'}}>Rekomendasi</td>
            </tr>
          </thead>
          <tbody>
            {formData.pertanyaanWawancara.map((item, index) => (
              <tr key={index}>
                <td style={wawancaraTdStyle}>
                  <div style={{fontSize: '10px', fontWeight: 'bold', marginBottom: '3px'}}>
                    {index + 1}. {item.pertanyaan}
                  </div>
                  <input 
                    type="text" 
                    style={{...inputStyle, border: '1px solid #ccc', padding: '3px', fontSize: '9px'}}
                    value={item.pertanyaan}
                    onChange={(e) => handlePertanyaanChange(index, 'pertanyaan', e.target.value)}
                  />
                </td>
                <td style={wawancaraTdStyle}>
                  <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <label style={{fontSize: '9px', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                      <input 
                        type="checkbox" 
                        checked={item.rekomendasi}
                        onChange={(e) => handlePertanyaanChange(index, 'rekomendasi', e.target.checked)}
                        style={{marginRight: '2px', transform: 'scale(0.8)'}}
                      />
                      ✓
                    </label>
                    <label style={{fontSize: '9px', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                      <input 
                        type="checkbox" 
                        checked={item.reject}
                        onChange={(e) => handlePertanyaanChange(index, 'reject', e.target.checked)}
                        style={{marginRight: '2px', transform: 'scale(0.8)'}}
                      />
                      ✗
                    </label>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Action Buttons */}
        <div style={buttonContainerStyle}>
          <button 
            onClick={handleApprove}
            style={approveButtonStyle}
          >
            Approve
          </button>
          <button 
            onClick={handleReject}
            style={rejectButtonStyle}
          >
            Reject
          </button>
        </div>
      </div>

      {/* Modal Notifikasi Approve - dari AK-02 */}
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
                  wawancara Asesmen ini
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
              Anda menyetujui dokumen wawancara asesi ini dengan penilaian yang sebenar-benarnya
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

      {/* Modal Notifikasi Reject - dari AK-02 */}
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
                  wawancara Asesmen ini
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

export default Wawancara;