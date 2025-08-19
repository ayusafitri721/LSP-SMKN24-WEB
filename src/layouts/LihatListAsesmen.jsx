import React from 'react';

function LihatListAsesmen({ onBack, data }) {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Main Content */}
      <div style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>Detail Assessment</h1>
            <button
              onClick={onBack}
              style={{
                padding: '8px 16px',
                backgroundColor: '#fd7e14',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              Kembali
            </button>
          </div>

          {data && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '12px', color: '#333' }}>Informasi Assessment</h3>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontWeight: '500', color: '#666' }}>Nama Jadwal:</span>
                  <span style={{ marginLeft: '8px' }}>{data.namaJadwal}</span>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontWeight: '500', color: '#666' }}>TUK:</span>
                  <span style={{ marginLeft: '8px' }}>{data.tuk}</span>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontWeight: '500', color: '#666' }}>Tanggal Ujian:</span>
                  <span style={{ marginLeft: '8px' }}>{data.tanggalUjian}</span>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontWeight: '500', color: '#666' }}>Status:</span>
                  <span style={{ marginLeft: '8px', color: '#28a745', fontWeight: '500' }}>Aktif</span>
                </div>
              </div>

              <div style={{ backgroundColor: '#f8f9fa', padding: '16px', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '12px', color: '#333' }}>Detail Peserta</h3>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontWeight: '500', color: '#666' }}>NISN:</span>
                  <span style={{ marginLeft: '8px' }}>{data.nisn || '-'}</span>
                </div>
                <div style={{ marginBottom: '8px' }}>
                  <span style={{ fontWeight: '500', color: '#666' }}>Pembiayaan:</span>
                  <span style={{ marginLeft: '8px' }}>{data.pembiayaan || '-'}</span>
                </div>
              </div>
            </div>
          )}

          {!data && (
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#666' }}>
              Data tidak tersedia
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LihatListAsesmen;