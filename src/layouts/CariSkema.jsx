import React, { useState } from "react";

function CariSkema({ goToLandingPage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Data untuk setiap card dengan gambar, judul, dan deskripsi
  const cardData = [
    {
      id: 1,
      title: "DATA MANAGEMENT STAFF",
      image: "src/img/lab.png",
      description: "Skema sertifikasi Data Management Staff adalah skema sertifikasi klaster yang dikembangkan oleh Komite Skema LSP untuk memenuhi kebutuhan sertifikasi kompetensi kerja",
      buttonText: "Detail"
    },
    {
      id: 2,
      title: "DIGITAL MARKETING",
      image: "src/img/lab.png",
      description: "Skema Pemasaran Digital (Digital Marketing) adalah skema sertifikasi klaster yang dikembangkan oleh Komite Skema LSP untuk memenuhi kebutuhan sertifikasi kompetensi kerja",
      buttonText: "Detail"
    },
    {
      id: 3,
      title: "DESAINER GRAFIS MUDA", 
      image: "src/img/lab.png",
      description: "Skema sertifikasi Desainer Grafis Muda adalah skema sertifikasi klaster yang dikembangkan oleh Komite Skema LSP untuk memenuhi kebutuhan sertifikasi kompetensi kerja",
      buttonText: "Detail"
    },
    {
      id: 4,
      title: "PENGEMBANG WEB",
      image: "src/img/lab.png",
      description: "Skema sertifikasi Pengembang Web adalah skema sertifikasi klaster yang dikembangkan oleh Komite Skema LSP untuk memenuhi kebutuhan sertifikasi kompetensi kerja",
      buttonText: "Detail"
    },
    {
      id: 5,
      title: "ADMINISTRASI SISTEM",
      image: "src/img/lab.png",
      description: "Skema sertifikasi Administrasi Sistem adalah skema sertifikasi klaster yang dikembangkan oleh Komite Skema LSP untuk memenuhi kebutuhan sertifikasi kompetensi kerja",
      buttonText: "Detail"
    },
    {
      id: 6,
      title: "ANALISIS DATA",
      image: "src/img/lab.png",
      description: "Skema sertifikasi Analisis Data adalah skema sertifikasi klaster yang dikembangkan oleh Komite Skema LSP untuk memenuhi kebutuhan sertifikasi kompetensi kerja",
      buttonText: "Detail"
    }
  ];

  const handleMoreDetail = () => {
    alert("Navigasi ke halaman detail akan ditambahkan");
  };

  const handleCardDetail = (cardTitle, event) => {
    event.stopPropagation();
    // Navigasi ke halaman LandingPage menggunakan prop function
    if (goToLandingPage) {
      goToLandingPage();
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const cardsPerView = 4;
  const maxSlides = Math.max(0, cardData.length - cardsPerView);

  return (
    <div
      style={{
        padding: "60px 0",
        width: "100%",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
          position: "relative",
          zIndex: 3,
        }}
      >
        {/* Header Section */}
        <div
          style={{
            marginBottom: "60px",
          }}
        >
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            fontFamily: 'Arial, sans-serif',
            color: '#000000',
            marginBottom: '40px',
            letterSpacing: '1px',
            textAlign: 'center'
          }}>
            DAFTAR SKEMA SERTIFIKASI
          </h1>

          {/* Cards Container */}
          <div style={{ position: "relative" }}>
            {/* More Detail Button
            <div style={{ textAlign: "right", marginBottom: "20px" }}>
              <button
                onClick={handleMoreDetail}
                style={{
                  backgroundColor: "transparent",
                  color: "#2196f3",
                  border: "2px solid #2196f3",
                  borderRadius: "25px",
                  padding: "8px 20px",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#2196f3";
                  e.target.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#2196f3";
                }}
              >
                More Detail
              </button>
            </div> */}
            {/* Cards Wrapper */}
            <div
              style={{
                overflow: "hidden",
                width: "100%"
              }}
            >
              {/* Cards Slider */}
              <div
                style={{
                  display: 'flex',
                  gap: '20px',
                  transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
                  transition: 'transform 0.5s ease',
                  width: `${(cardData.length / cardsPerView) * 100}%`
                }}
              >
                {cardData.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      width: `${100 / cardData.length}%`,
                      minWidth: '280px',
                      flexShrink: 0,
                    }}
                  >
                    {/* Card */}
                    <div
                      style={{
                        width: '280px',
                        height: '400px',
                        borderRadius: '0px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: 'white',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        border: '1px solid #e0e0e0',
                        position: 'relative'
                      }}
                      onMouseEnter={() => setHoveredCard(item.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                      }}
                    >
                      {/* Image with Text Overlay */}
                      <div
                        style={{
                          height: '100%',
                          backgroundImage: `url(${item.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'flex-end',
                          justifyContent: 'center'
                        }}
                      >
                        {/* Default Gradient Overlay */}
                        <div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(to bottom, transparent 0%, rgba(196, 196, 196, 0.8) 70%, rgba(131, 130, 128, 0.9) 100%)',
                            opacity: hoveredCard === item.id ? 0 : 1,
                            transition: 'opacity 0.3s ease'
                          }}
                        />

                        {/* Hover Overlay with Description */}
                        <div
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(135deg, rgba(128, 128, 128, 0.95) 0%, rgba(96, 96, 96, 0.95) 100%)',
                            opacity: hoveredCard === item.id ? 1 : 0,
                            transition: 'opacity 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            padding: '20px',
                            pointerEvents: hoveredCard === item.id ? 'auto' : 'none'
                          }}
                        >
                          {/* Title on hover */}
                          <div
                            style={{
                              fontSize: '1.2rem',
                              fontWeight: '700',
                              color: 'white',
                              textAlign: 'left',
                              marginBottom: '15px',
                              lineHeight: '1.2'
                            }}
                          >
                            {item.title}
                          </div>

                          {/* Description */}
                          <div
                            style={{
                              flex: 1,
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            <p
                              style={{
                                fontSize: '0.85rem',
                                color: 'white',
                                textAlign: 'left',
                                lineHeight: '1.4',
                                margin: 0,
                                opacity: 0.95
                              }}
                            >
                              {item.description}
                            </p>
                          </div>

                          {/* Detail Button */}
                          <div style={{ textAlign: 'center', marginTop: '15px' }}>
                            <button
                              onClick={(e) => handleCardDetail(item.title, e)}
                              style={{
                                backgroundColor: 'transparent',
                                color: 'white',
                                border: '2px solid white',
                                borderRadius: '20px',
                                padding: '8px 20px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                zIndex: 10
                              }}
                              onMouseOver={(e) => {
                                e.target.style.backgroundColor = 'white';
                                e.target.style.color = '#666';
                              }}
                              onMouseOut={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = 'white';
                              }}
                            >
                              {item.buttonText}
                            </button>
                          </div>
                        </div>

                        {/* Default Title (when not hovered) */}
                        <div
                          style={{
                            padding: '20px',
                            fontSize: '1.2rem',
                            fontWeight: '700',
                            color: 'white',
                            textAlign: 'center',
                            position: 'relative',
                            zIndex: 2,
                            marginBottom: '10px',
                            opacity: hoveredCard === item.id ? 0 : 1,
                            transition: 'opacity 0.3s ease'
                          }}
                        >
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Navigation */}
            {maxSlides > 0 && (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: '30px',
                  gap: '8px'
                }}
              >
                {Array.from({ length: maxSlides + 1 }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      border: currentIndex === index ? '2px solid #000000' : '2px solid #ccc',
                      backgroundColor: currentIndex === index ? '#000000' : 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      outline: 'none'
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CariSkema;