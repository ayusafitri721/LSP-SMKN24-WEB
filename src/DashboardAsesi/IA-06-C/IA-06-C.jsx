/* eslint-disable no-irregular-whitespace */
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NavAsesi from '../../components/NavAsesi';
import { FaUpload } from 'react-icons/fa'; // Import the upload icon

// Styles as JavaScript objects
const pageContainerStyle = {
  backgroundColor: '#f5f5f5',
  fontFamily: 'Arial, sans-serif',
  padding: '15px',
  minHeight: '100vh',
};

const navContainerStyle = {
  backgroundColor: 'white',
  padding: '5px 15px',
  borderRadius: '15px 15px 40px 15px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  margin: '15px 15px 0 15px',
  overflowX: 'auto',
  maxWidth: '50%',
  whiteSpace: 'nowrap',
};

const imageBannerStyle = {
  backgroundImage:
    "linear-gradient(rgba(255,140,0,0.7), rgba(255,140,0,0.7)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '160px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '15px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  marginTop: '20px',
};

const logoTextStyle = {
  color: 'white',
  fontSize: '48px',
  fontWeight: 'bold',
  margin: 0,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  letterSpacing: '2px',
};

const formContainerStyle = {
  backgroundColor: 'white',
  borderRadius: '15px',
  padding: '0',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  marginTop: '20px',
  overflow: 'hidden',
};

const headerStyle = {
  backgroundColor: 'white',
  borderTop: '5px solid #ffffffff',
  borderBottom: '5px solid #ffffffff',
  padding: '10px 20px',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center',
};

const formTitleSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  flexGrow: 1,
};

const formTitleLargeStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '0',
};

const formTitleSmallStyle = {
  fontSize: '14px',
  fontWeight: 'normal',
  color: '#666',
  marginTop: '5px',
};

const lspLogoStyle = {
  width: '50px',
  height: '50px',
  objectFit: 'contain',
  marginRight: '15px',
  position: 'absolute',
  left: '20px',
};

const formBodyStyle = {
  padding: '25px',
  backgroundColor: 'white',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '20px',
  border: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '8px',
  border: '1px solid #ddd',
  fontSize: '14px',
  color: '#333',
};

const tableTopCellStyle = {
  ...tableCellStyle,
  backgroundColor: '#f5f5f5',
  fontWeight: 'bold',
};

const tableInputStyle = {
  border: 'none',
  width: '100%',
  fontSize: '14px',
  padding: '0',
  backgroundColor: 'transparent',
  outline: 'none',
};

const separatorStyle = {
  width: '1%',
  textAlign: 'center',
};

const uploadBoxStyle = {
  border: '2px dashed #007bff',
  borderRadius: '10px',
  padding: '30px',
  textAlign: 'center',
  cursor: 'pointer',
  backgroundColor: '#f8f8f8',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '20px',
  transition: 'background-color 0.3s ease',
};

const uploadIconStyle = {
  fontSize: '48px',
  color: '#007bff',
};

const uploadTextStyle = {
  fontSize: '16px',
  color: '#555',
  margin: '0',
};

const popupOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const popupContainerStyle = {
  backgroundColor: 'white',
  borderRadius: '20px',
  padding: '40px',
  textAlign: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  minWidth: '320px',
  maxWidth: '400px',
};

const iconContainerStyle = {
  marginBottom: '20px',
};

const successIconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 20px',
  position: 'relative',
  gap: '15px',
};

const listLinesStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

const checkCircleStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: '#FF8C00',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '6px',
};

const checkMarkStyle = {
  color: 'white',
  fontSize: '24px',
  fontWeight: 'bold',
};

const popupTitleStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '8px',
  lineHeight: '1.3',
};

const popupSubtitleStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '30px',
  lineHeight: '1.3',
};

const dividerStyle = {
  height: '2px',
  backgroundColor: '#ddd',
  margin: '25px 0',
  borderRadius: '1px',
};

const okayButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#666',
  cursor: 'pointer',
  padding: '10px 20px',
};

const footerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '15px 0',
};

const submitButtonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
};


