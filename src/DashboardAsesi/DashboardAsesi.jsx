import React from "react";

function DashboardAsesi() {
  return (
    <div
      style={{
        padding: "40px",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "30px" }}>Dashboard Asesi</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Profil Saya</h3>
          <p style={{ color: "#666" }}>Kelola informasi profil</p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Sertifikasi Saya</h3>
          <p style={{ color: "#666" }}>Lihat status sertifikasi</p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Jadwal Uji</h3>
          <p style={{ color: "#666" }}>Lihat jadwal asesmen</p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3>Hasil Asesmen</h3>
          <p style={{ color: "#666" }}>Cek hasil penilaian</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardAsesi;
