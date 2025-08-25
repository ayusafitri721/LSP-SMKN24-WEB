import React, { useState } from 'react';
import { useAsesi } from '../context/AsesiContext'; // Import custom hook

function Asesi({ onBack, onNavigate}) {
  const [showAddNotif, setShowAddNotif] = useState(false);
  const { asesis, loading, error, fetchAsesis, addAsesi, editAsesi, removeAsesi } = useAsesi();
  
  const dataAsesis = asesis || [];

  const handleAddClick = () => {
    onNavigate('addasesi');
  };

  const handleDelete = (asesi) => {
    if (window.confirm(`Yakin ingin menghapus data asesi: ${asesi.nama_lengkap}?`)) {
      removeAsesi(asesi.id)
        .then(() => {
          fetchAsesis(); // Refresh data setelah hapus
        })
        .catch((err) => {
          alert(`Gagal menghapus data: ${err.message || err}`);
        });
    }
  };

  const handleEdit = (asesi) => {
    onNavigate('editasesi', asesi);
  };

  // Loading Component
  const LoadingSpinner = () => (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '80px 20px',
      flexDirection: 'column',
      gap: '16px',
      backgroundColor: 'white'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #ff7849',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <p style={{
        color: '#666',
        fontSize: '16px',
        margin: 0,
        fontWeight: '500'
      }}>
        Memuat data asesi...
      </p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );

  // Empty State Component
  const EmptyState = () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 20px',
      textAlign: 'center',
      gap: '20px',
      backgroundColor: 'white'
    }}>
      {/* Empty State Icon */}
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid #dee2e6'
      }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* Empty State Text */}
      <div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#495057',
          margin: '0 0 8px 0'
        }}>
          Belum Ada Data Asesi
        </h3>
        <p style={{
          fontSize: '16px',
          color: '#6c757d',
          margin: '0 0 24px 0',
          lineHeight: '1.5',
          maxWidth: '400px'
        }}>
          Mulai dengan menambahkan data asesi pertama untuk mengelola informasi peserta asesmen.
        </p>
      </div>

      {/* Add Asesi Button */}
      <button 
        onClick={() => onNavigate('addasesi')}
        style={{
          backgroundColor: '#ff7849',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: '500',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'background-color 0.2s',
          boxShadow: '0 2px 4px rgba(255, 120, 73, 0.2)'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#e55a00'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#ff7849'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Tambah Asesi Pertama
      </button>
    </div>
  );

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
          ASESI
        </h1>
        
        {/* Add button - Only show when not loading and has data */}
        {!loading && dataAsesis.length > 0 && (
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
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#e55a00'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#ff7849'}
            >
              + Tambah Data Baru
            </button>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div
        style={{
          backgroundColor: 'white',
          margin: '0',
          overflow: 'hidden',
          minHeight: 'calc(100vh - 81px)' // Adjust for header height
        }}
      >
        {loading ? (
          <LoadingSpinner />
        ) : dataAsesis.length === 0 ? (
          <EmptyState />
        ) : (
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
                    width: '120px',
                    border: '1px solid #dee2e6',
                  }}
                >
                  No KTP
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
                  Tempat Lahir
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
                  Tanggal Lahir
                </th>
                <th
                  style={{
                    padding: '12px 8px',
                    textAlign: 'center',
                    fontWeight: '600',
                    color: '#333',
                    fontSize: '12px',
                    width: '140px',
                    border: '1px solid #dee2e6',
                  }}
                >
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {dataAsesis.map((asesi, index) => (
                <tr
                  key={asesi.id || index}
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
                    {index + 1}
                  </td>
                  <td
                    style={{
                      padding: '10px 16px',
                      color: '#333',
                      fontSize: '12px',
                      border: '1px solid #dee2e6',
                    }}
                  >
                    {asesi.nama_lengkap}
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
                    {asesi.no_ktp}
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
                    {asesi.tempat_lahir}
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
                    {asesi.tanggal_lahir}
                  </td>
                  <td 
                    style={{ 
                      padding: '10px 8px', 
                      textAlign: 'center',
                      border: '1px solid #dee2e6',
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      gap: '6px',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <button
                        onClick={() => handleEdit(asesi)}
                        style={{
                          backgroundColor: '#ffc107',
                          color: '#212529',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '4px 8px',
                          fontSize: '11px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#e0a800'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#ffc107'}
                      >
                        Edit Data
                      </button>

                      <button
                        onClick={() => handleDelete(asesi)}
                        style={{
                          backgroundColor: '#dc3545',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '4px 8px',
                          fontSize: '11px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Add Success Modal - Center of screen */}
      {showAddNotif && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '40px 30px',
            textAlign: 'center',
            width: '300px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            position: 'relative'
          }}>
            {/* Check Icon */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#4A90E2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 25px auto'
            }}>
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Success Message */}
            <h2 style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#333333',
              margin: '0 0 25px 0',
              lineHeight: '1.4',
              paddingBottom: '25px',
              borderBottom: '1px solid #e0e0e0'
            }}>
              Data Berhasil<br />Ditambahkan!
            </h2>

            {/* OK Text */}
            <div
              onClick={() => {
                setShowAddNotif(false);
              }}
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#333333',
                cursor: 'pointer',
                fontFamily: 'inherit',
                userSelect: 'none'
              }}
            >
              Okay!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Asesi;