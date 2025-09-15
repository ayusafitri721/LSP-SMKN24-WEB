import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

  const scrollToProfile = () => {
    const element = document.getElementById('profile');
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
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
        backgroundColor: '#fff'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '10px'
        }}>
          <span onClick={onBack} style={{
            background: 'none',
            border: 'none',
            color: '#333',
            padding: '8px 16px',
            fontSize: '14px',
            cursor: 'pointer',
            textDecoration: 'underline',
            textDecorationColor: '#666',
            transition: 'all 0.3s ease'
          }}>
            Home
          </span>
          <span style={{ fontSize: '14px', color: '#666' }}>{'>'}</span>
          <span style={{ 
            fontSize: '14px', 
            color: '#333', 
            fontWeight: '500',
            textDecoration: 'underline',
            textDecorationColor: '#666'
          }}>
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

      {/* Footer - Updated to match Footer component */}
      <footer style={{
        background: 'linear-gradient(135deg, #f97316 0%, #f97316 40%, #2C94FF 40%, #2C94FF 100%)',
        padding: '40px 60px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '200px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Left Side - MyLSP Section */}
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
            <a 
              href="#" 
              style={{
                color: 'white',
                fontSize: '24px',
                transition: 'opacity 0.3s ease',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => e.target.style.opacity = '0.7'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="#" 
              style={{
                color: 'white',
                fontSize: '24px',
                transition: 'opacity 0.3s ease',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => e.target.style.opacity = '0.7'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="#" 
              style={{
                color: 'white',
                fontSize: '24px',
                transition: 'opacity 0.3s ease',
                textDecoration: 'none'
              }}
              onMouseOver={(e) => e.target.style.opacity = '0.7'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
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
              {[
                { text: 'Tentang Kami', path: '/#profile' },
                { text: 'Visi dan Misi', path: '/visi-misi' },
                { text: 'Skema Sertifikasi', path: '/detail-sertifikasi' }
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <Link 
                    to={item.path}
                    style={{
                      color: 'white',
                      textDecoration: 'none',
                      fontSize: '14px',
                      opacity: '0.9',
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    onMouseOver={(e) => e.target.style.opacity = '1'}
                    onMouseOut={(e) => e.target.style.opacity = '0.9'}
                  >
                    <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Additional Links */}
            <div style={{ marginTop: '25px' }}>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {[
                  { text: 'Jadwal Asesmen', path: '/jadwal-asesmen' },
                  { text: 'Berita', path: '/berita' },
                  { text: 'Lihat Foto dan Video', path: '/galeri-foto' }
                ].map((item, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>
                    <Link 
                      to={item.path}
                      style={{
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '14px',
                        opacity: '0.9',
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                      onMouseOver={(e) => e.target.style.opacity = '1'}
                      onMouseOut={(e) => e.target.style.opacity = '0.9'}
                    >
                      <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                      {item.text}
                    </Link>
                  </li>
                ))}
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
            <Link 
              to="/kontak"
              style={{
                backgroundColor: '#6B7280',
                color: 'white',
                border: '2px solid #6B7280',
                borderRadius: '25px',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#4B5563';
                e.target.style.borderColor = '#4B5563';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#6B7280';
                e.target.style.borderColor = '#6B7280';
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Download;