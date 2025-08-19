import React from "react";

function AsesmenDiikuti({ onBack }) {
  return (
    // code sementara pada asesmendiikuti
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          color: "#1a1a1a",
          marginBottom: "20px",
        }}
      >
        Asesmen 
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#666",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        Riwayat asesmen yang telah Anda ikuti
      </p>
      <button
        onClick={onBack}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#ff6b35",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Kembali
      </button>
    </div>
  );
}

export default AsesmenDiikuti;