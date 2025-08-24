import React, { useState } from 'react';

function EditAsesi({ data, onSave, onCancel, onDelete }) {
  const [formData, setFormData] = useState({
    id: data?.id || '', // Preserve the original ID
    nama: data?.nama || '',
    pekerjaan: data?.pekerjaan || '',
    jurusan: data?.jurusan || '',
    kelas: data?.kelas || ''
  });

  const [errors, setErrors] = useState({});
  const [showEditNotif, setShowEditNotif] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nama.trim()) {
      newErrors.nama = 'Nama lengkap harus diisi';
    }
    
    if (!formData.pekerjaan.trim()) {
      newErrors.pekerjaan = 'Pekerjaan harus diisi';
    }
    
    if (!formData.jurusan.trim()) {
      newErrors.jurusan = 'Jurusan harus dipilih';
    }
    
    if (!formData.kelas.trim()) {
      newErrors.kelas = 'Kelas harus dipilih';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Show notification modal
      setShowEditNotif(true);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

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
          textAlign: 'center',
          borderBottom: '1px solid #dee2e6',
        }}
      >
        <h1
          style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#333',
            margin: 0,
          }}
        >
          EDIT DATA
        </h1>
      </div>

      {/* Form Container */}
      <div
        style={{
          backgroundColor: 'white',
          margin: '20px',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
          {/* Left Column */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#333',
                  fontSize: '14px',
                }}
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                value={formData.nama}
                onChange={(e) => handleChange('nama', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: errors.nama ? '1px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
                placeholder="Masukkan nama lengkap"
              />
              {errors.nama && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>
                  {errors.nama}
                </p>
              )}
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#333',
                  fontSize: '14px',
                }}
              >
                Pekerjaan
              </label>
              <input
                type="text"
                value={formData.pekerjaan}
                onChange={(e) => handleChange('pekerjaan', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: errors.pekerjaan ? '1px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
                placeholder="Contoh: Siswa, Mahasiswa, dll"
              />
              {errors.pekerjaan && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>
                  {errors.pekerjaan}
                </p>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#333',
                  fontSize: '14px',
                }}
              >
                Jurusan
              </label>
              <select
                value={formData.jurusan}
                onChange={(e) => handleChange('jurusan', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: errors.jurusan ? '1px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
              >
                <option value="">Pilih Jurusan</option>
                <option value="Rekayasa Perangkat Lunak">Rekayasa Perangkat Lunak</option>
                <option value="Perhotelan">Perhotelan</option>
                <option value="Busana">Busana</option>
                <option value="Usaha Layanan Pariwisata">Usaha Layanan Pariwisata</option>
                <option value="Kuliner">Kuliner</option>
                <option value="Teknik Komputer dan Jaringan">Teknik Komputer dan Jaringan</option>
                <option value="Multimedia">Multimedia</option>
                <option value="Akuntansi">Akuntansi</option>
                <option value="Administrasi Perkantoran">Administrasi Perkantoran</option>
              </select>
              {errors.jurusan && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>
                  {errors.jurusan}
                </p>
              )}
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500',
                  color: '#333',
                  fontSize: '14px',
                }}
              >
                Kelas
              </label>
              <select
                value={formData.kelas}
                onChange={(e) => handleChange('kelas', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: errors.kelas ? '1px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
              >
                <option value="">Pilih Kelas</option>
                <option value="10">Kelas 10</option>
                <option value="11">Kelas 11</option>
                <option value="12">Kelas 12</option>
              </select>
              {errors.kelas && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>
                  {errors.kelas}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '30px' }}>
          <button
            onClick={handleSubmit}
            style={{
              padding: '10px 20px',
              backgroundColor: '#ff7849',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Simpan Perubahan
          </button>
          <button
            onClick={onDelete}
            style={{
              padding: '10px 20px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            Hapus Data
          </button>
        </div>
      </div>

      {/* Edit Success Modal - Center of screen */}
      {showEditNotif && (
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
            {/* Check Icon */}
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

            {/* Success Message */}
            <h2 style={{
              fontSize: '22px',
              fontWeight: '600',
              color: '#333333',
              margin: '0 0 25px 0',
              lineHeight: '1.4',
              paddingBottom: '25px',
              borderBottom: '1px solid #e0e0e0'
            }}>
              Data Berhasil<br />Diperbarui!
            </h2>

            {/* OK Text */}
            <div
              onClick={() => {
                setShowEditNotif(false);
                
                // Save the updated data with preserved ID
                if (onSave) {
                  onSave({
                    ...formData,
                    id: data.id // Ensure we use the original ID
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
    </div>
  );
}

export default EditAsesi;
