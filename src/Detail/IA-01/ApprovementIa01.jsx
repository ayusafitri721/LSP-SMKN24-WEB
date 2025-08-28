// ApprovementIa01.js (No change needed, already has all tabs)
import React, { useState } from "react";

export default function ApprovementIa01({ onBack, onNavigate }) {
  const [selectedCard, setSelectedCard] = useState(null);

  // Data untuk cards jurusan
  const jurusanData = [
    {
      id: 1,
      title: "Rekayasa Perangkat Lunak",
      description:
        "Program keahlian yang mempelajari pengembangan perangkat lunak, basis data, dan pemrograman, serta analisis sistem desktop, web, maupun mobile.",
      siswaCount: 100,
      buttonText: "Lihat Detail",
    },
    {
      id: 2,
      title: "Perhotelan",
      description:
        "Program keahlian yang mempelajari layanan hotel, tata graha, tata boga, housekeeping, dan front office hingga manajemen hotel.",
      siswaCount: 100,
      buttonText: "Lihat Detail",
    },
    {
      id: 3,
      title: "Tata Boga",
      description:
        "Program keahlian yang mempelajari pengolahan makanan, minuman, nutrisi, menu planning, dan food presentation.",
      siswaCount: 100,
      buttonText: "Lihat Detail",
    },
    {
      id: 4,
      title: "Tata Busana",
      description:
        "Program keahlian yang mempelajari desain, pembuatan, dan produksi pakaian, fashion design hingga tata busana.",
      siswaCount: 100,
      buttonText: "Lihat Detail",
    },
    {
      id: 5,
      title: "Unit Layanan Pariwisata",
      description:
        "Program keahlian yang mempelajari pelayanan perjalanan wisata, ticketing, tour guiding, serta pengelolaan usaha pariwisata.",
      siswaCount: 100,
      buttonText: "Lihat Detail",
    },
  ];

  const handleCardClick = (jurusan) => {
    if (onNavigate) {
      onNavigate("detail-jurusan-ia01", jurusan);
    }
  };

  const handleNavigateToApl02 = () => {
    if (onNavigate) {
      onNavigate("detail/apl-02");
    }
  };

  const handleNavigateToAk01 = () => {
    if (onNavigate) {
      onNavigate("detail/ak-01");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      {/* Header dengan back button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <button
          onClick={onBack}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            marginRight: "20px",
            padding: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#666"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Tab Navigation */}
        <div
          style={{
            display: "flex",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <button
            onClick={handleNavigateToApl02}
            style={{
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "transparent",
              color: "#666",
              cursor: "pointer",
              transition: "all 0.2s ease",
              margin: "4px",
              borderRadius: "8px",
            }}
          >
            FR.APL.02
          </button>
          <button
            onClick={handleNavigateToAk01}
            style={{
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "transparent",
              color: "#666",
              cursor: "pointer",
              transition: "all 0.2s ease",
              margin: "4px",
              borderRadius: "8px",
            }}
          >
            FR.AK.01
          </button>
          <button
            style={{
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "#ff6b35",
              color: "white",
              cursor: "pointer",
              transition: "all 0.2s ease",
              margin: "4px",
              borderRadius: "8px",
            }}
          >
            FR.IA.01
          </button>
        </div>
      </div>

      {/* Page Title */}
      <h1
        style={{
          fontSize: "60px",
          fontWeight: "900",
          color: "#1a1a1a",
          margin: "0 0 50px 0",
          textTransform: "uppercase",
          letterSpacing: "2px",
        }}
      >
        JURUSAN
      </h1>

      {/* Cards Grid - First Row (4 cards) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "28px",
          maxWidth: "1200px",
          marginBottom: "28px",
        }}
      >
        {jurusanData.slice(0, 4).map((jurusan) => (
          <div
            key={jurusan.id}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              transition: "all 0.3s ease",
              cursor: "pointer",
              border:
                selectedCard === jurusan.id
                  ? "3px solid #ff6b35"
                  : "3px solid transparent",
            }}
            onClick={() => setSelectedCard(jurusan.id)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
            }}
          >
            {/* Image */}
            <div
              style={{
                width: "100%",
                height: "180px",
                overflow: "hidden",
                borderBottom: "1px solid #dee2e6",
              }}
            >
              {jurusan.id === 1 && (
                <img
                  src="src/img/jurusan1.png"
                  alt={jurusan.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.backgroundColor = "#e9ecef";
                    e.target.parentElement.style.display = "flex";
                    e.target.parentElement.style.alignItems = "center";
                    e.target.parentElement.style.justifyContent = "center";
                    e.target.parentElement.innerHTML = `
                      <div style="width: 80px; height: 80px; background-color: #adb5bd; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21,15 16,10 5,21"></polyline>
                        </svg>
                      </div>
                    `;
                  }}
                />
              )}
              {jurusan.id === 2 && (
                <img
                  src="src/img/jurusan2.png"
                  alt={jurusan.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.backgroundColor = "#e9ecef";
                    e.target.parentElement.style.display = "flex";
                    e.target.parentElement.style.alignItems = "center";
                    e.target.parentElement.style.justifyContent = "center";
                    e.target.parentElement.innerHTML = `
                      <div style="width: 80px; height: 80px; background-color: #adb5bd; border-radius: 8px; display: flex; alignItems: "center", justifyContent: "center">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21,15 16,10 5,21"></polyline>
                        </svg>
                      </div>
                    `;
                  }}
                />
              )}
              {jurusan.id === 3 && (
                <img
                  src="src/img/jurusan3.png"
                  alt={jurusan.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.backgroundColor = "#e9ecef";
                    e.target.parentElement.style.display = "flex";
                    e.target.parentElement.style.alignItems = "center";
                    e.target.parentElement.style.justifyContent = "center";
                    e.target.parentElement.innerHTML = `
                      <div style="width: 80px; height: 80px; background-color: #adb5bd; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21,15 16,10 5,21"></polyline>
                        </svg>
                      </div>
                    `;
                  }}
                />
              )}
              {jurusan.id === 4 && (
                <img
                  src="src/img/jurusan4.png"
                  alt={jurusan.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.backgroundColor = "#e9ecef";
                    e.target.parentElement.style.display = "flex";
                    e.target.parentElement.style.alignItems = "center";
                    e.target.parentElement.style.justifyContent = "center";
                    e.target.parentElement.innerHTML = `
                      <div style="width: 80px; height: 80px; background-color: #adb5bd; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21,15 16,10 5,21"></polyline>
                        </svg>
                      </div>
                    `;
                  }}
                />
              )}
            </div>

            {/* Card Content */}
            <div
              style={{
                padding: "20px",
              }}
            >
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#1a1a1a",
                  margin: "0 0 10px 0",
                  lineHeight: "1.4",
                }}
              >
                {jurusan.title}
              </h3>

              <p
                style={{
                  fontSize: "13px",
                  color: "#6c757d",
                  margin: "0 0 14px 0",
                  lineHeight: "1.6",
                  height: "56px",
                  overflow: "hidden",
                }}
              >
                {jurusan.description}
              </p>

              {/* Student Count */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "14px",
                  fontSize: "13px",
                  color: "#6c757d",
                }}
              >
                <span
                  style={{
                    width: "18px",
                    height: "18px",
                    backgroundColor: "#ff6b35",
                    borderRadius: "50%",
                    marginRight: "7px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </span>
                {jurusan.siswaCount} Siswa
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(jurusan);
                }}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  backgroundColor: "#ff6b35",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#e96a00";
                  e.target.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#ff6b35";
                  e.target.style.transform = "scale(1)";
                }}
              >
                {jurusan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row - Single Card */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          maxWidth: "1200px",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            transition: "all 0.3s ease",
            cursor: "pointer",
            border:
              selectedCard === jurusanData[4].id
                ? "3px solid #ff6b35"
                : "3px solid transparent",
            width: "calc(25% - 21px)", // Same width as cards above
          }}
          onClick={() => setSelectedCard(jurusanData[4].id)}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
          }}
        >
          {/* Image */}
          <div
            style={{
              width: "100%",
              height: "180px",
              overflow: "hidden",
              borderBottom: "1px solid #dee2e6",
            }}
          >
            <img
              src="src/img/jurusan5.png"
              alt={jurusanData[4].title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.style.backgroundColor = "#e9ecef";
                e.target.parentElement.style.display = "flex";
                e.target.parentElement.style.alignItems = "center";
                e.target.parentElement.style.justifyContent = "center";
                e.target.parentElement.innerHTML = `
                  <div style="width: 80px; height: 80px; background-color: #adb5bd; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#6c757d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <circle cx="8.5" cy="8.5" r="1.5"></circle>
                      <polyline points="21,15 16,10 5,21"></polyline>
                    </svg>
                  </div>
                `;
              }}
            />
          </div>

          {/* Card Content */}
          <div
            style={{
              padding: "20px",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "700",
                color: "#1a1a1a",
                margin: "0 0 10px 0",
                lineHeight: "1.4",
              }}
            >
              {jurusanData[4].title}
            </h3>

            <p
              style={{
                fontSize: "13px",
                color: "#6c757d",
                margin: "0 0 14px 0",
                lineHeight: "1.6",
                height: "56px",
                overflow: "hidden",
              }}
            >
              {jurusanData[4].description}
            </p>

            {/* Student Count */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "14px",
                fontSize: "13px",
                color: "#6c757d",
              }}
            >
              <span
                style={{
                  width: "18px",
                  height: "18px",
                  backgroundColor: "#ff6b35",
                  borderRadius: "50%",
                  marginRight: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="white">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              {jurusanData[4].siswaCount} Siswa
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick(jurusanData[4]);
              }}
              style={{
                width: "100%",
                padding: "10px 14px",
                backgroundColor: "#ff6b35",
                color: "#ffffff",
                border: "none",
                borderRadius: "20px",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s ease",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#e96a00";
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#ff6b35";
                e.target.style.transform = "scale(1)";
              }}
            >
              {jurusanData[4].buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Info Text */}
      <div
        style={{
          marginTop: "50px",
          textAlign: "center",
          color: "#6c757d",
          fontSize: "14px",
        }}
      >
        <p>Pilih jurusan untuk melihat detail approvement dan daftar asesi</p>
      </div>
    </div>
  );
}