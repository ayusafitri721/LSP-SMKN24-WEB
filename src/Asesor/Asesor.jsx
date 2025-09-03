import React, { useState, useEffect } from 'react';
import { getAsesors, createAsesor, updateAsesor, deleteAsesor } from '../Api/api';

export default function Asesor({ onBack, onNavigate }) {
  const [asesors, setAsesors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ================== FETCH ==================
  const fetchAsesors = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await getAsesors(1, 100);
      setAsesors(res.data?.data.data || []);
      console.log("Fetched asesors:", res.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Gagal fetch data asesor");
      setAsesors([]);
    } finally {
      setLoading(false);
    }
  };

  // ================== CREATE ==================
  const addAsesor = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const res = await createAsesor(data);
      const newAsesor = res.data?.data;
      if (newAsesor) setAsesors((prev) => [...prev, newAsesor]);
      return newAsesor;
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Gagal tambah asesor");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ================== UPDATE ==================
  const editAsesor = async (id, data) => {
    setLoading(true);
    setError(null);

    try {
      const res = await updateAsesor(id, data);
      const updated = res.data?.data;
      setAsesors((prev) =>
        prev.map((a) => (a.id === id ? updated : a))
      );
      return updated;
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Gagal update asesor");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ================== DELETE ==================
  const removeAsesor = async (id) => {
    setLoading(true);
    setError(null);

    try {
      await deleteAsesor(id);
      setAsesors((prev) => prev.filter((a) => a.id !== id));
      return true;
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Gagal hapus asesor");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Load data on component mount
  useEffect(() => {
    fetchAsesors();
  }, []);

  const asesorList = asesors || [];

  const handleAddClick = () => {
    onNavigate('addasesor');
  };

  const handleEdit = (asesor) => {
    onNavigate('editasesor', asesor);
  };

  const handleDelete = async(id) => {
    if (window.confirm("Yakin mau hapus asesor ini?")) {
      await removeAsesor(id)
      .then(() => {
        alert("Asesor berhasil dihapus");
        fetchAsesors();
      })
      .catch((err) => {
        alert("Gagal menghapus asesor: " + (err.message || "Terjadi kesalahan"));
      });
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <div>Loading...</div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <div style={{ color: '#dc3545' }}>Error: {error}</div>
      </div>
    );
  }

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
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #dee2e6',
        }}
      >
        <button
          onClick={onBack}
          style={{
            width: '24px',
            height: '24px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            marginRight: '10px',
            padding: 0,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1
          style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#333',
            margin: 0,
          }}
        >
          ASESOR
        </h1>
        <div style={{ marginLeft: 'auto' }}>
          <button
            onClick={handleAddClick}
            style={{
              backgroundColor: '#ff7849',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '12px',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            + Tambah Data Baru
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div
        style={{
          backgroundColor: 'white',
          margin: '0',
          overflow: 'hidden',
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '12px',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <th
                style={{
                  padding: '12px 8px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '12px',
                  width: '50px',
                  border: '1px solid #dee2e6',
                }}
              >
                No
              </th>
              <th
                style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '12px',
                  border: '1px solid #dee2e6',
                }}
              >
                Nama Lengkap
              </th>
              <th
                style={{
                  padding: '12px 8px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '12px',
                  width: '100px',
                  border: '1px solid #dee2e6',
                }}
              >
                Pekerjaan
              </th>
              <th
                style={{
                  padding: '12px 8px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '12px',
                  width: '120px',
                  border: '1px solid #dee2e6',
                }}
              >
                Sertifikasi
              </th>
              <th
                style={{
                  padding: '12px 8px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '12px',
                  width: '100px',
                  border: '1px solid #dee2e6',
                }}
              >
                Tanggal Daftar
              </th>
              <th
                style={{
                  padding: '12px 8px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#333',
                  fontSize: '12px',
                  width: '120px',
                  border: '1px solid #dee2e6',
                }}
              >
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {asesorList && asesorList.length > 0 ? (
              asesorList.map((asesor, index) => (
                <tr
                  key={asesor.id || index}
                  style={{
                    backgroundColor: 'white',
                  }}
                >
                  <td
                    style={{
                      padding: '10px 8px',
                      textAlign: 'center',
                      color: '#333',
                      fontSize: '12px',
                      border: '1px solid #dee2e6',
                    }}
                  >
                    {asesor.user_id || index + 1}
                  </td>
                  <td
                    style={{
                      padding: '10px 16px',
                      color: '#333',
                      fontSize: '12px',
                      border: '1px solid #dee2e6',
                    }}
                  >
                    {asesor.nama_lengkap}
                  </td>
                  <td
                    style={{
                      padding: '10px 8px',
                      textAlign: 'center',
                      color: '#333',
                      fontSize: '12px',
                      border: '1px solid #dee2e6',
                    }}
                  >
                    {asesor.no_registrasi}
                  </td>
                  <td 
                    style={{ 
                      padding: '10px 8px', 
                      textAlign: 'center', 
                      fontSize: '12px',
                      border: '1px solid #dee2e6',
                    }}
                  >
                    <span
                      style={{
                        color:
                          asesor.sertifikat === 'Tersertifikasi'
                            ? '#28a745'
                            : asesor.sertifikat === 'Tidak Tersertifikasi'
                            ? '#dc3545'
                            : '#6c757d',
                        fontWeight: '500',
                      }}
                    >
                      {asesor.email}
                    </span>
                  </td>
                  <td
                    style={{
                      padding: '10px 8px',
                      textAlign: 'center',
                      color: '#333',
                      fontSize: '12px',
                      border: '1px solid #dee2e6',
                    }}
                  >
                    {asesor.jenis_kelamin}
                  </td>
                  <td 
                    style={{ 
                      padding: '10px 8px', 
                      textAlign: 'center',
                      border: '1px solid #dee2e6',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '5px', justifyContent: 'center' }}>
                      <button
                        onClick={() => handleEdit(asesor)}
                        style={{
                          backgroundColor: '#ffc107',
                          color: '#212529',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '4px 8px',
                          fontSize: '11px',
                          fontWeight: '500',
                          cursor: 'pointer',
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(asesor.id)}
                        style={{
                          backgroundColor: '#dc3545',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '4px 8px',
                          fontSize: '11px',
                          fontWeight: '500',
                          cursor: 'pointer',
                        }}
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td 
                  colSpan="6" 
                  style={{
                    padding: '20px',
                    textAlign: 'center',
                    color: '#666',
                    border: '1px solid #dee2e6',
                  }}
                >
                  Belum ada data asesor
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}