import React, { useState } from 'react';

function AddAsesmen({ onBack, onSave }) {
  const [judul, setJudul] = useState('');
  const [program, setProgram] = useState('');
  const [tanggal, setTanggal] = useState('');

  const handleSave = () => {
    if (judul && program && tanggal) {
      onSave && onSave({ judul, program, tanggal });
    } else {
      alert('Harap isi semua field!');
    }
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <h1 style={titleStyle}>Tambah Asesmen</h1>

      {/* Card Form */}
      <div style={cardStyle}>
        <div style={formRow}>
          <div style={formGroup}>
            <label style={labelStyle}>Judul Asesmen</label>
            <input
              style={inputStyle}
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
              placeholder="Masukkan judul asesmen"
            />
          </div>
          <div style={formGroup}>
            <label style={labelStyle}>Program</label>
            <input
              style={inputStyle}
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              placeholder="Masukkan program"
            />
          </div>
        </div>
        <div style={formRow}>
          <div style={formGroup}>
            <label style={labelStyle}>Tanggal Dibuat</label>
            <input
              type="date"
              style={inputStyle}
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={btnGroupStyle}>
        <button style={cancelBtnStyle} onClick={onBack}>Batal</button>
        <button style={saveBtnStyle} onClick={handleSave}>Simpan</button>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  minHeight: '100vh',
  backgroundColor: '#f8f9fa',
  padding: '40px',
  fontFamily: 'Segoe UI, Roboto, sans-serif'
};

const titleStyle = {
  fontSize: '28px',
  fontWeight: '700',
  color: '#333',
  textAlign: 'center',
  marginBottom: '32px'
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '32px',
  borderRadius: '14px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  margin: '0 auto 32px auto',
  maxWidth: '950px'
};

const formRow = {
  display: 'flex',
  gap: '24px',
  marginBottom: '20px'
};

const formGroup = { flex: 1 };
const labelStyle = { display: 'block', fontSize: '16px', fontWeight: '600', marginBottom: '8px' };
const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: '10px',
  border: '1px solid #bbb',
  fontSize: '16px'
};

const btnGroupStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '16px',
  maxWidth: '950px',
  margin: '0 auto'
};

const cancelBtnStyle = {
  backgroundColor: '#6c757d',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  padding: '12px 22px',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer'
};

const saveBtnStyle = {
  backgroundColor: '#ff6b35',
  color: 'white',
  border: 'none',
  borderRadius: '10px',
  padding: '12px 22px',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer'
};

export default AddAsesmen;
