import React, { useState } from 'react';

function EditAsesor({ data, onSave, onCancel, onDelete }) {
  // Dummy database simulation - in real app this would be from props/context
  const [database, setDatabase] = useState([
    { id: 1, nama: 'John Doe', pekerjaan: 'Software Engineer', sertifikasi: 'Tersertifikasi', tanggal_daftar: '2024-01-15' },
    { id: 2, nama: 'Jane Smith', pekerjaan: 'Data Analyst', sertifikasi: 'Tidak Tersertifikasi', tanggal_daftar: '2024-02-10' },
    { id: 3, nama: 'Bob Johnson', pekerjaan: 'Web Developer', sertifikasi: 'Tersertifikasi', tanggal_daftar: '2024-03-05' }
  ]);

  // Current data being edited
  const currentData = data || database[0];

  const [formData, setFormData] = useState({
    id: currentData.id,
    nama: currentData.nama,
    pekerjaan: currentData.pekerjaan,
    sertifikasi: currentData.sertifikasi,
    tanggal_daftar: currentData.tanggal_daftar
  });

  const [errors, setErrors] = useState({});
  const [showUpdateNotif, setShowUpdateNotif] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

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
    
    if (!formData.nama.trim()) {
      newErrors.nama = 'Nama lengkap harus diisi';
    }
    
    if (!formData.pekerjaan.trim()) {
      newErrors.pekerjaan = 'Pekerjaan harus diisi';
    }
    
    if (!formData.tanggal_daftar.trim()) {
      newErrors.tanggal_daftar = 'Tanggal daftar harus diisi';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setShowUpdateNotif(true);
    }
  };

  const handleCancel = () => {
    setFormData({
      id: currentData.id,
      nama: currentData.nama,
      pekerjaan: currentData.pekerjaan,
      sertifikasi: currentData.sertifikasi,
      tanggal_daftar: currentData.tanggal_daftar
    });
    setErrors({});
    
    if (onCancel) {
      onCancel();
    }
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    setShowDeleteConfirm(false);
    
    // Actually delete from database simulation
    const updatedDatabase = database.filter(item => item.id !== formData.id);
    setDatabase(updatedDatabase);
    
    // Call parent's onDelete function if provided
    if (onDelete) {
      onDelete(formData);
    }
    
    // Show success notification briefly then redirect
    setShowDeleteSuccess(true);
    
    console.log('Data berhasil dihapus dari database:', formData);
    console.log('Database sekarang:', updatedDatabase);
    
    // Auto redirect after 1.5 seconds
    setTimeout(() => {
      setShowDeleteSuccess(false);
      
      // Use the same redirect logic as Cancel button
      if (onCancel) {
        onCancel();
      } else {
        // Fallback redirect if no onCancel provided
        window.location.href = '/asesor';
      }
      
    }, 1500);
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
          fontSize: '28px',
          fontWeight: '600',
          color: '#333',
          margin: '0',
          letterSpacing: '1px'
        }}>
          EDIT DATA ASESOR
        </h1>
      </div>

      {/* Form Container */}
      <div style={{
        margin: '0 20px 40px 20px',
        backgroundColor: '#ffffff',
        borderRadius: '30px',
        padding: '40px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        minHeight: '60vh'
      }}>
        {/* Form Content - 2 Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Left Column */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}>
            {/* Nama Lengkap */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px'
              }}>
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                value={formData.nama}
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
              {errors.nama && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '14px',
                  marginTop: '8px',
                  margin: '8px 0 0 0'
                }}>
                  {errors.nama}
                </p>
              )}
            </div>

            {/* Pekerjaan */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px'
              }}>
                Pekerjaan
              </label>
              <input
                type="text"
                name="pekerjaan"
                value={formData.pekerjaan}
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
              {errors.pekerjaan && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '14px',
                  marginTop: '8px',
                  margin: '8px 0 0 0'
                }}>
                  {errors.pekerjaan}
                </p>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}>
            {/* Sertifikasi */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px'
              }}>
                Sertifikasi
              </label>
              <select
                name="sertifikasi"
                value={formData.sertifikasi}
                onChange={handleInputChange}
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
              >
                <option value="Tersertifikasi">Tersertifikasi</option>
                <option value="Tidak Tersertifikasi">Tidak Tersertifikasi</option>
                <option value="-">-</option>
              </select>
            </div>

            {/* Tanggal Daftar */}
            <div>
              <label style={{
                display: 'block',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '12px'
              }}>
                Tanggal Daftar
              </label>
              <input
                type="date"
                name="tanggal_daftar"
                value={formData.tanggal_daftar}
                onChange={handleInputChange}
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
              {errors.tanggal_daftar && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '14px',
                  marginTop: '8px',
                  margin: '8px 0 0 0'
                }}>
                  {errors.tanggal_daftar}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons - All buttons grouped together on the right */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingTop: '20px',
          borderTop: '1px solid #e0e0e0',
          gap: '12px'
        }}>
          <button
            onClick={handleCancel}
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
                  onSave({
                    ...formData,
                    nama: formData.nama.trim(),
                    pekerjaan: formData.pekerjaan.trim(),
                    sertifikasi: formData.sertifikasi,
                    tanggal_daftar: formData.tanggal_daftar.trim()
                  });
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
              Anda Yakin<br />Menghapus Data<br />"{formData.nama}"?
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
              Mengarahkan ke halaman asesor...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditAsesor;