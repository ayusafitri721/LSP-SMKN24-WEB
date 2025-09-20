import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';

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

// Modal styles - using the better design from the second code
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
  padding: '10px',
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
    <div style={pageContainerStyle} className="page-container">
      {/* RESPONSIVE CSS */}
      <style>
        {`
          /* RESPONSIVE STYLES */
          @media (max-width: 768px) {
            .page-container {
              padding: 10px !important;
            }
            
            .content-card {
              padding: 20px !important;
            }
            
            .logo-text {
              font-size: 36px !important;
            }
            
            .logo-container {
              height: 150px !important;
              margin-top: 15px !important;
              margin-bottom: 15px !important;
            }
            
            .header-section2 {
              flex-direction: column !important;
              text-align: center !important;
              align-items: center !important;
              gap: 15px !important;
            }
            
            .logo-container2 {
              align-self: center !important;
            }
            
            .title-text {
              font-size: 14px !important;
            }
            
            .subtitle-text {
              font-size: 13px !important;
            }
            
            .data-table {
              font-size: 11px !important;
            }
            
            .data-table td {
              padding: 8px !important;
            }
            
            .input-field {
              font-size: 11px !important;
              padding: 3px 6px !important;
              min-width: 0 !important;
            }
            
            .table-input-row {
              flex-wrap: wrap !important;
              gap: 5px !important;
            }
            
            .table-input-row span {
              min-width: auto !important;
            }
            
            .table-input-row input {
              min-width: 150px !important;
              flex: 1 !important;
            }
            
            .instruction-section {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            
            .instruction-box {
              padding: 15px !important;
              margin-bottom: 15px !important;
            }
            
            .instruction-title {
              font-size: 13px !important;
            }
            
            .instruction-item {
              font-size: 11px !important;
            }
            
            .kelompok-pekerjaan {
              padding: 15px !important;
            }
            
            .kelompok-header {
              font-size: 13px !important;
            }
            
            .kelompok-item {
              font-size: 11px !important;
            }
            
            .main-content {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            
            .element-box {
              padding: 15px !important;
              margin-bottom: 15px !important;
            }
            
            .element-title {
              font-size: 13px !important;
            }
            
            .criteria-item {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 10px !important;
            }
            
            .checkbox-group {
              gap: 15px !important;
              min-width: auto !important;
            }
            
            .checkbox-label {
              font-size: 11px !important;
            }
            
            .pertanyaan-section {
              padding: 15px !important;
            }
            
            .pertanyaan-header {
              flex-direction: column !important;
              text-align: center !important;
              gap: 10px !important;
            }
            
            .pertanyaan-item-content {
              flex-direction: column !important;
              gap: 15px !important;
            }
            
            .pencapaian-controls {
              align-self: flex-start !important;
              width: 100% !important;
            }
            
            .pencapaian-checkboxes {
              gap: 20px !important;
            }
            
            .pertanyaan-text {
              font-size: 11px !important;
            }
            
            .tanggapan-label {
              font-size: 11px !important;
            }
            
            .button-container {
              flex-direction: column !important;
              gap: 10px !important;
              margin-top: 20px !important;
            }
            
            .approve-button {
              width: 100% !important;
              min-width: auto !important;
              padding: 12px 20px !important;
              font-size: 13px !important;
            }
            
            .modal-container {
              min-width: 90% !important;
              margin: 10px !important;
              padding: 20px 25px !important;
            }
            
            .modal-header {
              margin-bottom: 20px !important;
            }
            
            .modal-icon {
              width: 40px !important;
              height: 40px !important;
            }
            
            .modal-title {
              font-size: 18px !important;
              padding-top: 2px !important;
            }
            
            .modal-description {
              font-size: 13px !important;
              margin-bottom: 20px !important;
            }
            
            .textarea-field {
              font-size: 10px !important;
              min-height: 25px !important;
              padding: 5px !important;
            }
          }
          
          @media (max-width: 480px) {
            .logo-text {
              font-size: 28px !important;
            }
            
            .logo-container {
              height: 120px !important;
            }
            
            .content-card {
              padding: 15px !important;
            }
            
            .instruction-box {
              padding: 12px !important;
            }
            
            .kelompok-pekerjaan {
              padding: 12px !important;
            }
            
            .element-box {
              padding: 12px !important;
            }
            
            .pertanyaan-section {
              padding: 12px !important;
            }
            
            .data-table {
              font-size: 10px !important;
            }
            
            .data-table td {
              padding: 6px !important;
            }
            
            .input-field {
              font-size: 10px !important;
              padding: 2px 4px !important;
            }
            
            .table-input-row input {
              min-width: 120px !important;
            }
            
            .instruction-title {
              font-size: 12px !important;
            }
            
            .instruction-item {
              font-size: 10px !important;
            }
            
            .element-title {
              font-size: 12px !important;
            }
            
            .criteria-item {
              font-size: 10px !important;
            }
            
            .pertanyaan-text {
              font-size: 10px !important;
            }
            
            .approve-button {
              font-size: 12px !important;
              padding: 10px 15px !important;
            }
            
            .modal-container {
              padding: 15px 20px !important;
            }
            
            .modal-title {
              font-size: 16px !important;
            }
            
            .modal-description {
              font-size: 12px !important;
            }
          }
        `}
      </style>

      {/* Header Section matching IA01 design - ENLARGED */}
      <div style={headerSectionStyle}>
        <div style={logoContainerStyle} className="logo-container">
          <h1 style={logoTextStyle} className="logo-text">
            MyLSP
          </h1>
        </div>
      </div>

      {/* Content Card */}
      <div style={contentCardStyle} className="content-card">
        <div style={headerSectionStyle2} className="header-section2">
          <div style={logoContainer2Style} className="logo-container2">
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
            <div style={titleStyle} className="title-text">FR.IA.01.CL</div>
            <div style={subtitleStyle} className="subtitle-text">CEKLIS OBSERVASI AKTIVITAS DI TEMPAT KERJA ATAU TEMPAT KERJA SIMULASI</div>
          </div>
        </div>

        {/* Skema Sertifikasi */}
        <table style={{width: '100%', marginBottom: '15px', fontSize: '12px'}} className="data-table">
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
                  <div style={{display: 'flex', alignItems: 'center'}} className="table-input-row">
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
                      className="input-field"
                      value={formData.judulUnit}
                      onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                      placeholder="Masukkan judul unit"
                    />
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}} className="table-input-row">
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
                      className="input-field"
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

        <div style={instructionSectionStyle} className="instruction-section">
          <div style={instructionBoxStyle} className="instruction-box">
            <div style={instructionTitleStyle} className="instruction-title">PADUAN ASESMEN MANDIRI</div>
            <div style={instructionTitleStyle} className="instruction-title">Instruksi:</div>
            <ul style={instructionListStyle}>
              <li style={instructionItemStyle} className="instruction-item">Lengkapi nama unit kompetensi, elemen, dan kriteria/unjuk kerja sesuai/kolom dalam tabel.</li>
              <li style={instructionItemStyle} className="instruction-item">Isi kolom standar industri atau tempat kerja</li>
              <li style={instructionItemStyle} className="instruction-item">Beri tanda centang (O) pada kolom "YA" jika Anda yakin asesi dapat melakukan/mendemonstrasikan tugas sesuai KUK, atau centang(O) pada kolom "Tidak" bila sebaliknya.</li>
              <li style={instructionItemStyle} className="instruction-item">Penilaian lanjut bila hasil belum dapat disimpulkan, untuk itu gunakan/metode lain</li>
              <li style={instructionItemStyle} className="instruction-item">sehingga keputusan dapat/dibuat.</li>
              <li style={instructionItemStyle} className="instruction-item">isi kolom KUK sesuai dengan Unit Kompetensi/SKKNI</li>
            </ul>
          </div>

          <div style={kelompokPekerjaanStyle} className="kelompok-pekerjaan">
            <div style={kelompokHeaderStyle} className="kelompok-header">Kelompok Pekerjaan 1</div>
            <ol style={kelompokListStyle}>
              <li style={kelompokItemStyle} className="kelompok-item">1.J620100.004.02 Menggunakan Struktur Data</li>
              <li style={kelompokItemStyle} className="kelompok-item">2. dst</li>
              <li style={kelompokItemStyle} className="kelompok-item">3. dst</li>
              <li style={kelompokItemStyle} className="kelompok-item">4. dst</li>
            </ol>
          </div>
        </div>

        {/* Unit Kompetensi Table */}
        <table style={{width: '100%', marginBottom: '20px', fontSize: '12px', borderCollapse: 'collapse'}} className="data-table">
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
                  <div style={{display: 'flex', alignItems: 'center'}} className="table-input-row">
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
                      className="input-field"
                      value={formData.kodeUnit}
                      onChange={(e) => handleInputChange('kodeUnit', e.target.value)}
                      placeholder="Masukkan kode unit"
                    />
                  </div>
                  <div style={{display: 'flex', alignItems: 'center'}} className="table-input-row">
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
                      className="input-field"
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

        <div style={mainContentStyle} className="main-content">
          <div style={leftContentStyle}>
            {/* Box Elemen 1 - Made compact */}
            <div style={{
              border: '2px solid #333',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '10px'
            }} className="element-box">
              <div style={elementTitleStyle} className="element-title">Elemen 1: Mengidentifikasi konsep data dan struktur data</div>
              <div style={elementTitleStyle} className="element-title">Kriteria Untuk Kerja</div>
              
              <div style={criteriaListStyle}>
                <div style={criteriaItemStyle} className="criteria-item">
                  <span>• Mengidentifikasi konsep data dan struktur data sesuai dengan konteks</span>
                  <div style={checkboxGroupStyle} className="checkbox-group">
                    <label style={checkboxLabelStyle} className="checkbox-label">
                      <input 
                        type="checkbox" 
                        style={checkboxStyle}
                        checked={checkedItems['criteria1_ya'] || false}
                        onChange={(e) => handleCheckboxChange('criteria1_ya', e.target.checked)}
                      />
                      Ya
                    </label>
                    <label style={checkboxLabelStyle} className="checkbox-label">
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
                <div style={criteriaItemStyle} className="criteria-item">
                  <span>• Membandingkan alternatif struktur data kelebihan dan kekurangannya untuk konteks permasalahan yang diselesaikan</span>
                  <div style={checkboxGroupStyle} className="checkbox-group">
                    <label style={checkboxLabelStyle} className="checkbox-label">
                      <input 
                        type="checkbox" 
                        style={checkboxStyle}
                        checked={checkedItems['criteria2_ya'] || false}
                        onChange={(e) => handleCheckboxChange('criteria2_ya', e.target.checked)}
                      />
                      Ya
                    </label>
                    <label style={checkboxLabelStyle} className="checkbox-label">
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
              className="textarea-field"
            ></textarea>
          </div>

          <div style={rightContentStyle}>
            <div style={pertanyaanSectionStyle} className="pertanyaan-section">
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px'}} className="pertanyaan-header">
                <div style={{fontSize: '12px', fontWeight: 'bold', color: '#333'}}>
                  Pertanyaan
                </div>
                <div style={{fontSize: '12px', fontWeight: 'bold', color: '#333', textAlign: 'center'}}>
                  Pencapaian
                </div>
              </div>
              
              <div style={pertanyaanItemStyle}>
                <div style={{display: 'flex', gap: '20px', alignItems: 'flex-start'}} className="pertanyaan-item-content">
                  <div style={{flex: 1}}>
                    <div style={pertanyaanTextStyle} className="pertanyaan-text">
                      1. Anda seorang operator yunior busana, sebelum memulai kegiatan menjahit blus, anda perlu memperhatikan SOP kesehatan dan keselamatan kerja, apa yang akan anda lakukan supaya tidak terjadi kecelakaan kerja pada waktu menjahit blus? (JRES)
                    </div>
                  </div>
                  <div style={{minWidth: '120px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px'}} className="pencapaian-controls">
                    <div style={{display: 'flex', gap: '30px', alignItems: 'center', width: '100%'}} className="pencapaian-checkboxes">
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
                  <div style={tanggapanLabelStyle} className="tanggapan-label">Tanggapan:</div>
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
                    className="textarea-field"
                    placeholder=""
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Approve/Reject Buttons */}
        <div style={buttonContainerStyle} className="button-container">
          <button 
            style={approveButtonStyle}
            className="approve-button"
            onClick={handleApprove}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
          >
            APPROVE
          </button>
          <button 
            style={approveButtonStyle}
            className="approve-button"
            onClick={handleReject}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
          >
            REJECT
          </button>
        </div>
        
        {/* Approval Modal - Updated Design */}
        {showApprovalModal && (
          <div style={modalOverlayStyle}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '30px 40px',
              minWidth: '500px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
              position: 'relative'
            }} className="modal-container">
              {/* Header dengan Icon dan Close Button */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '25px'
              }} className="modal-header">
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
                }} className="modal-icon">
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
                  }} className="modal-title">
                    Anda menyetujui
                  </h3>
                  <h3 style={{
                    fontSize: '22px',
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
                  onClick={() => setShowApprovalModal(false)}
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
              }} className="modal-description">
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

        {/* Rejection Modal - Updated Design */}
        {showRejectionModal && (
          <div style={modalOverlayStyle}>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '30px 40px',
              minWidth: '500px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
              position: 'relative'
            }} className="modal-container">
              {/* Header dengan Icon dan Close Button */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: '25px'
              }} className="modal-header">
                {/* Icon document dengan X orange di kiri */}
                <div style={{
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  position: 'relative'
                }} className="modal-icon">
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
                  }} className="modal-title">
                    Anda menolak
                  </h3>
                  <h3 style={{
                    fontSize: '22px',
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
                  onClick={() => setShowRejectionModal(false)}
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
              }} className="modal-description">
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
                  onClick={handleRejectionOke}
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
    </div>
  );
};

export default CeklisObservasi;