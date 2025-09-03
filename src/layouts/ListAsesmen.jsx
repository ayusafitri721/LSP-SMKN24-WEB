import React, { useEffect, useState } from 'react';
import { useAssesment } from '../context/AssesmentContext';

function ListAsesmen({ onBack, onNavigate }) {
  const { assesments, loading, error, fetchAssesments } = useAssesment();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAssesments();
  }, []);

  // Filter data berdasarkan search term
  const filteredData = (assesments || []).filter(item => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      item.schema?.judul_skema?.toLowerCase().includes(searchLower) ||
      item.schema?.nomor_skema?.toLowerCase().includes(searchLower) ||
      String(item.id).toLowerCase().includes(searchLower) ||
      item.assesor?.nama_lengkap?.toLowerCase().includes(searchLower)
    );
  });

  const handleBackClick = () => {
    if (onBack) onBack();
  };

  const handleLihatClick = (item) => {
    if (onNavigate) onNavigate('lihatlistasesmen', item);
  };

  const handleAnalyticsClick = (item) => {
    if (onNavigate) onNavigate('analytics', item);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Header */}
      <div style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button onClick={handleBackClick} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
          ←
        </button>
        <h1 style={{ fontSize: '28px', fontWeight: '600', margin: 0 }}>Assessment</h1>
      </div>

      {/* Search */}
      <div style={{ marginBottom: '30px', maxWidth: '300px' }}>
        <input
          type="text"
          placeholder="Cari"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 16px',
            border: '1px solid #dee2e6',
            borderRadius: '8px'
          }}
        />
      </div>

      {/* Table */}
      <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #dee2e6', overflow: 'hidden' }}>
        {loading ? (
          <p style={{ textAlign: 'center', padding: '20px' }}>Loading...</p>
        ) : error ? (
          <p style={{ textAlign: 'center', padding: '20px', color: 'red' }}>{error}</p>
        ) : filteredData.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '20px' }}>Tidak ada data</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={headerStyle}>Id</th>
                <th style={headerStyle}>Nama Skema</th>
                <th style={headerStyle}>Nomor Skema</th>
                <th style={headerStyle}>Admin</th>
                <th style={headerStyle}>Tanggal</th>
                <th style={headerStyle}>TUK</th>
                <th style={headerStyle}>Asesor</th>
                <th style={headerStyle}>Status</th>
                <th style={headerStyle}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td style={cellStyle}>{item.id}</td>
                  <td style={cellStyle}>{item.schema?.judul_skema}</td>
                  <td style={cellStyle}>{item.schema?.nomor_skema}</td>
                  <td style={cellStyle}>{item.admin?.nama_lengkap}</td>
                  <td style={cellStyle}>{item.tanggal_assesment}</td>
                  <td style={cellStyle}>{item.tuk}</td>
                  <td style={cellStyle}>{item.assesor?.nama_lengkap}</td>
                  <td style={cellStyle}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: item.status ? '#28a745' : '#dee2e6',
                      margin: '0 auto',
                      borderRadius: '3px'
                    }}></div>
                  </td>
                  <td style={cellStyle}>
                    <button style={actionButtonStyle} onClick={() => handleLihatClick(item)}>👁</button>
                    <button style={actionButtonStyle} onClick={() => handleAnalyticsClick(item)}>📊</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

const headerStyle = {
  padding: '12px',
  textAlign: 'center',
  fontWeight: '600',
  fontSize: '14px',
  color: '#495057',
  borderBottom: '1px solid #dee2e6'
};

const cellStyle = {
  padding: '12px',
  textAlign: 'center',
  fontSize: '14px',
  color: '#495057'
};

const actionButtonStyle = {
  backgroundColor: '#fd7e14',
  border: 'none',
  color: 'white',
  padding: '6px 8px',
  borderRadius: '4px',
  cursor: 'pointer',
  margin: '0 4px'
};

export default ListAsesmen;
