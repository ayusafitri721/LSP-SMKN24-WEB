// src/DashboardAsesi/AK-05/AK-05.jsx

import React from 'react';
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

const formContainerStyle = {
  backgroundColor: 'white',
  borderRadius: '15px',
  padding: '25px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  marginTop: '20px',
};

const formHeaderStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  fontWeight: 'bold',
  fontSize: '24px',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '20px',
};

const tableHeaderStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  backgroundColor: '#f2f2f2',
  textAlign: 'left',
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
};

const buttonStyle = {
  backgroundColor: '#1a73e8',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
};

const greyButtonStyle = {
  backgroundColor: '#ccc',
  color: '#666',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'not-allowed',
  fontSize: '16px',
  fontWeight: 'bold',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
};

const AK05 = () => {
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
        <NavAsesi activeTab="FR.AK.05" />
      </div>

      <div style={imageBannerStyle}>
        <h1 style={logoTextStyle}>
          MyLSP
        </h1>
      </div>

      <div style={formContainerStyle}>
        <h2 style={formHeaderStyle}>FR.AK.05.LAPORAN ASESMEN</h2>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td style={{ ...tableCellStyle, width: '25%' }}>Skema Sertifikasi (KODE/OKUPASI/KLASTER)</td>
              <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
              <td style={{ ...tableCellStyle, width: '24%' }}></td>
              <td style={{ ...tableCellStyle, width: '25%' }}>Judul Unit</td>
              <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
              <td style={{ ...tableCellStyle, width: '24%' }}></td>
            </tr>
            <tr>
              <td style={{ ...tableCellStyle, width: '25%' }}>TUK</td>
              <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
              <td style={{ ...tableCellStyle, width: '24%' }}></td>
              <td style={{ ...tableCellStyle, width: '25%' }}>Kode Unit</td>
              <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
              <td style={{ ...tableCellStyle, width: '24%' }}></td>
            </tr>
            <tr>
              <td style={{ ...tableCellStyle, width: '25%' }}>Nama Asesor</td>
              <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
              <td style={{ ...tableCellStyle, width: '24%' }}></td>
              <td style={{ ...tableCellStyle, width: '25%' }}></td>
              <td style={{ ...tableCellStyle, width: '1%' }}></td>
              <td style={{ ...tableCellStyle, width: '24%' }}></td>
            </tr>
            <tr>
              <td style={{ ...tableCellStyle, width: '25%' }}>Nama Asesi</td>
              <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
              <td style={{ ...tableCellStyle, width: '24%' }}></td>
              <td style={{ ...tableCellStyle, width: '25%' }}></td>
              <td style={{ ...tableCellStyle, width: '1%' }}></td>
              <td style={{ ...tableCellStyle, width: '24%' }}></td>
            </tr>
            <tr>
              <td style={{ ...tableCellStyle, width: '25%' }}>Tanggal</td>
              <td style={{ ...tableCellStyle, width: '1%' }}>:</td>
              <td style={{ ...tableCellStyle, width: '24%' }}></td>
              <td style={{ ...tableCellStyle, width: '25%' }}></td>
              <td style={{ ...tableCellStyle, width: '1%' }}></td>
              <td style={{ ...tableCellStyle, width: '24%' }}></td>
            </tr>
          </tbody>
        </table>

        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
          <table style={{ ...tableStyle, border: 'none' }}>
            <thead>
              <tr>
                <th style={{ ...tableHeaderStyle, width: '5%', border: '1px solid #ccc', textAlign: 'center' }}>No</th>
                <th style={{ ...tableHeaderStyle, width: '25%', border: '1px solid #ccc', textAlign: 'center' }}>Nama Asesi</th>
                <th style={{ ...tableHeaderStyle, width: '20%', border: '1px solid #ccc', textAlign: 'center' }}>Rekomendasi</th>
                <th style={{ ...tableHeaderStyle, width: '50%', border: '1px solid #ccc', textAlign: 'center' }}>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>1.</td>
                <td style={tableCellStyle}></td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  K <input type="checkbox" />
                  &nbsp; &nbsp; &nbsp;
                  BK <input type="checkbox" />
                </td>
                <td style={tableCellStyle}></td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>2.</td>
                <td style={tableCellStyle}></td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  K <input type="checkbox" />
                  &nbsp; &nbsp; &nbsp;
                  BK <input type="checkbox" />
                </td>
                <td style={tableCellStyle}></td>
              </tr>
              <tr>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>3.</td>
                <td style={tableCellStyle}></td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  K <input type="checkbox" />
                  &nbsp; &nbsp; &nbsp;
                  BK <input type="checkbox" />
                </td>
                <td style={tableCellStyle}></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: '12px', marginTop: '10px' }}>
          **tuliskan Kode dan Judul Unit Kompetensi yang dinyatakan BK bila mengses satu skema
        </p>

        <div style={{ marginTop: '20px' }}>
          <p>1. Aspek Negatif dan Positif dalam Asesmen</p>
          <textarea
            style={{
              width: '100%',
              minHeight: '100px',
              padding: '10px',
              boxSizing: 'border-box',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          ></textarea>
        </div>

        <div style={{ marginTop: '20px' }}>
          <p>2. Pencatatan Penolakan Hasil Asesmen</p>
          <textarea
            style={{
              width: '100%',
              minHeight: '100px',
              padding: '10px',
              boxSizing: 'border-box',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          ></textarea>
        </div>

        <div style={{ marginTop: '20px' }}>
          <p>3. Saran perbaikan: (Asesor/PersonilTerkait)</p>
          <textarea
            style={{
              width: '100%',
              minHeight: '100px',
              padding: '10px',
              boxSizing: 'border-box',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          ></textarea>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
          <div>
            <p>Nama Asesor</p>
            <input
              type="text"
              style={{
                width: '100%',
                padding: '10px',
                boxSizing: 'border-box',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
            <p style={{ marginTop: '10px' }}>No.Reg</p>
            <input
              type="text"
              style={{
                width: '100%',
                padding: '10px',
                boxSizing: 'border-box',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
            <p style={{ marginTop: '20px' }}>Persetujuan Asesi</p>
            <button style={{ ...greyButtonStyle, display: 'block', width: '100%' }}>
              Approve
            </button>
          </div>
          <div>
            <p>Catatan</p>
            <textarea
              style={{
                width: '100%',
                minHeight: '200px',
                padding: '10px',
                boxSizing: 'border-box',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            ></textarea>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <button style={buttonStyle}>
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default AK05;