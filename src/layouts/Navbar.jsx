import React, { useState } from 'react';


function Navbar({ onNavClick, onLoginClick }) {
  const [isSertifikasiOpen, setIsSertifikasiOpen] = useState(false);
  const [isGaleriOpen, setIsGaleriOpen] = useState(false);

  return (
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
                    onNavClick(name.toLowerCase());
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
                    onClick={() => onNavClick("galeri")}
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
                    onClick={() => onNavClick("tempatuji")}
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
                    onClick={() => onNavClick("jadwalasesmen")}
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
                    onClick={() => onNavClick("galerifoto")}
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
                    onClick={() => onNavClick("galerivideo")}
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
    </nav>
  );
}

export default Navbar;