import React from "react";
import { useParams, useNavigate } from "react-router-dom";

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
      {/* Header dengan Latar Belakang */}
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundImage: "url('https://images.unsplash.com/photo-1549923746-c56781254884?fit=crop&w=1500')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "48px",
          fontWeight: "bold",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 127, 57, 0.7)",
          }}
        ></div>
        <span style={{ zIndex: 1 }}>MyLSP</span>
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundImage: "url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=facearea&facepad=2&w=256&h=256&q=80')",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      {/* Nama Asesi */}
      <div style={{ padding: "15px", backgroundColor: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)", textAlign: "center", fontWeight: "bold", color: "#4b5563" }}>
        {asesi.name}
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