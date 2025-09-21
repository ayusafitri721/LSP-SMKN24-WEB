import React from "react";
import { useParams, useNavigate } from "react-router-dom";

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
  const { nis } = useParams();
  const navigate = useNavigate();

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
    return data[currentNis] || { name: "NAMA ASESI TIDAK DITEMUKAN", program: "-", kelas: "-", nisn: "-", email: "-" };
  };

  const asesi = getAsesiData(nis);

  return (
    <div
      style={{
        padding: "0",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
            style={{ width: "80px", height: "80px", borderRadius: "8px", objectFit: "contain", backgroundColor: "#f8f9fa", padding: "4px" }}
          />
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: "16px", fontWeight: "bold", margin: "0 0 5px 0", color: "#333" }}>REKOMENDASI</div>
          
        </div>
      </div>
     

      <div style={{ display: "flex", padding: "20px", gap: "20px" }}>
        {/* Kolom Kiri */}
        <div style={{ flex: 1, backgroundColor: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", display: "flex", flexDirection: "column", gap: "15px" }}>
          <div>
            <h3 style={{ fontSize: "16px", color: "#3b82f6", margin: "0 0 5px 0" }}>Nama Mata Uji Kompetensi:</h3>
            <p style={{ fontWeight: "bold", margin: 0 }}>USK RPL - Pemrograman Dasar</p>
          </div>
          <div>
            <h3 style={{ fontSize: "16px", color: "#3b82f6", margin: "0 0 5px 0" }}>Daftar Dokumen Sertifikasi</h3>
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
            <h3 style={{ fontSize: "16px", color: "#3b82f6", margin: "0 0 5px 0" }}>Data Diri</h3>
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
          <div style={{ backgroundColor: "#f3f4f6", padding: "15px", borderRadius: "8px" }}>
            <p style={{ margin: "5px 0" }}>
              <span style={{ fontWeight: "bold" }}>Program:</span> {asesi.program}
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
        <div style={{ flex: 1, backgroundColor: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <h3 style={{ fontSize: "18px", color: "#3b82f6", margin: "0 0 20px 0", textAlign: "center" }}>REKOMENDASI</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: "bold" }}>
              <input type="checkbox" /> Kompeten
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: "bold" }}>
              <input type="checkbox" /> Belum Kompeten
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
              onClick={() => {
                alert("Rekomendasi terkirim!");
                navigate(`/dashboard-asesor/dashboard-rpl`);
              }}
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rekomendasi;