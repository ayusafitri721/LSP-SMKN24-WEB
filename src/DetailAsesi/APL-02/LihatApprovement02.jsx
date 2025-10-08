import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";
import { useQuery } from "@tanstack/react-query";

function LihatApprovement02({ onBack, data, onNavigate }) {
  const id = useParams();

  const { data: apl02, isLoading, isError, error } = useQuery({
    queryKey: ["apl02"],
    queryFn: () => api.get("/apl02/asesi/all").then((res) => res.data?.data ?? res.data),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 60 * 60 * 1000,
  });

  const filteredData = apl02?.find((item) => item.assesment_asesi.assesi.user_id === parseInt(id.id));
  const assesment = filteredData?.assesment_asesi?.assesment;
  
  console.log("filteredData: ", filteredData);
  console.log("assesment: ", assesment);

  const transformFilteredData = (filteredData) => {
    if (!filteredData) return [];
  
    return filteredData.details.map(detail => {
      // gabungkan nama elemen dan KUK (kriteria untuk kerja)
      const elemen = filteredData.assesment_asesi.assesment.skema.units[0].elements.find(
        e => e.id === detail.elemen_id
      );
  
      // buat header elemen
      const header = {
        kriteria: elemen?.nama_elemen || "-",
        isHeader: true
      };
  
      // buat baris KUK
      const kukRows = elemen?.kriteria_untuk_kerja.map(kuk => {
        // cari attachment relevan untuk detail ini
        const attachmentTexts = detail.attachments.map(att => att.bukti.nama_dokumen).join(", ");
  
        return {
          kriteria: kuk.deskripsi_kuk,
          dapatkah: false,  // default unchecked
          bukti: false,     // default unchecked
          attachmentText: attachmentTexts,
          isHeader: false
        };
      }) || [];
  
      return [header, ...kukRows]; // gabungkan header + KUK
    }).flat(); // flatten array of arrays
  };

  const transformUnitData = (filteredData, unitId) => {
    if (!filteredData) return [];
  
    const unit = filteredData.assesment_asesi.assesment.skema.units.find(
      (u) => u.id === unitId
    );
    if (!unit) return [];
  
    return unit.elements.map((elemen, index) => {
      const kukList =
        elemen.kriteria_untuk_kerja?.map(
          (kuk) => `${kuk.urutan} ${kuk.deskripsi_kuk}`
        ) || [];
  
      // gabung elemen + kuk ke satu teks
      const elemenDanKUK = `
        <strong>Elemen ke-${index + 1}: ${elemen.nama_elemen}</strong><br>
        ${kukList.map((text) => `• ${text}`).join("<br>")}
      `;
  
      // ambil detail berdasarkan elemen
      const detail = filteredData.details.find((d) => d.elemen_id === elemen.id);
      const attachmentTexts = detail
        ? detail.attachments.map((att) => att.bukti.nama_dokumen).join(", ")
        : "";
  
      // ambil nilai kompetensinitas
      const kompetensi = detail ? detail.kompetensinitas : "";
  
      return {
        id: elemen.id,
        elemenHTML: elemenDanKUK,
        attachmentText: attachmentTexts,
        kompetensinitas: kompetensi, // "k" atau "bk"
      };
    });
  };
  
  
  
  
  
  const unitKompetensi1 = transformFilteredData(filteredData);


  // Define state hooks before any conditional returns to keep hook order stable
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

  const handleCheckboxChange = (unitName, index, value) => {
    setFormData((prev) => {
      const updatedUnit = [...prev[unitName]];
      // Toggle nilai: kalau klik lagi yang sama, kosongkan
      updatedUnit[index].kompetensinitas =
        updatedUnit[index].kompetensinitas === value ? "" : value;
      return { ...prev, [unitName]: updatedUnit };
    });
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

  
  if (isLoading) return <p>Loading data...</p>;
  if (isError) return <p>Error: {error.message}</p>;

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
              <tr key={`${unitKey}-${item.id ?? item.idElemen ?? index}`}>
                {/* Elemen + KUK */}
                <td
                  style={{
                    border: "1px solid #ff8c42",
                    padding: "6px",
                    fontSize: "10px",
                    lineHeight: "1.4",
                    verticalAlign: "top",
                  }}
                  dangerouslySetInnerHTML={{ __html: item.elemenHTML }}
                />

                {/* Kolom K + BK (dua checkbox dalam satu kolom) */}
                <td
                  style={{
                    border: "1px solid #ff8c42",
                    padding: "6px",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <input
                      disabled
                        type="checkbox"
                        checked={item.kompetensinitas === "k"}
                        onChange={() => handleCheckboxChange(unitName, index, "k")}
                        style={{ transform: "scale(1.1)" }}
                      />
                      <span style={{ fontSize: "10px" }}>K</span>
                    </label>
                  </div>
                </td>

                <td
                  style={{
                    border: "1px solid #ff8c42",
                    padding: "6px",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
                    <label style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <input
                      disabled
                        type="checkbox"
                        checked={item.kompetensinitas === "bk"}
                        onChange={() => handleCheckboxChange(unitName, index, "bk")}
                        style={{ transform: "scale(1.1)" }}
                      />
                      <span style={{ fontSize: "10px" }}>BK</span>
                    </label>
                  </div>
                </td>

                {/* Kolom Bukti */}
                <td
                  style={{
                    border: "1px solid #ff8c42",
                    padding: "6px",
                    verticalAlign: "middle",
                  }}
                >
                  <input
                    type="text"
                    value={item.attachmentText || ""}
                    readOnly
                    style={{
                      width: "100%",
                      border: "none",
                      background: "transparent",
                      fontSize: "10px",
                    }}
                  />
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
            onClick={() => onNavigate && onNavigate(`approvement/ak-01/lihat/${id.id}`)}
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
                value={assesment?.skema?.judul_skema}
                onChange={(e) =>
                  handleInputChange("judulUnit", e.target.value)
                }
                disabled
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
                value={assesment?.tuk}
                onChange={(e) =>
                  handleInputChange("kodeUnit", e.target.value)
                }
                disabled
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
                value={assesment?.tanggal_assesment}
                onChange={(e) =>
                  handleInputChange("judulUnit", e.target.value)
                }
                disabled
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
              >{filteredData?.ttd_assesor}
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
              >{assesment? "Approved" : ""}
              </div>
            </div>
          </div>

        </div>

        {/* Kolom Kanan - Patokan Asesmen */}
        <div style={{ padding: "16px", overflowY: "auto", maxHeight: "80vh" }}>
          {assesment.skema.units.map((unit, idx) => {
            const unitData = transformUnitData(filteredData, unit.id);
            return (
              <React.Fragment key={unit.id}>
                {renderKompetensiTable(
                  unitData,
                  `unitKompetensi${idx + 1}`,
                  `Unit Kompetensi ${unit.unit_ke}: ${unit.judul_unit}`,
                  `unit${idx + 1}`
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  </div>
  );
}

export default LihatApprovement02;