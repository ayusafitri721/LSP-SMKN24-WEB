import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const pageContainerStyle = {
  backgroundColor: 'white',
  fontFamily: 'Arial, sans-serif',
  padding: '15px',
  minHeight: '100vh',
};

// Header section matching IA01 design - ENLARGED
const headerSectionStyle = {
  backgroundImage: "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: '0 0 40px 40px',
  overflow: 'hidden',
  marginBottom: '0',
};

// Logo container matching IA01 - ENLARGED
const logoContainerStyle = {
  height: '200px', // Increased from 180px
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px', // Increased from 15px
  marginBottom: '20px', // Increased from 15px
};

// Logo text matching IA01 - ENLARGED
const logoTextStyle = {
  color: 'white',
  fontSize: '56px', // Increased from 48px
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

const instructionBoxStyle = {
  backgroundColor: '#F4D5A7',
  borderRadius: '8px',
  padding: '20px',
  marginBottom: '25px',
  height: 'fit-content', // Changed to fit-content for better alignment
};

const instructionTitleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '15px',
  color: '#333',
};

const instructionListStyle = {
  listStyle: 'disc',
  paddingLeft: '20px',
  margin: 0,
};

const instructionItemStyle = {
  fontSize: '12px',
  color: '#333',
  marginBottom: '10px',
  lineHeight: '1.4',
};

const instructionSectionStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 300px',
  gap: '30px',
  alignItems: 'flex-start', // Changed from 'stretch' to 'flex-start' for better alignment
  marginBottom: '25px',
};

const mainContentStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '30px',
  alignItems: 'flex-start',
};

const leftContentStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const rightContentStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const elementTitleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '15px',
  color: '#333',
};

const criteriaListStyle = {
  listStyle: 'disc',
  paddingLeft: '20px',
  marginBottom: '15px',
};

const criteriaItemStyle = {
  fontSize: '12px',
  color: '#333',
  marginBottom: '15px',
  lineHeight: '1.4',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  width: '100%',
};

const checkboxGroupStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  alignItems: 'center',
  minWidth: '120px',
};

const checkboxLabelStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  fontSize: '12px',
  color: '#333',
  cursor: 'pointer',
};

const checkboxStyle = {
  width: '16px',
  height: '16px',
  cursor: 'pointer',
};

const kelompokPekerjaanStyle = {
  border: '2px solid #333',
  borderRadius: '8px',
  padding: '20px',
  height: 'fit-content', // Changed from '100%' to 'fit-content' to align bottom with orange box
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
};

const kelompokHeaderStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  marginBottom: '15px',
  color: '#333',
};

const kelompokListStyle = {
  listStyle: 'decimal',
  paddingLeft: '20px',
  margin: 0,
};

const kelompokItemStyle = {
  fontSize: '12px',
  color: '#333',
  marginBottom: '5px',
  lineHeight: '1.3',
};

const pertanyaanSectionStyle = {
  border: '2px solid #333',
  borderRadius: '8px',
  padding: '20px',
  backgroundColor: 'white',
  height: 'fit-content', // Added to match height with left side
};

const pertanyaanItemStyle = {
  marginBottom: '2px',
  paddingBottom: '2px',
  borderBottom: '1px solid #eee',
};

const pertanyaanTextStyle = {
  fontSize: '12px',
  color: '#333',
  marginBottom: '10px',
  lineHeight: '1.4',
};

const tanggapanContainerStyle = {
  marginTop: '10px',
};

const tanggapanLabelStyle = {
  fontSize: '12px',
  color: '#333',
  marginBottom: '3px',
  fontWeight: 'bold',
};

// Button container styles
const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  marginTop: '30px',
  width: '100%',
};

const approveButtonStyle = {
  backgroundColor: 'white',
  color: '#333',
  border: '1px solid #ccc',
  borderRadius: '25px',
  padding: '12px 30px',
  fontSize: '14px',
  fontWeight: '500',
  cursor: 'pointer',
  minWidth: '120px',
  transition: 'all 0.2s ease',
};

// Modal styles - positioned at top, more rectangular, matching the image
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  zIndex: 1000,
  paddingTop: '100px',
};

const modalContentStyle = {
  backgroundColor: '#f5f5f5',
  borderRadius: '15px',
  padding: '25px 35px',
  maxWidth: '520px',
  width: '90%',
  boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  border: '1px solid #e0e0e0',
};

const modalIconStyle = {
  width: '60px',
  height: '60px',
  backgroundColor: '#4A90E2',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '30px',
  color: 'white',
  flexShrink: 0,
  fontWeight: 'bold',
};

