import React from 'react';

function Skema() {
  const handleCardClick = (cardTitle) => {
    // Click handler logic can be added here without alert
  };

  return (
    <div style={{ 
      padding: '80px 0',
      width: '100%'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px'
      }}>
        <div style={{ position: 'relative', width: '100%', height: '40px', marginBottom: '40px' }}>
          {/* Progress Line */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: '4px',
              backgroundColor: '#e9ecef',
              borderRadius: '2px',
              transform: 'translateY(-50%)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: '#7EB3E9',
                borderRadius: '2px',
              }}
            />
          </div>

          {/* Progress Dots */}
          <div
            style={{
              position: 'absolute',
              top: 'calc(50% + 2px)',
              left: 0,
              right: 0,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 16.66%',
              transform: 'translateY(-50%)',
              boxSizing: 'border-box',
            }}
          >
            {[1, 2, 3].map((dot) => (
              <div
                key={dot}
                style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: 'rgba(255, 131, 3, 0.4)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: '#FF8303',
                    borderRadius: '50%',
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Cards Container */}
        <div style={{
          display: 'flex',
          gap: '30px',
          justifyContent: 'center',
          alignItems: 'stretch'
        }}>
          {/* Card 1 - 36 SKEMA SERTIFIKASI */}
          <button
            onClick={() => handleCardClick('36 SKEMA SERTIFIKASI')}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              width: '320px',
              height: '340px',
            }}
          >
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '30px',
              color: '#333',
              position: 'relative',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
              border: '1px solid #838280',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden'
            }}>
              {/* Icon Circle */}
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#007bff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
                flexShrink: 0
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <rect x="3" y="3" width="6" height="6" rx="1"/>
                  <rect x="15" y="3" width="6" height="6" rx="1"/>
                  <rect x="3" y="15" width="6" height="6" rx="1"/>
                  <rect x="15" y="15" width="6" height="6" rx="1"/>
                  <rect x="9" y="9" width="6" height="6" rx="1"/>
                  <line x1="9" y1="6" x2="15" y2="6"/>
                  <line x1="6" y1="9" x2="6" y2="15"/>
                  <line x1="18" y1="9" x2="18" y2="15"/>
                  <line x1="9" y1="18" x2="15" y2="18"/>
                </svg>
              </div>
              
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '15px',
                lineHeight: '1.3',
                letterSpacing: '0.5px',
                color: '#2c3e50',
                flexShrink: 0,
                textAlign: 'center',
                width: '100%'
              }}>
                36 SKEMA SERTIFIKASI
              </h3>
              
              <p style={{
                fontSize: '0.85rem',
                lineHeight: '1.4',
                color: '#6c757d',
                margin: '0',
                textAlign: 'left',
                width: '100%',
                flex: '1',
                overflow: 'hidden'
              }}>
                Skema / Profesi / Jabatan / Pekerjaan di bidang bidang Jaminan Sekuriti, Teknologi Informasi dan Konstruksi.
              </p>
            </div>
          </button>

          {/* Card 2 - 300++ LINK DUDI */}
          <button
            onClick={() => handleCardClick('300++ LINK DUDI')}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              width: '320px',
              height: '340px',
            }}
          >
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '30px',
              color: '#333',
              position: 'relative',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
              border: '1px solid #838280',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden'
            }}>
              {/* Icon Circle */}
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#007bff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
                flexShrink: 0
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
              </div>
              
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '15px',
                lineHeight: '1.3',
                letterSpacing: '0.5px',
                color: '#2c3e50',
                flexShrink: 0,
                textAlign: 'center',
                width: '100%'
              }}>
                300++ LINK DUDI
              </h3>
              
              <p style={{
                fontSize: '0.85rem',
                lineHeight: '1.4',
                color: '#6c757d',
                margin: '0',
                textAlign: 'left',
                width: '100%',
                flex: '1',
                overflow: 'hidden'
              }}>
                Perusahaan mitra LSP yang siap untuk menerima profesi anda, sehingga ada lebih banyak peluang dari semua bidang pekerjaan.
              </p>
            </div>
          </button>

          {/* Card 3 - 1000+ SDM TERVERIFIKASI */}
          <button
            onClick={() => handleCardClick('1000+ SDM TERVERIFIKASI')}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              width: '320px',
              height: '340px',
            }}
          >
            <div style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '30px',
              color: '#333',
              position: 'relative',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
              border: '1px solid #838280',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              boxSizing: 'border-box',
              overflow: 'hidden'
            }}>
              {/* Icon Circle */}
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#007bff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                boxShadow: '0 4px 12px rgba(0, 123, 255, 0.3)',
                flexShrink: 0
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M12 2l8 4-8 4-8-4 8-4z"/>
                  <path d="M4 10l8 4 8-4"/>
                  <path d="M4 14l8 4 8-4"/>
                </svg>
              </div>
              
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                marginBottom: '15px',
                lineHeight: '1.3',
                letterSpacing: '0.5px',
                color: '#2c3e50',
                flexShrink: 0,
                textAlign: 'center',
                width: '100%'
              }}>
                1000+ SDM TERVERIFIKASI
              </h3>
              
              <p style={{
                fontSize: '0.85rem',
                lineHeight: '1.4',
                color: '#6c757d',
                margin: '0',
                textAlign: 'left',
                width: '100%',
                flex: '1',
                overflow: 'hidden'
              }}>
                Daftar tenaga kerja profesional yang telah kami sertifikasi, dan siap untuk mendukung kebutuhan SDM tersertifikasi perusahaan Anda.
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Skema;