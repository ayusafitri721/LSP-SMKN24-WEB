import React, { useState } from "react";

const DashboardAsesor = ({ onNavigate }) => {
  const [activeView, setActiveView] = useState("dashboard");
  const [selectedAssessment, setSelectedAssessment] = useState(null);

  const handleCardClick = (index) => {
    // Langsung navigasi ke Dashboard RPL tanpa ke halaman detail
    if (onNavigate) {
      onNavigate("DashboardRPL");
    }
  };

  const handleBackClick = () => {
    setActiveView("dashboard");
    setSelectedAssessment(null);
  };

  const navigateTo = (view) => {
    setActiveView(view);
  };

  // Fungsi untuk navigasi ke Dashboard RPL
  const navigateToDashboardRPL = () => {
    // Menggunakan onNavigate untuk memberitahu parent component
    if (onNavigate) {
      onNavigate("DashboardRPL");
    }
  };

  // Hapus semua view detail, jadwal, penilaian karena tidak digunakan
  // Langsung ke dashboard utama saja

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
            <span style={{ fontSize: "16px" }}>👤</span>
            <span
              style={{ fontSize: "14px", color: "#6b7280", fontWeight: "500" }}
            >
              Jumlah Asesi
            </span>
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
              "linear-gradient(rgba(249, 115, 22, 0.8), rgba(251, 146, 60, 0.8)), url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
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
            <span style={{ fontSize: "16px" }}>📋</span>
            <span
              style={{ fontSize: "14px", color: "#6b7280", fontWeight: "500" }}
            >
              Skema
            </span>
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
          background: "linear-gradient(135deg, #ff7f39, #fb923c)",
          borderRadius: "12px",
          padding: "25px",
          marginBottom: "20px",
          color: "white",
        }}
      >
        <h2
          style={{
            fontSize: "24px",
            marginBottom: "5px",
            fontWeight: "600",
            margin: "0",
          }}
        >
          Selamat datang di MyLsp, Asesor Arul!
        </h2>
        <p
          style={{
            fontSize: "14px",
            margin: "5px 0 0 0",
            opacity: 0.9,
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
          style={{
            display: "flex",
            gap: "15px",
            overflowX: "auto",
            paddingBottom: "10px",
            scrollbarWidth: "thin",
            scrollbarColor: "#cbd5e0 transparent",
          }}
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
          ].map((item, index) => {
            const isActive = index === 0;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  padding: "15px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  border: "1px solid #e5e7eb",
                  minWidth: "200px",
                  flexShrink: 0,
                  cursor: "pointer",
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onClick={() => handleCardClick(index)}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 4px 8px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
                }}
              >
                <h3
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    marginBottom: "8px",
                    color: "#1f2937",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                    marginBottom: "12px",
                  }}
                >
                  {item.location}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: isActive ? "#10b981" : "#d1d5db",
                    color: isActive ? "white" : "#6b7280",
                    padding: "4px 12px",
                    borderRadius: "15px",
                    fontSize: "11px",
                    fontWeight: "500",
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
          onClick={() => navigateTo("jadwal")}
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
              fontSize: "18px",
            }}
          >
            📅
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
          onClick={() => navigateTo("penilaian")}
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
              fontSize: "18px",
            }}
          >
            📝
          </div>
          Penilaian Asesi
          <span style={{ marginLeft: "auto", fontSize: "16px" }}>›</span>
        </button>
      </div>
    </div>
  );
};

export default DashboardAsesor;
