import React from 'react';

const JadwalAsesmen = () => {
  const setSelectedNews = () => { };

  return (
    <div className="main-container">
      <style jsx>{`
        .main-container {
          min-height: 100vh;
          background-color: #f5f5f5;
          font-family: Arial, sans-serif;
        }

        .header-image {
          position: relative;
          height: 300px;
          background-image: url('src/img/komputer.png');
          background-size: cover;
          background-position: center;
          margin-top: 0;
        }

        .breadcrumb-section {
          background-color: #ff9324;
          padding: 15px 40px;
          color: white;
        }

        .breadcrumb-content {
          max-width: 1200px;
          margin: 0 auto;
          font-size: 14px;
        }

        .breadcrumb-text {
          color: #000000;
          font-size: 14px;
          cursor: pointer;
          margin-bottom: 1px;
          display: block;
        }

        .main-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 60px;
          margin-bottom: 80px;
        }

        .title-section {
          margin-bottom: 40px;
        }

        .subtitle {
          font-size: 14px;
          color: #666;
          margin-bottom: 8px;
          margin-top: 0;
        }

        .main-title {
          font-size: 28px;
          font-weight: bold;
          color: #333;
          margin: 0;
        }

        .search-section {
          display: flex;
          gap: 30px;
          margin-bottom: 30px;
          align-items: center;
          width: 100%;
          flex-wrap: wrap;
        }

        .search-select {
          flex: 1;
          padding: 12px 20px;
          border: 1px solid #ddd;
          border-radius: 25px;
          background-color: white;
          color: #666;
          font-size: 14px;
          max-width: 200px;
          min-width: 150px;
        }

        .search-input {
          flex: 2;
          padding: 12px 20px;
          border: 1px solid #ddd;
          border-radius: 25px;
          font-size: 14px;
          min-width: 200px;
        }

        .search-button {
          background-color: #ff6b00;
          color: white;
          padding: 12px 32px;
          border: none;
          border-radius: 25px;
          font-weight: 500;
          cursor: pointer;
          white-space: nowrap;
          transition: background-color 0.3s ease;
        }

        .search-button:hover {
          background-color: #e55a00;
        }

        .cards-container {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          align-items: stretch;
          width: 100%;
        }

        .card {
          background-color: white;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.25);
          flex: 1;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 50px rgba(0,0,0,0.3);
        }

        .card-content {
          flex: 1;
          margin-bottom: 20px;
        }

        .card-title {
          font-weight: 600;
          color: #333;
          margin-bottom: 15px;
          font-size: 16px;
          margin-top: 0;
          line-height: 1.4;
        }

        .card-separator-line {
          width: 100%;
          height: 1px;
          background-color: #e0e0e0;
          margin-bottom: 20px;
        }

        .card-details {
          font-size: 14px;
          color: #666;
          line-height: 1.8;
          margin-bottom: 0;
        }

        .card-details p {
          margin: 5px 0;
        }

        .card-button-container {
          text-align: right;
          margin-top: auto;
        }

        .card-button {
          background-color: transparent;
          color: #3b82f6;
          border: 1px solid #3b82f6;
          padding: 12px 36px;
          border-radius: 25px;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .card-button:hover {
          background-color: #3b82f6;
          color: white;
        }

        .footer {
          background: linear-gradient(135deg, #f97316 0%, #f97316 40%, #2C94FF 40%, #2C94FF 100%);
          padding: 40px 60px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          min-height: 200px;
          position: relative;
          overflow: hidden;
        }

        .footer-left {
          flex: 0 0 300px;
          padding-right: 40px;
        }

        .footer-title {
          font-size: 32px;
          font-weight: bold;
          margin-bottom: 15px;
          color: white;
        }

        .footer-description {
          font-size: 14px;
          line-height: 1.6;
          color: white;
          opacity: 0.95;
          margin-bottom: 25px;
        }

        .social-icons {
          display: flex;
          gap: 15px;
        }

        .social-icon {
          color: white;
          font-size: 24px;
          transition: opacity 0.3s ease;
          text-decoration: none;
        }

        .social-icon:hover {
          opacity: 0.7;
        }

        .footer-right {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          max-width: 600px;
        }

        .footer-links {
          flex: 1;
          padding-right: 40px;
        }

        .footer-section-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 20px;
          color: white;
        }

        .link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .link-item {
          margin-bottom: 8px;
        }

        .footer-link {
          color: white;
          text-decoration: none;
          font-size: 14px;
          opacity: 0.9;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: center;
        }

        .footer-link:hover {
          opacity: 1;
        }

        .link-arrow {
          margin-right: 8px;
          font-size: 12px;
        }

        .additional-links {
          margin-top: 25px;
        }

        .contact-section {
          flex: 0 0 180px;
          text-align: center;
        }

        .contact-button {
          background-color: #6B7280;
          color: white;
          border: 2px solid #6B7280;
          border-radius: 25px;
          padding: 12px 24px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .contact-button:hover {
          background-color: #4B5563;
          border-color: #4B5563;
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .main-content {
            padding: 30px 40px;
            margin-bottom: 60px;
          }
          
          .main-title {
            font-size: 24px;
          }
          
          .footer {
            padding: 35px 40px;
          }
        }

        @media (max-width: 768px) {
          .header-image {
            height: 200px;
          }

          .breadcrumb-section {
            padding: 10px 20px;
          }

          .breadcrumb-content {
            font-size: 12px;
          }

          .breadcrumb-text {
            font-size: 12px;
            padding: 10px 20px;
          }

          .main-content {
            padding: 20px 20px;
            margin-bottom: 40px;
          }

          .title-section {
            margin-bottom: 25px;
            text-align: center;
          }

          .subtitle {
            font-size: 12px;
          }

          .main-title {
            font-size: 20px;
          }

          .search-section {
            flex-direction: column;
            gap: 15px;
            margin-bottom: 20px;
          }

          .search-select {
            max-width: 100%;
            flex: none;
            width: 100%;
            min-width: auto;
          }

          .search-input {
            flex: none;
            width: 100%;
            min-width: auto;
          }

          .search-button {
            padding: 12px 24px;
            width: 100%;
          }

          .cards-container {
            flex-direction: column;
            gap: 20px;
          }

          .card {
            min-height: 280px;
            padding: 20px;
          }

          .card-title {
            font-size: 14px;
          }

          .card-details {
            font-size: 12px;
          }

          .card-button {
            padding: 10px 24px;
            font-size: 12px;
          }

          .footer {
            flex-direction: column;
            align-items: center;
            padding: 30px 20px;
            gap: 30px;
            min-height: auto;
          }

          .footer-left {
            flex: none;
            padding-right: 0;
            text-align: center;
            width: 100%;
          }

          .footer-title {
            font-size: 28px;
          }

          .footer-description {
            font-size: 12px;
          }

          .social-icons {
            justify-content: center;
          }

          .social-icon {
            font-size: 20px;
          }

          .footer-right {
            flex-direction: column;
            align-items: center;
            max-width: 100%;
            gap: 30px;
            width: 100%;
          }

          .footer-links {
            flex: none;
            padding-right: 0;
            text-align: center;
            width: 100%;
          }

          .footer-section-title {
            font-size: 16px;
          }

          .footer-link {
            font-size: 12px;
            justify-content: center;
          }

          .contact-section {
            flex: none;
            width: 100%;
          }

          .contact-button {
            padding: 10px 20px;
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .main-content {
            padding: 15px 15px;
          }
          
          .card {
            padding: 15px;
            min-height: 250px;
          }
          
          .search-section {
            gap: 10px;
          }
          
          .cards-container {
            gap: 15px;
          }
        }

        /* High DPI screens */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .card {
            box-shadow: 0 8px 30px rgba(0,0,0,0.2);
          }
        }

        /* Landscape orientation on mobile */
        @media (max-width: 768px) and (orientation: landscape) {
          .header-image {
            height: 150px;
          }
          
          .main-content {
            padding: 20px;
          }
        }
      `}</style>

      {/* Header with image */}
      <div className="header-image"></div>

      {/* Orange breadcrumb section */}
      <div className="breadcrumb-section">
        <div className="breadcrumb-content">
        </div>
      </div>

      <span
        onClick={() => setSelectedNews(null)}
        className="breadcrumb-text"
      >
        Home &gt; Berita Terkini
      </span>

      {/* Main Content */}
      <div className="main-content">
        {/* Title Section */}
        <div className="title-section">
          <p className="subtitle">SKEMA SERTIFIKAS</p>
          <h1 className="main-title">JADWAL ASSESMEN</h1>
        </div>

        {/* Search Section */}
        <div className="search-section">
          <select className="search-select">
            <option>Skema</option>
          </select>
          <select className="search-select">
            <option>Jadwal</option>
          </select>
          <input
            type="text"
            placeholder="Cari..."
            className="search-input"
          />
          <button className="search-button">
            Cari
          </button>
        </div>

        {/* Cards Section - Full Screen Width */}
        <div className="cards-container">
          {/* Card 1 */}
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">
                Uji Sertifikasi Kompetensi Bidang Rekayasa Perangkat Lunak
              </h3>
              {/* Line after title */}
              <div className="card-separator-line"></div>
              <div className="card-details">
                <p>Lokasi: Lab RPL, SMKN 24 Jakarta</p>
                <p>Tanggal: 10/09/2025</p>
                <p>Waktu: 08.00 - 12.00 WIB</p>
              </div>
            </div>
            <div className="card-button-container">
              <button className="card-button">
                Daftar
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">
                Asesmen Kompetensi Keahlian Teknik Jaringan Komputer
              </h3>
              {/* Line after title */}
              <div className="card-separator-line"></div>
              <div className="card-details">
                <p>Lokasi: Lab TKJ, SMKN 24 Jakarta</p>
                <p>Tanggal: 15/09/2025</p>
                <p>Waktu: 09.00 - 13.00 WIB</p>
              </div>
            </div>
            <div className="card-button-container">
              <button className="card-button">
                Daftar
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card">
            <div className="card-content">
              <h3 className="card-title">
                Uji Kompetensi Keahlian Multimedia dan Desain Grafis
              </h3>
              {/* Line after title */}
              <div className="card-separator-line"></div>
              <div className="card-details">
                <p>Lokasi: Studio Multimedia, SMKN 24 Jakarta</p>
                <p>Tanggal: 20/09/2025</p>
                <p>Waktu: 10.00 - 14.00 WIB</p>
              </div>
            </div>
            <div className="card-button-container">
              <button className="card-button">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        {/* Left Side - MyLSP Section */}
        <div className="footer-left">
          <h2 className="footer-title">
            MyLSP
          </h2>
          <p className="footer-description">
            Membantu industri menyediakan ikon bahwa produk/jasa nya telah dibuat oleh tenaga-tenaga yang kompeten.
          </p>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="#" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side - Links and Contact */}
        <div className="footer-right">
          {/* Know More About Section */}
          <div className="footer-links">
            <h3 className="footer-section-title">
              Know More About:
            </h3>
            <ul className="link-list">
              {[
                { text: 'Tentang Kami', path: '/#profile' },
                { text: 'Visi dan Misi', path: '/visi-misi' },
                { text: 'Skema Sertifikasi', path: '/detail-sertifikasi' }
              ].map((item, index) => (
                <li key={index} className="link-item">
                  <a href={item.path} className="footer-link">
                    <span className="link-arrow">▶</span>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Additional Links */}
            <div className="additional-links">
              <ul className="link-list">
                {[
                  { text: 'Jadwal Asesmen', path: '/jadwal-asesmen' },
                  { text: 'Berita', path: '/berita' },
                  { text: 'Lihat Foto dan Video', path: '/galeri-foto' }
                ].map((item, index) => (
                  <li key={index} className="link-item">
                    <a href={item.path} className="footer-link">
                      <span className="link-arrow">▶</span>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="contact-section">
            <h3 className="footer-section-title">
              Contact Us:
            </h3>
            <button className="contact-button">
              Contact Us
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JadwalAsesmen;