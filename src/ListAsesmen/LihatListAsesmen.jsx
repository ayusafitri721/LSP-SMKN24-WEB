import React from "react";
import { useAssesment } from "../context/AssesmentContext";
import { useParams, useNavigate } from "react-router-dom";

function LihatListAsesmen({ onBack, onNavigate }) {
  const id = useParams();
  const { assesments, assesmentAsesis } = useAssesment();
  const navigate = useNavigate();

  // Cari data assesment berdasarkan id
  const data = assesments.find((a) => a.id.toString() === id.id);

  // Filter asesi yang terkait
  const filteredAsesmentAsesis = assesmentAsesis.filter(
    (item) => item.assesment_id.toString() === id.id
  );

  const handleBackClick = () => {
    navigate("/dashboard/list-asesmen");
  };

  if (!data) {
    return <p>Data assessment tidak ditemukan</p>;
  }


  const handleNavigateToApl01 = (item) => {
    onNavigate(`approvement/lihat/${item.user_id}`);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Header with Back Button */}
      <div
        style={{
          marginBottom: "25px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <button
          onClick={handleBackClick}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666",
            fontSize: "0",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f0f0")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#333",
            margin: "0",
          }}
        >
          Detail Asessment
        </h1>
      </div>

      {/* Assessment Sessions */}
          {/* Table with integrated session info */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #e0e0e0",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {/* Session Info di atas tabel */}
            <div
              style={{
                padding: "20px",
                backgroundColor: "#ffffff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  <span style={{ fontWeight: "500" }}>Nama Skema: </span>
                  <span>{data.schema.judul_skema}</span>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  <span style={{ fontWeight: "500" }}>Nama Asesor: </span>
                  <span>{data.assesor.nama_lengkap}</span>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  alignItems: "flex-end",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    color: "#333",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span style={{ fontWeight: "500" }}>TUK:</span>
                  <span
                    style={{
                      backgroundColor: "#e8f4f8",
                      color: "#2c5aa0",
                      padding: "4px 12px",
                      borderRadius: "12px",
                      fontSize: "12px",
                      fontWeight: "500",
                    }}
                  >
                    {data.tuk}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  <span style={{ fontWeight: "500" }}>Tanggal: </span>
                  <span>{data.tanggal_assesment}</span>
                </div>
              </div>
            </div>
{ filteredAsesmentAsesis.length === 0 ? (
            <div>
              <p
                style={{
                  padding: "20px",
                  fontSize: "14px",
                  color: "#666",
                }}
              >
                Tidak ada data asesi untuk asesmen ini. 
              </p>
            </div> ) : (
              <div
              style={{
                overflowX: "auto",
                width: "100%",
                boxSizing: "border-box",
                padding: "0 20px 20px 20px",
              }}
            >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr
                  style={{
                    backgroundColor: "#f8f9fa",
                  }}
                >
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#333",
                      borderTop: "1px solid #666",
                      borderBottom: "1px solid #666",
                      borderRight: "1px solid #666",
                      width: "80px",
                    }}
                  >
                    No
                  </th>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "left",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#333",
                      borderTop: "1px solid #666",
                      borderBottom: "1px solid #666",
                      borderRight: "1px solid #666",
                    }}
                  >
                    Nama Siswa
                  </th>
                  <th
                    style={{
                      padding: "16px 20px",
                      textAlign: "center",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#333",
                      borderTop: "1px solid #666",
                      borderBottom: "1px solid #666",
                      width: "120px",
                    }}
                  >
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAsesmentAsesis.map((student, index) => (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <td
                      style={{
                        padding: "16px 20px",
                        textAlign: "center",
                        fontSize: "14px",
                        color: "#333",
                        borderBottom: "1px solid #666",
                        borderRight: "1px solid #666",
                        verticalAlign: "middle",
                        fontWeight: "500",
                      }}
                    >
                      {student.id}
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        fontSize: "14px",
                        color: student.asesi.nama_lengkap ? "#333" : "#ccc",
                        borderBottom: "1px solid #666",
                        borderRight: "1px solid #666",
                        verticalAlign: "middle",
                      }}
                    >
                      {student.asesi.nama_lengkap || ""}
                    </td>
                    <td
                      style={{
                        padding: "16px 20px",
                        textAlign: "center",
                        verticalAlign: "middle",
                        borderBottom: "1px solid #666",
                      }}
                    >
                      {student.asesi.nama_lengkap && (
                        <button
                          onClick={() => handleNavigateToApl01(student.asesi)}
                          style={{
                            backgroundColor: "transparent",
                            color: "#666",
                            border: "1px solid #ddd",
                            borderRadius: "20px",
                            padding: "6px 16px",
                            cursor: "pointer",
                            fontSize: "12px",
                            fontWeight: "500",
                            transition: "all 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#f8f9fa";
                            e.target.style.borderColor = "#999";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.borderColor = "#ddd";
                          }}
                        >
                          Detail
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
            )}
              
              
            
          </div>
        
    </div>
  );
}

export default LihatListAsesmen;
