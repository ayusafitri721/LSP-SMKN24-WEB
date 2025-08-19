import React from 'react';

function Asesmen({ onBack, onNavigate, data  }) {
  const asesmenData = data || [
    { judul: "Erwin Alaskar Mega", program: "Rekayasa Perangkat Lunak", tanggal: "-" },
    { judul: "Erwin Alaskar Mega", program: "Rekayasa Perangkat Lunak", tanggal: "-" },
    { judul: "Erwin Alaskar Mega", program: "Rekayasa Perangkat Lunak", tanggal: "-" },
    { judul: "Erwin Alaskar Mega", program: "Perhotelan", tanggal: "-" },
    { judul: "Erwin Alaskar Mega", program: "Busana", tanggal: "-" },
    { judul: "Erwin Alaskar Mega", program: "Usaha Layanan Pariwisata", tanggal: "-" },
    { judul: "Erwin Alaskar Mega", program: "Kuliner", tanggal: "-" },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'Segoe UI, Roboto, sans-serif',
      backgroundColor: '#f0f0f0',
      padding: '16px'
    }}>
      
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
        <button
          onClick={onBack}
          style={{
            width: '24px',
            height: '24px',
            backgroundColor: '#4a9eff',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '8px',
            border: 'none',
            cursor: 'pointer',
            padding: 0
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 style={{ fontSize: '18px', fontWeight: '700', color: '#333', margin: 0 }}>
          ASESMEN
        </h1>
      </div>

      {/* Add button */}
      <div style={{ marginBottom: '16px', textAlign: 'right' }}>
        <button onClick={() => onNavigate && onNavigate('addasesmen')} style={{
          backgroundColor: '#ff9500',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '6px 12px',
          fontSize: '12px',
          fontWeight: '500',
          cursor: 'pointer'
        }}>
          + Tambah Data Baru
        </button>
      </div>

      {/* Table */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
          <thead>
            <tr style={{ backgroundColor: '#e8e8e8' }}>
              <th style={thStyle}>No</th>
              <th style={thStyle}>Judul Asesmen</th>
              <th style={thStyle}>Program</th>
              <th style={thStyle}>Tanggal Dibuat</th>
              <th style={thStyle}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {asesmenData.map((asesmen, index) => (
              <tr key={index}>
                <td style={tdStyleCenter}>{index + 1}</td>
                <td style={tdStyle}>{asesmen.judul}</td>
                <td style={tdStyleCenter}>{asesmen.program}</td>
                <td style={tdStyleCenter}>{asesmen.tanggal}</td>
                <td style={tdStyleCenter}>
                  <button onClick={() => onNavigate && onNavigate('editasesmen', asesmen)} style={{
                    backgroundColor: '#ffc107',
                    color: '#333',
                    border: 'none',
                    borderRadius: '3px',
                    padding: '4px 8px',
                    fontSize: '11px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}>
                    Edit Data
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle = {
  padding: '8px 12px',
  textAlign: 'center',
  fontWeight: '600',
  color: '#333',
  border: '1px solid #ccc'
};

const tdStyle = {
  padding: '8px 12px',
  color: '#333',
  border: '1px solid #ccc'
};

const tdStyleCenter = {
  ...tdStyle,
  textAlign: 'center'
};

export default Asesmen;