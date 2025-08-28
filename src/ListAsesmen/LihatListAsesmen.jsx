import React from 'react';

function LihatListAsesmen({ onBack, onNavigate, data }) {
  const handleBackClick = () => {
    if (onBack && typeof onBack === 'function') {
      onBack();
    } else {
      console.log('Back clicked');
    }
  };

  // Sample data sesuai gambar
  const assessmentSessions = [
    {
      namaSkema: 'Web',
      namaAsesor: 'Bu Eva Yepril',
      tuk: 'Lab 1',
      tanggal: '2025-08-20',
      students: [
        { no: 1, nama: 'Afdhal Ezhar' },
        { no: 2, nama: '' },
        { no: 3, nama: '' },
        { no: 4, nama: '' },
        { no: 5, nama: '' },
        { no: 6, nama: '' },
        { no: 7, nama: '' },
        { no: 8, nama: '' },
        { no: 9, nama: '' },
        { no: 10, nama: '' },
        { no: 11, nama: '' },
        { no: 12, nama: '' }
      ]
    },
    {
      namaSkema: 'Web',
      namaAsesor: 'Bu Noviyanti',
      tuk: 'Lab 2',
      tanggal: '2025-08-20',
      students: [
        { no: 1, nama: 'Kevin Kurnavi' },
        { no: 2, nama: '' },
        { no: 3, nama: '' }
      ]
    }
  ];

    const handleNavigateToApl01 = () => {
    onNavigate('approvement/lihat');
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
          Detail Asessment
        </h1>
      </div>

      {/* Assessment Sessions */}
      {assessmentSessions.map((session, sessionIndex) => (
        <div key={sessionIndex} style={{ marginBottom: '40px' }}>
          {/* Table with integrated session info */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            marginBottom: sessionIndex === assessmentSessions.length - 1 ? '0' : '40px'
          }}>
            {/* Session Info di atas tabel */}
            <div style={{
              padding: '20px',
              backgroundColor: '#ffffff',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}>
                <div style={{
                  fontSize: '14px',
                  color: '#333'
                }}>
                  <span style={{ fontWeight: '500' }}>Nama Skema: </span>
                  <span>{session.namaSkema}</span>
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#333'
                }}>
                  <span style={{ fontWeight: '500' }}>Nama Asesor: </span>
                  <span>{session.namaAsesor}</span>
                </div>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                alignItems: 'flex-end'
              }}>
                <div style={{
                  fontSize: '14px',
                  color: '#333',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{ fontWeight: '500' }}>TUK:</span>
                  <span style={{
                    backgroundColor: '#e8f4f8',
                    color: '#2c5aa0',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {session.tuk}
                  </span>
                </div>
                <div style={{
                  fontSize: '14px',
                  color: '#333'
                }}>
                  <span style={{ fontWeight: '500' }}>Tanggal: </span>
                  <span>{session.tanggal}</span>
                </div>
              </div>
            </div>
            
            <table style={{
              width: '100%',
              borderCollapse: 'collapse'
            }}>
              <thead>
                <tr style={{
                  backgroundColor: '#f8f9fa',
                }}>
                  <th style={{
                    padding: '16px 20px',
                    textAlign: 'center',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#333',
                    borderTop: '1px solid #666',
                    borderBottom: '1px solid #666',
                    borderRight: '1px solid #666',
                    width: '80px'
                  }}>No</th>
                  <th style={{
                    padding: '16px 20px',
                    textAlign: 'left',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#333',
                    borderTop: '1px solid #666',
                    borderBottom: '1px solid #666',
                    borderRight: '1px solid #666'
                  }}>Nama Siswa</th>
                  <th style={{
                    padding: '16px 20px',
                    textAlign: 'center',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#333',
                    borderTop: '1px solid #666',
                    borderBottom: '1px solid #666',
                    width: '120px'
                  }}>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {session.students.map((student, index) => (
                  <tr key={index} style={{
                    backgroundColor: '#ffffff'
                  }}>
                    <td style={{
                      padding: '16px 20px',
                      textAlign: 'center',
                      fontSize: '14px',
                      color: '#333',
                      borderBottom: '1px solid #666',
                      borderRight: '1px solid #666',
                      verticalAlign: 'middle',
                      fontWeight: '500'
                    }}>
                      {student.no}
                    </td>
                    <td style={{
                      padding: '16px 20px',
                      fontSize: '14px',
                      color: student.nama ? '#333' : '#ccc',
                      borderBottom: '1px solid #666',
                      borderRight: '1px solid #666',
                      verticalAlign: 'middle'
                    }}>
                      {student.nama || ''}
                    </td>
                    <td style={{
                      padding: '16px 20px',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                      borderBottom: '1px solid #666'
                    }}>
                      {student.nama && (
                        <button 
                          onClick={handleNavigateToApl01}
                          style={{
                            backgroundColor: 'transparent',
                            color: '#666',
                            border: '1px solid #ddd',
                            borderRadius: '20px',
                            padding: '6px 16px',
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontWeight: '500',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#f8f9fa';
                            e.target.style.borderColor = '#999';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.borderColor = '#ddd';
                          }}
                        >
                          Detail
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LihatListAsesmen;