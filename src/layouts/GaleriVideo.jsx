import React, { useState } from 'react';

function GaleriVideo({ onBack }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const galleryVideos = [
    {
      id: 1,
      title: 'Seminar Nasional Teknologi Informasi 2025',
      description: 'Dokumentasi lengkap seminar nasional teknologi informasi yang diselenggarakan oleh LSP.',
      thumbnail: '/img/video-thumbs/seminar-thumb.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 2,
      title: 'Workshop Sertifikasi Web Developer',
      description: 'Pelatihan intensif pengembangan web untuk peserta sertifikasi batch pertama.',
      thumbnail: '/img/video-thumbs/workshop-thumb.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 3,
      title: 'Pelaksanaan Asesmen Kompetensi IT',
      description: 'Dokumentasi proses asesmen kompetensi bidang teknologi informasi.',
      thumbnail: '/img/video-thumbs/asesmen-thumb.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 4,
      title: 'Penyerahan Sertifikat Kompetensi',
      description: 'Acara penyerahan sertifikat kompetensi kepada peserta yang telah lulus asesmen.',
      thumbnail: '/img/video-thumbs/sertifikat-thumb.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 5,
      title: 'Sosialisasi Program LSP ke Institusi',
      description: 'Kegiatan sosialisasi program LSP kepada berbagai institusi pendidikan.',
      thumbnail: '/img/video-thumbs/sosialisasi-thumb.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 6,
      title: 'Pelatihan Asesor LSP',
      description: 'Program pelatihan untuk asesor baru LSP SMKN 24 Jakarta.',
      thumbnail: '/img/video-thumbs/pelatihan-thumb.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    }
  ];

  const openModal = (video) => setSelectedVideo(video);
  const closeModal = () => setSelectedVideo(null);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa', fontFamily: 'Segoe UI, sans-serif' }}>
      {/* Header */}
      <div style={{ backgroundColor: 'white', padding: '20px 0', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', marginBottom: '30px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', gap: '20px' }}>
          <button
            onClick={onBack}
            style={{
              padding: '10px 20px',
              backgroundColor: '#FF8303',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e6750a'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#FF8303'}
          >
            ← Kembali
          </button>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: '700', margin: 0, color: '#333' }}>Galeri Video</h1>
            <p style={{ fontSize: '16px', color: '#666', margin: '5px 0 0 0' }}>Koleksi video dokumentasi kegiatan LSP</p>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 40px' }}>
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
              <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                <img src={video.thumbnail} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(0,0,0,0.3)'
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    color: '#333',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                  }}>▶</div>
                </div>
                {/* Durasi */}
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
                <h3 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 8px 0', color: '#333', lineHeight: '1.4' }}>{video.title}</h3>
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
                  <div style={{ color: '#FF8303', fontWeight: '500' }}>📅 {video.date}</div>
                  <div style={{ color: '#888' }}>👁 {video.views} views</div>
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
                zIndex: 1001
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
    </div>
  );
}

export default GaleriVideo;
