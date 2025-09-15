import React, { useState } from "react";

function LihatApprovementAk01({ onBack, data, onNavigate }) {
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
            onClick={() => onNavigate && onNavigate("approvement/lihat")}
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
            onClick={() => onNavigate && onNavigate("approvement/APL-02/lihat")}
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
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
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
                  value={formData.namaJadwal}
                  onChange={(e) => handleInputChange("namaJadwal", e.target.value)}
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
                  value={formData.tuk}
                  onChange={(e) => handleInputChange("tuk", e.target.value)}
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
                  value={formData.tanggalUjian}
                  onChange={(e) => handleInputChange("tanggalUjian", e.target.value)}
                  style={{ ...inputStyle, width: "180px" }}
                />
              </div>
            </div>

            {/* Bagian Barcode Asesor & Asesi */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              {/* Barcode Asesor */}
              <div
                style={{
                  border: "2px dashed #ff8c42",
                  borderRadius: "12px",
                  padding: "12px",
                  textAlign: "center",
                  backgroundColor: "white",
                }}
              >
                <p style={{ fontWeight: "600", fontSize: "12px", marginBottom: "8px" }}>
                  Barcode Asesor
                </p>
                <div
                  style={{
                    height: "80px",
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    border: "1px solid #ddd"
                  }}
                >
                  <span style={{ fontSize: "11px", color: "#666" }}>
                    [Barcode Asesor]
                  </span>
                </div>
              </div>

              {/* Barcode Asesi */}
              <div
                style={{
                  border: "2px dashed #ff8c42",
                  borderRadius: "12px",
                  padding: "12px",
                  textAlign: "center",
                  backgroundColor: "white",
                }}
              >
                <p style={{ fontWeight: "600", fontSize: "12px", marginBottom: "8px" }}>
                  Barcode Asesi
                </p>
                <div
                  style={{
                    height: "80px",
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "8px",
                    border: "1px solid #ddd"
                  }}
                >
                  <span style={{ fontSize: "11px", color: "#666" }}>
                    [Barcode Asesi]
                  </span>
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
                <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
                  <input
                    type="checkbox"
                    checked={formData.buktiDikumpulkan.reviuProduk}
                    onChange={() => handleCheckboxChange("reviuProduk")}
                    style={{ transform: "scale(1.2)" }}
                  />
                  Hasil Reviu Produk
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
                  <input
                    type="checkbox"
                    checked={formData.buktiDikumpulkan.kegiatanTerstruktur}
                    onChange={() => handleCheckboxChange("kegiatanTerstruktur")}
                    style={{ transform: "scale(1.2)" }}
                  />
                  Hasil Kegiatan Terstruktur
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
                  <input
                    type="checkbox"
                    checked={formData.buktiDikumpulkan.pertanyaanTertulis}
                    onChange={() => handleCheckboxChange("pertanyaanTertulis")}
                    style={{ transform: "scale(1.2)" }}
                  />
                  Hasil Pertanyaan Tertulis
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
                  <input
                    type="checkbox"
                    checked={formData.buktiDikumpulkan.pertanyaanWawancara}
                    onChange={() => handleCheckboxChange("pertanyaanWawancara")}
                    style={{ transform: "scale(1.2)" }}
                  />
                  Hasil Pertanyaan Wawancara
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
                  <input
                    type="checkbox"
                    checked={formData.buktiDikumpulkan.verifikasiPortofolio}
                    onChange={() => handleCheckboxChange("verifikasiPortofolio")}
                    style={{ transform: "scale(1.2)" }}
                  />
                  Hasil Verifikasi Portofolio
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
                  <input
                    type="checkbox"
                    checked={formData.buktiDikumpulkan.observasiLangsung}
                    onChange={() => handleCheckboxChange("observasiLangsung")}
                    style={{ transform: "scale(1.2)" }}
                  />
                  Hasil Observasi Langsung
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
                  <input
                    type="checkbox"
                    checked={formData.buktiDikumpulkan.pertanyaanLisan}
                    onChange={() => handleCheckboxChange("pertanyaanLisan")}
                    style={{ transform: "scale(1.2)" }}
                  />
                  Hasil Pertanyaan Lisan
                </label>
                <label style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
                  <input
                    type="checkbox"
                    checked={formData.buktiDikumpulkan.lainnya}
                    onChange={() => handleCheckboxChange("lainnya")}
                    style={{ transform: "scale(1.2)" }}
                  />
                  Lainnya:
                  {formData.buktiDikumpulkan.lainnya && (
                    <input
                      type="text"
                      value={formData.buktiDikumpulkan.lainnyaText}
                      onChange={(e) => handleInputChange("lainnyaText", e.target.value)}
                      style={{ ...inputStyle, marginLeft: "6px", width: "100px" }}
                    />
                  )}
                </label>
              </div>
            </div>

            {/* Tanggal Pelaksanaan */}
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
            </div>

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