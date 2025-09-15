import React, { useState } from 'react';

function ListMuk({ onBack, onNavigate, data }) {
  const [formData, setFormData] = useState({
    // Header form data
    skemaSertifikasi: '',
    judul: '',
    pemrogramJunior: '',
    tuk: '',
    nomorSkema: '',
    sewaktuTempat: '',
    namaAsesor: '',
    namaAsesi: '',
    tanggalAsesmen: '',

    // Unit Kompetensi table data
    unitKompetensi: [
      'Menggunakan Struktur Data',
      'Menggunakan Spesifikasi Program',
      'Menerapkan Perintah Eksekusi Bahasa Pemrograman Berbasis Teks, Grafik, dan Multimedia',
      'Menulis Kode Dengan Prinsip Sesuai Guidelines dan Best Practices',
      'Mengimplementasikan Pemrograman Terstruktur',
      'Membuat Dokumen Kode Program',
      'Melakukan Debugging',
      'Melaksanakan Pengujian Unit Program'
    ],

    // Assessment matrix
    assessmentMatrix: {},

    // Recommendation
    recommendation: 'kompeten',
    tindakLanjut: '',
    komentar: '',

    // Peserta info
    namaAsesi2: '',
    tandaTanganAsesi: '',
    tanggalAsesi: '',
    namaAsesor2: '',
    noReg: '',
    tandaTanganAsesor: '',
    tanggalAsesor: ''
  });

  const assessmentColumns = [
    { key: 'observasi', label: 'Observasi' },
    { key: 'portofolio', label: 'Portofolio' },
    { key: 'wawancara', label: 'Wawancara/Pihak' },
    { key: 'tertulis', label: 'Tertulis' },
    { key: 'demonstrasi', label: 'Demonstrasi' },
    { key: 'simulasi', label: 'Simulasi' },
    { key: 'yk', label: 'YK' },
    { key: 'tyk', label: 'TYK' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMatrixChange = (unitIndex, column, checked) => {
    const key = `${unitIndex}-${column}`;
    setFormData(prev => ({
      ...prev,
      assessmentMatrix: {
        ...prev.assessmentMatrix,
        [key]: checked
      }
    }));
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
          backgroundColor: '#fffaf8', /* Changed to a lighter orange background */
          padding: '24px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          margin: '0',
          minHeight: '100vh'
        }}>
          {/* Header Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
            {/* Back Button */}
            <button
              onClick={onBack}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                marginRight: '20px',
                padding: '10px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Nav Tabs */}
            <div
              style={{
                display: 'flex',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                padding: '4px'
              }}
            >
              <button
                onClick={() => onNavigate && onNavigate("list-muk")}
                style={{
                  padding: '12px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: 'none',
                  backgroundColor: '#ff6b35',
                  color: 'white',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  margin: '4px',
                  flexShrink: 0,
                  minWidth: 'fit-content'
                }}
              >
                FR.AK.02
              </button>
              <button
                onClick={() => onNavigate && onNavigate("listmuk/AK-03/UmpanBalik")}
                style={{
                  padding: '12px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#666',
                  cursor: 'pointer',
                  margin: '4px',
                  borderRadius: '8px',
                  flexShrink: '0',
                  minWidth: 'fit-content'
                }}
              >
                FR.AK.03
              </button>
              <button
                onClick={() => onNavigate && onNavigate("listmuk/AK-04/BandingkanAsesmen")}
                style={{
                  padding: '12px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#666',
                  cursor: 'pointer',
                  margin: '4px',
                  borderRadius: '8px',
                  flexShrink: '0',
                  minWidth: 'fit-content'
                }}
              >
                FR.AK.04
              </button>
              <button
                onClick={() => onNavigate && onNavigate("listmuk/AK-05/LaporanAsesment")}
                style={{
                  padding: '12px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#666',
                  cursor: 'pointer',
                  margin: '4px',
                  borderRadius: '8px',
                  flexShrink: '0',
                  minWidth: 'fit-content'
                }}
              >
                FR.AK.05
              </button>
              <button
                onClick={() => onNavigate && onNavigate("listmuk/IA-01/CeklisObservasiAktivitas")}
                style={{
                  padding: '12px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#666',
                  cursor: 'pointer',
                  margin: '4px',
                  borderRadius: '8px',
                  flexShrink: '0',
                  minWidth: 'fit-content'
                }}
              >
                FR.IA.01
              </button>
              <button
                onClick={() => onNavigate && onNavigate("listmuk/ia02")}
                style={{
                  padding: '12px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#666',
                  cursor: 'pointer',
                  margin: '4px',
                  borderRadius: '8px',
                  flexShrink: '0',
                  minWidth: 'fit-content'
                }}
              >
                FR.IA.02
              </button>
              <button
                onClick={() => onNavigate && onNavigate("listmuk/ia05b")}
                style={{
                  padding: '12px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#666',
                  cursor: 'pointer',
                  margin: '4px',
                  borderRadius: '8px',
                  flexShrink: '0',
                  minWidth: 'fit-content'
                }}
              >
                FR.IA.05.B
              </button>
              <button
                onClick={() => onNavigate && onNavigate("listmuk/ia05c")}
                style={{
                  padding: '12px 20px',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: 'none',
                  backgroundColor: 'transparent',
                  color: '#666',
                  cursor: 'pointer',
                  margin: '4px',
                  borderRadius: '8px',
                  flexShrink: '0',
                  minWidth: 'fit-content'
                }}
              >
                FR.IA.05.C
              </button>
            </div>
          </div>

          {/* Form Title */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h2 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              margin: '0',
              color: '#ff6b35'
            }}>
              FR.AK.02. REKAMAN ASESMEN KOMPETENSI
            </h2>
          </div>

          {/* Main Form Content */}
          <div style={{ maxWidth: '100%', margin: '0 auto' }}>

            {/* Header Information Table */}
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginBottom: '20px',
              border: '2px solid #ff6b35'
            }}>
              <tbody>
                <tr>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    backgroundColor: '#fff5f2',
                    width: '150px',
                    fontWeight: 'bold',
                    verticalAlign: 'middle',
                    color: '#ff6b35'
                  }} rowSpan="2">
                    Skema Sertifikasi (KKNI/Okupasi/Klaster)
                  </td>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    width: '80px',
                    fontWeight: 'bold',
                    backgroundColor: '#fff5f2',
                    color: '#ff6b35'
                  }}>
                    Judul
                  </td>
                  <td style={{ border: '2px solid #ff6b35', padding: '8px' }}>
                    <input
                      type="text"
                      value={formData.pemrogramJunior}
                      onChange={(e) => handleInputChange('pemrogramJunior', e.target.value)}
                      placeholder="Pemrograman Junior (Junior Coder)"
                      style={{ width: '100%', border: 'none', padding: '4px', backgroundColor: 'transparent', color: '#333' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    fontWeight: 'bold',
                    backgroundColor: '#fff5f2',
                    color: '#ff6b35'
                  }}>
                    Nomor
                  </td>
                  <td style={{ border: '2px solid #ff6b35', padding: '8px' }}>
                    <input
                      type="text"
                      value={formData.nomorSkema}
                      onChange={(e) => handleInputChange('nomorSkema', e.target.value)}
                      placeholder="SKM.ARI.LJ.SPMK24/2023"
                      style={{ width: '100%', border: 'none', padding: '4px', backgroundColor: 'transparent', color: '#333' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    backgroundColor: '#fff5f2',
                    fontWeight: 'bold',
                    color: '#ff6b35'
                  }}>
                    TUK
                  </td>
                  <td style={{ border: '2px solid #ff6b35', padding: '8px' }} colSpan="2">
                    <input
                      type="text"
                      value={formData.tuk}
                      onChange={(e) => handleInputChange('tuk', e.target.value)}
                      placeholder="Sewaktu/Tempat Kerja/Mandiri"
                      style={{ width: '100%', border: 'none', padding: '4px', backgroundColor: 'transparent', color: '#333' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    fontWeight: 'bold',
                    backgroundColor: '#fff5f2',
                    color: '#ff6b35'
                  }}>
                    Nama Asesor
                  </td>
                  <td style={{ border: '2px solid #ff6b35', padding: '8px' }} colSpan="2">
                    <input
                      type="text"
                      value={formData.namaAsesor}
                      onChange={(e) => handleInputChange('namaAsesor', e.target.value)}
                      style={{ width: '100%', border: 'none', padding: '4px', backgroundColor: 'transparent', color: '#333' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    fontWeight: 'bold',
                    backgroundColor: '#fff5f2',
                    color: '#ff6b35'
                  }}>
                    Nama Asesi
                  </td>
                  <td style={{ border: '2px solid #ff6b35', padding: '8px' }} colSpan="2">
                    <input
                      type="text"
                      value={formData.namaAsesi}
                      onChange={(e) => handleInputChange('namaAsesi', e.target.value)}
                      style={{ width: '100%', border: 'none', padding: '4px', backgroundColor: 'transparent', color: '#333' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    fontWeight: 'bold',
                    backgroundColor: '#fff5f2',
                    color: '#ff6b35'
                  }}>
                    Tanggal Asesmen
                  </td>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    fontWeight: 'bold',
                    backgroundColor: '#fff5f2',
                    color: '#ff6b35'
                  }}>
                    Mulai
                  </td>
                  <td style={{ border: '2px solid #ff6b35', padding: '8px' }}>
                    <input
                      type="date"
                      value={formData.tanggalAsesmen}
                      onChange={(e) => handleInputChange('tanggalAsesmen', e.target.value)}
                      style={{ width: '100%', border: 'none', padding: '4px', backgroundColor: 'transparent', color: '#333' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ border: '2px solid #ff6b35', padding: '8px' }}></td>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    fontWeight: 'bold',
                    backgroundColor: '#fff5f2',
                    color: '#ff6b35'
                  }}>
                    Selesai
                  </td>
                  <td style={{ border: '2px solid #ff6b35', padding: '8px' }}>
                    <input
                      type="date"
                      style={{ width: '100%', border: 'none', padding: '4px', backgroundColor: 'transparent', color: '#333' }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Instructions */}
            <p style={{
              fontSize: '14px',
              marginBottom: '20px',
              padding: '10px',
              backgroundColor: '#fff5f2',
              border: '2px solid #ff6b35',
              borderRadius: '6px',
              color: '#ff6b35'
            }}>
              Beri tanda centang (✓) di kolom yang sesuai untuk mencerminkan bukti yang sesuai untuk setiap Unit Kompetensi.
            </p>

            {/* Assessment Matrix Table */}
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginBottom: '20px',
              border: '2px solid #ff6b35',
              fontSize: '12px'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#ff6b35' }}>
                  <th style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    textAlign: 'center',
                    width: '200px',
                    fontWeight: 'bold',
                    color: 'white'
                  }}>
                    Unit Kompetensi
                  </th>
                  {assessmentColumns.map((col, index) => (
                    <th key={index} style={{
                      border: '2px solid #ff6b35',
                      padding: '6px',
                      textAlign: 'center',
                      transform: 'rotate(-45deg)',
                      height: '80px',
                      minWidth: '40px',
                      fontSize: '10px',
                      fontWeight: 'bold',
                      color: 'white'
                    }}>
                      <div style={{
                        transform: 'rotate(45deg)',
                        whiteSpace: 'nowrap',
                        fontSize: '10px'
                      }}>
                        {col.label}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {formData.unitKompetensi.map((unit, unitIndex) => (
                  <tr key={unitIndex} style={{
                    backgroundColor: unitIndex % 2 === 0 ? '#fff5f2' : 'white'
                  }}>
                    <td style={{
                      border: '2px solid #ff6b35',
                      padding: '8px',
                      fontSize: '11px',
                      fontWeight: '500',
                      color: '#333'
                    }}>
                      {unit}
                    </td>
                    {assessmentColumns.map((col, colIndex) => (
                      <td key={colIndex} style={{
                        border: '2px solid #ff6b35',
                        padding: '4px',
                        textAlign: 'center'
                      }}>
                        <input
                          type="checkbox"
                          checked={formData.assessmentMatrix[`${unitIndex}-${col.key}`] || false}
                          onChange={(e) => handleMatrixChange(unitIndex, col.key, e.target.checked)}
                          style={{
                            transform: 'scale(1.2)',
                            accentColor: '#ff6b35'
                          }}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Recommendation Section */}
            <div style={{
              border: '2px solid #ff6b35',
              marginBottom: '20px',
              borderRadius: '6px'
            }}>
              <div style={{
                padding: '10px',
                backgroundColor: '#ff6b35',
                borderBottom: '2px solid #ff6b35',
                fontWeight: 'bold',
                color: 'white',
                borderRadius: '4px 4px 0 0'
              }}>
                Rekomendasi hasil asesmen
              </div>
              <div style={{ padding: '15px', backgroundColor: 'white' }}>
                <label style={{ fontSize: '14px' }}>
                  <input
                    type="radio"
                    name="recommendation"
                    value="kompeten"
                    checked={formData.recommendation === 'kompeten'}
                    onChange={(e) => handleInputChange('recommendation', e.target.value)}
                    style={{ marginRight: '8px', accentColor: '#ff6b35' }}
                  />
                  <span style={{ color: '#ff6b35', fontWeight: '500' }}>Kompeten</span>
                </label>
                <label style={{ fontSize: '14px', marginLeft: '20px' }}>
                  <input
                    type="radio"
                    name="recommendation"
                    value="belum_kompeten"
                    checked={formData.recommendation === 'belum_kompeten'}
                    onChange={(e) => handleInputChange('recommendation', e.target.value)}
                    style={{ marginRight: '8px', accentColor: '#ff6b35' }}
                  />
                  <span style={{ color: '#ff6b35', fontWeight: '500' }}>Belum Kompeten</span>
                </label>
              </div>
            </div>

            {/* Follow-up Actions */}
            <div style={{
              border: '2px solid #ff6b35',
              marginBottom: '20px',
              borderRadius: '6px'
            }}>
              <div style={{
                padding: '10px',
                backgroundColor: '#ff6b35',
                borderBottom: '2px solid #ff6b35',
                fontWeight: 'bold',
                color: 'white',
                borderRadius: '4px 4px 0 0'
              }}>
                Tindak lanjut yang dibutuhkan
              </div>
              <div style={{ padding: '15px', backgroundColor: 'white' }}>
                <div style={{ fontSize: '12px', marginBottom: '8px', color: '#ff6b35', fontStyle: 'italic' }}>
                  (Masukkan pekerjaan tambahan dan asesmen yang diperlukan untuk mencapai kompetensi)
                </div>
                <textarea
                  value={formData.tindakLanjut}
                  onChange={(e) => handleInputChange('tindakLanjut', e.target.value)}
                  style={{
                    width: '100%',
                    minHeight: '60px',
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    resize: 'vertical',
                    borderRadius: '4px',
                    fontSize: '14px',
                    color: '#333'
                  }}
                />
              </div>
            </div>

            {/* Comments Section */}
            <div style={{
              border: '2px solid #ff6b35',
              marginBottom: '20px',
              borderRadius: '6px'
            }}>
              <div style={{
                padding: '10px',
                backgroundColor: '#ff6b35',
                borderBottom: '2px solid #ff6b35',
                fontWeight: 'bold',
                color: 'white',
                borderRadius: '4px 4px 0 0'
              }}>
                Komentar/ Observasi oleh asesor
              </div>
              <div style={{ padding: '15px', backgroundColor: 'white' }}>
                <textarea
                  value={formData.komentar}
                  onChange={(e) => handleInputChange('komentar', e.target.value)}
                  style={{
                    width: '100%',
                    minHeight: '80px',
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    resize: 'vertical',
                    borderRadius: '4px',
                    fontSize: '14px',
                    color: '#333'
                  }}
                />
              </div>
            </div>

            {/* Signatures Table */}
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              border: '2px solid #ff6b35',
              marginBottom: '20px'
            }}>
              <tbody>
                <tr>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    backgroundColor: '#ff6b35',
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                  }} rowSpan="3">
                    Asesi
                  </td>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    fontWeight: 'bold',
                    backgroundColor: '#fff5f2',
                    color: '#ff6b35'
                  }}>
                    Nama
                  </td>
                  <td style={{ border: '2px solid #ff6b35', padding: '8px' }}>
                    <input
                      type="text"
                      value={formData.namaAsesi2}
                      onChange={(e) => handleInputChange('namaAsesi2', e.target.value)}
                      style={{ width: '100%', border: 'none', padding: '4px', backgroundColor: 'transparent', color: '#333' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    fontWeight: 'bold',
                    backgroundColor: '#fff5f2',
                    color: '#ff6b35'
                  }}>
                    Tanda tangan
                  </td>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    height: '40px',
                    backgroundColor: '#fffaf8'
                  }}>
                    {/* Space for signature */}
                  </td>
                </tr>
                <tr>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    fontWeight: 'bold',
                    backgroundColor: '#fff5f2',
                    color: '#ff6b35'
                  }}>
                    dan Tanggal
                  </td>
                  <td style={{ border: '2px solid #ff6b35', padding: '8px' }}>
                    <input
                      type="date"
                      value={formData.tanggalAsesi}
                      onChange={(e) => handleInputChange('tanggalAsesi', e.target.value)}
                      style={{ width: '100%', border: 'none', padding: '4px', backgroundColor: 'transparent', color: '#333' }}
                    />
                  </td>
                </tr>
                <tr style={{ borderTop: '5px double #ff6b35' }}>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    backgroundColor: '#ff6b35',
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                  }} rowSpan="4">
                    Asesor
                  </td>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    fontWeight: 'bold',
                    backgroundColor: '#fff5f2',
                    color: '#ff6b35'
                  }}>
                    Nama
                  </td>
                  <td style={{ border: '2px solid #ff6b35', padding: '8px' }}>
                    <input
                      type="text"
                      value={formData.namaAsesor2}
                      onChange={(e) => handleInputChange('namaAsesor2', e.target.value)}
                      style={{ width: '100%', border: 'none', padding: '4px', backgroundColor: 'transparent', color: '#333' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    fontWeight: 'bold',
                    backgroundColor: '#fff5f2',
                    color: '#ff6b35'
                  }}>
                    No. Reg
                  </td>
                  <td style={{ border: '2px solid #ff6b35', padding: '8px' }}>
                    <input
                      type="text"
                      value={formData.noReg}
                      onChange={(e) => handleInputChange('noReg', e.target.value)}
                      style={{ width: '100%', border: 'none', padding: '4px', backgroundColor: 'transparent', color: '#333' }}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    fontWeight: 'bold',
                    backgroundColor: '#fff5f2',
                    color: '#ff6b35'
                  }}>
                    Tanda tangan
                  </td>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    height: '40px',
                    backgroundColor: '#fffaf8'
                  }}>
                    {/* Space for signature */}
                  </td>
                </tr>
                <tr>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    fontWeight: 'bold',
                    backgroundColor: '#fff5f2',
                    color: '#ff6b35'
                  }}>
                    dan Tanggal
                  </td>
                  <td style={{ border: '2px solid #ff6b35', padding: '8px' }}>
                    <input
                      type="date"
                      value={formData.tanggalAsesor}
                      onChange={(e) => handleInputChange('tanggalAsesor', e.target.value)}
                      style={{ width: '100%', border: 'none', padding: '4px', backgroundColor: 'transparent', color: '#333' }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Document Attachments */}
            <div style={{
              marginTop: '20px',
              padding: '15px',
              backgroundColor: '#fff5f2',
              border: '2px solid #ff6b35',
              borderRadius: '6px'
            }}>
              <h4 style={{
                margin: '0 0 10px 0',
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#ff6b35'
              }}>
                LAMPIRAN DOKUMEN:
              </h4>
              <div style={{ fontSize: '12px', lineHeight: '1.5', color: '#ff6b35' }}>
                <div>1. Dokumen APL 01 peserta</div>
                <div>2. Dokumen APL 02 peserta</div>
                <div>3. Bukti-bukti berkualitas peserta</div>
                <div>4. Tinjauan proses asesmen</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ListMuk;