const modalTextContainerStyle = {
  textAlign: 'left',
  flex: 1,
};

const modalTitleStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '6px',
  lineHeight: '1.2',
};

const modalDescriptionStyle = {
  fontSize: '13px',
  color: '#666',
  marginBottom: '0',
  lineHeight: '1.3',
  fontStyle: 'italic',
};

const modalButtonStyle = {
  backgroundColor: '#4A90E2',
  color: 'white',
  border: 'none',
  borderRadius: '20px',
  padding: '8px 25px',
  fontSize: '14px',
  fontWeight: '600',
  cursor: 'pointer',
  minWidth: '70px',
  transition: 'all 0.2s ease',
  flexShrink: 0,
};

const CeklisObservasi = () => {
  const navigate = useNavigate(); // Hook untuk navigasi
  
  const [formData, setFormData] = useState({
    judulUnit: '',
    nomorUnit: '',
    kodeUnit: '',
    judulUnitKompetensi: '',
  });
  
  const [checkedItems, setCheckedItems] = useState({});
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showRejectionModal, setShowRejectionModal] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (item, value) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: value
    }));
  };

  const handleApprove = () => {
    setShowApprovalModal(true);
  };

  const handleReject = () => {
    setShowRejectionModal(true);
  };

  const handleModalOke = () => {
    // Close modal
    setShowApprovalModal(false);
    
    // Navigate to LembarJawaban dengan NIS 0893923923
    navigate('/dashboard-asesor/lembar-jawaban/0893923923');
  };

  const handleRejectionOke = () => {
    // Close modal
    setShowRejectionModal(false);
    
    // Navigate to approved-unapproved dengan ID 08939239239
    navigate('/dashboard-asesor/approved-unapproved/08939239239');
  };

  return (
    <div style={pageContainerStyle}>
      {/* Header Section matching IA01 design - ENLARGED */}
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
            <div style={titleStyle}>FR.IA.01.CL</div>
            <div style={subtitleStyle}>CEKLIS OBSERVASI AKTIVITAS DI TEMPAT KERJA ATAU TEMPAT KERJA SIMULASI</div>
          </div>
        </div>

        {/* Skema Sertifikasi */}
        <table style={{width: '100%', marginBottom: '15px', fontSize: '12px'}}>
          <tbody>
            <tr>
              <td style={{
                padding: '10px',
                border: '1px solid #ddd',
                backgroundColor: '#f8f9fa',
                fontWeight: 'bold',
                width: '150px',
                textAlign: 'center',
                verticalAlign: 'middle'
              }}>
                Skema Sertifikasi
              </td>
              <td style={{
                padding: '10px',
                border: '1px solid #ddd',
                backgroundColor: 'white'
              }}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <span style={{minWidth: '80px', fontSize: '12px', fontWeight: 'bold'}}>Judul Unit</span>
                    <span style={{margin: '0 8px'}}>:</span>
                    <input
                      type="text"
                      style={{
                        flex: 1,
                        padding: '4px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                      value={formData.judulUnit}
                      onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                      placeholder="Masukkan judul unit"
                    />
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <span style={{minWidth: '80px', fontSize: '12px', fontWeight: 'bold'}}>Nomor Unit</span>
                    <span style={{margin: '0 8px'}}>:</span>
                    <input
                      type="text"
                      style={{
                        flex: 1,
                        padding: '4px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
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

        <div style={instructionSectionStyle}>
          <div style={instructionBoxStyle}>
            <div style={instructionTitleStyle}>PADUAN ASESMEN MANDIRI</div>
            <div style={instructionTitleStyle}>Instruksi:</div>
            <ul style={instructionListStyle}>
              <li style={instructionItemStyle}>Lengkapi nama unit kompetensi, elemen, dan kriteria/unjuk kerja sesuai/kolom dalam tabel.</li>
              <li style={instructionItemStyle}>Isi kolom standar industri atau tempat kerja</li>
              <li style={instructionItemStyle}>Beri tanda centang (O) pada kolom "YA" jika Anda yakin asesi dapat melakukan/mendemonstrasikan tugas sesuai KUK, atau centang(O) pada kolom "Tidak" bila sebaliknya.</li>
              <li style={instructionItemStyle}>Penilaian lanjut bila hasil belum dapat disimpulkan, untuk itu gunakan/metode lain</li>
              <li style={instructionItemStyle}>sehingga keputusan dapat/dibuat.</li>
              <li style={instructionItemStyle}>isi kolom KUK sesuai dengan Unit Kompetensi/SKKNI</li>
            </ul>
          </div>

          <div style={kelompokPekerjaanStyle}>
            <div style={kelompokHeaderStyle}>Kelompok Pekerjaan 1</div>
            <ol style={kelompokListStyle}>
              <li style={kelompokItemStyle}>1.J620100.004.02 Menggunakan Struktur Data</li>
              <li style={kelompokItemStyle}>2. dst</li>
              <li style={kelompokItemStyle}>3. dst</li>
              <li style={kelompokItemStyle}>4. dst</li>
            </ol>
          </div>
        </div>

        {/* Unit Kompetensi Table */}
        <table style={{width: '100%', marginBottom: '20px', fontSize: '12px', borderCollapse: 'collapse'}}>
          <tbody>
            <tr>
              <td style={{
                padding: '10px',
                border: '1px solid #ddd',
                backgroundColor: '#f8f9fa',
                fontWeight: 'bold',
                width: '150px',
                textAlign: 'center',
                verticalAlign: 'middle'
              }}>
                Unit Kompetensi 1
              </td>
              <td style={{
                padding: '10px',
                border: '1px solid #ddd',
                backgroundColor: 'white'
              }}>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <span style={{minWidth: '80px', fontSize: '12px', fontWeight: 'bold'}}>Kode Unit</span>
                    <span style={{margin: '0 8px'}}>:</span>
                    <input
                      type="text"
                      style={{
                        flex: 1,
                        padding: '4px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                      value={formData.kodeUnit}
                      onChange={(e) => handleInputChange('kodeUnit', e.target.value)}
                      placeholder="Masukkan kode unit"
                    />
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <span style={{minWidth: '80px', fontSize: '12px', fontWeight: 'bold'}}>Judul Unit</span>
                    <span style={{margin: '0 8px'}}>:</span>
                    <input
                      type="text"
                      style={{
                        flex: 1,
                        padding: '4px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                      value={formData.judulUnitKompetensi}
                      onChange={(e) => handleInputChange('judulUnitKompetensi', e.target.value)}
                      placeholder="Masukkan judul unit kompetensi"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div style={mainContentStyle}>
          <div style={leftContentStyle}>
            {/* Box Elemen 1 - Made compact */}
            <div style={{
              border: '2px solid #333',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '10px'
            }}>
              <div style={elementTitleStyle}>Elemen 1: Mengidentifikasi konsep data dan struktur data</div>
              <div style={elementTitleStyle}>Kriteria Untuk Kerja</div>
              
              <div style={criteriaListStyle}>
                <div style={criteriaItemStyle}>
                  <span>• Mengidentifikasi konsep data dan struktur data sesuai dengan konteks</span>
                  <div style={checkboxGroupStyle}>
                    <label style={checkboxLabelStyle}>
                      <input 
                        type="checkbox" 
                        style={checkboxStyle}
                        checked={checkedItems['criteria1_ya'] || false}
                        onChange={(e) => handleCheckboxChange('criteria1_ya', e.target.checked)}
                      />
                      Ya
                    </label>
                    <label style={checkboxLabelStyle}>
                      <input 
                        type="checkbox" 
                        style={checkboxStyle}
                        checked={checkedItems['criteria1_tidak'] || false}
                        onChange={(e) => handleCheckboxChange('criteria1_tidak', e.target.checked)}
                      />
                      Tidak
                    </label>
                  </div>
                </div>
                <div style={criteriaItemStyle}>
                  <span>• Membandingkan alternatif struktur data kelebihan dan kekurangannya untuk konteks permasalahan yang diselesaikan</span>
                  <div style={checkboxGroupStyle}>
                    <label style={checkboxLabelStyle}>
                      <input 
                        type="checkbox" 
                        style={checkboxStyle}
                        checked={checkedItems['criteria2_ya'] || false}
                        onChange={(e) => handleCheckboxChange('criteria2_ya', e.target.checked)}
                      />
                      Ya
                    </label>
                    <label style={checkboxLabelStyle}>
                      <input 
                        type="checkbox" 
                        style={checkboxStyle}
                        checked={checkedItems['criteria2_tidak'] || false}
                        onChange={(e) => handleCheckboxChange('criteria2_tidak', e.target.checked)}
                      />
                      Tidak
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Field Penilaian Lanjut - tanpa box, langsung di bawah */}
            <textarea 
              placeholder="Penilaian Lanjut"
              style={{
                width: '100%',
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '6px',
                fontSize: '10px',
                minHeight: '30px',
                resize: 'vertical',
                fontFamily: 'Arial, sans-serif',
                outline: 'none',
                backgroundColor: '#e9ecef',
                color: '#6c757d'
              }}
            ></textarea>
          </div>

          <div style={rightContentStyle}>
            <div style={pertanyaanSectionStyle}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px'}}>
                <div style={{fontSize: '12px', fontWeight: 'bold', color: '#333'}}>
                  Pertanyaan
                </div>
                <div style={{fontSize: '12px', fontWeight: 'bold', color: '#333', textAlign: 'center'}}>
                  Pencapaian
                </div>
              </div>
              
              <div style={pertanyaanItemStyle}>
                <div style={{display: 'flex', gap: '20px', alignItems: 'flex-start'}}>
                  <div style={{flex: 1}}>
                    <div style={pertanyaanTextStyle}>
                      1. Anda seorang operator yunior busana, sebelum memulai kegiatan menjahit blus, anda perlu memperhatikan SOP kesehatan dan keselamatan kerja, apa yang akan anda lakukan supaya tidak terjadi kecelakaan kerja pada waktu menjahit blus? (JRES)
                    </div>
                  </div>
                  <div style={{minWidth: '120px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px'}}>
                    <div style={{display: 'flex', gap: '30px', alignItems: 'center', width: '100%'}}>
                      <label style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#333', cursor: 'pointer'}}>
                        <input 
                          type="checkbox" 
                          style={{width: '16px', height: '16px', cursor: 'pointer'}}
                          checked={checkedItems['pencapaian_ya'] || false}
                          onChange={(e) => handleCheckboxChange('pencapaian_ya', e.target.checked)}
                        />
                        Ya
                      </label>
                      <label style={{display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#333', cursor: 'pointer'}}>
                        <input 
                          type="checkbox" 
                          style={{width: '16px', height: '16px', cursor: 'pointer'}}
                          checked={checkedItems['pencapaian_tidak'] || false}
                          onChange={(e) => handleCheckboxChange('pencapaian_tidak', e.target.checked)}
                        />
                        Tidak
                      </label>
                    </div>
                    
                    <div style={{display: 'flex', gap: '30px', width: '100%'}}>
                      <div style={{width: '16px', display: 'flex', justifyContent: 'center'}}>
                        <input 
                          type="checkbox" 
                          style={{width: '16px', height: '16px', cursor: 'pointer'}}
                          checked={checkedItems['r'] || false}
                          onChange={(e) => handleCheckboxChange('r', e.target.checked)}
                        />
                      </div>
                      <div style={{fontSize: '12px', color: '#333', marginLeft: '25px'}}>
                        R
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tanggapan di bawah */}
                <div style={tanggapanContainerStyle}>
                  <div style={tanggapanLabelStyle}>Tanggapan:</div>
                  <textarea 
                    style={{
                      width: '100%',
                      border: '1px solid #ccc',
                      borderRadius: '4px',
                      padding: '6px',
                      fontSize: '10px',
                      minHeight: '30px',
                      resize: 'vertical',
                      fontFamily: 'Arial, sans-serif',
                      outline: 'none',
                      backgroundColor: '#e9ecef'
                    }}
                    placeholder=""
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Approve/Reject Buttons */}
        <div style={buttonContainerStyle}>
          <button 
            style={approveButtonStyle}
            onClick={handleApprove}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
          >
            APPROVE
          </button>
          <button 
            style={approveButtonStyle}
            onClick={handleReject}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
          >
            REJECT
          </button>
        </div>
        
        {/* Approval Modal */}
        {showApprovalModal && (
          <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
              <div style={modalIconStyle}>
                ✓
              </div>
              <div style={modalTextContainerStyle}>
                <h2 style={modalTitleStyle}>
                  Anda menyetujui<br />
                  rekaman Asesmen ini
                </h2>
                <p style={modalDescriptionStyle}>
                  Anda menyetujui dokumen sertifikasi asesi ini dengan penilaian yang sebenar-benarnya
                </p>
              </div>
              <button 
                style={modalButtonStyle}
                onClick={handleModalOke}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#357ABD'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4A90E2'}
              >
                Oke
              </button>
            </div>
          </div>
        )}

        {/* Rejection Modal */}
        {showRejectionModal && (
          <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
              <div style={{
                ...modalIconStyle,
                backgroundColor: '#FF8C00'
              }}>
                ✗
              </div>
              <div style={modalTextContainerStyle}>
                <h2 style={modalTitleStyle}>
                  Anda menolak<br />
                  rekaman Asesmen ini
                </h2>
                <p style={modalDescriptionStyle}>
                  Dokumen ini ditolak karena dokumen dan keaslian data tidak valid.
                </p>
              </div>
              <button 
                style={{
                  ...modalButtonStyle,
                  backgroundColor: '#FF8C00'
                }}
                onClick={handleRejectionOke}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#E67A00'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#FF8C00'}
              >
                Oke
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CeklisObservasi;