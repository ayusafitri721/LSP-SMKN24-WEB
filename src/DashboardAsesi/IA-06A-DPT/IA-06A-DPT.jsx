// src/DashboardAsesi/IA-06A-DPT/IA-06A-DPT.jsx

import React, { useState, useRef } from 'react';
import NavAsesi from '../../components/NavAsesi';

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

const uploadButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '12px 20px',
  backgroundColor: 'white',
  border: '2px solid #ddd',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '14px',
  color: '#333',
  marginTop: '20px',
  transition: 'all 0.3s ease',
  width: 'fit-content',
};

const pdfIconStyle = {
  width: '32px',
  height: '32px',
  backgroundColor: '#131111ff',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '12px',
  fontWeight: 'bold',
};

const uploadTextStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
};

const uploadTitleStyle = {
  fontSize: '14px',
  fontWeight: '500',
  color: '#333',
  margin: 0,
};

const uploadSubtitleStyle = {
  fontSize: '12px',
  color: '#666',
  margin: 0,
};

const IA06A = () => {
  const [formData, setFormData] = useState({
    namaAssesor: '',
    namaAsesi: '',
    tanggalAsesment: ''
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      console.log('File uploaded:', file.name);
    }
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
          .upload-button:hover {
            border-color: #ff8c00;
            background-color: #fffbf5;
          }
        `}
      </style>

      <div style={navContainerStyle} className="nav-scrollbar">
        <NavAsesi activeTab="FR.IA.06A.DPT" />
      </div>

      <div style={imageBannerStyle}>
        <h1 style={logoTextStyle}>MyLSP</h1>
      </div>

      <div style={formContainerStyle}>
        <div style={headerStyle}>
          <img src="/src/img/image 12.png" alt="LSP Logo" style={lspLogoStyle} />
          <div style={formTitleSectionStyle}>
            <h2 style={formTitleLargeStyle}>FR.IA.06.A</h2>
            <h3 style={formTitleSmallStyle}>DAFTAR PERTANYAAN TERTULIS ESAI</h3>
          </div>
        </div>

        <div style={formBodyStyle}>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td style={{ ...tableCellStyle, width: '25%' }}>Nama Assesor</td>
                <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
                <td style={{ ...tableCellStyle, width: '74%' }}>
                  <input
                    type="text"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.namaAssesor}
                    onChange={(e) => handleInputChange('namaAssesor', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, width: '25%' }}>Nama Asesi</td>
                <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
                <td style={{ ...tableCellStyle, width: '74%' }}>
                  <input
                    type="text"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.namaAsesi}
                    onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, width: '25%' }}>Tanggal Asesment</td>
                <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
                <td style={{ ...tableCellStyle, width: '74%' }}>
                  <input
                    type="text"
                    style={{ width: '100%', border: 'none', outline: 'none' }}
                    value={formData.tanggalAsesment}
                    onChange={(e) => handleInputChange('tanggalAsesment', e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
            accept=".pdf,.doc,.docx"
          />

          <div 
            style={uploadButtonStyle}
            className="upload-button"
            onClick={handleFileUpload}
          >
            <div style={pdfIconStyle}>PDF</div>
            <div style={uploadTextStyle}>
              <div style={uploadTitleStyle}>
                {uploadedFile ? uploadedFile.name : 'Download soal'}
              </div>
              <div style={uploadSubtitleStyle}>
                {uploadedFile 
                  ? `File berhasil dipilih`
                  : 'Silahkan klik tombol ini untuk mendownload soal'
                }
              </div>
            </div>
          </div>

          {uploadedFile && (
            <div style={{ 
              marginTop: '10px', 
              padding: '10px', 
              backgroundColor: '#e8f5e8', 
              borderRadius: '4px',
              fontSize: '12px',
              color: '#2e7d32'
            }}>
              File terpilih: {uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(1)} KB)
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IA06A;