import React from 'react';
import { useNavigate } from 'react-router-dom';

const AK04 = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', fontFamily: 'Arial, sans-serif', padding: '15px' }}>
      {/* Navigation Bar - Putih */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          backgroundColor: 'white',
          color: '#333',
          padding: '10px 20px',
          borderRadius: '15px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: '20px',
        }}
      >
        <div style={{ cursor: 'pointer' }} onClick={() => handleNavigate('/dashboard-asesi/apl-01')}>FR.APL.01</div>
        <div style={{ cursor: 'pointer' }} onClick={() => handleNavigate('/dashboard-asesi/apl-02')}>FR.APL.02</div>
        <div style={{ cursor: 'pointer' }} onClick={() => handleNavigate('/dashboard-asesi/ak-01')}>FR.AK.01</div>
        <div style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => handleNavigate('/dashboard-asesi/ak-04')}>FR.AK.04</div>
        <div style={{ cursor: 'pointer' }} onClick={() => handleNavigate('/dashboard-asesi/ia-01')}>FR.IA.01.CL</div>
        <div style={{ cursor: 'pointer' }} onClick={() => handleNavigate('/dashboard-asesi/ia-02')}>FR.IA.02.TPD</div>
        <div style={{ cursor: 'pointer' }} onClick={() => handleNavigate('/dashboard-asesi/ia-03')}>FR.IA.03</div>
        <div style={{ cursor: 'pointer' }} onClick={() => handleNavigate('/dashboard-asesi/ia-06')}>FR.IA.06A.DPT</div>
      </div>

      {/* Header dengan gambar, tema oranye, dan sudut melengkung */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,140,0,0.7), rgba(255,140,0,0.7)), url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '160px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        }}
      >
        <h1
          style={{
            color: 'white',
            fontSize: '48px',
            fontWeight: 'bold',
            margin: 0,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            letterSpacing: '2px',
          }}
        >
          MyLSP
        </h1>
      </div>

      {/* Konten Formulir (Dummy) */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '15px',
          padding: '25px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          marginTop: '20px',
        }}
      >
        <h2>AK.04 - Rekaman Asesmen</h2>
        <p>Halaman ini akan berisi detail formulir. Saat ini hanya teks placeholder.</p>
      </div>
    </div>
  );
};

export default AK04;