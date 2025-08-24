import React, { useState } from 'react';

function AsesorLayout({ onBack }) {
  const [asesorData, setAsesorData] = useState([
    { id: 1, nama: 'Ahmad Susanto', email: 'ahmad@email.com', telepon: '081234567890', status: 'Aktif', sertifikat: 'Kompeten' },
    { id: 2, nama: 'Budi Hartono', email: 'budi@email.com', telepon: '081234567891', status: 'Aktif', sertifikat: 'Kompeten' },
    { id: 3, nama: 'Citra Dewi', email: 'citra@email.com', telepon: '081234567892', status: 'Tervalidasi', sertifikat: 'Kompeten' },
    { id: 4, nama: 'Dini Rahayu', email: 'dini@email.com', telepon: '081234567893', status: 'Tidak Aktif', sertifikat: 'Belum Kompeten' },
    { id: 5, nama: 'Eko Prasetyo', email: 'eko@email.com', telepon: '081234567894', status: 'Aktif', sertifikat: 'Kompeten' }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    status: 'Aktif',
    sertifikat: 'Kompeten'
  });

  const styles = {
    container: {
      width: '100%',
      height: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden'
    },
    header: {
      backgroundColor: 'white',
      padding: '20px 40px',
      borderBottom: '1px solid #e0e0e0',
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    },
    backButton: {
      backgroundColor: '#6b7280',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '5px',
      border: 'none',
      fontWeight: '500',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'background-color 0.2s'
    },
    headerTitle: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#000',
      margin: 0
    },
    content: {
      height: 'calc(100vh - 80px)',
      overflowY: 'auto',
      padding: '20px 40px'
    },
    addButton: {
      backgroundColor: '#10b981',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      fontWeight: '500',
      cursor: 'pointer',
      fontSize: '14px',
      marginBottom: '20px',
      transition: 'background-color 0.2s'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    tableHeader: {
      backgroundColor: '#f3f4f6',
      fontWeight: 'bold',
      padding: '12px',
      borderBottom: '1px solid #e5e7eb',
      textAlign: 'left'
    },
    tableCell: {
      padding: '12px',
      borderBottom: '1px solid #e5e7eb'
    },
    actionButton: {
      padding: '5px 10px',
      borderRadius: '3px',
      border: 'none',
      fontWeight: '500',
      cursor: 'pointer',
      fontSize: '12px',
      marginRight: '5px',
      transition: 'background-color 0.2s'
    },
    editButton: {
      backgroundColor: '#ff9500',
      color: 'white'
    },
    deleteButton: {
      backgroundColor: '#dc2626',
      color: 'white'
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    modalContent: {
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '8px',
      width: '500px',
      maxHeight: '80vh',
      overflowY: 'auto'
    },
    formGroup: {
      marginBottom: '15px'
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
      color: '#333'
    },
    input: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '14px',
      boxSizing: 'border-box'
    },
    select: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      fontSize: '14px',
      boxSizing: 'border-box',
      backgroundColor: 'white'
    },
    buttonGroup: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'flex-end',
      marginTop: '20px'
    },
    saveButton: {
      backgroundColor: '#10b981',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '4px',
      border: 'none',
      fontWeight: '500',
      cursor: 'pointer'
    },
    cancelButton: {
      backgroundColor: '#6b7280',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '4px',
      border: 'none',
      fontWeight: '500',
      cursor: 'pointer'
    }
  };

  const handleAdd = () => {
    setFormData({ nama: '', email: '', telepon: '', status: 'Aktif', sertifikat: 'Kompeten' });
    setEditingId(null);
    setShowForm(true);
  };

  const handleEdit = (asesor) => {
    setFormData({ 
      nama: asesor.nama, 
      email: asesor.email, 
      telepon: asesor.telepon, 
      status: asesor.status,
      sertifikat: asesor.sertifikat 
    });
    setEditingId(asesor.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      setAsesorData(asesorData.filter(item => item.id !== id));
    }
  };

  const handleSubmit = () => {
    if (editingId) {
      setAsesorData(asesorData.map(item => 
        item.id === editingId ? { ...item, ...formData } : item
      ));
    } else {
      const newId = Math.max(...asesorData.map(item => item.id)) + 1;
      setAsesorData([...asesorData, { id: newId, ...formData }]);
    }
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <button 
          style={styles.backButton}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#4b5563'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#6b7280'}
          onClick={onBack}
        >
          ← Kembali
        </button>
        <h1 style={styles.headerTitle}>Kelola Data Asesor</h1>
      </div>

      {/* Content */}
      <div style={styles.content}>
        <button 
          style={styles.addButton}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#059669'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#10b981'}
          onClick={handleAdd}
        >
          + Tambah Asesor
        </button>

        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>No</th>
              <th style={styles.tableHeader}>Nama</th>
              <th style={styles.tableHeader}>Email</th>
              <th style={styles.tableHeader}>Telepon</th>
              <th style={styles.tableHeader}>Status</th>
              <th style={styles.tableHeader}>Sertifikat</th>
              <th style={styles.tableHeader}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {asesorData.map((asesor, index) => (
              <tr key={asesor.id}>
                <td style={styles.tableCell}>{index + 1}</td>
                <td style={styles.tableCell}>{asesor.nama}</td>
                <td style={styles.tableCell}>{asesor.email}</td>
                <td style={styles.tableCell}>{asesor.telepon}</td>
                <td style={styles.tableCell}>{asesor.status}</td>
                <td style={styles.tableCell}>{asesor.sertifikat}</td>
                <td style={styles.tableCell}>
                  <button 
                    style={{...styles.actionButton, ...styles.editButton}}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#e6850e'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#ff9500'}
                    onClick={() => handleEdit(asesor)}
                  >
                    Edit
                  </button>
                  <button 
                    style={{...styles.actionButton, ...styles.deleteButton}}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#b91c1c'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#dc2626'}
                    onClick={() => handleDelete(asesor.id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2>{editingId ? 'Edit Asesor' : 'Tambah Asesor'}</h2>
            <div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Nama:</label>
                <input
                  style={styles.input}
                  type="text"
                  value={formData.nama}
                  onChange={(e) => setFormData({...formData, nama: e.target.value})}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Email:</label>
                <input
                  style={styles.input}
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Telepon:</label>
                <input
                  style={styles.input}
                  type="tel"
                  value={formData.telepon}
                  onChange={(e) => setFormData({...formData, telepon: e.target.value})}
                  required
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Status:</label>
                <select
                  style={styles.select}
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  required
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Tidak Aktif">Tidak Aktif</option>
                  <option value="Tervalidasi">Tervalidasi</option>
                </select>
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Sertifikat:</label>
                <select
                  style={styles.select}
                  value={formData.sertifikat}
                  onChange={(e) => setFormData({...formData, sertifikat: e.target.value})}
                  required
                >
                  <option value="Kompeten">Kompeten</option>
                  <option value="Belum Kompeten">Belum Kompeten</option>
                </select>
              </div>
              <div style={styles.buttonGroup}>
                <button type="button" style={styles.cancelButton} onClick={handleCancel}>
                  Batal
                </button>
                <button type="button" style={styles.saveButton} onClick={handleSubmit}>
                  {editingId ? 'Update' : 'Simpan'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AsesorLayout;