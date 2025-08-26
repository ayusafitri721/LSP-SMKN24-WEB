import React, { useState } from 'react';
import { useAsesi } from '../context/AsesiContext'; // Import custom hook
import { ModalWrapper, ConfirmationModal, SuccessModal, InfoModal, LoadingModal } from '../components/Modal';

function Asesi({ onBack, onNavigate}) {
  const [showAddNotif, setShowAddNotif] = useState(false);
  const { asesis, loading, error, fetchAsesis, addAsesi, editAsesi, removeAsesi } = useAsesi();
  
  const dataAsesis = asesis || [];

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [asesi, setAsesi] = useState(null);
  const handleAddClick = () => {
    onNavigate('addasesi');
  };

  const handleDelete = (asesi) => {
    
    removeAsesi(asesi.id)
      .then(() => {
        setShowDeleteModal(false);
        setShowInfoModal(true);
        fetchAsesis(); // Refresh data setelah hapus
      })
      .catch((err) => {
        alert(`Gagal menghapus data: ${err.message || err}`);
      });
    
  };

  // Empty State Component
  const EmptyState = () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 20px',
      textAlign: 'center',
      gap: '20px',
      backgroundColor: 'white'
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
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
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
          Belum Ada Data Asesi
        </h3>
        <p style={{
          fontSize: '16px',
          color: '#6c757d',
          margin: '0 0 24px 0',
          lineHeight: '1.5',
          maxWidth: '400px'
        }}>
          Mulai dengan menambahkan data asesi pertama untuk mengelola informasi peserta asesmen.
        </p>
      </div>

      {/* Add Asesi Button */}
      <button 
        onClick={() => onNavigate('addasesi')}
        style={{
          backgroundColor: '#ff7849',
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
          boxShadow: '0 2px 4px rgba(255, 120, 73, 0.2)'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#e55a00'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#ff7849'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Tambah Asesi Pertama
      </button>
    </div>
  );

  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: '#f0f0f0',
        padding: '0',
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #dee2e6',
        }}
      >
        <button
          onClick={onBack}
          style={{
            width: '24px',
            height: '24px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            marginRight: '10px',
            padding: 0,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1
          style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#333',
            margin: 0,
          }}
        >
          ASESI
        </h1>
        
        {/* Add button - Only show when not loading and has data */}
        {!loading && dataAsesis.length > 0 && (
          <div style={{ marginLeft: 'auto' }}>
            <button
              onClick={handleAddClick}
              style={{
                backgroundColor: '#ff7849',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 16px',
                fontSize: '12px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#e55a00'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#ff7849'}
            >
              + Tambah Data Baru
            </button>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div
        style={{
          backgroundColor: 'white',
          margin: '0',
          overflow: 'hidden',
          minHeight: 'calc(100vh - 81px)' // Adjust for header height
        }}
      >
        {loading ? (
          <EmptyState />
        ) : (
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '12px',
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#f8f9fa' }}>
                <th
                  style={{
                    padding: '12px 8px',
                    textAlign: 'center',
                    fontWeight: '600',
                    color: '#333',
                    fontSize: '12px',
                    width: '50px',
                    border: '1px solid #dee2e6',
                  }}
                >
                  No
                </th>
                <th
                  style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontWeight: '600',
                    color: '#333',
                    fontSize: '12px',
                    border: '1px solid #dee2e6',
                  }}
                >
                  Nama Lengkap
                </th>
                <th
                  style={{
                    padding: '12px 8px',
                    textAlign: 'center',
                    fontWeight: '600',
                    color: '#333',
                    fontSize: '12px',
                    width: '120px',
                    border: '1px solid #dee2e6',
                  }}
                >
                  No KTP
                </th>
                <th
                  style={{
                    padding: '12px 8px',
                    textAlign: 'center',
                    fontWeight: '600',
                    color: '#333',
                    fontSize: '12px',
                    width: '120px',
                    border: '1px solid #dee2e6',
                  }}
                >
                  Tempat Lahir
                </th>
                <th
                  style={{
                    padding: '12px 8px',
                    textAlign: 'center',
                    fontWeight: '600',
                    color: '#333',
                    fontSize: '12px',
                    width: '120px',
                    border: '1px solid #dee2e6',
                  }}
                >
                  Tanggal Lahir
                </th>
                <th
                  style={{
                    padding: '12px 8px',
                    textAlign: 'center',
                    fontWeight: '600',
                    color: '#333',
                    fontSize: '12px',
                    width: '140px',
                    border: '1px solid #dee2e6',
                  }}
                >
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {dataAsesis.map((asesi, index) => (
                <tr
                  key={asesi.id || index}
                  style={{
                    backgroundColor: 'white',
                  }}
                >
                  <td
                    style={{
                      padding: '10px 8px',
                      textAlign: 'center',
                      color: '#333',
                      fontSize: '12px',
                      border: '1px solid #dee2e6',
                    }}
                  >
                    {index + 1}
                  </td>
                  <td
                    style={{
                      padding: '10px 16px',
                      color: '#333',
                      fontSize: '12px',
                      border: '1px solid #dee2e6',
                    }}
                  >
                    {asesi.nama_lengkap}
                  </td>
                  <td
                    style={{
                      padding: '10px 8px',
                      textAlign: 'center',
                      color: '#333',
                      fontSize: '12px',
                      border: '1px solid #dee2e6',
                    }}
                  >
                    {asesi.no_ktp}
                  </td>
                  <td
                    style={{
                      padding: '10px 8px',
                      textAlign: 'center',
                      color: '#333',
                      fontSize: '12px',
                      border: '1px solid #dee2e6',
                    }}
                  >
                    {asesi.tempat_lahir}
                  </td>
                  <td
                    style={{
                      padding: '10px 8px',
                      textAlign: 'center',
                      color: '#333',
                      fontSize: '12px',
                      border: '1px solid #dee2e6',
                    }}
                  >
                    {asesi.tanggal_lahir}
                  </td>
                  <td 
                    style={{ 
                      padding: '10px 8px', 
                      textAlign: 'center',
                      border: '1px solid #dee2e6',
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      gap: '6px',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <button
                        onClick={() => handleEdit(asesi)}
                        style={{
                          backgroundColor: '#ffc107',
                          color: '#212529',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '4px 8px',
                          fontSize: '11px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#e0a800'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#ffc107'}
                      >
                        Edit Data
                      </button>

                      <button
                        onClick={() =>{ setShowDeleteModal(true), setAsesi(asesi)}}
                        style={{
                          backgroundColor: '#dc3545',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '4px 8px',
                          fontSize: '11px',
                          fontWeight: '500',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {
        <ConfirmationModal
          isVisible = {showDeleteModal}
          onConfirm = {()=>
            handleDelete(asesi)
          }
          onCancel ={()=>
            setShowDeleteModal(false)
          }
          title = "Hapus Asesi"
          message = "Yakin ingin menghapus asesi ini"
          confirmText= "Hapus"
          cancelText= "Batal"
        />
      }

      {
        <InfoModal
          isVisible = {showInfoModal}
          onClose = {()=>
            setShowInfoModal(false)
          }
          title = "Data Berhasil Dihapus!"
          message = "Data Berhasil\nDihapus!"
          buttonText= "Tutup"
        />
      }

      {
        loading &&
        <LoadingModal
          isVisible={loading}
          message="Memuat data asesi..."
        />
      }

      {/* Add Success Modal - Center of screen */}
      {
        showAddNotif &&
        SuccessModal({
          title: "Data Berhasil Ditambahkan!",
          message: "Data Berhasil\nDitambahkan!",
          onClose: () => setShowAddNotif(false)
        })
      }
    </div>
  );
}

export default Asesi;