// src/DashboardAsesi/AK-03/AK-03.jsx

import React from 'react';
import NavAsesi from '../../components/NavAsesi';

const pageContainerStyle = {
  backgroundColor: '#f5f5f5',
  fontFamily: 'Arial, sans-serif',
  padding: '15px',
};

const navContainerStyle = {
  backgroundColor: 'white',
  padding: '5px 15px',
  borderRadius: '15px 15px 40px 15px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  margin: '15px 15px 0 15px',
  overflowX: 'auto',
  maxWidth: '50%',
  whiteSpace: 'nowrap',
};

const imageBannerStyle = {
  backgroundImage:
    "linear-gradient(rgba(255,140,0,0.7), rgba(255,140,0,0.7)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '160px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '15px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  marginTop: '20px',
};

const logoTextStyle = {
  color: 'white',
  fontSize: '48px',
  fontWeight: 'bold',
  margin: 0,
  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  letterSpacing: '2px',
};

const contentCardStyle = {
  backgroundColor: 'white',
  borderRadius: '15px',
  padding: '25px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  marginTop: '20px',
};

const AK03 = () => {
  return (
    <div style={pageContainerStyle}>
      <style>
        {`
          .nav-scrollbar::-webkit-scrollbar {
            height: 5px;
          }
          .nav-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .nav-scrollbar::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 5px;
          }
          .nav-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
      </style>
      <div style={navContainerStyle} className="nav-scrollbar">
        <NavAsesi activeTab="FR.AK.03" />
      </div>
      <div style={imageBannerStyle}>
        <h1 style={logoTextStyle}>
          MyLSP
        </h1>
      </div>
      <div style={contentCardStyle}>
        <h2>AK.03 - Laporan Hasil Asesmen</h2>
        <p>Halaman ini akan berisi detail formulir. Saat ini hanya teks placeholder.</p>
      </div>
    </div>
  );
};

export default AK03;