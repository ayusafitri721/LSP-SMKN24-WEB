import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function GaleriVideo({ onBack }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [imageLoadStates, setImageLoadStates] = useState({});
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
      setImageLoadStates(prev => ({ ...prev, [videoId]: 'error' }));
      e.target.style.display = 'none';
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
      title: 'Pengenalan Pemrograman Web HTML CSS JavaScript',
      description: 'Tutorial lengkap pengenalan pemrograman web menggunakan HTML, CSS, dan JavaScript untuk pemula. Pelajari dasar-dasar web development.',
      videoUrl: 'https://www.youtube.com/embed/qz0aGYrrlhU?autoplay=1',
      videoId: 'qz0aGYrrlhU',
      duration: '1:09:34',
      views: '127K',
      date: '15 Juli 2024',
      category: 'Tutorial'
    },
    {
      id: 2,
      title: 'Belajar React JS untuk Pemula - Komponen dan State',
      description: 'Panduan komprehensif belajar React JS dari dasar, memahami konsep komponen, state management, dan pengembangan aplikasi modern.',
      videoUrl: 'https://www.youtube.com/embed/w7ejDZ8SWv8?autoplay=1',
      videoId: 'w7ejDZ8SWv8',
      duration: '1:48:48',
      views: '89K',
      date: '20 Juni 2024',
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
      date: '10 Mei 2024',
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
      date: '5 April 2024',
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
      date: '22 Maret 2024',
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
      date: '18 Februari 2024',
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
      date: '15 Januari 2024',
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
      date: '12 Desember 2023',
      category: 'JavaScript'
    }
  ];

  const openModal = (video) => setSelectedVideo(video);
  const closeModal = () => setSelectedVideo(null);

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

  const getResponsiveFooterStyles = () => {
    switch (screenSize) {
      case "mobile":
        return {
          footer: {
            background: 'linear-gradient(135deg, #f97316 0%, #f97316 40%, #2C94FF 40%, #2C94FF 100%)',
            padding: '30px 20px',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            minHeight: 'auto',
            position: 'relative',
            overflow: 'hidden',
          },
          leftSection: {
            flex: 'none',
            paddingRight: '0',
            textAlign: 'center',
          },
          rightSection: {
            flex: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '25px',
            maxWidth: 'none',
          },
          knowMoreSection: {
            flex: 'none',
            paddingRight: '0',
            textAlign: 'center',
          },
          contactSection: {
            flex: 'none',
            textAlign: 'center',
          },
          title: {
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '12px',
            color: 'white',
          },
          description: {
            fontSize: '13px',
            lineHeight: '1.5',
            color: 'white',
            opacity: '0.95',
            marginBottom: '20px',
          },
          sectionTitle: {
            fontSize: '16px',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: 'white',
          },
        };
      case "tablet":
        return {
          footer: {
            background: 'linear-gradient(135deg, #f97316 0%, #f97316 40%, #2C94FF 40%, #2C94FF 100%)',
            padding: '35px 40px',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            minHeight: '180px',
            position: 'relative',
            overflow: 'hidden',
          },
          leftSection: {
            flex: 'none',
            paddingRight: '0',
            textAlign: 'center',
            marginBottom: '20px',
          },
          rightSection: {
            flex: 'none',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            maxWidth: 'none',
          },
          knowMoreSection: {
            flex: '1',
            paddingRight: '20px',
          },
          contactSection: {
            flex: '0 0 200px',
            textAlign: 'center',
          },
          title: {
            fontSize: '30px',
            fontWeight: 'bold',
            marginBottom: '13px',
            color: 'white',
          },
          description: {
            fontSize: '13px',
            lineHeight: '1.5',
            color: 'white',
            opacity: '0.95',
            marginBottom: '22px',
          },
          sectionTitle: {
            fontSize: '17px',
            fontWeight: 'bold',
            marginBottom: '18px',
            color: 'white',
          },
        };
      default: // desktop
        return {
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
          },
          leftSection: {
            flex: '0 0 300px',
            paddingRight: '40px',
          },
          rightSection: {
            flex: '1',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            maxWidth: '600px',
          },
          knowMoreSection: {
            flex: '1',
            paddingRight: '40px',
          },
          contactSection: {
            flex: '0 0 180px',
            textAlign: 'center',
          },
          title: {
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '15px',
            color: 'white',
          },
          description: {
            fontSize: '14px',
            lineHeight: '1.6',
            color: 'white',
            opacity: '0.95',
            marginBottom: '25px',
          },
          sectionTitle: {
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: 'white',
          },
        };
    }
  };

  const footerStyles = getResponsiveFooterStyles();

  const knowMoreLinks = [
    { text: 'Tentang Kami', path: '/#profile' },
    { text: 'Visi dan Misi', path: '/visi-misi' },
    { text: 'Skema Sertifikasi', path: '/detail-sertifikasi' }
  ];

  const additionalLinks = [
    { text: 'Jadwal Asesmen', path: '/jadwal-asesmen' },
    { text: 'Berita', path: '/berita' },
    { text: 'Lihat Foto dan Video', path: '/galeri-foto' }
  ];

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
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#419EFD4D',
          zIndex: 1
        }}></div>

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
        padding: "15px 40px",
        color: "white"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          fontSize: "14px"
        }}>
          <span>Home</span> → <span>Galeri</span> → <span style={{ fontWeight: '600' }}>Video Pembelajaran</span>
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
        <h2 style={{
          fontSize: '36px',
          fontWeight: '700',
          color: '#333',
          margin: '0 0 16px 0'
        }}>
          Video Pembelajaran Terbaru
        </h2>
        <div style={{
          width: '80px',
          height: '4px',
          backgroundColor: '#FF8303',
          margin: '0 auto 40px',
          borderRadius: '2px'
        }}></div>

        <p style={{
          fontSize: '18px',
          color: '#666',
          maxWidth: '600px',
          margin: '0 auto 40px'
        }}>
          Kumpulan video tutorial programming, web development, dan teknologi informasi terbaru
        </p>

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
            e.currentTarget.style.backgroundColor = '#FF8303';
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
              <div style={{
                position: 'relative',
                width: '100%',
                height: '250px',
                overflow: 'hidden'
              }}>
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

                {renderThumbnail(video)}

                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
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
                  transition: 'all 0.3s ease',
                  zIndex: 3
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                    e.currentTarget.style.backgroundColor = '#FF0303FF';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.95)';
                    e.currentTarget.style.color = '#FF0303FF';
                  }}
                >
                  ▶
                </div>

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
                    e.currentTarget.style.background = 'rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                ></div>
              </div>

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
                  {video.title}
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
                  {video.description}
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
                      👁 {video.views}
                    </span>
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
              borderRadius: '16px',
              overflow: 'hidden',
              width: '900px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
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

            <div style={{
              width: '100%',
              height: '500px',
              backgroundColor: '#000',
              position: 'relative'
            }}>
              <iframe
                width="100%"
                height="100%"
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  border: 'none',
                  borderRadius: '0'
                }}
              ></iframe>
            </div>

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
                    ⏱ {selectedVideo.duration}
                  </span>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '14px'
                  }}>
                    👁 {selectedVideo.views} views
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={footerStyles.footer}>
        <div style={footerStyles.leftSection}>
          <h2 style={footerStyles.title}>MyLSP</h2>
          <p style={footerStyles.description}>
            Membantu industri menyediakan ikon bahwa produk/jasa nya telah dibuat oleh tenaga-tenaga yang kompeten.
          </p>

          <div style={{
            display: 'flex',
            gap: screenSize === 'mobile' ? '20px' : '15px',
            justifyContent: screenSize === 'desktop' ? 'flex-start' : 'center',
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
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
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
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
          </div>
        </div>

        <div style={footerStyles.rightSection}>
          <div style={footerStyles.knowMoreSection}>
            <h3 style={footerStyles.sectionTitle}>Know More About:</h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                textAlign: screenSize === 'mobile' ? 'center' : 'left',
              }}
            >
              {knowMoreLinks.map((item, index) => (
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
                      alignItems: 'center',
                      justifyContent: screenSize === 'mobile' ? 'center' : 'flex-start',
                      cursor: 'pointer',
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

            <div style={{ marginTop: screenSize === 'mobile' ? '20px' : '25px' }}>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  textAlign: screenSize === 'mobile' ? 'center' : 'left',
                }}
              >
                {additionalLinks.map((item, index) => (
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
                        alignItems: 'center',
                        justifyContent: screenSize === 'mobile' ? 'center' : 'flex-start',
                        cursor: 'pointer',
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

          <div style={footerStyles.contactSection}>
            <h3 style={footerStyles.sectionTitle}>Contact Us:</h3>
            <Link
              to="/kontak"
              style={{
                backgroundColor: '#6B7280',
                color: 'white',
                border: '2px solid #6B7280',
                borderRadius: '25px',
                padding: screenSize === 'mobile' ? '14px 28px' : '12px 24px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'inline-block',
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

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </div>
  );
}

export default GaleriVideo;