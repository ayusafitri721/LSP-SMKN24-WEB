import { useState } from "react";
import ManajemenData from "./ManajemenData";
import ListAsesmen from "../ListAsesmen/ListAsesmen";
import AsesmenDiikuti from "../AsesmenDiikuti/AsesmenDiikuti";
import Approvement from "../DetailAsesi/APL-01/Approvement";
import logoImage from "/src/img/image 12.png";
import { useAuth } from "../context/AuthContext";
import { useAsesor } from "../context/AsesorContext";
import { useAsesi } from "../context/AsesiContext";
import { useSkema } from "../context/SkemaContext";
import { useAssesment } from "../context/AssesmentContext";

// KOMPONEN SIDEBAR YANG BISA DI-EXPORT (seperti Navbar)
export function DashboardSidebar({ activeMenu, onMenuClick }) {

  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        paddingTop: "20px",
        paddingBottom: "20px",
        position: "relative",
        borderRadius: "20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        margin: "15px",
        height: "calc(100vh - 30px)",
      }}
    >
      {/* Logo Section */}
      <div
        style={{
          padding: "20px 30px",
          marginBottom: "30px",
          textAlign: "center",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
            marginBottom: "15px",
          }}
        >
          <img
            src={logoImage}
            alt="LSP Logo"
            style={{
              width: "200%",
              height: "200%",
              objectFit: "contain",
              borderRadius: "12px",
            }}
          />
        </div>
        <h3
          style={{
            margin: "0",
            fontSize: "16px",
            fontWeight: "600",
            color: "#1a1a1a",
          }}
        ></h3>
      </div>

      {/* Menu Items */}
      <div style={{ flex: 1, paddingLeft: "20px", paddingRight: "20px" }}>
        {/* Dashboard Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px 20px",
            marginBottom: "8px",
            backgroundColor:
              activeMenu === "Dashboard" ? "#ff6b35" : "transparent",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: activeMenu === "Dashboard" ? "white" : "#666",
          }}
          onClick={() => onMenuClick("Dashboard")}
          onMouseEnter={(e) => {
            if (activeMenu !== "Dashboard") {
              e.currentTarget.style.backgroundColor = "#f8f9fa";
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== "Dashboard") {
              e.currentTarget.style.backgroundColor = "transparent";
            }
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginRight: "15px" }}
          >
            <path
              d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 22V12H15V22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: "15px", fontWeight: "500" }}>Dashboard</span>
        </div>

        {/* Manajemen Data Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px 20px",
            marginBottom: "8px",
            backgroundColor:
              activeMenu === "ManajemenData" ? "#ff6b35" : "transparent",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: activeMenu === "ManajemenData" ? "white" : "#666",
          }}
          onClick={() => onMenuClick("ManajemenData")}
          onMouseEnter={(e) => {
            if (activeMenu !== "ManajemenData") {
              e.currentTarget.style.backgroundColor = "#f8f9fa";
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== "ManajemenData") {
              e.currentTarget.style.backgroundColor = "transparent";
            }
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginRight: "15px" }}
          >
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="7"
              r="4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: "15px", fontWeight: "500" }}>
            Manajemen data
          </span>
        </div>

        {/* List Asesmen Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px 20px",
            marginBottom: "8px",
            backgroundColor:
              activeMenu === "ListAsesmen" ? "#ff6b35" : "transparent",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: activeMenu === "ListAsesmen" ? "white" : "#666",
          }}
          onClick={() => onMenuClick("ListAsesmen")}
          onMouseEnter={(e) => {
            if (activeMenu !== "ListAsesmen") {
              e.currentTarget.style.backgroundColor = "#f8f9fa";
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== "ListAsesmen") {
              e.currentTarget.style.backgroundColor = "transparent";
            }
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginRight: "15px" }}
          >
            <line
              x1="8"
              y1="6"
              x2="21"
              y2="6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="8"
              y1="12"
              x2="21"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="8"
              y1="18"
              x2="21"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="3"
              y1="6"
              x2="3.01"
              y2="6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="3"
              y1="12"
              x2="3.01"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="3"
              y1="18"
              x2="3.01"
              y2="18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: "15px", fontWeight: "500" }}>
            List Asesmen
          </span>
        </div>

        {/* Approvement Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px 20px",
            marginBottom: "8px",
            backgroundColor:
              activeMenu === "Approvement" ? "#ff6b35" : "transparent",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: activeMenu === "Approvement" ? "white" : "#666",
          }}
          onClick={() => onMenuClick("Approvement")}
          onMouseEnter={(e) => {
            if (activeMenu !== "Approvement") {
              e.currentTarget.style.backgroundColor = "#f8f9fa";
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== "Approvement") {
              e.currentTarget.style.backgroundColor = "transparent";
            }
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginRight: "15px" }}
          >
            <path
              d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: "15px", fontWeight: "500" }}>
            Detail Asesi
          </span>
        </div>
      </div>

      {/* Bottom Menu Items */}
      <div
        style={{
          paddingLeft: "20px",
          paddingRight: "20px",
          borderTop: "1px solid #f0f0f0",
          paddingTop: "20px",
        }}
      >
        {/* Profile Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px 20px",
            marginBottom: "8px",
            backgroundColor:
              activeMenu === "Profile" ? "#ff6b35" : "transparent",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: activeMenu === "Profile" ? "white" : "#666",
          }}
          onClick={() => onMenuClick("Profile")}
          onMouseEnter={(e) => {
            if (activeMenu !== "Profile") {
              e.currentTarget.style.backgroundColor = "#f8f9fa";
            }
          }}
          onMouseLeave={(e) => {
            if (activeMenu !== "Profile") {
              e.currentTarget.style.backgroundColor = "transparent";
            }
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginRight: "15px" }}
          >
            <path
              d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="7"
              r="4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span style={{ fontSize: "15px", fontWeight: "500" }}>Profile</span>
        </div>

        {/* Logout Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "15px 20px",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.2s ease",
            color: "#666",
          }}
          onClick={() => onMenuClick("Logout")}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f8f9fa";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginRight: "15px" }}
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
          <span style={{ fontSize: "15px", fontWeight: "500" }}>Log out</span>
        </div>
      </div>
    </div>
  );
}

function ProfileSection() {
  const [profileImage, setProfileImage] = useState(null);
  const [ktpImage, setKtpImage] = useState(null);
  const [bukuTabunganImage, setBukuTabunganImage] = useState(null);
  const [sertifikatImage, setSertifikatImage] = useState(null);

  const cardStyle = {
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
    padding: "20px",
    marginBottom: "20px",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    fontSize: "15px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontWeight: "500",
    color: "#333",
  };

  // Function to handle image upload
  const handleImageUpload = (event, setImageFunction) => {
    const file = event.target.files[0];
    if (file) {
      // Check file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert("Ukuran file terlalu besar. Maksimal 2MB.");
        return;
      }

      // Check file type
      if (!file.type.match("image.*")) {
        alert("Hanya file gambar yang diperbolehkan.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setImageFunction(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to create upload area
  const createUploadArea = (
    title,
    description,
    imageState,
    setImageFunction,
    accept = "image/*"
  ) => (
    <div
      style={{
        flex: 1,
        backgroundColor: "#fff",
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
      }}
    >
      <label
        style={{ fontWeight: "600", marginBottom: "10px", display: "block" }}
      >
        {title}
      </label>

      <input
        type="file"
        accept={accept}
        onChange={(e) => handleImageUpload(e, setImageFunction)}
        style={{ display: "none" }}
        id={`upload-${title.toLowerCase().replace(/\s+/g, "-")}`}
      />

      <label
        htmlFor={`upload-${title.toLowerCase().replace(/\s+/g, "-")}`}
        style={{
          border: "2px dashed #e0e0e0",
          borderRadius: "12px",
          padding: imageState ? "20px" : "45px",
          textAlign: "center",
          cursor: "pointer",
          display: "block",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#ff6b35";
          e.currentTarget.style.backgroundColor = "#fff5f2";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#e0e0e0";
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      >
        {imageState ? (
          <div>
            <img
              src={imageState}
              alt={title}
              style={{
                maxWidth: "100%",
                maxHeight: "150px",
                borderRadius: "8px",
                marginBottom: "10px",
              }}
            />
            <p style={{ color: "#666", fontSize: "14px", margin: "5px 0" }}>
              Klik untuk ganti gambar
            </p>
          </div>
        ) : (
          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#ccc"
              style={{ marginBottom: "10px" }}
            >
              <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM13.96 12.29L11.21 15.83L9.25 13.47L6.5 17H17.5L13.96 12.29Z" />
            </svg>
            <p style={{ color: "#666", fontSize: "14px" }}>{description}</p>
            <p style={{ color: "#999", fontSize: "12px", marginTop: "5px" }}>
              Format: JPG, PNG, Maksimal 2MB
            </p>
          </div>
        )}
      </label>
    </div>
  );

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        padding: "30px",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "600" }}>PROFIL ANDA</h1>
        <p style={{ color: "#666" }}>Lengkapi informasi profil anda</p>
      </div>

      {/* Foto Profil */}
      <div style={cardStyle}>
        <h2
          style={{ fontSize: "18px", fontWeight: "600", marginBottom: "15px" }}
        >
          Foto Profil
        </h2>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload(e, setProfileImage)}
          style={{ display: "none" }}
          id="upload-profile"
        />

        <label
          htmlFor="upload-profile"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            border: "2px dashed #e0e0e0",
            borderRadius: "12px",
            padding: "20px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#ff6b35";
            e.currentTarget.style.backgroundColor = "#fff5f2";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#e0e0e0";
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          {/* Profile Image Preview */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#f5f5f5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <svg width="40" height="40" viewBox="0 0 24 24" fill="#ccc">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            )}

            {/* Camera Icon Overlay */}
            <div
              style={{
                position: "absolute",
                bottom: "5px",
                right: "5px",
                backgroundColor: "#ff6b35",
                borderRadius: "50%",
                width: "24px",
                height: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-2c.828 0 1.58.335 2.121.879l.879.879H18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3l.879-.879A3 3 0 0 1 12 5z" />
              </svg>
            </div>
          </div>

          {/* Text Upload */}
          <div>
            <p style={{ fontWeight: "500", marginBottom: "5px" }}>
              {profileImage
                ? "Klik untuk ganti foto profil"
                : "Upload Foto Profil"}
            </p>
            <p style={{ fontSize: "14px", color: "#666" }}>
              Format PNG, JPG, Maksimal 2MB
            </p>
          </div>
        </label>
      </div>

      {/* Informasi Pribadi */}
      <div style={cardStyle}>
        <h2
          style={{ fontSize: "18px", fontWeight: "600", marginBottom: "15px" }}
        >
          Informasi Pribadi
        </h2>

        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>Nama Lengkap</label>
          <input type="text" style={inputStyle} />
        </div>

        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Tempat Lahir</label>
            <input type="text" style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Tanggal Lahir</label>
            <input type="date" style={inputStyle} />
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>Alamat</label>
          <textarea style={{ ...inputStyle, minHeight: "100px" }} />
        </div>

        <div style={{ display: "flex", gap: "20px" }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Nomor HP</label>
            <input type="tel" style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Email</label>
            <input type="email" style={inputStyle} />
          </div>
        </div>
      </div>

      {/* Card Informasi Dokumen */}
      <div style={cardStyle}>
        <h2
          style={{ fontSize: "18px", fontWeight: "600", marginBottom: "15px" }}
        >
          Informasi Dokumen
        </h2>

        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Nomor KTP</label>
            <input type="text" style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>NPWP</label>
            <input type="text" style={inputStyle} />
          </div>
        </div>

        <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Nomor Sertifikat Kompetensi</label>
            <input type="text" style={inputStyle} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Nomor Rekening</label>
            <input type="text" style={inputStyle} />
          </div>
        </div>
      </div>

      {/* Upload Dokumen dalam satu baris */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {createUploadArea("KTP", "Upload KTP", ktpImage, setKtpImage)}
        {createUploadArea(
          "Buku Tabungan",
          "Upload Buku Tabungan",
          bukuTabunganImage,
          setBukuTabunganImage
        )}
        {createUploadArea(
          "Sertifikat Kompetensi",
          "Upload Sertifikat Kompetensi",
          sertifikatImage,
          setSertifikatImage
        )}
      </div>

      {/* Tombol Simpan */}
      <button
        style={{
          backgroundColor: "#ff6b35",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
          marginTop: "30px",
          width: "100%",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#e05a2b")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#ff6b35")
        }
        onClick={() => {
          // Simulasi penyimpanan data
          console.log("Data yang akan disimpan:", {
            profileImage,
            ktpImage,
            bukuTabunganImage,
            sertifikatImage,
          });

          // Tampilkan pesan sukses
          alert("Data profil berhasil disimpan!");
        }}
      >
        Simpan Perubahan
      </button>
    </div>
  );
}

function Dashboard({ onBack, onNavigate }) {
  const { user } = useAuth();
  const { asesors } = useAsesor();
  const { asesis } = useAsesi();
  const { skemaList } = useSkema();
  const { assesments } = useAssesment();

  const handleDetailClick = () => {
    window.location.href = "/dashboard/list-asesmen";
  };

  return (
    <div
      style={{
        flex: 1,
        padding: "20px",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Header Section */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "24px",
          marginBottom: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#1a1a1a",
              margin: "0 0 8px 0",
            }}
          >
            Halo, {user ? user.username : "Guest"}
          </h1>
          <p
            style={{
              color: "#666",
              fontSize: "14px",
              margin: 0,
            }}
          >
            Selamat datang di panel administrasi asesmen
          </p>
        </div>
        <div
          style={{
            width: "20px",
            height: "48px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="../src/img/LONCENG.png"
            alt="notification"
            style={{ width: "42px", height: "42px" }}
          />
        </div>
      </div>

      {/* Statistics Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "10px",
          marginBottom: "24px",
        }}
      >
        {/* Jumlah Asesor */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            border: "1px solid #f0f0f0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "4px",
                marginRight: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
              }}
            >
              <img
                src="../src/img/ASESOR.png"
                alt="asesor"
                style={{ width: "15px", height: "15px" }}
              />
            </div>
            <span
              style={{
                color: "#666",
                fontSize: "13px",
                fontWeight: "500",
              }}
            >
              Jumlah Asesor
            </span>
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#1a1a1a",
            }}
          >
            { asesors ? asesors.length : 0 }
          </div>
        </div>

        {/* Jumlah Asesi */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            border: "1px solid #f0f0f0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "4px",
                marginRight: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
              }}
            >
              <img
                src="../src/img/ASESI.png"
                alt="asesi"
                style={{ width: "15px", height: "15px" }}
              />
            </div>
            <span
              style={{
                color: "#666",
                fontSize: "13px",
                fontWeight: "500",
              }}
            >
              Jumlah Asesi
            </span>
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#1a1a1a",
            }}
          >
            { asesis ? asesis.length : 0 }
          </div>
        </div>

        {/* Jumlah Skema */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            border: "1px solid #f0f0f0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "4px",
                marginRight: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
              }}
            >
              <img
                src="../src/img/SKEMA.png"
                alt="skema"
                style={{ width: "15px", height: "15px" }}
              />
            </div>
            <span
              style={{
                color: "#666",
                fontSize: "13px",
                fontWeight: "500",
              }}
            >
              Jumlah Skema
            </span>
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#1a1a1a",
            }}
          >
            { skemaList ? skemaList.length : 0 }
          </div>
        </div>
      </div>

      {/* List Assessment Section */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          border: "1px solid #f0f0f0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "4px",
              marginRight: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
            }}
          >
            <img
              src="../src/img/LISTASESMEN_ICON.png"
              alt="list"
              style={{ width: "32px", height: "32px" }}
            />
          </div>
          <h2
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#1a1a1a",
              margin: 0,
            }}
          >
            List Assessment
          </h2>
        </div>

        {/* Assessment Items */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {
            /* [
            {
              batch: "TKJ Batch 12",
              date: "16 Agustus 2025",
              time: "00:00 - 01:00",
              location: "Kampung Raya",
              participants: "TKJ24",
            },
            {
              batch: "TKJ Batch 12",
              date: "16 Agustus 2025",
              time: "00:00 - 01:00",
              location: "Kampung Raya",
              participants: "TKJ24",
            },
          ] */
          assesments.map((assesments, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px",
                backgroundColor: "#f8f9fa",
                borderRadius: "12px",
                border: "1px solid #e9ecef",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#1a1a1a",
                    marginRight: "20px",
                    minWidth: "140px",
                  }}
                >
                  Asesmen {assesments.schema.judul_skema}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "12px",
                      color: "#666",
                    }}
                  >
                    <img
                      src="../src/img/logo jadwal.png"
                      alt="date"
                      style={{ width: "14px", height: "14px" }}
                    />
                    <span style={{ marginLeft: "6px" }}>{assesments.tanggal_assesment}</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "12px",
                      color: "#666",
                    }}
                  >
                    <img
                      src="../src/img/JAM_ICON.png"
                      alt="time"
                      style={{ width: "14px", height: "14px" }}
                    />
                    <span style={{ marginLeft: "6px" }}>{assesments.tanggal_mulai.split(" ")[1].slice(0, 5)} - {assesments.tanggal_selesai.split(" ")[1].slice(0, 5)}</span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "12px",
                      color: "#666",
                    }}
                  >
                    <img
                      src="../src/img/LOKASI_ICON.png"
                      alt="location"
                      style={{ width: "14px", height: "14px" }}
                    />
                    <span style={{ marginLeft: "6px" }}>
                      {assesments.tuk}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "12px",
                      color: "#666",
                    }}
                  >
                    <img
                      src="../src/img/PERSON_ICON.png"
                      alt="participants"
                      style={{ width: "14px", height: "14px" }}
                    />
                    <span style={{ marginLeft: "6px" }}>
                      {assesments.schema.jurusan.jenjang} {assesments.schema.jurusan.kode_jurusan}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleDetailClick}
                style={{
                  backgroundColor: "#f8f9fa",
                  border: "1px solid #e9ecef",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontSize: "12px",
                  color: "#666",
                  cursor: "pointer",
                  fontWeight: "500",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#e9ecef";
                  e.currentTarget.style.color = "#495057";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f8f9fa";
                  e.currentTarget.style.color = "#666";
                }}
              >
                Detail
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// MAIN EXPORT - Hanya content dashboard, tanpa sidebar
export default function DashboardContent({ onBack, onNavigate, activeMenu }) {
  if (activeMenu === "Profile") {
    return <ProfileSection />;
  }

  if (activeMenu === "ManajemenData") {
    return <ManajemenData onNavigate={onNavigate} />;
  }

  if (activeMenu === "AsesmenDiikuti") {
    return <AsesmenDiikuti />;
  }

  // Default dashboard content
  return <Dashboard onBack={onBack} onNavigate={onNavigate} />;
}
