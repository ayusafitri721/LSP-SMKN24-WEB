import React, { useState } from 'react';
import { useAssesment } from '../context/AssesmentContext';

function Asesmen({ onBack, onNavigate, data }) {
  const {assesments, loading, error, fetchAssesments, addAssesment, editAssesment, removeAssesment} = useAssesment();
  const dataAssesments = assesments || [];

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    if (selectedItem) {
      setShowDeleteModal(false);

      try{
        await removeAssesment(selectedItem.id);
        await fetchAssesments();

        setShowDeleteSuccess(true);

        setTimeout(() => {
          setShowDeleteSuccess(false);
          setSelectedItem(null);
        }, 1500);

      }catch(err){
        console.error("Error deleting assesment:", err);
      }
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedItem(null);
  };

  const modalOverlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  };

  // Loading Component
  const LoadingSpinner = () => (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '60px 20px',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #ff6600',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <p style={{
        color: '#666',
        fontSize: '16px',
        margin: 0,
        fontWeight: '500'
      }}>
        Memuat data asesmen...
      </p>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );

  // Empty State Component
  const EmptyState = () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px',
      textAlign: 'center',
      gap: '20px'
    }}>
      {/* Empty State Icon */}
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: '#f8f9fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid #dee2e6'
      }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="14,2 14,8 20,8" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="16" y1="13" x2="8" y2="13" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="16" y1="17" x2="8" y2="17" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="10,9 9,9 8,9" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      {/* Empty State Text */}
      <div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#495057',
          margin: '0 0 8px 0'
        }}>
          Belum Ada Data Asesmen
        </h3>
        <p style={{
          fontSize: '16px',
          color: '#6c757d',
          margin: '0 0 24px 0',
          lineHeight: '1.5',
          maxWidth: '400px'
        }}>
          Mulai dengan menambahkan asesmen pertama Anda untuk melacak dan mengelola proses penilaian.
        </p>
      </div>

      {/* Add Assessment Button */}
      <button 
        onClick={() => onNavigate && onNavigate('asesmen/add')}
        style={{
          backgroundColor: '#ff6600',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: '500',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'background-color 0.2s',
          boxShadow: '0 2px 4px rgba(255, 102, 0, 0.2)'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#e55a00'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#ff6600'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Tambah Asesmen Pertama
      </button>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'Segoe UI, Roboto, sans-serif',
      backgroundColor: '#f5f5f5',
      padding: '24px'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
        <button
          onClick={onBack}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            marginRight: '12px',
            padding: '4px'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2">
            <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#333', margin: 0 }}>
          ASESMEN
        </h1>
      </div>

      {/* Add Button - Only show when not loading and has data */}
      {!loading && dataAssesments.length > 0 && (
        <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'flex-end' }}>
          <button 
            onClick={() => onNavigate && onNavigate('asesmen/add')}
            style={{
              backgroundColor: '#ff6600',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '10px 16px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              zIndex: 1
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e55a00'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#ff6600'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="7,10 12,15 17,10" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Add
          </button>
        </div>
      )}

      {/* Table Container */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        maxHeight: '70vh',
        overflowY: 'auto'
      }}>
        {loading ? (
          <LoadingSpinner />
        ) : dataAssesments.length === 0 ? (
          <EmptyState />
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th style={headerStyle}>Id</th>
                <th style={headerStyle}>Nama Skema</th>
                <th style={headerStyle}>Nomor Skema</th>
                <th style={headerStyle}>Admin</th>
                <th style={headerStyle}>Tanggal Assesment</th>
                <th style={headerStyle}>TUK</th>
                <th style={headerStyle}>Asesor</th>
                <th style={headerStyle}>Status</th>
                <th style={headerStyle}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataAssesments.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #e5e5e5' }}>
                  <td style={cellStyle}>{item.id}</td>
                  <td style={cellStyle}>{item.schema.judul_skema}</td>
                  <td style={cellStyle}>{item.schema.nomor_skema}</td>
                  <td style={cellStyle}>{item.admin.nama_lengkap}</td>
                  <td style={cellStyle}>{item.tangga_assesment}</td>
                  <td style={cellStyle}>{item.tuk}</td>
                  <td style={cellStyle}>{item.assesor.nama_lengkap}</td>
                  <td style={cellStyle}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '3px',
                        backgroundColor: item.status ? '#28a745' : '#dee2e6'
                      }}></div>
                    </div>
                  </td>
                  <td style={cellStyle}>
                    <div style={{ display: 'flex', gap: '6px', justifyContent: 'center' }}>
                      <button 
                        style={actionButtonStyle}
                        onClick={() => handleDeleteClick(item)}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#e55a00'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#ff6600'}
                      >
                        🗑
                      </button>
                      <button 
                        style={actionButtonStyle}
                        onClick={() => onNavigate && onNavigate('asesmen/edit', item)}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#e55a00'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#ff6600'}
                      >
                        ✏️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div style={modalOverlay} onClick={handleCancelDelete}>
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              width: "320px",
              padding: "30px 20px",
              textAlign: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title */}
            <h2 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#333333',
              margin: '0 0 25px 0',
              lineHeight: '1.3'
            }}>
              Anda Yakin<br />
              Menghapus Assessment<br />
              ini?
            </h2>

            {/* Icon Location Pin with Exclamation */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "25px" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="65" height="85" viewBox="0 0 24 24">
                {/* Pin Shape dengan border merah */}
                <path
                  d="M12 22s8-7.58 8-13a8 8 0 1 0-16 0c0 5.42 8 13 8 13z"
                  fill="white"       // isi putih
                  stroke="#dc3545"   // garis tepi merah
                  strokeWidth="2"    // ketebalan border
                />
                {/* Exclamation Line */}
                <rect x="11" y="6" width="2" height="5" fill="#dc3545" />
                {/* Exclamation Dot */}
                <circle cx="12" cy="13.5" r="1.2" fill="#dc3545" />
              </svg>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '1px',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#e0e0e0'
            }}>
              <button
                onClick={handleDelete}
                style={{
                  flex: 1,
                  padding: '15px 20px',
                  backgroundColor: '#dc3545',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: '#ffffff',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#c82333'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#dc3545'}
              >
                Lanjutkan
              </button>
              
              <button
                onClick={handleCancelDelete}
                style={{
                  flex: 1,
                  padding: '15px 20px',
                  backgroundColor: '#f8f9fa',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: '#333333',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#f8f9fa'}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Success Modal */}
      {showDeleteSuccess && (
        <div style={modalOverlay}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '40px 30px',
            textAlign: 'center',
            width: '300px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            position: 'relative'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#28a745',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 25px auto'
            }}>
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h2 style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#333333',
              margin: '0 0 25px 0',
              lineHeight: '1.4',
              paddingBottom: '25px',
              borderBottom: '1px solid #e0e0e0'
            }}>
              Data Berhasil<br />Dihapus!
            </h2>

            <p style={{
              fontSize: '16px',
              color: '#666666',
              margin: '0',
              fontFamily: 'inherit'
            }}>
              Mengarahkan ke halaman asesmen...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const headerStyle = {
  padding: '16px 12px',
  textAlign: 'center',
  fontWeight: '600',
  fontSize: '14px',
  color: '#495057',
  backgroundColor: '#f8f9fa',
  borderBottom: '2px solid #dee2e6'
};

const cellStyle = {
  padding: '16px 12px',
  textAlign: 'center',
  fontSize: '14px',
  color: '#495057',
  borderBottom: '1px solid #e5e5e5'
};

const actionButtonStyle = {
  backgroundColor: '#ff6600',
  border: 'none',
  color: 'white',
  padding: '6px 8px',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '28px',
  minHeight: '28px',
  zIndex: 1
};

export default Asesmen;