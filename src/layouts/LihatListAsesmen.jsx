import React from 'react';

function LihatListAsesmen({ onBack, item }) {
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
      <h1 style={{
        fontSize: '32px',
        fontWeight: '700',
        color: '#1a1a1a',
        margin: '0 0 20px 0',
      }}>
        Detail Assessment
      </h1>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <p><strong>Nama Jadwal:</strong> {item?.namaJadwal || '-'}</p>
        <p><strong>TUK:</strong> {item?.tuk || '-'}</p>
        <p><strong>NISN:</strong> {item?.nisn || item?.asesor || '-'}</p>
        <p><strong>Tanggal Ujian:</strong> {item?.tanggalUjian || '-'}</p>
        <p><strong>Status:</strong> {item?.status || '-'}</p>
        <p><strong>Pembiayaan:</strong> {item?.pembiayaan || '-'}</p>
        {item?.lokasiUjian && <p><strong>Lokasi Ujian:</strong> {item.lokasiUjian}</p>}
        {item?.jumlahPeserta && <p><strong>Jumlah Peserta:</strong> {item.jumlahPeserta}</p>}
      </div>
      <button
        onClick={onBack}
        style={{
          backgroundColor: '#fd7e14',
          color: '#ffffff',
          padding: '10px 20px',
          borderRadius: '20px',
          border: 'none',
          fontSize: '14px',
          cursor: 'pointer',
          marginTop: '20px',
          transition: 'background-color 0.2s ease',
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#e96a00'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#fd7e14'}
      >
        Kembali
      </button>
    </div>
  );
}

export default LihatListAsesmen;