import React, { useState } from "react";
import { useAsesi } from "../../context/AsesiContext";
import { useApl01 } from "../../context/Apl01Context";
import { useJurusan } from "../../context/JurusanContext";
import { useNavigate } from "react-router-dom";

export default function DetailJurusan({
  onBack,
  onNavigate,
  currentTab = "APL-02",
}) {
  const { asesis } = useAsesi();
  const { apl01s } = useApl01();
  const { jurusanList } = useJurusan();
  const navigate = useNavigate();

  console.log("apl01s:", apl01s);
  console.log("asesis:", asesis);
  console.log("jurusanList:", jurusanList);

  const merged = [
    // APL-01
    ...apl01s.map((f) => ({
      user_id: f.user_id,
      nama_lengkap: f.nama_lengkap,
      email: f.email,
      status: f.status,
      jurusan: jurusanList.find((j) => j.id === f.user.jurusan_id) || null,
    })),

    // Asesi (accepted)
    ...asesis.map((a) => ({
      user_id: a.user_id,
      nama_lengkap: a.nama_lengkap,
      email: a.email,
      status: "accepted",
      jurusan: jurusanList.find((j) => j.id === a.jurusan_id) || null,
    })),
  ];

  // Hilangkan duplikat berdasarkan user_id (prioritas asesi → karena sudah accepted)
  const uniqueMerged = Array.from(
    new Map(merged.map((item) => [item.user_id, item])).values()
  );

  console.log("Unique Merged:", uniqueMerged);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedKelas, setSelectedKelas] = useState("Semua");

  // Filter data berdasarkan search dan kelas
  const filteredData = uniqueMerged.filter((item) => {
    const matchesSearch = item.nama_lengkap
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesKelas =
      selectedKelas === "Semua" || item.jurusan?.kode_jurusan === selectedKelas;
    return matchesSearch && matchesKelas;
  });

  const SearchIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#999"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "accepted":
        return "#28a745";
      case "rejected":
        return "#dc3545";
      default:
        return "#ffc107";
    }
  };

  const getRekomendasiStyle = (rekomendasi) => {
    switch (rekomendasi) {
      case "accepted":
        return {
          backgroundColor: "#28a745",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "11px",
          fontWeight: "500",
        };
      case "rejected":
        return {
          backgroundColor: "#dc3545",
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

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        boxSizing: "border-box",
        width: "100%",
        maxWidth: "calc(100vw - 250px)",
        margin: "0",
      }}
    >
      {/* Header with back button */}
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "40px" }}
      >
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
      </div>

      {/* Page Title */}
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "700",
          color: "#1a1a1a",
          margin: "0 0 30px 0",
        }}
      >
        Asesi
      </h1>

      {/* Filter Kelas */}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#6c757d"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18l-2 13H5L3 6z"></path>
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
        <div style={{ position: "relative" }}>
          <select
            value={selectedKelas}
            onChange={(e) => setSelectedKelas(e.target.value)}
            style={{
              padding: "6px 24px 6px 8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              fontSize: "13px",
              backgroundColor: "#ffffff",
              cursor: "pointer",
              minWidth: "80px",
              appearance: "none",
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: "right 6px center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "12px",
            }}
          >
            {/* Default option */}
            <option value="Semua">Semua</option>

            {/* Loop jurusan dari database */}
            {jurusanList.map((kelas) => (
              <option key={kelas.id} value={kelas.kode_jurusan}>
                {kelas.kode_jurusan}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Daftar Siswa Header */}
      <div style={{ marginBottom: "20px" }}>
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#1a1a1a",
            margin: 0,
          }}
        >
          Daftar Siswa
        </h2>
      </div>

      {/* Table */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f8f9fa" }}>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#495057",
                    width: "60px",
                    borderRight: "1px solid #e0e0e0",
                  }}
                >
                  No
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#495057",
                    minWidth: "200px",
                    borderRight: "1px solid #e0e0e0",
                  }}
                >
                  Nama Siswa
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "center",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#495057",
                    minWidth: "100px",
                    borderRight: "1px solid #e0e0e0",
                  }}
                >
                  Kelas
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "center",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#495057",
                    minWidth: "80px",
                    borderRight: "1px solid #e0e0e0",
                  }}
                >
                  Status
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "center",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#495057",
                    minWidth: "120px",
                    borderRight: "1px solid #e0e0e0",
                  }}
                >
                  Rekomendasi
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "center",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#495057",
                    minWidth: "80px",
                  }}
                >
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr
                    key={`${item.email}-${index}`}
                    style={{ borderBottom: "1px solid #e0e0e0" }}
                  >
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "13px",
                        color: "#495057",
                        verticalAlign: "middle",
                        borderRight: "1px solid #e0e0e0",
                      }}
                    >
                      {index + 1}.
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        fontSize: "13px",
                        color: "#212529",
                        fontWeight: "400",
                        verticalAlign: "middle",
                        borderRight: "1px solid #e0e0e0",
                      }}
                    >
                      {item.nama_lengkap}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        textAlign: "center",
                        fontSize: "13px",
                        color: "#495057",
                        verticalAlign: "middle",
                        borderRight: "1px solid #e0e0e0",
                      }}
                    >
                      {item.jurusan?.kode_jurusan || "-"}
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        textAlign: "center",
                        verticalAlign: "middle",
                        borderRight: "1px solid #e0e0e0",
                      }}
                    >
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          backgroundColor: getStatusColor(item.status),
                          borderRadius: "2px",
                          margin: "0 auto",
                        }}
                      ></div>
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        textAlign: "center",
                        verticalAlign: "middle",
                        borderRight: "1px solid #e0e0e0",
                      }}
                    >
                      <span style={getRekomendasiStyle(item.status)}>
                        {item.rekomendasi}
                      </span>
                    </td>
                    <td
                      style={{
                        padding: "16px",
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}
                    >
                      <button
                        onClick={() =>
                          navigate(
                            `/dashboard/approvement/lihat/${item.user_id}`
                          )
                        }
                        style={{
                          backgroundColor: "#ff6b35",
                          color: "#ffffff",
                          border: "none",
                          borderRadius: "4px",
                          padding: "5px 12px",
                          fontSize: "12px",
                          cursor: "pointer",
                          fontWeight: "500",
                          transition: "background-color 0.2s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.backgroundColor = "#e96a00")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.backgroundColor = "#ff6b35")
                        }
                      >
                        Lihat
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    style={{
                      padding: "30px",
                      textAlign: "center",
                      color: "#999",
                      fontSize: "13px",
                    }}
                  >
                    {searchTerm || selectedKelas !== "Semua"
                      ? "Tidak ada data yang sesuai dengan filter"
                      : "Belum ada data siswa"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
