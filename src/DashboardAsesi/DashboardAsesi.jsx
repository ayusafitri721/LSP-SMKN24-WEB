import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useJurusan } from "../context/JurusanContext";
import { useDashboardAsesi } from "../context/DashboardAsesiContext";
import { useAssesment } from "../context/AssesmentContext";

// Menerima prop 'onNavigate' dari komponen induk
function DashboardAsesi({ onNavigate }) {
  const { assesments } = useAssesment();
  const { currentAssesi, apl01data } = useDashboardAsesi();
  const { user } = useAuth();
  const { jurusanList } = useJurusan();

  console.log(jurusanList);
  console.log("Current Assesi:", currentAssesi);
  console.log("APL01 Data:", apl01data);

  // Fix: Handle case when jurusanList or user might be null/undefined
  const jurusan = jurusanList?.find((j) => j.id === user?.jurusan_id);
  const namaJurusan = jurusan?.kode_jurusan || "Jurusan tidak ditemukan";

  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    // Konfirmasi logout dengan notifikasi
    const confirmLogout = window.confirm("Apakah Anda yakin ingin keluar?");
    if (confirmLogout) {
      // Redirect ke home page setelah konfirmasi
      window.location.href = "/";
    }
  };

  const handleEditAccount = () => {
    if (onNavigate) {
      onNavigate("EditAccount");
    } else {
      alert("Edit Account function not implemented");
    }
  };

  // Fix: Check if APL01 data exists properly
  const hasApl01Data =
    apl01data &&
    (Array.isArray(apl01data)
      ? apl01data.length > 0
      : Object.keys(apl01data).length > 0);
  const hasAssesments = assesments && assesments.length > 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
        padding: "15px",
      }}
    >
      {/* Header with background image */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,140,0,0.7), rgba(255,140,0,0.7)), url('/src/img/kontak.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "160px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        {/* Profile icon top right */}
        <div
          style={{
            position: "absolute",
            top: "15px",
            right: "15px",
            width: "35px",
            height: "35px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(255,255,255,0.3)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="7"
              r="4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1
          style={{
            color: "white",
            fontSize: "48px",
            fontWeight: "bold",
            margin: 0,
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            letterSpacing: "2px",
          }}
        >
          MyLSP
        </h1>
      </div>

      {/* Info Cards */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          margin: "20px 0",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "12px 20px",
            borderRadius: "15px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            fontSize: "13px",
            fontWeight: "600",
            color: "#333",
          }}
        >
          {namaJurusan} - SMKN 24
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "12px 25px",
            borderRadius: "15px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            fontSize: "13px",
            fontWeight: "600",
            flex: 1,
            textAlign: "center",
            color: "#333",
            minWidth: "300px",
          }}
        >
          PESERTA UJI KOMPETENSI SMKN 24 JAKARTA
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "12px 20px",
            borderRadius: "15px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            fontSize: "13px",
            fontWeight: "600",
            color: "#333",
          }}
        >
          {new Date()
            .toLocaleDateString("id-ID", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
            .toUpperCase()}
        </div>
      </div>

      {/* Main Content - Separated Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        {/* Left Panel - Photo and Profile Cards */}
        <div
          style={{
            width: "220px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {/* User Info Separated */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {[
              { label: "Username", value: user?.username || "Tidak tersedia" },
              { label: "Jurusan", value: namaJurusan },
              { label: "Role", value: user?.role || "Tidak tersedia" },
            ].map((item, index) => (
              <p
                key={index}
                style={{
                  fontSize: "12px",
                  color: "#666",
                  margin: "0",
                  lineHeight: "1.5",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                {item.label}: {item.value}
              </p>
            ))}
          </div>

          {/* Address and Gender Info */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {currentAssesi ? (
              <>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#666",
                    margin: "0",
                    lineHeight: "1.5",
                    fontWeight: "500",
                  }}
                >
                  Alamat: {currentAssesi.alamat || "Alamat tidak tersedia"}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#666",
                    margin: "0",
                    lineHeight: "1.5",
                    fontWeight: "500",
                  }}
                >
                  Jenis Kelamin:{" "}
                  {currentAssesi.jenis_kelamin || "Tidak diketahui"}
                </p>
                <button
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "15px",
                    padding: "12px 20px",
                    fontSize: "11px",
                    cursor: "pointer",
                    fontWeight: "600",
                    marginTop: "8px",
                    transition: "all 0.2s ease",
                  }}
                >
                  Valid
                </button>

                {/* Edit Account Button */}
                <button
                  onClick={handleEditAccount}
                  style={{
                    backgroundColor: "transparent",
                    color: "#FF8C00",
                    border: "none",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    fontSize: "11px",
                    cursor: "pointer",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#fff3e0";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.5 2.50023C18.8978 2.10243 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.10243 21.5 2.50023C21.8978 2.89804 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.10243 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Edit Account
                </button>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  style={{
                    backgroundColor: "transparent",
                    color: "#dc3545",
                    border: "none",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    fontSize: "11px",
                    cursor: "pointer",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#ffebee";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="16,17 21,12 16,7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="21"
                      y1="12"
                      x2="9"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Logout
                </button>
              </>
            ) : (
              <div>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#666",
                    margin: "0",
                    lineHeight: "1.5",
                    fontWeight: "500",
                  }}
                >
                  Data belum tersedia, silahkan isi form APL 01 dulu
                </p>
                <button
                  onClick={() => onNavigate && onNavigate("APL.01")}
                  style={{
                    backgroundColor: "#FF5722",
                    color: "white",
                    border: "none",
                    borderRadius: "15px",
                    padding: "12px 20px",
                    fontSize: "11px",
                    cursor: "pointer",
                    fontWeight: "600",
                    marginTop: "8px",
                    transition: "all 0.2s ease",
                  }}
                >
                  Tidak Valid
                </button>

                {/* Edit Account Button for when no data */}
                <button
                  onClick={handleEditAccount}
                  style={{
                    backgroundColor: "transparent",
                    color: "#FF8C00",
                    border: "none",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    fontSize: "11px",
                    cursor: "pointer",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "all 0.2s ease",
                    marginTop: "8px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#fff3e0";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.5 2.50023C18.8978 2.10243 19.4374 1.87891 20 1.87891C20.5626 1.87891 21.1022 2.10243 21.5 2.50023C21.8978 2.89804 22.1213 3.43762 22.1213 4.00023C22.1213 4.56284 21.8978 5.10243 21.5 5.50023L12 15.0002L8 16.0002L9 12.0002L18.5 2.50023Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Edit Account
                </button>

                {/* Logout Button for when no data */}
                <button
                  onClick={handleLogout}
                  style={{
                    backgroundColor: "transparent",
                    color: "#dc3545",
                    border: "none",
                    borderRadius: "8px",
                    padding: "8px 12px",
                    fontSize: "11px",
                    cursor: "pointer",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#ffebee";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="16,17 21,12 16,7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <line
                      x1="21"
                      y1="12"
                      x2="9"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Assessment Preview Card */}
        <div
          style={{
            flex: 1,
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "25px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            height: "fit-content",
            minHeight: "200px",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "600",
              margin: "0 0 20px 0",
              color: "#333",
            }}
          >
            Status Assessment
          </h3>

          {/* Show status based on APL01 and assessment data */}
          {!hasApl01Data ? (
            <div
              style={{
                backgroundColor: "#fff3cd",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #ffeeba",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "#856404",
                  margin: "0 0 15px 0",
                  fontWeight: "500",
                }}
              >
                Anda belum mengisi form APL01
              </p>
              <button
                onClick={() => onNavigate && onNavigate("APL.01")}
                style={{
                  backgroundColor: "#FF5722",
                  color: "white",
                  border: "none",
                  borderRadius: "25px",
                  padding: "12px 25px",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                }}
              >
                Isi Form APL01
              </button>
            </div>
          ) : !hasAssesments ? (
            <div
              style={{
                backgroundColor: "#d1ecf1",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #bee5eb",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "#0c5460",
                  margin: "0",
                  fontWeight: "500",
                }}
              >
                Form APL01 sudah diisi. Menunggu jadwal assessment dari admin.
              </p>
            </div>
          ) : (
            <div
              style={{
                backgroundColor: "#2C94FF",
                borderRadius: "12px",
                padding: "18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0 4px 12px rgba(44, 148, 255, 0.3)",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "500",
                  flex: 1,
                }}
              >
                Assessment tersedia - Siap untuk dimulai
              </span>
              <button
                onClick={() => onNavigate && onNavigate("assessment")}
                style={{
                  backgroundColor: "#D9D9D9",
                  color: "black",
                  border: "none",
                  borderRadius: "25px",
                  padding: "10px 25px",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  marginLeft: "15px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "translateY(-1px)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.transform = "translateY(0)")
                }
              >
                Lihat Detail
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Assessment Terjadwal Component - Fix: Remove duplicate content */}
      {hasApl01Data && (
        <div
          style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            marginTop: "20px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              marginBottom: "20px",
              color: "#333",
            }}
          >
            Assessment Terjadwal
          </h3>

          {hasAssesments ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              {assesments.map((assessment) => (
                <div
                  key={assessment.id}
                  style={{
                    backgroundColor: "#2C94FF",
                    borderRadius: "12px",
                    padding: "18px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    boxShadow: "0 4px 12px rgba(44, 148, 255, 0.3)",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      flex: 1,
                    }}
                  >
                    <h4
                      style={{
                        margin: "0 0 5px 0",
                        fontSize: "15px",
                        fontWeight: "600",
                      }}
                    >
                      {assessment.nama_jadwal || "Assessment Kompetensi"}
                    </h4>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "13px",
                        opacity: "0.9",
                      }}
                    >
                      TUK: {assessment.tuk || "Tidak tersedia"}
                    </p>
                    {assessment.tanggal && (
                      <p
                        style={{
                          margin: "5px 0 0 0",
                          fontSize: "12px",
                          opacity: "0.8",
                        }}
                      >
                        Tanggal:{" "}
                        {new Date(assessment.tanggal).toLocaleDateString(
                          "id-ID"
                        )}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() =>
                      onNavigate &&
                      onNavigate("assessment", { assessmentId: assessment.id })
                    }
                    style={{
                      backgroundColor: "#D9D9D9",
                      color: "black",
                      border: "none",
                      borderRadius: "25px",
                      padding: "10px 25px",
                      fontSize: "13px",
                      fontWeight: "600",
                      cursor: "pointer",
                      marginLeft: "15px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      transition: "transform 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "translateY(-1px)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "translateY(0)")
                    }
                  >
                    Mulai
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                backgroundColor: "#f8f9fa",
                padding: "30px",
                borderRadius: "12px",
                textAlign: "center",
                border: "2px dashed #dee2e6",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  color: "#6c757d",
                  margin: "0",
                  fontWeight: "500",
                }}
              >
                Tidak ada assessment terjadwal saat ini
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "#6c757d",
                  margin: "5px 0 0 0",
                  opacity: "0.8",
                }}
              >
                Silakan hubungi admin untuk informasi lebih lanjut
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DashboardAsesi;
