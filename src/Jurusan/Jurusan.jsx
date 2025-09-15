import React, { useState } from 'react';
import AddJurusan from './AddJurusan';
import EditJurusan from './EditJurusan';

import { useJurusan } from '../context/JurusanContext.jsx';

function Jurusan({ onBack }) {
  const { jurusanList, loading, fetchJurusans } = useJurusan();
  const data = jurusanList || [];

  const [halaman, setHalaman] = useState('list'); // list | add | edit
  const [editItem, setEditItem] = useState(null);

  const handleAddSave = (newItem) => {
    setHalaman('list');
  };

  const handleEditClick = (data) => {
    setEditItem(data);
    setHalaman('edit');
  };

  // Loading Component
  const LoadingSpinner = () => (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '80px 20px',
      flexDirection: 'column',
      gap: '16px',
      backgroundColor: 'white',
      margin: '0 30px',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #FF8A50',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      <p style={{
        color: '#666',
        fontSize: '16px',
        margin: 0,
        fontWeight: '500'
      }}>
        Memuat data jurusan...
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
      padding: '80px 20px',
      textAlign: 'center',
      gap: '20px',
      backgroundColor: 'white',
      margin: '0 30px',
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
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
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeLinecap="round" strokeLinejoin="round"/>
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
          Belum Ada Data Jurusan
        </h3>
        <p style={{
          fontSize: '16px',
          color: '#6c757d',
          margin: '0 0 24px 0',
          lineHeight: '1.5',
          maxWidth: '400px'
        }}>
          Mulai dengan menambahkan data jurusan pertama untuk mengelola program studi dalam sistem.
        </p>
      </div>

      {/* Add Jurusan Button */}
      <button 
        onClick={() => setHalaman('add')}
        style={{
          backgroundColor: '#FF8A50',
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
          boxShadow: '0 2px 4px rgba(255, 138, 80, 0.2)'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#e55a00'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#FF8A50'}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Tambah Jurusan Pertama
      </button>
    </div>
  );

  // Render AddJurusan (akan full screen tanpa sidebar)
  if (halaman === 'add') {
    return <AddJurusan onBack={() => setHalaman('list')} onSave={handleAddSave} />;
  }

  // Render EditJurusan
  if (halaman === 'edit') {
    return <EditJurusan initialData={editItem} onBack={() => setHalaman('list')} onSave={() => {setHalaman('list'); fetchJurusans();}} />;
  }

  // Main list dengan layout asli (ada ruang untuk sidebar)
  return (
    <div style={{ 
      padding: '0', 
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      width: '100%'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '20px 30px',
        borderBottom: '1px solid #e0e0e0',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <button 
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              marginRight: '15px',
              cursor: 'pointer',
              color: '#333'
            }}
          >
            ←
          </button>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '0',
            color: '#333'
          }}>
            JURUSAN
          </h1>
        </div>
        
        {/* Add button - Only show when not loading and has data */}
        {!loading && data.length > 0 && (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button 
              onClick={() => setHalaman('add')}
              style={{
                backgroundColor: '#FF8A50',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '4px',
                fontSize: '14px',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#e55a00'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#FF8A50'}
            >
              + Tambah Data Baru
            </button>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div style={{ 
        padding: '0 30px 30px 30px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        {loading ? (
          <LoadingSpinner />
        ) : data.length === 0 ? (
          <EmptyState />
        ) : (
          <table style={{ 
            width: '100%', 
            borderCollapse: 'separate',
            borderSpacing: '0',
            fontSize: '14px',
            backgroundColor: 'white',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <thead>
              <tr>
                <th style={{
                  padding: '15px 20px',
                  textAlign: 'center',
                  fontWeight: '500',
                  color: '#666',
                  backgroundColor: '#e9ecef',
                  border: '1px solid #dee2e6',
                  width: '60px'
                }}>
                  No
                </th>
                <th style={{
                  padding: '15px 20px',
                  textAlign: 'center',
                  fontWeight: '500',
                  color: '#666',
                  backgroundColor: '#e9ecef',
                  border: '1px solid #dee2e6',
                  borderLeft: 'none'
                }}>
                  Kode Jurusan
                </th>
                <th style={{
                  padding: '15px 20px',
                  textAlign: 'center',
                  fontWeight: '500',
                  color: '#666',
                  backgroundColor: '#e9ecef',
                  border: '1px solid #dee2e6',
                  borderLeft: 'none'
                }}>
                  Nama Jurusan
                </th>
                <th style={{
                  padding: '15px 20px',
                  textAlign: 'center',
                  fontWeight: '500',
                  color: '#666',
                  backgroundColor: '#e9ecef',
                  border: '1px solid #dee2e6',
                  borderLeft: 'none',
                  width: '120px'
                }}>
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td style={{
                    padding: '15px 20px',
                    textAlign: 'center',
                    color: '#333',
                    border: '1px solid #dee2e6',
                    borderTop: 'none',
                    backgroundColor: 'white'
                  }}>
                    {index + 1}
                  </td>
                  <td style={{
                    padding: '15px 20px',
                    color: '#333',
                    border: '1px solid #dee2e6',
                    borderTop: 'none',
                    borderLeft: 'none',
                    backgroundColor: 'white'
                  }}>
                    {item.kode_jurusan}
                  </td>
                  <td style={{
                    padding: '15px 20px',
                    color: '#333',
                    border: '1px solid #dee2e6',
                    borderTop: 'none',
                    borderLeft: 'none',
                    backgroundColor: 'white'
                  }}>
                    {item.nama_jurusan}
                  </td>
                  <td style={{
                    padding: '15px 20px',
                    textAlign: 'center',
                    border: '1px solid #dee2e6',
                    borderTop: 'none',
                    borderLeft: 'none',
                    backgroundColor: 'white'
                  }}>
                    <button
                      onClick={() => handleEditClick(item)}
                      style={{
                        backgroundColor: '#FFC107',
                        color: '#333',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        cursor: 'pointer',
                        fontWeight: '500',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#e0a800'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#FFC107'}
                    >
                      Edit Data
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      
      {/* Back Button */}
      <div style={{ 
        padding: '0 30px 30px 30px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <button 
          onClick={onBack}
          style={{
            backgroundColor: '#FF8A50',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '14px',
            cursor: 'pointer',
            fontWeight: '500',
            boxShadow: '0 2px 4px rgba(255, 138, 80, 0.3)',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e55a00'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#FF8A50'}
        >
          Kembali ke Home
        </button>
      </div>
    </div>
  );
}

export default Jurusan;