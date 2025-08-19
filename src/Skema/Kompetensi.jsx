import React, { useState } from 'react';

function Skema({ onBack, onNavigate }) {
  const [data, setData] = useState([
    { id: 1, judulSkema: 'Rekayasa Perangkat Lunak', jumlahSiswa: 25 },
    { id: 2, judulSkema: 'Rekayasa Perangkat Lunak', jumlahSiswa: 30 },
    { id: 3, judulSkema: 'Rekayasa Perangkat Lunak', jumlahSiswa: 28 },
    { id: 4, judulSkema: 'Perhotelan', jumlahSiswa: 22 },
    { id: 5, judulSkema: 'Busana', jumlahSiswa: 20 },
    { id: 6, judulSkema: 'Usaha Layanan Pariwisata', jumlahSiswa: 18 },
    { id: 7, judulSkema: 'Kuliner', jumlahSiswa: 24 }
  ]);

  const handleEditClick = (id) => {
    const item = data.find(d => d.id === id);
    onNavigate('editskema', item);
  };

  const handleAddClick = () => {
    onNavigate('addskema');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: '#f0f0f0',
        padding: '0',
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #dee2e6',
        }}
      >
        <button
          onClick={onBack}
          style={{
            width: '24px',
            height: '24px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            marginRight: '10px',
            padding: 0,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1
          style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#333',
            margin: 0,
          }}
        >
          SKEMA
        </h1>
        <div style={{ marginLeft: 'auto' }}>
          <button
            onClick={handleAddClick}
            style={{
              backgroundColor: '#ff7849',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '12px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            + Tambah Data Baru
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div
        style={{
          backgroundColor: 'white',
          margin: '0',
          overflow: 'hidden',
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '12px',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th
                style={{
                  padding: '12px 8px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '12px',
                  width: '50px',
                  border: '1px solid #dee2e6',
                }}
              >
                No
              </th>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '12px',
                  border: '1px solid #dee2e6',
                }}
              >
                Judul Skema
              </th>
              <th
                style={{
                  padding: '12px 8px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '12px',
                  width: '120px',
                  border: '1px solid #dee2e6',
                }}
              >
                Jumlah Siswa
              </th>
              <th
                style={{
                  padding: '12px 8px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '12px',
                  width: '80px',
                  border: '1px solid #dee2e6',
                }}
              >
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                style={{
                  backgroundColor: 'white',
                }}
              >
                <td
                  style={{
                    padding: '10px 8px',
                    textAlign: 'center',
                    color: '#333',
                    fontSize: '12px',
                    border: '1px solid #dee2e6',
                  }}
                >
                  {item.id}
                </td>
                <td
                  style={{
                    padding: '10px 16px',
                    color: '#333',
                    fontSize: '12px',
                    border: '1px solid #dee2e6',
                  }}
                >
                  {item.judulSkema}
                </td>
                <td
                  style={{
                    padding: '10px 8px',
                    textAlign: 'center',
                    color: '#333',
                    fontSize: '12px',
                    border: '1px solid #dee2e6',
                  }}
                >
                  {item.jumlahSiswa}
                </td>
                <td 
                  style={{ 
                    padding: '10px 8px', 
                    textAlign: 'center',
                    border: '1px solid #dee2e6',
                  }}
                >
                  <button
                    onClick={() => handleEditClick(item.id)}
                    style={{
                      backgroundColor: '#ffc107',
                      color: '#212529',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '4px 8px',
                      fontSize: '11px',
                      fontWeight: '500',
                      cursor: 'pointer',
                    }}
                  >
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

export default Skema;