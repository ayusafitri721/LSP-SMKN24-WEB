import React, { useState, useRef } from "react";
import { User, FileText, Calendar, Edit3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardAsesor = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleCardClick = (index) => {
    if (!isDragging) {
      // Navigate to DashboardRpl for any "On Going" card
      navigate("/dashboard-asesor/dashboard-rpl");
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleJadwalClick = () => {
    navigate("/dashboard-asesor/jadwal");
  };

  const handlePenilaianClick = () => {
    // Updated to navigate to the specific dashboard-rpl route
    navigate("/dashboard-asesor/dashboard-rpl");
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Top Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 1fr",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        {/* Jumlah Asesi Card */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <span
              style={{ fontSize: "14px", color: "#6b7280", fontWeight: "500" }}
            >
              Jumlah Asesi
            </span>
            <User size={20} color="#6b7280" />
          </div>
          <p
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#3b82f6",
              margin: "0",
            }}
          >
            7098
          </p>
        </div>

        {/* MyLSP Center Card */}
        <div
          style={{
            backgroundImage:
              "linear-gradient(rgba(249, 115, 22, 0.8), rgba(251, 146, 60, 0.8)), url('/src/img/kontak.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "12px",
            padding: "20px",
            color: "white",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              margin: "0 0 8px 0",
              textShadow: "0 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            MyLSP
          </h1>
          <p
            style={{
              fontSize: "14px",
              margin: "0",
              opacity: 0.95,
              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            Lembaga Sertifikasi Profesi
          </p>
        </div>

        {/* Skema Card */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <span
              style={{ fontSize: "14px", color: "#6b7280", fontWeight: "500" }}
            >
              Skema
            </span>
            <FileText size={20} color="#6b7280" />
          </div>
          <p
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#f97316",
              margin: "0",
            }}
          >
            7098
          </p>
        </div>
      </div>

      {/* Welcome Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #FE9C54, #fb923c)",
          borderRadius: "12px",
          padding: "25px",
          marginBottom: "20px",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "2px",
            fontWeight: "700",
            margin: "0 0 2px 0",
            lineHeight: "1.2",
          }}
        >
          Selamat datang di MyLsp, Asesor Arul!
        </h2>
        <p
          style={{
            fontSize: "15px",
            margin: "0",
            opacity: 0.9,
            fontWeight: "400",
            lineHeight: "1.3",
            fontStyle: "italic",
          }}
        >
          Semangat menjadi Asesor hari ini
        </p>
      </div>

      {/* Assessment Cards - Horizontal Scroll */}
      <div
        style={{
          marginBottom: "20px",
        }}
      >
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "15px",
            overflowX: "auto",
            overflowY: "hidden",
            paddingBottom: "10px",
            scrollbarWidth: "thin",
            scrollbarColor: "#cbd5e0 transparent",
            cursor: isDragging ? "grabbing" : "grab",
            userSelect: "none",
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
        >
          {[
            {
              title: "USK RPL - PEMROGRAMAN WEB",
              location: "SMKN 24 Jakarta",
              status: "On Going",
              isActive: true,
            },
            {
              title: "USK RPL - PEMROGRAMAN WEB",
              location: "SMKN 24 Jakarta",
              status: "On Going",
              isActive: false,
            },
            {
              title: "USK RPL - PEMROGRAMAN WEB",
              location: "SMKN 24 Jakarta",
              status: "On Going",
              isActive: false,
            },
            {
              title: "USK RPL - PEMROGRAMAN WEB",
              location: "SMKN 24 Jakarta",
              status: "On Going",
              isActive: false,
            },
            {
              title: "USK TKJ - JARINGAN KOMPUTER",
              location: "SMKN 10 Jakarta",
              status: "On Going",
              isActive: false,
            },
            {
              title: "USK MM - MULTIMEDIA",
              location: "SMKN 5 Jakarta",
              status: "On Going",
              isActive: false,
            },
            {
              title: "USK RPL - MOBILE DEVELOPMENT",
              location: "SMKN 15 Jakarta",
              status: "On Going",
              isActive: false,
            },
            {
              title: "USK TKJ - SISTEM KEAMANAN",
              location: "SMKN 8 Jakarta",
              status: "On Going",
              isActive: false,
            },
            {
              title: "USK RPL - DATABASE MANAGEMENT",
              location: "SMKN 12 Jakarta",
              status: "On Going",
              isActive: false,
            },
            {
              title: "USK MM - DESAIN GRAFIS",
              location: "SMKN 3 Jakarta",
              status: "On Going",
              isActive: false,
            },
          ].map((item, index) => {
            const isHovered = hoveredCard === index;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  padding: "15px",
                  boxShadow: isHovered
                    ? "0 4px 8px rgba(0,0,0,0.15)"
                    : "0 2px 4px rgba(0,0,0,0.1)",
                  border: "1px solid #e5e7eb",
                  minWidth: "220px",
                  flexShrink: 0,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                  position: "relative",
                }}
                onClick={() => handleCardClick(index)}
                onMouseEnter={() => !isDragging && setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h3
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    marginBottom: "4px",
                    color: "#000000",
                    lineHeight: "1.2",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#6b7280",
                    marginBottom: "20px",
                    fontStyle: "italic",
                  }}
                >
                  {item.location}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: isHovered ? "#10b981" : "#d1d5db",
                    color: isHovered ? "white" : "#6b7280",
                    padding: "6px 16px",
                    borderRadius: "20px",
                    fontSize: "10px",
                    fontWeight: "600",
                    transition: "all 0.2s ease",
                    position: "absolute",
                    bottom: "15px",
                    right: "15px",
                  }}
                >
                  {item.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <button
          style={{
            background: "linear-gradient(135deg, #06b6d4, #0891b2)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: "500",
            transition: "all 0.2s",
            boxShadow: "0 4px 12px rgba(6, 182, 212, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-1px)";
            e.target.style.boxShadow = "0 6px 16px rgba(6, 182, 212, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 12px rgba(6, 182, 212, 0.3)";
          }}
          onClick={handleJadwalClick}
        >
          <div
            style={{
              width: "35px",
              height: "35px",
              backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Calendar size={18} color="white" />
          </div>
          Jadwal Sertifikasi Mendatang
          <span style={{ marginLeft: "auto", fontSize: "16px" }}>›</span>
        </button>

        <button
          style={{
            background: "linear-gradient(135deg, #06b6d4, #0891b2)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: "500",
            transition: "all 0.2s",
            boxShadow: "0 4px 12px rgba(6, 182, 212, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-1px)";
            e.target.style.boxShadow = "0 6px 16px rgba(6, 182, 212, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 4px 12px rgba(6, 182, 212, 0.3)";
          }}
          onClick={handlePenilaianClick}
        >
          <div
            style={{
              width: "35px",
              height: "35px",
              backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Edit3 size={18} color="white" />
          </div>
          Penilaian Asesi
          <span style={{ marginLeft: "auto", fontSize: "16px" }}>›</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardAsesor;
