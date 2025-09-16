import React, { useState } from "react";

function CeklisObservasiAktivitas({ onBack, onNavigate }) {
    const [formData, setFormData] = useState({
        namaAsesi: "",
        namaAsesor: "",
        tanggal: "",
        skemaKualifikasi: "Pemrogram Junior (Junior Coder)",
        nomorSkema: "SKM.RPL.PJ/LSPSMK24/2023",
        tuk: "Sewaktu/Tempat Kerja/Mandiri*",
        unitKompetensi: {
            kode: "J.620100.004.02",
            judul: "Menggunakan Struktur Data"
        },
        unitKompetensi2: {
            kode: "J.620100.009.01",
            judul: "Menggunakan Spesifikasi Program"
        },
        unitKompetensi3: {
            kode: "J.620100.010.01",
            judul: "Menerapkan Perintah Eksekusi Bahasa Pemrograman Berbasis Teks, Grafik, dan Multimedia"
        },
        unitKompetensi4: {
            kode: "J.620100.016.01",
            judul: "Menulis Kode Dengan Prinsip Sesuai Guidelines dan Best Practices"
        },
        unitKompetensi5: {
            kode: "J.620100.017.02",
            judul: "Mengimplementasikan Pemrograman Terstruktur"
        },
        unitKompetensi6: {
            kode: "J.620100.023.02",
            judul: "Membuat Dokumen Kode Program"
        },
        unitKompetensi7: {
            kode: "J.620100.025.02",
            judul: "Melakukan Debugging"
        },
        aktivitas: [
            {
                no: 1,
                elemen: "Mengidentifikasi konsep data dan struktur data",
                kriteria: [
                    "Mengidentifikasi konsep data dan struktur data sesuai dengan konteks",
                    "Membandingkan alternatif struktur data kelebihan dan kekurangannya untuk konteks permasalahan yang diselesaikan"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            },
            {
                no: 2,
                elemen: "Menerapkan struktur data dan akses terhadap struktur data tersebut",
                kriteria: [
                    "Mengimplementasikan struktur data sesuai dengan bahasa pemrograman yang akan dipergunakan.",
                    "Menyatakan akses terhadap data dalam algoritma yang efisien sesuai bahasa pemrograman yang akan dipakai.",
                    "Efisien sesuai bahasa pemrograman yang akan dipakai. "
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            }
        ],
        aktivitas6: [
            {
                no: 1,
                elemen: "Melakukan identifikasi kode program",
                kriteria: [
                    "Mengidentifikasi Modul Program",
                    "Mengidentifikasi parameter yang dipergunakan",
                    "Menjelaskan cara kerja algoritma",
                    "Memberikan komentar setiap baris kode termasuk data, eksepsi, fungsi, prosedur dan *class* (bila ada)"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            },
            {
                no: 2,
                elemen: "Membuat dokumentasi modul program",
                kriteria: [
                    "Membuat dokumentasi modul sesuai dengan identitas untuk memudahkan pelacakan",
                    "Menerapkan identifikasi dokumentasi",
                    "Menjelaskan kegunaan modul",
                    "Merevisi dokumen sesuai perubahan kode program"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            },
            {
                no: 3,
                elemen: "Membuat dokumentasi fungsi, prosedur atau method program",
                kriteria: [
                    "Membuat dokumentasi fungsi, prosedur atau metod",
                    "Menjelaskan kemungkinan eksepsi",
                    "Merevisi dokumen sesuai perubahan kode program"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            },
            {
                no: 4,
                elemen: "Men-generate dokumentasi",
                kriteria: [
                    "Mengidentifikasi Tools untuk generate dokumentasi",
                    "Melakukan Generate dokumentasi"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            }
        ],
        aktivitas7: [
            {
                no: 1,
                elemen: "Melakukan debugging",
                kriteria: [
                    "Menggunakan kode program dikompilasi sesuai bahasa pemrograman",
                    "Menganalisis kriteria lulus build",
                    "Menganalisis kriteria eksekusi aplikasi",
                    "Mencatat kode kesalahan"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            },
            {
                no: 2,
                elemen: "Memperbaiki program",
                kriteria: [
                    "Merumuskan Perbaikan terhadap kesalahan kompilasi maupun build",
                    "Melakukan Perbaikan"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            }
        ],
        aktivitas2: [
            {
                no: 1,
                elemen: "Menggunakan metode pengembangan program",
                kriteria: [
                    "Mendefinisikan Metode pengembangan aplikasi (software development)",
                    "Memilih Metode pengembangan aplikasi (software development) sesuai kebutuhan"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            },
            {
                no: 2,
                elemen: "Menggunakan diagram program dan deskripsi program",
                kriteria: [
                    "Mendefinisikan Diagram program dengan metodologi pengembangan sistem ",
                    "Menggunakan Metode pemodelan, diagram objek dan diagram komponen digunakan pada implementasi program sesuai dengan spesifikasi."
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            },
            {
                no: 3,
                elemen: "Menerapkan hasil pemodelan ke dalam pengembangan program",
                kriteria: [
                    "Memilih Hasil pemodelan yang mendukung kemampuan metodologi sesuai spesifikasi.",
                    "Memilih Hasil pemrograman (Integrated Development Environment-IDE) yang mendukung kemampuan metodologi bahasa pemrograman sesuai spesifikasi. "
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            }
        ],
        aktivitas3: [
            {
                no: 1,
                elemen: "Mengidentifikasi mekanisme running atau eksekusi source code",
                kriteria: [
                    "Mengidentifikasi Cara dan tools untuk mengeksekusi source code",
                    "Mengidentifikasi Parameter untuk mengeksekusi source code",
                    "Mengidentifikasi Peletakan source code sehingga bisa dieksekusi dengan benar"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            },
            {
                no: 2,
                elemen: "Mengeksekusi source code",
                kriteria: [
                    "Mengeksekusi Source code sesuai dengan mekanisme eksekusi source code dari tools pemrograman yang digunakan.",
                    "Mengidentifikasi Perbedaan antara running, debugging, atau membuat executable file"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            },
            {
                no: 3,
                elemen: "Mengidentifikasi hasil eksekusi",
                kriteria: [
                    "Mengeksekusi Source code sesuai skenario yang direncanakan.",
                    "Mengidentifikasi sumber permasalahan Jika eksekusi source code gagal/tidak berhasil"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            }
        ],
        aktivitas4: [
            {
                no: 1,
                elemen: "Menerapkan coding guidelines dan best practices dalam penulisan program (kode sumber)",
                kriteria: [
                    "Menuliskan kode sumber mengikuti coding-guidelines dan best practices.",
                    "Membuat struktur program yang sesuai dengan konsep paradigmanya",
                    "Menangani Galat/Error"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            },
            {
                no: 2,
                elemen: "Menggunakan ukuran performansi dalam menuliskan kode sumber",
                kriteria: [
                    "Menghitung efisiensi penggunaan resources oleh kode",
                    "Selalu Mengimplementasi kemudahan interaksi sesuai standar yang berlaku"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            }
        ],
        aktivitas5: [
            {
                no: 1,
                elemen: "Menggunakan tipe data dan variabel program",
                kriteria: [
                    "Menentukan tipe data yang tepat sesuai standar",
                    "Menggunakan variabel/konstanta yang disusun sesuai standar",
                    "Menggunakan struktur kontrol program yang disusun sesuai standar"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            },
            {
                no: 2,
                elemen: "Membuat program sederhana",
                kriteria: [
                    "Membuat Program baca tulis untuk memasukkan data dari keyboard dan menampilkan ke layar monitor termasuk variasinya sesuai standar masukan/keluaran",
                    "Menggunakan Struktur kontrol percabangan dan pengulangan dalam membuat program"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            },
            {
                no: 3,
                elemen: "Membuat program menggunakan prosedur dan fungsi",
                kriteria: [
                    "Membuat Program dengan menggunakan prosedur sesuai aturan pembuatan program",
                    "Membuat Program dengan menggunakan fungsi sesuai aturan pembuatan program",
                    "Membuat Program dengan menggunakan prosedur dan fungsi secara bersamaan sesuai standar",
                    "Membentuk Keterangan untuk setiap prosedur dan fungsi"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            },
            {
                no: 4,
                elemen: "Membuat program dengan menggunakan array",
                kriteria: [
                    "Menentukan Dimensi array",
                    "Mendeklarasikan Tipe data array",
                    "Menggunakan Tipe indeks array",
                    "Menggunakan Pengurutan array"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            },
            {
                no: 5,
                elemen: "Membuat program untuk akses file",
                kriteria: [
                    "Membuat Program untuk menulis data dalam media penyimpan",
                    "Membuat Program untuk membaca data dari media penyimpan"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            },
            {
                no: 6,
                elemen: "Mengkompilasi program",
                kriteria: [
                    "Mengoreksi kesalahan program",
                    "Membebaskan Kesalahan syntax dalam program"
                ],
                standar: "SKKNI",
                pencapaian: { ya: false, tidak: false },
                penilaianLanjut: ""
            }
        ],
        kelompokPekerjaan2: [
            { no: 1, kode: "J.620100.009.01", judul: "Menggunakan Spesifikasi Program" },
            { no: 2, kode: "J.620100.010.01", judul: "Menerapkan Perintah Eksekusi Bahasa Pemrograman Berbasis Teks, Grafik, dan Multimedia" },
            { no: 3, kode: "J.620100.016.01", judul: "Menulis Kode Dengan Prinsip Sesuai Guidelines dan Best Practices" },
            { no: 4, kode: "J.620100.017.02", judul: "Mengimplementasikan Pemrograman Terstruktur" },
            { no: 5, kode: "J.620100.023.02", judul: "Membuat Dokumen Kode Program" },
        ],
        kelompokPekerjaan3: [
            { no: 1, kode: "J.620100.025.02", judul: "Melakukan Debugging" },
            { no: 2, kode: "J.620100.033.02", judul: "Melaksanakan Pengujian Unit Program" },
        ],
        umpanBalik: ""
    });

    const handleInputChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handlePencapaianChange = (section, index, value) => {
        setFormData((prev) => ({
            ...prev,
            [section]: prev[section].map((item, i) =>
                i === index
                    ? {
                        ...item,
                        pencapaian: {
                            ya: value === "ya",
                            tidak: value === "tidak"
                        }
                    }
                    : item
            )
        }));
    };

    const handlePenilaianLanjutChange = (section, index, value) => {
        setFormData((prev) => ({
            ...prev,
            [section]: prev[section].map((item, i) =>
                i === index
                    ? { ...item, penilaianLanjut: value }
                    : item
            )
        }));
    };

    const tableStyle = {
        width: "100%",
        borderCollapse: "collapse",
        border: "2px solid #ff8c42",
        marginBottom: "20px",
    };

    const cellStyle = {
        border: "1px solid #ff8c42",
        padding: "8px",
        fontSize: "12px",
        backgroundColor: "white",
        verticalAlign: "top",
    };

    const headerCellStyle = {
        ...cellStyle,
        backgroundColor: "#2c3e50",
        color: "white",
        fontWeight: "600",
        textAlign: "center",
    };

    const subHeaderStyle = {
        ...cellStyle,
        backgroundColor: "#34495e",
        color: "white",
        fontWeight: "600",
        textAlign: "center",
        fontSize: "11px"
    };

    const renderAssessmentTable = (aktivitasData, sectionName, unitTitle) => (
        <>
            {/* Unit Kompetensi Detail */}
            <table style={{ ...tableStyle, marginTop: "20px" }}>
                <tbody>
                    <tr>
                        <td style={{ ...headerCellStyle, backgroundColor: "#2c3e50", width: "150px" }}>
                            {unitTitle}
                        </td>
                        <td style={{ ...subHeaderStyle, width: "100px" }}>Kode Unit</td>
                        <td style={cellStyle}>
                            {sectionName === 'aktivitas' && formData.unitKompetensi.kode}
                            {sectionName === 'aktivitas2' && formData.unitKompetensi2.kode}
                            {sectionName === 'aktivitas3' && formData.unitKompetensi3.kode}
                            {sectionName === 'aktivitas4' && formData.unitKompetensi4.kode}
                            {sectionName === 'aktivitas5' && formData.unitKompetensi5.kode}
                            {sectionName === 'aktivitas6' && formData.unitKompetensi6.kode}
                            {sectionName === 'aktivitas7' && formData.unitKompetensi7.kode}
                        </td>
                    </tr>
                    <tr>
                        <td style={{ ...cellStyle, backgroundColor: "#2c3e50" }}></td>
                        <td style={subHeaderStyle}>Judul Unit</td>
                        <td style={cellStyle}>
                            {sectionName === 'aktivitas' && formData.unitKompetensi.judul}
                            {sectionName === 'aktivitas2' && formData.unitKompetensi2.judul}
                            {sectionName === 'aktivitas3' && formData.unitKompetensi3.judul}
                            {sectionName === 'aktivitas4' && formData.unitKompetensi4.judul}
                            {sectionName === 'aktivitas5' && formData.unitKompetensi5.judul}
                            {sectionName === 'aktivitas6' && formData.unitKompetensi6.judul}
                            {sectionName === 'aktivitas7' && formData.unitKompetensi7.judul}
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Assessment Table */}
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={{ ...headerCellStyle, backgroundColor: "#2c3e50", width: "50px" }}>No.</th>
                        <th style={{ ...headerCellStyle, backgroundColor: "#2c3e50", width: "200px" }}>Elemen</th>
                        <th style={{ ...headerCellStyle, backgroundColor: "#2c3e50", width: "300px" }}>Kriteria Unjuk Kerja</th>
                        <th style={{ ...headerCellStyle, backgroundColor: "#2c3e50", width: "120px" }}>
                            Standar Industri atau Tempat Kerja
                        </th>
                        <th style={{ ...headerCellStyle, backgroundColor: "#2c3e50" }}>Pencapaian</th>
                        <th style={{ ...headerCellStyle, backgroundColor: "#2c3e50", width: "100px" }}>
                            Penilaian Lanjut
                        </th>
                    </tr>
                    <tr>
                        <th style={subHeaderStyle}></th>
                        <th style={subHeaderStyle}></th>
                        <th style={subHeaderStyle}></th>
                        <th style={subHeaderStyle}></th>
                        <th style={subHeaderStyle}>
                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                <span>Ya</span>
                                <span>Tidak</span>
                            </div>
                        </th>
                        <th style={subHeaderStyle}></th>
                    </tr>
                </thead>
                <tbody>
                    {aktivitasData.map((aktivitas, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <td style={{ ...cellStyle, textAlign: "center" }} rowSpan={aktivitas.kriteria.filter(k => k.trim() !== "").length}>
                                    {aktivitas.no}
                                </td>
                                <td style={cellStyle} rowSpan={aktivitas.kriteria.filter(k => k.trim() !== "").length}>
                                    {aktivitas.elemen}
                                </td>
                                <td style={cellStyle}>{aktivitas.kriteria[0]}</td>
                                <td style={{ ...cellStyle, textAlign: "center" }} rowSpan={aktivitas.kriteria.filter(k => k.trim() !== "").length}>
                                    {aktivitas.standar}
                                </td>
                                <td style={{ ...cellStyle, textAlign: "center" }} rowSpan={aktivitas.kriteria.filter(k => k.trim() !== "").length}>
                                    <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                        <input
                                            type="radio"
                                            name={`${sectionName}-${index}`}
                                            checked={aktivitas.pencapaian.ya}
                                            onChange={() => handlePencapaianChange(sectionName, index, "ya")}
                                        />
                                        <input
                                            type="radio"
                                            name={`${sectionName}-${index}`}
                                            checked={aktivitas.pencapaian.tidak}
                                            onChange={() => handlePencapaianChange(sectionName, index, "tidak")}
                                        />
                                    </div>
                                </td>
                                <td style={{ ...cellStyle, textAlign: "center" }} rowSpan={aktivitas.kriteria.filter(k => k.trim() !== "").length}>
                                    <input
                                        type="text"
                                        value={aktivitas.penilaianLanjut}
                                        onChange={(e) => handlePenilaianLanjutChange(sectionName, index, e.target.value)}
                                        style={{
                                            border: "none",
                                            width: "100%",
                                            backgroundColor: "transparent",
                                            textAlign: "center",
                                            fontSize: "12px"
                                        }}
                                        placeholder="Catatan"
                                    />
                                </td>
                            </tr>
                            {aktivitas.kriteria.slice(1).filter(k => k.trim() !== "").map((kriteria, kriteriaIndex) => (
                                <tr key={kriteriaIndex}>
                                    <td style={cellStyle}>{kriteria}</td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </>
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
        {/* Nav Tabs */}
        <div style={{ marginBottom: "20px" }}>
          <div
            style={{
              display: "flex",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              padding: "4px",
              alignItems: "center",
            }}
          >
            {/* Back Arrow */}
            <button
              onClick={onBack}
              style={{
                padding: "8px",
                fontSize: "16px",
                border: "none",
                backgroundColor: "transparent",
                color: "#666",
                cursor: "pointer",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "4px",
              }}
            >
              ←
            </button>

            <button
              onClick={() => onNavigate && onNavigate("list-muk")}
              style={{
                padding: "12px 20px",
                fontSize: "14px",
                fontWeight: "600",
                border: "none",
                backgroundColor: "transparent",
                color: "#666",
                cursor: "pointer",
                margin: "4px",
                borderRadius: "8px",
                flexShrink: 0,
                minWidth: "fit-content",
              }}
            >
              FR.AK.02
            </button>
            <button
              onClick={() =>
                onNavigate && onNavigate("listmuk/AK-03/UmpanBalik")
              }
              style={{
                padding: "12px 20px",
                fontSize: "14px",
                fontWeight: "600",
                border: "none",
                backgroundColor: "transparent",
                color: "#666",
                cursor: "pointer",
                margin: "4px",
                borderRadius: "8px",
                flexShrink: "0",
                minWidth: "fit-content",
              }}
            >
              FR.AK.03
            </button>
            <button
              onClick={() =>
                onNavigate && onNavigate("listmuk/AK-04/BandingkanAsesmen")
              }
              style={{
                padding: "12px 20px",
                fontSize: "14px",
                fontWeight: "600",
                border: "none",
                backgroundColor: "transparent",
                color: "#666",
                cursor: "pointer",
                margin: "4px",
                borderRadius: "8px",
                flexShrink: "0",
                minWidth: "fit-content",
              }}
            >
              FR.AK.04
            </button>
            <button
              onClick={() =>
                onNavigate && onNavigate("listmuk/AK-05/LaporanAsesment")
              }
              style={{
                padding: "12px 20px",
                fontSize: "14px",
                fontWeight: "600",
                border: "none",
                backgroundColor: "transparent",
                color: "#666",
                cursor: "pointer",
                margin: "4px",
                borderRadius: "8px",
                flexShrink: 0,
                minWidth: "fit-content",
              }}
            >
              FR.AK.05
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
                margin: "4px",
                flexShrink: "0",
                minWidth: "fit-content",
              }}
            >
              FR.IA.01
            </button>
            <button
              onClick={() => onNavigate && onNavigate("listmuk/ia02")}
              style={{
                padding: "12px 20px",
                fontSize: "14px",
                fontWeight: "600",
                border: "none",
                backgroundColor: "transparent",
                color: "#666",
                cursor: "pointer",
                margin: "4px",
                borderRadius: "8px",
                flexShrink: "0",
                minWidth: "fit-content",
              }}
            >
              FR.IA.02
            </button>
            <button
              onClick={() =>
                onNavigate && onNavigate("listmuk/IA-05C/LembarJawabanPG")
              }
              style={{
                padding: "12px 20px",
                fontSize: "14px",
                fontWeight: "600",
                border: "none",
                backgroundColor: "transparent",
                color: "#666",
                cursor: "pointer",
                margin: "4px",
                borderRadius: "8px",
                flexShrink: "0",
                minWidth: "fit-content",
              }}
            >
              FR.IA.05.B
            </button>
          </div>
        </div>

        {/* Header */}
        <h2
          style={{
            textAlign: "center",
            color: "white",
            backgroundColor: "#2c3e50",
            padding: "10px",
            margin: "0 0 20px 0",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          FR.IA.01. CL - CEKLIS OBSERVASI AKTIVITAS DI TEMPAT KERJA ATAU TEMPAT
          KERJA SIMULASI
        </h2>

        {/* Info Table */}
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td
                style={{
                  ...headerCellStyle,
                  backgroundColor: "#2c3e50",
                  width: "200px",
                }}
              >
                Skema Sertifikasi (KKN/Okupasi/Klaster)
              </td>
              <td
                style={{
                  ...headerCellStyle,
                  backgroundColor: "#2c3e50",
                  width: "80px",
                }}
              >
                Judul
              </td>
              <td style={cellStyle}>{formData.skemaKualifikasi}</td>
            </tr>
            <tr>
              <td
                style={{
                  ...cellStyle,
                  backgroundColor: "#2c3e50",
                  color: "white",
                  fontWeight: "600",
                }}
              ></td>
              <td style={{ ...headerCellStyle, backgroundColor: "#2c3e50" }}>
                Nomor
              </td>
              <td style={cellStyle}>{formData.nomorSkema}</td>
            </tr>
            <tr>
              <td style={{ ...headerCellStyle, backgroundColor: "#2c3e50" }}>
                TUK
              </td>
              <td style={{ ...cellStyle, backgroundColor: "#2c3e50" }}></td>
              <td style={cellStyle}>{formData.tuk}</td>
            </tr>
            <tr>
              <td style={{ ...headerCellStyle, backgroundColor: "#2c3e50" }}>
                Nama Asesor
              </td>
              <td style={{ ...cellStyle, backgroundColor: "#2c3e50" }}></td>
              <td style={cellStyle}>
                <input
                  type="text"
                  value={formData.namaAsesor}
                  onChange={(e) =>
                    handleInputChange("namaAsesor", e.target.value)
                  }
                  style={{
                    border: "none",
                    width: "100%",
                    backgroundColor: "transparent",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ ...headerCellStyle, backgroundColor: "#2c3e50" }}>
                Nama Asesi
              </td>
              <td style={{ ...cellStyle, backgroundColor: "#2c3e50" }}></td>
              <td style={cellStyle}>
                <input
                  type="text"
                  value={formData.namaAsesi}
                  onChange={(e) =>
                    handleInputChange("namaAsesi", e.target.value)
                  }
                  style={{
                    border: "none",
                    width: "100%",
                    backgroundColor: "transparent",
                  }}
                />
              </td>
            </tr>
            <tr>
              <td style={{ ...headerCellStyle, backgroundColor: "#2c3e50" }}>
                Tanggal
              </td>
              <td style={{ ...cellStyle, backgroundColor: "#2c3e50" }}></td>
              <td style={cellStyle}>
                <input
                  type="date"
                  value={formData.tanggal}
                  onChange={(e) => handleInputChange("tanggal", e.target.value)}
                  style={{
                    border: "none",
                    width: "100%",
                    backgroundColor: "transparent",
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Note */}
        <p style={{ fontSize: "12px", marginBottom: "20px" }}>
          *Coret yang tidak perlu
        </p>

        {/* Panduan */}
        <div
          style={{
            backgroundColor: "#2c3e50",
            color: "white",
            padding: "15px",
            marginBottom: "20px",
          }}
        >
          <h3 style={{ margin: "0 0 15px 0", fontSize: "16px" }}>
            PANDUAN BAGI ASESOR
          </h3>
          <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "12px" }}>
            <li style={{ marginBottom: "8px" }}>
              Lengkapi nama unit kompetensi, elemen, dan kriteria unjuk kerja
              sesuai kolom dalam tabel.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Isilah standar industri atau tempat kerja
            </li>
            <li style={{ marginBottom: "8px" }}>
              Beri tanda centang (√) pada kolom "YA" jika Anda yakin asesi dapat
              melakukan/mendemonstrasikan tugas sesuai KUK, atau centang (√)
              pada kolom "Tidak" bila sebaliknya.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Penilaian Lanjut diisi bila hasil belum dapat disimpulkan, untuk
              itu gunakan metode lain sehingga keputusan dapat dibuat.
            </li>
            <li>Isilah kolom KUK sesuai dengan Unit Kompetensi/ SKKNI</li>
          </ul>
        </div>

        {/* Unit Kompetensi Table */}
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td
                style={{
                  ...headerCellStyle,
                  backgroundColor: "#2c3e50",
                  width: "150px",
                }}
              >
                Kelompok Pekerjaan 1
              </td>
              <td style={{ ...subHeaderStyle, width: "50px" }}>No.</td>
              <td style={{ ...subHeaderStyle, width: "150px" }}>Kode Unit</td>
              <td style={{ ...subHeaderStyle }}>Judul Unit</td>
            </tr>
            <tr>
              <td
                style={{
                  ...cellStyle,
                  backgroundColor: "#2c3e50",
                  color: "white",
                }}
              ></td>
              <td style={{ ...cellStyle, textAlign: "center" }}>1.</td>
              <td style={cellStyle}>{formData.unitKompetensi.kode}</td>
              <td style={cellStyle}>{formData.unitKompetensi.judul}</td>
            </tr>
          </tbody>
        </table>

        {/* Unit Kompetensi 1 Assessment */}
        {renderAssessmentTable(
          formData.aktivitas,
          "aktivitas",
          "Unit Kompetensi 1"
        )}

        {/* Umpan Balik after Unit Kompetensi 1 */}
        <table style={tableStyle}>
          <tbody>
            <tr>
              <td style={{ ...headerCellStyle, backgroundColor: "#2c3e50" }}>
                Umpan Balik untuk asesi:
              </td>
            </tr>
            <tr>
              <td style={{ ...cellStyle, height: "100px" }}>
                <textarea
                  value={formData.umpanBalik}
                  onChange={(e) =>
                    handleInputChange("umpanBalik", e.target.value)
                  }
                  style={{
                    width: "100%",
                    height: "80px",
                    border: "none",
                    resize: "none",
                    backgroundColor: "transparent",
                  }}
                  placeholder="Masukkan umpan balik untuk asesi..."
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* Kelompok Pekerjaan 2 */}
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "20%",
                  backgroundColor: "#2c3e50",
                  color: "white",
                }}
              ></th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "5%",
                  backgroundColor: "#2c3e50",
                  color: "white",
                }}
              >
                No.
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "25%",
                  backgroundColor: "#2c3e50",
                  color: "white",
                }}
              >
                Kode Unit
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  backgroundColor: "#2c3e50",
                  color: "white",
                }}
              >
                Judul Unit
              </th>
            </tr>
          </thead>
          <tbody>
            {formData.kelompokPekerjaan2.map((item, index) => (
              <tr key={index}>
                {index === 0 && (
                  <td
                    rowSpan={formData.kelompokPekerjaan2.length}
                    style={{
                      border: "1px solid black",
                      padding: "8px",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "12px",
                      backgroundColor: "#2c3e50",
                      color: "white",
                    }}
                  >
                    Kelompok <br /> Pekerjaan 2
                  </td>
                )}
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  {item.no}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    fontSize: "12px",
                  }}
                >
                  {item.kode}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    fontSize: "12px",
                  }}
                >
                  {item.judul}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Unit Kompetensi 2 Assessment */}
        {renderAssessmentTable(
          formData.aktivitas2,
          "aktivitas2",
          "Unit Kompetensi 2"
        )}

        {/* Unit Kompetensi 3 Assessment */}
        {renderAssessmentTable(
          formData.aktivitas3,
          "aktivitas3",
          "Unit Kompetensi 3"
        )}

        {/* Unit Kompetensi 4 Assessment */}
        {renderAssessmentTable(
          formData.aktivitas4,
          "aktivitas4",
          "Unit Kompetensi 4"
        )}

        {/* Unit Kompetensi 5 Assessment */}
        {renderAssessmentTable(
          formData.aktivitas5,
          "aktivitas5",
          "Unit Kompetensi 5"
        )}

        {/* Unit Kompetensi 6 Assessment */}
        {renderAssessmentTable(
          formData.aktivitas6,
          "aktivitas6",
          "Unit Kompetensi 6"
        )}

        {/* Kelompok Pekerjaan 3 */}
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "20%",
                  backgroundColor: "#2c3e50",
                  color: "white",
                }}
              ></th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "5%",
                  backgroundColor: "#2c3e50",
                  color: "white",
                }}
              >
                No.
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  width: "25%",
                  backgroundColor: "#2c3e50",
                  color: "white",
                }}
              >
                Kode Unit
              </th>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  backgroundColor: "#2c3e50",
                  color: "white",
                }}
              >
                Judul Unit
              </th>
            </tr>
          </thead>
          <tbody>
            {formData.kelompokPekerjaan3.map((item, index) => (
              <tr key={index}>
                {index === 0 && (
                  <td
                    rowSpan={formData.kelompokPekerjaan3.length}
                    style={{
                      border: "1px solid black",
                      padding: "8px",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "12px",
                      backgroundColor: "#2c3e50",
                      color: "white",
                    }}
                  >
                    Kelompok <br /> Pekerjaan 3
                  </td>
                )}
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    textAlign: "center",
                    fontSize: "12px",
                  }}
                >
                  {item.no}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    fontSize: "12px",
                  }}
                >
                  {item.kode}
                </td>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    fontSize: "12px",
                  }}
                >
                  {item.judul}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Unit Kompetensi 7 Assessment */}
        {renderAssessmentTable(
          formData.aktivitas7,
          "aktivitas7",
          "Unit Kompetensi 7"
        )}

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: "600",
              border: "2px solid #ff8c42",
              backgroundColor: "white",
              color: "#ff8c42",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Batal
          </button>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "#ff8c42",
              color: "white",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Simpan
          </button>
        </div>
      </div>
    );
}

export default CeklisObservasiAktivitas;