import React from 'react';

function ManajemenData({ onNavigate }) {
  const styles = {
    container: {
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#fafafa',
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      padding: '0',
      margin: '0'
    },
    header: {
      backgroundColor: '#ffffff',
      padding: '1.2rem 0',
      textAlign: 'center',
      marginBottom: '1.5rem',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
    },
    headerTitle: {
      fontSize: '1.4rem',
      fontWeight: '600',
      color: '#111827',
      margin: 0,
      letterSpacing: '0.5px'
    },
    content: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '0 1.5rem',
      paddingBottom: '2rem'
    },
    section: {
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      marginBottom: '1rem',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.2s ease'
    },
    sectionHover: {
      transform: 'translateY(-1px)',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)'
    },
    sectionTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#000000',
      marginBottom: '1.2rem',
      margin: '0 0 1.2rem 0'
    },
    statsContainer: {
      display: 'flex',
      gap: '2rem',
      marginBottom: '1.5rem',
      flexWrap: 'wrap'
    },
    statItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.2rem'
    },
    statLabel: {
      fontSize: '0.85rem',
      fontWeight: '400',
      color: '#000000',
      display: 'inline'
    },
    statValue: {
      fontSize: '0.85rem',
      fontWeight: '400',
      color: '#000000',
      display: 'inline',
      marginLeft: '0.3rem'
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-start'
    },
    button: {
      backgroundColor: '#ff9500',
      color: '#000000',
      padding: '0.6rem 1.5rem',
      borderRadius: '6px',
      border: 'none',
      fontWeight: '500',
      cursor: 'pointer',
      fontSize: '0.8rem',
      transition: 'all 0.2s ease',
      fontFamily: "'Poppins', sans-serif"
    },
    buttonHover: {
      backgroundColor: '#e6850e'
    }
  };

  const handleButtonHover = (e, isHover) => {
    e.target.style.backgroundColor = isHover ? styles.buttonHover.backgroundColor : styles.button.backgroundColor;
  };

  const handleSectionHover = (e, isHover) => {
    if (isHover) {
      e.currentTarget.style.transform = styles.sectionHover.transform;
      e.currentTarget.style.boxShadow = styles.sectionHover.boxShadow;
    } else {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = styles.section.boxShadow;
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
    {
      title: 'ASESOR',
      stats: [
        { label: 'Peserta', value: '67' },
        { label: 'Aktif', value: '67' },
        { label: 'Tervalidasi', value: '61' }
      ],
      route: 'Asesor'
    },
    {
      title: 'ASESI',
      stats: [
        { label: 'Peserta', value: '4,000' },
        { label: 'Aktif', value: '3,842' },
        { label: 'Selesai', value: '2,156' }
      ],
      route: 'Asesi'
    },
    {
      title: 'ASESMEN',
      stats: [
        { label: 'Skema', value: '4,000' },
        { label: 'Aktif', value: '3,500' },
        { label: 'Selesai', value: '500' }
      ],
      route: 'Asesmen'
    },
    {
      title: 'JURUSAN',
      stats: [
        { label: 'Program', value: '5' },
        { label: 'Aktif', value: '5' },
        { label: 'Mahasiswa', value: '1,250' }
      ],
      route: 'Jurusan'
    },
    {
      title: 'SKEMA',
      stats: [
        { label: 'Program', value: '5' },
        { label: 'Kompetensi', value: '45' },
        { label: 'Unit', value: '180' }
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
              onMouseEnter={(e) => handleSectionHover(e, true)}
              onMouseLeave={(e) => handleSectionHover(e, false)}
            >
              <h2 style={styles.sectionTitle}>
                {section.title}
              </h2>
              
              <div style={styles.statsContainer}>
                {section.stats.map((stat, statIndex) => (
                  <div key={statIndex} style={styles.statItem}>
                    <span style={styles.statLabel}>{stat.label}</span>
                    <span style={styles.statValue}>{stat.value}</span>
                  </div>
                ))}
              </div>
              
              <div style={styles.buttonContainer}>
                <button 
                  style={styles.button}
                  onMouseEnter={(e) => handleButtonHover(e, true)}
                  onMouseLeave={(e) => handleButtonHover(e, false)}
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