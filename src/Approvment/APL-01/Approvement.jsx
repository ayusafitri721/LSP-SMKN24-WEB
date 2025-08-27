import React, { useState, useEffect } from 'react';
import { useApl01 } from '../../context/Apl01Context';

export default function Approvement({ onBack, onNavigate, currentTab = 'APL-01' }) {
  const { apl01s, loading, error, fetchApl01s, approveApl01 } = useApl01();
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({});
  const [actionLoading, setActionLoading] = useState({});
  const [activeTab, setActiveTab] = useState(currentTab); // 'APL-01' or 'APL-02'

  // Fetch APL-01 data when component mounts
  useEffect(() => {
    if (activeTab === 'APL-01') {
      fetchApl01s();
    }
  }, [activeTab, fetchApl01s]);

  // Transform APL-01 data to match table structure
  const transformApl01Data = (apl01s) => {
    if (!apl01s || !Array.isArray(apl01s)) return [];
    
    return apl01s.map(item => ({
      id: item.id,
      namaJadwal: `${item.nama_lengkap} - ${item.jabatan || 'Tidak ada jabatan'}`,
      tuk: item.nama_institusi || 'Tidak ada institusi',
      nisn: item.no_ktp,
      tanggalUjian: new Date(item.created_at).toLocaleDateString('id-ID'),
      status: item.status,
      email: item.email,
      telepon: item.no_telepon,
      alamat: item.alamat_rumah,
      pendidikan: item.kualifikasi_pendidikan,
      tempat_lahir: item.tempat_lahir,
      tanggal_lahir: item.tanggal_lahir,
      user_id: item.user_id,
      user: item.user,
      nama_lengkap: item.nama_lengkap
    }));
  };

  // Handle approve/reject actions
  const handleStatusChange = async (itemId, newStatus) => {
    setActionLoading(prev => ({ ...prev, [itemId]: newStatus }));
    
    // Update formData with new status
    setFormData(prev => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        status: newStatus
      }
    }));

    try {
      // Correct parameter order: itemId first, then newStatus
      await approveApl01(itemId, formData[itemId] || { status: newStatus });
      // Refresh data after update
      await fetchApl01s();
    } catch (error) {
      console.error(`Error approving APL-01:`, error);
      alert(`Gagal ${newStatus === 'approved' ? 'menyetujui' : 'menolak'} APL-01`);
      
      // Revert formData on error
      setFormData(prev => ({
        ...prev,
        [itemId]: {
          ...prev[itemId],
          status: 'pending' // revert to original status
        }
      }));
    } finally {
      setActionLoading(prev => ({ ...prev, [itemId]: null }));
    }
  };

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
  const currentData = activeTab === 'APL-01' ? transformApl01Data(apl01s) : sampleDataAPL02;

  const filteredData = currentData.filter(item =>
    item.namaJadwal.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tuk.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.nisn && item.nisn.toString().includes(searchTerm.toLowerCase()))
  );

  // Get status color - check formData first, then original status
  const getStatusColor = (itemId, originalStatus) => {
    const currentStatus = formData[itemId]?.status || originalStatus;
    switch (currentStatus) {
      case 'accepted':
        return '#28a745'; // green
      case 'rejected':
        return '#dc3545'; // red
      case 'pending':
      default:
        return '#ffc107'; // yellow
    }
  };

  // Get current status - check formData first, then original status
  const getCurrentStatus = (itemId, originalStatus) => {
    return formData[itemId]?.status || originalStatus;
  };

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
      setActiveTab('APL-01');
    } else if (tabName === 'APL-02') {
      // Navigate ke APL-02/ApprovementApl02.jsx
      setActiveTab('APL-02');
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
                  minWidth: '200px'
                }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => {
                  const currentStatus = getCurrentStatus(item.id, item.status);
                  return (
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
                          backgroundColor: getStatusColor(item.id, item.status),
                          borderRadius: '2px',
                          margin: '0 auto'
                        }}></div>
                      </td>
                      <td style={{
                        padding: '20px',
                        textAlign: 'center',
                        verticalAlign: 'middle'
                      }}>
                        {activeTab === 'APL-01' && currentStatus === 'pending' ? (
                          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                            <button
                              onClick={() => handleStatusChange(item.id, 'accepted')}
                              disabled={actionLoading[item.id]}
                              style={{
                                backgroundColor: actionLoading[item.id] === 'accepted' ? '#6c757d' : '#28a745',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '4px',
                                padding: '6px 12px',
                                fontSize: '12px',
                                cursor: actionLoading[item.id] ? 'not-allowed' : 'pointer',
                                fontWeight: '500',
                                minWidth: '70px',
                                transition: 'background-color 0.2s ease',
                                opacity: actionLoading[item.id] ? 0.6 : 1
                              }}
                              onMouseEnter={(e) => {
                                if (!actionLoading[item.id]) {
                                  e.target.style.backgroundColor = '#218838';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!actionLoading[item.id]) {
                                  e.target.style.backgroundColor = '#28a745';
                                }
                              }}
                            >
                              {actionLoading[item.id] === 'accepted' ? 'Loading...' : 'accepted'}
                            </button>
                            <button
                              onClick={() => handleStatusChange(item.id, 'rejected')}
                              disabled={actionLoading[item.id]}
                              style={{
                                backgroundColor: actionLoading[item.id] === 'rejected' ? '#6c757d' : '#dc3545',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '4px',
                                padding: '6px 12px',
                                fontSize: '12px',
                                cursor: actionLoading[item.id] ? 'not-allowed' : 'pointer',
                                fontWeight: '500',
                                minWidth: '70px',
                                transition: 'background-color 0.2s ease',
                                opacity: actionLoading[item.id] ? 0.6 : 1
                              }}
                              onMouseEnter={(e) => {
                                if (!actionLoading[item.id]) {
                                  e.target.style.backgroundColor = '#c82333';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!actionLoading[item.id]) {
                                  e.target.style.backgroundColor = '#dc3545';
                                }
                              }}
                            >
                              {actionLoading[item.id] === 'rejected' ? 'Loading...' : 'Reject'}
                            </button>
                            <button
                              onClick={() => onNavigate && onNavigate('lihatapprovement', { ...item, tabType: activeTab })}
                              style={{
                                backgroundColor: '#fd7e14',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '4px',
                                padding: '6px 12px',
                                fontSize: '12px',
                                cursor: 'pointer',
                                fontWeight: '500',
                                minWidth: '60px',
                                transition: 'background-color 0.2s ease'
                              }}
                              onMouseEnter={(e) => e.target.style.backgroundColor = '#e96a00'}
                              onMouseLeave={(e) => e.target.style.backgroundColor = '#fd7e14'}
                            >
                              Detail
                            </button>
                          </div>
                        ) : (
                          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                            <span style={{
                              backgroundColor: currentStatus === 'accepted' ? '#d4edda' : '#f8d7da',
                              color: currentStatus === 'accepted' ? '#155724' : '#721c24',
                              padding: '6px 12px',
                              borderRadius: '4px',
                              fontSize: '12px',
                              fontWeight: '500',
                              textTransform: 'capitalize'
                            }}>
                              {currentStatus === 'accepted' ? 'Disetujui' : currentStatus === 'rejected' ? 'Ditolak' : currentStatus}
                            </span>
                            <button
                              onClick={() => onNavigate && onNavigate('lihatapprovement', { ...item, tabType: activeTab })}
                              style={{
                                backgroundColor: '#fd7e14',
                                color: '#ffffff',
                                border: 'none',
                                borderRadius: '4px',
                                padding: '6px 12px',
                                fontSize: '12px',
                                cursor: 'pointer',
                                fontWeight: '500',
                                minWidth: '60px',
                                transition: 'background-color 0.2s ease'
                              }}
                              onMouseEnter={(e) => e.target.style.backgroundColor = '#e96a00'}
                              onMouseLeave={(e) => e.target.style.backgroundColor = '#fd7e14'}
                            >
                              Detail
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="7" style={{
                    padding: '40px',
                    textAlign: 'center',
                    color: '#999',
                    fontSize: '14px'
                  }}>
                    {loading ? 'Memuat data...' : 
                     error ? 'Terjadi kesalahan saat memuat data' :
                     searchTerm ? 'Tidak ada data yang sesuai dengan pencarian' : 
                     `Belum ada data asesi untuk ${activeTab}`}
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