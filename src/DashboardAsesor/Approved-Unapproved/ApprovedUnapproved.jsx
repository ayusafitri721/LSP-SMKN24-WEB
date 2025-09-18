import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ApprovedUnapproved = () => {
  const { nis } = useParams();
  const navigate = useNavigate();

  // Dummy data for the assessment forms
  const formulirData = [
    { code: "FR.APL.02", title: "ASESMEN MANDIRI" },
    { code: "FR.AK.01", title: "PERSETUJUAN ASESMEN DAN KERAHASIAAN" },
    { code: "FR.IA.01.CL", title: "CEKLIS OBSERVASI AKTIVITAS DI TEMPAT KERJA/SIMULASI" },
    { code: "FR.IA.06.C", title: "LEMBAR JAWABAN TERTULIS ESAI" },
    { code: "FR.IA.09", title: "WAWANCARA" },
    { code: "FR.AK.02", title: "REKAMAN ASESMEN KOMPETENSI" },
    { code: "FR.AK.05", title: "LAPORAN ASESMEN" },
  ];

  // Dummy function to get the asesi's name based on their NIS
  const getAsesiName = (currentNis) => {
    const data = {
      "08939239239": "AFDHAL EZHAR RAHMA PANGESTU",
      "08939239240": "ALZAHRAN SHAFWAN ALAMSYAH",
      "08939239241": "ANGGER FIRLANA",
      "08939239242": "AZKA GHALIB ABDAB",
    };
    return data[currentNis] || "NAMA ASESI TIDAK DITEMUKAN";
  };

  const asesiName = getAsesiName(nis);

  return (
    <div
      style={{
        padding: "0",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Header Utama dengan Latar Belakang */}
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

      {/* Header Nama Asesi dan Tombol */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          padding: "15px 20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontSize: "16px", fontWeight: "600", margin: 0 }}>
          {asesiName}
        </h2>
        {/* Ubah navigasi tombol "Rekomendasikan" */}
        <button
          style={{
            backgroundColor: "#f97316",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/dashboard-asesor/rekomendasi/${nis}`)}
        >
          Rekomendasikan
        </button>
      </div>

      {/* Daftar Formulir Penilaian */}
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        {formulirData.map((formulir, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#1f2937",
                  margin: 0,
                }}
              >
                {formulir.code}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  margin: "5px 0 0 0",
                }}
              >
                {formulir.title}
              </p>
              <p style={{ fontSize: "12px", color: "#6b7280", margin: "5px 0 0 0" }}>
                NIS: {nis}
              </p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                style={{
                  backgroundColor: "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
                onClick={() => alert(`Anda menyetujui formulir ${formulir.code}`)}
              >
                Approve
              </button>
              <button
                style={{
                  backgroundColor: "#ef4444",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  padding: "10px 20px",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
                onClick={() => alert(`Anda tidak menyetujui formulir ${formulir.code}`)}
              >
                Unapprove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApprovedUnapproved;