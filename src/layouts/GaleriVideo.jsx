import React, { useState } from 'react';

function GaleriVideo({ onBack }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [imageLoadStates, setImageLoadStates] = useState({});

  const handleImageLoad = (videoId) => {
    setImageLoadStates(prev => ({ ...prev, [videoId]: 'loaded' }));
  };

  const handleImageError = (videoId, e) => {
    const currentSrc = e.target.src;
    
    if (currentSrc.includes('maxresdefault')) {
      e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    } else if (currentSrc.includes('hqdefault')) {
      e.target.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    } else if (currentSrc.includes('mqdefault')) {
      e.target.src = `https://img.youtube.com/vi/${videoId}/default.jpg`;
    } else {
      // Fallback final - set error state
      setImageLoadStates(prev => ({ ...prev, [videoId]: 'error' }));
      // Hide the failed image
      e.target.style.display = 'none';
    }
  };

  const galleryVideos = [
    {
      id: 1,
      title: 'TUTORIAL APL01 dan APL02 LSP MEDIA INFORMATIKA',
      description: 'Panduan lengkap untuk mengisi formulir APL01 dan APL02 untuk sertifikasi LSP Media Informatika.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      videoId: 'dQw4w9WgXcQ',
      duration: '3:32',
      views: '1.2B'
    },
    {
      id: 2,
      title: 'KEGIATAN UJI KOMPETENSI LSP MEDIA INFORMATIKA DI P4 JAKARTA TIMUR',
      description: 'Dokumentasi kegiatan uji kompetensi yang dilaksanakan di P4 Jakarta Timur.',
      videoUrl: 'https://www.youtube.com/embed/kJQP7kiw5Fk',
      videoId: 'kJQP7kiw5Fk',
      duration: '4:42',
      views: '8.1B'
    },
    {
      id: 3,
      title: 'COMPANY PROFILE LSP MEDIA INFORMATIKA',
      description: 'Profil lengkap LSP Media Informatika dan layanan sertifikasi yang tersedia.',
      videoUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
      videoId: '9bZkp7q19f0',
      duration: '4:12',
      views: '4.8B'
    },
    {
      id: 4,
      title: 'Workshop Sertifikasi Web Developer',
      description: 'Pelatihan intensif pengembangan web untuk peserta sertifikasi batch pertama.',
      videoUrl: 'https://www.youtube.com/embed/fJ9rUzIMcZQ',
      videoId: 'fJ9rUzIMcZQ',
      duration: '5:55',
      views: '1.9B'
    },
    {
      id: 5,
      title: 'Sosialisasi Program LSP ke Institusi',
      description: 'Kegiatan sosialisasi program LSP kepada berbagai institusi pendidikan.',
      videoUrl: 'https://www.youtube.com/embed/YQHsXMglC9A',
      videoId: 'YQHsXMglC9A',
      duration: '6:07',
      views: '3.2B'
    },
    {
      id: 6,
      title: 'Pelatihan Asesor LSP',
      description: 'Program pelatihan untuk asesor baru LSP SMKN 24 Jakarta.',
      videoUrl: 'https://www.youtube.com/embed/JGwWNGJdvx8',
      videoId: 'JGwWNGJdvx8',
      duration: '3:53',
      views: '5.7B'
    }
  ];

  const openModal = (video) => setSelectedVideo(video);
  const closeModal = () => setSelectedVideo(null);

  // Video IDs yang diketahui bermasalah dengan thumbnail
  const problematicVideoIds = ['fJ9rUzIMcZQ', 'JGwWNGJdvx8'];

  const shouldShowPlaceholder = (videoId) => {
    return imageLoadStates[videoId] === 'error' || problematicVideoIds.includes(videoId);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Hero Section */}
      <div 
        style={{
          position: 'relative',
          height: '60vh',
          minHeight: '400px',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('src/img/auditoriums.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center'
        }}
      >
         {/* Orange bottom border */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: "15px 40px",
          backgroundColor: '#FF8303',
          zIndex: 3
        }}></div> 
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', padding: '0 20px' }}>
          <h1 
            style={{
              fontSize: '48px',
              fontWeight: '700',
              margin: '0 0 20px 0',
              textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
              lineHeight: '1.2'
            }}
          >
            Galeri Video
          </h1>
          <p 
            style={{
              fontSize: '20px',
              margin: '0 0 30px 0',
              textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
              lineHeight: '1.4',
              opacity: '0.95'
            }}
          >
            Dokumentasi kegiatan dan acara LSP<br />
            SMKN 24 JAKARTA
          </p>
          
          {/* Play Button */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              padding: '12px 24px',
              borderRadius: '50px',
              border: '2px solid rgba(255,255,255,0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              fontSize: '16px',
              fontWeight: '500'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#FF8303',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                color: 'white'
              }}
            >
              ▶
            </div>
            Tonton Video Terbaru
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div style={{ position: 'relative', backgroundColor: '#f8f9fa', paddingTop: '60px' }}>
        {/* Section Title */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 40px', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#333',
            margin: '0 0 16px 0'
          }}>
            Dokumentasi
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            backgroundColor: '#FF8303',
            margin: '0 auto 20px',
            borderRadius: '2px'
          }} />
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Koleksi video dokumentasi kegiatan sertifikasi, pelatihan, dan workshop LSP Media Informatika
          </p>
        </div>

        {/* Video Grid */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            {galleryVideos.map((video) => (
              <div
                key={video.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
                onClick={() => openModal(video)}
              >
                {/* Thumbnail */}
                <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden', backgroundColor: '#f0f0f0' }}>
                  <img 
                    src={problematicVideoIds.includes(video.videoId) 
                      ? `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg` 
                      : `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                    alt={video.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                      display: imageLoadStates[video.videoId] === 'error' ? 'none' : 'block'
                    }}
                    onLoad={() => handleImageLoad(video.videoId)}
                    onError={(e) => handleImageError(video.videoId, e)}
                  />
                  
                  {/* Play Button Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: 'rgba(0,0,0,0.3)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                  className="play-overlay"
                  onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseOut={(e) => e.currentTarget.style.opacity = '0'}
                  >
                    <div style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      color: '#FF8303',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      transform: 'scale(0.9)',
                      transition: 'transform 0.2s ease'
                    }}>▶</div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>{video.duration}</div>
                </div>

                {/* Info */}
                <div style={{ padding: '16px' }}>
                  <h3 style={{ 
                    fontSize: '18px', 
                    fontWeight: '600', 
                    margin: '0 0 8px 0', 
                    color: '#333', 
                    lineHeight: '1.4',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>{video.title}</h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#666',
                    margin: '0 0 12px 0',
                    lineHeight: '1.5',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>{video.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                    <div style={{ color: '#FF8303', fontWeight: '500' }}>{video.date}</div>
                    <div style={{ color: '#888' }}>👁 {video.views} views</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
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
              borderRadius: '12px',
              overflow: 'hidden',
              width: '800px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.9)',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>

            {/* YouTube Player */}
            <div style={{ width: '100%', height: '450px', backgroundColor: '#000' }}>
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Info */}
            <div style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 12px 0', color: '#333' }}>{selectedVideo.title}</h2>
              <p style={{ fontSize: '16px', color: '#666', margin: '0 0 16px 0', lineHeight: '1.5' }}>{selectedVideo.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #eee', fontSize: '14px' }}>
                <div style={{ color: '#FF8303', fontWeight: '500' }}>📅 {selectedVideo.date}</div>
                <div style={{ display: 'flex', gap: '16px', color: '#888' }}>
                  <span>⏱ {selectedVideo.duration}</span>
                  <span>👁 {selectedVideo.views} views</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .play-overlay:hover div {
          transform: scale(1.1) !important;
        }
      `}</style>

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

export default GaleriVideo;