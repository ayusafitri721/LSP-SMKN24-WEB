import React, { useState } from "react";

function LihatApprovement02({ onBack, data }) {
  const [formData, setFormData] = useState({
    judulUnit: "",
    kodeUnit: "",
    namaLengkap: "",
    nik: "",
    ttl: "",
    jenisKelamin: "Laki-laki",
    kewarganegaraan: "",
    alamatRumah: "",
    noTelepon: "",
    kualifikasiPendidikan: "",
    namaInstitusi: "",
    jabatan: "",
    alamatKantor: "",
    noTeleponKantor: "",
    unitKompetensi: [
      {
        kriteria:
          "1 Menjelaskan komunikasi di tempat kerja sesuai untuk kerja secara komunikasi",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria:
          "1.1 Mengidentifikasi komunikasi dengan pelanggan internal dan eksternal sesuai dengan standar, sopan dan ramah",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria:
          "1.2 Menggunakan bahasa dengan informasi yang tepat dan jelas alami",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria:
          "1.3 Menggunakan bahasa tubuh secara alami / natural tidak dapat ditafsir",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria:
          "1.4 Menggunakan ekspektasi terhadap pengalaman budaya dan sosial",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria:
          "1.5 Menggunakan suara dengan baik dan jarak yang efektif secara alami",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria:
          "1.6 Menerapkan gaya yang fleksibel dan menggunakan bahasa jelas dari pelaksanaan pembelajaran",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria:
          "Elemen 2: Memberikan bantuan untuk pelanggan internal dan eksternal",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria:
          "2.1 Mengidentifikasi kebutuhan dan harapan pelanggan agar dapat diberikan layanan secara prima",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria:
          "2.2 Melakukan komunikasi secara ramah, sopan dan mengonformasikan pengetahuan tentang produk dengan tepat",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria:
          "2.3 Menyelesaikan setiap pertanyaan pelanggan yang dibebankan dengan kesadaran yang disesuaikan",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria:
          "2.4 Mengidentifikasi kesempatan untuk pengembangan dan melakukan suatu tindakan yang menguntungkan pelanggan",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria:
          "2.5 Menyelesaikan layanan kepada pelanggan secara positif, ramah dan sopan",
        dapatkah: false,
        bukti: false,
      },
    ],
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (index, field) => {
    const newKompetensi = [...formData.unitKompetensi];
    newKompetensi[index] = {
      ...newKompetensi[index],
      [field]: !newKompetensi[index][field],
    };
    setFormData((prev) => ({ ...prev, unitKompetensi: newKompetensi }));
  };

  const inputStyle = {
    width: "100%",
    padding: "4px 6px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "12px",
    backgroundColor: "white",
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
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 20px",
            borderBottom: "1px solid #eee",
          }}
        >
          <button
            onClick={onBack}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#666"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        </div>

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
            {/* Data Unit Section */}
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
                <label style={labelStyle}>Judul Unit</label>
                <span style={{ margin: "0 6px" }}>:</span>
                <input
                  type="text"
                  value={formData.judulUnit}
                  onChange={(e) =>
                    handleInputChange("judulUnit", e.target.value)
                  }
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
                <label style={labelStyle}>Kode Unit</label>
                <span style={{ margin: "0 6px" }}>:</span>
                <input
                  type="text"
                  value={formData.kodeUnit}
                  onChange={(e) =>
                    handleInputChange("kodeUnit", e.target.value)
                  }
                  style={{ ...inputStyle, width: "180px" }}
                />
              </div>
            </div>
          </div>

          {/* Kolom Kanan - Patokan Asesmen */}
          <div style={{ padding: "16px" }}>
            {/* Header Patokan Asesmen Mandiri */}
            <div
              style={{
                backgroundColor: "#ff8c42",
                color: "white",
                padding: "10px",
                fontSize: "15px",
                fontWeight: "600",
                textAlign: "center",
                marginBottom: "12px",
                borderRadius: "12px",
              }}
            >
              Patokan Asesmen Mandiri
            </div>

            {/* Instruksi */}
            <div
              style={{
                backgroundColor: "#fff3cd",
                border: "1px solid #ffeaa7",
                borderRadius: "12px",
                padding: "10px",
                marginBottom: "16px",
                fontSize: "11px",
                lineHeight: "1.4",
              }}
            >
              <strong>Instruksi:</strong>
              <ul style={{ margin: "6px 0 0 14px", padding: 0 }}>
                <li>Baca setiap pernyataan di kolom sebelah kiri</li>
                <li>
                  Beri tanda centang (✓) pada kotak jika Anda yakin dapat
                  melakukan tugas yang dijelaskan
                </li>
                <li>
                  Isi kolom di sebelah kanan dengan menceritakan bukti yang Anda
                  miliki untuk menunjukkan bahwa Anda melakukan tugas ini
                </li>
              </ul>
            </div>

            {/* Unit Kompetensi */}
            <div
              style={{
                backgroundColor: "#ff8c42",
                color: "white",
                padding: "10px",
                fontSize: "13px",
                fontWeight: "600",
                textAlign: "center",
                marginBottom: "12px",
                borderRadius: "12px",
              }}
            >
              Unit Kompetensi 1
              <br />
              <br />
              QR.CHO1.001.01
              <br />
              Memberikan Layanan Secara Prima Kepada Pelanggan (Customer Care)
            </div>

            {/* Tabel Kompetensi */}
            <table
              style={{
                width: "100%",
                borderCollapse: "separate",
                borderSpacing: 0,
                fontSize: "11px",
                border: "2px solid #ff8c42",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#fff3cd" }}>
                  <th
                    style={{
                      border: "1px solid #ff8c42",
                      padding: "6px",
                      textAlign: "center",
                      width: "50%",
                      fontWeight: "600",
                      fontSize: "11px",
                    }}
                  >
                    Dapatkah Saya?
                  </th>
                  <th
                    style={{
                      border: "1px solid #ff8c42",
                      padding: "6px",
                      textAlign: "center",
                      width: "8%",
                      fontWeight: "600",
                      fontSize: "11px",
                    }}
                  >
                    K
                  </th>
                  <th
                    style={{
                      border: "1px solid #ff8c42",
                      padding: "6px",
                      textAlign: "center",
                      width: "8%",
                      fontWeight: "600",
                      fontSize: "11px",
                    }}
                  >
                    BK
                  </th>
                  <th
                    style={{
                      border: "1px solid #ff8c42",
                      padding: "6px",
                      textAlign: "center",
                      width: "34%",
                      fontWeight: "600",
                      fontSize: "11px",
                    }}
                  >
                    Bukti yang relevan
                  </th>
                </tr>
              </thead>
              <tbody>
                {formData.unitKompetensi.map((item, index) => (
                  <tr key={index}>
                    <td
                      style={{
                        border: "1px solid #ff8c42",
                        padding: "6px",
                        fontSize: "10px",
                        lineHeight: "1.3",
                        fontWeight:
                          index === 0 || index === 7 ? "600" : "normal",
                        backgroundColor:
                          index === 0 || index === 7 ? "#f8f9fa" : "white",
                      }}
                    >
                      {item.kriteria}
                    </td>
                    <td
                      style={{
                        border: "1px solid #ff8c42",
                        padding: "6px",
                        textAlign: "center",
                      }}
                    >
                      {index !== 0 && index !== 7 && (
                        <input
                          type="checkbox"
                          checked={item.dapatkah}
                          onChange={() =>
                            handleCheckboxChange(index, "dapatkah")
                          }
                          style={{ transform: "scale(1.0)" }}
                        />
                      )}
                    </td>
                    <td
                      style={{
                        border: "1px solid #ff8c42",
                        padding: "6px",
                        textAlign: "center",
                      }}
                    >
                      {index !== 0 && index !== 7 && (
                        <input
                          type="checkbox"
                          checked={item.bukti}
                          onChange={() => handleCheckboxChange(index, "bukti")}
                          style={{ transform: "scale(1.0)" }}
                        />
                      )}
                    </td>
                    <td
                      style={{
                        border: "1px solid #ff8c42",
                        padding: "6px",
                      }}
                    >
                      {index !== 0 && index !== 7 && (
                        <input
                          type="text"
                          style={{
                            width: "100%",
                            border: "none",
                            background: "transparent",
                            fontSize: "10px",
                            padding: "1px",
                          }}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LihatApprovement02;
