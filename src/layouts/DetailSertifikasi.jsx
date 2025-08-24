import React from "react";
import labImage from "../img/komputer.png";

const DetailSertifikasi = ({ onNavigate }) => {
  const handleMenuClick = (menuItem) => {
    console.log(`Clicked on: ${menuItem}`);
    // Panggil onNavigate jika tersedia
    if (onNavigate) {
      onNavigate(menuItem);
    }
  };

  return (
    <div className="home-container">
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
          onClick={() => handleMenuClick('Home')}
        >
          Home
        </span>
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
          background: linear-gradient(135deg, #ff6b35, #f7931e, #ffc107, #ffeb3b);
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
        }

        .tab-item {
          flex: 1;
          padding: 12px 20px;
          text-align: center;
          color: white;
          font-weight: 500;
          cursor: pointer;
          border-right: 1px solid rgba(255,255,255,0.2);
          transition: all 0.3s ease;
          position: relative;
        }

        .tab-item:last-child {
          border-right: none;
        }

        .tab-item:hover {
          background-color: rgba(255,255,255,0.1);
        }

        .tab-item.active {
          background-color: rgba(255,255,255,0.2);
          font-weight: 600;
        }

        /* TABLE STYLES */
        .table-container {
          border: 2px solid #e0e0e0;
          border-top: none;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          overflow: hidden;
        }

        .unit-table {
          width: 100%;
          border-collapse: collapse;
          background-color: white;
        }

        .unit-table thead {
          background-color: #f8f9fa;
          border-bottom: 2px solid #e0e0e0;
        }

        .unit-table th {
          padding: 15px 12px;
          text-align: center;
          font-weight: 600;
          color: #333;
          border-right: 1px solid #e0e0e0;
          font-size: 14px;
        }

        .unit-table th:last-child {
          border-right: none;
        }

        .unit-table td {
          padding: 15px 12px;
          text-align: center;
          border-right: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          min-height: 50px;
          color: #666;
        }

        .unit-table td:last-child {
          border-right: none;
        }

        .unit-table tbody tr:last-child td {
          border-bottom: none;
        }

        .unit-table tbody tr:hover {
          background-color: #f8f9fa;
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

        /* Responsive design */
        @media (max-width: 768px) {
          .skema-header {
            flex-direction: column;
            gap: 20px;
          }
          
          .main-title {
            font-size: 32px;
          }
          
          .stats-container {
            flex-direction: column;
          }
          
          .stats-card-middle {
            border-left: none;
            border-right: none;
            border-top: 2px solid #e0e0e0;
            border-bottom: 2px solid #e0e0e0;
          }
          
          .footer {
            flex-direction: column;
            height: auto;
          }
          
          .footer-right {
            flex-direction: column;
            gap: 30px;
          }
          
          .tabs-container {
            flex-wrap: wrap;
          }
          
          .tab-item {
            flex: 1 1 50%;
            min-width: 120px;
          }
          
          .unit-table {
            font-size: 12px;
          }
          
          .unit-table th,
          .unit-table td {
            padding: 8px 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default DetailSertifikasi;