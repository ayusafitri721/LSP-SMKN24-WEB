import React, { useState } from 'react';

function LihatListAsesmen({ onBack, data }) {
  const [formData, setFormData] = useState({
    namaJadwal: '',
    tuk: '',
    tanggalUjian: '',
    namaLengkap: '',
    nik: '',
    prodi: '',
    ttl: '',
    jenisKelamin: 'laki',
    kewarganegaraan: '',
    alamatRumah: '',
    noTelepon: '',
    kualifikasi: '',
    namaInstitusi: '',
    jabatan: '',
    namaMentor: '',
    noTeleponEmail: '',
    skemaSertifikasi: '',
    judul: '',
    nomor: '',
    tujuan: '',
    units: [{ no: 1, kodeUnit: '', judulUnit: '', standarKompetensi: '' }],
    buktiPersyaratan: [
      {
        no: 1,
        bukti: "Salinan legalisir KK dan Kartu Komputer Keluarga Rekayasa Perangkat Lunak semester 1 s.d. 5 yang telah menyertakan nilai pengetahuan mata pelajaran Konfigurasi Perangkat Keras dan Jaringan Perangkat Lunak",
        memenuhi: false,
        tidakMemenuhi: false,
        tidakAda: false
      },
      {
        no: 2,
        bukti: "Salinan sertifikat/surat keterangan tentang kursus atau kursus singkat (PKL) atau pelatihan pengembangan perangkat lunak",
        memenuhi: false,
        tidakMemenuhi: false,
        tidakAda: false
      }
    ],
    buktiAdministratif: [
      {
        no: 1,
        bukti: "Salinan Kartu Pelajar",
        memenuhi: false,
        tidakMemenuhi: false,
        tidakAda: false
      },
      {
        no: 2,
        bukti: "Salinan Kartu Pelajar/KTP",
        memenuhi: false,
        tidakMemenuhi: false,
        tidakAda: false
      },
      {
        no: 3,
        bukti: "Pas foto 3 x 4 berwarna sebanyak 2 lembar",
        memenuhi: false,
        tidakMemenuhi: false,
        tidakAda: false
      }
    ]
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleUnitChange = (index, field, value) => {
    const newUnits = [...formData.units];
    newUnits[index] = { ...newUnits[index], [field]: value };
    setFormData(prev => ({ ...prev, units: newUnits }));
  };

  const handleCheckboxChange = (type, index, field) => {
    const newData = [...formData[type]];
    newData[index] = {
      ...newData[index],
      memenuhi: false,
      tidakMemenuhi: false,
      tidakAda: false,
      [field]: true
    };
    setFormData(prev => ({ ...prev, [type]: newData }));
  };

  return (
    <div style={{ 
      backgroundColor: '#f5f5f5',
      padding: '0',
      margin: '0',
      minHeight: '100vh'
    }}>
      <div style={{ 
        width: '100%',
        padding: '0',
        margin: '0'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '24px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          margin: '0',
          minHeight: '100vh'
        }}>
          {/* Bagian Header */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '24px',
            width: '100%'
          }}>
            <h1 style={{ 
              fontSize: '24px', 
              fontWeight: '600', 
              color: '#333',
              margin: '0'
            }}>Data Asesmen</h1>
            <button
              onClick={onBack}
              style={{
                padding: '8px 16px',
                backgroundColor: '#fd7e14',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              Kembali
            </button>
          </div>

          {/* Kontainer Form Utama - Mulai dari atas */}
          <div style={{ display: 'flex', gap: '24px', width: '100%', alignItems: 'flex-start' }}>
            {/* Kolom Kiri */}
            <div style={{ flex: 1, minWidth: '400px' }}>
              {/* Data Jadwal - Pindah ke kiri */}
              <div style={{ 
                marginBottom: '24px',
                border: '2px solid #fd7e14',
                borderRadius: '8px',
                padding: '16px',
                backgroundColor: 'white'
              }}>
                <div style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <label style={{ 
                      minWidth: '120px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#333'
                    }}>Nama Jadwal</label>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                    <input
                      type="text"
                      value={formData.namaJadwal}
                      onChange={(e) => handleInputChange('namaJadwal', e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: '#f5f5f5'
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <label style={{ 
                      minWidth: '120px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#333'
                    }}>TUK</label>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                    <input
                      type="text"
                      value={formData.tuk}
                      onChange={(e) => handleInputChange('tuk', e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: '#f5f5f5'
                      }}
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <label style={{ 
                      minWidth: '120px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#333'
                    }}>Tanggal Ujian</label>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                    <input
                      type="date"
                      value={formData.tanggalUjian}
                      onChange={(e) => handleInputChange('tanggalUjian', e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: '#f5f5f5'
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* Bagian 1: Rincian Data */}
              <div style={{ marginBottom: '24px' }}>
                {/* Header Bagian 1 */}
                <div style={{
                  backgroundColor: '#fd7e14',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  fontSize: '16px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  width: '100%'
                }}>
                  Bagian 1: Rincian Data
                </div>
                
                {/* A. Data Pribadi */}
                <div style={{
                  backgroundColor: '#ffb74d',
                  color: 'white',
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  borderRadius: '6px',
                  marginBottom: '8px',
                  width: '100%'
                }}>
                  A. Data Pribadi
                </div>

                <div style={{ 
                  padding: '16px', 
                  border: '2px solid #fd7e14',
                  borderRadius: '6px',
                  backgroundColor: 'white',
                  marginBottom: '16px'
                }}>
                  <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <label style={{ 
                      minWidth: '200px', 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>Nama Lengkap</label>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                    <input
                      type="text"
                      value={formData.namaLengkap}
                      onChange={(e) => handleInputChange('namaLengkap', e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: '#f5f5f5'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <label style={{ 
                      minWidth: '200px', 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>No KTP/NIK/Paspor</label>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                    <input
                      type="text"
                      value={formData.nik}
                      onChange={(e) => handleInputChange('nik', e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: '#f5f5f5'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <label style={{ 
                      minWidth: '200px', 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>TTL</label>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                    <input
                      type="text"
                      value={formData.ttl}
                      onChange={(e) => handleInputChange('ttl', e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: '#f5f5f5'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <label style={{ 
                      minWidth: '200px', 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>Jenis Kelamin</label>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <input
                          type="radio"
                          name="jenisKelamin"
                          value="laki"
                          checked={formData.jenisKelamin === 'laki'}
                          onChange={(e) => handleInputChange('jenisKelamin', e.target.value)}
                        />
                        Laki-laki
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <input
                          type="radio"
                          name="jenisKelamin"
                          value="perempuan"
                          checked={formData.jenisKelamin === 'perempuan'}
                          onChange={(e) => handleInputChange('jenisKelamin', e.target.value)}
                        />
                        Perempuan
                      </label>
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <label style={{ 
                      minWidth: '200px', 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>Kewarganegaraan</label>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                    <input
                      type="text"
                      value={formData.kewarganegaraan}
                      onChange={(e) => handleInputChange('kewarganegaraan', e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: '#f5f5f5'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <label style={{ 
                      minWidth: '200px', 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>Alamat Rumah</label>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                    <input
                      type="text"
                      value={formData.alamatRumah}
                      onChange={(e) => handleInputChange('alamatRumah', e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: '#f5f5f5'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <label style={{ 
                      minWidth: '200px', 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>No Telepon/Email</label>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                    <input
                      type="text"
                      value={formData.noTelepon}
                      onChange={(e) => handleInputChange('noTelepon', e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: '#f5f5f5'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <label style={{ 
                      minWidth: '200px', 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>Kualifikasi Pendidikan</label>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                    <input
                      type="text"
                      value={formData.kualifikasi}
                      onChange={(e) => handleInputChange('kualifikasi', e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: '#f5f5f5'
                      }}
                    />
                  </div>
                </div>

                {/* B. Data Pekerjaan Sekarang */}
                <div style={{
                  backgroundColor: '#ffb74d',
                  color: 'white',
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: '500',
                  borderRadius: '6px',
                  marginBottom: '8px',
                  width: '100%'
                }}>
                  B. Data Pekerjaan Sekarang
                </div>

                <div style={{ 
                  padding: '16px', 
                  border: '2px solid #fd7e14',
                  borderRadius: '6px',
                  backgroundColor: 'white'
                }}>
                  <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <label style={{ 
                      minWidth: '200px', 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>Nama Institusi</label>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                    <input
                      type="text"
                      value={formData.namaInstitusi}
                      onChange={(e) => handleInputChange('namaInstitusi', e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: '#f5f5f5'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <label style={{ 
                      minWidth: '200px', 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>Jabatan</label>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                    <input
                      type="text"
                      value={formData.jabatan}
                      onChange={(e) => handleInputChange('jabatan', e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: '#f5f5f5'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <label style={{ 
                      minWidth: '200px', 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>Nama Mentor</label>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                    <input
                      type="text"
                      value={formData.namaMentor}
                      onChange={(e) => handleInputChange('namaMentor', e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: '#f5f5f5'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <label style={{ 
                      minWidth: '200px', 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>No Telepon/Email</label>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                    <input
                      type="text"
                      value={formData.noTeleponEmail}
                      onChange={(e) => handleInputChange('noTeleponEmail', e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        fontSize: '14px',
                        backgroundColor: '#f5f5f5'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Tombol Aksi */}
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px' }}>
                <button
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    fontSize: '16px'
                  }}
                >
                  Setujui
                </button>
                <button
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    fontSize: '16px'
                  }}
                >
                  Tolak
                </button>
              </div>
            </div>

            {/* Kolom Kanan */}
            <div style={{ flex: 1, minWidth: '500px' }}>
              {/* Bagian 2: Data Sertifikasi - Sejajar dengan jadwal form */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  backgroundColor: '#fd7e14',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '6px 6px 0 0',
                  fontSize: '16px',
                  fontWeight: '600',
                  width: '100%'
                }}>
                  Bagian 2: Data Sertifikasi
                </div>

                <div style={{ 
                  padding: '16px', 
                  border: '2px solid #fd7e14', 
                  borderTop: 'none',
                  backgroundColor: 'white',
                  borderRadius: '0 0 6px 6px'
                }}>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ 
                      display: 'block', 
                      marginBottom: '12px', 
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>Skema Sertifikasi</label>
                    <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <label style={{ 
                        minWidth: '80px',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}>Judul</label>
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                      <input
                        type="text"
                        value={formData.judul}
                        onChange={(e) => handleInputChange('judul', e.target.value)}
                        style={{
                          flex: 1,
                          padding: '8px 12px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <label style={{ 
                        minWidth: '80px',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}>Nomor</label>
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                      <input
                        type="text"
                        value={formData.nomor}
                        onChange={(e) => handleInputChange('nomor', e.target.value)}
                        style={{
                          flex: 1,
                          padding: '8px 12px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <label style={{ 
                        minWidth: '80px',
                        fontSize: '14px',
                        fontWeight: '500'
                      }}>Tujuan</label>
                      <span style={{ fontSize: '14px', fontWeight: '500' }}>:</span>
                      <select
                        value={formData.tujuan}
                        onChange={(e) => handleInputChange('tujuan', e.target.value)}
                        style={{
                          flex: 1,
                          padding: '8px 12px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: '14px'
                        }}
                      >
                        <option value="">-----</option>
                        <option value="sertifikasi">Sertifikasi</option>
                        <option value="rekertifikasi">Rekertifikasi</option>
                      </select>
                    </div>
                  </div>

                  {/* Tabel Unit */}
                  <div style={{ marginBottom: '16px' }}>
                    <table style={{ 
                      width: '100%', 
                      borderCollapse: 'collapse',
                      fontSize: '14px'
                    }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f8f9fa' }}>
                          <th style={{ 
                            border: '2px solid #fd7e14', 
                            padding: '8px', 
                            textAlign: 'center',
                            width: '40px'
                          }}>No</th>
                          <th style={{ 
                            border: '2px solid #fd7e14', 
                            padding: '8px', 
                            textAlign: 'center'
                          }}>Kode Unit</th>
                          <th style={{ 
                            border: '2px solid #fd7e14', 
                            padding: '8px', 
                            textAlign: 'center'
                          }}>Judul Unit</th>
                          <th style={{ 
                            border: '2px solid #fd7e14', 
                            padding: '8px', 
                            textAlign: 'center'
                          }}>Standar Kompetensi Kerja</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.units.map((unit, index) => (
                          <tr key={index}>
                            <td style={{ 
                              border: '2px solid #fd7e14', 
                              padding: '8px', 
                              textAlign: 'center'
                            }}>{unit.no}</td>
                            <td style={{ border: '2px solid #fd7e14', padding: '8px' }}>
                              <input
                                type="text"
                                value={unit.kodeUnit}
                                onChange={(e) => handleUnitChange(index, 'kodeUnit', e.target.value)}
                                style={{
                                  width: '100%',
                                  border: 'none',
                                  padding: '0',
                                  fontSize: '14px'
                                }}
                              />
                            </td>
                            <td style={{ border: '2px solid #fd7e14', padding: '8px' }}>
                              <input
                                type="text"
                                value={unit.judulUnit}
                                onChange={(e) => handleUnitChange(index, 'judulUnit', e.target.value)}
                                style={{
                                  width: '100%',
                                  border: 'none',
                                  padding: '0',
                                  fontSize: '14px'
                                }}
                              />
                            </td>
                            <td style={{ border: '2px solid #fd7e14', padding: '8px' }}>
                              <input
                                type="text"
                                value={unit.standarKompetensi}
                                onChange={(e) => handleUnitChange(index, 'standarKompetensi', e.target.value)}
                                style={{
                                  width: '100%',
                                  border: 'none',
                                  padding: '0',
                                  fontSize: '14px'
                                }}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Bagian 3: Bukti Kelengkapan Permohonan */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  backgroundColor: '#fd7e14',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '6px 6px 0 0',
                  fontSize: '16px',
                  fontWeight: '600',
                  width: '100%'
                }}>
                  Bagian 3: Bukti Kelengkapan Permohonan
                </div>

                {/* 3.1 Bukti Persyaratan Pemohon */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{
                    backgroundColor: '#ffb74d',
                    color: 'white',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: '500',
                    border: '2px solid #fd7e14',
                    borderTop: 'none'
                  }}>
                    3.1 Bukti Persyaratan Pemohon
                  </div>

                  <table style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse',
                    fontSize: '14px'
                  }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f8f9fa' }}>
                        <th style={{ 
                          border: '2px solid #fd7e14', 
                          padding: '8px', 
                          textAlign: 'center',
                          width: '40px'
                        }}>No</th>
                        <th style={{ 
                          border: '2px solid #fd7e14', 
                          padding: '8px', 
                          textAlign: 'center'
                        }}>Bukti Persyaratan Dasar</th>
                        <th style={{ 
                          border: '2px solid #fd7e14', 
                          padding: '8px', 
                          textAlign: 'center',
                          width: '80px'
                        }}>Memenuhi Syarat</th>
                        <th style={{ 
                          border: '2px solid #fd7e14', 
                          padding: '8px', 
                          textAlign: 'center',
                          width: '80px'
                        }}>Tidak Memenuhi Syarat</th>
                        <th style={{ 
                          border: '2px solid #fd7e14', 
                          padding: '8px', 
                          textAlign: 'center',
                          width: '60px'
                        }}>Tidak Ada</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.buktiPersyaratan.map((item, index) => (
                        <tr key={index}>
                          <td style={{ 
                            border: '2px solid #fd7e14', 
                            padding: '8px', 
                            textAlign: 'center'
                          }}>{item.no}</td>
                          <td style={{ 
                            border: '2px solid #fd7e14', 
                            padding: '8px'
                          }}>{item.bukti}</td>
                          <td style={{ 
                            border: '2px solid #fd7e14', 
                            padding: '8px',
                            textAlign: 'center'
                          }}>
                            <input
                              type="checkbox"
                              checked={item.memenuhi}
                              onChange={() => handleCheckboxChange('buktiPersyaratan', index, 'memenuhi')}
                              style={{ transform: 'scale(1.2)' }}
                            />
                          </td>
                          <td style={{ 
                            border: '2px solid #fd7e14', 
                            padding: '8px',
                            textAlign: 'center'
                          }}>
                            <input
                              type="checkbox"
                              checked={item.tidakMemenuhi}
                              onChange={() => handleCheckboxChange('buktiPersyaratan', index, 'tidakMemenuhi')}
                              style={{ transform: 'scale(1.2)' }}
                            />
                          </td>
                          <td style={{ 
                            border: '2px solid #fd7e14', 
                            padding: '8px',
                            textAlign: 'center'
                          }}>
                            <input
                              type="checkbox"
                              checked={item.tidakAda}
                              onChange={() => handleCheckboxChange('buktiPersyaratan', index, 'tidakAda')}
                              style={{ transform: 'scale(1.2)' }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* 3.2 Bukti Administratif */}
                <div>
                  <div style={{
                    backgroundColor: '#ffb74d',
                    color: 'white',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: '500',
                    border: '2px solid #fd7e14'
                  }}>
                    3.2 Bukti Administratif
                  </div>

                  <table style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse',
                    fontSize: '14px',
                    borderRadius: '0 0 6px 6px'
                  }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f8f9fa' }}>
                        <th style={{ 
                          border: '2px solid #fd7e14', 
                          padding: '8px', 
                          textAlign: 'center',
                          width: '40px'
                        }}>No</th>
                        <th style={{ 
                          border: '2px solid #fd7e14', 
                          padding: '8px', 
                          textAlign: 'center'
                        }}>Bukti Persyaratan Dasar</th>
                        <th style={{ 
                          border: '2px solid #fd7e14', 
                          padding: '8px', 
                          textAlign: 'center',
                          width: '80px'
                        }}>Memenuhi Syarat</th>
                        <th style={{ 
                          border: '2px solid #fd7e14', 
                          padding: '8px', 
                          textAlign: 'center',
                          width: '80px'
                        }}>Tidak Memenuhi Syarat</th>
                        <th style={{ 
                          border: '2px solid #fd7e14', 
                          padding: '8px', 
                          textAlign: 'center',
                          width: '60px'
                        }}>Tidak Ada</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.buktiAdministratif.map((item, index) => (
                        <tr key={index}>
                          <td style={{ 
                            border: '2px solid #fd7e14', 
                            padding: '8px', 
                            textAlign: 'center'
                          }}>{item.no}</td>
                          <td style={{ 
                            border: '2px solid #fd7e14', 
                            padding: '8px'
                          }}>{item.bukti}</td>
                          <td style={{ 
                            border: '2px solid #fd7e14', 
                            padding: '8px',
                            textAlign: 'center'
                          }}>
                            <input
                              type="checkbox"
                              checked={item.memenuhi}
                              onChange={() => handleCheckboxChange('buktiAdministratif', index, 'memenuhi')}
                              style={{ transform: 'scale(1.2)' }}
                            />
                          </td>
                          <td style={{ 
                            border: '2px solid #fd7e14', 
                            padding: '8px',
                            textAlign: 'center'
                          }}>
                            <input
                              type="checkbox"
                              checked={item.tidakMemenuhi}
                              onChange={() => handleCheckboxChange('buktiAdministratif', index, 'tidakMemenuhi')}
                              style={{ transform: 'scale(1.2)' }}
                            />
                          </td>
                          <td style={{ 
                            border: '2px solid #fd7e14', 
                            padding: '8px',
                            textAlign: 'center'
                          }}>
                            <input
                              type="checkbox"
                              checked={item.tidakAda}
                              onChange={() => handleCheckboxChange('buktiAdministratif', index, 'tidakAda')}
                              style={{ transform: 'scale(1.2)' }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LihatListAsesmen;