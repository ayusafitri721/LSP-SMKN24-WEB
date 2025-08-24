import React, { useState } from 'react';

function Navbar({ onNavClick, onLoginClick }) {
  const [isSertifikasiOpen, setIsSertifikasiOpen] = useState(false);
  const [isGaleriOpen, setIsGaleriOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check if we're on the landing page
  const isLandingPage = window.location.pathname === '/';

  const handleNavigation = (path) => {
    // Show loading effect
    setIsLoading(true);
    
    // Add small delay for smooth transition
    setTimeout(() => {
      window.location.href = path;
    }, 300);
  };

  const handleMainNavClick = (name) => {
    if (name === "Berita") {
      handleNavigation("/berita");
    } else if (name === "Kontak") {
      handleNavigation("/kontak");
    } else if (name === "Home") {
      // Always go to home page
      handleNavigation("/");
    } else if (name === "Profile") {
      if (isLandingPage) {
        // If on landing page, scroll to section
        onNavClick(name.toLowerCase());
      } else {
        // If not on landing page, go to landing page first
        handleNavigation("/#profile");
      }
    }
  };

  return (
    <>
      {/* Loading Overlay */}
      {isLoading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            animation: 'fadeIn 0.3s ease-in-out',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            {/* Spinning loader */}
            <div
              style={{
                width: '40px',
                height: '40px',
                border: '4px solid #f3f3f3',
                borderTop: '4px solid #FF8303',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 16px',
              }}
            />
            <p style={{ 
              color: '#FF8303', 
              fontSize: '16px',
              fontWeight: '500',
              margin: 0 
            }}>
              Loading...
            </p>
          </div>
        </div>
      )}
      
      <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px 24px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        height: "60px",
      }}
    >
      <img
        src="src/img/Rectangle 11.png"
        alt="blue background"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          zIndex: -1,
        }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="src/img/image 12.png"
          alt="Logo LSP"
          style={{
            width: "40px",
            height: "40px",
            objectFit: "contain",
          }}
        />
        <span style={{ fontSize: "20px", fontWeight: "700" }}>
          <span style={{ color: "#FE9C54" }}>My</span>
          <span style={{ color: "#FF8303" }}>LSP</span>
        </span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "24px",
          alignItems: "center",
          position: "relative",
        }}
      >
        {["Home", "Profile", "Sertifikasi", "Berita", "Galeri", "Kontak"].map(
          (name) => (
            <div
              key={name}
              style={{ position: "relative" }}
              onMouseEnter={() => {
                if (name === "Sertifikasi") setIsSertifikasiOpen(true);
                if (name === "Galeri") setIsGaleriOpen(true);
              }}
              onMouseLeave={() => {
                if (name === "Sertifikasi") setIsSertifikasiOpen(false);
                if (name === "Galeri") setIsGaleriOpen(false);
              }}
            >
              <button
                onClick={() => {
                  if (name !== "Sertifikasi" && name !== "Galeri") {
                    handleMainNavClick(name);
                  }
                }}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "17px",
                  color: "#333",
                  cursor: "pointer",
                  fontWeight: "500",
                  padding: "6px 0",
                }}
              >
                {name}{" "}
                {["Profile", "Sertifikasi", "Galeri"].includes(name) && (
                  <span style={{ fontSize: "10px" }}>▼</span>
                )}
              </button>
              
              {/* Dropdown Sertifikasi */}
              {name === "Sertifikasi" && isSertifikasiOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "white",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    borderRadius: "4px",
                    minWidth: "200px",
                    zIndex: 1001,
                    padding: "8px 0",
                  }}
                >
                  <button
                    onClick={() => handleNavigation("/detail-sertifikasi")}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "8px 16px",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      fontSize: "14px",
                      color: "#333",
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
                  >
                    Skema Sertifikasi
                  </button>
                  <button
                    onClick={() => handleNavigation("/tempat-uji")}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "8px 16px",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      fontSize: "14px",
                      color: "#333",
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
                  >
                    Tempat Uji Kompetensi
                  </button>
                  <button
                    onClick={() => handleNavigation("/jadwal-asesmen")}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "8px 16px",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      fontSize: "14px",
                      color: "#333",
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
                  >
                    Jadwal Asesmen
                  </button>
                </div>
              )}

              {/* Dropdown Galeri */}
              {name === "Galeri" && isGaleriOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "white",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    borderRadius: "4px",
                    minWidth: "150px",
                    zIndex: 1001,
                    padding: "8px 0",
                  }}
                >
                  <button
                    onClick={() => handleNavigation("/galeri-foto")}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "8px 16px",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      fontSize: "14px",
                      color: "#333",
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
                  >
                    Galeri Foto
                  </button>
                  <button
                    onClick={() => handleNavigation("/galeri-video")}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "8px 16px",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      fontSize: "14px",
                      color: "#333",
                      cursor: "pointer",
                      transition: "background-color 0.2s",
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
                  >
                    Galeri Video
                  </button>
                </div>
              )}
            </div>
          )
        )}
      </div>
      <button
        onClick={onLoginClick}
        style={{
          padding: "6px 18px",
          backgroundColor: "white",
          color: "black",
          border: "none",
          borderRadius: "999px",
          fontSize: "14px",
          fontWeight: "500",
          cursor: "pointer",
          boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.transform = "translateY(-1px)";
          e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.25)";
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)";
        }}
      >
        Login
      </button>
      
      {/* CSS Animations */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
        `}
      </style>
    </nav>
    </>
  );
}

export default Navbar;