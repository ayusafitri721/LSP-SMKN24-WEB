import React, { useState } from "react";

function Navbar({ onNavClick, onLoginClick }) {
  const [isSertifikasiOpen, setIsSertifikasiOpen] = useState(false);
  const [isGaleriOpen, setIsGaleriOpen] = useState(false);
  const [isProfilOpen, setIsProfilOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Check if we're on the landing page
  const isLandingPage = window.location.pathname === "/";

  const handleNavigation = (path) => {
    // Show loading effect
    setIsLoading(true);

    // Add small delay for smooth transition
    setTimeout(() => {
      window.location.href = path;
    }, 600); // Increased delay for smoother experience
  };

  const handleMainNavClick = (name) => {
    if (name === "Berita") {
      handleNavigation("/berita");
    } else if (name === "Kontak") {
      handleNavigation("/kontak");
    } else if (name === "Download") {
      handleNavigation("/download");
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
      {/* Enhanced Loading Overlay */}
      {isLoading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(254, 156, 84, 0.05) 100%)",
            backdropFilter: "blur(12px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            animation: "smoothFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              animation: "slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s both",
            }}
          >
            {/* Enhanced Spinning loader with gradient */}
            <div
              style={{
                width: "50px",
                height: "50px",
                background:
                  "conic-gradient(from 0deg, #FF8303, #FE9C54, #FF8303)",
                borderRadius: "50%",
                animation:
                  "smoothSpin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite",
                margin: "0 auto 20px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "4px",
                  left: "4px",
                  right: "4px",
                  bottom: "4px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                }}
              />
            </div>

            {/* Animated dots */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "6px",
                marginBottom: "16px",
              }}
            >
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#FF8303",
                    animation: `dotPulse 1.4s cubic-bezier(0.4, 0, 0.6, 1) ${
                      index * 0.2
                    }s infinite`,
                  }}
                />
              ))}
            </div>

            <p
              style={{
                color: "#FF8303",
                fontSize: "18px",
                fontWeight: "600",
                margin: 0,
                letterSpacing: "0.5px",
                animation: "textGlow 2s ease-in-out infinite alternate",
              }}
            >
              Loading...
            </p>

            {/* Progress bar */}
            <div
              style={{
                width: "120px",
                height: "3px",
                backgroundColor: "rgba(255, 131, 3, 0.2)",
                borderRadius: "2px",
                margin: "16px auto 0",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "linear-gradient(90deg, #FF8303, #FE9C54)",
                  borderRadius: "2px",
                  animation: "progressFlow 1.8s ease-in-out infinite",
                  transformOrigin: "left center",
                }}
              />
            </div>
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
          {[
            "Home",
            "Profile",
            "Sertifikasi",
            "Berita",
            "Galeri",
            "Download",
            "Kontak",
          ].map((name) => (
            <div
              key={name}
              style={{ position: "relative" }}
              onMouseEnter={() => {
                if (name === "Sertifikasi") setIsSertifikasiOpen(true);
                if (name === "Galeri") setIsGaleriOpen(true);
                if (name === "Profile") setIsProfilOpen(true);
              }}
              onMouseLeave={() => {
                if (name === "Sertifikasi") setIsSertifikasiOpen(false);
                if (name === "Galeri") setIsGaleriOpen(false);
                if (name === "Profile") setIsProfilOpen(false);
              }}
            >
              <button
                onClick={() => {
                  if (
                    name !== "Sertifikasi" &&
                    name !== "Galeri" &&
                    name !== "Profile"
                  ) {
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

              {/* Dropdown Profile */}
              {name === "Profile" && isProfilOpen && (
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
                    onClick={() => {
                      if (isLandingPage) {
                        onNavClick("profile");
                      } else {
                        handleNavigation("/#profile");
                      }
                    }}
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
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#f5f5f5")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "transparent")
                    }
                  >
                    Tentang Kami
                  </button>
                  <button
                    onClick={() => handleNavigation("/visi-misi")}
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
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#f5f5f5")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "transparent")
                    }
                  >
                    Visi Misi
                  </button>
                </div>
              )}

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
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#f5f5f5")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "transparent")
                    }
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
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#f5f5f5")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "transparent")
                    }
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
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#f5f5f5")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "transparent")
                    }
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
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#f5f5f5")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "transparent")
                    }
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
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "#f5f5f5")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "transparent")
                    }
                  >
                    Galeri Video
                  </button>
                </div>
              )}
            </div>
          ))}
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

        {/* Enhanced CSS Animations */}
        <style>
          {`
          @keyframes smoothFadeIn {
            0% { 
              opacity: 0; 
              transform: scale(1.02);
            }
            100% { 
              opacity: 1; 
              transform: scale(1);
            }
          }
          
          @keyframes slideUp {
            0% { 
              opacity: 0;
              transform: translateY(30px);
            }
            100% { 
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes smoothSpin {
            0% { 
              transform: rotate(0deg) scale(1);
            }
            25% { 
              transform: rotate(90deg) scale(1.05);
            }
            50% { 
              transform: rotate(180deg) scale(1);
            }
            75% { 
              transform: rotate(270deg) scale(1.05);
            }
            100% { 
              transform: rotate(360deg) scale(1);
            }
          }
          
          @keyframes dotPulse {
            0%, 80%, 100% {
              transform: scale(0.8);
              opacity: 0.5;
            }
            40% {
              transform: scale(1.2);
              opacity: 1;
            }
          }
          
          @keyframes textGlow {
            0% {
              text-shadow: 0 0 5px rgba(255, 131, 3, 0.3);
            }
            100% {
              text-shadow: 0 0 20px rgba(255, 131, 3, 0.6);
            }
          }
          
          @keyframes progressFlow {
            0% {
              transform: scaleX(0);
            }
            50% {
              transform: scaleX(1);
            }
            100% {
              transform: scaleX(0);
            }
          }
        `}
        </style>
      </nav>
    </>
  );
}

export default Navbar;
