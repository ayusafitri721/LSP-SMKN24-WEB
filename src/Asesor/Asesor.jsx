import React from 'react';

function Asesor({ onBack, onNavigate, asesorData, setAsesorData }) {
  const handleAddClick = () => {
    onNavigate('addasesor');
  };

  const handleEdit = (asesor) => {
    onNavigate('editasesor', asesor);
  };

  // Sample data if asesorData is empty
  const sampleData = asesorData && asesorData.length > 0 ? asesorData : [
    { id: 1, no: 1, nama: 'Arul Maulia Singa, M.Kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2004' },
    { id: 2, no: 2, nama: 'Arul Maulia Singa, M.Kom', pekerjaan: 'Guru', sertifikat: 'Tidak Tersertifikasi', tanggal: '22/8/2004' },
    { id: 3, no: 3, nama: 'Arul Maulia Singa, M.Kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2004' },
    { id: 4, no: 4, nama: 'Arul Maulia Singa, M.Kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2004' },
    { id: 5, no: 5, nama: 'Arul Maulia Singa, M.Kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2004' },
    { id: 6, no: 6, nama: 'Arul Maulia Singa, M.Kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2004' },
    { id: 7, no: 7, nama: 'Arul Maulia Singa, M.Kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2004' },
    { id: 8, no: 8, nama: 'Arul Maulia Singa, M.Kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2004' },
    { id: 9, no: 9, nama: 'Arul Maulia Singa, M.Kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2004' },
    { id: 10, no: 10, nama: 'Arul Maulia Singa, M.Kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2004' },
    { id: 11, no: 11, nama: 'Arul Maulia Singa, M.Kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2004' },
    { id: 12, no: 12, nama: 'Arul Maulia Singa, M.Kom', pekerjaan: 'Guru', sertifikat: 'Tersertifikasi', tanggal: '22/8/2004' }
  ];

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
          ASESOR
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
                Nama Lengkap
              </th>
              <th
                style={{
                  padding: '12px 8px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '12px',
                  width: '100px',
                  border: '1px solid #dee2e6',
                }}
              >
                Pekerjaan
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
                Sertifikasi
              </th>
              <th
                style={{
                  padding: '12px 8px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '12px',
                  width: '100px',
                  border: '1px solid #dee2e6',
                }}
              >
                Tanggal Daftar
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
            {sampleData.map((asesor, index) => (
              <tr
                key={asesor.id || index}
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
                  {asesor.no || index + 1}
                </td>
                <td
                  style={{
                    padding: '10px 16px',
                    color: '#333',
                    fontSize: '12px',
                    border: '1px solid #dee2e6',
                  }}
                >
                  {asesor.nama}
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
                  {asesor.pekerjaan}
                </td>
                <td 
                  style={{ 
                    padding: '10px 8px', 
                    textAlign: 'center', 
                    fontSize: '12px',
                    border: '1px solid #dee2e6',
                  }}
                >
                  <span
                    style={{
                      color:
                        asesor.sertifikat === 'Tersertifikasi'
                          ? '#28a745'
                          : asesor.sertifikat === 'Tidak Tersertifikasi'
                          ? '#dc3545'
                          : '#6c757d',
                      fontWeight: '500',
                    }}
                  >
                    {asesor.sertifikat}
                  </span>
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
                  {asesor.tanggal}
                </td>
                <td 
                  style={{ 
                    padding: '10px 8px', 
                    textAlign: 'center',
                    border: '1px solid #dee2e6',
                  }}
                >
                  <button
                    onClick={() => handleEdit(asesor)}
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

export default Asesor;