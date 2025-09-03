import React, { useEffect, useState } from 'react';
import { useApl01 } from '../../context/Apl01Context';

export default function DetailJurusanApl01({ onBack, onNavigate, currentTab = 'APL-01' }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedKelas, setSelectedKelas] = useState('Semua');
  const { apl01s, loading, error, fetchApl01s } = useApl01();

  // mapping jurusan_id ke nama kelas
  const jurusanMap = {
    1: 'XII RPL 1',
    2: 'XII RPL 2',
    3: 'XII RPL 3'
  };

  const kelasList = ['Semua', ...Object.values(jurusanMap)];

  useEffect(() => {
    fetchApl01s();
  }, []);

  // filter data berdasarkan search dan kelas
  const filteredData = (apl01s || []).filter(item => {
    const matchesSearch = item.nama_lengkap?.toLowerCase().includes(searchTerm.toLowerCase());
    const kelas = jurusanMap[item.user?.jurusan_id] || '-';
    const matchesKelas = selectedKelas === 'Semua' || kelas === selectedKelas;
    return matchesSearch && matchesKelas;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'aktif':
        return '#28a745';
      case 'pending':
        return '#6c757d';
      default:
        return '#ffc107';
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '60px', textAlign: 'center' }}>
        <p>Sedang memuat data siswa...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: '60px', textAlign: 'center', color: 'red' }}>
        <p>Terjadi kesalahan saat memuat data: {error}</p>
      </div>
    );
  }

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
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
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
        <div style={{ display: 'flex', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <button 
            style={{ 
              padding: '12px 20px', 
              fontSize: '14px', 
              fontWeight: '600', 
              border: 'none', 
              backgroundColor: '#ff6b35', 
              color: 'white', 
              borderRadius: '8px', 
              cursor: 'pointer', 
              margin: '4px' 
            }}
          >
            FR.APL.01
          </button>
          <button 
            onClick={() => onNavigate('approvement/APL-02')}
            style={{ 
              padding: '12px 20px', 
              fontSize: '14px', 
              fontWeight: '600', 
              border: 'none', 
              backgroundColor: 'transparent', 
              color: '#666', 
              cursor: 'pointer', 
              margin: '4px', 
              borderRadius: '8px' 
            }}
          >
            FR.APL.02
          </button>
        </div>
      </div>
      
      {/* Page Title */}
      <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#1a1a1a', margin: '0 0 30px 0' }}>
        Asesi
      </h1>

      {/* Filter Kelas */}
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <select
          value={selectedKelas}
          onChange={(e) => setSelectedKelas(e.target.value)}
          style={{
            padding: '6px 24px 6px 8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '13px',
            backgroundColor: '#ffffff',
            cursor: 'pointer',
            minWidth: '80px',
          }}
        >
          {kelasList.map((kelas) => (
            <option key={kelas} value={kelas}>
              {kelas === 'Semua' ? 'Kelas' : kelas}
            </option>
          ))}
        </select>
      </div>
      
      {/* Table */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={{ padding: '12px 16px' }}>No</th>
                <th style={{ padding: '12px 16px' }}>Nama Lengkap</th>
                <th style={{ padding: '12px 16px' }}>Kelas</th>
                <th style={{ padding: '12px 16px' }}>Status</th>
                <th style={{ padding: '12px 16px' }}>Detail</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => {
                  const kelas = jurusanMap[item.user?.jurusan_id] || '-';
                  return (
                    <tr key={item.id}>
                      <td style={{ padding: '12px 16px' }}>{index + 1}.</td>
                      <td style={{ padding: '12px 16px' }}>{item.nama_lengkap}</td>
                      <td style={{ padding: '12px 16px', textAlign: 'center' }}>{kelas}</td>
                      <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                        <div 
                          style={{ 
                            width: '14px', 
                            height: '14px', 
                            backgroundColor: getStatusColor(item.status), 
                            borderRadius: '2px', 
                            margin: '0 auto' 
                          }}
                        ></div>
                      </td>
                      <td style={{ padding: '12px 16px', textAlign: 'center' }}>
                        <button
                          onClick={() => onNavigate('lihatapprovement', item)} 
                          style={{
                            backgroundColor: '#ff6b35',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '5px 12px',
                            fontSize: '12px',
                            cursor: 'pointer',
                            fontWeight: '500',
                          }}
                        >
                          Lihat
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5" style={{ padding: '30px', textAlign: 'center', color: '#999' }}>
                    {searchTerm || selectedKelas !== 'Semua' 
                      ? 'Tidak ada data yang sesuai dengan filter' 
                      : 'Belum ada data siswa'}
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
