import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

const DashboardAsesor = () => {
  const navigate = useNavigate();
  const [activeCards, setActiveCards] = useState([]); // Awalnya tidak ada yang aktif

  const toggleCardActive = (index) => {
    setActiveCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Fungsi untuk navigasi ke halaman detail asesmen
  const handleCardClick = (index) => {
    navigate(`/dashboard-asesor/detail-asesmen/${index}`);
  };

  return (
    <Routes>
      {/* Main Dashboard Asesor - Tanpa Sidebar */}
      <Route
        path="/"
        element={
          <div
            style={{
              padding: "20px",
              backgroundColor: "#f8fafc",
              minHeight: "100vh",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            }}
          >
            {/* Header dengan gradient */}
            <div
              style={{
                background: "linear-gradient(135deg, #ff7f39, #4dd0e1)",
                borderRadius: "15px",
                padding: "25px",
                marginBottom: "30px",
                color: "white",
              }}
            >
              <h1
                style={{
                  fontSize: "32px",
                  marginBottom: "8px",
                  fontWeight: "bold",
                }}
              >
                Selamat datang di{" "}
                <span style={{ color: "#fff3cd" }}>MyLsp</span>, Asesor Arul!
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  margin: "0",
                  opacity: 0.9,
                }}
              >
                Semangat menjadi Asesor hari ini
              </p>
            </div>

            {/* Cards untuk Asesmen yang Ongoing - Horizontal Scroll */}
            <div
              style={{
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "20px",
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
                    statusColor: "#10b981",
                  },
                  {
                    title: "USK RPL - PEMROGRAMAN WEB",
                    location: "SMKN 24 Jakarta",
                    status: "On Going",
                    statusColor: "#6b7280",
                  },
                  {
                    title: "USK RPL - PEMROGRAMAN WEB",
                    location: "SMKN 24 Jakarta",
                    status: "On Going",
                    statusColor: "#6b7280",
                  },
                  {
                    title: "USK RPL - PEMROGRAMAN WEB",
                    location: "SMKN 24 Jakarta",
                    status: "On Going",
                    statusColor: "#6b7280",
                  },
                  {
                    title: "USK RPL - PEMROGRAMAN WEB",
                    location: "SMKN 24 Jakarta",
                    status: "On Going",
                    statusColor: "#6b7280",
                  },
                ].map((item, index) => {
                  const isActive = activeCards.includes(index);
                  return (
                    <div
                      key={index}
                      style={{
                        backgroundColor: "white",
                        borderRadius: "12px",
                        padding: "20px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        border: "1px solid #e5e7eb",
                        minWidth: "280px",
                        flexShrink: 0,
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          marginBottom: "8px",
                          color: "#1f2937",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#6b7280",
                          marginBottom: "15px",
                        }}
                      >
                        {item.location}
                      </p>
                      <button
                        onClick={() => handleCardClick(index)}
                        style={{
                          display: "inline-block",
                          backgroundColor: isActive ? "#10b981" : "#6b7280",
                          color: "white",
                          padding: "6px 12px",
                          borderRadius: "20px",
                          fontSize: "12px",
                          fontWeight: "500",
                          border: "none",
                          cursor: "pointer",
                          transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#10b981"; // Hijau saat hover
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive) {
                            e.target.style.backgroundColor = "#6b7280"; // Kembali abu-abu jika tidak aktif
                          } else {
                            e.target.style.backgroundColor = "#10b981"; // Tetap hijau jika aktif
                          }
                        }}
                      >
                        {item.status}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
                marginBottom: "30px",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "25px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "16px",
                      color: "#6b7280",
                      marginBottom: "8px",
                      fontWeight: "500",
                    }}
                  >
                    Jumlah Asesi
                  </h3>
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
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#f3f4f6",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                  }}
                >
                  👤
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "25px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "16px",
                      color: "#6b7280",
                      marginBottom: "8px",
                      fontWeight: "500",
                    }}
                  >
                    Skema
                  </h3>
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
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#f3f4f6",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                  }}
                >
                  📖
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <button
                style={{
                  backgroundColor: "#06b6d4",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  padding: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "500",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#0891b2")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#06b6d4")
                }
                onClick={() => navigate("/dashboard-asesor/jadwal-sertifikasi")}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  📅
                </div>
                Jadwal Sertifikasi Mendatang
                <span style={{ marginLeft: "auto", fontSize: "18px" }}>→</span>
              </button>

              <button
                style={{
                  backgroundColor: "#06b6d4",
                  color: "white",
                  border: "none",
                  borderRadius: "12px",
                  padding: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "500",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#0891b2")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#06b6d4")
                }
                onClick={() => navigate("/dashboard-asesor/penilaian-asesi")}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(255,255,255,0.2)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                  }}
                >
                  📝
                </div>
                Penilaian Asesi
                <span style={{ marginLeft: "auto", fontSize: "18px" }}>→</span>
              </button>
            </div>
          </div>
        }
      />

      {/* Route untuk detail asesmen */}
      <Route
        path="/detail-asesmen/:id"
        element={
          <div style={{ 
            padding: "20px",
            backgroundColor: "#f8fafc",
            minHeight: "100vh",
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
          }}>
            <div style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "30px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}>
              <button
                onClick={() => navigate(-1)}
                style={{
                  backgroundColor: "#6b7280",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  marginBottom: "20px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                ← Kembali
              </button>
              <h1 style={{ 
                fontSize: "28px", 
                marginBottom: "10px",
                color: "#1f2937" 
              }}>
                Detail Asesmen
              </h1>
              <h2 style={{ 
                fontSize: "24px", 
                color: "#3b82f6",
                marginBottom: "8px" 
              }}>
                USK RPL - PEMROGRAMAN WEB
              </h2>
              <p style={{ 
                fontSize: "16px", 
                color: "#6b7280",
                marginBottom: "20px" 
              }}>
                SMKN 24 Jakarta
              </p>
              <div style={{
                backgroundColor: "#f3f4f6",
                padding: "20px",
                borderRadius: "8px",
                marginBottom: "20px"
              }}>
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>Informasi Asesmen:</h3>
                <ul style={{ paddingLeft: "20px" }}>
                  <li>Status: <strong>On Going</strong></li>
                  <li>Tanggal Mulai: 15 September 2025</li>
                  <li>Tanggal Selesai: 20 September 2025</li>
                  <li>Jumlah Asesi: 25 orang</li>
                  <li>Lokasi: SMKN 24 Jakarta</li>
                </ul>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button
                  style={{
                    backgroundColor: "#10b981",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px 20px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  onClick={() => navigate("/dashboard-asesor/penilaian-asesi")}
                >
                  Mulai Penilaian
                </button>
                <button
                  style={{
                    backgroundColor: "#3b82f6",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    padding: "12px 20px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Lihat Asesi
                </button>
              </div>
            </div>
          </div>
        }
      />

      {/* Routes lainnya jika diperlukan */}
      <Route
        path="/jadwal-sertifikasi"
        element={
          <div style={{ padding: "20px" }}>
            <h1>Jadwal Sertifikasi</h1>
            <p>Halaman jadwal sertifikasi</p>
          </div>
        }
      />

      <Route
        path="/penilaian-asesi"
        element={
          <div style={{ padding: "20px" }}>
            <h1>Penilaian Asesi</h1>
            <p>Halaman penilaian asesi</p>
          </div>
        }
      />
    </Routes>
  );
};

export default DashboardAsesor;