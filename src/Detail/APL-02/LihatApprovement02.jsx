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
      // Unit Kompetensi 1
      {
        kriteria: "Dapatkah Anda?",
        dapatkah: false,
        bukti: false,
        isHeader: true
      },
      {
        kriteria: "Mengidentifikasi komponen dari struktur data sesuai dengan konteks",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Mengidentifikasi alternatif struktur dan kegunaannya untuk kompleks pemrograman yang intensive",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menyiapkan dan menggunakan struktur data untuk menjaga program yang digunakan dalam program aplikasi spesifik",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menggunakan akses terkembali data dalam algoritma yang lebih kecil pada arsitektur yang sangat optimal spesifik",
        dapatkah: false,
        bukti: false,
      }
    ],
    unitKompetensi2: [
      // Unit Kompetensi 2
      {
        kriteria: "Dapatkah Anda?",
        dapatkah: false,
        bukti: false,
        isHeader: true
      },
      {
        kriteria: "Mendeskripsikan Metode pengembangan aplikasi software development methodology",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Mengidentifikasi model pengembangan aplikasi software (Development) sesuai kebutuhan",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Mendeskripsikan Diagram program dengan metodologi pengembangan sistem aplikasi",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menggunakan Metode pemodelan diagram dalam lingkungan program sesuai dengan spesifikasi",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Memilih tool pencoding yang sesuai yang memadai karaktesistik metodologi dalam lingkungan",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menggunakan aplikasi dalam Integrated Development Environment (IDE) yang sesuai untuk mengembangkan sistem informasi dengan menggunakan open source",
        dapatkah: false,
        bukti: false,
      }
    ],
    unitKompetensi3: [
      // Unit Kompetensi 3
      {
        kriteria: "Dapatkah Anda?",
        dapatkah: false,
        bukti: false,
        isHeader: true
      },
      {
        kriteria: "Mengidentifikasi Source dan tools untuk menghasilkan source code",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Membuat Source code program sesuai menghasilkan source code",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Mengimplementasikan Pelaksanaan source code dari aplikasi sesuai dengan metode program algoritma source yang tepat",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menggunakan Source code sesuai dengan aplikasi informasi source code yang tepat",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Mengidentifikasi Perbedaan antara running programming dan debugging sesuai dengan spesifikasi",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menggunakan Source code sesuai dengan aplikasi informasi yang tepat",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Mengidentifikasi sumber permasalahan pada struktur source code untuk membuat source",
        dapatkah: false,
        bukti: false,
      }
    ]
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (unitName, index, field) => {
    const newKompetensi = [...formData[unitName]];
    newKompetensi[index] = {
      ...newKompetensi[index],
      [field]: !newKompetensi[index][field],
    };
    setFormData((prev) => ({ ...prev, [unitName]: newKompetensi }));
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

  const renderKompetensiTable = (data, unitName, unitTitle) => (
    <div style={{ marginBottom: "24px" }}>
      {/* Header Unit Kompetensi */}
      <div
        style={{
          backgroundColor: "#ff8c42",
          color: "white",
          padding: "10px",
          fontSize: "15px",
          fontWeight: "600",
          textAlign: "left",
          marginBottom: "12px",
          borderRadius: "12px",
        }}
      >
        {unitTitle}
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
          marginBottom: "16px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#e6f3ff" }}>
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
              Bukti yang Relevan
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td
                style={{
                  border: "1px solid #ff8c42",
                  padding: "6px",
                  fontSize: "10px",
                  lineHeight: "1.3",
                  fontWeight: item.isHeader ? "600" : "normal",
                  backgroundColor: item.isHeader ? "#f8f9fa" : "white",
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
                {!item.isHeader && (
                  <input
                    type="checkbox"
                    checked={item.dapatkah}
                    onChange={() =>
                      handleCheckboxChange(unitName, index, "dapatkah")
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
                {!item.isHeader && (
                  <input
                    type="checkbox"
                    checked={item.bukti}
                    onChange={() => handleCheckboxChange(unitName, index, "bukti")}
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
                {!item.isHeader && (
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
  );

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
          <div style={{ padding: "16px", overflowY: "auto", maxHeight: "80vh" }}>
            {/* Unit Kompetensi 1 */}
            {renderKompetensiTable(
              formData.unitKompetensi, 
              "unitKompetensi", 
              "Unit Kompetensi 1: Menggunakan Struktur Data"
            )}

            {/* Unit Kompetensi 2 */}
            {renderKompetensiTable(
              formData.unitKompetensi2, 
              "unitKompetensi2", 
              "Unit Kompetensi 2: Menggunakan Spesifikasi Program"
            )}

            {/* Unit Kompetensi 3 */}
            {renderKompetensiTable(
              formData.unitKompetensi3, 
              "unitKompetensi3", 
              "Unit Kompetensi 3: Menulis Kode dengan Prinsip-Prinsip Guidelines dan Best Practices"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LihatApprovement02;