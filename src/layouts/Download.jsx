import React, { useState } from 'react';

function Download({ onBack }) {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{
      fontFamily: 'Poppins, sans-serif',
      backgroundColor: '#f8f9fa',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        height: '500px',
        backgroundImage: "url('src/img/kontak.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(44, 148, 255, 0.3)',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          backgroundColor: '#FF8C00',
          zIndex: 2
        }}></div>
      </div>

      {/* Breadcrumb */}
      <div style={{
        padding: '20px 60px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span onClick={onBack} style={{
            background: 'none',
            border: '1px solid #333',
            color: '#333',
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '14px',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}>
            Home
          </span>
          <span style={{ fontSize: '14px', color: '#666' }}>{'>'}</span>
          <span style={{ fontSize: '14px', color: '#333', fontWeight: '500' }}>
            Download
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        padding: '80px 60px',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '600px',
          width: '100%'
        }}>
          {/* Download Header */}
          <div style={{
            marginBottom: '40px'
          }}>
            <p style={{
              fontSize: '16px',
              color: '#666',
              marginBottom: '10px',
              fontWeight: '400',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              DOWNLOAD
            </p>
            <h1 style={{
              fontSize: '42px',
              fontWeight: 'bold',
              color: '#333',
              margin: '0 0 40px 0',
              lineHeight: '1.2'
            }}>
              APLIKASI MOBILE
            </h1>
          </div>

          {/* Download Card */}
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            border: '2px solid #e0e0e0'
          }}>
            {/* System Requirements Header */}
            <div style={{
              backgroundColor: '#FFB366',
              padding: '20px',
              color: '#333',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              System Requirements
            </div>

            {/* App Content */}
            <div style={{
              padding: '60px 40px',
              backgroundColor: '#fff'
            }}>
              {/* Mobile Icon */}
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#87CEEB',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 30px auto'
              }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>

              {/* App Name */}
              <h2 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#333',
                marginBottom: '50px'
              }}>
                MyLSP Mobile App
              </h2>

              {/* Download Button */}
              <button
                style={{
                  backgroundColor: '#FF8C00',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '15px 40px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 4px 15px rgba(255, 140, 0, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#E67C00';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#FF8C00';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                DOWNLOAD
              </button>

              {/* Update Info */}
              <p style={{
                fontSize: '12px',
                color: '#999',
                marginTop: '15px',
                fontStyle: 'italic'
              }}>
                versi | update terbaru
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #f97316 0%, #f97316 40%, #2C94FF 40%, #2C94FF 100%)',
        padding: '40px 60px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        minHeight: '200px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Left Side - MyLSP */}
        <div style={{
          flex: '0 0 300px',
          paddingRight: '40px'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: 'white'
          }}>
            MyLSP
          </h2>
          <p style={{
            fontSize: '14px',
            lineHeight: '1.6',
            color: 'white',
            opacity: '0.95',
            marginBottom: '25px'
          }}>
            Membantu industri menyediakan ikon bahwa produk/jasa nya telah dibuat oleh tenaga-tenaga yang kompeten.
          </p>
          
          {/* Social Media Icons */}
          <div style={{
            display: 'flex',
            gap: '15px'
          }}>
            <a href="#" style={{
              color: 'white',
              fontSize: '20px',
              transition: 'opacity 0.3s ease',
              textDecoration: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
            </a>
            <a href="#" style={{
              color: 'white',
              fontSize: '20px',
              transition: 'opacity 0.3s ease',
              textDecoration: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h2.5l.5-3h-3V8.5a.5.5 0 0 1 .5-.5H18V5z"/>
              </svg>
            </a>
            <a href="#" style={{
              color: 'white',
              fontSize: '20px',
              transition: 'opacity 0.3s ease',
              textDecoration: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side - Links and Contact */}
        <div style={{
          flex: '1',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          maxWidth: '600px'
        }}>
          {/* Know More About Section */}
          <div style={{
            flex: '1',
            paddingRight: '40px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: 'white'
            }}>
              Know More About:
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  opacity: '0.9',
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                  Tentang Kami
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  opacity: '0.9',
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                  Visi dan Misi
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  opacity: '0.9',
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                  Struktur Organisasi
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  opacity: '0.9',
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                  Skema Sertifikasi
                </a>
              </li>
            </ul>

            <div style={{ marginTop: '25px' }}>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '14px',
                    opacity: '0.9',
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                    Syarat dan Ketentuan
                  </a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '14px',
                    opacity: '0.9',
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                    Jadwal Asesmen
                  </a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '14px',
                    opacity: '0.9',
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                    Berita
                  </a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '14px',
                    opacity: '0.9',
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                    Kirim Foto dan Video
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us Section */}
          <div style={{
            flex: '0 0 180px',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              marginBottom: '20px',
              color: 'white'
            }}>
              Contact Us:
            </h3>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                backgroundColor: '#6B7280',
                color: 'white',
                border: '2px solid #6B7280',
                borderRadius: '25px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Download;