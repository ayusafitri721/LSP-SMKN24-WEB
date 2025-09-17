// src/DashboardAsesi/IA-09/IA-09.jsx

import React, { useState } from 'react';
import NavAsesi from '../../components/NavAsesi';

const pageContainerStyle = {
  backgroundColor: '#f5f5f5',
  fontFamily: 'Arial, sans-serif',
  padding: '15px',
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

const contentCardStyle = {
  backgroundColor: 'white',
  borderRadius: '15px',
  padding: '30px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  marginTop: '20px',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '30px',
};

const titleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  color: '#333',
  margin: '5px 0',
};

const subtitleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#333',
  margin: '0',
};

const logoContainerStyle = {
  position: 'absolute',
  top: '20px',
  left: '30px',
  backgroundColor: '#ff8c00',
  color: 'white',
  padding: '8px 12px',
  fontSize: '14px',
  fontWeight: 'bold',
  borderRadius: '4px',
};

const mainContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '30px',
  marginTop: '20px',
};

const leftSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const rightSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const sectionStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  backgroundColor: '#fafafa',
};

const sectionTitleStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '10px',
  borderBottom: '1px solid #ddd',
  paddingBottom: '5px',
};

const fieldRowStyle = {
  display: 'flex',
  marginBottom: '8px',
  alignItems: 'flex-start',
};

const labelStyle = {
  fontSize: '12px',
  color: '#333',
  minWidth: '120px',
  paddingRight: '10px',
};

const colonStyle = {
  marginRight: '10px',
  fontSize: '12px',
};

const valueStyle = {
  fontSize: '12px',
  color: '#333',
  flex: 1,
};

const textareaStyle = {
  width: '100%',
  minHeight: '80px',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '12px',
  fontFamily: 'Arial, sans-serif',
  resize: 'vertical',
  backgroundColor: 'white',
};

const competencyListStyle = {
  fontSize: '12px',
  color: '#333',
  marginBottom: '15px',
};

const competencyItemStyle = {
  marginBottom: '8px',
};

const tableContainerStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: 'white',
};

const tableHeaderStyle = {
  backgroundColor: '#f8f9fa',
  padding: '12px',
  fontSize: '13px',
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
  borderBottom: '1px solid #ddd',
};

const tableRowStyle = {
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr',
  borderBottom: '1px solid #eee',
};

const tableCellStyle = {
  padding: '12px',
  fontSize: '12px',
  color: '#333',
  borderRight: '1px solid #eee',
  display: 'flex',
  alignItems: 'center',
};

const checkboxCellStyle = {
  padding: '12px',
  fontSize: '12px',
  color: '#333',
  borderRight: '1px solid #eee',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const checkboxStyle = {
  width: '16px',
  height: '16px',
  cursor: 'pointer',
};

const bottomSectionStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '30px',
  marginTop: '30px',
};

const signatureBoxStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  backgroundColor: 'white',
  textAlign: 'center',
};

const signatureNameStyle = {
  fontSize: '13px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '5px',
};

const signatureValueStyle = {
  fontSize: '12px',
  color: '#333',
  padding: '8px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  backgroundColor: '#fafafa',
  marginBottom: '10px',
};

const signatureLabelStyle = {
  fontSize: '12px',
  color: '#333',
  marginBottom: '15px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '30px',
  gap: '15px',
};

