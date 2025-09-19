import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Styling untuk komponen (disalin dari HeaderLayout.jsx)
const mainHeaderStyle = {
  backgroundImage: 'url("https://i.ibb.co/CByYk5p/image-7fdd46.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
  fontSize: '48px',
  fontWeight: 'bold',
};

const subHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
  padding: '15px 20px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  margin: '0 auto',
  maxWidth: '900px',
  borderRadius: '12px',
  transform: 'translateY(-20px)',
  position: 'relative',
  zIndex: 1,
};

const titleStyle = {
  fontSize: '18px',
  fontWeight: '600',
  margin: 0,
  color: '#333',
};

const userLogoStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
};

const pageContainerStyle = {
  backgroundColor: '#f8f9fa',
  minHeight: '100vh',
  fontFamily: 'Roboto, sans-serif',
};

const contentContainerStyle = {
  padding: '20px',
  margin: '0 auto',
  maxWidth: '900px',
  backgroundColor: 'white',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4A90E2',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const Wawancara = () => {
  const { nis } = useParams();
  const navigate = useNavigate();

  return (
    <div style={pageContainerStyle}>
      {/* Header Utama */}
      <div style={mainHeaderStyle}>
        MyLSP
      </div>

      {/* Header Halaman tanpa Navigasi */}
      <div style={subHeaderStyle}>
        <h2 style={titleStyle}>FR.APL.02 ASESMEN MANDIRI</h2>
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=facearea&facepad=2&w=256&h=256&q=80" alt="User Logo" style={userLogoStyle} />
      </div>

      {/* Konten Halaman */}
      <div style={contentContainerStyle}>
        <h3>Wawancara</h3>
        <p>NIS Asesi: {nis}</p>
        <p>Isi konten formulir di sini...</p>
        <button onClick={() => navigate(-1)} style={buttonStyle}>
          Kembali ke Daftar Formulir
        </button>
      </div>
    </div>
  );
};

export default Wawancara;