import React, { useState } from "react";

function ImportAsesmen({ onBack, onSubmit }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setFile(null);
      setPreview(null);
      alert("Please select a valid image file (e.g., PNG, JPG, JPEG, GIF).");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("image/")) {
      setFile(droppedFile);
      setPreview(URL.createObjectURL(droppedFile));
    } else {
      setFile(null);
      setPreview(null);
      alert("Please drop a valid image file (e.g., PNG, JPG, JPEG, GIF).");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = () => {
    if (file) {
      onSubmit(file);
      setFile(null);
      setPreview(null);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "700",
          color: "#000",
          marginBottom: "10px",
        }}
      >
        Import Asesmen
      </h1>
      <p style={{ fontSize: "16px", color: "#555", marginBottom: "30px" }}>
        Silahkan import file gambar asesmen di bawah ini
      </p>

      {/* Upload box */}
     <div
  onDrop={handleDrop}
  onDragOver={handleDragOver}
  style={{
    backgroundColor: "#fff",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "400px",
  }}
>
  <div
    style={{
      border: "2px dashed #ccc",
      borderRadius: "12px",
      padding: "40px 20px",
      cursor: "pointer",
    }}
  >
    {/* Bagian icon + teks hanya muncul kalau BELUM ada file */}
    {!file && (
      <>
        <div style={{ marginBottom: "20px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        </div>
        <p
          style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}
        >
          Import Gambar Asesmen
        </p>
        <p
          style={{ fontSize: "14px", color: "#777", marginBottom: "20px" }}
        >
          Drag & drop gambar atau klik untuk memilih
        </p>
      </>
    )}

    {/* Tombol + preview file */}
    <label
      style={{
        display: "inline-block",
        backgroundColor: "#fd7e14",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "500",
      }}
    >
      Import Gambar
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </label>

    {file && (
      <div style={{ marginTop: "15px" }}>
        <p
          style={{
            fontSize: "14px",
            color: "#333",
            fontWeight: "500",
            marginBottom: "10px",
          }}
        >
          File dipilih: {file.name}
        </p>
        {preview && (
          <img
            src={preview}
            alt="Preview"
            style={{
              maxWidth: "100%",
              maxHeight: "200px",
              borderRadius: "8px",
              marginTop: "10px",
            }}
          />
        )}
      </div>
    )}
  </div>
</div>


      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <button
          onClick={onBack}
          style={{
            backgroundColor: "#fd7e14",
            color: "#fff",
            border: "none",
            padding: "12px 40px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Kembali
        </button>
        <button
          onClick={handleSubmit}
          disabled={!file}
          style={{
            backgroundColor: !file ? "#ccc" : "#fd7e14",
            color: "#fff",
            border: "none",
            padding: "12px 40px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: !file ? "not-allowed" : "pointer",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ImportAsesmen;