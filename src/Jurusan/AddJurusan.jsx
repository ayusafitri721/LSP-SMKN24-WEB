import React, { useState } from 'react';
import { ArrowLeft, Save, X } from 'lucide-react';
import { InputField, SelectField, TextareaField } from '../components/FieldComponents.jsx'; // Import field components
import {useJurusan} from '../context/JurusanContext.jsx'
// Mock useJurusan hook for demo

function AddJurusan({ onBack, onSave }) {
  const { loading, error, postJurusan } = useJurusan();
  const [formData, setFormData] = useState({
    kode_jurusan: '',
    nama_jurusan: '',
    jenjang: '',
    deskripsi: ''
  });
  
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const jenjangOptions = [
    { value: 'SMK', label: 'SMK (Sekolah Menengah Kejuruan)' },
    { value: 'D1', label: 'D1 (Diploma 1)' },
    { value: 'D2', label: 'D2 (Diploma 2)' },
    { value: 'D3', label: 'D3 (Diploma 3)' },
    { value: 'S1', label: 'S1 (Sarjana)' }
  ];

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear validation error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.kode_jurusan.trim()) {
      errors.kode_jurusan = 'Kode jurusan wajib diisi';
    }
    
    if (!formData.nama_jurusan.trim()) {
      errors.nama_jurusan = 'Nama jurusan wajib diisi';
    }
    
    if (!formData.jenjang) {
      errors.jenjang = 'Jenjang wajib dipilih';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await postJurusan(formData);
      if (onSave) onSave();
      
      // Reset form
      setFormData({
        kode_jurusan: '',
        nama_jurusan: '',
        jenjang: '',
        deskripsi: ''
      });
      
      // Show success message (you can customize this)
      alert('Jurusan berhasil ditambahkan!');
      
    } catch (err) {
      console.error('Error creating jurusan:', err);
      alert('Gagal menambahkan jurusan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      kode_jurusan: '',
      nama_jurusan: '',
      jenjang: '',
      deskripsi: ''
    });
    setValidationErrors({});
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px'
    }}>
      {/* Header */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        marginBottom: '30px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '20px'
        }}>
          <button
            onClick={onBack}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px',
              backgroundColor: '#FFFFFF',
              border: '2px solid #79B4F1',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#79B4F1';
              e.target.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#FFFFFF';
              e.target.style.color = '#343434';
            }}
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#000000',
              margin: 0
            }}>
              Tambah Jurusan Baru
            </h1>
            <p style={{
              fontSize: '14px',
              color: '#343434',
              margin: '4px 0 0 0'
            }}>
              Isi form di bawah untuk menambahkan jurusan baru
            </p>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#FFFFFF',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        border: '1px solid #79B4F1'
      }}>
        {/* Error Display */}
        {error && (
          <div style={{
            backgroundColor: '#fff3f3',
            border: '1px solid #FF8200',
            borderRadius: '12px',
            padding: '16px',
            marginBottom: '24px',
            color: '#FF8200',
            fontSize: '14px'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            marginBottom: '24px'
          }}>
            {/* Kode Jurusan */}
            <InputField
              label="Kode Jurusan"
              value={formData.kode_jurusan}
              onChange={handleInputChange('kode_jurusan')}
              placeholder="Contoh: RPL01"
              required={true}
              error={validationErrors.kode_jurusan}
              maxLength={10}
            />

            {/* Jenjang */}
            <SelectField
              label="Jenjang Pendidikan"
              value={formData.jenjang}
              onChange={handleInputChange('jenjang')}
              options={jenjangOptions}
              placeholder="Pilih jenjang..."
              required={true}
              error={validationErrors.jenjang}
            />
          </div>

          {/* Nama Jurusan */}
          <InputField
            label="Nama Jurusan"
            value={formData.nama_jurusan}
            onChange={handleInputChange('nama_jurusan')}
            placeholder="Masukkan nama jurusan lengkap"
            required={true}
            error={validationErrors.nama_jurusan}
            maxLength={100}
          />

          {/* Deskripsi */}
          <TextareaField
            label="Deskripsi"
            value={formData.deskripsi}
            onChange={handleInputChange('deskripsi')}
            placeholder="Masukkan deskripsi jurusan (opsional)"
            rows={4}
            error={validationErrors.deskripsi}
          />

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            marginTop: '32px'
          }}>
            <button
              type="button"
              onClick={handleReset}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                backgroundColor: '#FFFFFF',
                border: '2px solid #343434',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#343434',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#343434';
                e.target.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#FFFFFF';
                e.target.style.color = '#343434';
              }}
            >
              <X size={16} />
              Reset
            </button>

            <button
              type="submit"
              disabled={isSubmitting || loading}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 32px',
                backgroundColor: isSubmitting || loading ? '#79B4F1' : '#10A9C9',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '600',
                color: '#FFFFFF',
                cursor: isSubmitting || loading ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                opacity: isSubmitting || loading ? 0.7 : 1
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting && !loading) {
                  e.target.style.backgroundColor = '#2F90FF';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 25px rgba(47, 144, 255, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSubmitting && !loading) {
                  e.target.style.backgroundColor = '#10A9C9';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }
              }}
            >
              <Save size={16} />
              {isSubmitting || loading ? 'Menyimpan...' : 'Simpan Jurusan'}
            </button>
          </div>
        </form>
      </div>

      {/* Info Card */}
      <div style={{
        maxWidth: '800px',
        margin: '20px auto 0',
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid #FF9E62',
        borderLeft: '4px solid #FF8200'
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#FF8200',
          margin: '0 0 8px 0'
        }}>
          💡 Tips Pengisian
        </h3>
        <ul style={{
          fontSize: '14px',
          color: '#343434',
          margin: 0,
          paddingLeft: '18px'
        }}>
          <li style={{ marginBottom: '4px' }}>Kode jurusan sebaiknya singkat dan mudah diingat</li>
          <li style={{ marginBottom: '4px' }}>Nama jurusan harus sesuai dengan standar pendidikan</li>
          <li style={{ marginBottom: '4px' }}>Deskripsi membantu siswa memahami jurusan dengan lebih baik</li>
        </ul>
      </div>
    </div>
  );
}

export default AddJurusan;