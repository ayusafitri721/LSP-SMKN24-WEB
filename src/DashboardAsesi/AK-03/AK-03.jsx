// src/DashboardAsesi/AK-03/AK-03.jsx

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
  backgroundColor: '#1a73e8', // Warna biru dari gambar
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
};

const AK03 = () => {
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
        <NavAsesi activeTab="FR.AK.03" />
      </div>

      <div style={imageBannerStyle}>
        <h1 style={logoTextStyle}>
          MyLSP
        </h1>
      </div>

      <div style={formContainerStyle}>
        <h2 style={formHeaderStyle}>FR.AK.03.ASESMEN DAN KERAHASIAAN</h2>
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td style={tableCellStyle}>Skema Sertifikasi (KODE/OKUPASI/KLASTER)</td>
              <td style={tableCellStyle}>:</td>
              <td style={tableCellStyle}></td>
              <td style={tableCellStyle}>Judul Unit</td>
              <td style={tableCellStyle}>:</td>
              <td style={tableCellStyle}></td>
            </tr>
            <tr>
              <td style={tableCellStyle}>TUK</td>
              <td style={tableCellStyle}>:</td>
              <td style={tableCellStyle}></td>
              <td style={tableCellStyle}>Kode Unit</td>
              <td style={tableCellStyle}>:</td>
              <td style={tableCellStyle}></td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Nama Asesor</td>
              <td style={tableCellStyle}>:</td>
              <td style={tableCellStyle}></td>
              <td style={tableCellStyle}></td>
              <td style={tableCellStyle}></td>
              <td style={tableCellStyle}></td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Nama Asesi</td>
              <td style={tableCellStyle}>:</td>
              <td style={tableCellStyle}></td>
              <td style={tableCellStyle}></td>
              <td style={tableCellStyle}></td>
              <td style={tableCellStyle}></td>
            </tr>
            <tr>
              <td style={tableCellStyle}>Tanggal</td>
              <td style={tableCellStyle}>:</td>
              <td style={tableCellStyle}></td>
              <td style={tableCellStyle}></td>
              <td style={tableCellStyle}></td>
              <td style={tableCellStyle}></td>
            </tr>
          </tbody>
        </table>

        <p style={{ textAlign: 'center' }}>Umpan balik dari Asesi (diisi oleh Asesi setelah pengambilan keputusan)</p>

        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px' }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={{ ...tableHeaderStyle, width: '70%', border: '1px solid #ccc' }}>Komponen</th>
                <th style={{ ...tableHeaderStyle, width: '15%', border: '1px solid #ccc', textAlign: 'center' }}>
                  Ya
                </th>
                <th style={{ ...tableHeaderStyle, width: '15%', border: '1px solid #ccc', textAlign: 'center' }}>
                  Tidak
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tableCellStyle}>
                  Saya mendapatkan penjelasan yang cukup memadai mengenai proses asesmen/uji kompetensi.
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  Saya diberikan kesempatan untuk mempelajari standar kompetensi yang akan diujikan dan menilai diri sendiri terhadap pencapaiannya.
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  Asesor memberikan kesempatan untuk mendiskusikan/menegosiasikan metoda, instrumen dan sumber asesmen serta jadwal asesmen.
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  Asesor berusaha menggali seluruh bukti pendukung yang sesuai dengan latar belakang pelatihan dan pengalaman yang saya miliki.
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  Saya sepenuhnya diberikan kesempatan untuk mendemonstrasikan kompetensi yang saya miliki selama asesmen.
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  Saya mendapatkan penjelasan yang memadai mengenai keputusan asesmen.
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  Asesor memberikan umpan balik yang mendukung setelah asesmen serta tidak lanjutnya.
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  Asesor bersama saya mempelajari semua dokumen asesmen serta menandatanganinya.
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  Saya mendapatkan jaminan kerahasiaan hasil asesmen serta penjelasan penanganan dokumen asesmen.
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
              </tr>
              <tr>
                <td style={tableCellStyle}>
                  Asesor menggunakan keterampilan komunikasi yang efektif selama asesmen.
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
                <td style={{ ...tableCellStyle, textAlign: 'center' }}>
                  <input type="checkbox" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '20px' }}>
          <p>Catatan/ komentar lainnya (apabila ada):</p>
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
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <button style={buttonStyle}>
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default AK03;