import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Check } from 'lucide-react';

// Media query hooks untuk responsive design
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

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

const rejectButtonStyle = {
  ...buttonStyle,
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
  
  // Media queries untuk responsive design
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  // Responsive styles
  const getResponsiveStyles = () => {
    if (isMobile) {
      return {
        pageContainer: { ...pageContainerStyle, padding: '10px 0' },
        contentContainer: { ...contentContainerStyle, margin: '0 10px' },
        logoText: { ...logoTextStyle, fontSize: '32px' },
        logoContainer: { ...logoContainerStyle, height: '120px', marginTop: '10px', marginBottom: '10px' },
        nameBox: { ...nameBoxStyle, margin: '0 10px', padding: '10px 15px' },
        name: { ...nameStyle, fontSize: '14px' },
        tableHeader: { ...tableHeaderStyle, padding: '8px 15px', fontSize: '11px' },
        table: { ...tableStyle, fontSize: '10px' },
        tableCell: { ...tableCellStyle, padding: '6px 8px' },
        inputCell: { ...inputCellStyle, padding: '3px 6px' },
        input: { ...inputStyle, fontSize: '9px', padding: '3px' },
        section: { ...sectionStyle, margin: '15px 10px' },
        sectionHeader: { ...sectionHeaderStyle, padding: '6px 10px', fontSize: '10px' },
        mainContent: { ...mainContentStyle, padding: '10px 15px', flexDirection: 'column', gap: '15px' },
        leftColumn: { ...leftColumnStyle, width: '100%' },
        rightColumn: { ...rightColumnStyle, width: '100%', gap: '10px' },
        formBox: { ...formBoxStyle, padding: '10px' },
        textarea: { ...textareaStyle, fontSize: '9px', minHeight: '50px' },
        wawancaraTable: { ...wawancaraTableStyle, margin: '15px 10px', fontSize: '9px' },
        wawancaraTh: { ...wawancaraThStyle, padding: '6px', fontSize: '9px' },
        wawancaraTd: { ...wawancaraTdStyle, padding: '4px 6px', fontSize: '9px' },
        buttonContainer: { ...buttonContainerStyle, margin: '15px 10px', gap: '10px' },
        button: { ...buttonStyle, padding: '6px 15px', fontSize: '11px' },
        approveButton: { ...approveButtonStyle, fontSize: '12px', padding: '8px 15px', minWidth: '80px' },
        rejectButton: { ...rejectButtonStyle, fontSize: '12px', padding: '8px 15px', minWidth: '80px' }
      };
    } else if (isTablet) {
      return {
        pageContainer: { ...pageContainerStyle, padding: '15px 0' },
        contentContainer: { ...contentContainerStyle, margin: '0 15px' },
        logoText: { ...logoTextStyle, fontSize: '42px' },
        logoContainer: { ...logoContainerStyle, height: '150px', marginTop: '15px', marginBottom: '15px' },
        nameBox: { ...nameBoxStyle, margin: '0 15px', padding: '12px 18px' },
        name: { ...nameStyle, fontSize: '15px' },
        tableHeader: { ...tableHeaderStyle, padding: '10px 18px', fontSize: '11px' },
        table: { ...tableStyle, fontSize: '10px' },
        tableCell: { ...tableCellStyle, padding: '7px 10px' },
        inputCell: { ...inputCellStyle, padding: '4px 7px' },
        input: { ...inputStyle, fontSize: '9px', padding: '4px' },
        section: { ...sectionStyle, margin: '18px 15px' },
        sectionHeader: { ...sectionHeaderStyle, padding: '7px 11px', fontSize: '10px' },
        mainContent: { ...mainContentStyle, padding: '12px 18px', gap: '18px' },
        leftColumn: { ...leftColumnStyle, flex: 1.2 },
        rightColumn: { ...rightColumnStyle, width: '280px', gap: '12px' },
        formBox: { ...formBoxStyle, padding: '12px' },
        textarea: { ...textareaStyle, fontSize: '9px', minHeight: '55px' },
        wawancaraTable: { ...wawancaraTableStyle, margin: '18px 15px', fontSize: '9px' },
        wawancaraTh: { ...wawancaraThStyle, padding: '7px', fontSize: '9px' },
        wawancaraTd: { ...wawancaraTdStyle, padding: '5px 7px', fontSize: '9px' },
        buttonContainer: { ...buttonContainerStyle, margin: '18px 15px', gap: '12px' },
        button: { ...buttonStyle, padding: '7px 20px', fontSize: '11px' },
        approveButton: { ...approveButtonStyle, fontSize: '12px', padding: '10px 20px', minWidth: '100px' },
        rejectButton: { ...rejectButtonStyle, fontSize: '12px', padding: '10px 20px', minWidth: '100px' }
      };
    } else {
      return {
        pageContainer: pageContainerStyle,
        contentContainer: contentContainerStyle,
        logoText: logoTextStyle,
        logoContainer: logoContainerStyle,
        nameBox: nameBoxStyle,
        name: nameStyle,
        tableHeader: tableHeaderStyle,
        table: tableStyle,
        tableCell: tableCellStyle,
        inputCell: inputCellStyle,
        input: inputStyle,
        section: sectionStyle,
        sectionHeader: sectionHeaderStyle,
        mainContent: mainContentStyle,
        leftColumn: leftColumnStyle,
        rightColumn: rightColumnStyle,
        formBox: formBoxStyle,
        textarea: textareaStyle,
        wawancaraTable: wawancaraTableStyle,
        wawancaraTh: wawancaraThStyle,
        wawancaraTd: wawancaraTdStyle,
        buttonContainer: buttonContainerStyle,
        button: buttonStyle,
        approveButton: approveButtonStyle,
        rejectButton: rejectButtonStyle
      };
    }
  };

  const responsiveStyles = getResponsiveStyles();

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
    <>
      {/* CSS untuk responsive design */}
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
            .responsive-modal {
              padding: 20px 25px !important;
              min-width: 300px !important;
              max-width: 90vw !important;
            }
            .responsive-modal h3 {
              font-size: 16px !important;
            }
            .responsive-modal p {
              font-size: 12px !important;
            }
            .responsive-modal button {
              font-size: 12px !important;
              padding: 8px 20px !important;
            }
            .table-container {
              overflow-x: auto !important;
              -webkit-overflow-scrolling: touch !important;
            }
            .mobile-flex-column {
              flex-direction: column !important;
            }
            .mobile-main-content {
              flex-direction: column !important;
            }
            .mobile-full-width {
              width: 100% !important;
            }
            .mobile-form-box {
              margin-bottom: 10px !important;
            }
            .mobile-form-row {
              flex-direction: column !important;
            }
            .mobile-button-row {
              flex-direction: column !important;
            }
            .mobile-signature-row {
              flex-direction: column !important;
            }
            .mobile-form-row {
              flex-direction: column !important;
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
            .responsive-modal {
              padding: 25px 35px !important;
              min-width: 400px !important;
            }
            .responsive-modal h3 {
              font-size: 20px !important;
            }
            .responsive-modal p {
              font-size: 13px !important;
            }
            .responsive-modal button {
              font-size: 13px !important;
              padding: 9px 25px !important;
            }
            .table-container {
              overflow-x: auto !important;
              -webkit-overflow-scrolling: touch !important;
            }
            .tablet-flex-column {
              flex-direction: column !important;
            }
            .tablet-main-content {
              flex-direction: column !important;
            }
            .tablet-full-width {
              width: 100% !important;
            }
            .tablet-form-box {
              margin-bottom: 8px !important;
            }
            .tablet-form-row {
              flex-direction: column !important;
            }
            .tablet-button-row {
              flex-direction: column !important;
            }
            .tablet-signature-row {
              flex-direction: column !important;
            }
            .tablet-form-row {
              flex-direction: column !important;
            }
          }
        `}
      </style>
      
      <div style={responsiveStyles.pageContainer}>
      {/* Header Section matching AK-02 design */}
      <div style={headerSectionStyle}>
        <div style={responsiveStyles.logoContainer}>
          <h1 style={responsiveStyles.logoText}>
            MyLSP
          </h1>
        </div>
      </div>

      {/* Name Box */}
      <div style={responsiveStyles.nameBox}>
        <div style={responsiveStyles.name}>FR-IA-09 Wawancara </div>
      </div>

      {/* Konten Utama */}
      <div style={responsiveStyles.contentContainer}>
        {/* Header Tabel */}
        <div style={responsiveStyles.tableHeader}>
          Skema Sertifikasi
        </div>

        {/* Tabel Skema Sertifikasi */}
        <div className="table-container">
          <table style={responsiveStyles.table} className="responsive-table">
          <tbody>
            <tr style={tableRowStyle}>
              <td style={{ ...responsiveStyles.tableCell, width: isMobile ? '100px' : '150px', backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: isMobile ? '9px' : '11px' }}>
                Skema Sertifikasi
                <br />
                <span style={{ fontWeight: 'normal', fontSize: isMobile ? '8px' : '10px' }}>(KKNI/OKUPASI/KLASTER)</span>
              </td>
              <td style={{ ...responsiveStyles.tableCell, width: isMobile ? '60px' : '80px', backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: isMobile ? '9px' : '11px' }}>
                Judul Unit
              </td>
              <td style={{ ...responsiveStyles.inputCell, backgroundColor: 'white' }}>
                <input
                  style={responsiveStyles.input}
                  className="responsive-input"
                  type="text"
                  value={formData.judulUnit}
                  onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...responsiveStyles.tableCell, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: isMobile ? '9px' : '11px' }}>
                TUK
              </td>
              <td style={{ ...responsiveStyles.tableCell, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: isMobile ? '9px' : '11px' }}>
                Kode Unit
              </td>
              <td style={{ ...responsiveStyles.inputCell, backgroundColor: 'white' }}>
                <input
                  style={responsiveStyles.input}
                  className="responsive-input"
                  type="text"
                  value={formData.kodeUnit}
                  onChange={(e) => handleInputChange('kodeUnit', e.target.value)}
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...responsiveStyles.tableCell, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: isMobile ? '9px' : '11px' }}>
                Nama Asesor
              </td>
              <td style={{ ...responsiveStyles.tableCell, backgroundColor: '#f8f9fa' }}></td>
              <td style={{ ...responsiveStyles.inputCell, backgroundColor: 'white' }}>
                <input
                  style={responsiveStyles.input}
                  className="responsive-input"
                  type="text"
                  value={formData.namaAsesor}
                  onChange={(e) => handleInputChange('namaAsesor', e.target.value)}
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...responsiveStyles.tableCell, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: isMobile ? '9px' : '11px' }}>
                Nama Asesi
              </td>
              <td style={{ ...responsiveStyles.tableCell, backgroundColor: '#f8f9fa' }}></td>
              <td style={{ ...responsiveStyles.inputCell, backgroundColor: 'white' }}>
                <input
                  style={responsiveStyles.input}
                  className="responsive-input"
                  type="text"
                  value={formData.namaAsesi}
                  onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...responsiveStyles.tableCell, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: isMobile ? '9px' : '11px' }}>
                Tanggal
              </td>
              <td style={{ ...responsiveStyles.tableCell, backgroundColor: '#f8f9fa' }}></td>
              <td style={{ ...responsiveStyles.inputCell, backgroundColor: 'white' }}>
                <input
                  style={responsiveStyles.input}
                  className="responsive-input"
                  type="date"
                  value={formData.tanggal}
                  onChange={(e) => handleInputChange('tanggal', e.target.value)}
                />
              </td>
            </tr>
            <tr style={tableRowStyle}>
              <td style={{ ...responsiveStyles.tableCell, backgroundColor: '#f8f9fa', fontWeight: 'bold', fontSize: isMobile ? '9px' : '11px' }}>
                Waktu
              </td>
              <td style={{ ...responsiveStyles.tableCell, backgroundColor: '#f8f9fa' }}></td>
              <td style={{ ...responsiveStyles.inputCell, backgroundColor: 'white' }}>
                <input
                  style={responsiveStyles.input}
                  className="responsive-input"
                  type="time"
                  value={formData.waktu}
                  onChange={(e) => handleInputChange('waktu', e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        </div>

        {/* Unit Kompetensi Section */}
        <div style={responsiveStyles.section}>
          <div style={responsiveStyles.sectionHeader}>Unit Kompetensi 1</div>
          <div className="table-container">
            <table style={responsiveStyles.table} className="responsive-table">
              <tbody>
                <tr>
                  <td style={{...responsiveStyles.tableCell, fontWeight: 'bold', width: isMobile ? '60px' : '80px', backgroundColor: '#f8f9fa'}}>Judul Unit</td>
                  <td style={responsiveStyles.tableCell}>{formData.unitKompetensi}</td>
                </tr>
                <tr>
                  <td style={{...responsiveStyles.tableCell, fontWeight: 'bold', backgroundColor: '#f8f9fa'}}>Kode Unit</td>
                  <td style={responsiveStyles.tableCell}>{formData.kodeUnitKompetensi}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section dengan Elemen */}
        <div style={responsiveStyles.section}>
          <div style={responsiveStyles.sectionHeader}>
            Setiap pertanyaan harus terkait dengan Elemen
          </div>
          <div style={{padding: isMobile ? '10px' : '15px'}}>
            <p style={{fontSize: isMobile ? '9px' : '10px', marginBottom: isMobile ? '10px' : '15px', fontStyle: 'italic'}}>
              Tuliskan bukti-bukti yang terdapat pada Ceklis Verifikasi Portofolio 
              yang memerlukan wawancara
            </p>
            
            <div className={isMobile ? 'mobile-main-content' : isTablet ? 'tablet-main-content' : ''} style={responsiveStyles.mainContent}>
              {/* Left Column - Bukti Kompetensi dan Daftar Pertanyaan */}
              <div className={isMobile ? 'mobile-full-width' : isTablet ? 'tablet-full-width' : ''} style={responsiveStyles.leftColumn}>
                {/* Bukti-bukti Kompetensi */}
                <div style={{
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  padding: isMobile ? '10px' : '15px',
                  backgroundColor: 'white',
                  marginBottom: isMobile ? '15px' : '20px'
                }}>
                  <h4 style={{fontSize: isMobile ? '11px' : '12px', marginBottom: isMobile ? '10px' : '15px', fontWeight: 'bold', color: '#333'}}>
                    Bukti-bukti Kompetensi
                  </h4>
                  {formData.buktiKompetensi.map((bukti, index) => (
                    <div key={index} style={{marginBottom: isMobile ? '8px' : '12px'}}>
                      <div style={{fontSize: isMobile ? '9px' : '10px', fontWeight: 'bold', marginBottom: '3px'}}>
                        {index + 1}.
                      </div>
                      <textarea
                        style={responsiveStyles.textarea}
                        className="responsive-textarea"
                        value={bukti}
                        onChange={(e) => handleBuktiChange(index, e.target.value)}
                        placeholder={"Masukkan bukti kompetensi " + (index + 1)}
                      />
                    </div>
                  ))}
                </div>

                {/* Daftar Pertanyaan Wawancara */}
                <div style={{
                  border: '1px solid #dee2e6',
                  borderRadius: '8px',
                  backgroundColor: 'white',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    backgroundColor: '#e9ecef',
                    padding: isMobile ? '8px 12px' : '12px 15px',
                    fontSize: isMobile ? '11px' : '12px',
                    fontWeight: 'bold',
                    color: '#333',
                    borderBottom: '1px solid #dee2e6'
                  }}>
                    Daftar Pertanyaan Wawancara
                  </div>
                  
                  <div className="table-container">
                    <table style={{...responsiveStyles.wawancaraTable, margin: '0'}} className="responsive-table">
                      <thead>
                        <tr>
                          <td style={{...responsiveStyles.wawancaraTh, backgroundColor: '#f8f9fa'}}>Pertanyaan</td>
                          <td style={{...responsiveStyles.wawancaraTh, width: isMobile ? '60px' : '80px', backgroundColor: '#f8f9fa'}}>Rekomendasi</td>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.pertanyaanWawancara.map((item, index) => (
                          <tr key={index}>
                            <td style={responsiveStyles.wawancaraTd}>
                              <div style={{fontSize: isMobile ? '9px' : '10px', fontWeight: 'bold', marginBottom: '3px'}}>
                                {index + 1}. Sesuai dengan bukti :
                              </div>
                              <input 
                                type="text" 
                                className="responsive-input"
                                style={{...responsiveStyles.input, border: '1px solid #ccc', padding: '3px', fontSize: isMobile ? '8px' : '9px'}}
                                value={item.pertanyaan}
                                onChange={(e) => handlePertanyaanChange(index, 'pertanyaan', e.target.value)}
                                placeholder="Masukkan pertanyaan wawancara"
                              />
                            </td>
                            <td style={responsiveStyles.wawancaraTd}>
                              <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                                <label style={{fontSize: isMobile ? '8px' : '9px', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                                  <input 
                                    type="checkbox" 
                                    checked={item.rekomendasi}
                                    onChange={(e) => handlePertanyaanChange(index, 'rekomendasi', e.target.checked)}
                                    style={{marginRight: '2px', transform: isMobile ? 'scale(0.7)' : 'scale(0.8)'}}
                                  />
                                  ✓
                                </label>
                                <label style={{fontSize: isMobile ? '8px' : '9px', display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                                  <input 
                                    type="checkbox" 
                                    checked={item.reject}
                                    onChange={(e) => handlePertanyaanChange(index, 'reject', e.target.checked)}
                                    style={{marginRight: '2px', transform: isMobile ? 'scale(0.7)' : 'scale(0.8)'}}
                                  />
                                  ✗
                                </label>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Form Fields */}
              <div className={isMobile ? 'mobile-full-width' : isTablet ? 'tablet-full-width' : ''} style={responsiveStyles.rightColumn}>
                {/* Nama Asesi dan Nama Asesor berdampingan */}
                <div className={isMobile ? 'mobile-form-row' : isTablet ? 'tablet-form-row' : ''} style={{display: 'flex', gap: isMobile ? '8px' : '10px', flexDirection: isMobile ? 'column' : 'row'}}>
                  <div className={isMobile ? 'mobile-form-box' : isTablet ? 'tablet-form-box' : ''} style={{...responsiveStyles.formBox, flex: 1}}>
                    <h4 style={{fontSize: isMobile ? '10px' : '11px', textAlign: 'center', marginBottom: '6px'}}>
                      Nama Asesi
                    </h4>
                    <input 
                      type="text" 
                      className="responsive-input"
                      style={{...responsiveStyles.input, border: '1px solid #ccc', padding: isMobile ? '4px' : '6px', fontSize: isMobile ? '9px' : '10px'}}
                      value={formData.namaAsesiForm}
                      onChange={(e) => handleInputChange('namaAsesiForm', e.target.value)}
                    />
                  </div>
                  
                  <div className={isMobile ? 'mobile-form-box' : isTablet ? 'tablet-form-box' : ''} style={{...responsiveStyles.formBox, flex: 1}}>
                    <h4 style={{fontSize: isMobile ? '10px' : '11px', textAlign: 'center', marginBottom: '6px'}}>
                      Nama Asesor
                    </h4>
                    <input 
                      type="text" 
                      className="responsive-input"
                      style={{...responsiveStyles.input, border: '1px solid #ccc', padding: isMobile ? '4px' : '6px', fontSize: isMobile ? '9px' : '10px'}}
                      value={formData.namaAsesorForm}
                      onChange={(e) => handleInputChange('namaAsesorForm', e.target.value)}
                    />
                  </div>
                </div>

                {/* Tanda Tangan dan Tombol berdampingan */}
                <div className={isMobile ? 'mobile-signature-row' : isTablet ? 'tablet-signature-row' : ''} style={{display: 'flex', gap: isMobile ? '8px' : '10px', alignItems: 'stretch', flexDirection: isMobile ? 'column' : 'row'}}>
                  <div className={isMobile ? 'mobile-form-box' : isTablet ? 'tablet-form-box' : ''} style={{...responsiveStyles.formBox, flex: 1}}>
                    <h4 style={{fontSize: isMobile ? '10px' : '11px', textAlign: 'center', marginBottom: '6px'}}>
                      Tanda Tangan Asesi
                    </h4>
                    <div style={{
                      border: '1px solid #ddd',
                      borderRadius: '4px',
                      padding: isMobile ? '6px' : '8px',
                      minHeight: isMobile ? '40px' : '50px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#fafafa',
                      flexDirection: 'column',
                      gap: isMobile ? '4px' : '6px'
                    }}>
                      {formData.tandaTanganAsesi ? (
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: isMobile ? '4px' : '6px'
                        }}>
                          <span style={{fontSize: isMobile ? '8px' : '9px', color: '#333', textAlign: 'center'}}>
                            {formData.tandaTanganAsesi.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, tandaTanganAsesi: null }))}
                            style={{
                              padding: isMobile ? '2px 4px' : '3px 6px',
                              backgroundColor: '#dc3545',
                              color: 'white',
                              border: 'none',
                              borderRadius: '3px',
                              fontSize: isMobile ? '7px' : '8px',
                              cursor: 'pointer'
                            }}
                          >
                            Hapus
                          </button>
                        </div>
                      ) : (
                        <label style={{
                          cursor: 'pointer',
                          padding: isMobile ? '4px 8px' : '6px 12px',
                          backgroundColor: '#007bff',
                          color: 'white',
                          borderRadius: '4px',
                          fontSize: isMobile ? '8px' : '9px',
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

                  {/* Tombol Approve dan Reject */}
                  <div className={isMobile ? 'mobile-button-row' : isTablet ? 'tablet-button-row' : ''} style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'center',
                    gap: isMobile ? '6px' : '8px',
                    minWidth: isMobile ? 'auto' : '100px',
                    alignItems: 'center'
                  }}>
                    <button 
                      onClick={handleApprove}
                      className="responsive-button"
                      style={{
                        ...responsiveStyles.approveButton,
                        fontSize: isMobile ? '10px' : '11px',
                        padding: isMobile ? '6px 10px' : '8px 12px',
                        minWidth: isMobile ? '50px' : '60px'
                      }}
                    >
                      Approve
                    </button>
                    <button 
                      onClick={handleReject}
                      className="responsive-button"
                      style={{
                        ...responsiveStyles.rejectButton,
                        fontSize: isMobile ? '10px' : '11px',
                        padding: isMobile ? '6px 10px' : '8px 12px',
                        minWidth: isMobile ? '50px' : '60px'
                      }}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Notifikasi Approve - dari AK-02 */}
      {showModal && (
        <div style={modalOverlayStyle}>
          <div className="responsive-modal" style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: isMobile ? '20px 25px' : '30px 40px',
            minWidth: isMobile ? '300px' : '500px',
            maxWidth: isMobile ? '90vw' : '500px',
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
                    height: isMobile ? '4px' : '6px',
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
                paddingTop: '5px'
              }}>
                <h3 className="responsive-modal" style={{
                  fontSize: isMobile ? '16px' : '22px',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '4px',
                  lineHeight: '1.2'
                }}>
                  Anda menyetujui
                </h3>
                <h3 className="responsive-modal" style={{
                  fontSize: isMobile ? '16px' : '22px',
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
            <p className="responsive-modal" style={{
              fontSize: isMobile ? '12px' : '14px',
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
                className="responsive-button"
                style={{
                  padding: isMobile ? '8px 20px' : '10px 30px',
                  backgroundColor: '#4A90E2',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: isMobile ? '12px' : '14px',
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
          <div className="responsive-modal" style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: isMobile ? '20px 25px' : '30px 40px',
            minWidth: isMobile ? '300px' : '500px',
            maxWidth: isMobile ? '90vw' : '500px',
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
                  padding: isMobile ? '3px' : '4px'
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
                paddingTop: '5px'
              }}>
                <h3 className="responsive-modal" style={{
                  fontSize: isMobile ? '16px' : '22px',
                  fontWeight: '600',
                  color: '#333',
                  marginBottom: '4px',
                  lineHeight: '1.2'
                }}>
                  Anda menolak
                </h3>
                <h3 className="responsive-modal" style={{
                  fontSize: isMobile ? '16px' : '22px',
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
            <p className="responsive-modal" style={{
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
                className="responsive-button"
                style={{
                  padding: isMobile ? '8px 20px' : '10px 30px',
                  backgroundColor: '#FF8C00',
                  color: 'white',
                  border: 'none',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontSize: isMobile ? '12px' : '14px',
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

export default Wawancara;