import React, { useState } from 'react';

function Skema({ onBack, onNavigate }) {
  const [data, setData] = useState([
    { 
      id: 1, 
      kodeSkema: 'A001', 
      judulSkema: 'USK RPL Pemrograman Dasar', 
      tanggal: 'MT001',
      jam: 'Pilihan Ganda',
      jumlahSiswa: 25 
    },
    { 
      id: 2, 
      kodeSkema: 'A002', 
      judulSkema: 'USK RPL Pemrograman Dasar', 
      tanggal: 'MT002',
      jam: 'Pilihan Ganda',
      jumlahSiswa: 30 
    },
    { 
      id: 3, 
      kodeSkema: 'A003', 
      judulSkema: 'USK RPL Pemrograman Dasar', 
      tanggal: 'MT003',
      jam: 'Pilihan Ganda',
      jumlahSiswa: 28 
    }
  ]);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleImportClick = () => {
    // Navigate to edit when import is clicked
    onNavigate('editskema');
  };

  const handleDeleteClick = (item) => {
    setItemToDelete(item);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      setData(data.filter(item => item.id !== itemToDelete.id));
      setShowDeleteConfirm(false);
      setShowDeleteSuccess(true);
      
      // Auto close success modal after 2 seconds
      setTimeout(() => {
        setShowDeleteSuccess(false);
        setItemToDelete(null);
      }, 2000);
    }
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
            onClick={handleImportClick}
            style={{
              backgroundColor: '#ff7849',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 12px',
              fontSize: '12px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="7,10 12,15 17,10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="12"
                y1="15"
                x2="12"
                y2="3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Import
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
                  width: '40px',
                  border: '1px solid #dee2e6',
                }}
              >
                Id
              </th>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '12px',
                  width: '100px',
                  border: '1px solid #dee2e6',
                }}
              >
                Kode Skema
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
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '12px',
                  width: '100px',
                  border: '1px solid #dee2e6',
                }}
              >
                Tanggal
              </th>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '12px',
                  width: '120px',
                  border: '1px solid #dee2e6',
                }}
              >
                Jam
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
                  {item.kodeSkema}
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
                    padding: '10px 16px',
                    color: '#333',
                    fontSize: '12px',
                    border: '1px solid #dee2e6',
                  }}
                >
                  {item.tanggal}
                </td>
                <td
                  style={{
                    padding: '10px 16px',
                    color: '#333',
                    fontSize: '12px',
                    border: '1px solid #dee2e6',
                  }}
                >
                  {item.jam}
                </td>
                <td 
                  style={{ 
                    padding: '10px 8px', 
                    textAlign: 'center',
                    border: '1px solid #dee2e6',
                  }}
                >
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    <button
                      onClick={() => handleDeleteClick(item)}
                      style={{
                        backgroundColor: '#ff7849',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '6px',
                        fontSize: '11px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '28px',
                        height: '28px'
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m2 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <line x1="10" y1="11" x2="10" y2="17" stroke="currentColor" strokeWidth="2"/>
                        <line x1="14" y1="11" x2="14" y2="17" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </button>
                    {/* View button - only for display, no function */}
                    <button
                      style={{
                        backgroundColor: '#ff7849',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '6px',
                        fontSize: '11px',
                        fontWeight: '500',
                        cursor: 'default',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '28px',
                        height: '28px'
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <rect
                          x="3"
                          y="3"
                          width="7"
                          height="7"
                          rx="1"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                        <rect
                          x="14"
                          y="3"
                          width="7"
                          height="7"
                          rx="1"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                        <rect
                          x="3"
                          y="14"
                          width="7"
                          height="7"
                          rx="1"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                        <rect
                          x="5"
                          y="5"
                          width="3"
                          height="3"
                          fill="currentColor"
                        />
                        <rect
                          x="16"
                          y="5"
                          width="3"
                          height="3"
                          fill="currentColor"
                        />
                        <rect
                          x="5"
                          y="16"
                          width="3"
                          height="3"
                          fill="currentColor"
                        />
                        <rect
                          x="14"
                          y="14"
                          width="3"
                          height="3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                        />
                        <rect
                          x="18"
                          y="14"
                          width="3"
                          height="3"
                          fill="currentColor"
                        />
                        <rect
                          x="14"
                          y="18"
                          width="7"
                          height="3"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && itemToDelete && (
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
            padding: '30px',
            textAlign: 'center',
            width: '280px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            position: 'relative'
          }}>
            <h2 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#333333',
              margin: '0 0 30px 0',
              lineHeight: '1.5'
            }}>
              Anda Yakin<br />
              Menghapus Assessment<br />
              ini?
            </h2>

            {/* Location pin icon */}
            <div style={{
              width: '60px',
              height: '70px',
              margin: '0 auto 30px auto',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
                <path
                  d="M30 5C19.5 5 11 13.5 11 24C11 39 30 60 30 60s19-21 19-36C49 13.5 40.5 5 30 5z"
                  fill="#dc3545"
                  stroke="#dc3545"
                  strokeWidth="2"
                />
                <circle cx="30" cy="24" r="15" fill="white"/>
                <rect x="27" y="15" width="6" height="12" rx="1" fill="#dc3545"/>
                <circle cx="30" cy="31" r="3" fill="#dc3545"/>
              </svg>
            </div>

            <div style={{
              display: 'flex',
              borderTop: '1px solid #e0e0e0'
            }}>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRight: '1px solid #e0e0e0',
                  padding: '15px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#333',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  flex: 1
                }}
              >
                Lanjutkan
              </button>
              
              <button
                onClick={() => setShowDeleteConfirm(false)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  padding: '15px',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#dc3545',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  flex: 1
                }}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Success Modal */}
      {showDeleteSuccess && (
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
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#28a745',
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

            <h2 style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#333333',
              margin: '0 0 25px 0',
              lineHeight: '1.4',
              paddingBottom: '25px',
              borderBottom: '1px solid #e0e0e0'
            }}>
              Data Berhasil<br />Dihapus! 
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skema;