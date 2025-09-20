import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardRpl = () => {
  const navigate = useNavigate();

  const asesiData = [
    {
      initials: "AE",
      nama: "Afdhal Ezhar Rahma Pangestu",
      nis: "08939239239",
      waktuMulai: "09:00",
      waktuSelesai: "-",
      progres: "AK.01",
      persentase: 88,
      statusColor: "#10b981",
    },
    {
      initials: "AS",
      nama: "Alzahrhan Shafwan Alamsyah",
      nis: "08939239240",
      waktuMulai: "09:00",
      waktuSelesai: "-",
      progres: "AK.01",
      persentase: 90,
      statusColor: "#ef4444",
    },
    {
      initials: "AF",
      nama: "Angger Firlana",
      nis: "08939239241",
      waktuMulai: "09:00",
      waktuSelesai: "-",
      progres: "AK.01",
      persentase: 94,
      statusColor: "#6b7280",
    },
    {
      initials: "AZ",
      nama: "Azka Ghalib Abdab",
      nis: "08939239242",
      waktuMulai: "09:00",
      waktuSelesai: "-",
      progres: "AK.01",
      persentase: 88,
      statusColor: "#10b981",
    },
  ];

  // Fungsi untuk menavigasi ke halaman ApprovedUnapproved
  const handleCardClick = (nis) => {
    navigate(`/dashboard-asesor/approved-unapproved/${nis}`);
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        position: "relative",
      }}
    >
      {/* Top Header Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#3b82f6",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            AA
          </div>
          <div>
            <h2 style={{ fontSize: "18px", margin: "0", fontWeight: "600" }}>
              Prof. Arul, M.Kom
            </h2>
            <p
              style={{
                fontSize: "16px",
                margin: "0",
                color: "#1f2937",
                fontWeight: "bold",
              }}
            >
              USK RPL – Pemrograman Dasar
            </p>
            <div
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginTop: "5px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <span style={{ fontSize: "16px" }}>🗓️</span>
              <span>Selasa, 21 Oktober 2025</span>
              <span style={{ margin: "0 5px" }}>•</span>
              <span style={{ fontSize: "16px" }}>⏰</span>
              <span>09:00 - 15:00</span>
              <span style={{ margin: "0 5px" }}>•</span>
              <span style={{ fontSize: "16px" }}>🏢</span>
              <span>Lab 1</span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "25px", textAlign: "right" }}>
          <div>
            <h3
              style={{
                fontSize: "14px",
                color: "#6b7280",
                margin: "0 0 5px 0",
              }}
            >
              Jumlah Asesi
            </h3>
            <p style={{ fontSize: "24px", margin: 0, fontWeight: "bold" }}>
              {asesiData.length}
            </p>
          </div>
          <div>
            <h3
              style={{
                fontSize: "14px",
                color: "#6b7280",
                margin: "0 0 5px 0",
              }}
            >
              36 Siswa/i
            </h3>
          </div>
        </div>
      </div>

      {/* Status Indicators */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
          justifyContent: "flex-start",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#10b981",
            }}
          ></div>
          <span style={{ fontSize: "14px", color: "#4b5563" }}>Hadir: 15</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#ef4444",
            }}
          ></div>
          <span style={{ fontSize: "14px", color: "#4b5563" }}>
            Tidak Hadir: 2
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#6b7280",
            }}
          ></div>
          <span style={{ fontSize: "14px", color: "#4b5563" }}>Pending: 1</span>
        </div>
      </div>

      {/* Asesi Cards List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          paddingBottom: "100px",
        }}
      >
        {asesiData.map((asesi) => (
          <div
            key={asesi.nis}
            onClick={() => handleCardClick(asesi.nis)}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              ":hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
              },
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: `#${Math.floor(
                  Math.random() * 16777215
                ).toString(16)}`,
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              {asesi.initials}
            </div>
            <div style={{ flexGrow: 1 }}>
              <h3 style={{ fontSize: "18px", margin: 0, fontWeight: "600" }}>
                {asesi.nama}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  margin: "5px 0 10px 0",
                }}
              >
                NIS: {asesi.nis}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                  color: "#4b5563",
                }}
              >
                <span>Waktu Mulai: {asesi.waktuMulai}</span>
                <span>•</span>
                <span>Waktu Selesai: {asesi.waktuSelesai}</span>
                <span>•</span>
                <span>Progres saat ini: {asesi.progres}</span>
              </div>
            </div>
            <div style={{ width: "200px", marginRight: "20px" }}>
              <div
                style={{
                  height: "8px",
                  borderRadius: "4px",
                  backgroundColor: "#e5e7eb",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${asesi.persentase}%`,
                    backgroundColor: "#3b82f6",
                    borderRadius: "4px",
                  }}
                ></div>
              </div>
              <p
                style={{
                  fontSize: "12px",
                  textAlign: "right",
                  margin: "5px 0 0 0",
                  color: "#6b7280",
                }}
              >
                {asesi.persentase}%
              </p>
            </div>
            <div
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                backgroundColor: asesi.statusColor,
                flexShrink: 0,
              }}
            ></div>
          </div>
        ))}
      </div>
      {/* Finish Button at the bottom */}
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "12px",
          padding: "15px 30px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(59, 130, 246, 0.3)",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "translateY(-2px)")}
        onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
        onClick={() => alert("Sesi penilaian selesai!")}
      >
        Finish
      </button>
    </div>
  );
};

export default DashboardRpl;
