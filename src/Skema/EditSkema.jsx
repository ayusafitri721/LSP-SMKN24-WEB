import React, { useState, useEffect } from 'react';

function EditSkema({ onBack, onSave, initialData, onCancel, onDelete }) {
  const [formData, setFormData] = useState({
    judulSkema: '',
    jumlahSiswa: ''
  });

  const [errors, setErrors] = useState({});
  const [showUpdateNotif, setShowUpdateNotif] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  // Load initial data when component mounts
  useEffect(() => {
    if (initialData) {
      setFormData({
        judulSkema: initialData.judulSkema || '',
        jumlahSiswa: initialData.jumlahSiswa || ''
      });
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.judulSkema.trim()) {
      newErrors.judulSkema = 'Judul skema harus diisi';
    }
    
    if (!formData.jumlahSiswa.trim()) {
      newErrors.jumlahSiswa = 'Jumlah siswa harus diisi';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setShowSubmitConfirm(true);
    }
  };

  const confirmSubmit = () => {
    setShowSubmitConfirm(false);
    setShowUpdateNotif(true);
  };

  const handleCancel = () => {
    if (initialData) {
      setFormData({
        judulSkema: initialData.judulSkema || '',
        jumlahSiswa: initialData.jumlahSiswa || ''
      });
    }
    setErrors({});
    
    if (onCancel) {
      onCancel();
    } else if (onBack) {
      onBack();
    }
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    setShowDeleteConfirm(false);
    
    // Call parent's onDelete function if provided
    if (onDelete) {
      onDelete(formData);
    }
    
    // Show success notification briefly then redirect
    setShowDeleteSuccess(true);
    
    console.log('Data berhasil dihapus:', formData);
    
    // Auto redirect after 1.5 seconds
    setTimeout(() => {
      setShowDeleteSuccess(false);
      
      // Use the same redirect logic as Cancel button
      if (onCancel) {
        onCancel();
      } else if (onBack) {
        onBack();
      }
      
    }, 1500);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    // Handle file drop logic here
  };

  const handleFileSelect = () => {
    // Handle file selection logic here
    console.log('File selection triggered');
  };

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#f5f5f5',
      padding: '0',
      margin: '0',
      boxSizing: 'border-box',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      overflow: 'auto'
    }}>
      {/* Header */}
      <div style={{
        padding: '40px 0 20px 0',
        textAlign: 'center',
        position: 'sticky',
        top: 0,
        backgroundColor: '#f5f5f5',
        zIndex: 10
      }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#333',
          margin: '0 0 8px 0',
          letterSpacing: '0.5px'
        }}>
          Import Skema
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#666',
          margin: '0',
          fontWeight: '400'
        }}>
          Silahkan import file skema di bawah ini
        </p>
      </div>

      {/* Main Container */}
      <div style={{
        margin: '0 auto 40px auto', // Center dengan auto margin
        backgroundColor: '#ffffff',
        borderRadius: '30px',
        padding: '30px 30px', // Padding sama semua sisi biar persegi
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        width: '500px', // Width tetap
        height: '500px', // Height sama dengan width = PERSEGI!
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Upload Area */}
        <div 
          style={{
            width: '320px', // Lebih kecil lagi!
            height: '320px', // Persegi 320x320
            border: `3px dashed ${isDragOver ? '#fd7e14' : '#d1d5db'}`,
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: isDragOver ? '#fff8f1' : '#fafafa',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            marginBottom: '30px' // Margin dikecilkan juga
          }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleFileSelect}
        >
          {/* File Icon */}
          <div style={{
            width: '80px',
            height: '80px',
            marginBottom: '20px'
          }}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
              <path
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                stroke="#9ca3af"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="#f3f4f6"
              />
              <polyline
                points="14,2 14,8 20,8"
                stroke="#9ca3af"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Upload Text */}
          <div style={{
            textAlign: 'center',
            marginBottom: '20px'
          }}>
            <p style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#374151',
              margin: '0 0 8px 0'
            }}>
              Import Skema
            </p>
            <p style={{
              fontSize: '14px',
              color: '#9ca3af',
              margin: '0',
              lineHeight: '1.5'
            }}>
              Drag & drop file xlsx (.xlsx) untuk memulai
            </p>
          </div>

          {/* Import File Button */}
          <button
            style={{
              backgroundColor: '#fd7e14',
              color: '#ffffff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#e8670e';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#fd7e14';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="7,10 12,15 17,10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="12"
                y1="15"
                x2="12"
                y2="3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Import File
          </button>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '16px'
        }}>
          <button
            onClick={handleCancel}
            style={{
              backgroundColor: '#fd7e14',
              color: '#ffffff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit',
              minWidth: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#e8670e';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#fd7e14';
            }}
          >
            Kembali
          </button>
          
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: '#fd7e14',
              color: '#ffffff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit',
              minWidth: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#e8670e';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#fd7e14';
            }}
          >
            Simpan
          </button>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitConfirm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '40px 30px',
            textAlign: 'center',
            width: '320px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            position: 'relative'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#fd7e14',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 25px auto'
            }}>
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  stroke="#ffffff"
                  strokeWidth="2.5"
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
              Apa Kamu Yakin<br />Ingin Menyimpan<br />Data Ini?
            </h2>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div
                onClick={() => setShowSubmitConfirm(false)}
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#666666',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  userSelect: 'none',
                  padding: '8px 20px'
                }}
              >
                Batal
              </div>
              
              <div style={{
                width: '1px',
                height: '20px',
                backgroundColor: '#e0e0e0',
                margin: '0 10px'
              }}></div>
              
              <div
                onClick={confirmSubmit}
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#fd7e14',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  userSelect: 'none',
                  padding: '8px 20px'
                }}
              >
                Ya, Simpan
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Update Success Modal */}
      {showUpdateNotif && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
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
              backgroundColor: '#4A90E2',
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
              Data Anda<br />Diperbarui!
            </h2>

            <div
              onClick={() => {
                setShowUpdateNotif(false);
                if (onSave) {
                  const updatedItem = {
                    ...initialData,
                    judulSkema: formData.judulSkema.trim(),
                    jumlahSiswa: formData.jumlahSiswa.trim()
                  };
                  onSave(updatedItem);
                }
              }}
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#333333',
                cursor: 'pointer',
                fontFamily: 'inherit',
                userSelect: 'none'
              }}
            >
              Okay!
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '40px 30px',
            textAlign: 'center',
            width: '320px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            position: 'relative'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#dc3545',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 25px auto'
            }}>
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  stroke="#ffffff"
                  strokeWidth="2.5"
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
              Anda Yakin<br />Menghapus Data<br />"{formData.judulSkema}"?
            </h2>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div
                onClick={() => setShowDeleteConfirm(false)}
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#666666',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  userSelect: 'none',
                  padding: '8px 20px'
                }}
              >
                Batal
              </div>
              
              <div style={{
                width: '1px',
                height: '20px',
                backgroundColor: '#e0e0e0',
                margin: '0 10px'
              }}></div>
              
              <div
                onClick={confirmDelete}
                style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#dc3545',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  userSelect: 'none',
                  padding: '8px 20px'
                }}
              >
                Hapus
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Success Modal */}
      {showDeleteSuccess && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
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
              Mengarahkan ke halaman skema...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditSkema;