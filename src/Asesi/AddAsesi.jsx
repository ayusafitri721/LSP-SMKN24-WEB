import React, { useState } from 'react';
import { useAsesi } from '../context/AsesiContext';
import { 
  InputField, 
  SelectField, 
  TextareaField, 
  RadioField, 
  DateField,
  GENDER_OPTIONS
} from '../components/FieldComponents';

import { useJurusan } from '../context/JurusanContext';

import { ModalWrapper, ConfirmationModal, SuccessModal, InfoModal, LoadingModal } from '../components/Modal';

function AddAsesi({ onSave, onCancel }) {
  const { asesis, loading, error, fetchAsesis, addAsesi, editAsesi } = useAsesi();
  const { jurusanList } = useJurusan();

  const JURUSAN_OPTIONS = jurusanList.map(jurusan => ({
    value: jurusan.id,
    label: jurusan.nama_jurusan
  }));
  
  // Konsisten default values
  const initialFormData = {
    username: '',
    email: '',
    password: '',
    jurusan_id: '', // Konsisten dengan reset
    nama_lengkap: '',
    no_ktp: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    alamat: '',
    no_telepon: '',
    jenis_kelamin: '',
    kode_pos: '',
    kualifikasi_pendidikan: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [showAddNotif, setShowAddNotif] = useState(false);
  const [submitError, setSubmitError] = useState(''); // Tambah error state

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
    } else if (!/^\d{16}$/.test(formData.no_ktp)) { // Perbaikan validasi KTP
      newErrors.no_ktp = 'Nomor KTP harus 16 digit angka';
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
    } else if (!/^[0-9+\-\s()]+$/.test(formData.no_telepon)) { // Validasi format telpon
      newErrors.no_telepon = 'Format nomor telepon tidak valid';
    }
    
    if (!formData.jenis_kelamin) {
      newErrors.jenis_kelamin = 'Jenis kelamin harus dipilih';
    }
    
    if (!formData.kode_pos.trim()) {
      newErrors.kode_pos = 'Kode pos harus diisi';
    } else if (!/^\d{5}$/.test(formData.kode_pos)) { // Validasi kode pos
      newErrors.kode_pos = 'Kode pos harus 5 digit angka';
    }
    
    if (!formData.kualifikasi_pendidikan.trim()) {
      newErrors.kualifikasi_pendidikan = 'Kualifikasi pendidikan harus diisi';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    setSubmitError(''); // Clear previous error
    
    if (validateForm()) {
      try {
        await addAsesi(formData);
        setShowAddNotif(true);
      } catch (error) {
        console.error("Error adding asesi:", error);
        setSubmitError('Gagal menyimpan data. Silakan coba lagi.'); // User feedback
      }
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
    
    // Clear submit error ketika user mulai edit
    if (submitError) {
      setSubmitError('');
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitError('');
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
        {/* Error Alert */}
        {submitError && (
          <div
            style={{
              backgroundColor: '#f8d7da',
              color: '#721c24',
              padding: '12px',
              borderRadius: '6px',
              marginBottom: '20px',
              fontSize: '14px'
            }}
          >
            {submitError}
          </div>
        )}

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
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ''); // Hanya angka
                if (value.length <= 16) {
                  handleChange('no_ktp', value);
                }
              }}
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
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ''); // Hanya angka
                if (value.length <= 5) {
                  handleChange('kode_pos', value);
                }
              }}
              placeholder="Contoh: 12345"
              maxLength="5"
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
            disabled={loading} // Disable saat loading
            style={{
              padding: '10px 20px',
              backgroundColor: loading ? '#ccc' : '#ff7849',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '500',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Menyimpan...' : 'Simpan Data'}
          </button>
        </div>
      </div>

      <SuccessModal 
        isVisible={showAddNotif}
        title={"Berhasil!"}
        message="Data Berhasil Ditambahkan!" 
        buttonText="Tutup"
        autoClose={true}
        autoCloseDelay={7000}
        onClose={() => {
          setShowAddNotif(false);
          resetForm(); // Gunakan function yang sudah dibuat
          onSave(); // Tidak perlu pass data, karena sudah di-handle oleh addAsesi
          
        }} 
      />
      
      <LoadingModal isOpen={loading} message="Menyimpan data..." />
    </div>
  );
}

export default AddAsesi;