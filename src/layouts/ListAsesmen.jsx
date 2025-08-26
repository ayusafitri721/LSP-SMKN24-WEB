import React, { useState } from 'react';

function ListAsesmen({ onBack, onNavigate, assessmentData, setAssessmentData }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Data dummy sesuai dengan gambar
  const sampleData = [
    {
      id: 'A001',
      namaAssessment: 'USK RPL Pemrograman Dasar',
      kode: 'MT001',
      skema: 'Pilihan Ganda',
      tanggalUjian: '2025-08-20',
      tuk: 'Jakarta Timur',
      asesor: 'Dr.Jamaludin',
      status: 'aktif'
    },
    {
      id: 'A002',
      namaAssessment: 'USK RPL Pemrograman Dasar',
      kode: 'MT002',
      skema: 'Pilihan Ganda',
      tanggalUjian: '2025-08-20',
      tuk: 'Jakarta Timur',
      asesor: 'Dr.Jamaludin',
      status: 'tidak-aktif'
    },
    {
      id: 'A003',
      namaAssessment: 'USK RPL Pemrograman Dasar',
      kode: 'MT003',
      skema: 'Pilihan Ganda',
      tanggalUjian: '2025-08-20',
      tuk: 'Jakarta Timur',
      asesor: 'Dr.Jamaludin',
      status: 'tidak-aktif'
    }
  ];

  // Filter data berdasarkan search term
  const filteredData = sampleData.filter(item => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      item.namaAssessment.toLowerCase().includes(searchLower) ||
      item.kode.toLowerCase().includes(searchLower) ||
      item.id.toLowerCase().includes(searchLower) ||
      item.asesor.toLowerCase().includes(searchLower)
    );
  });

  const handleBackClick = () => {
    if (onBack && typeof onBack === 'function') {
      onBack();
    } else {
      console.log('Back clicked');
    }
  };

  // Button pertama untuk "Lihat" - mengarah ke LihatListAsesmen
  const handleLihatClick = (item) => {
    if (onNavigate && typeof onNavigate === 'function') {
      onNavigate('lihatlistasesmen', item);
    } else {
      console.log('Lihat clicked for:', item.id);
    }
  };

  // Button kedua untuk action lainnya (Chart/Analytics)
  const handleAnalyticsClick = (item) => {
    if (onNavigate && typeof onNavigate === 'function') {
      onNavigate('analytics', item);
    } else {
      console.log('Analytics clicked for:', item.id);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      width: '100%',
      maxWidth: 'calc(100vw - 250px)',
      margin: '0',
      boxSizing: 'border-box'
    }}>
      {/* Header with Back Button */}
      <div style={{ 
        marginBottom: '30px',
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
      }}>
        <button
          onClick={handleBackClick}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6c757d',
            fontSize: '0'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '600',
          color: '#212529',
          margin: '0'
        }}>
          Assessment
        </h1>
      </div>

      {/* Search Bar */}
      <div style={{ 
        marginBottom: '30px',
        maxWidth: '300px'
      }}>
        <div style={{ 
          position: 'relative',
          width: '100%'
        }}>
          <input
            type="text"
            placeholder="Cari"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 40px 12px 16px',
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none',
              backgroundColor: '#ffffff',
              boxSizing: 'border-box',
              transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#86b7fe';
              e.target.style.boxShadow = '0 0 0 0.25rem rgba(13, 110, 253, 0.25)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#dee2e6';
              e.target.style.boxShadow = 'none';
            }}
          />
          <span style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
        </div>
      </div>

      {/* Table Container */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #dee2e6',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            minWidth: '1200px'
          }}>
            <thead>
              <tr style={{
                backgroundColor: '#f8f9fa',
              }}>
                <th style={{
                  padding: '16px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#495057',
                  borderBottom: '1px solid #dee2e6',
                  borderRight: '1px solid #dee2e6',
                  width: '80px'
                }}>Id</th>
                <th style={{
                  padding: '16px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#495057',
                  borderBottom: '1px solid #dee2e6',
                  borderRight: '1px solid #dee2e6',
                  minWidth: '200px'
                }}>Nama Assessment</th>
                <th style={{
                  padding: '16px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#495057',
                  borderBottom: '1px solid #dee2e6',
                  borderRight: '1px solid #dee2e6',
                  width: '100px'
                }}>Kode</th>
                <th style={{
                  padding: '16px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#495057',
                  borderBottom: '1px solid #dee2e6',
                  borderRight: '1px solid #dee2e6',
                  width: '120px'
                }}>Skema</th>
                <th style={{
                  padding: '16px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#495057',
                  borderBottom: '1px solid #dee2e6',
                  borderRight: '1px solid #dee2e6',
                  width: '120px'
                }}>Tanggal Ujian</th>
                <th style={{
                  padding: '16px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#495057',
                  borderBottom: '1px solid #dee2e6',
                  borderRight: '1px solid #dee2e6',
                  width: '120px'
                }}>TUK</th>
                <th style={{
                  padding: '16px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#495057',
                  borderBottom: '1px solid #dee2e6',
                  borderRight: '1px solid #dee2e6',
                  width: '120px'
                }}>Asesor</th>
                <th style={{
                  padding: '16px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#495057',
                  borderBottom: '1px solid #dee2e6',
                  borderRight: '1px solid #dee2e6',
                  width: '80px'
                }}>Status</th>
                <th style={{
                  padding: '16px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#495057',
                  borderBottom: '1px solid #dee2e6',
                  width: '120px'
                }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredData && filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={item.id} style={{
                    borderBottom: index === filteredData.length - 1 ? 'none' : '1px solid #dee2e6',
                    backgroundColor: '#ffffff',
                    transition: 'background-color 0.15s ease-in-out'
                  }}
                  onMouseEnter={(e) => e.target.closest('tr').style.backgroundColor = '#f8f9fa'}
                  onMouseLeave={(e) => e.target.closest('tr').style.backgroundColor = '#ffffff'}
                  >
                    <td style={{
                      padding: '16px',
                      textAlign: 'center',
                      fontSize: '14px',
                      color: '#495057',
                      borderRight: '1px solid #dee2e6',
                      verticalAlign: 'middle'
                    }}>
                      {item.id}
                    </td>
                    <td style={{
                      padding: '16px',
                      fontSize: '14px',
                      color: '#212529',
                      borderRight: '1px solid #dee2e6',
                      verticalAlign: 'middle',
                      textAlign: 'left'
                    }}>
                      {item.namaAssessment}
                    </td>
                    <td style={{
                      padding: '16px',
                      textAlign: 'center',
                      fontSize: '14px',
                      color: '#495057',
                      borderRight: '1px solid #dee2e6',
                      verticalAlign: 'middle'
                    }}>
                      {item.kode}
                    </td>
                    <td style={{
                      padding: '16px',
                      textAlign: 'center',
                      fontSize: '14px',
                      color: '#495057',
                      borderRight: '1px solid #dee2e6',
                      verticalAlign: 'middle'
                    }}>
                      {item.skema}
                    </td>
                    <td style={{
                      padding: '16px',
                      textAlign: 'center',
                      fontSize: '14px',
                      color: '#495057',
                      borderRight: '1px solid #dee2e6',
                      verticalAlign: 'middle'
                    }}>
                      {item.tanggalUjian}
                    </td>
                    <td style={{
                      padding: '16px',
                      textAlign: 'center',
                      fontSize: '14px',
                      color: '#495057',
                      borderRight: '1px solid #dee2e6',
                      verticalAlign: 'middle'
                    }}>
                      {item.tuk}
                    </td>
                    <td style={{
                      padding: '16px',
                      textAlign: 'center',
                      fontSize: '14px',
                      color: '#495057',
                      borderRight: '1px solid #dee2e6',
                      verticalAlign: 'middle'
                    }}>
                      {item.asesor}
                    </td>
                    <td style={{
                      padding: '16px',
                      textAlign: 'center',
                      borderRight: '1px solid #dee2e6',
                      verticalAlign: 'middle'
                    }}>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        backgroundColor: item.status === 'aktif' ? '#28a745' : '#dee2e6',
                        borderRadius: '2px',
                        margin: '0 auto'
                      }}></div>
                    </td>
                    <td style={{
                      padding: '16px',
                      textAlign: 'center',
                      verticalAlign: 'middle'
                    }}>
                      <div style={{
                        display: 'flex',
                        gap: '8px',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>
                        <button 
                          onClick={() => handleLihatClick(item)}
                          style={{
                            backgroundColor: '#fd7e14',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '6px 8px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: '32px',
                            minHeight: '32px',
                            transition: 'background-color 0.15s ease-in-out'
                          }}
                          title="Lihat Detail Assessment"
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#e96d00'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = '#fd7e14'}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="3" y="6" width="4" height="4" rx="1"/>
                            <rect x="3" y="14" width="4" height="4" rx="1"/>
                            <line x1="10" y1="8" x2="21" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            <line x1="10" y1="16" x2="21" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </button>
                        <button 
                          onClick={() => handleAnalyticsClick(item)}
                          style={{
                            backgroundColor: '#fd7e14',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '6px 8px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minWidth: '32px',
                            minHeight: '32px',
                            transition: 'background-color 0.15s ease-in-out'
                          }}
                          title="Analytics"
                          onMouseEnter={(e) => e.target.style.backgroundColor = '#e96d00'}
                          onMouseLeave={(e) => e.target.style.backgroundColor = '#fd7e14'}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="4" y="4" width="2" height="16" rx="1"/>
                            <rect x="8" y="6" width="2" height="12" rx="1"/>
                            <rect x="12" y="3" width="2" height="18" rx="1"/>
                            <rect x="16" y="7" width="2" height="10" rx="1"/>
                            <rect x="20" y="5" width="2" height="14" rx="1"/>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" style={{
                    padding: '40px',
                    textAlign: 'center',
                    color: '#6c757d',
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
    </div>
  );
}

export default ListAsesmen;