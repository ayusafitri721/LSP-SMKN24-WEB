import React, { useState } from "react";
import { useApl01 } from "../../context/Apl01Context";
import { useParams } from "react-router-dom";

function LihatApprovement({ onBack, onNavigate }) {
  const id = useParams();
  const { apl01s } = useApl01();

  const selectedApl01 = apl01s.find((item) => item.user_id === parseInt(id.id));
  console.log("apl01: ", selectedApl01);

  // Tambahkan import dan state di bagian atas component
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAttachment, setSelectedAttachment] = useState(null);

  const handleViewAttachment = (attachment) => {
    setSelectedAttachment(attachment);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedAttachment(null);
  };

  const [formData, setFormData] = useState({
    namaJadwal: "Permohonan Sertifikasi Kompetensi",
    tuk: "Ditempat",
    tanggalUjian: selectedApl01?.created_at.slice(0, 10) || "",
    namaLengkap: selectedApl01?.nama_lengkap || "",
    nik: selectedApl01?.no_ktp || "",
    ttl:
      `${selectedApl01?.tempat_lahir}, ${selectedApl01?.tanggal_lahir}` || "",
    jenisKelamin:
      selectedApl01?.jenis_kelamin === "Laki-laki" ? "laki" : "perempuan",
    kewarganegaraan: selectedApl01?.kebangsaan || "",
    alamatRumah: selectedApl01?.alamat_rumah || "",
    noTelepon: selectedApl01?.no_telepon || "",
    kualifikasi: selectedApl01?.kualifikasi_pendidikan || "",
    namaInstitusi: selectedApl01?.nama_institusi || "",
    jabatan: selectedApl01?.jabatan || "",
    namaMentor: "",
    noTeleponEmail: `${selectedApl01?.no_telepon_kantor || ""} / ${
      selectedApl01?.email_kantor || ""
    }`,
    skemaSertifikasi:
      selectedApl01?.sertification_data.schema.judul_skema || "",
    judul: selectedApl01?.sertification_data.schema.judul_skema || "",
    nomor: selectedApl01?.sertification_data.schema.nomor_skema || "",
    units: Array.from(
      { length: selectedApl01?.sertification_data.schema.units.length || 0 },
      (_, i) => ({
        no: i + 1,
        kodeUnit: "",
        judulUnit: "",
        standarKompetensi: "",
      })
    ),
    tujuan: selectedApl01?.sertification_data?.tujuan_asesmen || "",
    buktiPersyaratan: [
      {
        no: 1,
        bukti:
          "Salinan legalisir KK dan Kartu Komputer Keluarga Rekayasa Perangkat Lunak semester 1 s.d. 5 yang telah menyertakan nilai pengetahuan mata pelajaran Konfigurasi Perangkat Keras dan Jaringan Perangkat Lunak",
        memenuhi: false,
        tidakMemenuhi: false,
        tidakAda: false,
      },
      {
        no: 2,
        bukti:
          "Salinan sertifikat/surat keterangan tentang kursus atau kursus singkat (PKL) atau pelatihan pengembangan perangkat lunak",
        memenuhi: false,
        tidakMemenuhi: false,
        tidakAda: false,
      },
    ],
    buktiAdministratif: [
      {
        no: 1,
        bukti: "Salinan Kartu Pelajar",
        memenuhi: false,
        tidakMemenuhi: false,
        tidakAda: false,
      },
      {
        no: 2,
        bukti: "Salinan Kartu Pelajar/KTP",
        memenuhi: false,
        tidakMemenuhi: false,
        tidakAda: false,
      },
      {
        no: 3,
        bukti: "Pas foto 3 x 4 berwarna sebanyak 2 lembar",
        memenuhi: false,
        tidakMemenuhi: false,
        tidakAda: false,
      },
    ],
  });

  const units =
    selectedApl01?.sertification_data?.schema?.units?.map((unit, index) => ({
      no: index + 1,
      kodeUnit: unit.kode_unit || "",
      judulUnit: unit.judul_unit || "",
      standarKompetensi: unit.standar_kompetensi || "", // kalau ada
    })) || [];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleUnitChange = (index, field, value) => {
    const newUnits = [...formData.units];
    newUnits[index] = { ...newUnits[index], [field]: value };
    setFormData((prev) => ({ ...prev, units: newUnits }));
  };

  const handleCheckboxChange = (type, index, field) => {
    const newData = [...formData[type]];
    newData[index] = {
      ...newData[index],
      memenuhi: false,
      tidakMemenuhi: false,
      tidakAda: false,
      [field]: true,
    };
    setFormData((prev) => ({ ...prev, [type]: newData }));
  };

  const handleNavigateToApl02 = () => {
    if (onNavigate) {
      onNavigate("detail/ia-01");
    }
  };
  if (!selectedApl01) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "0",
        margin: "0",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "100%",
          padding: "0",
          margin: "0",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "24px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            margin: "0",
            minHeight: "100vh",
          }}
        >
          {/* Header Navigation */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            {/* Back Button */}
            <button
              onClick={onBack}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                marginRight: "20px",
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

            {/* Nav Tabs */}
            <div
              style={{
                display: "flex",
                backgroundColor: "#ffffff",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                padding: "4px",
              }}
            >
              <button
                style={{
                  padding: "12px 20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  border: "none",
                  backgroundColor: "#ff6b35", // aktif
                  color: "white",
                  borderRadius: "8px",
                  cursor: "pointer",
                  margin: "4px",
                  flexShrink: 0,
                  minWidth: "fit-content",
                }}
              >
                FR.APL.01
              </button>
              <button
                onClick={() =>
                  onNavigate && onNavigate("approvement/APL-02/lihat")
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
                FR.APL.02
              </button>
              <button
                onClick={() =>
                  onNavigate && onNavigate("approvement/AK-01/lihat")
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
                FR.AK.01
              </button>
            </div>
          </div>

          {/* Kontainer Form Utama - Mulai dari atas */}
          <div
            style={{
              display: "flex",
              gap: "24px",
              width: "100%",
              alignItems: "flex-start",
            }}
          >
            {/* Kolom Kiri */}
            <div style={{ flex: 1, minWidth: "400px" }}>
              {/* Data Jadwal - Pindah ke kiri */}
              <div
                style={{
                  marginBottom: "24px",
                  border: "2px solid #fd7e14",
                  borderRadius: "8px",
                  padding: "16px",
                  backgroundColor: "white",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <label
                      style={{
                        minWidth: "120px",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#333",
                      }}
                    >
                      Nama Jadwal
                    </label>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      :
                    </span>
                    <input
                      disabled={true}
                      type="text"
                      value="Permohonan Sertifikasi Kompetensi"
                      onChange={(e) =>
                        handleInputChange("namaJadwal", e.target.value)
                      }
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <label
                      style={{
                        minWidth: "120px",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#333",
                      }}
                    >
                      TUK
                    </label>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      :
                    </span>
                    <input
                      disabled={true}
                      type="text"
                      value="Ditempat"
                      onChange={(e) => handleInputChange("tuk", e.target.value)}
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <label
                      style={{
                        minWidth: "120px",
                        fontSize: "14px",
                        fontWeight: "500",
                        color: "#333",
                      }}
                    >
                      Tanggal Ujian
                    </label>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      :
                    </span>
                    <input
                      disabled={true}
                      type="date"
                      value={formData.tanggalUjian}
                      onChange={(e) =>
                        handleInputChange("tanggalUjian", e.target.value)
                      }
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* Bagian 1: Rincian Data */}
              <div style={{ marginBottom: "24px" }}>
                {/* Header Bagian 1 */}
                <div
                  style={{
                    backgroundColor: "#fd7e14",
                    color: "white",
                    padding: "12px 16px",
                    borderRadius: "6px",
                    fontSize: "16px",
                    fontWeight: "600",
                    marginBottom: "8px",
                    width: "100%",
                  }}
                >
                  Bagian 1: Rincian Data
                </div>

                {/* A. Data Pribadi */}
                <div
                  style={{
                    backgroundColor: "#ffb74d",
                    color: "white",
                    padding: "8px 16px",
                    fontSize: "14px",
                    fontWeight: "500",
                    borderRadius: "6px",
                    marginBottom: "8px",
                    width: "100%",
                  }}
                >
                  A. Data Pribadi
                </div>

                <div
                  style={{
                    padding: "16px",
                    border: "2px solid #fd7e14",
                    borderRadius: "6px",
                    backgroundColor: "white",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <label
                      style={{
                        minWidth: "200px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Nama Lengkap
                    </label>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      :
                    </span>
                    <input
                      disabled={true}
                      type="text"
                      value={formData.namaLengkap}
                      onChange={(e) =>
                        handleInputChange("namaLengkap", e.target.value)
                      }
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <label
                      style={{
                        minWidth: "200px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      No KTP/NIK/Paspor
                    </label>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      :
                    </span>
                    <input
                      disabled={true}
                      type="text"
                      value={formData.nik}
                      onChange={(e) => handleInputChange("nik", e.target.value)}
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <label
                      style={{
                        minWidth: "200px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      TTL
                    </label>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      :
                    </span>
                    <input
                      disabled={true}
                      type="text"
                      value={formData.ttl}
                      onChange={(e) => handleInputChange("ttl", e.target.value)}
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <label
                      style={{
                        minWidth: "200px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Jenis Kelamin
                    </label>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      :
                    </span>
                    <div style={{ display: "flex", gap: "16px" }}>
                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <input
                          disabled={true}
                          type="radio"
                          name="jenisKelamin"
                          value="laki"
                          checked={formData.jenisKelamin === "laki"}
                          onChange={(e) =>
                            handleInputChange("jenisKelamin", e.target.value)
                          }
                        />
                        Laki-laki
                      </label>
                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        <input
                          disabled={true}
                          type="radio"
                          name="jenisKelamin"
                          value="perempuan"
                          checked={formData.jenisKelamin === "perempuan"}
                          onChange={(e) =>
                            handleInputChange("jenisKelamin", e.target.value)
                          }
                        />
                        Perempuan
                      </label>
                    </div>
                  </div>

                  <div
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <label
                      style={{
                        minWidth: "200px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Kewarganegaraan
                    </label>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      :
                    </span>
                    <input
                      disabled={true}
                      type="text"
                      value={formData.kewarganegaraan}
                      onChange={(e) =>
                        handleInputChange("kewarganegaraan", e.target.value)
                      }
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <label
                      style={{
                        minWidth: "200px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Alamat Rumah
                    </label>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      :
                    </span>
                    <input
                      disabled={true}
                      type="text"
                      value={formData.alamatRumah}
                      onChange={(e) =>
                        handleInputChange("alamatRumah", e.target.value)
                      }
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <label
                      style={{
                        minWidth: "200px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      No Telepon/Email
                    </label>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      :
                    </span>
                    <input
                      disabled={true}
                      type="text"
                      value={formData.noTelepon}
                      onChange={(e) =>
                        handleInputChange("noTelepon", e.target.value)
                      }
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <label
                      style={{
                        minWidth: "200px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Kualifikasi Pendidikan
                    </label>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      :
                    </span>
                    <input
                      disabled={true}
                      type="text"
                      value={formData.kualifikasi}
                      onChange={(e) =>
                        handleInputChange("kualifikasi", e.target.value)
                      }
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>
                </div>

                {/* B. Data Pekerjaan Sekarang */}
                <div
                  style={{
                    backgroundColor: "#ffb74d",
                    color: "white",
                    padding: "8px 16px",
                    fontSize: "14px",
                    fontWeight: "500",
                    borderRadius: "6px",
                    marginBottom: "8px",
                    width: "100%",
                  }}
                >
                  B. Data Pekerjaan Sekarang
                </div>

                <div
                  style={{
                    padding: "16px",
                    border: "2px solid #fd7e14",
                    borderRadius: "6px",
                    backgroundColor: "white",
                  }}
                >
                  <div
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <label
                      style={{
                        minWidth: "200px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Nama Institusi
                    </label>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      :
                    </span>
                    <input
                      disabled={true}
                      type="text"
                      value={formData.namaInstitusi}
                      onChange={(e) =>
                        handleInputChange("namaInstitusi", e.target.value)
                      }
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <label
                      style={{
                        minWidth: "200px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Jabatan
                    </label>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      :
                    </span>
                    <input
                      disabled={true}
                      type="text"
                      value={formData.jabatan}
                      onChange={(e) =>
                        handleInputChange("jabatan", e.target.value)
                      }
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <label
                      style={{
                        minWidth: "200px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Nama Mentor
                    </label>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      :
                    </span>
                    <input
                      disabled={true}
                      type="text"
                      value={formData.namaMentor}
                      onChange={(e) =>
                        handleInputChange("namaMentor", e.target.value)
                      }
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <label
                      style={{
                        minWidth: "200px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      No Telepon/Email
                    </label>
                    <span style={{ fontSize: "14px", fontWeight: "500" }}>
                      :
                    </span>
                    <input
                      disabled={true}
                      type="text"
                      value={formData.noTeleponEmail}
                      onChange={(e) =>
                        handleInputChange("noTeleponEmail", e.target.value)
                      }
                      style={{
                        flex: 1,
                        padding: "8px 12px",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        fontSize: "14px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Section Attachments - Tambahkan setelah tombol Approve/Decline */}
              {selectedApl01?.attachments &&
                selectedApl01.attachments.length > 0 && (
                  <div style={{ marginTop: "24px" }}>
                    <h3 style={{ marginBottom: "16px", color: "#333" }}>
                      Dokumen Pendukung
                    </h3>
                    {selectedApl01.attachments.map((attachment, index) => (
                      <div
                        key={index}
                        style={{
                          border: "1px solid #ddd",
                          borderRadius: "8px",
                          padding: "16px",
                          marginBottom: "12px",
                          backgroundColor: "white",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <h4 style={{ margin: 0, marginBottom: "8px" }}>
                            {attachment.nama_dokumen}
                          </h4>
                          <p
                            style={{
                              margin: 0,
                              color: "#666",
                              fontSize: "14px",
                            }}
                          >
                            {attachment.description}
                          </p>
                        </div>
                        <button
                          onClick={() => handleViewAttachment(attachment)}
                          style={{
                            padding: "8px 16px",
                            backgroundColor: "#007bff",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                          }}
                        >
                          Lihat Dokumen
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              {/* Upload Barcode */}
              <div
                style={{
                  marginBottom: "24px",
                  border: "2px solid #fd7e14",
                  borderRadius: "8px",
                  padding: "24px",
                  backgroundColor: "white",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "16px",
                  }}
                >
                  <button
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#28a745",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "500",
                    }}
                  >
                    Approve
                  </button>
                  <button
                    style={{
                      padding: "10px 20px",
                      backgroundColor: "#dc3545",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "500",
                    }}
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>

            {/* Kolom Kanan */}
            <div style={{ flex: 1, minWidth: "500px" }}>
              {/* Bagian 2: Data Sertifikasi - Sejajar dengan jadwal form */}
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    backgroundColor: "#fd7e14",
                    color: "white",
                    padding: "12px 16px",
                    borderRadius: "6px 6px 0 0",
                    fontSize: "16px",
                    fontWeight: "600",
                    width: "100%",
                  }}
                >
                  Bagian 2: Data Sertifikasi
                </div>

                <div
                  style={{
                    padding: "16px",
                    border: "2px solid #fd7e14",
                    borderTop: "none",
                    backgroundColor: "white",
                    borderRadius: "0 0 6px 6px",
                  }}
                >
                  <div style={{ marginBottom: "16px" }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: "12px",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Skema Sertifikasi
                    </label>
                    <div
                      style={{
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <label
                        style={{
                          minWidth: "80px",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        Judul
                      </label>
                      <span style={{ fontSize: "14px", fontWeight: "500" }}>
                        :
                      </span>
                      <input
                        disabled={true}
                        type="text"
                        value={formData.judul}
                        onChange={(e) =>
                          handleInputChange("judul", e.target.value)
                        }
                        style={{
                          flex: 1,
                          padding: "8px 12px",
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <label
                        style={{
                          minWidth: "80px",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        Nomor
                      </label>
                      <span style={{ fontSize: "14px", fontWeight: "500" }}>
                        :
                      </span>
                      <input
                        disabled={true}
                        type="text"
                        value={formData.nomor}
                        onChange={(e) =>
                          handleInputChange("nomor", e.target.value)
                        }
                        style={{
                          flex: 1,
                          padding: "8px 12px",
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <label
                        style={{
                          minWidth: "80px",
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        Tujuan
                      </label>
                      <span style={{ fontSize: "14px", fontWeight: "500" }}>
                        :
                      </span>
                      <select
                        disabled={true}
                        value={formData.tujuan}
                        onChange={(e) =>
                          handleInputChange("tujuan", e.target.value)
                        }
                        style={{
                          flex: 1,
                          padding: "8px 12px",
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          fontSize: "14px",
                        }}
                      >
                        <option value="">-----</option>
                        <option value="sertifikasi">Sertifikasi</option>
                        <option value="rekertifikasi">Rekertifikasi</option>
                      </select>
                    </div>
                  </div>

                  {/* Tabel Unit */}
                  <div style={{ marginBottom: "16px" }}>
                    <table
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: "14px",
                      }}
                    >
                      <thead>
                        <tr style={{ backgroundColor: "#f8f9fa" }}>
                          <th
                            style={{
                              border: "2px solid #fd7e14",
                              padding: "8px",
                              textAlign: "center",
                              width: "40px",
                            }}
                          >
                            No
                          </th>
                          <th
                            style={{
                              border: "2px solid #fd7e14",
                              padding: "8px",
                              textAlign: "center",
                            }}
                          >
                            Kode Unit
                          </th>
                          <th
                            style={{
                              border: "2px solid #fd7e14",
                              padding: "8px",
                              textAlign: "center",
                            }}
                          >
                            Judul Unit
                          </th>
                          <th
                            style={{
                              border: "2px solid #fd7e14",
                              padding: "8px",
                              textAlign: "center",
                            }}
                          >
                            Standar Kompetensi Kerja
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {units.map((unit, index) => (
                          <tr key={index}>
                            <td
                              style={{
                                border: "2px solid #fd7e14",
                                padding: "8px",
                                textAlign: "center",
                              }}
                            >
                              {unit.no}
                            </td>
                            <td
                              style={{
                                border: "2px solid #fd7e14",
                                padding: "8px",
                              }}
                            >
                              <input
                                disabled={true}
                                type="text"
                                value={unit.kodeUnit}
                                onChange={(e) =>
                                  handleUnitChange(
                                    index,
                                    "kodeUnit",
                                    e.target.value
                                  )
                                }
                                style={{
                                  width: "100%",
                                  border: "none",
                                  padding: "0",
                                  fontSize: "14px",
                                }}
                              />
                            </td>
                            <td
                              style={{
                                border: "2px solid #fd7e14",
                                padding: "8px",
                              }}
                            >
                              <input
                                disabled={true}
                                type="text"
                                value={unit.judulUnit}
                                onChange={(e) =>
                                  handleUnitChange(
                                    index,
                                    "judulUnit",
                                    e.target.value
                                  )
                                }
                                style={{
                                  width: "100%",
                                  border: "none",
                                  padding: "0",
                                  fontSize: "14px",
                                }}
                              />
                            </td>
                            <td
                              style={{
                                border: "2px solid #fd7e14",
                                padding: "8px",
                              }}
                            >
                              <input
                                disabled={true}
                                type="text"
                                value={unit.standarKompetensi}
                                onChange={(e) =>
                                  handleUnitChange(
                                    index,
                                    "standarKompetensi",
                                    e.target.value
                                  )
                                }
                                style={{
                                  width: "100%",
                                  border: "none",
                                  padding: "0",
                                  fontSize: "14px",
                                }}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Bagian 3: Bukti Kelengkapan Permohonan */}
              <div style={{ marginBottom: "24px" }}>
                <div
                  style={{
                    backgroundColor: "#fd7e14",
                    color: "white",
                    padding: "12px 16px",
                    borderRadius: "6px 6px 0 0",
                    fontSize: "16px",
                    fontWeight: "600",
                    width: "100%",
                  }}
                >
                  Bagian 3: Bukti Kelengkapan Permohonan
                </div>

                {/* 3.1 Bukti Persyaratan Pemohon */}
                <div style={{ marginBottom: "16px" }}>
                  <div
                    style={{
                      backgroundColor: "#ffb74d",
                      color: "white",
                      padding: "8px 16px",
                      fontSize: "14px",
                      fontWeight: "500",
                      border: "2px solid #fd7e14",
                      borderTop: "none",
                    }}
                  >
                    3.1 Bukti Persyaratan Pemohon
                  </div>

                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: "14px",
                    }}
                  >
                    <thead>
                      <tr style={{ backgroundColor: "#f8f9fa" }}>
                        <th
                          style={{
                            border: "2px solid #fd7e14",
                            padding: "8px",
                            textAlign: "center",
                            width: "40px",
                          }}
                        >
                          No
                        </th>
                        <th
                          style={{
                            border: "2px solid #fd7e14",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          Bukti Persyaratan Dasar
                        </th>
                        <th
                          style={{
                            border: "2px solid #fd7e14",
                            padding: "8px",
                            textAlign: "center",
                            width: "80px",
                          }}
                        >
                          Memenuhi Syarat
                        </th>
                        <th
                          style={{
                            border: "2px solid #fd7e14",
                            padding: "8px",
                            textAlign: "center",
                            width: "80px",
                          }}
                        >
                          Tidak Memenuhi Syarat
                        </th>
                        <th
                          style={{
                            border: "2px solid #fd7e14",
                            padding: "8px",
                            textAlign: "center",
                            width: "60px",
                          }}
                        >
                          Tidak Ada
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.buktiPersyaratan.map((item, index) => (
                        <tr key={index}>
                          <td
                            style={{
                              border: "2px solid #fd7e14",
                              padding: "8px",
                              textAlign: "center",
                            }}
                          >
                            {item.no}
                          </td>
                          <td
                            style={{
                              border: "2px solid #fd7e14",
                              padding: "8px",
                            }}
                          >
                            {item.bukti}
                          </td>
                          <td
                            style={{
                              border: "2px solid #fd7e14",
                              padding: "8px",
                              textAlign: "center",
                            }}
                          >
                            <input
                              disabled={true}
                              type="checkbox"
                              checked={item.memenuhi}
                              onChange={() =>
                                handleCheckboxChange(
                                  "buktiPersyaratan",
                                  index,
                                  "memenuhi"
                                )
                              }
                              style={{ transform: "scale(1.2)" }}
                            />
                          </td>
                          <td
                            style={{
                              border: "2px solid #fd7e14",
                              padding: "8px",
                              textAlign: "center",
                            }}
                          >
                            <input
                              disabled={true}
                              type="checkbox"
                              checked={item.tidakMemenuhi}
                              onChange={() =>
                                handleCheckboxChange(
                                  "buktiPersyaratan",
                                  index,
                                  "tidakMemenuhi"
                                )
                              }
                              style={{ transform: "scale(1.2)" }}
                            />
                          </td>
                          <td
                            style={{
                              border: "2px solid #fd7e14",
                              padding: "8px",
                              textAlign: "center",
                            }}
                          >
                            <input
                              disabled={true}
                              type="checkbox"
                              checked={item.tidakAda}
                              onChange={() =>
                                handleCheckboxChange(
                                  "buktiPersyaratan",
                                  index,
                                  "tidakAda"
                                )
                              }
                              style={{ transform: "scale(1.2)" }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* 3.2 Bukti Administratif */}
                <div>
                  <div
                    style={{
                      backgroundColor: "#ffb74d",
                      color: "white",
                      padding: "8px 16px",
                      fontSize: "14px",
                      fontWeight: "500",
                      border: "2px solid #fd7e14",
                    }}
                  >
                    3.2 Bukti Administratif
                  </div>

                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      fontSize: "14px",
                      borderRadius: "0 0 6px 6px",
                    }}
                  >
                    <thead>
                      <tr style={{ backgroundColor: "#f8f9fa" }}>
                        <th
                          style={{
                            border: "2px solid #fd7e14",
                            padding: "8px",
                            textAlign: "center",
                            width: "40px",
                          }}
                        >
                          No
                        </th>
                        <th
                          style={{
                            border: "2px solid #fd7e14",
                            padding: "8px",
                            textAlign: "center",
                          }}
                        >
                          Bukti Persyaratan Dasar
                        </th>
                        <th
                          style={{
                            border: "2px solid #fd7e14",
                            padding: "8px",
                            textAlign: "center",
                            width: "80px",
                          }}
                        >
                          Memenuhi Syarat
                        </th>
                        <th
                          style={{
                            border: "2px solid #fd7e14",
                            padding: "8px",
                            textAlign: "center",
                            width: "80px",
                          }}
                        >
                          Tidak Memenuhi Syarat
                        </th>
                        <th
                          style={{
                            border: "2px solid #fd7e14",
                            padding: "8px",
                            textAlign: "center",
                            width: "60px",
                          }}
                        >
                          Tidak Ada
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {formData.buktiAdministratif.map((item, index) => (
                        <tr key={index}>
                          <td
                            style={{
                              border: "2px solid #fd7e14",
                              padding: "8px",
                              textAlign: "center",
                            }}
                          >
                            {item.no}
                          </td>
                          <td
                            style={{
                              border: "2px solid #fd7e14",
                              padding: "8px",
                            }}
                          >
                            {item.bukti}
                          </td>
                          <td
                            style={{
                              border: "2px solid #fd7e14",
                              padding: "8px",
                              textAlign: "center",
                            }}
                          >
                            <input
                              disabled={true}
                              type="checkbox"
                              checked={item.memenuhi}
                              onChange={() =>
                                handleCheckboxChange(
                                  "buktiAdministratif",
                                  index,
                                  "memenuhi"
                                )
                              }
                              style={{ transform: "scale(1.2)" }}
                            />
                          </td>
                          <td
                            style={{
                              border: "2px solid #fd7e14",
                              padding: "8px",
                              textAlign: "center",
                            }}
                          >
                            <input
                              disabled={true}
                              type="checkbox"
                              checked={item.tidakMemenuhi}
                              onChange={() =>
                                handleCheckboxChange(
                                  "buktiAdministratif",
                                  index,
                                  "tidakMemenuhi"
                                )
                              }
                              style={{ transform: "scale(1.2)" }}
                            />
                          </td>
                          <td
                            style={{
                              border: "2px solid #fd7e14",
                              padding: "8px",
                              textAlign: "center",
                            }}
                          >
                            <input
                              disabled={true}
                              type="checkbox"
                              checked={item.tidakAda}
                              onChange={() =>
                                handleCheckboxChange(
                                  "buktiAdministratif",
                                  index,
                                  "tidakAda"
                                )
                              }
                              style={{ transform: "scale(1.2)" }}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PDF Modal - Tambahkan sebelum </div> terakhir */}
      {modalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "20px",
              maxWidth: "90%",
              maxHeight: "90%",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <h3 style={{ margin: 0 }}>{selectedAttachment?.nama_dokumen}</h3>
              <button
                onClick={closeModal}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "24px",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>

            <div
              style={{
                width: "800px",
                height: "600px",
                border: "1px solid #ddd",
              }}
            >
              <iframe
                src={selectedAttachment?.view_url}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                title={selectedAttachment?.nama_dokumen}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LihatApprovement;
