import React, { useState, useEffect } from 'react';
import { useAsesi } from '../context/AsesiContext';
import { 
  InputField, 
  SelectField, 
  TextareaField, 
  RadioField, 
  DateField,
  JURUSAN_OPTIONS,
  GENDER_OPTIONS
} from '../components/FieldComponents';

function EditAsesi({ data, onSave, onCancel, onDelete }) {
  const { asesis, loading, error, fetchAsesis, addAsesi, editAsesi } = useAsesi();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    jurusan_id: 1,
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

  // Initialize form with existing data
  useEffect(() => {
    if (data) {
      setFormData({
        username: data.username || '',
        email: data.email || '',
        password: data.password || '',
        jurusan_id: data.jurusan_id || 1,
        nama_lengkap: data.nama_lengkap || '',
        no_ktp: data.no_ktp || '',
        tempat_lahir: data.tempat_lahir || '',
        tanggal_lahir: data.tanggal_lahir || '',
        alamat: data.alamat || '',
        no_telepon: data.no_telepon || '',
        jenis_kelamin: data.jenis_kelamin || '',
        kode_pos: data.kode_pos || '',
        kualifikasi_pendidikan: data.kualifikasi_pendidikan || ''
      });
    }
  }, [data]);

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        await editAsesi(data.id, formData);
        setShowEditNotif(true);
      } catch (error) {
        console.error("Error editing asesi:", error);
      }
    }
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = () => {
    if (onDelete) {
      onDelete(data.id);
    }
    setShowDeleteConfirm(false);
    setShowDeleteNotif(true);
  };

  const [errors, setErrors] = useState({});
  const [showEditNotif, setShowEditNotif] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showDeleteNotif, setShowDeleteNotif] = useState(false);

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
          EDIT DATA ASESI
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
            <InputField
              label="Username"
              value={formData.username}
              onChange={(e) => handleChange('username', e.target.value)}
              placeholder="Masukkan username"
              required
              error={errors.username}
            />

            <InputField
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="contoh@email.com"
              required
              error={errors.email}
            />

            <InputField
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              placeholder="Minimal 6 karakter"
              required
              error={errors.password}
            />

            <SelectField
              label="Jurusan"
              value={formData.jurusan_id}
              onChange={(e) => handleChange('jurusan_id', e.target.value)}
              options={JURUSAN_OPTIONS}
              placeholder="Pilih Jurusan"
              required
              error={errors.jurusan_id}
            />

            <InputField
              label="Nama Lengkap"
              value={formData.nama_lengkap}
              onChange={(e) => handleChange('nama_lengkap', e.target.value)}
              placeholder="Masukkan nama lengkap"
              required
              error={errors.nama_lengkap}
            />

            <InputField
              label="Nomor KTP"
              value={formData.no_ktp}
              onChange={(e) => handleChange('no_ktp', e.target.value)}
              placeholder="16 digit nomor KTP"
              maxLength="16"
              required
              error={errors.no_ktp}
            />
          </div>

          {/* Right Column */}
          <div>
            <InputField
              label="Tempat Lahir"
              value={formData.tempat_lahir}
              onChange={(e) => handleChange('tempat_lahir', e.target.value)}
              placeholder="Masukkan tempat lahir"
              required
              error={errors.tempat_lahir}
            />

            <DateField
              label="Tanggal Lahir"
              value={formData.tanggal_lahir}
              onChange={(e) => handleChange('tanggal_lahir', e.target.value)}
              required
              error={errors.tanggal_lahir}
            />

            <TextareaField
              label="Alamat"
              value={formData.alamat}
              onChange={(e) => handleChange('alamat', e.target.value)}
              placeholder="Masukkan alamat lengkap"
              rows={3}
              required
              error={errors.alamat}
            />

            <InputField
              label="Nomor Telepon"
              type="tel"
              value={formData.no_telepon}
              onChange={(e) => handleChange('no_telepon', e.target.value)}
              placeholder="Contoh: 089123456789"
              required
              error={errors.no_telepon}
            />

            <RadioField
              label="Jenis Kelamin"
              name="jenis_kelamin"
              value={formData.jenis_kelamin}
              onChange={(e) => handleChange('jenis_kelamin', e.target.value)}
              options={GENDER_OPTIONS}
              required
              error={errors.jenis_kelamin}
            />

            <InputField
              label="Kode Pos"
              value={formData.kode_pos}
              onChange={(e) => handleChange('kode_pos', e.target.value)}
              placeholder="Contoh: 12345"
              required
              error={errors.kode_pos}
            />

            <InputField
              label="Kualifikasi Pendidikan"
              value={formData.kualifikasi_pendidikan}
              onChange={(e) => handleChange('kualifikasi_pendidikan', e.target.value)}
              placeholder="Contoh: SMK, SMA, S1, dll"
              required
              error={errors.kualifikasi_pendidikan}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between', marginTop: '30px' }}>
          <button
            onClick={handleDelete}
            style={{
              padding: '10px 20px',
              backgroundColor: '#dc3545',
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
          <div style={{ display: 'flex', gap: '12px' }}>
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
              Simpan Perubahan
            </button>
          </div>
        </div>
      </div>

      {/* Edit Success Modal */}
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
              Data Berhasil<br />Diperbarui!
            </h2>

            <div
              onClick={() => {
                setShowEditNotif(false);
                if (onSave) {
                  onSave({ ...data, ...formData });
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
            width: '350px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            position: 'relative'
          }}>
            {/* Warning Icon */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#ffc107',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 25px auto'
            }}>
              <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 9v4m0 4h.01"
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
              margin: '0 0 15px 0',
              lineHeight: '1.4'
            }}>
              Konfirmasi Hapus
            </h2>
            
            <p style={{
              fontSize: '14px',
              color: '#666666',
              margin: '0 0 25px 0',
              lineHeight: '1.5',
              paddingBottom: '25px',
              borderBottom: '1px solid #e0e0e0'
            }}>
              Apakah Anda yakin ingin menghapus data asesi <strong>{formData.nama_lengkap}</strong>? Tindakan ini tidak dapat dibatalkan.
            </p>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <button
                onClick={() => setShowDeleteConfirm(false)}
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
                onClick={confirmDelete}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                }}
              >
                Ya, Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Success Modal */}
      {showDeleteNotif && (
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
              backgroundColor: '#dc3545',
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

            <div
              onClick={() => {
                setShowDeleteNotif(false);
                if (onCancel) {
                  onCancel();
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