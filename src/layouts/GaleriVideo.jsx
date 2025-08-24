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
<<<<<<< HEAD
      setImageLoadStates(prev => ({ ...prev, [videoId]: 'error' }));
      e.target.style.display = 'none';
=======
      // Show fallback placeholder
      setImageLoadStates(prev => ({ ...prev, [videoId]: 'error' }));
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
    }
  };

  const scrollToVideoSection = () => {
    const videoSection = document.getElementById('video-gallery-section');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const galleryVideos = [
    {
      id: 1,
<<<<<<< HEAD
      title: 'TUTORIAL APL01 dan APL02 LSP MEDIA INFORMATIKA',
      description: 'Panduan lengkap untuk mengisi formulir APL01 dan APL02 untuk sertifikasi LSP Media Informatika.',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      videoId: 'dQw4w9WgXcQ',
      duration: '3:32',
      views: '1.2B',
      date: '15 Juli 2024',
=======
      title: 'Pengenalan Pemrograman Web HTML CSS JavaScript',
      description: 'Tutorial lengkap pengenalan pemrograman web menggunakan HTML, CSS, dan JavaScript untuk pemula. Pelajari dasar-dasar web development.',
      videoUrl: 'https://www.youtube.com/embed/qz0aGYrrlhU?autoplay=1',
      videoId: 'qz0aGYrrlhU',
      duration: '1:09:34',
      views: '127K',
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
      category: 'Tutorial'
    },
    {
      id: 2,
<<<<<<< HEAD
      title: 'KEGIATAN UJI KOMPETENSI LSP MEDIA INFORMATIKA DI P4 JAKARTA TIMUR',
      description: 'Dokumentasi kegiatan uji kompetensi yang dilaksanakan di P4 Jakarta Timur.',
      videoUrl: 'https://www.youtube.com/embed/kJQP7kiw5Fk',
      videoId: 'kJQP7kiw5Fk',
      duration: '4:42',
      views: '8.1B',
      date: '20 Juni 2024',
      category: 'Asesmen'
    },
    {
      id: 3,
      title: 'COMPANY PROFILE LSP MEDIA INFORMATIKA',
      description: 'Profil lengkap LSP Media Informatika dan layanan sertifikasi yang tersedia.',
      videoUrl: 'https://www.youtube.com/embed/9bZkp7q19f0',
      videoId: '9bZkp7q19f0',
      duration: '4:12',
      views: '4.8B',
      date: '10 Mei 2024',
      category: 'Profile'
    },
    {
      id: 4,
      title: 'Workshop Sertifikasi Web Developer',
      description: 'Pelatihan intensif pengembangan web untuk peserta sertifikasi batch pertama.',
      videoUrl: 'https://www.youtube.com/embed/fJ9rUzIMcZQ',
      videoId: 'fJ9rUzIMcZQ',
      duration: '5:55',
      views: '1.9B',
      date: '5 April 2024',
      category: 'Workshop'
    },
    {
      id: 5,
      title: 'Sosialisasi Program LSP ke Institusi',
      description: 'Kegiatan sosialisasi program LSP kepada berbagai institusi pendidikan.',
      videoUrl: 'https://www.youtube.com/embed/YQHsXMglC9A',
      videoId: 'YQHsXMglC9A',
      duration: '6:07',
      views: '3.2B',
      date: '22 Maret 2024',
      category: 'Sosialisasi'
    },
    {
      id: 6,
      title: 'Pelatihan Asesor LSP',
      description: 'Program pelatihan untuk asesor baru LSP SMKN 24 Jakarta.',
      videoUrl: 'https://www.youtube.com/embed/JGwWNGJdvx8',
      videoId: 'JGwWNGJdvx8',
      duration: '3:53',
      views: '5.7B',
      date: '18 Februari 2024',
      category: 'Pelatihan'
=======
      title: 'Belajar React JS untuk Pemula - Komponen dan State',
      description: 'Panduan komprehensif belajar React JS dari dasar, memahami konsep komponen, state management, dan pengembangan aplikasi modern.',
      videoUrl: 'https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1',
      videoId: 'w7ejDZ8SWv8',
      duration: '1:48:48',
      views: '89K',
      category: 'Framework'
    },
    {
      id: 3,
      title: 'Database MySQL untuk Web Developer',
      description: 'Pelajari konsep database MySQL, cara membuat tabel, query data, dan integrasi dengan aplikasi web untuk developer.',
      videoUrl: 'https://www.youtube.com/embed/HXV3zeQKqGY?autoplay=1',
      videoId: 'HXV3zeQKqGY',
      duration: '4:20:38',
      views: '156K',
      category: 'Database'
    },
    {
      id: 4,
      title: 'PHP Programming Fundamentals',
      description: 'Tutorial dasar pemrograman PHP untuk pengembangan web dinamis. Mulai dari syntax dasar hingga konsep OOP dalam PHP.',
      videoUrl: 'https://www.youtube.com/embed/OK_JCtrrv-c?autoplay=1',
      videoId: 'OK_JCtrrv-c',
      duration: '4:36:38',
      views: '92K',
      category: 'Backend'
    },
    {
      id: 5,
      title: 'Git dan GitHub untuk Developer',
      description: 'Pelajari version control system Git dan GitHub untuk mengelola kode, kolaborasi tim, dan deployment project.',
      videoUrl: 'https://www.youtube.com/embed/8JJ101D3knE?autoplay=1',
      videoId: '8JJ101D3knE',
      duration: '1:09:13',
      views: '73K',
      category: 'Tools'
    },
    {
      id: 6,
      title: 'Responsive Web Design dengan CSS Grid dan Flexbox',
      description: 'Teknik modern CSS untuk membuat desain web yang responsif menggunakan CSS Grid dan Flexbox layout system.',
      videoUrl: 'https://www.youtube.com/embed/jV8B24rSN5o?autoplay=1',
      videoId: 'jV8B24rSN5o',
      duration: '27:55',
      views: '68K',
      category: 'CSS'
    },
    {
      id: 7,
      title: 'Node.js Backend Development',
      description: 'Panduan lengkap pengembangan backend dengan Node.js, Express.js, dan integrasi dengan database untuk aplikasi full-stack.',
      videoUrl: 'https://www.youtube.com/embed/f2EqECiTBL8?autoplay=1',
      videoId: 'f2EqECiTBL8',
      duration: '6:50:41',
      views: '95K',
      category: 'Backend'
    },
    {
      id: 8,
      title: 'JavaScript ES6+ Modern Features',
      description: 'Pelajari fitur-fitur modern JavaScript ES6+ seperti arrow functions, destructuring, async/await, dan module system.',
      videoUrl: 'https://www.youtube.com/embed/nZ1DMMsyVyI?autoplay=1',
      videoId: 'nZ1DMMsyVyI',
      duration: '1:05:26',
      views: '112K',
      category: 'JavaScript'
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
    }
  ];

  const openModal = (video) => setSelectedVideo(video);
  const closeModal = () => setSelectedVideo(null);

<<<<<<< HEAD
  const problematicVideoIds = ['fJ9rUzIMcZQ', 'JGwWNGJdvx8'];
=======
  const renderThumbnail = (video) => {
    const isError = imageLoadStates[video.videoId] === 'error';
    
    if (isError) {
      return (
        <div style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          position: 'relative'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '32px',
            marginBottom: '12px',
            backdropFilter: 'blur(10px)'
          }}>
            🎬
          </div>
          <div style={{ 
            fontSize: '16px', 
            fontWeight: '600',
            textAlign: 'center',
            padding: '0 20px',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            {video.title}
          </div>
          <div style={{
            position: 'absolute',
            bottom: '15px',
            right: '15px',
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '500'
          }}>
            {video.duration}
          </div>
        </div>
      );
    }

    return (
      <img 
        src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
        alt={video.title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.4s ease'
        }}
        onLoad={() => handleImageLoad(video.videoId)}
        onError={(e) => handleImageError(video.videoId, e)}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
        }}
      />
    );
  };
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Hero Section */}
      <div style={{
        position: "relative",
        height: "450px",
        backgroundImage: "url('src/img/auditoriums.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: "0",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
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

        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'white',
          maxWidth: '800px',
          padding: '0 20px'
        }}>
          <p style={{
            fontSize: '20px',
            margin: '0 0 32px 0',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            lineHeight: '1.4'
          }}>
    
          </p>
        </div>
      </div>

      {/* Orange breadcrumb section */}
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
        </div>
      </div>

    {/* Content Section untuk judul */}
