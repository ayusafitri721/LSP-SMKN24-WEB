import React from "react";
import { Link } from "react-router-dom";
import labImage from "../img/komputer.png";

const TempatUji = ({ onNavigate }) => {
  const handleMenuClick = (menuItem) => {
    console.log(`Clicked on: ${menuItem}`);
    // Panggil onNavigate jika tersedia
    if (onNavigate) {
      onNavigate(menuItem);
    }
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
    <div className="tempat-uji-container">
      {/* HERO */}
      <div className="hero-section">
        <img
          src={labImage}
          alt="Lab Komputer"
          className="hero-image"
        />
      </div>

      {/* ORANGE STRIP */}
      <div className="orange-strip" />

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <span 
          className="breadcrumb-home" 
          onClick={() => handleMenuClick('/')}
        >
          Home
        </span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">Tempat Uji Sertifikasi</span>
      </div>

      {/* TEMPAT UJI SERTIFIKASI SECTION */}
      <div className="tempat-uji-section">
        <div className="tempat-uji-header">
          <div className="section-label">
            LOKASI UJIAN
          </div>
          <h1 className="main-title">
            TEMPAT UJI SERTIFIKASI
          </h1>
        </div>

        {/* MAP SECTION */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.760254037896!2d106.9445!3d-6.3064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ecfa8b8b8b8b%3A0x1234567890abcdef!2sJl.%20Bambu%20Hitam%20No.3%2C%20RT.3%2FRW.1%2C%20Bambu%20Apus%2C%20Kec.%20Cipayung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2013890!5e0!3m2!1sen!2sid!4v1623456789013!5m2!1sen!2sid"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SMKN 24 Jakarta Location"
          ></iframe>
        </div>

        {/* WHITE SPACE SECTION - Replaces Location Info and Additional Info */}
        <div className="white-space-section">
          {/* This section is intentionally left blank/white */}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        {/* Left Orange Section */}
        <div className="footer-left">
          <h3 className="footer-logo">MyLSP</h3>
          <p className="footer-description">
            Membantu industri meyakinkan klien bahwa produk/jasanya telah dibuat oleh tenaga-tenaga yang kompeten.
          </p>
          
          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="#" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zM7.6 4C5.61 4 4 5.61 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8c1.99 0 3.6-1.61 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zM17.25 5.5c.69 0 1.25.56 1.25 1.25S17.94 8 17.25 8 16 7.44 16 6.75s.56-1.25 1.25-1.25zM12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </a>
            <a href="#" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Blue Section */}
        <div className="footer-right">
          {/* Know More About */}
          <div className="footer-column">
            <h4 className="footer-title">Know More About:</h4>
            <ul className="footer-links">
              <li>
                <Link 
                  to="/#profile" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) {
                      onNavigate('/');
                      setTimeout(() => scrollToProfile(), 100);
                    }
                  }}
                  className="footer-link"
                >
                  <span className="footer-arrow">▶</span> Tentang Kami
                </Link>
              </li>
              <li>
                <Link 
                  to="/visi-misi" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) {
                      onNavigate('/visi-misi');
                    }
                  }}
                  className="footer-link"
                >
                  <span className="footer-arrow">▶</span> Visi dan Misi
                </Link>
              </li>
              <li>
                <Link 
                  to="/detail-sertifikasi" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) {
                      onNavigate('/detail-sertifikasi');
                    }
                  }}
                  className="footer-link"
                >
                  <span className="footer-arrow">▶</span> Skema Sertifikasi
                </Link>
              </li>
              <li>
                <Link 
                  to="/jadwal-asesmen" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) {
                      onNavigate('/jadwal-asesmen');
                    }
                  }}
                  className="footer-link"
                >
                  <span className="footer-arrow">▶</span> Jadwal Asesmen
                </Link>
              </li>
              <li>
                <Link 
                  to="/berita" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) {
                      onNavigate('/berita');
                    }
                  }}
                  className="footer-link"
                >
                  <span className="footer-arrow">▶</span> Berita
                </Link>
              </li>
              <li>
                <Link 
                  to="/galeri-foto" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) {
                      onNavigate('/galeri-foto');
                    }
                  }}
                  className="footer-link"
                >
                  <span className="footer-arrow">▶</span> Lihat Foto dan Video
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-column contact-column">
            <h4 className="footer-title">Contact Us:</h4>
            <Link 
              to="/kontak"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) {
                  onNavigate('/kontak');
                }
              }}
              className="contact-btn"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .tempat-uji-container {
          font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
          color: #222;
        }

        /* HERO STYLES */
        .hero-section {
          width: 100%;
          height: 400px;
          background-color: #f5f5f5;
          overflow: hidden;
          position: relative;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: all 0.3s ease;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(74, 158, 255, 0.25) 0%,
            rgba(74, 158, 255, 0.15) 30%,
            rgba(74, 158, 255, 0.08) 60%,
            transparent 100%
          );
          z-index: 1;
          pointer-events: none;
        }

        .hero-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
            ellipse at top left,
            rgba(74, 158, 255, 0.3) 0%,
            rgba(74, 158, 255, 0.15) 25%,
            rgba(74, 158, 255, 0.05) 50%,
            transparent 70%
          );
          z-index: 2;
          pointer-events: none;
        }

        .hero-section:hover .hero-image {
          transform: scale(1.02);
        }

        .hero-section:hover::before {
          background: linear-gradient(
            135deg,
            rgba(74, 158, 255, 0.35) 0%,
            rgba(74, 158, 255, 0.20) 30%,
            rgba(74, 158, 255, 0.12) 60%,
            transparent 100%
          );
        }

        /* ORANGE STRIP */
        .orange-strip {
          background-color: #ff7a00;
          height: 40px;
        }

        /* BREADCRUMB STYLES */
        .breadcrumb {
          padding: 16px 40px;
          font-size: 14px;
          background-color: #fff;
          border-bottom: 1px solid #eee;
        }

        .breadcrumb-home {
          color: #000;
          font-weight: 600;
          text-decoration: underline;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .breadcrumb-home:hover {
          color: #4a9eff;
        }

        .breadcrumb-separator {
          margin: 0 10px;
        }

        /* TEMPAT UJI SERTIFIKASI STYLES */
        .tempat-uji-section {
          padding: 60px 40px;
          background-color: #fff;
        }

        .tempat-uji-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-label {
          font-size: 14px;
          color: #666;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .main-title {
          font-size: 48px;
          font-weight: 900;
          color: #000;
          margin: 0;
          line-height: 1.1;
          letter-spacing: -0.5px;
        }

        /* MAP STYLES */
        .map-container {
          margin-bottom: 40px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          border: 2px solid #e0e0e0;
        }

        /* WHITE SPACE SECTION */
        .white-space-section {
          background-color: #ffffff;
          min-height: 300px;
          margin-bottom: 40px;
        }

        /* FOOTER STYLES */
        .footer {
          display: flex;
          height: 350px;
          background: linear-gradient(135deg, #ff7a00 0%, #ff7a00 40%, #4a9eff 40%, #4a9eff 100%);
          color: white;
          position: relative;
        }

        .footer-left {
          flex: 1;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .footer-logo {
          font-size: 32px;
          font-weight: 700;
          color: white;
          margin: 0 0 20px 0;
        }

        .footer-description {
          font-size: 16px;
          line-height: 1.6;
          margin: 0 0 30px 0;
          max-width: 300px;
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icon {
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s ease;
          text-decoration: none;
          color: white;
        }

        .social-icon:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }

        .social-icon svg {
          width: 20px;
          height: 20px;
          color: white;
        }

        .footer-right {
          flex: 1.5;
          display: flex;
          padding: 40px;
          gap: 60px;
        }

        .footer-column {
          flex: 1;
        }

        .contact-column {
          flex: 0.5;
        }

        .footer-title {
          font-size: 20px;
          font-weight: 600;
          color: white;
          margin: 0 0 25px 0;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 8px;
        }

        .footer-links li:last-child {
          margin-bottom: 30px;
        }

        .footer-link {
          font-size: 14px;
          color: white;
          text-decoration: none;
          cursor: pointer;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
        }

        .footer-link:hover {
          opacity: 0.8;
        }

        .footer-link-inactive {
          font-size: 14px;
          color: white;
          opacity: 0.6;
          cursor: not-allowed;
          display: flex;
          align-items: center;
        }

        .footer-link-current {
          font-size: 14px;
          color: white;
          font-weight: 600;
          opacity: 1;
          display: flex;
          align-items: center;
        }

        .footer-arrow {
          margin-right: 8px;
          font-size: 12px;
        }

        .contact-btn {
          background-color: #333;
          color: white;
          border: none;
          border-radius: 25px;
          padding: 12px 30px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.3s ease;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .contact-btn:hover {
          background-color: #555;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .main-title {
            font-size: 32px;
          }
          
          .white-space-section {
            min-height: 200px;
          }
          
          .footer {
            flex-direction: column;
            height: auto;
          }
          
          .footer-right {
            flex-direction: column;
            gap: 30px;
          }

          .tempat-uji-section {
            padding: 40px 20px;
          }

          .breadcrumb {
            padding: 16px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default TempatUji;