const IA06C = () => {
  const [formData, setFormData] = useState({
    skemaSertifikasi: '',
    judulUnit: '',
    kodeUnit: '',
    tuk: '',
    namaAsesor: '',
    namaAsesi: '',
    tanggal: '',
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUploadBoxClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      console.log('Form submitted with file:', selectedFile.name);
      setShowPopup(true);
    } else {
      alert('Please select a file to upload first.');
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate('/dashboard-asesi/ak-02');
  };

  return (
    <div style={pageContainerStyle}>
      <style>
        {`
          .nav-scrollbar::-webkit-scrollbar {
            height: 5px;
          }
          .nav-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .nav-scrollbar::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 5px;
          }
          .nav-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
          .upload-box:hover {
            background-color: #e2f2ff;
          }
        `}
      </style>

      <div style={navContainerStyle} className="nav-scrollbar">
        <NavAsesi activeTab="FR.IA.06.C" />
      </div>

      <div style={imageBannerStyle}>
        <h1 style={logoTextStyle}>MyLSP</h1>
      </div>

      <div style={formContainerStyle}>
        <div style={headerStyle}>
          <img src="/src/img/image 12.png" alt="LSP Logo" style={lspLogoStyle} />
          <div style={formTitleSectionStyle}>
            <h2 style={formTitleLargeStyle}>FR.IA.06C</h2>
            <h3 style={formTitleSmallStyle}>LEMBAR JAWABAN PERTANYAAN TERTULIS ESAI</h3>
          </div>
        </div>

        <div style={formBodyStyle}>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td style={{ ...tableTopCellStyle, width: '25%' }} rowSpan="2">Skema Sertifikasi (KKNI/OKUPASI/KLASTER)</td>
                <td style={{ ...tableTopCellStyle, width: '0%' }} rowSpan="2">

                </td>
                <td style={{ ...tableCellStyle, width: '15%' }}>Judul Unit</td>
                <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
                <td style={{ ...tableCellStyle, width: '34%' }}>
                  <input
                    type="text"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.judulUnit}
                    onChange={(e) => handleInputChange('judulUnit', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, width: '15%' }}>Kode Unit</td>
                <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
                <td style={{ ...tableCellStyle, width: '34%' }}>
                  <input
                    type="text"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.kodeUnit}
                    onChange={(e) => handleInputChange('kodeUnit', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, width: '25%' }}>TUK</td>
                <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
                <td style={{ ...tableCellStyle, width: '74%' }} colSpan="4">
                  <input
                    type="text"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.tuk}
                    onChange={(e) => handleInputChange('tuk', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, width: '25%' }}>Nama Asesor</td>
                <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
                <td style={{ ...tableCellStyle, width: '74%' }} colSpan="4">
                  <input
                    type="text"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.namaAsesor}
                    onChange={(e) => handleInputChange('namaAsesor', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, width: '25%' }}>Nama Asesi</td>
                <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
                <td style={{ ...tableCellStyle, width: '74%' }} colSpan="4">
                  <input
                    type="text"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.namaAsesi}
                    onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, width: '25%' }}>Tanggal</td>
                <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
                <td style={{ ...tableCellStyle, width: '74%' }} colSpan="4">
                  <input
                    type="date"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.tanggal}
                    onChange={(e) => handleInputChange('tanggal', e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <form onSubmit={handleSubmit}>
            <div style={uploadBoxStyle} onClick={handleUploadBoxClick} className="upload-box">
              <FaUpload style={uploadIconStyle} />
              <h4 style={uploadTextStyle}>
                {selectedFile ? `File Terpilih: ${selectedFile.name}` : "Pilih File Jawaban"}
              </h4>
              <p style={{ fontSize: '12px', color: '#888' }}>
                Klik area ini untuk memilih file.
              </p>
            </div>
            {/* The actual file input, hidden from view */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />

            <div style={footerStyle}>
              <button type="submit" style={submitButtonStyle}>Kirim Jawaban</button>
            </div>
          </form>
        </div>
      </div>

      {showPopup && (
        <div style={popupOverlayStyle} onClick={handleClosePopup}>
          <div style={popupContainerStyle} onClick={(e) => e.stopPropagation()}>
            <div style={iconContainerStyle}>
              <div style={successIconStyle}>
                <div style={listLinesStyle}>
                  <div style={{
                    width: '60px',
                    height: '12px',
                    backgroundColor: '#FF8C00',
                    borderRadius: '6px'
                  }}></div>
                  <div style={{
                    width: '80px',
                    height: '12px',
                    backgroundColor: '#FF8C00',
                    borderRadius: '6px'
                  }}></div>
                  <div style={{
                    width: '100px',
                    height: '12px',
                    backgroundColor: '#FF8C00',
                    borderRadius: '6px'
                  }}></div>
                </div>
                <div style={checkCircleStyle}>
                  <div style={checkMarkStyle}>✓</div>
                </div>
              </div>
            </div>
            <div style={popupTitleStyle}>Jawaban Anda</div>
            <div style={popupSubtitleStyle}>Berhasil Direkam!</div>
            <div style={dividerStyle}></div>
            <button style={okayButtonStyle} onClick={handleClosePopup}>
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IA06C;