// src/pages/Home.jsx
import React from "react";
import labImage from "../img/lab.png";
import logoLSP from "../img/LOGO_LSP_SMKN_24.jpg";

const Home = () => {
  const handleMenuClick = (menuItem) => {
    console.log(`Clicked on: ${menuItem}`);
    // Di sini bisa ditambahkan navigasi atau logika lainnya
    // Misalnya: navigate(`/${menuItem.toLowerCase()}`);
  };

  return (
    <div className="home-container">
      {/* NAVBAR */}
      <nav className="navbar">
        {/* Left - Logo */}
        <div className="navbar-logo">
          <img
            src={logoLSP}
            alt="Logo LSP"
            className="logo-img"
          />
          <span className="logo-text">MyLSP</span>
        </div>

        {/* Middle - Menu */}
        <ul className="navbar-menu">
          <li className="menu-item" onClick={() => handleMenuClick('Home')}>Home</li>
          <li className="menu-item" onClick={() => handleMenuClick('Profile')}>
            Profile <span className="dropdown-arrow">▼</span>
          </li>
          <li className="menu-item" onClick={() => handleMenuClick('Sertifikasi')}>
            Sertifikasi <span className="dropdown-arrow">▼</span>
          </li>
          <li className="menu-item" onClick={() => handleMenuClick('Berita')}>
            Berita <span className="dropdown-arrow">▼</span>
          </li>
          <li className="menu-item" onClick={() => handleMenuClick('Galeri')}>
            Galeri <span className="dropdown-arrow">▼</span>
          </li>
          <li className="menu-item" onClick={() => handleMenuClick('Kontak')}>Kontak</li>
        </ul>

        {/* Right - Blue background + Login */}
        <div className="navbar-right">
          <div className="login-container">
            <button className="login-btn">
              Login
            </button>
          </div>
        </div>
      </nav>

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
        <span className="breadcrumb-home">Home</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-current">Detail Skema Sertifikasi</span>
      </div>

      {/* SKEMA SERTIFIKASI SECTION */}
      <div className="skema-section">
        <div className="skema-header">
          {/* Left - Title */}
          <div className="title-container">
            <div className="section-label">
              SKEMA SERTIFIKASI
            </div>
            <h1 className="main-title">
              REKAYASA PERANGKAT LUNAK
            </h1>
          </div>
          
          {/* Right - Button */}
          <button className="daftar-btn">
            Daftar Uji Kompetensi
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="stats-container">
          {/* Card 1 - Asesor Kompetensi */}
          <div className="stats-card">
            <div className="stats-label">
              ASESOR KOMPETENSI
            </div>
            <div className="stats-number">
              219
            </div>
          </div>

          {/* Card 2 - Pemegang Sertifikasi */}
          <div className="stats-card stats-card-middle">
            <div className="stats-label">
              PEMEGANG SERTIFIKASI
            </div>
            <div className="stats-number">
              416
            </div>
          </div>

          {/* Card 3 - Lowongan Pekerjaan */}
          <div className="stats-card">
            <div className="stats-label">
              LOWONGAN PEKERJAAN
            </div>
            <div className="stats-number">
              59
            </div>
          </div>
        </div>
      </div>

      {/* DETAIL INFORMASI SECTION */}
      <div className="detail-section">
        <div className="detail-info">
          <div className="info-row">
            <span className="info-label">Nama</span>
            <span className="info-colon">:</span>
            <span className="info-value">Rekayasa Perangkat Lunak</span>
          </div>
          <div className="info-row">
            <span className="info-label">Kode</span>
            <span className="info-colon">:</span>
            <span className="info-value">00001</span>
          </div>
          <div className="info-row">
            <span className="info-label">Jenis</span>
            <span className="info-colon">:</span>
            <span className="info-value">Lorem Ipsum</span>
          </div>
          <div className="info-row">
            <span className="info-label">Harga</span>
            <span className="info-colon">:</span>
            <span className="info-value">Rp. 0,00-</span>
          </div>
          <div className="info-row">
            <span className="info-label">Unit Kompetensi</span>
            <span className="info-colon">:</span>
            <span className="info-value">10</span>
          </div>
          <div className="info-row">
            <span className="info-label">Ringkasan</span>
            <span className="info-colon">:</span>
            <span className="info-value description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien 
              vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus 
              leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus 
              bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut 
              hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra 
              inceptos himenaeos.
            </span>
          </div>
        </div>

        {/* TABS SECTION */}
        <div className="tabs-section">
          <div className="tabs-container">
            <div className="tab-item active">Unit Kompetensi</div>
            <div className="tab-item">Persyaratan</div>
            <div className="tab-item">Masa Berlaku</div>
            <div className="tab-item">Wajiban Pemegang Sertifikat</div>
          </div>

          {/* TABLE */}
          <div className="table-container">
            <table className="unit-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Kode Unit</th>
                  <th>Judul Unit</th>
                  <th>Standar Kompetensi</th>
                  <th>Download Lampiran</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }, (_, index) => (
                  <tr key={index}>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
            <div className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2zM7.6 4C5.61 4 4 5.61 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8c1.99 0 3.6-1.61 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zM17.25 5.5c.69 0 1.25.56 1.25 1.25S17.94 8 17.25 8 16 7.44 16 6.75s.56-1.25 1.25-1.25zM12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
            </div>
            <div className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </div>
            <div className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Blue Section */}
        <div className="footer-right">
          {/* Know More About */}
          <div className="footer-column">
            <h4 className="footer-title">Know More About:</h4>
            <ul className="footer-links">
              <li>▶ Tentang Kami</li>
              <li>▶ Visi dan Misi</li>
              <li>▶ Struktur Organisasi</li>
              <li>▶ Skema Sertifikasi</li>
              <li>▶ Tempat Uji Kompetensi</li>
              <li>▶ Jadwal Asesmen</li>
              <li>▶ Berita</li>
              <li>▶ Galeri Foto dan Video</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-column contact-column">
            <h4 className="footer-title">Contact Us:</h4>
            <button className="contact-btn">Contact Us</button>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .home-container {
          font-family: 'Segoe UI', Tahoma, Verdana, sans-serif;
          color: #222;
        }

        /* NAVBAR STYLES */
        .navbar {
          display: flex;
          align-items: center;
          background-color: #fff;
          height: 85px;
          position: relative;
          z-index: 10;
          box-shadow: 0 1px 3px rgba(0,0,0,0.08);
          padding: 0 0 0 24px;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-img {
          height: 85px;
          width: 85px;
          object-fit: contain;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.9);
          padding: 3px;
        }

        .logo-text {
          font-weight: 700;
          font-size: 28px;
          color: #ff7a00;
        }

        .navbar-menu {
          display: flex;
          list-style: none;
          gap: 12px;
          margin: 0;
          padding: 0;
          font-size: 16px;
          font-weight: 400;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .menu-item {
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 8px 12px;
          border-radius: 4px;
          white-space: nowrap;
        }

        .menu-item:hover {
          background-color: rgba(255, 122, 0, 0.1);
          color: #ff7a00;
          transform: translateY(-1px);
        }

        .menu-item:active {
          transform: translateY(0);
          background-color: rgba(255, 122, 0, 0.2);
        }

        .dropdown-arrow {
          font-size: 12px;
        }

        .navbar-right {
          position: relative;
          height: 100%;
          width: 300px;
          margin-left: auto;
          background: linear-gradient(135deg, transparent 35%, #4a9eff 35%);
        }

        .login-container {
          position: absolute;
          right: 40px;
          top: 50%;
          transform: translateY(-50%);
        }

        .login-btn {
          background: #fff;
          border: none;
          border-radius: 26px;
          padding: 10px 20px;
          font-size: 16px;
          font-weight: 600;
          box-shadow: 0 6px 14px rgba(0,0,0,0.12);
          cursor: pointer;
        }

        /* HERO STYLES */
        .hero-section {
          width: 100%;
          height: 400px;
          background-color: #f5f5f5;
          overflow: hidden;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
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
        }

        .breadcrumb-separator {
          margin: 0 10px;
        }

        /* SKEMA SERTIFIKASI STYLES */
        .skema-section {
          padding: 60px 40px;
          background-color: #fff;
        }

        .skema-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 80px;
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

        .daftar-btn {
          background-color: #fff;
          border: 2px solid #4a9eff;
          border-radius: 30px;
          padding: 12px 32px;
          font-size: 16px;
          font-weight: 600;
          color: #4a9eff;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .daftar-btn:hover {
          background-color: #4a9eff;
          color: #fff;
        }

        /* STATISTICS STYLES */
        .stats-container {
          display: flex;
          gap: 0;
          justify-content: center;
        }

        .stats-card {
          background-color: #fff;
          padding: 60px 80px;
          text-align: center;
          min-width: 300px;
        }

        .stats-card-middle {
          border-left: 2px solid #e0e0e0;
          border-right: 2px solid #e0e0e0;
        }

        .stats-label {
          font-size: 18px;
          color: #666;
          font-weight: 600;
          margin-bottom: 30px;
          letter-spacing: 0.5px;
        }

        .stats-number {
          font-size: 96px;
          font-weight: 900;
          color: #000;
          line-height: 1;
        }

        /* DETAIL INFORMASI STYLES */
        .detail-section {
          padding: 40px;
          background-color: #fff;
          border-top: 1px solid #eee;
        }

        .detail-info {
          margin-bottom: 40px;
        }

        .info-row {
          display: flex;
          padding: 12px 0;
          border-bottom: 1px solid #eee;
          align-items: flex-start;
        }

        .info-row:last-child {
          border-bottom: none;
        }

        .info-label {
          width: 150px;
          font-weight: 600;
          color: #333;
          flex-shrink: 0;
        }

        .info-colon {
          width: 20px;
          flex-shrink: 0;
        }

        .info-value {
          flex: 1;
          color: #333;
          line-height: 1.5;
        }

        .info-value.description {
          text-align: justify;
        }

        /* TABS STYLES */
        .tabs-section {
          margin-top: 40px;
        }

        .tabs-container {
          display: flex;
          border-bottom: 2px solid #eee;
        }

        .tab-item {
          padding: 15px 25px;
          cursor: pointer;
          font-weight: 500;
          color: #666;
          background-color: #f8f8f8;
          border: 1px solid #ddd;
          border-bottom: none;
          margin-right: 2px;
        }

        .tab-item.active {
          background-color: #ff7a00;
          color: #fff;
          font-weight: 600;
        }

        /* TABLE STYLES */
        .table-container {
          margin-top: 20px;
          border: 2px solid #333;
          border-radius: 15px;
          overflow: hidden;
        }

        .unit-table {
          width: 100%;
          border-collapse: collapse;
        }

        .unit-table th {
          background-color: #fff;
          padding: 15px;
          text-align: center;
          font-weight: 600;
          color: #333;
          border-bottom: 1px solid #333;
          border-right: 1px solid #333;
        }

        .unit-table th:last-child {
          border-right: none;
        }

        .unit-table td {
          padding: 20px 15px;
          border-bottom: 1px solid #ddd;
          border-right: 1px solid #ddd;
          text-align: center;
        }

        .unit-table td:last-child {
          border-right: none;
        }

        .unit-table tbody tr:last-child td {
          border-bottom: none;
        }

        .unit-table tbody tr:nth-child(even) {
          background-color: #f9f9f9;
        }

        /* FOOTER STYLES */
        .footer {
          display: flex;
          height: 300px;
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
          font-size: 14px;
          color: white;
          margin-bottom: 8px;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        .footer-links li:hover {
          opacity: 0.8;
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
        }

        .contact-btn:hover {
          background-color: #555;
        }
      `}</style>
    </div>
  );
};

export default Home;