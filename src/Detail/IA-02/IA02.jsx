import React from "react";

function FRIA02() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #fb923c, #ea580c)'
    }}>

      {/* Main Content */}
      <div style={{
        backgroundColor: '#f9fafb',
        minHeight: '100vh'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '24px'
        }}>
          {/* Form Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '24px'
          }}>
            <h1 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '8px'
            }}>FR.IA.02.TPD</h1>
            <p style={{
              fontSize: '18px',
              color: '#4b5563'
            }}>TUGAS PRAKTIK DEMONSTRASI</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '24px'
          }}>
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Skema Sertifikasi */}
              <div style={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{
                  backgroundColor: '#f97316',
                  color: 'white',
                  padding: '12px 16px',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px'
                }}>
                  <h2 style={{
                    fontWeight: 'bold',
                    margin: 0
                  }}>Skema Sertifikasi</h2>
                </div>
                <div style={{ padding: '16px' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                    fontSize: '14px'
                  }}>
                    <div>
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ fontWeight: '600' }}>Judul Unit:</span>
                        <p style={{ marginTop: '4px', margin: 0 }}>Junior Custom Mode</p>
                      </div>
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ fontWeight: '600' }}>Kode Unit:</span>
                        <p style={{ marginTop: '4px', margin: 0 }}>SKM.TBS.OJCM/LSP.SMKN24/2023</p>
                      </div>
                    </div>
                    <div>
                      <div style={{ marginBottom: '8px' }}>
                        <span style={{ fontWeight: '600' }}>TUK:</span>
                        <p style={{ marginTop: '4px', margin: 0 }}>Sewaktu / Tempat Kerja / Mandiri</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Petunjuk */}
              <div style={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{
                  backgroundColor: '#f9fafb',
                  padding: '12px 16px',
                  borderBottom: '1px solid #e5e7eb',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px'
                }}>
                  <h2 style={{
                    fontWeight: 'bold',
                    fontSize: '18px',
                    margin: 0
                  }}>A. Petunjuk</h2>
                </div>
                <div style={{ padding: '16px' }}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    fontSize: '14px'
                  }}>
                    <p style={{ margin: 0 }}>1. Baca dan pelajari setiap instruksi kerja di bawah ini dengan cermat sebelum melaksanakan praktek.</p>
                    <p style={{ margin: 0 }}>2. Klarifikasi kepada asesor kompetensi apabila ada hal-hal yang belum jelas.</p>
                    <p style={{ margin: 0 }}>3. Laksanakan pekerjaan sesuai dengan urutan proses yang sudah di tetapkan.</p>
                    <p style={{ margin: 0 }}>4. Seluruh proses kerja mengacu kepada SOP/WI yang dipersyaratkan.</p>
                  </div>
                </div>
              </div>

              {/* Skenario */}
              <div style={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{
                  backgroundColor: '#f9fafb',
                  padding: '12px 16px',
                  borderBottom: '1px solid #e5e7eb',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px'
                }}>
                  <h2 style={{
                    fontWeight: 'bold',
                    fontSize: '18px',
                    margin: 0
                  }}>B. Skenario Tugas Praktik Demonstrasi</h2>
                </div>
                <div style={{ padding: '16px' }}>
                  <p style={{
                    fontStyle: 'italic',
                    fontWeight: '500',
                    marginBottom: '16px',
                    color: '#374151',
                    marginTop: 0
                  }}>Kelompok Pekerjaan 1</p>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}>
                    {[
                      {
                        no: "1",
                        kode: "GAR.CM01.001.01",
                        judul: "Memberikan Layanan Secara Prima kepada Pelanggan"
                      },
                      {
                        no: "2", 
                        kode: "GAR.CM01.002.01",
                        judul: "Melakukan Pekerjaan dalam Lingkungan Sosial yang Beragam"
                      },
                      {
                        no: "3",
                        kode: "GAR.CM01.003.01", 
                        judul: "Mengikuti Prosedur Kesehatan, Keselamatan dan Keamanan dalam Bekerja"
                      },
                      {
                        no: "4",
                        kode: "GAR.CM01.004.01",
                        judul: "Memelihara Alat Jahit"
                      }
                    ].map((item, i) => (
                      <div key={i} style={{
                        borderLeft: '4px solid #60a5fa',
                        paddingLeft: '16px'
                      }}>
                        <div style={{
                          display: 'flex',
                          gap: '8px'
                        }}>
                          <span style={{
                            fontWeight: '600',
                            color: '#2563eb'
                          }}>{item.no}.</span>
                          <div style={{ flex: 1 }}>
                            <p style={{
                              fontSize: '14px',
                              margin: 0
                            }}>
                              <span style={{ fontWeight: '600' }}>Kode Unit:</span> {item.kode}
                            </p>
                            <p style={{
                              fontSize: '14px',
                              margin: 0
                            }}>
                              <span style={{ fontWeight: '600' }}>Judul Unit:</span>
                            </p>
                            <p style={{
                              fontSize: '14px',
                              color: '#374151',
                              marginTop: '4px',
                              margin: 0
                            }}>{item.judul}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    marginTop: '24px',
                    paddingTop: '16px',
                    borderTop: '1px solid #e5e7eb'
                  }}>
                    <h3 style={{
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      marginTop: 0
                    }}>Skenario Tugas Praktik Demonstrasi:</h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#374151',
                      margin: 0
                    }}>
                      Anda adalah seorang Operator jahit dan diminta untuk melayani yang ingin membuat bius sesuai dengan sample yang ada.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              {/* Scenario Info Box */}
              <div style={{
                backgroundColor: '#eff6ff',
                borderRadius: '8px',
                padding: '16px',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{
                  fontWeight: 'bold',
                  fontSize: '18px',
                  marginBottom: '12px',
                  marginTop: 0
                }}>
                  Skenario Tugas Praktik Demonstrasi:
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#374151',
                  marginBottom: '16px',
                  marginTop: 0
                }}>
                  Anda adalah seorang praktikan yang ingin menyelesaikan skenario yang telah diberikan. Ikuti setiap langkah dengan cermat agar dapat menyelesaikan tugas.
                </p>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}>
                  <div>
                    <h4 style={{
                      fontWeight: '600',
                      marginBottom: '8px',
                      fontSize: '14px',
                      marginTop: 0
                    }}>Perlengkapan Demonstrasi:</h4>
                    <div style={{
                      fontSize: '14px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <span>•</span>
                        <span>APD</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}>
                        <span>•</span>
                        <span>Peralatan menjahit</span>
                      </div>
                    </div>
                  </div>

                  <div style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '16px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{
                        fontWeight: '600',
                        fontSize: '14px',
                        marginBottom: '8px'
                      }}>Durasi Waktu</div>
                      <div style={{
                        fontSize: '32px',
                        fontWeight: 'bold',
                        color: '#2563eb'
                      }}>30 Menit</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                <button 
                  style={{
                    padding: '12px 32px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    borderRadius: '8px',
                    fontWeight: '600',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#2563eb';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#3b82f6';
                  }}
                  onClick={() => alert("Jawaban dikirim")}
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FRIA02;