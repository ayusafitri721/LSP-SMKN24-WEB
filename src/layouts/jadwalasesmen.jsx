import React from 'react';

const JadwalAsesmen = () => {
  return (
    <div style={styles.container}>
      {/* Header with image */}
      <div style={{
        position: "relative",
        height: "300px",
        backgroundImage: "url('src/img/komputer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "0"
      }}></div>

     {/* Orange breadcrumb section */}
        <div style={{
          backgroundColor: "#ff9324",
          padding: "15px 40px",
          color: "white"
        }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            fontSize: "14px"
          }}>
            
           
          </div>
        </div>

         <span 
                onClick={() => setSelectedNews(null)}
                style={{
                  color: "#000000",
                  fontSize: "14px",
                  cursor: "pointer",
                  marginBottom: "1px",
                  display: "block"
                }}
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

        {/* Horizontal Line */}
        <div style={styles.horizontalLine}></div>

        {/* Cards Section - Full Screen Width */}
        <div style={styles.cardsContainer}>
          {/* Card 1 */}
          <div style={styles.card}>
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </h3>
              {/* Line after Lorem ipsum */}
              <div style={styles.cardSeparatorLine}></div>
              <div style={styles.cardDetails}>
                <p>Lokasi: Lorem Ipsum</p>
                <p>Tanggat: DD/MM/YY</p>
                <p>Waktu: 00.00</p>
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
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </h3>
              {/* Line after Lorem ipsum */}
              <div style={styles.cardSeparatorLine}></div>
              <div style={styles.cardDetails}>
                <p>Lokasi: Lorem Ipsum</p>
                <p>Tanggat: DD/MM/YY</p>
                <p>Waktu: 00.00</p>
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
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </h3>
              {/* Line after Lorem ipsum */}
              <div style={styles.cardSeparatorLine}></div>
              <div style={styles.cardDetails}>
                <p>Lokasi: Lorem Ipsum</p>
                <p>Tanggat: DD/MM/YY</p>
                <p>Waktu: 00.00</p>
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
                'Tentang Kami',
                'Visi dan Misi',
                'Struktur Organisasi',
                'Skema Sertifikasi'
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>
                  <a 
                    href="#" 
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
                    {item}
                  </a>
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
                  'Syarat dan Ketentuan',
                  'Jadwal Asesmen',
                  'Berita',
                  'Kirim Foto dan Video'
                ].map((item, index) => (
                  <li key={index} style={{ marginBottom: '8px' }}>
                    <a 
                      href="#" 
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
                      {item}
                    </a>
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
            <button 
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
  breadcrumbHeader: {
    backgroundColor: '#ff6b00',
    padding: '8px 16px',
  },
  breadcrumbContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontSize: '14px',
  },
  breadcrumbSeparator: {
    margin: '0 8px',
  },
  mainContent: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '40px 60px',
    marginBottom: '80px',
  },
  titleSection: {
    marginBottom: '40px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '8px',
    marginTop: '0',
  },
  mainTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    margin: '0',
  },
  searchSection: {
    display: 'flex',
    gap: '30px',
    marginBottom: '30px',
    alignItems: 'center',
    width: '100%',
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
  },
  searchInput: {
    flex: '2',
    padding: '12px 20px',
    border: '1px solid #ddd',
    borderRadius: '25px',
    fontSize: '14px',
  },
  searchButton: {
    backgroundColor: '#ff6b00',
    color: 'white',
    padding: '12px 32px',
    border: 'none',
    borderRadius: '25px',
    fontWeight: '500',
    cursor: 'pointer',
  },
  horizontalLine: {
    width: '100%',
    height: '1px',
    backgroundColor: '#ddd',
    marginBottom: '40px',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px',
    alignItems: 'stretch',
    width: '100%',
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
  },
};

export default JadwalAsesmen;