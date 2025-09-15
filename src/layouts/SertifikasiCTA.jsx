import React from "react";

function SertifikasiCTA({ goToRegister, goToDashboard }) {
  return (
    <div style={{ padding: "60px 40px", textAlign: "center" }}>
      <h2 style={{ fontSize: "36px", color: "#333", marginBottom: "20px" }}>
        Lembaga Sertifikasi Profesi
      </h2>
      <p style={{ fontSize: "18px", color: "#666", maxWidth: "800px", margin: "0 auto 30px auto" }}>
        Kami berkomitmen untuk memberikan sertifikasi kompetensi profesional yang berkualitas tinggi.
      </p>

      <button
        onClick={goToDashboard}
        style={{
          padding: "15px 30px",
          backgroundColor: "#f97316",
          color: "white",
          border: "none",
          borderRadius: "25px",
          fontSize: "18px",
          fontWeight: "600",
          cursor: "pointer",
          marginRight: "20px",
        }}
      >
        Mulai Sertifikasi
      </button>

      <button
        onClick={goToRegister}
        style={{
          padding: "15px 30px",
          backgroundColor: "#2C94FF",
          color: "white",
          border: "none",
          borderRadius: "25px",
          fontSize: "18px",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Register
      </button>
    </div>
  );
}

export default SertifikasiCTA;
