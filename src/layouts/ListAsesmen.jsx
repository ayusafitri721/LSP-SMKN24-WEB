import React, { useState } from 'react';

function ListAsesmen({ onBack, onNavigate, assessmentData, setAssessmentData }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Sample data untuk demo sesuai dengan design
  const sampleData = [
    {
      id: 1,
      namaJadwal: 'USK RPL Pemrograman Dasar',
      tuk: 'Sewaktu/Tempat Kerja/Mandiri',
      nisn: '0071585059',
      tanggalUjian: '9/7/2025',
      status: 'aktif',
      pembiayaan: 'Dibayar Penuh'
    },
    // Tambahkan data lain jika diperlukan
  ];

  const dataToUse = assessmentData && assessmentData.length > 0 ? assessmentData : sampleData;

  // Filter data berdasarkan search term
  const filteredData = dataToUse.filter(item =>
    item.namaJadwal.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tuk.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.nisn && item.nisn.toString().includes(searchTerm.toLowerCase()))
  );

  const handleOpenDeleteModal = (item) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setItemToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete) {
      if (assessmentData && assessmentData.length > 0) {
        setAssessmentData(assessmentData.filter(item => item.id !== itemToDelete.id));
      }
    }
    handleCloseDeleteModal();
  };

  // Simple icon components
  const AddIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );

  const AssessmentIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );

  const AsesorIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6f42c1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );

  const SearchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );

  const WarningIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  );

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      boxSizing: 'border-box',
      width: '100%',
      maxWidth: 'calc(100vw - 250px)',
      margin: '0',
    }}>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#1a1a1a',
          margin: '0'
        }}>
          Assessment
        </h1>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '40px',
        flexWrap: 'wrap',
        maxWidth: '50%',
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          minWidth: '200px',
          flex: 1,
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px'
            }}>
              <span style={{
                fontSize: '14px',
                color: '#666',
                fontWeight: '500'
              }}>Total Assessment</span>
              <span style={{ 
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <AssessmentIcon />
              </span>
            </div>
            <div style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1a1a1a',
            }}>50</div>
          </div>
        </div>

        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          minWidth: '200px',
          flex: 1,
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px'
            }}>
              <span style={{
                fontSize: '14px',
                color: '#666',
                fontWeight: '500'
              }}>Jumlah Asesor</span>
              <span style={{ 
                backgroundColor: 'rgba(111, 66, 193, 0.1)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <AsesorIcon />
              </span>
            </div>
            <div style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1a1a1a',
            }}>10</div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ marginBottom: '30px', maxWidth: '300px' }}>
        <div style={{ 
          position: 'relative', 
          width: '100%',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          borderRadius: '6px',
        }}>
          <input
            type="text"
            placeholder="Cari"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 35px 10px 12px',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontSize: '13px',
              outline: 'none',
              backgroundColor: '#ffffff',
              boxSizing: 'border-box',
              transition: 'border-color 0.2s ease'
            }}
            onFocus={(e) => e.target.style.borderColor = '#007bff'}
            onBlur={(e) => e.target.style.borderColor = '#ddd'}
          />
          <span style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#999',
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <SearchIcon />
          </span>
        </div>
      </div>

      {/* Assessment List Header with Add Button */}
      <div style={{
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#1a1a1a',
          margin: 0
        }}>
          Daftar Assessment
        </h2>
        <button
          onClick={() => onNavigate && onNavigate('addlistasesmen')}
          style={{
            backgroundColor: '#fd7e14',
            color: '#ffffff',
            padding: '10px 20px',
            borderRadius: '20px',
            border: 'none',
            fontSize: '14px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'background-color 0.2s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#e96a00'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#fd7e14'}
        >
          <AddIcon /> Tambah Data Baru
        </button>
      </div>

      {/* Table */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '900px'
          }}>
            <thead>
              <tr style={{
                backgroundColor: '#f8f9fa',
                borderBottom: '2px solid #dee2e6'
              }}>
                <th style={{
                  padding: '16px 20px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#495057',
                  borderRight: '1px solid #dee2e6',
                  width: '60px'
                }}>No</th>
                <th style={{
                  padding: '16px 20px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#495057',
                  borderRight: '1px solid #dee2e6',
                  minWidth: '250px'
                }}>Nama Jadwal</th>
                <th style={{
                  padding: '16px 20px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#495057',
                  borderRight: '1px solid #dee2e6',
                  minWidth: '180px'
                }}>TUK</th>
                <th style={{
                  padding: '16px 20px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#495057',
                  borderRight: '1px solid #dee2e6',
                  minWidth: '120px'
                }}>NISN</th>
                <th style={{
                  padding: '16px 20px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#495057',
                  borderRight: '1px solid #dee2e6',
                  minWidth: '120px'
                }}>Tanggal Ujian</th>
                <th style={{
                  padding: '16px 20px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#495057',
                  borderRight: '1px solid #dee2e6',
                  minWidth: '100px'
                }}>Status</th>
                <th style={{
                  padding: '16px 20px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#495057',
                  minWidth: '100px'
                }}>Lihat</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={item.id} style={{
                    borderBottom: '1px solid #dee2e6',
                    backgroundColor: '#ffffff'
                  }}>
                    <td style={{
                      padding: '20px',
                      textAlign: 'center',
                      fontSize: '14px',
                      color: '#495057',
                      borderRight: '1px solid #dee2e6',
                      verticalAlign: 'middle'
                    }}>
                      {index + 1}.
                    </td>
                    <td style={{
                      padding: '20px',
                      fontSize: '14px',
                      color: '#212529',
                      fontWeight: '500',
                      borderRight: '1px solid #dee2e6',
                      verticalAlign: 'middle'
                    }}>
                      {item.namaJadwal}
                    </td>
                    <td style={{
                      padding: '20px',
                      fontSize: '14px',
                      color: '#495057',
                      borderRight: '1px solid #dee2e6',
                      verticalAlign: 'middle'
                    }}>
                      {item.tuk}
                    </td>
                    <td style={{
                      padding: '20px',
                      textAlign: 'center',
                      fontSize: '14px',
                      color: '#495057',
                      borderRight: '1px solid #dee2e6',
                      verticalAlign: 'middle'
                    }}>
                      {item.nisn || item.asesor || '-'}
                    </td>
                    <td style={{
                      padding: '20px',
                      textAlign: 'center',
                      fontSize: '14px',
                      color: '#495057',
                      borderRight: '1px solid #dee2e6',
                      verticalAlign: 'middle'
                    }}>
                      {item.tanggalUjian}
                    </td>
                    <td style={{
                      padding: '20px',
                      textAlign: 'center',
                      borderRight: '1px solid #dee2e6',
                      verticalAlign: 'middle'
                    }}>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        backgroundColor: '#28a745',
                        borderRadius: '2px',
                        margin: '0 auto'
                      }}></div>
                    </td>
                    <td style={{
                      padding: '20px',
                      textAlign: 'center',
                      verticalAlign: 'middle'
                    }}>
                      <button style={{
                        backgroundColor: '#fd7e14',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '6px 16px',
                        fontSize: '12px',
                        cursor: 'pointer',
                        fontWeight: '500',
                        minWidth: '60px',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#e96a00'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#fd7e14'}
                      onClick={() => onNavigate && onNavigate('lihatlistasesmen', item)} // Changed from 'detailasesmen' to 'lihatlistasesmen'
                      >
                        Lihat
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{
                    padding: '40px',
                    textAlign: 'center',
                    color: '#999',
                    fontSize: '14px'
                  }}>
                    {searchTerm ? 'Tidak ada data yang sesuai dengan pencarian' : 'Belum ada data assessment'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && itemToDelete && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '0',
            width: '100%',
            maxWidth: '380px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            overflow: 'hidden',
          }}>
            <div style={{
              backgroundColor: '#dc3545',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '30px auto 20px',
            }}>
              <WarningIcon />
            </div>

            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#333',
              margin: '0 0 15px 0',
              padding: '0 20px',
            }}>
              Anda Yakin
            </h3>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#333',
              margin: '0 0 15px 0',
              padding: '0 20px',
            }}>
              Menghapus Data
            </h3>

            <p style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#333',
              margin: '0 0 30px 0',
              padding: '0 20px',
            }}>
              "{itemToDelete.namaJadwal}"?
            </p>

            <div style={{
              height: '1px',
              backgroundColor: '#e0e0e0',
              margin: '0 0 0 0',
            }}></div>

            <div style={{
              display: 'flex',
              height: '50px',
            }}>
              <button
                onClick={handleCloseDeleteModal}
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  color: '#666',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  borderRight: '1px solid #e0e0e0',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Batal
              </button>
              <button
                onClick={handleConfirmDelete}
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  color: '#dc3545',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListAsesmen;