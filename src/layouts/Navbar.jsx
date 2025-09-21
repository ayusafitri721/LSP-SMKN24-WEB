import React, { useState, useEffect } from "react";

function Navbar({ onNavClick, onLoginClick }) {
  const [isSertifikasiOpen, setIsSertifikasiOpen] = useState(false);
  const [isGaleriOpen, setIsGaleriOpen] = useState(false);
  const [isProfilOpen, setIsProfilOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".hamburger-btn")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Check if we're on the landing page
  const isLandingPage = window.location.pathname === "/";

  const handleNavigation = (path) => {
    // Close mobile menu first
    setIsMobileMenuOpen(false);

    // Show loading effect
    setIsLoading(true);

    // Add small delay for smooth transition
    setTimeout(() => {
      window.location.href = path;
    }, 600);
  };

  const handleMainNavClick = (name) => {
    if (name === "Berita") {
      handleNavigation("/berita");
    } else if (name === "Kontak") {
      handleNavigation("/kontak");
    } else if (name === "Download") {
      handleNavigation("/download");
    } else if (name === "Home") {
      handleNavigation("/");
    } else if (name === "Profile") {
      if (isLandingPage) {
        setIsMobileMenuOpen(false);
        onNavClick(name.toLowerCase());
      } else {
        handleNavigation("/#profile");
      }
    }
  };

  const handleMobileLogin = () => {
    setIsMobileMenuOpen(false);
    onLoginClick();
  };

  const toggleDropdown = (dropdownName) => {
    if (dropdownName === "Sertifikasi") {
      setIsSertifikasiOpen(!isSertifikasiOpen);
      setIsGaleriOpen(false);
      setIsProfilOpen(false);
    } else if (dropdownName === "Galeri") {
      setIsGaleriOpen(!isGaleriOpen);
      setIsSertifikasiOpen(false);
      setIsProfilOpen(false);
    } else if (dropdownName === "Profile") {
      setIsProfilOpen(!isProfilOpen);
      setIsSertifikasiOpen(false);
      setIsGaleriOpen(false);
    }
  };

  // Close dropdowns when clicking outside (only for desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !isMobile &&
        !event.target.closest(".dropdown-container") &&
        !event.target.closest(".mobile-menu")
      ) {
        setIsSertifikasiOpen(false);
        setIsGaleriOpen(false);
        setIsProfilOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobile]);

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
                width: isMobile ? "40px" : "50px",
                height: isMobile ? "40px" : "50px",
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
                    width: isMobile ? "6px" : "8px",
                    height: isMobile ? "6px" : "8px",
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
                fontSize: isMobile ? "16px" : "18px",
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
                width: isMobile ? "100px" : "120px",
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
          padding: isMobile ? "8px 16px" : "8px 24px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          height: "60px",
          width: "100%",
          maxWidth: "100vw",
          boxSizing: "border-box",
          overflow: "visible", // Changed from "hidden" to "visible" for dropdowns
        }}
      >
        {/* Background Image - Fixed positioning */}
        <img
          src="src/img/Rectangle 11.png"
          alt="blue background"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "100%",
            width: "auto",
            maxWidth: "50%",
            zIndex: -1,
            objectFit: "cover",
            objectPosition: "right center",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            flexShrink: 0,
            minWidth: "fit-content",
          }}
        >
          <img
            src="src/img/image 12.png"
            alt="Logo LSP"
            style={{
              width: isMobile ? "35px" : "40px",
              height: isMobile ? "35px" : "40px",
              objectFit: "contain",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: isMobile ? "18px" : "20px",
              fontWeight: "700",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ color: "#FE9C54" }}>My</span>
            <span style={{ color: "#FF8303" }}>LSP</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              gap: "24px", // Changed from "32px" to "24px" to match the second version
              alignItems: "center",
              position: "relative",
              flexShrink: 1,
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
                    borderRadius: "6px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "rgba(255, 131, 3, 0.1)";
                    e.target.style.color = "#FF8303";
                    e.target.style.transform = "translateY(-1px)";
                    e.target.style.boxShadow =
                      "0 2px 8px rgba(255, 131, 3, 0.2)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#333";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                  onMouseDown={(e) => {
                    e.target.style.transform = "translateY(0) scale(0.98)";
                    e.target.style.backgroundColor = "rgba(255, 131, 3, 0.2)";
                  }}
                  onMouseUp={(e) => {
                    e.target.style.transform = "translateY(-1px) scale(1)";
                    e.target.style.backgroundColor = "rgba(255, 131, 3, 0.1)";
                  }}
                >
                  {name}{" "}
                  {["Profile", "Sertifikasi", "Galeri"].includes(name) && (
                    <span
                      style={{
                        fontSize: "10px",
                        marginLeft: "4px",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      ▼
                    </span>
                  )}
                </button>

                {/* Desktop Dropdowns */}
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
        )}

        {/* Mobile & Tablet Right Side */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: isMobile ? "12px" : "16px",
            flexShrink: 0,
          }}
        >
          {/* Login Button - Only show on Desktop */}
          {!isMobile && (
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
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#FF8303";
                e.target.style.color = "white";
                e.target.style.transform = "translateY(-2px) scale(1.05)";
                e.target.style.boxShadow = "0 8px 20px rgba(255, 131, 3, 0.4)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "black";
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.2)";
              }}
              onMouseDown={(e) => {
                e.target.style.transform = "translateY(-1px) scale(1.02)";
                e.target.style.boxShadow = "0 4px 12px rgba(255, 131, 3, 0.6)";
              }}
              onMouseUp={(e) => {
                e.target.style.transform = "translateY(-2px) scale(1.05)";
                e.target.style.boxShadow = "0 8px 20px rgba(255, 131, 3, 0.4)";
              }}
            >
              Login
            </button>
          )}

          {/* Mobile Hamburger Button */}
          {isMobile && (
            <button
              className="hamburger-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "40px",
                height: "40px",
                position: "relative",
                zIndex: 1002,
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "3px",
                  backgroundColor: "#333",
                  borderRadius: "2px",
                  position: "absolute",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isMobileMenuOpen
                    ? "rotate(45deg)"
                    : "translateY(-6px)",
                }}
              />
              <div
                style={{
                  width: "24px",
                  height: "3px",
                  backgroundColor: "#333",
                  borderRadius: "2px",
                  position: "absolute",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  opacity: isMobileMenuOpen ? 0 : 1,
                  transform: "translateY(0px)",
                }}
              />
              <div
                style={{
                  width: "24px",
                  height: "3px",
                  backgroundColor: "#333",
                  borderRadius: "2px",
                  position: "absolute",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: isMobileMenuOpen
                    ? "rotate(-45deg)"
                    : "translateY(6px)",
                }}
              />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 998,
            animation: "fadeIn 0.3s ease",
          }}
        />
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className="mobile-menu"
          style={{
            position: "fixed",
            top: "60px",
            right: isMobileMenuOpen ? "0" : "-100%",
            width: "280px",
            height: "calc(100vh - 60px)",
            backgroundColor: "white",
            boxShadow: "-4px 0 12px rgba(0,0,0,0.1)",
            zIndex: 999,
            transition: "right 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            overflowY: "auto",
            padding: "20px 0",
          }}
        >
          {/* Navigation Menu Items */}
          {[
            "Home",
            "Profile",
            "Sertifikasi",
            "Berita",
            "Galeri",
            "Download",
            "Kontak",
          ].map((name) => (
            <div key={name} style={{ marginBottom: "4px" }}>
              <button
                onClick={() => {
                  if (["Profile", "Sertifikasi", "Galeri"].includes(name)) {
                    toggleDropdown(name);
                  } else {
                    handleMainNavClick(name);
                  }
                }}
                style={{
                  width: "100%",
                  padding: "16px 24px",
                  background: "none",
                  border: "none",
                  textAlign: "left",
                  fontSize: "16px",
                  color: "#333",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "background-color 0.2s",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#f8f9fa")
                }
                onMouseOut={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                {name}
                {["Profile", "Sertifikasi", "Galeri"].includes(name) && (
                  <span
                    style={{
                      fontSize: "12px",
                      transform:
                        (name === "Profile" && isProfilOpen) ||
                        (name === "Sertifikasi" && isSertifikasiOpen) ||
                        (name === "Galeri" && isGaleriOpen)
                          ? "rotate(180deg)"
                          : "none",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    ▼
                  </span>
                )}
              </button>

              {/* Mobile Profile Dropdown */}
              {name === "Profile" && isProfilOpen && (
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    paddingLeft: "20px",
                    animation: "slideDown 0.2s ease",
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
                      width: "100%",
                      padding: "12px 24px",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      fontSize: "14px",
                      color: "#666",
                      cursor: "pointer",
                    }}
                  >
                    Tentang Kami
                  </button>
                  <button
                    onClick={() => handleNavigation("/visi-misi")}
                    style={{
                      width: "100%",
                      padding: "12px 24px",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      fontSize: "14px",
                      color: "#666",
                      cursor: "pointer",
                    }}
                  >
                    Visi Misi
                  </button>
                </div>
              )}

              {/* Mobile Sertifikasi Dropdown */}
              {name === "Sertifikasi" && isSertifikasiOpen && (
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    paddingLeft: "20px",
                    animation: "slideDown 0.2s ease",
                  }}
                >
                  <button
                    onClick={() => handleNavigation("/detail-sertifikasi")}
                    style={{
                      width: "100%",
                      padding: "12px 24px",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      fontSize: "14px",
                      color: "#666",
                      cursor: "pointer",
                    }}
                  >
                    Skema Sertifikasi
                  </button>
                  <button
                    onClick={() => handleNavigation("/tempat-uji")}
                    style={{
                      width: "100%",
                      padding: "12px 24px",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      fontSize: "14px",
                      color: "#666",
                      cursor: "pointer",
                    }}
                  >
                    Tempat Uji Kompetensi
                  </button>
                  <button
                    onClick={() => handleNavigation("/jadwal-asesmen")}
                    style={{
                      width: "100%",
                      padding: "12px 24px",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      fontSize: "14px",
                      color: "#666",
                      cursor: "pointer",
                    }}
                  >
                    Jadwal Asesmen
                  </button>
                </div>
              )}

              {/* Mobile Galeri Dropdown */}
              {name === "Galeri" && isGaleriOpen && (
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    paddingLeft: "20px",
                    animation: "slideDown 0.2s ease",
                  }}
                >
                  <button
                    onClick={() => handleNavigation("/galeri-foto")}
                    style={{
                      width: "100%",
                      padding: "12px 24px",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      fontSize: "14px",
                      color: "#666",
                      cursor: "pointer",
                    }}
                  >
                    Galeri Foto
                  </button>
                  <button
                    onClick={() => handleNavigation("/galeri-video")}
                    style={{
                      width: "100%",
                      padding: "12px 24px",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      fontSize: "14px",
                      color: "#666",
                      cursor: "pointer",
                    }}
                  >
                    Galeri Video
                  </button>
                </div>
              )}
            </div>
          ))}

          {/* Divider */}
          <div
            style={{
              height: "1px",
              backgroundColor: "#e5e7eb",
              margin: "20px 24px",
            }}
          />

          {/* Mobile Login Button - Moved to bottom */}
          <div style={{ padding: "0 24px", marginTop: "20px" }}>
            <button
              onClick={handleMobileLogin}
              style={{
                width: "100%",
                padding: "12px 18px",
                backgroundColor: "#FF8303",
                color: "white",
                border: "none",
                borderRadius: "999px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(255, 131, 3, 0.3)",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#E67302";
                e.target.style.transform = "translateY(-1px)";
                e.target.style.boxShadow = "0 6px 16px rgba(255, 131, 3, 0.4)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#FF8303";
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 12px rgba(255, 131, 3, 0.3)";
              }}
            >
              Login
            </button>
          </div>
        </div>
      )}

      {/* Enhanced CSS Animations */}
      <style>
        {`
        /* Prevent horizontal scroll globally */
        * {
          box-sizing: border-box;
        }
        
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }

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
        
        @keyframes slideDown {
          0% { 
            opacity: 0;
            transform: translateY(-10px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes dropdownSlideDown {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        
        @keyframes fadeIn {
          0% { 
            opacity: 0;
          }
          100% { 
            opacity: 1;
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

        /* Responsive breakpoints */
        @media (max-width: 768px) {
          .mobile-menu {
            width: 100% !important;
            right: ${isMobileMenuOpen ? "0" : "-100%"} !important;
          }
          
          nav {
            padding: 8px 12px !important;
          }
        }

        @media (max-width: 480px) {
          nav {
            padding: 8px 8px !important;
          }
          
          .mobile-menu {
            padding: 16px 0 !important;
          }
        }

        /* Ensure navbar never causes horizontal scroll */
        nav {
          max-width: 100vw !important;
          width: 100% !important;
        }

        /* Touch-friendly hover states for mobile */
        @media (hover: none) and (pointer: coarse) {
          button:hover {
            background-color: rgba(0, 0, 0, 0.05) !important;
          }
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced dropdown styles */
        .dropdown-item {
          position: relative;
          overflow: hidden;
        }

        .dropdown-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 131, 3, 0.1), transparent);
          transition: left 0.3s ease;
        }

        .dropdown-item:hover::before {
          left: 100%;
        }
      `}
      </style>
    </>
  );
}

export default Navbar;
