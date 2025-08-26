import React, { useState } from 'react';
import { 
  SelectField
} from '../components/FieldComponents';
import { useJurusan } from '../context/JurusanContext';
import { Upload, FileText, X, Check } from 'lucide-react';
import { useSkema } from '../context/SkemaContext';

function AddSkema({ onBack, onSave, onCancel }) {
  const { importFile, loading, error } = useSkema();
  const [formData, setFormData] = useState({
    jurusan_id: '',
    files: {
      apl02: null,
      ak01: null,
      ak04: null,
      ak02: null,
      ak03: null,
      ak05: null
    }
  });
  
  const { jurusanList } = useJurusan();
  const [errors, setErrors] = useState({});
  const [dragOver, setDragOver] = useState({});
  
  const JURUSAN_OPTIONS = jurusanList.map(jurusan => ({
    value: jurusan.id,
    label: jurusan.nama_jurusan
  }));

  const FILE_TYPES = [
    { key: 'apl02', label: 'APL.02 - Asesmen Mandiri', description: 'Formulir asesmen mandiri peserta' },
    { key: 'ak01', label: 'AK.01 - Asesmen Kompetensi', description: 'Panduan asesmen kompetensi' },
    { key: 'ak04', label: 'AK.04 - Checklist Observasi', description: 'Lembar checklist observasi aktivitas' },
    { key: 'ak02', label: 'AK.02 - Jadwal Asesmen', description: 'Jadwal pelaksanaan asesmen' },
    { key: 'ak03', label: 'AK.03 - Banding Asesmen', description: 'Formulir banding asesmen' },
    { key: 'ak05', label: 'AK.05 - Umpan Balik', description: 'Formulir umpan balik dan evaluasi' }
  ];

  const [showAddNotif, setShowAddNotif] = useState(false);

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

  const handleFileUpload = (fileType, file) => {
    if (file && (file.type === 'application/pdf' || file.type.includes('document') || file.type.includes('sheet'))) {
      setFormData(prev => ({
        ...prev,
        files: {
          ...prev.files,
          [fileType]: file
        }
      }));
      
      // Clear any file error
      if (errors[fileType]) {
        setErrors(prev => ({
          ...prev,
          [fileType]: ''
        }));
      }
    } else {
      setErrors(prev => ({
        ...prev,
        [fileType]: 'File harus berformat PDF, DOC, DOCX, atau XLS/XLSX'
      }));
    }
  };

  const handleFileDrop = (e, fileType) => {
    e.preventDefault();
    setDragOver(prev => ({ ...prev, [fileType]: false }));
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(fileType, files[0]);
    }
  };

  const handleDragOver = (e, fileType) => {
    e.preventDefault();
    setDragOver(prev => ({ ...prev, [fileType]: true }));
  };

  const handleDragLeave = (e, fileType) => {
    e.preventDefault();
    setDragOver(prev => ({ ...prev, [fileType]: false }));
  };

  const removeFile = (fileType) => {
    setFormData(prev => ({
      ...prev,
      files: {
        ...prev.files,
        [fileType]: null
      }
    }));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.jurusan_id) {
      newErrors.jurusan_id = 'Jurusan harus dipilih';
    }

    // Check if at least one file is uploaded
    const hasFiles = Object.values(formData.files).some(file => file !== null);
    if (!hasFiles) {
      newErrors.files = 'Minimal satu file harus diupload';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setShowAddNotif(true);
      if (onSave) {
        onSave(formData);
      }
    }
  };

  const handleCancel = () => {
    setFormData({
      jurusan_id: '',
      files: {
        apl02: null,
        ak01: null,
        ak04: null,
        ak02: null,
        ak03: null,
        ak05: null
      }
    });
    setErrors({});
    
    if (onCancel) {
      onCancel();
    } else if (onBack) {
      onBack();
    }
  };

  const FileUploadCard = ({ fileType, fileInfo }) => {
    const file = formData.files[fileType];
    const isDragOver = dragOver[fileType];
    const hasError = errors[fileType];

    return (
      <div style={{
        border: `2px dashed ${hasError ? '#dc3545' : isDragOver ? '#fd7e14' : file ? '#28a745' : '#dee2e6'}`,
        borderRadius: '12px',
        padding: '24px',
        textAlign: 'center',
        backgroundColor: isDragOver ? '#fff3e0' : file ? '#f8f9fa' : '#ffffff',
        transition: 'all 0.3s ease',
        position: 'relative',
        minHeight: '140px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {file ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: '#28a745',
              color: 'white'
            }}>
              <Check size={24} />
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontWeight: '600',
                color: '#333',
                fontSize: '14px',
                marginBottom: '4px',
                wordBreak: 'break-word'
              }}>
                {file.name}
              </div>
              <div style={{
                fontSize: '12px',
                color: '#6c757d'
              }}>
                {formatFileSize(file.size)}
              </div>
            </div>

            <button
              onClick={() => removeFile(fileType)}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              <X size={12} />
            </button>
          </div>
        ) : (
          <div
            onDrop={(e) => handleFileDrop(e, fileType)}
            onDragOver={(e) => handleDragOver(e, fileType)}
            onDragLeave={(e) => handleDragLeave(e, fileType)}
            style={{ cursor: 'pointer' }}
          >
            <input
              type="file"
              accept=".pdf,.doc,.docx,.xls,.xlsx"
              onChange={(e) => handleFileUpload(fileType, e.target.files[0])}
              style={{ display: 'none' }}
              id={`file-${fileType}`}
            />
            
            <label htmlFor={`file-${fileType}`} style={{ cursor: 'pointer', display: 'block' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: isDragOver ? '#fd7e14' : '#e9ecef',
                color: isDragOver ? 'white' : '#6c757d',
                margin: '0 auto 12px auto',
                transition: 'all 0.3s ease'
              }}>
                <Upload size={20} />
              </div>
              
              <div style={{
                fontSize: '14px',
                fontWeight: '500',
                color: '#333',
                marginBottom: '4px'
              }}>
                {isDragOver ? 'Lepaskan file disini' : 'Klik atau drag file'}
              </div>
              
              <div style={{
                fontSize: '12px',
                color: '#6c757d'
              }}>
                PDF, DOC, DOCX, XLS, XLSX
              </div>
            </label>
          </div>
        )}
        
        {hasError && (
          <div style={{
            fontSize: '12px',
            color: '#dc3545',
            marginTop: '8px'
          }}>
            {hasError}
          </div>
        )}
      </div>
    );
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
          TAMBAHKAN DATA SKEMA BARU
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
        {/* Jurusan Selection */}
        <div style={{ marginBottom: '40px' }}>
          <SelectField
            label="Jurusan"
            value={formData.jurusan_id}
            onChange={(value) => handleInputChange({ target: { name: 'jurusan_id', value } })}
            options={JURUSAN_OPTIONS}
            placeholder="Pilih Jurusan"
            error={errors.jurusan_id}
          />
        </div>

          {/* File Upload Section */}
          <div style={{ marginBottom: '40px' }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#333',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <FileText size={20} />
              Upload Dokumen Skema
            </h3>
            
            {errors.files && (
              <div style={{
                backgroundColor: '#f8d7da',
                color: '#721c24',
                padding: '12px',
                borderRadius: '8px',
                fontSize: '14px',
                marginBottom: '20px'
              }}>
                {errors.files}
              </div>
            )}

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}>
              {FILE_TYPES.map((fileInfo) => (
                <div key={fileInfo.key}>
                  <div style={{
                    marginBottom: '12px'
                  }}>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#333',
                      margin: '0 0 4px 0'
                    }}>
                      {fileInfo.label}
                    </h4>
                    <p style={{
                      fontSize: '12px',
                      color: '#6c757d',
                      margin: '0'
                    }}>
                      {fileInfo.description}
                    </p>
                  </div>
                  <FileUploadCard fileType={fileInfo.key} fileInfo={fileInfo} />
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '12px',
            paddingTop: '20px',
            borderTop: '1px solid #e0e0e0'
          }}>
            <button
              type="button"
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
              Simpan Data
            </button>
          </div>
      </div>

      {/* Success Notification */}
      {showAddNotif && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#28a745',
          color: 'white',
          padding: '16px 20px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          zIndex: 1000
        }}>
          Data skema berhasil disimpan!
        </div>
      )}
    </div>
  );
}

export default AddSkema;