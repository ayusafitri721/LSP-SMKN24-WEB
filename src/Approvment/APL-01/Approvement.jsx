import React, { useState } from 'react';


export default function Approvement({ onBack, onNavigate, currentTab = 'APL-01' }) {
  const [searchTerm, setSearchTerm] = useState('');
  // activeTab sekarang diambil dari props currentTab
  const activeTab = currentTab;

  // Sample data untuk APL-01
  const sampleDataAPL01 = [
    {
      id: 1,
      namaJadwal: 'USK RPL Pemrograman Dasar',
      tuk: 'Sewaktu/Tempat Kerja/Mandiri',
      nisn: '0071585059',
      tanggalUjian: '9/7/2025',
      status: 'aktif',
    },
    {
      id: 2,
      namaJadwal: 'USK Jaringan Komputer',
      tuk: 'Sewaktu/Tempat Kerja/Mandiri',
      nisn: '0081234567',
      tanggalUjian: '10/7/2025',
      status: 'aktif',
    },
  ];

  // Sample data untuk APL-02
  const sampleDataAPL02 = [
    {
      id: 3,
      namaJadwal: 'USK Web Development',
      tuk: 'Tempat Uji Kompetensi',
      nisn: '0091234567',
      tanggalUjian: '11/7/2025',
      status: 'aktif',
    },
    {
      id: 4,
      namaJadwal: 'USK Database Management',
      tuk: 'Sewaktu/Tempat Kerja/Mandiri',
      nisn: '0101234567',
      tanggalUjian: '12/7/2025',
      status: 'aktif',
    },
  ];

  // Pilih data berdasarkan tab aktif
  const currentData = activeTab === 'APL-01' ? sampleDataAPL01 : sampleDataAPL02;

  const filteredData = currentData.filter(item =>
    item.namaJadwal.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tuk.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.nisn && item.nisn.toString().includes(searchTerm.toLowerCase()))
  );

  const SearchIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );

  // Function untuk handle tab click
  const handleTabClick = (tabName) => {
    if (tabName === 'APL-01') {
      // Navigate ke APL-01/Approvement.jsx
      if (onNavigate) {
        onNavigate('apl01-approvement');
      }
    } else if (tabName === 'APL-02') {
      // Navigate ke APL-02/ApprovementApl02.jsx
      if (onNavigate) {
        onNavigate('apl02-approvement');
      }
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
      padding: '40px',
      boxSizing: 'border-box',
      width: '100%',
      maxWidth: 'calc(100vw - 250px)',
      margin: '0',
    }}>
      {/* Header with back button and tabs */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '40px'
      }}>
        <button
          onClick={onBack}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            marginRight: '20px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <div style={{
          display: 'flex',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}>
          <button 
            onClick={() => handleTabClick('APL-01')}
            style={{
              padding: '12px 20px',
              fontSize: '14px',
              fontWeight: '600',
              border: 'none',
              backgroundColor: activeTab === 'APL-01' ? '#ff6b35' : 'transparent',
              color: activeTab === 'APL-01' ? 'white' : '#666',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              margin: '4px',
            }}
          >
            FR.APL.01
          </button>
          <button 
            onClick={() => handleTabClick('APL-02')}
            style={{
              padding: '12px 20px',
              fontSize: '14px',
              fontWeight: '600',
              border: 'none',
              backgroundColor: activeTab === 'APL-02' ? '#ff6b35' : 'transparent',
              color: activeTab === 'APL-02' ? 'white' : '#666',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              margin: '4px',
              borderRadius: '8px',
            }}
          >
            FR.APL.02
          </button>
        </div>
      </div>
      
      {/* Page Title */}
      <h1 style={{
        fontSize: '32px',
        fontWeight: '700',
        color: '#1a1a1a',
        margin: '0 0 20px 0'
      }}>
        APPROVEMENT - {activeTab}
      </h1>
      
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
      
      {/* Assessment List Header */}
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#1a1a1a',
          margin: 0
        }}>
          Daftar Asesi ({activeTab})
        </h2>
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
                }}>Detail</th>
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
                      {item.nisn}
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
                      <button
                        onClick={() => onNavigate && onNavigate('lihatapprovement', { ...item, tabType: activeTab })}
                        style={{
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
                    {searchTerm ? 'Tidak ada data yang sesuai dengan pencarian' : `Belum ada data asesi untuk ${activeTab}`}
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