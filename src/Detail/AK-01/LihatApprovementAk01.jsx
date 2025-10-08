import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"; // if not already in your project scope
import { api } from "../../api/api";

function LihatApprovementAk01({ onBack, data, onNavigate }) {
  const id = useParams();
  const { data: ak01, isLoading, isError, error } = useQuery({
    queryKey: ["ak01"],
    queryFn: () => api.get("/ak01/asesi/all").then((res) => res.data?.data ?? res.data),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 60 * 60 * 1000,
  });
  
  const filteredData = ak01?.find(
    (item) => item?.assesment_asesi?.assesi?.user_id === parseInt(id.id)
  );
  const assesment = filteredData?.assesment_asesi?.assesment;
  const buktiDescriptions =
  filteredData?.attachments?.map((att) => att.description).filter(Boolean) ?? [];
  const [formData, setFormData] = useState({
    namaJadwal: "",
    tuk: "",
    tanggalUjian: "",
    buktiDikumpulkan: {
      reviuProduk: false,
      kegiatanTerstruktur: false,
      pertanyaanTertulis: false,
      pertanyaanWawancara: false,
      verifikasiPortofolio: false,
      observasiLangsung: false,
      pertanyaanLisan: false,
      lainnya: false,
      lainnyaText: ""
    },
    tanggalPelaksanaan: {
      tanggal: "",
      waktu: "",
      tukPelaksanaan: ""
    }
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field) => {
    setFormData(prev => ({
      ...prev,
      buktiDikumpulkan: {
        ...prev.buktiDikumpulkan,
        [field]: !prev.buktiDikumpulkan[field]
      }
    }));
  };

  const handleTanggalChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      tanggalPelaksanaan: {
        ...prev.tanggalPelaksanaan,
        [field]: value
      }
    }));
  };
    if (isLoading) return <p>Loading data...</p>;
    if (isError) return <p>Error: {error.message}</p>;

  const inputStyle = {
    width: "100%",
    padding: "4px 6px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "12px",
  };

  const labelStyle = {
    fontSize: "12px",
    fontWeight: "400",
    color: "#333",
    minWidth: "100px",
    display: "inline-block",
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "20px",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
   {/* Header with back + nav buttons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          justifyContent: "flex-start", // Changed from space-between
          gap: "20px", // Added gap between back button and tabs
        }}
      >
        {/* Tombol Back */}
        <button
          onClick={onBack}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#666"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Navigation Tabs - Now positioned next to back button */}
        <div
          style={{
            display: "flex",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          <button
            onClick={() => onNavigate && onNavigate(`approvement/lihat/${id.id}`)}
            style={{
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "transparent",
              color: "#666",
              cursor: "pointer",
              transition: "all 0.2s ease",
              margin: "4px",
              borderRadius: "8px",
            }}
          >
            FR.APL.01
          </button>
          <button
            onClick={() => onNavigate && onNavigate(`approvement/APL-02/lihat/${id.id}`)}
            style={{
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "transparent",
              color: "#666",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              margin: "4px",
            }}
          >
            FR.APL.02
          </button>
          <button
            style={{
              padding: "12px 20px",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "#ff6b35",
              color: "white",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.2s ease",
              margin: "4px",
            }}
          >
            FR.AK.01
          </button>
        </div>
      </div>
      
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {/* Content - 2 Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "380px 1fr",
            gap: "0",
            minHeight: "600px",
          }}
        >
          {/* Kolom Kiri - Form Data */}
          <div
            style={{
              backgroundColor: "#f8f9fa",
              padding: "16px",
              borderRight: "1px solid #ddd",
            }}
          >
            {/* Data Jadwal Section */}
            <div
              style={{
                border: "1.5px solid #ff8c42",
                borderRadius: "10px",
                padding: "12px",
                marginBottom: "16px",
                backgroundColor: "white",
              }}
            >
              <div
                style={{
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label style={labelStyle}>Nama Jadwal</label>
                <span style={{ margin: "0 6px" }}>:</span>
                <input
                  type="text"
                  value={assesment?.skema?.judul_skema ?? formData.namaJadwal}
                  onChange={(e) => handleInputChange("namaJadwal", e.target.value)}
                  disabled={!!assesment}
                  style={{ ...inputStyle, width: "180px" }}
                />
              </div>

              <div
                style={{
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label style={labelStyle}>TUK</label>
                <span style={{ margin: "0 6px" }}>:</span>
                <input
                  type="text"
                  value={assesment?.tuk ?? formData.tuk}
                  onChange={(e) => handleInputChange("tuk", e.target.value)}
                  disabled={!!assesment}
                  style={{ ...inputStyle, width: "180px" }}
                />
              </div>

              <div
                style={{
                  marginBottom: "8px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <label style={labelStyle}>Tanggal Ujian</label>
                <span style={{ margin: "0 6px" }}>:</span>
                <input
                  type="text"
                  value={assesment?.tanggal_assesment ?? formData.tanggalUjian}
                  onChange={(e) => handleInputChange("tanggalUjian", e.target.value)}
                  disabled={!!assesment}
                  style={{ ...inputStyle, width: "180px" }}
                />
              </div>
            </div>

            {/* Bagian Status Approval Asesor & Asesi */}
            <div
              style={{
                marginTop: "auto",
                display: "flex",
                gap: "12px",
                flexDirection: "column",
              }}
            >
              {/* Status Asesor */}
              <div
                style={{
                  border: "2px dashed #ff8c42",
                  borderRadius: "12px",
                  padding: "12px",
                  textAlign: "center",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <p style={{ fontWeight: 600, fontSize: "13px", margin: 0 }}>Status Asesor</p>
                <div
                  style={{
                    border: "2px dashed rgb(0, 0, 0)",
                    width: "100%",
                    maxWidth: "200px",
                    padding: "10px 0",
                    borderRadius: "8px",
                    fontWeight: 600,
                    color: "black"
                  }}
                >{filteredData?.ttd_assesor == 1 ? "Approved" : "Pending"}
                </div>
              </div>

              {/* Status Asesi */}
              <div
                style={{
                  border: "2px dashed #ff8c42",
                  borderRadius: "12px",
                  padding: "12px",
                  textAlign: "center",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <p style={{ fontWeight: 600, fontSize: "13px", margin: 0 }}>Status Asesi</p>
                <div
                  style={{
                    border: "2px dashed rgb(0, 0, 0)",
                    width: "100%",
                    maxWidth: "200px",
                    padding: "10px 0",
                    borderRadius: "8px",
                    fontWeight: 600,
                    color: "black",
                  }}
                >{filteredData?.ttd_asesi == 1 ? "Approved" : "Pending"}
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan - Bukti dan Pernyataan */}
          <div style={{ padding: "16px", overflowY: "auto" }}>
            {/* Checklist Bukti */}
            <div
              style={{
                border: "1.5px solid #ff8c42",
                borderRadius: "10px",
                padding: "12px",
                marginBottom: "16px",
                backgroundColor: "white",
              }}
            >
              <h2 style={{ fontWeight: "600", fontSize: "14px", marginBottom: "12px" }}>
                Bukti Yang Dikumpulkan:
              </h2>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {buktiDescriptions.length > 0 ? (
                  buktiDescriptions.map((desc, i) => (
                    <label
                      key={`bukti-${i}`}
                      style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}
                    >
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        disabled
                        style={{ transform: "scale(1.2)" }}
                      />
                      {desc}
                    </label>
                  ))
                ) : (
                  <span style={{ fontSize: "12px", color: "#666" }}>Tidak ada bukti terlampir</span>
                )}
              </div>
            </div>

            {/* Tanggal Pelaksanaan */}
            {/* <div
              style={{
                border: "1.5px solid #ff8c42",
                borderRadius: "10px",
                padding: "12px",
                marginBottom: "16px",
                backgroundColor: "white",
              }}
            >
              <h2 style={{ fontWeight: "600", fontSize: "14px", marginBottom: "12px" }}>
                Tanggal Pelaksanaan:
              </h2>
              <div style={{ display: "grid", gap: "8px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ ...labelStyle, minWidth: "70px" }}>Tanggal:</label>
                  <input
                    type="text"
                    value={formData.tanggalPelaksanaan.tanggal}
                    onChange={(e) => handleTanggalChange("tanggal", e.target.value)}
                    style={{ ...inputStyle, width: "200px" }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ ...labelStyle, minWidth: "70px" }}>Waktu:</label>
                  <input
                    type="text"
                    value={formData.tanggalPelaksanaan.waktu}
                    onChange={(e) => handleTanggalChange("waktu", e.target.value)}
                    style={{ ...inputStyle, width: "200px" }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label style={{ ...labelStyle, minWidth: "70px" }}>TUK:</label>
                  <input
                    type="text"
                    value={formData.tanggalPelaksanaan.tukPelaksanaan}
                    onChange={(e) => handleTanggalChange("tukPelaksanaan", e.target.value)}
                    style={{ ...inputStyle, width: "200px" }}
                  />
                </div>
              </div>
            </div> */}

            {/* Pernyataan */}
            <div
              style={{
                border: "1.5px solid #ff8c42",
                borderRadius: "10px",
                padding: "12px",
                backgroundColor: "white",
              }}
            >
              <div style={{ marginBottom: "12px" }}>
                <p style={{ fontWeight: "600", fontSize: "12px", marginBottom: "4px" }}>Asesi:</p>
                <p style={{ fontSize: "12px", lineHeight: "1.4" }}>
                  Bahwa saya telah mendapatkan penjelasan terkait hak dan prosedur banding asesmen dari asesor
                </p>
              </div>
              <div style={{ marginBottom: "12px" }}>
                <p style={{ fontWeight: "600", fontSize: "12px", marginBottom: "4px" }}>Asesor:</p>
                <p style={{ fontSize: "12px", lineHeight: "1.4" }}>
                  Menyatakan tidak akan membuka hasil pekerjaan yang saya peroleh karena penugasan saya sebagai Asesor dalam pekerjaan Asesmen kepada siapapun atau organisasi apapun selain kepada pihak yang berwenang sehubungan dengan kewajiban saya sebagai Asesor yang ditugaskan oleh LSP
                </p>
              </div>
              <div>
                <p style={{ fontWeight: "600", fontSize: "12px", marginBottom: "4px" }}>Asesi:</p>
                <p style={{ fontSize: "12px", lineHeight: "1.4" }}>
                  Saya setuju mengikuti asesmen dengan pemahaman bahwa informasi yang dikumpulkan hanya digunakan untuk pengembangan profesional dan hanya dapat diakses oleh orang tertentu saja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LihatApprovementAk01;