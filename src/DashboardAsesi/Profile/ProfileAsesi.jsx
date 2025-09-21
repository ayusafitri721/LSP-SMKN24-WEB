import React, { useState, useEffect } from 'react';
import { FaPencilAlt } from 'react-icons/fa';

const ProfileAsesi = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const styles = {
    container: {
      backgroundColor: '#f5f5f5',
      padding: '20px',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      backgroundImage: 'linear-gradient(to top, rgba(255, 140, 0, 0.7), rgba(255, 140, 0, 0.7)), url("/src/img/kontak.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '180px',
      borderRadius: '15px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    },
    mainContent: {
      padding: isMobile ? '0 20px' : '0 50px',
      maxWidth: '1000px',
      margin: '0 auto',
      position: 'relative',
    },
    title: {
      textAlign: 'center',
      color: '#ff8c00',
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '30px',
    },
    gridContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '20px',
    },
    panel: {
      flex: '1',
      minWidth: '250px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    card: {
      backgroundColor: '#fff',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    },
    cardWithBorder: {
      backgroundColor: '#fff',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      borderLeft: '5px solid #ff8c00',
    },
    centerCard: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      textAlign: 'center',
      minWidth: '200px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    photoPlaceholder: {
      width: '100px',
      height: '100px',
      backgroundColor: '#f0f0f0',
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0 auto 10px',
      overflow: 'hidden',
    },
    statusBarContainer: {
      textAlign: 'center',
      marginTop: '30px',
    },
    statusBar: {
      backgroundColor: '#fff',
      display: 'inline-block',
      padding: '15px 40px',
      borderRadius: '10px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      color: '#2C94FF',
      fontSize: '1rem',
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: '100%',
      boxSizing: 'border-box'
    },
    editButtonContainer: {
      textAlign: 'right',
      marginTop: '20px',
    },
    editButton: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#ff8c00',
      fontSize: '1rem',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      cursor: 'pointer'
    },
  };

  return (
    <div style={styles.container}>
      {/* Header dengan gambar latar belakang */}
      <div style={styles.header}>
        <h1 style={{ color: 'white', fontSize: '48px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', letterSpacing: '2px' }}>
          MyLSP
        </h1>
      </div>

      {/* Konten Utama */}
      <div style={styles.mainContent}>
        <h2 style={styles.title}>Profil Anda</h2>
        
        {/* Grid Profil */}
        <div style={styles.gridContainer}>
          {/* Panel Kiri */}
          <div style={styles.panel}>
            <div style={styles.cardWithBorder}>
              <p style={{ margin: '0', fontSize: '0.8rem', color: '#666' }}>Jurusan</p>
              <h4 style={{ margin: '5px 0 0', fontSize: '1rem', fontWeight: 'normal' }}>Rekayasa Perangkat Lunak (RPL)</h4>
            </div>
            <div style={styles.cardWithBorder}>
              <p style={{ margin: '0', fontSize: '0.8rem', color: '#666' }}>Kelas</p>
              <h4 style={{ margin: '5px 0 0', fontSize: '1rem', fontWeight: 'normal' }}>XII RPL 1</h4>
            </div>
            <div style={styles.cardWithBorder}>
              <p style={{ margin: '0', fontSize: '0.8rem', color: '#666' }}>Jenis Kelamin</p>
              <h4 style={{ margin: '5px 0 0', fontSize: '1rem', fontWeight: 'normal' }}>Laki-Laki</h4>
            </div>
          </div>

          {/* Kartu Foto dan Nama di Tengah */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={styles.centerCard}>
              <div style={styles.photoPlaceholder}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#ccc"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14c-2.69 0-5.46 1.48-6 4H6c.54-2.52 3.31-4 6-4s5.46 1.48 6 4h.01c-.54-2.52-3.31-4-6-4zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg>
              </div>
              <p style={{ margin: '0', fontSize: '0.9rem', color: '#333' }}>
                Aldhal Izhar Rahma Pangestu
              </p>
            </div>
          </div>

          {/* Panel Kanan */}
          <div style={styles.panel}>
            <div style={styles.cardWithBorder}>
              <p style={{ margin: '0', fontSize: '0.8rem', color: '#666' }}>Tanggal lahir</p>
              <h4 style={{ margin: '5px 0 0', fontSize: '1rem', fontWeight: 'normal' }}>13/6/2007</h4>
            </div>
            <div style={styles.cardWithBorder}>
              <p style={{ margin: '0', fontSize: '0.8rem', color: '#666' }}>Alamat</p>
              <h4 style={{ margin: '5px 0 0', fontSize: '1rem', fontWeight: 'normal' }}>jalan TB. Simatupang no 86C, Jakarta Timur, DKI Jakarta</h4>
            </div>
          </div>
        </div>
        
        {/* Status Bar */}
        <div style={styles.statusBarContainer}>
          <div style={styles.statusBar}>
            PESERTA UJI KOMPETENSI SMKN 24 JAKARTA - ASESI
          </div>
        </div>

        {/* Tombol Edit */}
        <div style={styles.editButtonContainer}>
          <button style={styles.editButton}>
            <FaPencilAlt /> EDIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileAsesi;