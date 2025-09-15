import React, { useState } from 'react';

function AK05Form({ onBack, onNavigate }) {
  const [formData, setFormData] = useState({
    // Header form data
    skemaSertifikasiJudul: 'Pemrograman Junior (Junior Coder)',
    skemaSertifikasiNomor: 'SKM.ARI.LJ.SPMK24/2023',
    tuk: 'Sewaktu/Tempat Kerja/Mandiri',
    namaAsesor: '',
    tanggal: '',

    // Assessment participants
    participants: [
      { nama: '', k: false, bk: false, keterangan: '' },
      { nama: '', k: false, bk: false, keterangan: '' },
      { nama: '', k: false, bk: false, keterangan: '' },
      { nama: '', k: false, bk: false, keterangan: '' }
    ],

    // Assessment notes
    assessmentNotes: '',
    improvementPlan: '',

    // Assessor info
    asesorPersonil: '',
    catatan: '',
    asesorNama: '',
    asesorNoReg: '',
    asesorTanggal: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleParticipantChange = (index, field, value) => {
    const newParticipants = [...formData.participants];
    newParticipants[index] = {
      ...newParticipants[index],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      participants: newParticipants
    }));
  };

  const handleRecommendationChange = (index, recommendation) => {
    const newParticipants = [...formData.participants];
    newParticipants[index] = {
      ...newParticipants[index],
      k: recommendation === 'k',
      bk: recommendation === 'bk'
    };
    setFormData(prev => ({
      ...prev,
      participants: newParticipants
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
          backgroundColor: '#fffaf8',
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
                  backgroundColor: 'transparent',
                  color: '#666',
                  cursor: 'pointer',
                  margin: '4px',
                  borderRadius: '8px',
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
              FR.AK.05. LAPORAN ASESMEN
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
                      value={formData.skemaSertifikasiJudul}
                      onChange={(e) => handleInputChange('skemaSertifikasiJudul', e.target.value)}
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
                      value={formData.skemaSertifikasiNomor}
                      onChange={(e) => handleInputChange('skemaSertifikasiNomor', e.target.value)}
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
                    Tanggal
                  </td>
                  <td style={{ border: '2px solid #ff6b35', padding: '8px' }} colSpan="2">
                    <input
                      type="date"
                      value={formData.tanggal}
                      onChange={(e) => handleInputChange('tanggal', e.target.value)}
                      style={{ width: '100%', border: 'none', padding: '4px', backgroundColor: 'transparent', color: '#333' }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Assessment Results Table */}
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginBottom: '20px',
              border: '2px solid #ff6b35'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#ff6b35' }}>
                  <th style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    textAlign: 'center',
                    width: '50px',
                    fontWeight: 'bold',
                    color: 'white'
                  }}>
                    No.
                  </th>
                  <th style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white'
                  }}>
                    Nama Asesi
                  </th>
                  <th style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    textAlign: 'center',
                    width: '120px',
                    fontWeight: 'bold',
                    color: 'white'
                  }}>
                    Rekomendasi
                  </th>
                  <th style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    textAlign: 'center',
                    width: '200px',
                    fontWeight: 'bold',
                    color: 'white'
                  }}>
                    Keterangan**
                  </th>
                </tr>
                <tr style={{ backgroundColor: '#ff6b35' }}>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '4px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white'
                  }}></td>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '4px',
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white'
                  }}></td>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '4px',
                    textAlign: 'center'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                      <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>K</span>
                      <span style={{ color: 'white', fontSize: '12px', fontWeight: 'bold' }}>BK</span>
                    </div>
                  </td>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '4px'
                  }}></td>
                </tr>
              </thead>
              <tbody>
                {formData.participants.map((participant, index) => (
                  <tr key={index} style={{
                    backgroundColor: index % 2 === 0 ? '#fff5f2' : 'white'
                  }}>
                    <td style={{
                      border: '2px solid #ff6b35',
                      padding: '8px',
                      textAlign: 'center',
                      fontWeight: 'bold',
                      color: '#ff6b35'
                    }}>
                      {index + 1}.
                    </td>
                    <td style={{ border: '2px solid #ff6b35', padding: '8px' }}>
                      <input
                        type="text"
                        value={participant.nama}
                        onChange={(e) => handleParticipantChange(index, 'nama', e.target.value)}
                        style={{ 
                          width: '100%', 
                          border: 'none', 
                          padding: '4px', 
                          backgroundColor: 'transparent', 
                          color: '#333',
                          fontSize: '14px'
                        }}
                      />
                    </td>
                    <td style={{
                      border: '2px solid #ff6b35',
                      padding: '8px',
                      textAlign: 'center'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <input
                          type="checkbox"
                          checked={participant.k}
                          onChange={() => handleRecommendationChange(index, participant.k ? '' : 'k')}
                          style={{ transform: 'scale(1.2)', accentColor: '#ff6b35' }}
                        />
                        <input
                          type="checkbox"
                          checked={participant.bk}
                          onChange={() => handleRecommendationChange(index, participant.bk ? '' : 'bk')}
                          style={{ transform: 'scale(1.2)', accentColor: '#ff6b35' }}
                        />
                      </div>
                    </td>
                    <td style={{ border: '2px solid #ff6b35', padding: '8px' }}>
                      <input
                        type="text"
                        value={participant.keterangan}
                        onChange={(e) => handleParticipantChange(index, 'keterangan', e.target.value)}
                        style={{ 
                          width: '100%', 
                          border: 'none', 
                          padding: '4px', 
                          backgroundColor: 'transparent', 
                          color: '#333',
                          fontSize: '12px'
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Footer Note */}
            <div style={{
              fontSize: '11px',
              color: '#ff6b35',
              marginBottom: '20px',
              fontStyle: 'italic'
            }}>
              ** Tuliskan Kode dan Judul Unit Kompetensi yang dinyatakan Bk bila mengesahkan satu skema
              Aspek Negatif dan Positif dalam Asesmen
            </div>

            {/* Assessment Notes Section */}
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
                Pencatatan Penolakan Hasil Asesmen
              </div>
              <div style={{ padding: '15px', backgroundColor: 'white' }}>
                <textarea
                  value={formData.assessmentNotes}
                  onChange={(e) => handleInputChange('assessmentNotes', e.target.value)}
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

            {/* Improvement Plan Section */}
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
                Saran Perbaikan:
              </div>
              <div style={{
                padding: '15px',
                backgroundColor: 'white'
              }}>
                <div style={{
                  fontSize: '12px',
                  color: '#ff6b35',
                  fontStyle: 'italic',
                  marginBottom: '8px'
                }}>
                  (Asesor/Personil Terkait)
                </div>
                <textarea
                  value={formData.improvementPlan}
                  onChange={(e) => handleInputChange('improvementPlan', e.target.value)}
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

            {/* Signature Section */}
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
                    backgroundColor: '#fff5f2',
                    fontWeight: 'bold',
                    color: '#ff6b35',
                    width: '120px'
                  }}>
                    Catatan :
                  </td>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    backgroundColor: '#fff5f2',
                    fontWeight: 'bold',
                    color: '#ff6b35',
                    width: '120px'
                  }}>
                    Asesor :
                  </td>
                </tr>
                <tr>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px',
                    height: '80px',
                    verticalAlign: 'top'
                  }}>
                    <textarea
                      value={formData.catatan}
                      onChange={(e) => handleInputChange('catatan', e.target.value)}
                      style={{
                        width: '100%',
                        height: '60px',
                        border: 'none',
                        padding: '4px',
                        backgroundColor: 'transparent',
                        color: '#333',
                        resize: 'none',
                        fontSize: '12px'
                      }}
                    />
                  </td>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px'
                  }}>
                    <div style={{ marginBottom: '8px' }}>
                      <strong style={{ color: '#ff6b35', fontSize: '12px' }}>Nama:</strong>
                      <input
                        type="text"
                        value={formData.asesorNama}
                        onChange={(e) => handleInputChange('asesorNama', e.target.value)}
                        style={{
                          width: '100%',
                          border: 'none',
                          borderBottom: '1px solid #ff6b35',
                          padding: '2px',
                          backgroundColor: 'transparent',
                          color: '#333',
                          fontSize: '12px',
                          marginTop: '4px'
                        }}
                      />
                    </div>
                    <div style={{ marginBottom: '8px' }}>
                      <strong style={{ color: '#ff6b35', fontSize: '12px' }}>No. Reg:</strong>
                      <input
                        type="text"
                        value={formData.asesorNoReg}
                        onChange={(e) => handleInputChange('asesorNoReg', e.target.value)}
                        style={{
                          width: '100%',
                          border: 'none',
                          borderBottom: '1px solid #ff6b35',
                          padding: '2px',
                          backgroundColor: 'transparent',
                          color: '#333',
                          fontSize: '12px',
                          marginTop: '4px'
                        }}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px'
                  }}></td>
                  <td style={{
                    border: '2px solid #ff6b35',
                    padding: '8px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{
                        backgroundColor: '#fffaf8',
                        width: '120px',
                        height: '40px',
                        border: '1px solid #ff6b35',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '11px',
                        color: '#999'
                      }}>
                        Tanda tangan
                      </div>
                      <div>
                        <strong style={{ color: '#ff6b35', fontSize: '12px' }}>Tanggal:</strong>
                        <input
                          type="date"
                          value={formData.asesorTanggal}
                          onChange={(e) => handleInputChange('asesorTanggal', e.target.value)}
                          style={{
                            border: 'none',
                            borderBottom: '1px solid #ff6b35',
                            padding: '2px',
                            backgroundColor: 'transparent',
                            color: '#333',
                            fontSize: '12px',
                            marginLeft: '8px'
                          }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "12px",
                marginTop: "24px",
              }}
            >
              <button
                style={{
                  padding: "12px 24px",
                  fontSize: "14px",
                  fontWeight: "600",
                  border: "2px solid #ff6b35",
                  backgroundColor: "white",
                  color: "#ff6b35",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#ff6b35";
                  e.target.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "white";
                  e.target.style.color = "#ff6b35";
                }}
                onClick={() => {
                  // Handle cancel action
                  if (onBack) onBack();
                }}
              >
                Batal
              </button>
              <button
                style={{
                  padding: "12px 24px",
                  fontSize: "14px",
                  fontWeight: "600",
                  border: "none",
                  backgroundColor: "#ff6b35",
                  color: "white",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#e85a2b";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#ff6b35";
                }}
                onClick={() => {
                  // Handle save action
                  console.log('Form data saved:', formData);
                  alert('Data berhasil disimpan!');
                }}
              >
                Simpan
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AK05Form;