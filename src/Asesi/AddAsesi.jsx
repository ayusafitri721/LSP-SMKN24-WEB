import React, { useState } from 'react';

function AddAsesi({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    jurusan_id: '',
    nama_lengkap: '',
    no_ktp: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    alamat: '',
    no_telepon: '',
    jenis_kelamin: '',
    kode_pos: '',
    kualifikasi_pendidikan: ''
  });

  const [errors, setErrors] = useState({});
  const [showAddNotif, setShowAddNotif] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username harus diisi';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password harus diisi';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password minimal 6 karakter';
    }
    
    if (!formData.jurusan_id) {
      newErrors.jurusan_id = 'Jurusan harus dipilih';
    }
    
    if (!formData.nama_lengkap.trim()) {
      newErrors.nama_lengkap = 'Nama lengkap harus diisi';
    }
    
    if (!formData.no_ktp.trim()) {
      newErrors.no_ktp = 'Nomor KTP harus diisi';
    } else if (formData.no_ktp.length !== 16) {
      newErrors.no_ktp = 'Nomor KTP harus 16 digit';
    }
    
    if (!formData.tempat_lahir.trim()) {
      newErrors.tempat_lahir = 'Tempat lahir harus diisi';
    }
    
    if (!formData.tanggal_lahir) {
      newErrors.tanggal_lahir = 'Tanggal lahir harus diisi';
    }
    
    if (!formData.alamat.trim()) {
      newErrors.alamat = 'Alamat harus diisi';
    }
    
    if (!formData.no_telepon.trim()) {
      newErrors.no_telepon = 'Nomor telepon harus diisi';
    }
    
    if (!formData.jenis_kelamin) {
      newErrors.jenis_kelamin = 'Jenis kelamin harus dipilih';
    }
    
    if (!formData.kode_pos.trim()) {
      newErrors.kode_pos = 'Kode pos harus diisi';
    }
    
    if (!formData.kualifikasi_pendidikan.trim()) {
      newErrors.kualifikasi_pendidikan = 'Kualifikasi pendidikan harus diisi';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Show notification modal
      setShowAddNotif(true);
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
          TAMBAH DATA ASESI
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
            {/* Username */}
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
                Username *
              </label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => handleChange('username', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: errors.username ? '1px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
                placeholder="Masukkan username"
              />
              {errors.username && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>
                  {errors.username}
                </p>
              )}
            </div>

            {/* Email */}
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
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: errors.email ? '1px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
                placeholder="contoh@email.com"
              />
              {errors.email && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
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
                Password *
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: errors.password ? '1px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
                placeholder="Minimal 6 karakter"
              />
              {errors.password && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Jurusan */}
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
                Jurusan *
              </label>
              <select
                value={formData.jurusan_id}
                onChange={(e) => handleChange('jurusan_id', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: errors.jurusan_id ? '1px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
              >
                <option value="">Pilih Jurusan</option>
                <option value="1">Rekayasa Perangkat Lunak</option>
                <option value="2">Perhotelan</option>
                <option value="3">Busana</option>
                <option value="4">Usaha Layanan Pariwisata</option>
                <option value="5">Kuliner</option>
                <option value="6">Teknik Komputer dan Jaringan</option>
                <option value="7">Multimedia</option>
                <option value="8">Akuntansi</option>
                <option value="9">Administrasi Perkantoran</option>
              </select>
              {errors.jurusan_id && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>
                  {errors.jurusan_id}
                </p>
              )}
            </div>

            {/* Nama Lengkap */}
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
                Nama Lengkap *
              </label>
              <input
                type="text"
                value={formData.nama_lengkap}
                onChange={(e) => handleChange('nama_lengkap', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: errors.nama_lengkap ? '1px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
                placeholder="Masukkan nama lengkap"
              />
              {errors.nama_lengkap && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>
                  {errors.nama_lengkap}
                </p>
              )}
            </div>

            {/* No KTP */}
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
                Nomor KTP *
              </label>
              <input
                type="text"
                value={formData.no_ktp}
                onChange={(e) => handleChange('no_ktp', e.target.value)}
                maxLength="16"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: errors.no_ktp ? '1px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
                placeholder="16 digit nomor KTP"
              />
              {errors.no_ktp && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>
                  {errors.no_ktp}
                </p>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Tempat Lahir */}
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
                Tempat Lahir *
              </label>
              <input
                type="text"
                value={formData.tempat_lahir}
                onChange={(e) => handleChange('tempat_lahir', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: errors.tempat_lahir ? '1px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
                placeholder="Masukkan tempat lahir"
              />
              {errors.tempat_lahir && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>
                  {errors.tempat_lahir}
                </p>
              )}
            </div>

            {/* Tanggal Lahir */}
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
                Tanggal Lahir *
              </label>
              <input
                type="date"
                value={formData.tanggal_lahir}
                onChange={(e) => handleChange('tanggal_lahir', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: errors.tanggal_lahir ? '1px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
              />
              {errors.tanggal_lahir && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>
                  {errors.tanggal_lahir}
                </p>
              )}
            </div>

            {/* Alamat */}
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
                Alamat *
              </label>
              <textarea
                value={formData.alamat}
                onChange={(e) => handleChange('alamat', e.target.value)}
                rows="3"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: errors.alamat ? '1px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
                placeholder="Masukkan alamat lengkap"
              />
              {errors.alamat && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>
                  {errors.alamat}
                </p>
              )}
            </div>

            {/* No Telepon */}
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
                Nomor Telepon *
              </label>
              <input
                type="tel"
                value={formData.no_telepon}
                onChange={(e) => handleChange('no_telepon', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: errors.no_telepon ? '1px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
                placeholder="Contoh: 089123456789"
              />
              {errors.no_telepon && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>
                  {errors.no_telepon}
                </p>
              )}
            </div>

            {/* Jenis Kelamin */}
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
                Jenis Kelamin *
              </label>
              <div style={{ display: 'flex', gap: '20px' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="jenis_kelamin"
                    value="Laki-laki"
                    checked={formData.jenis_kelamin === 'Laki-laki'}
                    onChange={(e) => handleChange('jenis_kelamin', e.target.value)}
                    style={{ marginRight: '8px' }}
                  />
                  <span style={{ fontSize: '13px' }}>Laki-laki</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="jenis_kelamin"
                    value="Perempuan"
                    checked={formData.jenis_kelamin === 'Perempuan'}
                    onChange={(e) => handleChange('jenis_kelamin', e.target.value)}
                    style={{ marginRight: '8px' }}
                  />
                  <span style={{ fontSize: '13px' }}>Perempuan</span>
                </label>
              </div>
              {errors.jenis_kelamin && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>
                  {errors.jenis_kelamin}
                </p>
              )}
            </div>

            {/* Kode Pos */}
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
                Kode Pos *
              </label>
              <input
                type="text"
                value={formData.kode_pos}
                onChange={(e) => handleChange('kode_pos', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: errors.kode_pos ? '1px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
                placeholder="Contoh: 12345"
              />
              {errors.kode_pos && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>
                  {errors.kode_pos}
                </p>
              )}
            </div>

            {/* Kualifikasi Pendidikan */}
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
                Kualifikasi Pendidikan *
              </label>
              <input
                type="text"
                value={formData.kualifikasi_pendidikan}
                onChange={(e) => handleChange('kualifikasi_pendidikan', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: errors.kualifikasi_pendidikan ? '1px solid #dc3545' : '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
                placeholder="Contoh: SMK, SMA, S1, dll"
              />
              {errors.kualifikasi_pendidikan && (
                <p style={{
                  color: '#dc3545',
                  fontSize: '12px',
                  marginTop: '4px',
                  margin: '4px 0 0 0'
                }}>
                  {errors.kualifikasi_pendidikan}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '30px' }}>
          <button
            onClick={onCancel}
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
            Batal
          </button>
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
            Simpan Data
          </button>
        </div>
      </div>

      {/* Add Success Modal - Center of screen */}
      {showAddNotif && (
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
              Data Berhasil<br />Ditambahkan!
            </h2>

            {/* OK Text */}
            <div
              onClick={() => {
                setShowAddNotif(false);
                
                // Create new item
                const newItem = {
                  id: Date.now(),
                  username: formData.username.trim(),
                  email: formData.email.trim(),
                  password: formData.password,
                  jurusan_id: parseInt(formData.jurusan_id),
                  nama_lengkap: formData.nama_lengkap.trim(),
                  no_ktp: formData.no_ktp.trim(),
                  tempat_lahir: formData.tempat_lahir.trim(),
                  tanggal_lahir: formData.tanggal_lahir,
                  alamat: formData.alamat.trim(),
                  no_telepon: formData.no_telepon.trim(),
                  jenis_kelamin: formData.jenis_kelamin,
                  kode_pos: formData.kode_pos.trim(),
                  kualifikasi_pendidikan: formData.kualifikasi_pendidikan.trim()
                };
                
                if (onSave) {
                  onSave(newItem);
                }
                
                // Reset form after save
                setFormData({
                  username: '',
                  email: '',
                  password: '',
                  jurusan_id: '',
                  nama_lengkap: '',
                  no_ktp: '',
                  tempat_lahir: '',
                  tanggal_lahir: '',
                  alamat: '',
                  no_telepon: '',
                  jenis_kelamin: '',
                  kode_pos: '',
                  kualifikasi_pendidikan: ''
                });
                setErrors({});
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

export default AddAsesi;
