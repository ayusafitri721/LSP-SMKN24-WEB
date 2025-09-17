import React, { useState } from "react";

// Menerima prop 'onNavigate' dari komponen induk
function DashboardAsesi({ onNavigate }) {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="7"
              r="4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
            borderRadius: "15px",
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
            borderRadius: "15px",
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
            borderRadius: "15px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            fontSize: "13px",
            fontWeight: "600",
            color: "#333",
          }}
        >
          19 JUN 2025
        </div>
      </div>

      {/* Main Content - Separated Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        {/* Left Panel - Photo and Profile Cards */}
        <div
          style={{
            width: "220px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {/* Photo Upload Card - Separated */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "25px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "120px",
                height: "120px",
                backgroundColor: "#e8e8e8",
                borderRadius: "8px",
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                border: "1px solid #d0d0d0",
              }}
              onClick={() => document.getElementById("fileInput").click()}
            >
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleImageUpload}
              />
              {profileImage ? (
                <img
                  src={profileImage}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "6px",
                  }}
                  alt="Profile"
                />
              ) : (
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ opacity: "0.4" }}
                >
                  <path
                    d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="13"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>

            <p
              style={{
                fontSize: "12px",
                color: "#666",
                textAlign: "center",
                margin: "0",
                lineHeight: "1.3",
                fontWeight: "500",
              }}
            >
              Afdzal Ezhar Razona Pangestu
            </p>
          </div>

          {/* Address and Gender Info Card - Separated */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {/* Address section */}
            <div
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                padding: "12px",
                fontSize: "11px",
                color: "#666",
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginTop: "1px", opacity: "0.6", flexShrink: 0 }}
              >
                <path
                  d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <polyline
                  points="9,22 9,12 15,12 15,22"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span style={{ lineHeight: "1.4", fontSize: "10px" }}>
                Jalan TPI Berondong Kg PEC Jakarta Timur, DKI Jakarta
              </span>
            </div>

            {/* Gender section */}
            <div
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                padding: "12px",
                fontSize: "11px",
                color: "#666",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ opacity: "0.6" }}
              >
                <circle
                  cx="10"
                  cy="14"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="21"
                  y1="3"
                  x2="16"
                  y2="8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="18"
                  y1="3"
                  x2="21"
                  y2="3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="21"
                  y1="3"
                  x2="21"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span style={{ fontSize: "10px" }}>Laki-laki</span>
            </div>

            {/* Action button */}
            <button
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "15px",
                padding: "12px 20px",
                fontSize: "11px",
                cursor: "pointer",
                fontWeight: "600",
                marginTop: "8px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#45a049";
                e.target.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#4CAF50";
                e.target.style.transform = "translateY(0)";
              }}
            >
              Aksi
            </button>
          </div>
        </div>

        {/* Right Panel - Assessment Card */}
        <div
          style={{
            flex: 1,
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "25px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            height: "fit-content",
            minHeight: "400px",
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
              backgroundColor: "#2C94FF",
              borderRadius: "12px",
              padding: "18px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: "0 4px 12px rgba(44, 148, 255, 0.3)",
              marginBottom: "15px",
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
              onClick={() => onNavigate && onNavigate("APL.01")}
              style={{
                backgroundColor: "white",
                color: "#2C94FF",
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
              onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
            >
              Mulai
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAsesi;
