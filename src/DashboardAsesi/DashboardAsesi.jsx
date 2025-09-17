import React from "react";

// Menerima prop 'onNavigate' dari komponen induk
function DashboardAsesi({ onNavigate }) { 
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
        padding: "15px",
      }}
    >
      {/* Header with background image */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,140,0,0.7), rgba(255,140,0,0.7)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "160px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        {/* Profile icon top right */}
        <div
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(255,255,255,0.3)",
          }}
        >
          <span style={{ color: "white", fontSize: "16px" }}>👤</span>
        </div>

        <h1
          style={{
            color: "white",
            fontSize: "48px",
            fontWeight: "bold",
            margin: 0,
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            letterSpacing: "2px",
          }}
        >
          MyLSP
        </h1>
      </div>

      {/* Info Cards */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          margin: "20px 0",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "12px 20px",
            borderRadius: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            fontSize: "13px",
            fontWeight: "600",
            color: "#333",
          }}
        >
          XII RPL - SMKN 24
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "12px 25px",
            borderRadius: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            fontSize: "13px",
            fontWeight: "600",
            flex: 1,
            textAlign: "center",
            color: "#333",
            minWidth: "300px",
          }}
        >
          PESERTA UJI KOMPETENSI SMKN 24 JAKARTA
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "12px 20px",
            borderRadius: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            fontSize: "13px",
            fontWeight: "600",
            color: "#333",
          }}
        >
          19 JUN 2025
        </div>
      </div>

      {/* Main Content Container */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "0",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            minHeight: "400px",
          }}
        >
          {/* Left Panel - Profile */}
          <div
            style={{
              width: "200px",
              backgroundColor: "#fafafa",
              padding: "25px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              borderRight: "1px solid #e0e0e0",
            }}
          >
            {/* Profile Image placeholder with upload functionality */}
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "#e0e0e0",
                borderRadius: "8px",
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "40px",
                color: "#999",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                border: "2px dashed #ccc",
              }}
              onClick={() => document.getElementById("fileInput").click()}
            >
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      const img = document.getElementById("profileImage");
                      img.src = event.target.result;
                      img.style.display = "block";
                      document.getElementById("cameraIcon").style.display =
                        "none";
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
              <img
                id="profileImage"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "6px",
                  display: "none",
                }}
                alt="Profile"
              />
              <span id="cameraIcon" style={{ fontSize: "40px", color: "#999" }}>
                📷
              </span>
            </div>

            <p
              style={{
                fontSize: "11px",
                color: "#666",
                textAlign: "center",
                margin: "0 0 25px 0",
                lineHeight: "1.4",
              }}
            >
              Afdzal Ezhar Razona Pangestu
            </p>

            {/* Address and info */}
            <div style={{ fontSize: "11px", color: "#666", width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "6px",
                  marginBottom: "12px",
                }}
              >
                <span style={{ minWidth: "12px" }}>🏠</span>
                <span>
                  Jalan TPI Berondong Kg PEC Jakarta Timur, DKI Jakarta
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginBottom: "20px",
                }}
              >
                <span>👤</span>
                <span>Laki-laki</span>
              </div>
            </div>

            {/* Action button */}
            <button
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "20px",
                padding: "10px 25px",
                fontSize: "12px",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Aksi
            </button>
          </div>

          {/* Right Panel - Assessment */}
          <div
            style={{
              flex: 1,
              padding: "25px",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                margin: "0 0 20px 0",
                color: "#333",
              }}
            >
              Assessment Terjadwal
            </h3>

            {/* Assessment Card */}
            <div
              style={{
                background: "linear-gradient(135deg, #4285f4 0%, #34a853 100%)",
                borderRadius: "12px",
                padding: "18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 4px 12px rgba(66, 133, 244, 0.3)",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "500",
                  flex: 1,
                }}
              >
                Assessment Sertifikasi kompetensi RPL - pemrograman junior
              </span>

              <button
                // FIXED: Menggunakan "APL.01" sesuai dengan mapping di route
                onClick={() => onNavigate && onNavigate("APL.01")}
                style={{
                  backgroundColor: "white",
                  color: "#4285f4",
                  border: "none",
                  borderRadius: "25px",
                  padding: "10px 25px",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  marginLeft: "15px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "translateY(-1px)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.transform = "translateY(0)")
                }
              >
                Mulai
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAsesi;