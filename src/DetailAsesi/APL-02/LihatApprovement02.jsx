import React, { useState } from "react";

function LihatApprovement02({ onBack, data, onNavigate }) {
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
    ],
    unitKompetensi4: [
      // Unit Kompetensi 4
      {
        kriteria: "Dapatkah Anda?",
        dapatkah: false,
        bukti: false,
        isHeader: true
      },
      {
        kriteria: "Mengidentifikasi yang menggunakan coding guidelines dan best practices",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Membuat struktur program yang sesuai dengan konsep paradigmanya",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menangani Galat/Error",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menghitung efisiensi penggunaan resources dan waktu",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Selalu Mengimplementasikan kemudahan informasi sesuai standar yang berlaku",
        dapatkah: false,
        bukti: false,
      }
    ],
    unitKompetensi5: [
      // Unit Kompetensi 5
      {
        kriteria: "Dapatkah Anda?",
        dapatkah: false,
        bukti: false,
        isHeader: true
      },
      {
        kriteria: "Menentukan tipe data yang sesuai standar",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menggunakan sintaksis program yang dikutakutip sesuai standar",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menggunakan struktur kontrol program yang dikutakutip sesuai standar",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Membuat Program baru hits untuk memfasilitasi data dari keyboard dan menampilkan informasi ke layar dan variabelnye sesuai standar instruksi keluaran",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menggunakan Struktur kontrol percabangan dan penggunaan dalam membuat program",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Membuat Program dengan menggunakan prosedur sesuai aturan penulisan program",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Membuat Program dengan menggunakan fungsi sesuai aturan penulisan program",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Membuat Program dengan menggunakan array dan fungsi sesuai berdasarkan penulisan program yang efektif",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Memberikan keterangan untuk setiap prosedur dan fungsi",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menentukan Element array",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menentukan Tipe data array",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menentukan Panjang array",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menggunakan Pengurutan array",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Membuat Program untuk menulis data dalam media penyimpan",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Membuat Program untuk membaca data dari media penyimpan",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Mengontrol kesalahan program",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Membebaskan kesalahan syntax dalam program",
        dapatkah: false,
        bukti: false,
      }
    ],
    unitKompetensi6: [
      // Unit Kompetensi 5
      {
        kriteria: "Dapatkah Asesi?",
        dapatkah: false,
        bukti: false,
        isHeader: true
      },
      {
        kriteria: "Mengidentifikasi Modul Program",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Mengidentifikasi parameter yang dipergunakan",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menjelaskan cara kerja algoritma",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Memberikan komentar setiap baris kode termasuk data, eksepsi, fungsi, prosedur dan class (bila ada)",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Membuat dokumentasi modul sesuai dengan identitas untuk memudahkan pelacakan",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menerapkan identifikasi dokumentasim",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menjelaskan kegunaan modul",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Merevisi dokumen sesuai perubahan kode program",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Membuat dokumentasi fungsi, prosedur atau method",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menjelaskan kemungkinan eksepsi",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Merevisi dokumen sesuai perubahan kode program",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Mengidentifikasi Tools untuk generate dokumentasi",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Melakukan Generate dokumentasi",
        dapatkah: false,
        bukti: false,
      }
    ],
    unitKompetensi7: [
      // Unit Kompetensi 5
      {
        kriteria: "Dapatkah Asesi?",
        dapatkah: false,
        bukti: false,
        isHeader: true
      },
      {
        kriteria: "Menyiapkan kode program sesuai spesifikasi",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menyiapkan Debugging tools untuk melihat proses suatu modul",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Mengunakan kode program dikompilasi sesuai bahasa pemrograman",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menganalisis kriteria lulus build",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menganalisis kriteria eksekusi aplikasi",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Mencatat kode kesalahan",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Merumuskan Perbaikan terhadap kesalahan kompilasi maupun build",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Melakukan Perbaikan",
        dapatkah: false,
        bukti: false,
      }
    ],
     unitKompetensi8: [
      // Unit Kompetensi 5
      {
        kriteria: "Dapatkah Asesi?",
        dapatkah: false,
        bukti: false,
        isHeader: true
      },
      {
        kriteria: "Mengidentifikasikan prosedur uji coba aplikasi sesuai dengan software development life cycle.",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menentukan Tools uji coba",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Mengidentifikasi Standar dan kondisi uji coba",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menentukan kebutuhan untuk uji coba.",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Dapat melaksanakan uji coba dengan variasi kondisi",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Membuat skenario uji coba",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Mengidentifikasi data uji unit tes",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Membangkitkan data uji unit tes",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Mendisain Skenario uji coba",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Mendisain prosedur uji coba dalam algoritma.",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Melaksanakan Uji coba",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Mencatat hasil uji coba",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menganalisis hasil uji coba",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Melaporkan prosedur uji coba.",
        dapatkah: false,
        bukti: false,
      },
      {
        kriteria: "Menyelesaikan kesalahan/error.",
        dapatkah: false,
        bukti: false,
      },
    ]
  });

  // State untuk mengelola dropdown unit kompetensi
  const [openUnits, setOpenUnits] = useState({
    unit1: false,
    unit2: false,
    unit3: false,
    unit4: false,
    unit5: false,
    unit6: false,
    unit7: false,
    unit8: false
  });

  const toggleUnit = (unit) => {
    setOpenUnits(prev => ({
      ...prev,
      [unit]: !prev[unit]
    }));
  };

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
  };

  const labelStyle = {
    fontSize: "12px",
    fontWeight: "400",
    color: "#333",
    minWidth: "100px",
    display: "inline-block",
  };

  const renderKompetensiTable = (data, unitName, unitTitle, unitKey) => (
    <div style={{ marginBottom: "16px" }}>
      {/* Dropdown Header Unit Kompetensi */}
      <div
        onClick={() => toggleUnit(unitKey)}
        style={{
          backgroundColor: "#ff8c42",
          color: "white",
          padding: "10px",
          fontSize: "15px",
          fontWeight: "600",
          textAlign: "left",
          marginBottom: "12px",
          borderRadius: "12px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span>{unitTitle}</span>
        <span style={{ fontSize: "18px", transition: "transform 0.3s", transform: openUnits[unitKey] ? "rotate(180deg)" : "rotate(0deg)" }}>
          ▼
        </span>
      </div>

      {/* Tabel Kompetensi (Hanya ditampilkan jika dropdown terbuka) */}
      {openUnits[unitKey] && (
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
               Dapatkah Asesi?
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
      )}
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
            FR.APL.02
          </button>
          <button
            onClick={() => onNavigate && onNavigate("approvement/ak-01/lihat")}
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
                <label style={labelStyle}>Nama Jadwal</label>
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
              <label style={labelStyle}>TUK</label>
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
                value={formData.judulUnit}
                onChange={(e) =>
                  handleInputChange("judulUnit", e.target.value)
                }
                style={{ ...inputStyle, width: "180px" }}
              />
            </div>
          </div>
          
          {/* Bagian Barcode Asesor & Asesi */}
          <div
            style={{
              marginTop: "auto", // Posisikan di bagian bawah kolom kiri
              display: "flex",
              gap: "10px",
              flexDirection: "column",
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

        {/* Kolom Kanan - Patokan Asesmen */}
        <div style={{ padding: "16px", overflowY: "auto", maxHeight: "80vh" }}>
          {/* Unit Kompetensi 1 */}
          {renderKompetensiTable(
            formData.unitKompetensi, 
            "unitKompetensi", 
            "Unit Kompetensi 1: Menggunakan Struktur Data",
            "unit1"
          )}

          {/* Unit Kompetensi 2 */}
          {renderKompetensiTable(
            formData.unitKompetensi2, 
            "unitKompetensi2", 
            "Unit Kompetensi 2: Menggunakan Spesifikasi Program",
            "unit2"
          )}

          {/* Unit Kompetensi 3 */}
          {renderKompetensiTable(
            formData.unitKompetensi3, 
            "unitKompetensi3", 
            "Unit Kompetensi 3: Menulis Kode dengan Prinsip-Prinsip Guidelines dan Best Practices",
            "unit3"
          )}

          {/* Unit Kompetensi 4 */}
          {renderKompetensiTable(
            formData.unitKompetensi4, 
            "unitKompetensi4", 
            "Unit Kompetensi 4: Menulis Kode Dengan Prinsip Sesuai Guidelines dan Best Practices",
            "unit4"
          )}

          {/* Unit Kompetensi 5 */}
          {renderKompetensiTable(
            formData.unitKompetensi5, 
            "unitKompetensi5", 
            "Unit Kompetensi 5: Mengimplementasikan Pemrograman Terstruktur",
            "unit5"
          )}

          
          {/* Unit Kompetensi 6 */}
          {renderKompetensiTable(
            formData.unitKompetensi6, 
            "unitKompetensi6", 
            "Unit Kompetensi 6: Membuat Dokumen Kode Program",
            "unit6"
          )}

           {/* Unit Kompetensi 7 */}
          {renderKompetensiTable(
            formData.unitKompetensi7, 
            "unitKompetensi7", 
            "Unit Kompetensi 7: Membuat Dokumen Kode Program",
            "unit7"
          )}

           {/* Unit Kompetensi 8 */}
          {renderKompetensiTable(
            formData.unitKompetensi8, 
            "unitKompetensi8", 
            "Unit Kompetensi 8: Melaksanakan Pengujian Unit Program",
            "unit8"
          )}
        </div>
      </div>
    </div>
  </div>
  );
}

export default LihatApprovement02;