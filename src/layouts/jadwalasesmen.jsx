import React from 'react';

const JadwalAsesmen = () => {
  const setSelectedNews = () => { };

  return (
    <div style={styles.container}>
      {/* Header with image */}
      <div style={styles.headerImage}></div>

      {/* Orange breadcrumb section */}
      <div style={styles.breadcrumbSection}>
        <div style={styles.breadcrumbContent}>
        </div>
      </div>

      <span
        onClick={() => setSelectedNews(null)}
        style={styles.breadcrumbText}
      >
        Home &gt; Berita Terkini
      </span>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Title Section */}
        <div style={styles.titleSection}>
          <p style={styles.subtitle}>SKEMA SERTIFIKAS</p>
          <h1 style={styles.mainTitle}>JADWAL ASSESMEN</h1>
        </div>

        {/* Search Section */}
        <div style={styles.searchSection}>
          <select style={styles.searchSelect}>
            <option>Skema</option>
          </select>
          <select style={styles.searchSelect}>
            <option>Jadwal</option>
          </select>
          <input
            type="text"
            placeholder="Cari..."
            style={styles.searchInput}
          />
          <button style={styles.searchButton}>
            Cari
          </button>
        </div>

        {/* Cards Section - Full Screen Width */}
        <div style={styles.cardsContainer}>
          {/* Card 1 */}
          <div style={styles.card}>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>
                Uji Sertifikasi Kompetensi Bidang Rekayasa Perangkat Lunak
              </h3>
              {/* Line after title */}
              <div style={styles.cardSeparatorLine}></div>
              <div style={styles.cardDetails}>
                <p>Lokasi: Lab RPL, SMKN 24 Jakarta</p>
                <p>Tanggal: 10/09/2025</p>
                <p>Waktu: 08.00 - 12.00 WIB</p>
              </div>
            </div>
            <div style={styles.cardButtonContainer}>
              <button style={styles.cardButton}>
                Daftar
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div style={styles.card}>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>
                Asesmen Kompetensi Keahlian Teknik Jaringan Komputer
              </h3>
              {/* Line after title */}
              <div style={styles.cardSeparatorLine}></div>
              <div style={styles.cardDetails}>
                <p>Lokasi: Lab TKJ, SMKN 24 Jakarta</p>
                <p>Tanggal: 15/09/2025</p>
                <p>Waktu: 09.00 - 13.00 WIB</p>
              </div>
            </div>
            <div style={styles.cardButtonContainer}>
              <button style={styles.cardButton}>
                Daftar
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div style={styles.card}>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>
                Uji Kompetensi Keahlian Multimedia dan Desain Grafis
              </h3>
              {/* Line after title */}
              <div style={styles.cardSeparatorLine}></div>
              <div style={styles.cardDetails}>
                <p>Lokasi: Studio Multimedia, SMKN 24 Jakarta</p>
                <p>Tanggal: 20/09/2025</p>
                <p>Waktu: 10.00 - 14.00 WIB</p>
              </div>
            </div>
            <div style={styles.cardButtonContainer}>
              <button style={styles.cardButton}>
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        {/* Left Side - MyLSP Section */}
        <div style={styles.footerLeft}>
          <h2 style={styles.footerTitle}>
            MyLSP
          </h2>
          <p style={styles.footerDescription}>
            Membantu industri menyediakan ikon bahwa produk/jasa nya telah dibuat oleh tenaga-tenaga yang kompeten.
          </p>

          {/* Social Media Icons */}
          <div style={styles.socialIcons}>
            <a
              href="#"
              style={styles.socialIcon}
              onMouseOver={(e) => e.target.style.opacity = '0.7'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="#"
              style={styles.socialIcon}
              onMouseOver={(e) => e.target.style.opacity = '0.7'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              style={styles.socialIcon}
              onMouseOver={(e) => e.target.style.opacity = '0.7'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side - Links and Contact */}
        <div style={styles.footerRight}>
          {/* Know More About Section */}
          <div style={styles.footerLinks}>
            <h3 style={styles.footerSectionTitle}>
              Know More About:
            </h3>
            <ul style={styles.linkList}>
              {[
                { text: 'Tentang Kami', path: '/#profile' },
                { text: 'Visi dan Misi', path: '/visi-misi' },
                { text: 'Skema Sertifikasi', path: '/detail-sertifikasi' }
              ].map((item, index) => (
                <li key={index} style={styles.linkItem}>
                  <a href={item.path} style={styles.footerLink}
                    onMouseOver={(e) => e.target.style.opacity = '1'}
                    onMouseOut={(e) => e.target.style.opacity = '0.9'}
                  >
                    <span style={styles.linkArrow}>▶</span>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Additional Links */}
            <div style={styles.additionalLinks}>
              <ul style={styles.linkList}>
                {[
                  { text: 'Jadwal Asesmen', path: '/jadwal-asesmen' },
                  { text: 'Berita', path: '/berita' },
                  { text: 'Lihat Foto dan Video', path: '/galeri-foto' }
                ].map((item, index) => (
                  <li key={index} style={styles.linkItem}>
                    <a href={item.path} style={styles.footerLink}
                      onMouseOver={(e) => e.target.style.opacity = '1'}
                      onMouseOut={(e) => e.target.style.opacity = '0.9'}
                    >
                      <span style={styles.linkArrow}>▶</span>
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Us Section */}
          <div style={styles.contactSection}>
            <h3 style={styles.footerSectionTitle}>
              Contact Us:
            </h3>
            <button
              style={styles.contactButton}
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
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  },

  // Header Styles
  headerImage: {
    position: "relative",
    height: "300px",
    backgroundImage: "url('src/img/komputer.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginTop: "0",
    '@media (max-width: 768px)': {
      height: "200px"
    }
  },

  // Breadcrumb Styles
  breadcrumbSection: {
    backgroundColor: "#ff9324",
    padding: "15px 40px",
    color: "white",
    '@media (max-width: 768px)': {
      padding: "10px 20px"
    }
  },
  breadcrumbContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    fontSize: "14px",
    '@media (max-width: 768px)': {
      fontSize: "12px"
    }
  },
  breadcrumbText: {
    color: "#000000",
    fontSize: "14px",
    cursor: "pointer",
    marginBottom: "1px",
    display: "block",
    '@media (max-width: 768px)': {
      fontSize: "12px",
      padding: "10px 20px"
    }
  },

  // Main Content Styles
  mainContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '40px 60px',
    marginBottom: '80px',
    '@media (max-width: 1024px)': {
      padding: '30px 40px',
      marginBottom: '60px'
    },
    '@media (max-width: 768px)': {
      padding: '20px 20px',
      marginBottom: '40px'
    }
  },

  // Title Styles
  titleSection: {
    marginBottom: '40px',
    '@media (max-width: 768px)': {
      marginBottom: '25px',
      textAlign: 'center'
    }
  },
  subtitle: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '8px',
    marginTop: '0',
    '@media (max-width: 768px)': {
      fontSize: '12px'
    }
  },
  mainTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    margin: '0',
    '@media (max-width: 1024px)': {
      fontSize: '24px'
    },
    '@media (max-width: 768px)': {
      fontSize: '20px'
    }
  },

  // Search Section Styles
  searchSection: {
    display: 'flex',
    gap: '30px',
    marginBottom: '30px',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '15px',
      marginBottom: '20px'
    }
  },
  searchSelect: {
    flex: '1',
    padding: '12px 20px',
    border: '1px solid #ddd',
    borderRadius: '25px',
    backgroundColor: 'white',
    color: '#666',
    fontSize: '14px',
    maxWidth: '200px',
    '@media (max-width: 768px)': {
      maxWidth: '100%',
      flex: 'none',
      width: '100%'
    }
  },
  searchInput: {
    flex: '2',
    padding: '12px 20px',
    border: '1px solid #ddd',
    borderRadius: '25px',
    fontSize: '14px',
    '@media (max-width: 768px)': {
      flex: 'none',
      width: '100%'
    }
  },
  searchButton: {
    backgroundColor: '#ff6b00',
    color: 'white',
    padding: '12px 32px',
    border: 'none',
    borderRadius: '25px',
    fontWeight: '500',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      padding: '12px 24px',
      width: '100%'
    }
  },

  // Cards Styles
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px',
    alignItems: 'stretch',
    width: '100%',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: '20px'
    }
  },
  card: {
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '12px',
    padding: '25px',
    boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
    flex: '1',
    minHeight: '320px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    '@media (max-width: 768px)': {
      minHeight: '280px',
      padding: '20px'
    }
  },
  cardContent: {
    flex: '1',
    marginBottom: '20px',
  },
  cardTitle: {
    fontWeight: '600',
    color: '#333',
    marginBottom: '15px',
    fontSize: '16px',
    marginTop: '0',
    lineHeight: '1.4',
    '@media (max-width: 768px)': {
      fontSize: '14px'
    }
  },
  cardSeparatorLine: {
    width: '100%',
    height: '1px',
    backgroundColor: '#e0e0e0',
    marginBottom: '20px',
  },
  cardDetails: {
    fontSize: '14px',
    color: '#666',
    lineHeight: '1.8',
    marginBottom: '0',
    '@media (max-width: 768px)': {
      fontSize: '12px'
    }
  },
  cardButtonContainer: {
    textAlign: 'right',
    marginTop: 'auto',
  },
  cardButton: {
    backgroundColor: 'transparent',
    color: '#3b82f6',
    border: '1px solid #3b82f6',
    padding: '12px 36px',
    borderRadius: '25px',
    fontWeight: '500',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '@media (max-width: 768px)': {
      padding: '10px 24px',
      fontSize: '12px'
    }
  },

  // Footer Styles
  footer: {
    background: 'linear-gradient(135deg, #f97316 0%, #f97316 40%, #2C94FF 40%, #2C94FF 100%)',
    padding: '40px 60px',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '200px',
    position: 'relative',
    overflow: 'hidden',
    '@media (max-width: 1024px)': {
      padding: '35px 40px'
    },
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px 20px',
      gap: '30px',
      minHeight: 'auto'
    }
  },
  footerLeft: {
    flex: '0 0 300px',
    paddingRight: '40px',
    '@media (max-width: 768px)': {
      flex: 'none',
      paddingRight: '0',
      textAlign: 'center',
      width: '100%'
    }
  },
  footerTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: 'white',
    '@media (max-width: 768px)': {
      fontSize: '28px'
    }
  },
  footerDescription: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: 'white',
    opacity: '0.95',
    marginBottom: '25px',
    '@media (max-width: 768px)': {
      fontSize: '12px'
    }
  },
  socialIcons: {
    display: 'flex',
    gap: '15px',
    '@media (max-width: 768px)': {
      justifyContent: 'center'
    }
  },
  socialIcon: {
    color: 'white',
    fontSize: '24px',
    transition: 'opacity 0.3s ease',
    textDecoration: 'none',
    '@media (max-width: 768px)': {
      fontSize: '20px'
    }
  },
  footerRight: {
    flex: '1',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    maxWidth: '600px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '100%',
      gap: '30px',
      width: '100%'
    }
  },
  footerLinks: {
    flex: '1',
    paddingRight: '40px',
    '@media (max-width: 768px)': {
      flex: 'none',
      paddingRight: '0',
      textAlign: 'center',
      width: '100%'
    }
  },
  footerSectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: 'white',
    '@media (max-width: 768px)': {
      fontSize: '16px'
    }
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  linkItem: {
    marginBottom: '8px'
  },
  footerLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '14px',
    opacity: '0.9',
    transition: 'opacity 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 768px)': {
      fontSize: '12px',
      justifyContent: 'center'
    }
  },
  linkArrow: {
    marginRight: '8px',
    fontSize: '12px'
  },
  additionalLinks: {
    marginTop: '25px'
  },
  contactSection: {
    flex: '0 0 180px',
    textAlign: 'center',
    '@media (max-width: 768px)': {
      flex: 'none',
      width: '100%'
    }
  },
  contactButton: {
    backgroundColor: '#6B7280',
    color: 'white',
    border: '2px solid #6B7280',
    borderRadius: '25px',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '@media (max-width: 768px)': {
      padding: '10px 20px',
      fontSize: '12px'
    }
  }
};

export default JadwalAsesmen;