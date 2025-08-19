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
        bukti: "Copy legalisir KK dan Kartu Komputer Keluarga Rekayasa Perangkat Lunak semester 1 s.d. 5 yang telah menyertakan nilai pengetahuan mata pelajaran Konfigurasi Perangkat Keras dan Jaringan Software",
        memenuhi: false,
        tidakMemenuhi: false,
        tidakAda: false
      },
      {
        no: 2,
        bukti: "Copy sertifikat/surat keterangan tentang kursus atau kursus singkat (PKL) atau training software development",
        memenuhi: false,
        tidakMemenuhi: false,
        tidakAda: false
      }
    ],
    buktiAdministratif: [
      {
        no: 1,
        bukti: "Copy Kartu/Pelajar",
        memenuhi: false,
        tidakMemenuhi: false,
        tidakAda: false
      },
      {
        no: 2,
        bukti: "Copy Kartu Pelajar/KTP",
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
      margin: '0'
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
          {/* Header */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '24px',
            width: '100%'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={onBack}
                style={{
                  padding: '8px',
                  backgroundColor: 'transparent',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                ←
              </button>
            </div>
          </div>

          {/* Form Container */}
          <div style={{ display: 'flex', gap: '24px', width: '100%' }}>
            
            {/* Left Column */}
            <div style={{ flex: '1', minWidth: '300px' }}>
              
              {/* Bagian 1: Rincian Data */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  backgroundColor: '#fd7e14',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '6px 6px 0 0',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  Bagian 1: Rincian Data
                </div>
                
                <div style={{
                  backgroundColor: '#ffa726',
                  color: 'white',
                  padding: '6px 16px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  A. Data Pribadi
                </div>

                <div style={{ padding: '16px', border: '1px solid #ddd', borderTop: 'none' }}>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Nama Jadwal :</label>
                    <input
                      type="text"
                      value={formData.namaJadwal}
                      onChange={(e) => handleInputChange('namaJadwal', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>TUK :</label>
                    <input
                      type="text"
                      value={formData.tuk}
                      onChange={(e) => handleInputChange('tuk', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Tanggal Ujian :</label>
                    <input
                      type="date"
                      value={formData.tanggalUjian}
                      onChange={(e) => handleInputChange('tanggalUjian', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Nama Lengkap :</label>
                    <input
                      type="text"
                      value={formData.namaLengkap}
                      onChange={(e) => handleInputChange('namaLengkap', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>NIK/TPUKNI/ PR NPRT :</label>
                    <input
                      type="text"
                      value={formData.nik}
                      onChange={(e) => handleInputChange('nik', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>TTL :</label>
                    <input
                      type="text"
                      value={formData.ttl}
                      onChange={(e) => handleInputChange('ttl', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Jenis Kelamin :</label>
                    <div style={{ display: 'flex', gap: '16px', fontSize: '12px' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <input
                          type="radio"
                          name="jenisKelamin"
                          value="laki"
                          checked={formData.jenisKelamin === 'laki'}
                          onChange={(e) => handleInputChange('jenisKelamin', e.target.value)}
                        />
                        Laki - laki
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

                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Kewarganegaraan :</label>
                    <input
                      type="text"
                      value={formData.kewarganegaraan}
                      onChange={(e) => handleInputChange('kewarganegaraan', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Alamat Rumah :</label>
                    <input
                      type="text"
                      value={formData.alamatRumah}
                      onChange={(e) => handleInputChange('alamatRumah', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>No Telepon/Email :</label>
                    <input
                      type="text"
                      value={formData.noTelepon}
                      onChange={(e) => handleInputChange('noTelepon', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Kualifikasi Pendidikan :</label>
                    <input
                      type="text"
                      value={formData.kualifikasi}
                      onChange={(e) => handleInputChange('kualifikasi', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* B. Data Pekerjaan Sekarang */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  backgroundColor: '#ffa726',
                  color: 'white',
                  padding: '6px 16px',
                  fontSize: '12px',
                  fontWeight: '500'
                }}>
                  B. Data Pekerjaan Sekarang
                </div>

                <div style={{ padding: '16px', border: '1px solid #ddd', borderTop: 'none' }}>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Nama Institusi :</label>
                    <input
                      type="text"
                      value={formData.namaInstitusi}
                      onChange={(e) => handleInputChange('namaInstitusi', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Jabatan :</label>
                    <input
                      type="text"
                      value={formData.jabatan}
                      onChange={(e) => handleInputChange('jabatan', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Nama Mentor :</label>
                    <input
                      type="text"
                      value={formData.namaMentor}
                      onChange={(e) => handleInputChange('namaMentor', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    />
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>No Telepon/Email :</label>
                    <input
                      type="text"
                      value={formData.noTeleponEmail}
                      onChange={(e) => handleInputChange('noTeleponEmail', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '6px 8px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '12px'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button
                  style={{
                    padding: '10px 24px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    fontSize: '14px'
                  }}
                >
                  Approve
                </button>
                <button
                  style={{
                    padding: '10px 24px',
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    fontSize: '14px'
                  }}
                >
                  Decline
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ flex: '1', minWidth: '400px' }}>
              
              {/* Bagian 2: Data Sertifikasi */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{
                  backgroundColor: '#fd7e14',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '6px 6px 0 0',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  Bagian 2: Data Sertifikasi
                </div>

                <div style={{ padding: '16px', border: '1px solid #ddd', borderTop: 'none' }}>
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontSize: '12px' }}>Skema Sertifikasi</label>
                    <div style={{ marginBottom: '8px' }}>
                      <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px' }}>Judul :</label>
                      <input
                        type="text"
                        value={formData.judul}
                        onChange={(e) => handleInputChange('judul', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '6px 8px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: '12px'
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '8px' }}>
                      <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px' }}>Nomor:</label>
                      <input
                        type="text"
                        value={formData.nomor}
                        onChange={(e) => handleInputChange('nomor', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '6px 8px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: '12px'
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '8px' }}>
                      <label style={{ display: 'block', marginBottom: '4px', fontSize: '11px' }}>Tujuan:</label>
                      <select
                        value={formData.tujuan}
                        onChange={(e) => handleInputChange('tujuan', e.target.value)}
                        style={{
                          width: '100%',
                          padding: '6px 8px',
                          border: '1px solid #ddd',
                          borderRadius: '4px',
                          fontSize: '12px'
                        }}
                      >
                        <option value="">-----</option>
                        <option value="sertifikasi">Sertifikasi</option>
                        <option value="rekertifikasi">Rekertifikasi</option>
                      </select>
                    </div>
                  </div>

                  {/* Units Table */}
                  <div style={{ marginBottom: '12px' }}>
                    <table style={{ 
                      width: '100%', 
                      borderCollapse: 'collapse',
                      fontSize: '11px'
                    }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f8f9fa' }}>
                          <th style={{ 
                            border: '1px solid #ddd', 
                            padding: '6px', 
                            textAlign: 'center',
                            width: '40px'
                          }}>No</th>
                          <th style={{ 
                            border: '1px solid #ddd', 
                            padding: '6px', 
                            textAlign: 'center'
                          }}>Kode Unit</th>
                          <th style={{ 
                            border: '1px solid #ddd', 
                            padding: '6px', 
                            textAlign: 'center'
                          }}>Judul Unit</th>
                          <th style={{ 
                            border: '1px solid #ddd', 
                            padding: '6px', 
                            textAlign: 'center'
                          }}>Standar Kompetensi Kerja</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.units.map((unit, index) => (
                          <tr key={index}>
                            <td style={{ 
                              border: '1px solid #ddd', 
                              padding: '4px', 
                              textAlign: 'center'
                            }}>{unit.no}</td>
                            <td style={{ border: '1px solid #ddd', padding: '4px' }}>
                              <input
                                type="text"
                                value={unit.kodeUnit}
                                onChange={(e) => handleUnitChange(index, 'kodeUnit', e.target.value)}
                                style={{
                                  width: '100%',
                                  border: 'none',
                                  padding: '2px',
                                  fontSize: '11px'
                                }}
                              />
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '4px' }}>
                              <input
                                type="text"
                                value={unit.judulUnit}
                                onChange={(e) => handleUnitChange(index, 'judulUnit', e.target.value)}
                                style={{
                                  width: '100%',
                                  border: 'none',
                                  padding: '2px',
                                  fontSize: '11px'
                                }}
                              />
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '4px' }}>
                              <input
                                type="text"
                                value={unit.standarKompetensi}
                                onChange={(e) => handleUnitChange(index, 'standarKompetensi', e.target.value)}
                                style={{
                                  width: '100%',
                                  border: 'none',
                                  padding: '2px',
                                  fontSize: '11px'
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
                  padding: '8px 16px',
                  borderRadius: '6px 6px 0 0',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  Bagian 3: Bukti Kelengkapan Permohonan
                </div>

                {/* 3.1 Bukti Persyaratan Pemohon */}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{
                    backgroundColor: '#f8f9fa',
                    padding: '8px 16px',
                    fontSize: '12px',
                    fontWeight: '500',
                    border: '1px solid #ddd',
                    borderTop: 'none'
                  }}>
                    3.1 Bukti Persyaratan Pemohon
                  </div>

                  <table style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse',
                    fontSize: '10px'
                  }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f8f9fa' }}>
                        <th style={{ 
                          border: '1px solid #ddd', 
                          padding: '4px', 
                          textAlign: 'center',
                          width: '30px'
                        }}>No</th>
                        <th style={{ 
                          border: '1px solid #ddd', 
                          padding: '4px', 
                          textAlign: 'center'
                        }}>Bukti Persyaratan Dasar</th>
                        <th style={{ 
                          border: '1px solid #ddd', 
                          padding: '4px', 
                          textAlign: 'center',
                          width: '60px'
                        }}>Memenuhi Syarat</th>
                        <th style={{ 
                          border: '1px solid #ddd', 
                          padding: '4px', 
                          textAlign: 'center',
                          width: '60px'
                        }}>Tidak Memenuhi Syarat</th>
                        <th style={{ 
                          border: '1px solid #ddd', 
                          padding: '4px', 
                          textAlign: 'center',
                          width: '50px'
                        }}>Tidak Ada</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.buktiPersyaratan.map((item, index) => (
                        <tr key={index}>
                          <td style={{ 
                            border: '1px solid #ddd', 
                            padding: '4px', 
                            textAlign: 'center'
                          }}>{item.no}</td>
                          <td style={{ 
                            border: '1px solid #ddd', 
                            padding: '4px'
                          }}>{item.bukti}</td>
                          <td style={{ 
                            border: '1px solid #ddd', 
                            padding: '4px',
                            textAlign: 'center'
                          }}>
                            <input
                              type="checkbox"
                              checked={item.memenuhi}
                              onChange={() => handleCheckboxChange('buktiPersyaratan', index, 'memenuhi')}
                            />
                          </td>
                          <td style={{ 
                            border: '1px solid #ddd', 
                            padding: '4px',
                            textAlign: 'center'
                          }}>
                            <input
                              type="checkbox"
                              checked={item.tidakMemenuhi}
                              onChange={() => handleCheckboxChange('buktiPersyaratan', index, 'tidakMemenuhi')}
                            />
                          </td>
                          <td style={{ 
                            border: '1px solid #ddd', 
                            padding: '4px',
                            textAlign: 'center'
                          }}>
                            <input
                              type="checkbox"
                              checked={item.tidakAda}
                              onChange={() => handleCheckboxChange('buktiPersyaratan', index, 'tidakAda')}
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
                    backgroundColor: '#f8f9fa',
                    padding: '8px 16px',
                    fontSize: '12px',
                    fontWeight: '500',
                    border: '1px solid #ddd'
                  }}>
                    3.2 Bukti Administratif
                  </div>

                  <table style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse',
                    fontSize: '10px'
                  }}>
                    <thead>
                      <tr style={{ backgroundColor: '#f8f9fa' }}>
                        <th style={{ 
                          border: '1px solid #ddd', 
                          padding: '4px', 
                          textAlign: 'center',
                          width: '30px'
                        }}>No</th>
                        <th style={{ 
                          border: '1px solid #ddd', 
                          padding: '4px', 
                          textAlign: 'center'
                        }}>Bukti Persyaratan Dasar</th>
                        <th style={{ 
                          border: '1px solid #ddd', 
                          padding: '4px', 
                          textAlign: 'center',
                          width: '60px'
                        }}>Memenuhi Syarat</th>
                        <th style={{ 
                          border: '1px solid #ddd', 
                          padding: '4px', 
                          textAlign: 'center',
                          width: '60px'
                        }}>Tidak Memenuhi Syarat</th>
                        <th style={{ 
                          border: '1px solid #ddd', 
                          padding: '4px', 
                          textAlign: 'center',
                          width: '50px'
                        }}>Tidak Ada</th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.buktiAdministratif.map((item, index) => (
                        <tr key={index}>
                          <td style={{ 
                            border: '1px solid #ddd', 
                            padding: '4px', 
                            textAlign: 'center'
                          }}>{item.no}</td>
                          <td style={{ 
                            border: '1px solid #ddd', 
                            padding: '4px'
                          }}>{item.bukti}</td>
                          <td style={{ 
                            border: '1px solid #ddd', 
                            padding: '4px',
                            textAlign: 'center'
                          }}>
                            <input
                              type="checkbox"
                              checked={item.memenuhi}
                              onChange={() => handleCheckboxChange('buktiAdministratif', index, 'memenuhi')}
                            />
                          </td>
                          <td style={{ 
                            border: '1px solid #ddd', 
                            padding: '4px',
                            textAlign: 'center'
                          }}>
                            <input
                              type="checkbox"
                              checked={item.tidakMemenuhi}
                              onChange={() => handleCheckboxChange('buktiAdministratif', index, 'tidakMemenuhi')}
                            />
                          </td>
                          <td style={{ 
                            border: '1px solid #ddd', 
                            padding: '4px',
                            textAlign: 'center'
                          }}>
                            <input
                              type="checkbox"
                              checked={item.tidakAda}
                              onChange={() => handleCheckboxChange('buktiAdministratif', index, 'tidakAda')}
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
