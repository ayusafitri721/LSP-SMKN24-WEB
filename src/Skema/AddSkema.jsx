import React, { useState } from 'react';
import { 
  InputField, 
  SelectField, 
  TextareaField, 
  RadioField, 
  DateField,
  GENDER_OPTIONS
} from '../components/FieldComponents';
import { useJurusan } from '../context/JurusanContext';

function AddSkema({ onBack, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    jurusan_id: ''
  });
  const{jurusanList} = useJurusan();

  const [errors, setErrors] = useState({});
  const JURUSAN_OPTIONS = jurusanList.map(jurusan => ({
    value: jurusan.id,
    label: jurusan.nama_jurusan
  }));
  const [showAddNotif, setShowAddNotif] = useState(false);

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
      setShowAddNotif(true);
    }
  };

  const handleCancel = () => {
    // Reset form
    setFormData({
      judulSkema: '',
      jumlahSiswa: ''
    });
    setErrors({});
    
    // Call appropriate callback
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
          TAMBAHKAN DATA BARU
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
            {/* Jurusan Skema */}
            <div>

              <SelectField
                label={"Jurusan"}
                value={formData.jurusan_id}
                onChange={
                  handleInputChange("jurusan_id", )
                }
                options={JURUSAN_OPTIONS}
                placeholder={"example : Rekayasa Perangkat Lunak"}

              />
              
            </div>
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


    </div>
  );
}

export default AddSkema;