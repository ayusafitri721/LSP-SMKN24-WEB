import React, { useState } from 'react';

function ListAsesmen({ onBack, onNavigate, assessmentData, setAssessmentData }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Data dummy sesuai dengan gambar
  const sampleData = [
    {
      id: 'A001',
      namaAssessment: 'USK RPL Pemrograman Dasar',
      tanggalUjian: '2025-08-20'
    },
    {
      id: 'A002',
      namaAssessment: 'USK RPL Pemrograman Dasar',
      tanggalUjian: '2025-08-20'
    },
    {
      id: 'A003',
      namaAssessment: 'USK RPL Pemrograman Dasar',
      tanggalUjian: '2025-08-20'
    }
  ];

  // Filter data berdasarkan search term
  const filteredData = sampleData.filter(item => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      item.namaAssessment.toLowerCase().includes(searchLower) ||
      item.id.toLowerCase().includes(searchLower)
    );
  });

  const handleBackClick = () => {
    if (onBack && typeof onBack === 'function') {
      onBack();
    } else {
      console.log('Back clicked');
    }
  };

  // Handle click untuk tombol aksi - mengarah ke LihatListAsesmen
  const handleActionClick = (item) => {
    if (onNavigate && typeof onNavigate === 'function') {
      onNavigate('lihatlistasesmen', item);
    } else {
      console.log('Action clicked for:', item.id);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Header with Back Button */}
      <div style={{ 
        marginBottom: '25px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <button
          onClick={handleBackClick}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '0'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <h1 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#333',
          margin: '0'
        }}>
          Assessment
        </h1>
      </div>

      {/* Search Bar */}
      <div style={{ 
        marginBottom: '25px',
        maxWidth: '350px'
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
              padding: '12px 45px 12px 16px',
              border: '1px solid #ddd',
              borderRadius: '25px',
              fontSize: '14px',
              outline: 'none',
              backgroundColor: '#ffffff',
              boxSizing: 'border-box',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#007bff';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#ddd';
            }}
          />
          <span style={{
            position: 'absolute',
            right: '16px',
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
        borderRadius: '8px',
        border: '1px solid #e0e0e0',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse'
        }}>
          <thead>
            <tr style={{
              backgroundColor: '#f8f9fa',
            }}>
              <th style={{
                padding: '20px 24px',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333',
                borderBottom: '1px solid #e0e0e0',
                borderRight: '1px solid #e0e0e0',
                width: '120px'
              }}>Id</th>
              <th style={{
                padding: '20px 24px',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333',
                borderBottom: '1px solid #e0e0e0',
                borderRight: '1px solid #e0e0e0'
              }}>Nama Assessment</th>
              <th style={{
                padding: '20px 24px',
                textAlign: 'left',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333',
                borderBottom: '1px solid #e0e0e0',
                borderRight: '1px solid #e0e0e0',
                width: '180px'
              }}>Tanggal Ujian</th>
              <th style={{
                padding: '20px 24px',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: '600',
                color: '#333',
                borderBottom: '1px solid #e0e0e0',
                width: '120px'
              }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredData && filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={item.id} style={{
                  borderBottom: index === filteredData.length - 1 ? 'none' : '1px solid #f0f0f0',
                  backgroundColor: '#ffffff'
                }}>
                  <td style={{
                    padding: '24px',
                    fontSize: '14px',
                    color: '#333',
                    borderRight: '1px solid #f0f0f0',
                    verticalAlign: 'middle',
                    fontWeight: '500'
                  }}>
                    {item.id}
                  </td>
                  <td style={{
                    padding: '24px',
                    fontSize: '14px',
                    color: '#333',
                    borderRight: '1px solid #f0f0f0',
                    verticalAlign: 'middle'
                  }}>
                    {item.namaAssessment}
                  </td>
                  <td style={{
                    padding: '24px',
                    fontSize: '14px',
                    color: '#333',
                    borderRight: '1px solid #f0f0f0',
                    verticalAlign: 'middle'
                  }}>
                    {item.tanggalUjian}
                  </td>
                  <td style={{
                    padding: '0',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    position: 'relative',
                    width: '120px'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                      minHeight: '72px'
                    }}>
                      <button 
                        onClick={() => handleActionClick(item)}
                        style={{
                          backgroundColor: '#ff8c42',
                          color: '#ffffff',
                          border: 'none',
                          borderRadius: '50%',
                          width: '36px',
                          height: '36px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 2px 4px rgba(255,140,66,0.3)',
                          margin: 'auto'
                        }}
                        title="Lihat Detail Assessment"
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#e57c39';
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#ff8c42';
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="3" y="6" width="4" height="4" rx="1"/>
                          <rect x="3" y="14" width="4" height="4" rx="1"/>
                          <line x1="10" y1="8" x2="21" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <line x1="10" y1="16" x2="21" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{
                  padding: '60px 24px',
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
  );
}

export default ListAsesmen;