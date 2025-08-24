import React, { useState } from 'react';

function GaleriFoto({ onBack }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  // Data foto galeri dengan deskripsi yang sesuai
  const galleryImages = [
    {
      id: 1,
      src: 'src/img/lab.png',
      alt: 'Laboratorium Komputer RPL',
      title: 'Laboratorium Rekayasa Perangkat Lunak',
      description: 'Fasilitas laboratorium komputer yang digunakan untuk praktikum dan asesmen kompetensi RPL',
      date: '27 Januari 2025',
      category: 'Lab RPL'
    },
    {
      id: 2,
      src: 'src/img/kenapakami.jpg',
      alt: 'Uji Sertifikasi Kompetensi',
      title: 'Pelaksanaan Uji Sertifikasi Kompetensi',
      description: 'Dokumentasi kegiatan uji sertifikasi kompetensi LSP SMKN 24 Jakarta dengan para peserta',
      date: '15 Februari 2025',
      category: 'USK'
    },
    {
      id: 3,
      src: 'src/img/kontak.png',
      alt: 'Gedung Sekolah',
      title: 'Gedung SMKN 24 Jakarta',
      description: 'Tampak depan gedung SMKN 24 Jakarta sebagai lokasi LSP dan kegiatan asesmen',
      date: '20 Februari 2025',
      category: 'Asesmen'
    },
    {
      id: 4,
      src: 'src/img/lsp.png',
      alt: 'Acara Penyerahan Sertifikat',
      title: 'Upacara Penyerahan Sertifikat Kompetensi',
      description: 'Momen penyerahan sertifikat kompetensi kepada peserta yang telah lulus asesmen',
      date: '25 Februari 2025',
      category: 'Sertifikasi'
    },
    {
      id: 5,
      src: 'src/img/smk.png',
      alt: 'Informasi Sekolah',
      title: 'Papan Informasi SMKN 24 Jakarta',
      description: 'Papan informasi dan profil sekolah SMKN 24 Jakarta yang menampilkan berbagai program keahlian',
      date: '1 Maret 2025',
      category: 'Informasi'
    },
    {
      id: 6,
      src: 'src/img/dibutuhkan.png',
      alt: 'Lowongan Kerja Digital',
      title: 'Info Lowongan Kerja Bidang IT',
      description: 'Informasi lowongan pekerjaan di bidang teknologi digital dan rekayasa perangkat lunak',
      date: '5 Maret 2025',
      category: 'Karir'
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
          <span>Home</span> → <span>Galeri</span> → <span style={{ fontWeight: '600' }}>Galeri Dokumentasi</span>
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

              {/* Image Info Card */}
              <div style={{
                padding: '24px'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  margin: '0 0 12px 0',
                  color: '#333',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  lineHeight: '1.4',
                  minHeight: '50px'
                }}>
                  {image.title}
                </h3>
                
                <p style={{
                  fontSize: '14px',
                  color: '#666',
                  margin: '0 0 16px 0',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  lineHeight: '1.5',
                  minHeight: '63px'
                }}>
                  {image.description}
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '12px',
                  color: '#888',
                  borderTop: '1px solid #f0f0f0',
                  paddingTop: '16px'
                }}>
                  <span style={{ color: '#FF8303', fontWeight: '600' }}>
                    📅 {image.date}
                  </span>
                  <div style={{ 
                    backgroundColor: '#FF8303',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '11px',
                    fontWeight: '500'
                  }}>
                    {image.category}
                  </div>
                </div>
              </div>

              {/* Hover Tooltip */}
              {hoveredImage === image.id && (
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  backgroundColor: 'rgba(0,0,0,0.85)',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  lineHeight: '1.4',
                  zIndex: 10,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  animation: 'fadeInUp 0.3s ease-out',
                  transform: 'translateY(0)',
                  opacity: 1,
                  maxWidth: '200px'
                }}>
                  <div style={{
                    fontWeight: '600',
                    marginBottom: '4px',
                    color: '#FF8303'
                  }}>
                    Lihat Detail
                  </div>
                  <div style={{
                    fontSize: '11px',
                    opacity: 0.9
                  }}>
                    Klik untuk melihat gambar lebih besar
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal untuk menampilkan gambar besar */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={closeModal}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              backgroundColor: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: 'white',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,0,0,0.8)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.7)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              ×
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                left: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: 'white',
                border: 'none',
                fontSize: '18px',
                cursor: 'pointer',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.9)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.7)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              ‹
            </button>

            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                right: '70px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: 'white',
                border: 'none',
                fontSize: '18px',
                cursor: 'pointer',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.9)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.7)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
            >
              ›
            </button>

            {/* Image Display */}
            <div style={{ 
              width: '100%', 
              maxHeight: '70vh', 
              backgroundColor: '#f8f9fa',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Image Info */}
            <div style={{ padding: '24px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px'
              }}>
                <h2 style={{ 
                  fontSize: '24px', 
                  fontWeight: '700', 
                  margin: '0', 
                  color: '#333',
                  flex: 1,
                  paddingRight: '20px'
                }}>
                  {selectedImage.title}
                </h2>
                <div style={{
                  backgroundColor: '#FF8303',
                  color: 'white',
                  padding: '6px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}>
                  {selectedImage.category}
                </div>
              </div>
              
              <p style={{ 
                fontSize: '16px', 
                color: '#666', 
                margin: '0 0 20px 0', 
                lineHeight: '1.6' 
              }}>
                {selectedImage.description}
              </p>
              
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '20px', 
                borderTop: '2px solid #f0f0f0', 
                fontSize: '14px' 
              }}>
                <div style={{ 
                  color: '#FF8303', 
                  fontWeight: '600',
                  fontSize: '16px'
                }}>
                  📅 {selectedImage.date}
                </div>
                <div style={{
                  color: '#666',
                  fontSize: '14px'
                }}>
                  {galleryImages.findIndex(img => img.id === selectedImage.id) + 1} dari {galleryImages.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
            Platform pembelajaran dan sertifikasi kompetensi teknologi informasi untuk mengembangkan SDM yang berkualitas.
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
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
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
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#6B7280';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = '#6B7280';
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </footer>

      {/* Add animation keyframes */}
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
  );
}

export default GaleriFoto;