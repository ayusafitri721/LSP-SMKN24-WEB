import React, { useState, useEffect } from 'react';

function EditJurusan({ onBack, onSave, onDelete, initialData }) {
  const [formData, setFormData] = useState({
    kompetensiKeahlian: '',
    jumlahSiswa: ''
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Load initial data when component mounts
  useEffect(() => {
    if (initialData) {
      setFormData({
        kompetensiKeahlian: initialData.kompetensiKeahlian || '',
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
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.kompetensiKeahlian.trim()) {
      newErrors.kompetensiKeahlian = 'Kompetensi keahlian harus diisi';
    }
    
    if (!formData.jumlahSiswa.trim()) {
      newErrors.jumlahSiswa = 'Jumlah siswa harus diisi';
    } else if (isNaN(formData.jumlahSiswa) || parseInt(formData.jumlahSiswa) < 0) {
      newErrors.jumlahSiswa = 'Jumlah siswa harus berupa angka positif';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const updatedItem = {
        ...initialData,
        kompetensiKeahlian: formData.kompetensiKeahlian.trim(),
        jumlahSiswa: parseInt(formData.jumlahSiswa.trim())
      };
      
      // Simpan data ke state sementara
      window.tempUpdateData = updatedItem;
      
      // Tampilkan notifikasi
      setShowSuccess(true);
    }
  };

  const handleDelete = () => {
    // Tampilkan notifikasi konfirmasi custom
    setShowDeleteConfirm(true);
  };

  // Blue Checkmark Icon Component
  const CheckmarkIcon = () => (
    <div style={{
      width: '80px',
      height: '80px',
      backgroundColor: '#4A90E2',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto',
      animation: (showSuccess || showDeleteSuccess) ? 'scaleIn 0.3s ease-out' : 'none'
    }}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" 
          fill="white"
          style={{
            transform: (showSuccess || showDeleteSuccess) ? 'scale(1)' : 'scale(0)',
            transition: 'transform 0.2s ease-out 0.1s'
          }}
        />
      </svg>
    </div>
  );

  // Red Warning Icon Component - Updated to match your design
  const WarningIcon = () => (
    <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: '#E53E3E',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 30px auto',
      animation: showDeleteConfirm ? 'scaleIn 0.3s ease-out' : 'none',
      boxShadow: '0 4px 15px rgba(229, 62, 62, 0.3)'
    }}>
      <svg 
        width="50" 
        height="50" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
          stroke="white" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          style={{
            transform: showDeleteConfirm ? 'scale(1)' : 'scale(0)',
            transition: 'transform 0.2s ease-out 0.1s'
          }}
        />
      </svg>
    </div>
  );

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      minHeight: '100vh',
      width: '100vw',
      backgroundColor: '#f5f5f5',
      padding: '0',
      margin: '0',
      boxSizing: 'border-box',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      zIndex: 9999
    }}>
      {/* Notifikasi Konfirmasi Delete - Enhanced Design */}
      {showDeleteConfirm && (
        <>
          {/* Overlay */}
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.6)',
              zIndex: 10000,
              animation: 'fadeIn 0.3s ease-out',
              backdropFilter: 'blur(4px)'
            }}
          />
          
          {/* Modal Konfirmasi - Enhanced Design */}
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '50px 30px 30px 30px',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
            textAlign: 'center',
            zIndex: 10001,
            width: '350px',
            maxWidth: '85vw',
            animation: 'slideUp 0.4s ease-out'
          }}>
            {/* Icon Warning */}
            <WarningIcon />
            
            {/* Text - Updated to match your design */}
            <div style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#2D3748',
              marginBottom: '8px',
              lineHeight: '1.3'
            }}>
              Anda Yakin
            </div>
            <div style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#2D3748',
              marginBottom: '12px',
              lineHeight: '1.3'
            }}>
              Menghapus Data
            </div>
            <div style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#2D3748',
              marginBottom: '40px',
              lineHeight: '1.3'
            }}>
              "{formData.kompetensiKeahlian || 'Data ini'}"?
            </div>
            
            {/* Line separator */}
            <div style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#E2E8F0',
              marginBottom: '30px'
            }}></div>
            
            {/* Buttons - Enhanced Design */}
            <div style={{
              display: 'flex',
              gap: '1px',
              justifyContent: 'center',
              backgroundColor: '#E2E8F0',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                style={{
                  backgroundColor: 'white',
                  color: '#4A5568',
                  border: 'none',
                  padding: '15px 0',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  flex: '1',
                  fontFamily: 'inherit'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#F7FAFC';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'white';
                }}
              >
                Batal
              </button>
              <button
                onClick={() => {
                  // Tutup konfirmasi
                  setShowDeleteConfirm(false);
                  
                  // Simpan id untuk delete
                  window.tempDeleteId = initialData.id;
                  
                  // Tampilkan notifikasi sukses delete
                  setShowDeleteSuccess(true);
                }}
                style={{
                  backgroundColor: 'white',
                  color: '#E53E3E',
                  border: 'none',
                  padding: '15px 0',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  flex: '1',
                  fontFamily: 'inherit'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#FED7D7';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'white';
                }}
              >
                Hapus
              </button>
            </div>
          </div>
        </>
      )}

      {/* Notifikasi Sukses Update */}
      {showSuccess && (
        <>
          {/* Overlay */}
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 10000,
              animation: 'fadeIn 0.3s ease-out'
            }}
          />
          
          {/* Modal Notifikasi */}
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '50px 40px 40px 40px',
            borderRadius: '16px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            textAlign: 'center',
            zIndex: 10001,
            width: '320px',
            maxWidth: '90vw',
            animation: 'slideUp 0.4s ease-out'
          }}>
            {/* Icon Checkmark */}
            <div style={{ marginBottom: '30px' }}>
              <CheckmarkIcon />
            </div>
            
            {/* Text */}
            <div style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '8px',
              lineHeight: '1.3'
            }}>
              Data Anda
            </div>
            <div style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '40px',
              lineHeight: '1.3'
            }}>
              Diperbarui!
            </div>
            
            {/* Line separator */}
            <div style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#e9ecef',
              marginBottom: '30px'
            }}></div>
            
            {/* Button */}
            <button
              onClick={() => {
                // Tutup notifikasi
                setShowSuccess(false);
                
                // Baru panggil onSave
                if (window.tempUpdateData) {
                  onSave && onSave(window.tempUpdateData);
                  window.tempUpdateData = null;
                }
              }}
              style={{
                backgroundColor: '#f8f9fa',
                color: '#333',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minWidth: '100px'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#e9ecef';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#f8f9fa';
              }}
            >
              Okay!
            </button>
          </div>
        </>
      )}

      {/* Notifikasi Sukses Delete */}
      {showDeleteSuccess && (
        <>
          {/* Overlay */}
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 10000,
              animation: 'fadeIn 0.3s ease-out'
            }}
          />
          
          {/* Modal Notifikasi */}
          <div style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '50px 40px 40px 40px',
            borderRadius: '16px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            textAlign: 'center',
            zIndex: 10001,
            width: '320px',
            maxWidth: '90vw',
            animation: 'slideUp 0.4s ease-out'
          }}>
            {/* Icon Checkmark */}
            <div style={{ marginBottom: '30px' }}>
              <CheckmarkIcon />
            </div>
            
            {/* Text */}
            <div style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '8px',
              lineHeight: '1.3'
            }}>
              Data Berhasil
            </div>
            <div style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '40px',
              lineHeight: '1.3'
            }}>
              Dihapus!
            </div>
            
            {/* Line separator */}
            <div style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#e9ecef',
              marginBottom: '30px'
            }}></div>
            
            {/* Button */}
            <button
              onClick={() => {
                // Tutup notifikasi
                setShowDeleteSuccess(false);
                
                // Baru panggil onDelete
                if (window.tempDeleteId) {
                  onDelete && onDelete(window.tempDeleteId);
                  window.tempDeleteId = null;
                }
              }}
              style={{
                backgroundColor: '#f8f9fa',
                color: '#333',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minWidth: '100px'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#e9ecef';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#f8f9fa';
              }}
            >
              Okay!
            </button>
          </div>
        </>
      )}

      {/* Header */}
      <div style={{
        padding: '40px 0 20px 0',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '28px',
          fontWeight: '600',
          color: '#333',
          margin: '0',
          letterSpacing: '1px'
        }}>
          EDIT DATA
        </h1>
      </div>

      {/* Form Container */}
      <div style={{
        margin: '0 20px 0 20px',
        backgroundColor: '#ffffff',
        borderRadius: '30px 30px 0 0',
        padding: '40px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        minHeight: 'calc(100vh - 100px)',
        height: 'calc(100vh - 100px)',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Form Content */}
        <div style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px'
        }}>
          {/* Kompetensi Keahlian */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '12px'
            }}>
              Kompetensi Keahlian
            </label>
            <input
              type="text"
              name="kompetensiKeahlian"
              value={formData.kompetensiKeahlian}
              onChange={handleInputChange}
              placeholder=""
              style={{
                width: '100%',
                padding: '16px',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: '#ffffff',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
            {errors.kompetensiKeahlian && (
              <p style={{
                color: '#dc3545',
                fontSize: '14px',
                marginTop: '8px',
                margin: '8px 0 0 0'
              }}>
                {errors.kompetensiKeahlian}
              </p>
            )}
          </div>

          {/* Jumlah Siswa */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '12px'
            }}>
              Jumlah Siswa
            </label>
            <input
              type="number"
              name="jumlahSiswa"
              value={formData.jumlahSiswa}
              onChange={handleInputChange}
              placeholder=""
              min="0"
              style={{
                width: '100%',
                padding: '16px',
                border: '2px solid #e0e0e0',
                borderRadius: '12px',
                fontSize: '16px',
                boxSizing: 'border-box',
                backgroundColor: '#ffffff',
                outline: 'none',
                transition: 'border-color 0.2s ease',
                fontFamily: 'inherit'
              }}
              onFocus={(e) => e.target.style.borderColor = '#007bff'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
            {errors.jumlahSiswa && (
              <p style={{
                color: '#dc3545',
                fontSize: '14px',
                marginTop: '8px',
                margin: '8px 0 0 0'
              }}>
                {errors.jumlahSiswa}
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px',
          marginTop: 'auto',
          paddingTop: '40px'
        }}>
          <button
            onClick={onBack}
            style={{
              backgroundColor: '#6c757d',
              color: '#ffffff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#5a6268';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#6c757d';
            }}
          >
            Batal
          </button>
          <button
            onClick={handleDelete}
            style={{
              backgroundColor: '#dc3545',
              color: '#ffffff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#c82333';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#dc3545';
            }}
          >
            Hapus Data
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
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'inherit'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#e8670e';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#fd7e14';
            }}
          >
            Simpan Perubahan
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translate(-50%, -40%);
          }
          to { 
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }
        
        @keyframes scaleIn {
          from { 
            transform: scale(0);
          }
          to { 
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default EditJurusan;