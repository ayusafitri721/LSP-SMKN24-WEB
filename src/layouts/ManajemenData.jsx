import React from 'react';

function ManajemenData({ onNavigate }) {
  const styles = {
    container: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      padding: '0',
      margin: '0'
    },
    header: {
      backgroundColor: '#ffffff',
      padding: '2rem 0',
      textAlign: 'center',
      marginBottom: '2rem',
      borderBottom: 'none',
      boxShadow: 'none'
    },
    headerTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#000000',
      margin: 0,
      letterSpacing: '1px'
    },
    content: {
      width: '100%',
      margin: '0',
      padding: '0 2rem',
      paddingBottom: '2rem'
    },
    section: {
      backgroundColor: '#ffffff',
      padding: '2rem',
      marginBottom: '1px',
      borderRadius: '0',
      border: 'none',
      borderBottom: '2px solid #d0d0d0',
      boxShadow: 'none',
      transition: 'none'
    },
    sectionTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#000000',
      marginBottom: '1.5rem',
      margin: '0 0 1.5rem 0'
    },
    statsContainer: {
      display: 'flex',
      gap: '6rem',
      marginBottom: '2rem',
      flexWrap: 'wrap',
      justifyContent: 'flex-start'
    },
    statItem: {
      display: 'flex',
      flexDirection: 'row',
      gap: '0',
      alignItems: 'baseline'
    },
    statLabel: {
      fontSize: '1rem',
      fontWeight: '400',
      color: '#000000',
      display: 'inline'
    },
    statValue: {
      fontSize: '1rem',
      fontWeight: '600',
      color: '#000000',
      display: 'inline',
      marginLeft: '0.3rem'
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-start'
    },
    button: {
      backgroundColor: '#ffb366',
      color: '#000000',
      padding: '0.8rem 2rem',
      borderRadius: '8px',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'all 0.2s ease',
      fontFamily: "'Poppins', sans-serif"
    },
    buttonHover: {
      backgroundColor: '#ff9500'
    },
    // Special button styles for LIST MUK
    mukButton: {
      backgroundColor: '#4CAF50',
      color: '#ffffff',
      padding: '0.8rem 2rem',
      borderRadius: '8px',
      border: 'none',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'all 0.2s ease',
      fontFamily: "'Poppins', sans-serif"
    },
    mukButtonHover: {
      backgroundColor: '#45a049'
    }
  };

  const handleButtonHover = (e, isHover, isMukButton = false) => {
    if (isMukButton) {
      e.target.style.backgroundColor = isHover ? styles.mukButtonHover.backgroundColor : styles.mukButton.backgroundColor;
    } else {
      e.target.style.backgroundColor = isHover ? styles.buttonHover.backgroundColor : styles.button.backgroundColor;
    }
  };

  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      console.log(`Navigate to: ${page}`);
    }
  };

  const sections = [
    // LIST MUK moved to the top
    {
      title: 'LIST MUK',
      stats: [
        { label: 'Program:', value: '5' },
        { label: 'Kompetensi:', value: '45' },
        { label: 'Unit:', value: '180' }
      ],
       route: 'ListMuk', 
      isMuk: true
    },
    {
      title: 'ASESOR',
      stats: [
        { label: 'Peserta:', value: '67' },
        { label: 'Aktif:', value: '67' },
        { label: 'Tervalidasi:', value: '61' }
      ],
      route: 'Asesor'
    },
    {
      title: 'ASESI',
      stats: [
        { label: 'Peserta:', value: '4000' },
        { label: 'Lorem Ipsum', value: '' },
        { label: 'Lorem Ipsum', value: '' }
      ],
      route: 'Asesi'
    },
    {
      title: 'ASESMEN',
      stats: [
        { label: 'Skema:', value: '4000' }
      ],
      route: 'Asesmen'
    },
    {
      title: 'JURUSAN',
      stats: [
        { label: 'Program:', value: '5' },
        { label: 'Aktif:', value: '5' },
        { label: 'Mahasiswa:', value: '1,250' }
      ],
      route: 'Jurusan'
    },
    {
      title: 'SKEMA',
      stats: [
        { label: 'Program:', value: '5' },
        { label: 'Kompetensi:', value: '45' },
        { label: 'Unit:', value: '180' }
      ],
      route: 'Kompetensi'
    }
  ];

  return (
    <>
      <link 
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.headerTitle}>
            MANAJEMEN DATA
          </h1>
        </div>

        {/* Content */}
        <div style={styles.content}>
          {sections.map((section, index) => (
            <div 
              key={index} 
              style={styles.section}
            >
              <h2 style={styles.sectionTitle}>
                {section.title}
              </h2>
              
              <div style={styles.statsContainer}>
                {section.stats.map((stat, statIndex) => (
                  <div key={statIndex} style={styles.statItem}>
                    <span style={styles.statLabel}>{stat.label}</span>
                    {stat.value && <span style={styles.statValue}>{stat.value}</span>}
                  </div>
                ))}
              </div>
              
              <div style={styles.buttonContainer}>
                <button 
                  style={section.isMuk ? styles.mukButton : styles.button}
                  onMouseEnter={(e) => handleButtonHover(e, true, section.isMuk)}
                  onMouseLeave={(e) => handleButtonHover(e, false, section.isMuk)}
                  onClick={() => handleNavigation(section.route)}
                >
                  Kelola Data
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ManajemenData;