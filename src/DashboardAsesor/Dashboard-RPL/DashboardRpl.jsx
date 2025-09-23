import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAssesment } from "../../context/AssesmentContext";

// Custom hook to detect screen size
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};
const getRekomendasiStyle = (rekomendasi) => {
  switch (rekomendasi) {
    case "selesai":
      return {
        backgroundColor: "#28a745",
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "11px",
        fontWeight: "500",
      };
    default:
      return {
        backgroundColor: "#ffc107",
        color: "white",
        padding: "4px 8px",
        borderRadius: "4px",
        fontSize: "11px",
        fontWeight: "500",
      };
  }
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const DashboardRpl = () => {
  const id = useParams().id;
  const { assesments, assesmentAsesis } = useAssesment();
  const randomColor = getRandomColor();
  console.log(assesmentAsesis);

  const selectedAssesment = assesments.find((a) => a.id.toString() === id);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");
  console.log("selectedAssesment", selectedAssesment);
  
  const selectedAsesi = assesmentAsesis.filter(
    (aa) => aa.assesment_id === selectedAssesment.id
  ); 
  console.log("selectedAsesi", selectedAsesi);

  const handleCardClick = (nis) => {
    navigate(`/dashboard-asesor/approved-unapproved/${nis}`);
  };

  if (!selectedAssesment) {
    return <p>Loading data asesmen...</p>;
  }

  return (
    <div
      style={{
        padding: isMobile ? "10px" : "20px",
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
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          marginBottom: "20px",
          textAlign: isMobile ? "center" : "left",
          gap: isMobile ? "20px" : "0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            flexDirection: isMobile ? "column" : "row",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: isMobile ? "50px" : "60px",
              height: isMobile ? "50px" : "60px",
              borderRadius: "50%",
              backgroundColor: "#3b82f6",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: isMobile ? "20px" : "24px",
              fontWeight: "bold",
            }}
          >
            {selectedAssesment?.assesor?.nama_lengkap?.split(" ")[0][0] || "A"}
          </div>
          <div>
            <h2
              style={{
                fontSize: isMobile ? "16px" : "18px",
                margin: "0",
                fontWeight: "600",
              }}
            >
              {selectedAssesment?.assesor?.nama_lengkap}
            </h2>
            <p
              style={{
                fontSize: isMobile ? "14px" : "16px",
                margin: "0",
                color: "#1f2937",
                fontWeight: "bold",
              }}
            >
              {selectedAssesment?.jurusan}{" "}
              {selectedAssesment?.schema?.judul_skema || "Skema Kompetensi"}
            </p>
            <div
              style={{
                fontSize: "14px",
                color: "#6b7280",
                marginTop: "5px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              <span>🗓️ {selectedAssesment?.tanggal_assesment}</span>
              <span style={{ margin: "0 5px" }}>•</span>
              <span>
                ⏰ {selectedAssesment?.tanggal_mulai?.split(" ")[1]} -{" "}
                {selectedAssesment?.tanggal_selesai?.split(" ")[1]}
              </span>
              <span style={{ margin: "0 5px" }}>•</span>
              <span>🏢 {selectedAssesment?.tuk}</span>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "25px",
            textAlign: "center",
            marginTop: isMobile ? "10px" : "0",
          }}
        >
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
              {assesmentAsesis.length}
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
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "20px",
          justifyContent: isMobile ? "center" : "flex-start",
        }}
      ></div>

      {/* Asesi Cards List */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          paddingBottom: "100px",
        }}
      >
        {selectedAsesi.map((asesi) => (
          <div
            key={(asesi.id)}
            onClick={() => handleCardClick(asesi.asesi.id)}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              gap: isMobile ? "10px" : "20px",
              cursor: "pointer",
              transition: "transform 0.2s, box-shadow 0.2s",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: randomColor,
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: "bold",
                order: isMobile ? "-1" : "0", // Ensures circle is always at the top on mobile
              }}
            >
              {asesi.asesi?.nama_lengkap?.split(" ")[0][0] || "N"}
            </div>
            <div
              style={{
                flexGrow: 1,
                width: "100%",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  margin: 0,
                  fontWeight: "600",
                }}
              >
                {asesi.asesi?.nama_lengkap || "Nama Asesi"}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  margin: "5px 0 10px 0",
                }}
              >
                ID: {asesi.asesi?.id || "ID Asesi"}
              </p>
            </div>
            <span style={getRekomendasiStyle(asesi.status)}>
              {asesi.status || "pending"}
            </span>

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
          ...(isMobile && {
            width: "90%",
            left: "5%",
            bottom: "10px",
            padding: "12px",
            fontSize: "14px",
          }),
        }}
        onClick={() => alert("Sesi penilaian selesai!")}
      >
        Finish
      </button>
    </div>
  );
};

export default DashboardRpl;
