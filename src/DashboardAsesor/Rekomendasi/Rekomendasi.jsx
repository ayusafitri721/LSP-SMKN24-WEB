import React, { useState } from "react";

const headerSectionStyle = {
  backgroundImage:
    "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "0 0 40px 40px",
  overflow: "hidden",
  marginBottom: "0",
  padding: "20px 0",
};

const logoContainerStyle = {
  height: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "20px",
  marginBottom: "20px",
};

const logoTextStyle = {
  color: "white",
  fontSize: "56px",
  fontWeight: "bold",
  margin: 0,
  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  letterSpacing: "1px",
};

const Rekomendasi = () => {
  // Mock data - in real app these would come from useParams() and useNavigate()
  const nis = "08939239239";
  const [showNotification, setShowNotification] = useState(false);
  const [selectedRecommendation, setSelectedRecommendation] = useState("");

  // Dummy function to get asesi data based on NIS
  const getAsesiData = (currentNis) => {
    const data = {
      "08939239239": {
        name: "AFDHAL EZHAR RAHMA PANGESTU",
        program: "Rekayasa Perangkat Lunak",
        kelas: "11",
        nisn: "076231233",
        email: "afdhal322@gmail.com",
      },
      "08939239240": {
        name: "ALZAHRAN SHAFWAN ALAMSYAH",
        program: "Rekayasa Perangkat Lunak",
        kelas: "11",
        nisn: "076231234",
        email: "alzahrans@gmail.com",
      },
    };
    return (
      data[currentNis] || {
        name: "NAMA ASESI TIDAK DITEMUKAN",
        program: "-",
        kelas: "-",
        nisn: "-",
        email: "-",
      }
    );
  };

  const asesi = getAsesiData(nis);

  const handleRecommendationChange = (value) => {
    setSelectedRecommendation(value);
  };

  const handleKirimClick = () => {
    if (!selectedRecommendation) {
      alert("Silakan pilih rekomendasi terlebih dahulu!");
      return;
    }
    setShowNotification(true);
  };

  const handleOkeClick = () => {
    setShowNotification(false);
    // Redirect to dashboard asesor
    window.location.href =
      "http://localhost:5173/dashboard-asesor/dashboard-rpl";
  };

  return (
    <div
      style={{
        padding: "0",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        position: "relative",
      }}
    >
      {/* Header Section ala Wawancara.jsx */}
      <div style={headerSectionStyle}>
        <div style={logoContainerStyle}>
          <h1 style={logoTextStyle}>MyLSP</h1>
        </div>
      </div>

      {/* Box Judul dan Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "15px 20px",
          backgroundColor: "white",
          margin: "0 20px",
          border: "1px solid #dee2e6",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          borderBottom: "2px solid #FF8C00",
        }}
      >
        <div style={{ flexShrink: 0 }}>
          <img
            src="/src/img/image 12.png"
            alt="LSP Logo"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "8px",
              objectFit: "contain",
              backgroundColor: "#f8f9fa",
              padding: "4px",
            }}
          />
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              margin: "0 0 5px 0",
              color: "#333",
            }}
          >
            REKOMENDASI
          </div>
        </div>
      </div>

      <div style={{ display: "flex", padding: "20px", gap: "20px" }}>
        {/* Kolom Kiri */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "16px",
                color: "#3b82f6",
                margin: "0 0 5px 0",
              }}
            >
              Nama Mata Uji Kompetensi:
            </h3>
            <p style={{ fontWeight: "bold", margin: 0 }}>
              USK RPL - Pemrograman Dasar
            </p>
          </div>
          <div>
            <h3
              style={{
                fontSize: "16px",
                color: "#3b82f6",
                margin: "0 0 5px 0",
              }}
            >
              Daftar Dokumen Sertifikasi
            </h3>
            <button
              style={{
                backgroundColor: "#f97316",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "8px 16px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Lengkap
            </button>
          </div>
          <div>
            <h3
              style={{
                fontSize: "16px",
                color: "#3b82f6",
                margin: "0 0 5px 0",
              }}
            >
              Data Diri
            </h3>
            <button
              style={{
                backgroundColor: "#f97316",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "8px 16px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Lengkap
            </button>
          </div>
          {/* Box data diri */}
          <div
            style={{
              backgroundColor: "#f3f4f6",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <p style={{ margin: "5px 0" }}>
              <span style={{ fontWeight: "bold" }}>Program:</span>{" "}
              {asesi.program}
            </p>
            <p style={{ margin: "5px 0" }}>
              <span style={{ fontWeight: "bold" }}>Kelas:</span> {asesi.kelas}
            </p>
            <p style={{ margin: "5px 0" }}>
              <span style={{ fontWeight: "bold" }}>NISN:</span> {asesi.nisn}
            </p>
            <p style={{ margin: "5px 0" }}>
              <span style={{ fontWeight: "bold" }}>Email:</span> {asesi.email}
            </p>
          </div>
        </div>

        {/* Kolom Kanan */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              color: "#3b82f6",
              margin: "0 0 20px 0",
              textAlign: "center",
            }}
          >
            REKOMENDASI
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontWeight: "bold",
              }}
            >
              <input
                type="checkbox"
                checked={selectedRecommendation === "kompeten"}
                onChange={() =>
                  handleRecommendationChange(
                    selectedRecommendation === "kompeten" ? "" : "kompeten"
                  )
                }
              />
              Kompeten
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontWeight: "bold",
              }}
            >
              <input
                type="checkbox"
                checked={selectedRecommendation === "belum kompeten"}
                onChange={() =>
                  handleRecommendationChange(
                    selectedRecommendation === "belum kompeten"
                      ? ""
                      : "belum kompeten"
                  )
                }
              />
              Belum Kompeten
            </label>
          </div>
          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <button
              style={{
                backgroundColor: "#f97316",
                color: "white",
                border: "none",
                borderRadius: "8px",
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
              }}
              onClick={handleKirimClick}
            >
              Kirim
            </button>
          </div>
        </div>
      </div>

      {/* Notification Modal */}
      {showNotification && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "25px",
              minWidth: "420px",
              maxWidth: "500px",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "15px",
                textAlign: "left",
              }}
            >
              {/* Icon */}
              <div style={{ flexShrink: 0, marginTop: "5px" }}>
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#FF8C00",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                {/* Title */}
                <div style={{ marginBottom: "15px" }}>
                  <h2
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#333",
                      margin: "0 0 5px 0",
                      lineHeight: "1.2",
                    }}
                  >
                    ANDA MEREKOMENDASIKAN ASESI
                  </h2>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#FF8C00",
                      margin: "0",
                      lineHeight: "1.2",
                    }}
                  >
                    INI DENGAN STATUS "{selectedRecommendation.toUpperCase()}"
                  </h3>
                </div>

                {/* Divider Line */}
                <div
                  style={{
                    height: "1px",
                    backgroundColor: "#e5e5e5",
                    margin: "15px 0",
                  }}
                ></div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    margin: "0 0 20px 0",
                    lineHeight: "1.4",
                  }}
                >
                  Anda merekomendasikan asesi ini berdasarkan assesment yang
                  telah dilakukan secara adil dan berintegritas.
                </p>

                {/* Button - aligned to right */}
                <div style={{ textAlign: "right" }}>
                  <button
                    onClick={handleOkeClick}
                    style={{
                      backgroundColor: "#FF8C00",
                      color: "white",
                      border: "none",
                      borderRadius: "34px",
                      padding: "10px 30px",
                      fontSize: "14px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      minWidth: "80px",
                    }}
                  >
                    Oke
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rekomendasi;
