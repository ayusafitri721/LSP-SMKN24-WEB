import React, { useState, useEffect } from 'react';
import { ArrowLeft, Save, Trash2 } from 'lucide-react';
import { InputField, SelectField, TextareaField } from '../components/FieldComponents.jsx';
import { useJurusan } from '../context/JurusanContext.jsx';

function EditJurusan({ item, onBack, onSave, onDelete, initialData }) {
  const { loading, error, updateJurusan,fetchJurusans, removeJurusan } = useJurusan();
  const [formData, setFormData] = useState({
    kode_jurusan: '',
    nama_jurusan: '',
    jenjang: '',
    deskripsi: ''
  });

  console.log("id", initialData.id)
  
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  const jenjangOptions = [
    { value: 'SMK', label: 'SMK (Sekolah Menengah Kejuruan)' },
    { value: 'D1', label: 'D1 (Diploma 1)' },
    { value: 'D2', label: 'D2 (Diploma 2)' },
    { value: 'D3', label: 'D3 (Diploma 3)' },
    { value: 'S1', label: 'S1 (Sarjana)' }
  ];

  // Load initial data when component mounts
  useEffect(() => {
    if (initialData) {
      setFormData({
        kode_jurusan: initialData.kode_jurusan || '',
        nama_jurusan: initialData.nama_jurusan || '',
        jenjang: initialData.jenjang || '',
        deskripsi: initialData.deskripsi || ''
      });
    }
  }, [initialData]);

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
      await updateJurusan(initialData.id, formData);
      setShowSuccess(true);
    } catch (err) {
      console.error('Error updating jurusan:', err);
      alert('Gagal memperbarui jurusan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    try {
      await removeJurusan(initialData.id);
      setShowDeleteConfirm(false);
      setShowDeleteSuccess(true);
    } catch (err) {
      console.error('Error deleting jurusan:', err);
      alert('Gagal menghapus jurusan. Silakan coba lagi.');
    }
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

  // Red Warning Icon Component
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
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px'
    }}>
      {/* Notifikasi Konfirmasi Delete */}
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
          
          {/* Modal Konfirmasi */}
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
            
            {/* Text */}
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
              "{formData.nama_jurusan || 'Data ini'}"?
            </div>
            
            {/* Line separator */}
            <div style={{
              width: '100%',
              height: '2px',
              backgroundColor: '#E2E8F0',
              marginBottom: '30px'
            }}></div>
            
            {/* Buttons */}
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
                onClick={handleDelete}
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
                setShowSuccess(false);
                onSave();
                setLoading(false);
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
                setShowDeleteSuccess(false);
                onSave();
                setIsSubmitting(false);
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
              Edit Data Jurusan
            </h1>
            <p style={{
              fontSize: '14px',
              color: '#343434',
              margin: '4px 0 0 0'
            }}>
              Perbarui data jurusan yang sudah ada
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
              onClick={() => setShowDeleteConfirm(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                backgroundColor: '#FFFFFF',
                border: '2px solid #E53E3E',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '500',
                color: '#E53E3E',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#E53E3E';
                e.target.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#FFFFFF';
                e.target.style.color = '#E53E3E';
              }}
            >
              <Trash2 size={16} />
              Hapus
            </button>

            <div style={{ display: 'flex', gap: '16px' }}>
              <button
                type="button"
                onClick={onBack}
                style={{
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
                Batal
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
                {isSubmitting || loading ? 'Menyimpan...' : 'Simpan Perubahan'}
              </button>
            </div>
          </div>
        </form>
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