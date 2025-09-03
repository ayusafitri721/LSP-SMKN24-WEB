import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Kontak({ onBack }) {
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
      backgroundColor: '#fff',
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
            Kontak
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        padding: '80px 60px',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#fff'
      }}>
        <div style={{
          display: 'flex',
          backgroundColor: '#fff',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
          marginBottom: '80px'
        }}>
          {/* Contact Information */}
          <div style={{ 
            flex: "1",
            background: "#87CEEB",
            padding: "50px 40px",
            color: "#000",
            display: "flex",
            flexDirection: "column",
            position: "relative"
          }}>
            <h2 style={{
              fontSize: "28px",
              fontWeight: "600",
              marginBottom: "40px",
              textAlign: "center",
              color: "#000"
            }}>
              Contact Information
            </h2>

            <div style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
              {/* Address */}
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "35px",
                gap: "20px",
                position: "relative",
                borderBottom: "2px solid #7EB3E9",
                paddingBottom: "15px"
              }}>
                <div style={{
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#fff"
                }}>
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{
                    margin: 0,
                    fontSize: "15px",
                    lineHeight: "1.6",
                    color: "#000",
                    fontWeight: "400"
                  }}>
                    Jl. Bambu Hitam No.3, RT.3/RW.1, Bambu Apus,<br />
                    Kec. Cipayung, Kota Jakarta Timur, Daerah<br />
                    Khusus Ibukota Jakarta 13890
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "35px",
                gap: "20px",
                position: "relative",
                borderBottom: "2px solid #7EB3E9",
                paddingBottom: "15px"
              }}>
                <div style={{
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#fff"
                }}>
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <p style={{
                  margin: 0,
                  fontSize: "15px",
                  color: "#000",
                  fontWeight: "400",
                  flex: 1
                }}>
                  (021)8441976
                </p>
              </div>

              {/* Email */}
              <div style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "35px",
                gap: "20px",
                position: "relative",
                borderBottom: "2px solid #7EB3E9",
                paddingBottom: "15px"
              }}>
                <div style={{
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#fff"
                }}>
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m2 7 10 6 10-6"/>
                  </svg>
                </div>
                <p style={{
                  margin: 0,
                  fontSize: "15px",
                  color: "#000",
                  fontWeight: "400",
                  flex: 1
                }}>
                  info@smkn24jkt.sch.id
                </p>
              </div>

              {/* Website */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "20px"
              }}>
                <div style={{
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#fff"
                }}>
                  <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <rect x="6" y="6" width="5" height="2" rx="1"/>
                    <rect x="6" y="9" width="5" height="2" rx="1"/>
                    <rect x="6" y="12" width="5" height="2" rx="1"/>
                    <rect x="13" y="6" width="5" height="10" rx="1"/>
                    <rect x="15" y="8" width="1" height="6"/>
                  </svg>
                </div>
                <p style={{
                  margin: 0,
                  fontSize: "15px",
                  color: "#000",
                  fontWeight: "400",
                  flex: 1
                }}>
                  https://smkn24jkt.sch.id/
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div style={{ 
            flex: "1",
            padding: "50px 40px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column"
          }}>
            <h2 style={{
              fontSize: "28px",
              fontWeight: "600",
              color: "#333",
              marginBottom: "40px",
              textAlign: "center"
            }}>
              Send Us Messages
            </h2>

            <div style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '15px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e0e0e0'
              }}>
                {/* Email Field */}
                <div style={{ marginBottom: "20px" }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "2px solid #666",
                      borderRadius: "10px",
                      fontSize: "16px",
                      fontFamily: "Poppins, sans-serif",
                      outline: "none",
                      boxSizing: "border-box",
                      backgroundColor: "#fff"
                    }}
                  />
                </div>

                {/* Subject Field */}
                <div style={{ marginBottom: "20px" }}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      padding: "12px",
                      border: "2px solid #666",
                      borderRadius: "10px",
                      fontSize: "16px",
                      fontFamily: "Poppins, sans-serif",
                      outline: "none",
                      boxSizing: "border-box",
                      backgroundColor: "#fff"
                    }}
                  />
                </div>

                {/* Message Field */}
                <div style={{ marginBottom: "20px" }}>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="8"
                    style={{
                      width: "100%",
                      minHeight: "200px",
                      padding: "12px",
                      border: "2px solid #666",
                      borderRadius: "10px",
                      fontSize: "16px",
                      fontFamily: "Poppins, sans-serif",
                      outline: "none",
                      resize: "vertical",
                      boxSizing: "border-box",
                      backgroundColor: "#fff"
                    }}
                  />
                </div>

                {/* Send Button */}
                <div style={{ 
                  textAlign: "right",
                  borderTop: "2px solid #e0e0e0",
                  paddingTop: "15px",
                  marginTop: "10px"
                }}>
                  <button
                    type="button"
                    style={{
                      backgroundColor: "#fff",
                      color: "#2C94FF",
                      padding: "12px 30px",
                      border: "2px solid #2C94FF",
                      borderRadius: "20px",
                      fontSize: "16px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div style={{
        height: "400px",
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw"
      }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.760254037896!2d106.9445!3d-6.3064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ecfa8b8b8b8b%3A0x1234567890abcdef!2sJl.%20Bambu%20Hitam%20No.3%2C%20RT.3%2FRW.1%2C%20Bambu%20Apus%2C%20Kec.%20Cipayung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013890!5e0!3m2!1sen!2sid!4v1623456789013!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        />
      </div>

      {/* Footer */}
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

export default Kontak;