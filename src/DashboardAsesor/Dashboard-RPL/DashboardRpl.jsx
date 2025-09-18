import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardRpl = () => {
  const navigate = useNavigate();

  const asesiData = [
    { nama: "Ahmad Rizki", nis: "12345", status: "Belum Dinilai" },
    { nama: "Siti Nurhaliza", nis: "12346", status: "Sedang Dinilai" },
    { nama: "Budi Santoso", nis: "12347", status: "Lulus" },
    { nama: "Dewi Sartika", nis: "12348", status: "Belum Dinilai" },
    { nama: "Eko Prasetyo", nis: "12349", status: "Tidak Lulus" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Lulus":
        return "#10b981";
      case "Tidak Lulus":
        return "#ef4444";
      case "Sedang Dinilai":
        return "#f59e0b";
      default:
        return "#6b7280";
    }
  };

  // Fungsi untuk kembali ke Dashboard Asesor
  const handleBackClick = () => {
    navigate("../"); // Relative path ke parent route
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <button
          onClick={handleBackClick}
          style={{
            backgroundColor: "#6b7280",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "8px 16px",
            marginBottom: "15px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          ← Kembali
        </button>
        <h1
          style={{
            fontSize: "24px",
            color: "#1f2937",
            margin: "0 0 10px 0",
          }}
        >
          Dashboard RPL - PEMROGRAMAN WEB
        </h1>
        <p style={{ fontSize: "14px", color: "#6b7280", margin: "0" }}>
          SMKN 24 Jakarta • Status: On Going
        </p>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3
            style={{ fontSize: "14px", color: "#6b7280", margin: "0 0 8px 0" }}
          >
            Total Asesi
          </h3>
          <p
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#3b82f6",
              margin: "0",
            }}
          >
            {asesiData.length}
          </p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3
            style={{ fontSize: "14px", color: "#6b7280", margin: "0 0 8px 0" }}
          >
            Lulus
          </h3>
          <p
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#10b981",
              margin: "0",
            }}
          >
            {asesiData.filter((item) => item.status === "Lulus").length}
          </p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h3
            style={{ fontSize: "14px", color: "#6b7280", margin: "0 0 8px 0" }}
          >
            Belum Dinilai
          </h3>
          <p
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#f59e0b",
              margin: "0",
            }}
          >
            {asesiData.filter((item) => item.status === "Belum Dinilai").length}
          </p>
        </div>
      </div>

      {/* Daftar Asesi */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            color: "#1f2937",
            marginBottom: "20px",
          }}
        >
          Daftar Asesi
        </h2>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "2px solid #e5e7eb" }}>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                  }}
                >
                  No
                </th>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                  }}
                >
                  Nama Asesi
                </th>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                  }}
                >
                  NIS
                </th>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                  }}
                >
                  Status
                </th>
                <th
                  style={{
                    padding: "12px",
                    textAlign: "center",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#374151",
                  }}
                >
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {asesiData.map((asesi, index) => (
                <tr
                  key={index}
                  style={{
                    borderBottom: "1px solid #f3f4f6",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f9fafb";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <td
                    style={{
                      padding: "12px",
                      fontSize: "14px",
                      color: "#374151",
                    }}
                  >
                    {index + 1}
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      fontSize: "14px",
                      color: "#374151",
                    }}
                  >
                    {asesi.nama}
                  </td>
                  <td
                    style={{
                      padding: "12px",
                      fontSize: "14px",
                      color: "#6b7280",
                    }}
                  >
                    {asesi.nis}
                  </td>
                  <td style={{ padding: "12px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "500",
                        backgroundColor: `${getStatusColor(asesi.status)}20`,
                        color: getStatusColor(asesi.status),
                        border: `1px solid ${getStatusColor(asesi.status)}40`,
                      }}
                    >
                      {asesi.status}
                    </span>
                  </td>
                  <td style={{ padding: "12px", textAlign: "center" }}>
                    <button
                      style={{
                        backgroundColor: "#3b82f6",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        padding: "6px 12px",
                        fontSize: "12px",
                        cursor: "pointer",
                      }}
                      onClick={() => alert(`Menilai ${asesi.nama}`)}
                    >
                      Nilai
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardRpl;