const approveButtonStyle = {
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  padding: '8px 20px',
  fontSize: '13px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const submitButtonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  padding: '8px 20px',
  fontSize: '13px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const IA09 = () => {
  const [checkboxes, setCheckboxes] = useState({
    sesuai1: false,
    rekomendasi1: false,
    sesuai2: false,
    rekomendasi2: false,
    sesuai3: false,
    rekomendasi3: false,
  });

  const handleCheckboxChange = (name) => {
    setCheckboxes(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
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
        `}
      </style>
      
      <div style={navContainerStyle} className="nav-scrollbar">
        <NavAsesi activeTab="FR.IA.09" />
      </div>
      
      <div style={imageBannerStyle}>
        <h1 style={logoTextStyle}>MyLSP</h1>
      </div>
      
      <div style={contentCardStyle}>
        <div style={logoContainerStyle}>LSP</div>
        
        <div style={headerStyle}>
          <div style={titleStyle}>FR.IA.09</div>
          <div style={subtitleStyle}>PERTANYAAN WAWANCARA</div>
        </div>

        <div style={mainContainerStyle}>
          <div style={leftSectionStyle}>
            {/* Skema Sertifikasi */}
            <div style={sectionStyle}>
              <div style={sectionTitleStyle}>Skema Sertifikasi</div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Judul Unit</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}></span>
              </div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Nomor Unit</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}></span>
              </div>
            </div>

            {/* Form Fields */}
            <div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>TUK</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}>Sewaktu/Tempat Kerja/Mandiri* (coret yang tidak perlu)</span>
              </div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Nama Asesor</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}></span>
              </div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Nama Asesi</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}></span>
              </div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Bukti yang akan dikumpulkan</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}></span>
              </div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Tanggal</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}></span>
              </div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Waktu</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}></span>
              </div>
            </div>

            {/* Setiap pertanyaan */}
            <div>
              <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
                Setiap pertanyaan harus terkait dengan Elemen
              </div>
              <div style={{ fontSize: '12px', color: '#666', marginBottom: '15px' }}>
                Tuliskan bukti-bukti yang terdapat pada Ceklis Verifikasi Portofolio yang memerlukan wawancara
              </div>
              
              <div style={sectionStyle}>
                <div style={sectionTitleStyle}>Bukti-bukti Kompetensi</div>
                <div style={competencyListStyle}>
                  <div style={competencyItemStyle}>1.</div>
                  <div style={competencyItemStyle}>2.</div>
                  <div style={competencyItemStyle}>3.</div>
                </div>
              </div>
            </div>
          </div>

          <div style={rightSectionStyle}>
            {/* Unit Kompetensi */}
            <div style={sectionStyle}>
              <div style={sectionTitleStyle}>Unit Kompetensi</div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Kode Unit</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}>J.555HHR000.001.2</span>
              </div>
              <div style={fieldRowStyle}>
                <span style={labelStyle}>Judul Unit</span>
                <span style={colonStyle}>:</span>
                <span style={valueStyle}>Memproses Reservasi</span>
              </div>
            </div>

            {/* Table */}
            <div style={tableContainerStyle}>
              <div style={tableRowStyle}>
                <div style={tableHeaderStyle}>Daftar Pertanyaan Wawancara</div>
                <div style={tableHeaderStyle}>Rekomendasi</div>
                <div style={tableHeaderStyle}>Rekomendasi</div>
              </div>
              
              <div style={tableRowStyle}>
                <div style={tableCellStyle}>1. Sesuai dengan bukti :</div>
                <div style={checkboxCellStyle}>
                  <input 
                    type="checkbox" 
                    style={checkboxStyle}
                    checked={checkboxes.sesuai1}
                    onChange={() => handleCheckboxChange('sesuai1')}
                  />
                </div>
                <div style={checkboxCellStyle}>
                  <input 
                    type="checkbox" 
                    style={checkboxStyle}
                    checked={checkboxes.rekomendasi1}
                    onChange={() => handleCheckboxChange('rekomendasi1')}
                  />
                </div>
              </div>
              
              <div style={tableRowStyle}>
                <div style={tableCellStyle}>2. Sesuai dengan bukti :</div>
                <div style={checkboxCellStyle}>
                  <input 
                    type="checkbox" 
                    style={checkboxStyle}
                    checked={checkboxes.sesuai2}
                    onChange={() => handleCheckboxChange('sesuai2')}
                  />
                </div>
                <div style={checkboxCellStyle}>
                  <input 
                    type="checkbox" 
                    style={checkboxStyle}
                    checked={checkboxes.rekomendasi2}
                    onChange={() => handleCheckboxChange('rekomendasi2')}
                  />
                </div>
              </div>
              
              <div style={tableRowStyle}>
                <div style={tableCellStyle}>3. Sesuai dengan bukti :</div>
                <div style={checkboxCellStyle}>
                  <input 
                    type="checkbox" 
                    style={checkboxStyle}
                    checked={checkboxes.sesuai3}
                    onChange={() => handleCheckboxChange('sesuai3')}
                  />
                </div>
                <div style={checkboxCellStyle}>
                  <input 
                    type="checkbox" 
                    style={checkboxStyle}
                    checked={checkboxes.rekomendasi3}
                    onChange={() => handleCheckboxChange('rekomendasi3')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Signatures */}
        <div style={bottomSectionStyle}>
          <div style={signatureBoxStyle}>
            <div style={signatureNameStyle}>Nama Asesi</div>
            <div style={signatureValueStyle}>YUSMAYATI</div>
            <div style={signatureLabelStyle}>Persetujuan Asesi</div>
          </div>
          
          <div style={signatureBoxStyle}>
            <div style={signatureNameStyle}>Nama Asesor</div>
            <div style={signatureValueStyle}>ROSMANI</div>
            <div style={signatureLabelStyle}>Persetujuan Asesor</div>
          </div>
        </div>

        {/* Buttons */}
        <div style={buttonContainerStyle}>
          <button style={approveButtonStyle}>Setujui</button>
          <button style={submitButtonStyle}>Kirim Jawaban</button>
        </div>
      </div>
    </div>
  );
};

export default IA09;