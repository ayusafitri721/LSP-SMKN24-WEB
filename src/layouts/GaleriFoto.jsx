import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function GaleriFoto({ onBack }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);
  const location = useLocation();

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

  // Handle scroll to #learn-more section (adjust ID based on homepage)
  useEffect(() => {
    if (location.hash === '#profile') { // Change to '#learn-more' if needed
      const learnMoreElement = document.getElementById('learn-more'); // Adjust ID to match homepage
      if (learnMoreElement) {
        learnMoreElement.scrollIntoView({ behavior: 'smooth' });
        window.scrollBy(0, -80); // Adjust offset for navbar height
      }
    }
  }, [location]);

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
                     {image.date}
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
                { text: 'Tentang Kami', path: '/#profile' }, // Change to '/#learn-more' if ID matches
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