=======
          <span>Home</span> → <span>Galeri</span> → <span style={{ fontWeight: '600' }}>Video Pembelajaran</span>
        </div>
      </div>

      {/* Content Section untuk judul */}
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
<<<<<<< HEAD
        <h1 style={{
          fontSize: '48px',
          fontWeight: '700',
          margin: '0 0 20px 0',
          color: '#333',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
        }}>
          Galeri Video
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

=======
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
        <h2 style={{
          fontSize: '36px',
          fontWeight: '700',
          color: '#333',
          margin: '0 0 16px 0'
        }}>
<<<<<<< HEAD
          Dokumentasi
=======
          Video Pembelajaran Terbaru
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
        </h2>
        <div style={{
          width: '80px',
          height: '4px',
          backgroundColor: '#FF8303',
          margin: '0 auto 40px',
          borderRadius: '2px'
        }}></div>
        
<<<<<<< HEAD
=======
        <p style={{
          fontSize: '18px',
          color: '#666',
          margin: '0 0 40px 0',
          maxWidth: '600px',
          margin: '0 auto 40px'
        }}>
          Kumpulan video tutorial programming, web development, dan teknologi informasi terbaru
        </p>
        
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
        {/* Play Button */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'rgba(255,131,3,0.1)',
            backdropFilter: 'blur(10px)',
            padding: '12px 24px',
            borderRadius: '50px',
            border: '2px solid #FF8303',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontSize: '16px',
            fontWeight: '500',
            color: '#333'
          }}
          onClick={scrollToVideoSection}
          onMouseOver={(e) => {
<<<<<<< HEAD
            e.currentTarget.style.backgroundColor = '#879FEEFF';
=======
            e.currentTarget.style.backgroundColor = '#FF8303';
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255,131,3,0.1)';
            e.currentTarget.style.color = '#333';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#FF0303FF',
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

      {/* Video Gallery Section */}
      <div id="video-gallery-section" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px 60px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {galleryVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => openModal(video)}
              style={{
                position: 'relative',
                backgroundColor: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: 'translateY(0) scale(1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
              }}
            >
              {/* Video Thumbnail Container */}
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
                  {video.category}
                </div>

<<<<<<< HEAD
                {/* Thumbnail */}
                <img 
                  src={problematicVideoIds.includes(video.videoId) 
                    ? `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`
                    : `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt={video.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                    display: imageLoadStates[video.videoId] === 'error' ? 'none' : 'block'
                  }}
                  onLoad={() => handleImageLoad(video.videoId)}
                  onError={(e) => handleImageError(video.videoId, e)}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                  }}
                />
=======
                {/* Duration Tag */}
                {!imageLoadStates[video.videoId] || imageLoadStates[video.videoId] !== 'error' ? (
                  <div style={{
                    position: 'absolute',
                    bottom: '15px',
                    right: '15px',
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '500',
                    zIndex: 2
                  }}>
                    {video.duration}
                  </div>
                ) : null}

                {/* Thumbnail */}
                {renderThumbnail(video)}
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61

                {/* Play Button Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
<<<<<<< HEAD
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.9)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  color: '#FF0303FF',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
=======
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  color: '#FF0303FF',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
                  transition: 'all 0.3s ease',
                  zIndex: 3
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
<<<<<<< HEAD
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)';
=======
                  e.currentTarget.style.backgroundColor = '#FF0303FF';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.95)';
                  e.currentTarget.style.color = '#FF0303FF';
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
                }}
                >
                  ▶
                </div>

<<<<<<< HEAD
                {/* Hover Effect */}
=======
                {/* Hover Effect Overlay */}
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'transparent',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
<<<<<<< HEAD
                  e.currentTarget.style.background = 'rgba(0,0,0,0.3)';
=======
                  e.currentTarget.style.background = 'rgba(0,0,0,0.2)';
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
                ></div>
              </div>

              {/* Video Info Card */}
              <div style={{
<<<<<<< HEAD
                padding: '20px',
                backgroundColor: 'white'
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  margin: '0 0 8px 0',
=======
                padding: '24px'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  margin: '0 0 12px 0',
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
                  color: '#333',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
<<<<<<< HEAD
                  lineHeight: '1.4'
=======
                  lineHeight: '1.4',
                  minHeight: '50px'
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
                }}>
                  {video.title}
                </h3>
                
                <p style={{
                  fontSize: '14px',
                  color: '#666',
<<<<<<< HEAD
                  margin: '0 0 12px 0',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  lineHeight: '1.5'
=======
                  margin: '0 0 16px 0',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  lineHeight: '1.5',
                  minHeight: '63px'
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
                }}>
                  {video.description}
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '12px',
                  color: '#888',
                  borderTop: '1px solid #f0f0f0',
<<<<<<< HEAD
                  paddingTop: '12px'
                }}>
                  <span style={{ color: '#FF8303', fontWeight: '500' }}>
                    {video.date}
                  </span>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <span>{video.duration}</span>
                    <span>{video.views}</span>
=======
                  paddingTop: '16px'
                }}>
                  <span style={{ color: '#FF8303', fontWeight: '600' }}>
                    {video.date}
                  </span>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    gap: '12px' 
                  }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      👁️ {video.views}
                    </span>
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
                  </div>
                </div>
              </div>
            </div>
          ))}
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
<<<<<<< HEAD
              borderRadius: '12px',
              overflow: 'hidden',
              width: '800px'
=======
              borderRadius: '16px',
              overflow: 'hidden',
              width: '900px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
<<<<<<< HEAD
                top: '10px',
                right: '10px',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.9)',
                border: 'none',
                fontSize: '20px',
=======
                top: '15px',
                right: '15px',
                width: '45px',
                height: '45px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0,0,0,0.7)',
                color: 'white',
                border: 'none',
                fontSize: '24px',
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
                cursor: 'pointer',
                zIndex: 1001,
                display: 'flex',
                alignItems: 'center',
<<<<<<< HEAD
                justifyContent: 'center'
=======
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
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
              }}
            >
              ×
            </button>

            {/* YouTube Player */}
<<<<<<< HEAD
            <div style={{ width: '100%', height: '450px', backgroundColor: '#000' }}>
=======
            <div style={{ 
              width: '100%', 
              height: '500px', 
              backgroundColor: '#000',
              position: 'relative'
            }}>
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                frameBorder="0"
<<<<<<< HEAD
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Info */}
            <div style={{ padding: '20px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 12px 0', color: '#333' }}>{selectedVideo.title}</h2>
              <p style={{ fontSize: '16px', color: '#666', margin: '0 0 16px 0', lineHeight: '1.5' }}>{selectedVideo.description}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #eee', fontSize: '14px' }}>
                <div style={{ color: '#FF8303', fontWeight: '500' }}>{selectedVideo.date}</div>
                <div style={{ display: 'flex', gap: '16px', color: '#888' }}>
                  <span>{selectedVideo.duration}</span>
                  <span>{selectedVideo.views} views</span>
=======
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  border: 'none',
                  borderRadius: '0'
                }}
              ></iframe>
            </div>

            {/* Video Info */}
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
                  {selectedVideo.title}
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
                  {selectedVideo.category}
                </div>
              </div>
              
              <p style={{ 
                fontSize: '16px', 
                color: '#666', 
                margin: '0 0 20px 0', 
                lineHeight: '1.6' 
              }}>
                {selectedVideo.description}
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
                  📅 {selectedVideo.date}
                </div>
                <div style={{ 
                  display: 'flex', 
                  gap: '20px', 
                  color: '#666',
                  alignItems: 'center'
                }}>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '14px'
                  }}>
                    ⏱️ {selectedVideo.duration}
                  </span>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '14px'
                  }}>
                    👁️ {selectedVideo.views} views
                  </span>
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
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
<<<<<<< HEAD
            Membantu industri menyediakan ikon bahwa produk/jasa nya telah dibuat oleh tenaga-tenaga yang kompeten.
=======
            Platform pembelajaran dan sertifikasi kompetensi teknologi informasi untuk mengembangkan SDM yang berkualitas.
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
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
<<<<<<< HEAD
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
=======
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
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
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
<<<<<<< HEAD
=======
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
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
            >
              Contact Us
            </button>
          </div>
        </div>
      </footer>
<<<<<<< HEAD
=======

      {/* Add floating animation keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}
      </style>
>>>>>>> 76e000d57f40e3601f2a02e89871e156b6d8ab61
    </div>
  );
}

export default GaleriVideo;