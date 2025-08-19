import React, { useState } from 'react';

function EditAsesi({ data, onSave, onCancel, onDelete }) {
  const [formData, setFormData] = useState({
    nama: data?.nama || '',
    pekerjaan: data?.pekerjaan || '',
    jurusan: data?.jurusan || '',
    kelas: data?.kelas || ''
  });

  const handleSubmit = () => {
    if (formData.nama.trim() && formData.jurusan.trim()) {
      onSave(formData);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
                placeholder="Masukkan nama lengkap"
              />
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
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  fontSize: '13px',
                  boxSizing: 'border-box',
                  backgroundColor: '#f8f9fa',
                }}
                placeholder="Contoh: Siswa, Mahasiswa, dll"
              />
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
                  border: '1px solid #ccc',
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
                  border: '1px solid #ccc',
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
    </div>
  );
}

export default EditAsesi;
