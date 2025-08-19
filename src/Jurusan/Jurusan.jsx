import React, { useState } from 'react';
import AddJurusan from './AddJurusan';
import EditJurusan from './EditJurusan';

function Jurusan({ onBack }) {
  const [data, setData] = useState([
    { id: 1, kompetensiKeahlian: 'Erwin Alaskar Mega', jumlahSiswa: 'Rekayasa Perangkat Lunak' },
    { id: 2, kompetensiKeahlian: 'Erwin Alaskar Mega', jumlahSiswa: 'Rekayasa Perangkat Lunak' },
    { id: 3, kompetensiKeahlian: 'Erwin Alaskar Mega', jumlahSiswa: 'Rekayasa Perangkat Lunak' },
    { id: 4, kompetensiKeahlian: 'Erwin Alaskar Mega', jumlahSiswa: 'Perhotelan' },
    { id: 5, kompetensiKeahlian: 'Erwin Alaskar Mega', jumlahSiswa: 'Busana' },
    { id: 6, kompetensiKeahlian: 'Erwin Alaskar Mega', jumlahSiswa: 'Usaha Layanan Pariwisata' },
    { id: 7, kompetensiKeahlian: 'Erwin Alaskar Mega', jumlahSiswa: 'Kuliner' }
  ]);

  const [halaman, setHalaman] = useState('list'); // list | add | edit
  const [editItem, setEditItem] = useState(null);

const handleAddSave = (newItem) => {
    setData(prev => [...prev, newItem]);
    setHalaman('list');
  };

  const handleEditClick = (id) => {
    const item = data.find(d => d.id === id);
    setEditItem(item);
    setHalaman('edit');
  };

  // Render AddJurusan (akan full screen tanpa sidebar)
  if (halaman === 'add') {
    return <AddJurusan onBack={() => setHalaman('list')} onSave={handleAddSave} />;
  }

  // Render EditJurusan
  if (halaman === 'edit') {
    return <EditJurusan item={editItem} onBack={() => setHalaman('list')} />;
  }

  // Main list dengan layout asli (ada ruang untuk sidebar)
  return (
    <div style={{ 
      padding: '0', 
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      width: '100%'
    }}>
      {/* Header */}
      <div style={{
        backgroundColor: '#f5f5f5',
        padding: '20px 30px',
        borderBottom: '1px solid #e0e0e0',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center',
          marginBottom: '20px'
        }}>
          <button 
            onClick={onBack}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              marginRight: '15px',
              cursor: 'pointer',
              color: '#333'
            }}
          >
            ←
          </button>
          <h1 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            margin: '0',
            color: '#333'
          }}>
            JURUSAN
          </h1>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button 
            onClick={() => setHalaman('add')}
            style={{
              backgroundColor: '#FF8A50',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              fontSize: '14px',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            + Tambah Data Baru
          </button>
        </div>
      </div>

      {/* Table */}
      <div style={{ 
        padding: '0 30px 30px 30px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'separate',
          borderSpacing: '0',
          fontSize: '14px',
          backgroundColor: 'white',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <thead>
            <tr>
              <th style={{
                padding: '15px 20px',
                textAlign: 'center',
                fontWeight: '500',
                color: '#666',
                backgroundColor: '#e9ecef',
                border: '1px solid #dee2e6',
                width: '60px'
              }}>
                No
              </th>
              <th style={{
                padding: '15px 20px',
                textAlign: 'center',
                fontWeight: '500',
                color: '#666',
                backgroundColor: '#e9ecef',
                border: '1px solid #dee2e6',
                borderLeft: 'none'
              }}>
                Kompetensi Keahlian
              </th>
              <th style={{
                padding: '15px 20px',
                textAlign: 'center',
                fontWeight: '500',
                color: '#666',
                backgroundColor: '#e9ecef',
                border: '1px solid #dee2e6',
                borderLeft: 'none'
              }}>
                Jumlah Siswa
              </th>
              <th style={{
                padding: '15px 20px',
                textAlign: 'center',
                fontWeight: '500',
                color: '#666',
                backgroundColor: '#e9ecef',
                border: '1px solid #dee2e6',
                borderLeft: 'none',
                width: '120px'
              }}>
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td style={{
                  padding: '15px 20px',
                  textAlign: 'center',
                  color: '#333',
                  border: '1px solid #dee2e6',
                  borderTop: 'none',
                  backgroundColor: 'white'
                }}>
                  {item.id}
                </td>
                <td style={{
                  padding: '15px 20px',
                  color: '#333',
                  border: '1px solid #dee2e6',
                  borderTop: 'none',
                  borderLeft: 'none',
                  backgroundColor: 'white'
                }}>
                  {item.kompetensiKeahlian}
                </td>
                <td style={{
                  padding: '15px 20px',
                  color: '#333',
                  border: '1px solid #dee2e6',
                  borderTop: 'none',
                  borderLeft: 'none',
                  backgroundColor: 'white'
                }}>
                  {item.jumlahSiswa}
                </td>
                <td style={{
                  padding: '15px 20px',
                  textAlign: 'center',
                  border: '1px solid #dee2e6',
                  borderTop: 'none',
                  borderLeft: 'none',
                  backgroundColor: 'white'
                }}>
                  <button
                    onClick={() => handleEditClick(item.id)}
                    style={{
                      backgroundColor: '#FFC107',
                      color: '#333',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      cursor: 'pointer',
                      fontWeight: '500'
                    }}
                  >
                    Edit Data
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Back Button */}
      <div style={{ 
        padding: '0 30px 30px 30px',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <button 
          onClick={onBack}
          style={{
            backgroundColor: '#FF8A50',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '14px',
            cursor: 'pointer',
            fontWeight: '500',
            boxShadow: '0 2px 4px rgba(255, 138, 80, 0.3)'
          }}
        >
          Kembali ke Home
        </button>
      </div>
    </div>
  );
}

export default Jurusan;
