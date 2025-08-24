import React, { useState } from 'react';

function GaleriFoto({ onBack }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

<<<<<<< HEAD
  // Data contoh foto galeri
=======
  // Data foto galeri dengan deskripsi yang sesuai
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
  const galleryImages = [
    {
      id: 1,
      src: 'src/img/lab.png',
<<<<<<< HEAD
      alt: 'Seminar Teknologi Informasi',
      title: 'Seminar Nasional Teknologi Informasi',
      description: 'Acara seminar nasional yang diselenggarakan oleh LSP dengan pembicara ahli teknologi terkini',
=======
      alt: 'Laboratorium Komputer RPL',
      title: 'Laboratorium Rekayasa Perangkat Lunak',
      description: 'Fasilitas laboratorium komputer yang digunakan untuk praktikum dan asesmen kompetensi RPL',
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
      date: '27 Januari 2025',
      category: 'Lab RPL'
    },
    {
      id: 2,
      src: 'src/img/kenapakami.jpg',
<<<<<<< HEAD
      alt: 'Workshop Sertifikasi',
      title: 'Workshop Sertifikasi Web Developer',
      description: 'Pelatihan intensif pengembangan web untuk peserta sertifikasi dengan mentor berpengalaman',
=======
      alt: 'Uji Sertifikasi Kompetensi',
      title: 'Pelaksanaan Uji Sertifikasi Kompetensi',
      description: 'Dokumentasi kegiatan uji sertifikasi kompetensi LSP SMKN 24 Jakarta dengan para peserta',
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
      date: '15 Februari 2025',
      category: 'USK'
    },
    {
      id: 3,
      src: 'src/img/kontak.png',
<<<<<<< HEAD
      alt: 'Asesmen Kompetensi',
      title: 'Pelaksanaan Asesmen Kompetensi',
      description: 'Kegiatan asesmen kompetensi bidang IT untuk mengukur kemampuan peserta',
=======
      alt: 'Gedung Sekolah',
      title: 'Gedung SMKN 24 Jakarta',
      description: 'Tampak depan gedung SMKN 24 Jakarta sebagai lokasi LSP dan kegiatan asesmen',
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
      date: '20 Februari 2025',
      category: 'Asesmen'
    },
    {
      id: 4,
      src: 'src/img/lsp.png',
<<<<<<< HEAD
      alt: 'Penyerahan Sertifikat',
      title: 'Penyerahan Sertifikat Kompetensi',
      description: 'Acara penyerahan sertifikat kepada peserta yang berhasil lulus asesmen',
=======
      alt: 'Acara Penyerahan Sertifikat',
      title: 'Upacara Penyerahan Sertifikat Kompetensi',
      description: 'Momen penyerahan sertifikat kompetensi kepada peserta yang telah lulus asesmen',
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
      date: '25 Februari 2025',
      category: 'Sertifikasi'
    },
    {
      id: 5,
      src: 'src/img/smk.png',
<<<<<<< HEAD
      alt: 'Rapat Koordinasi',
      title: 'Rapat Koordinasi LSP',
      description: 'Rapat koordinasi tim LSP membahas program kerja dan evaluasi kegiatan',
      date: '1 Maret 2025',
      category: 'Rapat'
=======
      alt: 'Informasi Sekolah',
      title: 'Papan Informasi SMKN 24 Jakarta',
      description: 'Papan informasi dan profil sekolah SMKN 24 Jakarta yang menampilkan berbagai program keahlian',
      date: '1 Maret 2025',
      category: 'Informasi'
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
    },
    {
      id: 6,
      src: 'src/img/dibutuhkan.png',
<<<<<<< HEAD
      alt: 'Pelatihan Asesor',
      title: 'Pelatihan Asesor Baru',
      description: 'Pelatihan untuk asesor baru LSP guna meningkatkan kualitas penilaian',
      date: '5 Maret 2025',
      category: 'Pelatihan'
=======
      alt: 'Lowongan Kerja Digital',
      title: 'Info Lowongan Kerja Bidang IT',
      description: 'Informasi lowongan pekerjaan di bidang teknologi digital dan rekayasa perangkat lunak',
      date: '5 Maret 2025',
      category: 'Karir'
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Hero Section dengan overlay */}
      <div style={{
         position: "relative",
          height: "450px",
          backgroundImage: "url('src/img/auditoriums.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "0"
      }}>
        {/* Blue overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#419EFD4D',
          zIndex: 1
        }}></div>
      </div>

      {/* Orange breadcrumb section - sama seperti di berita */}
      <div style={{
        backgroundColor: "#ff9324",
<<<<<<< HEAD
        padding: "15px 40px",
=======
        padding: "5px 20px",
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
        color: "white"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          fontSize: "14px"
        }}>
<<<<<<< HEAD
          
=======
          <span>Home</span> → <span>Galeri</span> → <span style={{ fontWeight: '600' }}>Galeri Dokumentasi</span>
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
        </div>
      </div>

      {/* Content Section untuk judul */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: '700',
          margin: '0 0 20px 0',
          color: '#333',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
        }}>
          Galeri Foto
        </h1>
        <p style={{
          fontSize: '25px',
          opacity: 0.9,
          margin: '0 0 40px 0',
          color: '#555'
        }}>
          Dokumentasi kegiatan dan acara LSP <br />
          SMKN 24 JAKARTA
        </p>

        {/* Section Title (Dokumentasi) */}
        <h2 style={{
          fontSize: '36px',
          fontWeight: '700',
          color: '#333',
          margin: '0 0 16px 0'
        }}>
          Dokumentasi
        </h2>
        <div style={{
          width: '80px',
          height: '4px',
          backgroundColor: '#FF8303',
          margin: '0 auto 40px',
          borderRadius: '2px'
        }}></div>
      </div>

      {/* Gallery Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px 60px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => openModal(image)}
              onMouseEnter={() => setHoveredImage(image.id)}
              onMouseLeave={() => setHoveredImage(null)}
              style={{
                position: 'relative',
                backgroundColor: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: hoveredImage === image.id
                  ? '0 20px 40px rgba(0,0,0,0.15)'
                  : '0 8px 25px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hoveredImage === image.id ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)'
              }}
            >
              {/* Image Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '250px',
                overflow: 'hidden'
              }}>
                {/* Category Tag */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  backgroundColor: '#FF8303',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600',
                  zIndex: 2,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {image.category}
                </div>

                {/* Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                    transform: hoveredImage === image.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                />

                {/* Hover Effect */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: hoveredImage === image.id
                    ? 'rgba(0,0,0,0.3)'
                    : 'transparent',
                  transition: 'all 0.3s ease',
                  opacity: hoveredImage === image.id ? 1 : 0
                }}></div>
              </div>

              {/* Hover Tooltip */}
              {hoveredImage === image.id && (
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  left: '20px',
                  right: '20px',
                  backgroundColor: 'rgba(0,0,0,0.85)',
                  color: 'white',
                  padding: '15px 20px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  lineHeight: '1.4',
                  zIndex: 10,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  animation: 'fadeInUp 0.3s ease-out',
                  transform: 'translateY(0)',
                  opacity: 1
                }}>
                  <div style={{
                    fontWeight: '600',
                    marginBottom: '8px',
                    color: '#FF8303'
                  }}>
                    {image.title}
                  </div>
                  <div style={{
                    fontSize: '13px',
                    opacity: 0.9,
                    marginBottom: '8px'
                  }}>
                    {image.description}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    opacity: 0.7,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span>{image.date}</span>
                    <span style={{
                      backgroundColor: 'rgba(255, 131, 3, 0.3)',
                      padding: '2px 8px',
                      borderRadius: '8px',
                      fontSize: '11px'
                    }}>
                      {image.category}
                    </span>
                  </div>
                </div>
              )}

              {/* Tooltip Animation */}
              <style>
                {`
                  @keyframes fadeInUp {
                    from {
                      opacity: 0;
                      transform: translateY(20px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}
              </style>
            </div>
          ))}
        </div>
      </div>

      
      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #f97316 0%, #f97316 40%, #2C94FF 40%, #2C94FF 100%)',
        padding: '40px 60px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        minHeight: '200px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Left Side - MyLSP */}
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
            <a href="#" style={{
              color: 'white',
              fontSize: '20px',
              transition: 'opacity 0.3s ease',
              textDecoration: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
            </a>
            <a href="#" style={{
              color: 'white',
              fontSize: '20px',
              transition: 'opacity 0.3s ease',
              textDecoration: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h2.5l.5-3h-3V8.5a.5.5 0 0 1 .5-.5H18V5z"/>
              </svg>
            </a>
            <a href="#" style={{
              color: 'white',
              fontSize: '20px',
              transition: 'opacity 0.3s ease',
              textDecoration: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
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
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  opacity: '0.9',
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                  Tentang Kami
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  opacity: '0.9',
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                  Visi dan Misi
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  opacity: '0.9',
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                  Struktur Organisasi
                </a>
              </li>
              <li style={{ marginBottom: '8px' }}>
                <a href="#" style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '14px',
                  opacity: '0.9',
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                  Skema Sertifikasi
                </a>
              </li>
            </ul>

            <div style={{ marginTop: '25px' }}>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '14px',
                    opacity: '0.9',
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                    Syarat dan Ketentuan
                  </a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '14px',
                    opacity: '0.9',
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                    Jadwal Asesmen
                  </a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '14px',
                    opacity: '0.9',
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                    Berita
                  </a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '14px',
                    opacity: '0.9',
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <span style={{ marginRight: '8px', fontSize: '12px' }}>▶</span>
                    Kirim Foto dan Video
                  </a>
                </li>
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
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
            >
              Contact Us
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default GaleriFoto;