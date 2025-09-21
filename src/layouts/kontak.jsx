import React, { useState, useEffect } from 'react';

function Kontak({ onBack }) {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  // Check screen size for responsive footer
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToProfile = () => {
    const element = document.getElementById("profile");
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Responsive styles based on screen size for footer
  const getResponsiveFooterStyles = () => {
    switch (screenSize) {
      case "mobile":
        return {
          footer: {
            background:
              "linear-gradient(135deg, #f97316 0%, #f97316 40%, #2C94FF 40%, #2C94FF 100%)",
            padding: "30px 20px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            minHeight: "auto",
            position: "relative",
            overflow: "hidden",
          },
          leftSection: {
            flex: "none",
            paddingRight: "0",
            textAlign: "center",
          },
          rightSection: {
            flex: "none",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            maxWidth: "none",
          },
          knowMoreSection: {
            flex: "none",
            paddingRight: "0",
            textAlign: "center",
          },
          contactSection: {
            flex: "none",
            textAlign: "center",
          },
          title: {
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "12px",
            color: "white",
          },
          description: {
            fontSize: "13px",
            lineHeight: "1.5",
            color: "white",
            opacity: "0.95",
            marginBottom: "20px",
          },
          sectionTitle: {
            fontSize: "16px",
            fontWeight: "bold",
            marginBottom: "15px",
            color: "white",
          },
        };
      case "tablet":
        return {
          footer: {
            background:
              "linear-gradient(135deg, #f97316 0%, #f97316 40%, #2C94FF 40%, #2C94FF 100%)",
            padding: "35px 40px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            minHeight: "180px",
            position: "relative",
            overflow: "hidden",
          },
          leftSection: {
            flex: "none",
            paddingRight: "0",
            textAlign: "center",
            marginBottom: "20px",
          },
          rightSection: {
            flex: "none",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
            maxWidth: "none",
          },
          knowMoreSection: {
            flex: "1",
            paddingRight: "20px",
          },
          contactSection: {
            flex: "0 0 200px",
            textAlign: "center",
          },
          title: {
            fontSize: "30px",
            fontWeight: "bold",
            marginBottom: "13px",
            color: "white",
          },
          description: {
            fontSize: "13px",
            lineHeight: "1.5",
            color: "white",
            opacity: "0.95",
            marginBottom: "22px",
          },
          sectionTitle: {
            fontSize: "17px",
            fontWeight: "bold",
            marginBottom: "18px",
            color: "white",
          },
        };
      default: // desktop
        return {
          footer: {
            background:
              "linear-gradient(135deg, #f97316 0%, #f97316 40%, #2C94FF 40%, #2C94FF 100%)",
            padding: "40px 60px",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "200px",
            position: "relative",
            overflow: "hidden",
          },
          leftSection: {
            flex: "0 0 300px",
            paddingRight: "40px",
          },
          rightSection: {
            flex: "1",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            maxWidth: "600px",
          },
          knowMoreSection: {
            flex: "1",
            paddingRight: "40px",
          },
          contactSection: {
            flex: "0 0 180px",
            textAlign: "center",
          },
          title: {
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "15px",
            color: "white",
          },
          description: {
            fontSize: "14px",
            lineHeight: "1.6",
            color: "white",
            opacity: "0.95",
            marginBottom: "25px",
          },
          sectionTitle: {
            fontSize: "18px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "white",
          },
        };
    }
  };

  const footerStyles = getResponsiveFooterStyles();

  const knowMoreLinks = [
    { text: "Tentang Kami", path: "/#profile", onClick: scrollToProfile },
    { text: "Visi dan Misi", path: "/visi-misi" },
    { text: "Skema Sertifikasi", path: "/detail-sertifikasi" },
  ];

  const additionalLinks = [
    { text: "Jadwal Asesmen", path: "/jadwal-asesmen" },
    { text: "Berita", path: "/berita" },
    { text: "Lihat Foto dan Video", path: "/galeri-foto" },
  ];

  return (
    <div style={{
      fontFamily: 'Poppins, sans-serif',
      backgroundColor: '#fff',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        height: 'clamp(300px, 50vh, 500px)',
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
          height: 'clamp(40px, 8vh, 60px)',
          backgroundColor: '#FF8C00',
          zIndex: 2
        }}></div>
      </div>

      {/* Breadcrumb */}
      <div style={{
        padding: 'clamp(15px, 4vw, 20px) clamp(20px, 5vw, 60px)',
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
            fontSize: 'clamp(12px, 2.5vw, 14px)',
            cursor: 'pointer',
            textDecoration: 'underline',
            textDecorationColor: '#666',
            transition: 'all 0.3s ease'
          }}>
            Home
          </span>
          <span style={{ fontSize: 'clamp(12px, 2.5vw, 14px)', color: '#666' }}>{'>'}</span>
          <span style={{ 
            fontSize: 'clamp(12px, 2.5vw, 14px)', 
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
        padding: 'clamp(40px, 8vw, 80px) clamp(20px, 5vw, 60px)',
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: '#fff'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
          backgroundColor: '#fff',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
          marginBottom: 'clamp(40px, 8vw, 80px)'
        }}>
          {/* Contact Information */}
          <div style={{ 
            flex: "1",
            background: "#87CEEB",
            padding: "clamp(30px, 6vw, 50px) clamp(25px, 5vw, 40px)",
            color: "#000",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            minHeight: window.innerWidth <= 768 ? 'auto' : '600px'
          }}>
            <h2 style={{
              fontSize: "clamp(20px, 5vw, 28px)",
              fontWeight: "600",
              marginBottom: "clamp(25px, 5vw, 40px)",
              textAlign: "center",
              color: "#000"
            }}>
              Contact Information
            </h2>

            <div style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: window.innerWidth <= 768 ? 'flex-start' : 'center',
              gap: window.innerWidth <= 768 ? '20px' : '35px'
            }}>
              {/* Address */}
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                gap: window.innerWidth <= 768 ? '15px' : '20px',
                position: "relative",
                borderBottom: "2px solid #7EB3E9",
                paddingBottom: "15px"
              }}>
                <div style={{
                  width: window.innerWidth <= 768 ? '40px' : '60px',
                  height: window.innerWidth <= 768 ? '40px' : '60px',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#fff"
                }}>
                  <svg width={window.innerWidth <= 768 ? "24" : "38"} height={window.innerWidth <= 768 ? "24" : "38"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{
                    margin: 0,
                    fontSize: "clamp(13px, 3vw, 15px)",
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
                gap: window.innerWidth <= 768 ? '15px' : '20px',
                position: "relative",
                borderBottom: "2px solid #7EB3E9",
                paddingBottom: "15px"
              }}>
                <div style={{
                  width: window.innerWidth <= 768 ? '40px' : '60px',
                  height: window.innerWidth <= 768 ? '40px' : '60px',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#fff"
                }}>
                  <svg width={window.innerWidth <= 768 ? "24" : "38"} height={window.innerWidth <= 768 ? "24" : "38"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <p style={{
                  margin: 0,
                  fontSize: "clamp(13px, 3vw, 15px)",
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
                gap: window.innerWidth <= 768 ? '15px' : '20px',
                position: "relative",
                borderBottom: "2px solid #7EB3E9",
                paddingBottom: "15px"
              }}>
                <div style={{
                  width: window.innerWidth <= 768 ? '40px' : '60px',
                  height: window.innerWidth <= 768 ? '40px' : '60px',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#fff"
                }}>
                  <svg width={window.innerWidth <= 768 ? "24" : "38"} height={window.innerWidth <= 768 ? "24" : "38"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m2 7 10 6 10-6"/>
                  </svg>
                </div>
                <p style={{
                  margin: 0,
                  fontSize: "clamp(13px, 3vw, 15px)",
                  color: "#000",
                  fontWeight: "400",
                  flex: 1,
                  wordBreak: 'break-word'
                }}>
                  info@smkn24jkt.sch.id
                </p>
              </div>

              {/* Website */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: window.innerWidth <= 768 ? '15px' : '20px'
              }}>
                <div style={{
                  width: window.innerWidth <= 768 ? '40px' : '60px',
                  height: window.innerWidth <= 768 ? '40px' : '60px',
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#fff"
                }}>
                  <svg width={window.innerWidth <= 768 ? "24" : "38"} height={window.innerWidth <= 768 ? "24" : "38"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
                  fontSize: "clamp(13px, 3vw, 15px)",
                  color: "#000",
                  fontWeight: "400",
                  flex: 1,
                  wordBreak: 'break-word'
                }}>
                  https://smkn24jkt.sch.id/
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div style={{ 
            flex: "1",
            padding: "clamp(30px, 6vw, 50px) clamp(25px, 5vw, 40px)",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column"
          }}>
            <h2 style={{
              fontSize: "clamp(20px, 5vw, 28px)",
              fontWeight: "600",
              color: "#333",
              marginBottom: "clamp(25px, 5vw, 40px)",
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
                padding: 'clamp(15px, 4vw, 20px)',
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
                      padding: "clamp(10px, 2.5vw, 12px)",
                      border: "2px solid #666",
                      borderRadius: "10px",
                      fontSize: "clamp(14px, 3.5vw, 16px)",
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
                      padding: "clamp(10px, 2.5vw, 12px)",
                      border: "2px solid #666",
                      borderRadius: "10px",
                      fontSize: "clamp(14px, 3.5vw, 16px)",
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
                    rows={window.innerWidth <= 768 ? "6" : "8"}
                    style={{
                      width: "100%",
                      minHeight: window.innerWidth <= 768 ? "150px" : "200px",
                      padding: "clamp(10px, 2.5vw, 12px)",
                      border: "2px solid #666",
                      borderRadius: "10px",
                      fontSize: "clamp(14px, 3.5vw, 16px)",
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
                  textAlign: window.innerWidth <= 768 ? "center" : "right",
                  borderTop: "2px solid #e0e0e0",
                  paddingTop: "15px",
                  marginTop: "10px"
                }}>
                  <button
                    type="button"
                    style={{
                      backgroundColor: "#fff",
                      color: "#2C94FF",
                      padding: "clamp(10px, 2.5vw, 12px) clamp(25px, 6vw, 30px)",
                      border: "2px solid #2C94FF",
                      borderRadius: "20px",
                      fontSize: "clamp(14px, 3.5vw, 16px)",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      width: window.innerWidth <= 768 ? "100%" : "auto",
                      maxWidth: window.innerWidth <= 768 ? "200px" : "none"
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
        height: window.innerWidth <= 768 ? "300px" : "400px",
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

      {/* Responsive Footer */}
      <footer style={footerStyles.footer}>
        {/* Left Side - MyLSP Section */}
        <div style={footerStyles.leftSection}>
          <h2 style={footerStyles.title}>MyLSP</h2>
          <p style={footerStyles.description}>
            Membantu industri menyediakan ikon bahwa produk/jasa nya telah
            dibuat oleh tenaga-tenaga yang kompeten.
          </p>

          {/* Social Media Icons */}
          <div
            style={{
              display: "flex",
              gap: screenSize === "mobile" ? "20px" : "15px",
              justifyContent:
                screenSize === "desktop" ? "flex-start" : "center",
            }}
          >
            <a
              href="#"
              style={{
                color: "white",
                fontSize: "24px",
                transition: "opacity 0.3s ease",
                textDecoration: "none",
              }}
              onMouseOver={(e) => (e.target.style.opacity = "0.7")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              style={{
                color: "white",
                fontSize: "24px",
                transition: "opacity 0.3s ease",
                textDecoration: "none",
              }}
              onMouseOver={(e) => (e.target.style.opacity = "0.7")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="#"
              style={{
                color: "white",
                fontSize: "24px",
                transition: "opacity 0.3s ease",
                textDecoration: "none",
              }}
              onMouseOver={(e) => (e.target.style.opacity = "0.7")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side - Links and Contact */}
        <div style={footerStyles.rightSection}>
          {/* Know More About Section */}
          <div style={footerStyles.knowMoreSection}>
            <h3 style={footerStyles.sectionTitle}>Know More About:</h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: screenSize === "mobile" ? "center" : "flex-start",
              }}
            >
              {knowMoreLinks.map((item, index) => (
                <li key={index} style={{ marginBottom: "8px" }}>
                  <a
                    href={item.path}
                    onClick={(e) => {
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick();
                      }
                    }}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontSize: "14px",
                      opacity: "0.9",
                      transition: "opacity 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent:
                        screenSize === "mobile" ? "center" : "flex-start",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) => (e.target.style.opacity = "1")}
                    onMouseOut={(e) => (e.target.style.opacity = "0.9")}
                  >
                    <span style={{ marginRight: "8px", fontSize: "12px" }}>
                      ▶
                    </span>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Additional Links */}
            <div
              style={{ marginTop: screenSize === "mobile" ? "20px" : "25px" }}
            >
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: screenSize === "mobile" ? "center" : "flex-start",
                }}
              >
                {additionalLinks.map((item, index) => (
                  <li key={index} style={{ marginBottom: "8px" }}>
                    <a
                      href={item.path}
                      style={{
                        color: "white",
                        textDecoration: "none",
                        fontSize: "14px",
                        opacity: "0.9",
                        transition: "opacity 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent:
                          screenSize === "mobile" ? "center" : "flex-start",
                        cursor: "pointer",
                      }}
                      onMouseOver={(e) => (e.target.style.opacity = "1")}
                      onMouseOut={(e) => (e.target.style.opacity = "0.9")}
                    >
                      <span style={{ marginRight: "8px", fontSize: "12px" }}>
                        ▶
                      </span>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Us Section */}
          <div style={footerStyles.contactSection}>
            <h3 style={footerStyles.sectionTitle}>Contact Us:</h3>
            <a
              href="/kontak"
              style={{
                backgroundColor: "#6B7280",
                color: "white",
                border: "2px solid #6B7280",
                borderRadius: "25px",
                padding: screenSize === "mobile" ? "14px 28px" : "12px 24px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textDecoration: "none",
                display: "inline-block",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#4B5563";
                e.target.style.borderColor = "#4B5563";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#6B7280";
                e.target.style.borderColor = "#6B7280";
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Kontak;