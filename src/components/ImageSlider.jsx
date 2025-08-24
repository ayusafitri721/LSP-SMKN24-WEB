import { useState, useEffect } from "react";

function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'src/img/navbar_lsp.jpg',
      title: 'LAUNCHING DAN PENYERAHAN',
      subtitle: 'SERTIFIKAT KOMPETENSI',
      organization: 'LEMBAGA SERTIFIKASI PROFESI',
      institute: 'Institut Agama Islam Negeri Madura',
      date: 'Pamekasan, 24 Januari 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&h=600&fit=crop',
      title: 'SERTIFIKASI KOMPETENSI',
      subtitle: 'PROFESIONAL',
      organization: 'LEMBAGA SERTIFIKASI PROFESI',
      institute: 'Institut Teknologi Indonesia',
      date: 'Jakarta, 25 Januari 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=600&fit=crop',
      title: 'WORKSHOP PELATIHAN',
      subtitle: 'DIGITAL MARKETING',
      organization: 'LEMBAGA SERTIFIKASI PROFESI',
      institute: 'Universitas Indonesia',
      date: 'Depok, 26 Januari 2025'
    },
    {
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=600&fit=crop',
      title: 'SEMINAR NASIONAL',
      subtitle: 'TEKNOLOGI INFORMASI',
      organization: 'LEMBAGA SERTIFIKASI PROFESI',
      institute: 'Institut Teknologi Bandung',
      date: 'Bandung, 27 Januari 2025'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '500px',
      overflow: 'hidden'
    }}>
      <div style={{
        display: 'flex',
        width: `${slides.length * 100}%`,
        height: '100%',
        transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
        transition: 'transform 0.5s ease-in-out'
      }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              width: `${100 / slides.length}%`,
              height: '100%',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <div style={{
              textAlign: 'center',
              color: 'white',
              zIndex: 2
            }}>
              <h1 style={{
                fontSize: '48px',
                fontWeight: 'bold',
                margin: '0 0 10px 0',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                {slide.title}
              </h1>
              <h2 style={{
                fontSize: '42px',
                fontWeight: '600',
                margin: '0 0 10px 0',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                {slide.subtitle}
              </h2>
              <div style={{
                fontSize: '32px',
                fontWeight: 'bold',
                margin: '20px 0',
                color: '#00bcd4',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                {slide.organization}
              </div>
              <p style={{
                fontSize: '24px',
                margin: '10px 0',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
              }}>
                {slide.institute}
              </p>
              <p style={{
                fontSize: '18px',
                margin: '10px 0',
                backgroundColor: '#00bcd4',
                padding: '8px 16px',
                borderRadius: '20px',
                display: 'inline-block'
              }}>
                {slide.date}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 3
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
