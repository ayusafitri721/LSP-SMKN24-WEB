import React from 'react';

function ManajemenData({ onNavigate }) {
  const styles = {
    container: {
      width: '100%',
      height: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden'
    },
    header: {
      backgroundColor: 'white',
      padding: '40px 0',
      textAlign: 'center',
      borderBottom: '1px solid #e0e0e0'
    },
    headerTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#000',
      margin: 0,
      letterSpacing: '2px'
    },
    content: {
      height: 'calc(100vh - 140px)',
      overflowY: 'auto',
      padding: '0'
    },
    section: {
      backgroundColor: 'white',
      padding: '30px 40px',
      borderBottom: '1px solid #d0d0d0'
    },
    sectionTitle: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: '#000',
      marginBottom: '20px',
      margin: '0 0 20px 0'
    },
    dataContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '25px',
      maxWidth: '600px'
    },
    dataItem: {
      color: '#333',
      fontSize: '1rem'
    },
    dataLabel: {
      fontWeight: '500'
    },
    button: {
      backgroundColor: '#ff9500',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      fontWeight: '500',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'background-color 0.2s'
    },
    buttonHover: {
      backgroundColor: '#e6850e'
    }
  };

  const handleButtonHover = (e, isHover) => {
    e.target.style.backgroundColor = isHover ? styles.buttonHover.backgroundColor : styles.button.backgroundColor;
  };

  const handleNavigation = (page) => {
    // Callback untuk navigasi ke parent component atau router
    if (onNavigate) {
      onNavigate(page);
    } else {
      // Fallback jika tidak ada onNavigate prop
      console.log(`Navigate to: ${page}`);
      // Anda bisa ganti dengan router navigation seperti:
      // window.location.href = `/${page}`;
      // atau menggunakan React Router: navigate(`/${page}`);
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>
          MANAJEMEN DATA
        </h1>
      </div>

      {/* Scrollable Content */}
      <div style={styles.content}>
        {/* ASESOR Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>ASESOR</h2>
          <div style={styles.dataContainer}>
            <div style={styles.dataItem}>
              <span style={styles.dataLabel}>Peserta: </span>
              <span>67</span>
            </div>
            <div style={styles.dataItem}>
              <span style={styles.dataLabel}>Aktif: </span>
              <span>67</span>
            </div>
            <div style={styles.dataItem}>
              <span style={styles.dataLabel}>Tervalidasi: </span>
              <span>61</span>
            </div>
          </div>
          <button 
            style={styles.button}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
            onClick={() => handleNavigation('Asesor')}
          >
            Kelola Data
          </button>
        </div>

        {/* ASESI Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>ASESI</h2>
          <div style={styles.dataContainer}>
            <div style={styles.dataItem}>
              <span style={styles.dataLabel}>Peserta: </span>
              <span>4000</span>
            </div>
            <div style={styles.dataItem}>
              <span style={styles.dataLabel}>Lorem Ipsum</span>
            </div>
            <div style={styles.dataItem}>
              <span style={styles.dataLabel}>Lorem Ipsum</span>
            </div>
          </div>
          <button 
            style={styles.button}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
            onClick={() => handleNavigation('Asesi')}
          >
            Kelola Data
          </button>
        </div>

        {/* ASESMEN Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>ASESMEN</h2>
          <div style={styles.dataContainer}>
            <div style={styles.dataItem}>
              <span style={styles.dataLabel}>Skema: </span>
              <span>4000</span>
            </div>
          </div>
          <button 
            style={styles.button}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
            onClick={() => handleNavigation('Asesmen')}
          >
            Kelola Data
          </button>
        </div>

        {/* JURUSAN Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>JURUSAN</h2>
          <div style={styles.dataContainer}>
            <div style={styles.dataItem}>
              <span style={styles.dataLabel}>Program: </span>
              <span>5</span>
            </div>
          </div>
          <button 
            style={styles.button}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
            onClick={() => handleNavigation('Jurusan')}
          >
            Kelola Data
          </button>
        </div>

        {/* SKEMA Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>SKEMA</h2>
          <div style={styles.dataContainer}>
            <div style={styles.dataItem}>
              <span style={styles.dataLabel}>Program: </span>
              <span>5</span>
            </div>
          </div>
          <button 
            style={styles.button}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
            onClick={() => handleNavigation('Kompetensi')}
          >
            Kelola Data
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManajemenData;