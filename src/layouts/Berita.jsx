import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Berita() {
  const [selectedNews, setSelectedNews] = useState(null);
  
  const newsData = [
    {
      id: 1,
      title: "Uji Sertifikasi Kompetensi (USK) di SMK",
      excerpt: "Pelaksanaan Uji Sertifikasi Kompetensi bagi siswa kelas XII program keahlian di SMKN 24 Jakarta.",
      fullContent: "Uji Sertifikasi Kompetensi (USK) merupakan proses penting untuk mengukur kemampuan siswa kelas XII dalam bidang keahlian yang mereka pelajari. Kegiatan ini bekerja sama dengan Lembaga Sertifikasi Profesi (LSP) yang berlisensi BNSP. Melalui USK, siswa diharapkan mendapatkan pengakuan resmi atas kompetensinya yang siap digunakan dalam dunia kerja, baik di tingkat nasional maupun internasional.",
      image: "src/img/kotak1 kiri.jpg"
    },
    {
      id: 2,
      title: "Tes Kemampuan Akademik (TKA) di SMK",
      excerpt: "TKA dilaksanakan untuk memetakan kemampuan akademik siswa sebagai persiapan menghadapi ujian nasional dan dunia kerja.",
      fullContent: "Tes Kemampuan Akademik (TKA) bertujuan untuk mengevaluasi pemahaman siswa dalam mata pelajaran umum dan produktif. Hasil dari tes ini akan digunakan sebagai dasar pembinaan dan pembekalan siswa agar siap menghadapi Ujian Sekolah, USK, dan tantangan di dunia kerja.",
      image: "src/img/kotak2 kanan.png"
    },
    {
      id: 3,
      title: "AAS (Assemen Akhir Sekolah)",
      excerpt: "Sosialisasi dan persiapan SBMPTN untuk memberikan peluang lulusan SMK melanjutkan pendidikan ke perguruan tinggi.",
      fullContent: "SMKN 24 Jakarta memberikan pendampingan dan pembinaan kepada siswa yang berminat melanjutkan pendidikan ke perguruan tinggi melalui jalur SBMPTN. Program ini mencakup tryout, bimbingan belajar, dan motivasi agar lulusan memiliki kesempatan bersaing dalam seleksi nasional.",
      image: "src/img/kotak3 kiri.png"
    },
    {
      id: 4,
      title: "SBMPTN untuk siswa SMA/SMK",
      excerpt: "Sosialisasi dan persiapan SBMPTN untuk memberikan peluang lulusan SMK melanjutkan pendidikan ke perguruan tinggi.",
       fullContent: "SMKN 24 Jakarta memberikan pendampingan dan pembinaan kepada siswa yang berminat melanjutkan pendidikan ke perguruan tinggi melalui jalur SBMPTN. Program ini mencakup tryout, bimbingan belajar, dan motivasi agar lulusan memiliki kesempatan bersaing dalam seleksi nasional.",
      image: "src/img/kotak3 kiri.png"
    }
  ];

  const sidebarNews = [
    {
     title: "SMKN 24 Jakarta Berhasil Meraih Juara 1 Lomba Kompetensi Siswa Tingkat Provinsi",
      image: "src/img/sidebarnews.jpg"
    },
    {
      title: "LSP SMKN 24 Jakarta Resmi Mendapatkan Lisensi dari BNSP",
      image: "src/img/sidebarnews.jpg"
    },
    {
       title: "Sosialisasi Sertifikasi Kompetensi Bagi Siswa Kelas XI dan XII",
      image: "src/img/sidebarnews.jpg"
    }
  ];

  if (selectedNews) {
    return (
      <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fff" }}>
        {/* Header with building image */}
        <div style={{
          position: "relative",
          height: "300px",
          backgroundImage: "url('src/img/auditoriums.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "0"
        }}>
        </div>

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

        {/* Centered Header Section */}
        <div style={{ 
          padding: "40px 40px 0 40px",
          backgroundColor: "#f8f9fa",
          textAlign: "center"
        }}>
          
          <h1 style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#A6B28B",
            marginBottom: "5px",
            textTransform: "uppercase",
            margin: "0 0 5px 0"
          }}>
            SMKN 24 JAKARTA
          </h1>
          <h1 style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#333",
            textTransform: "uppercase",
            letterSpacing: "1px",
            margin: "0 0 40px 0"
          }}>
            BERITA TERKINI
          </h1>
        </div>

        {/* Main Content with Sidebar */}
        <div style={{ padding: "30px 60px 30px 60px", backgroundColor: "#f8f9fa" }}>
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            gap: "50px"
          }}>
            {/* Detail Content */}
            <div style={{ flex: "2.2" }}>
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
              </span>

              <div style={{
                backgroundColor: "white",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
              }}>
                <img 
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover"
                  }}
                />
                <div style={{ padding: "40px" }}>
                  <h1 style={{
                    fontSize: "32px",
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "20px",
                    lineHeight: "1.4"
                  }}>
                    {selectedNews.title}
                  </h1>
                  <p style={{
                    fontSize: "16px",
                    color: "#666",
                    lineHeight: "1.6"
                  }}>
                    {selectedNews.fullContent}
                  </p>
                </div>
              </div>
            </div>

           {/* Right Sidebar */}
          <div style={{ flex: "1", marginTop: "10px" }}>
            <div style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "25px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
              marginLeft: "-10px"
            }}>
              <h3 style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "25px",
                color: "#333",
                textAlign: "center"
              }}>
                Berita Terpopuler
              </h3>
              
              {sidebarNews.map((item, index) => (
                <div key={index} style={{
                  display: "flex",
                  gap: "12px",
                  paddingBottom: "18px",
                  marginBottom: "18px",
                  borderBottom: index !== sidebarNews.length - 1 ? "1px solid #eee" : "none",
                  cursor: "pointer"
                }}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{
                      width: "70px",
                      height: "55px",
                      objectFit: "cover",
                      borderRadius: "4px",
                      flexShrink: 0
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontSize: "12px",
                      color: "#333",
                      lineHeight: "1.4",
                      margin: "0",
                      fontWeight: "500"
                    }}>
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
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

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fff" }}>
      {/* Header with building image */}
      <div style={{
       position: "relative",
       height: "450px",
       backgroundImage: "url('src/img/auditoriums.png')",
       backgroundSize: "cover",
       backgroundPosition: "center",
       marginTop: "0"
      }}>
      </div>

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

      {/* Centered Header Section */}
      <div style={{ 
        padding: "40px 40px 0 40px",
        backgroundColor: "#f8f9fa",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#A6B28B",
          marginBottom: "5px",
          textTransform: "uppercase",
          margin: "0 0 5px 0"
        }}>
          SMKN 24 JAKARTA
        </h1>
        <h1 style={{
          fontSize: "36px",
          fontWeight: "bold",
          color: "#333",
          textTransform: "uppercase",
          letterSpacing: "1px",
          margin: "0 0 40px 0"
        }}>
          BERITA TERKINI
        </h1>
      </div>

      {/* Main Content */}
      <div style={{ padding: "90px 80px 60px 70px", backgroundColor: "#f8f9fa" }}>
        <div style={{
          display: "flex",
          gap: "50px",
          alignItems: "flex-start"
        }}>
          {/* Left Content - News Grid */}
          <div style={{ flex: "2.2" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "25px",
              marginTop: "0"
            }}>
              {newsData.map((news) => (
                <div
                  key={news.id}
                  onClick={() => setSelectedNews(news)}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 3px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    style={{ 
                      width: "100%", 
                      height: "180px", 
                      objectFit: "cover" 
                    }} 
                  />
                  <div style={{ padding: "20px" }}>
                    <h3 style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#333",
                      marginBottom: "12px",
                      lineHeight: "1.4"
                    }}>
                      {news.title}
                    </h3>
                    <p style={{
                      fontSize: "13px",
                      color: "#666",
                      lineHeight: "1.5",
                      margin: 0
                    }}>
                      {news.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div style={{ flex: "1", marginTop: "0" }}>
            <div style={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              padding: "25px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
              marginLeft: "-10px"
            }}>
              <h3 style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "25px",
                color: "#333",
                textAlign: "center"
              }}>
                Berita Terpopuler
              </h3>
              
              {sidebarNews.map((item, index) => (
                <div key={index} style={{
                  display: "flex",
                  gap: "12px",
                  paddingBottom: "18px",
                  marginBottom: "18px",
                  borderBottom: index !== sidebarNews.length - 1 ? "1px solid #eee" : "none",
                  cursor: "pointer"
                }}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{
                      width: "70px",
                      height: "55px",
                      objectFit: "cover",
                      borderRadius: "4px",
                      flexShrink: 0
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontSize: "12px",
                      color: "#333",
                      lineHeight: "1.4",
                      margin: "0",
                      fontWeight: "500"
                    }}>
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
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

export default Berita;