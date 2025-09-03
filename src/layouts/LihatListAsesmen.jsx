import React from 'react';

function LihatListAsesmen({ onBack, data }) {
  const handleBackClick = () => {
    if (onBack && typeof onBack === 'function') {
      onBack();
    } else {
      console.log('Back clicked');
    }
  };

  console.log(data);
  
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
          Lihat Assessment
        </h1>
      </div>

      {/* Content Area */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        border: '1px solid #dee2e6',
        padding: '40px',
        textAlign: 'center',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          fontSize: '18px',
          color: '#6c757d',
          marginBottom: '16px'
        }}>
          Halaman Lihat Assessment
        </div>
        
        {data && (
          <div style={{
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'left',
            marginTop: '20px'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: '#212529',
              marginBottom: '12px'
            }}>
              Data yang diterima:
            </h3>
            <div style={{
              fontSize: '14px',
              color: '#495057',
              lineHeight: '1.5'
            }}>
              <div><strong>ID:</strong> {data.id}</div>
              <div><strong>Nama Assessment:</strong> {data.schema.judul_skema}</div>
              <div><strong>Kode:</strong> {data.schema.nomor_skema}</div>
              <div><strong>Skema:</strong> {data.schema.judul_skema}</div>
              <div><strong>Tanggal Ujian:</strong> {data.tanggal_assesment}</div>
              <div><strong>TUK:</strong> {data.tuk}</div>
              <div><strong>Asesor:</strong> {data.assesor.nama_lengkap}</div>
            </div>
          </div>
        )}
        
        <div style={{
          marginTop: '30px',
          fontSize: '14px',
          color: '#6c757d'
        }}>
          Konten form detail akan ditambahkan di sini
        </div>
      </div>
    </div>
  );
}

export default LihatListAsesmen;