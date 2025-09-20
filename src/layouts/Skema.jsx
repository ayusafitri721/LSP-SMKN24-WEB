import React from "react";

function Skema() {
  const handleCardClick = (cardTitle) => {
    // Click handler logic can be added here without alert
  };

  // Media queries styles
  const containerStyle = {
    padding: "40px 0",
    width: "100%",
  };

  const innerContainerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  };

  const progressContainerStyle = {
    position: "relative",
    width: "100%",
    height: "40px",
    marginBottom: "30px",
  };

  const progressDotsContainerStyle = {
    position: "absolute",
    top: "calc(50% + 2px)",
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10%",
    transform: "translateY(-50%)",
    boxSizing: "border-box",
  };

  const cardsContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardButtonStyle = {
    background: "none",
    border: "none",
    padding: 0,
    cursor: "pointer",
    width: "100%",
    maxWidth: "300px",
    height: "auto",
  };

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    padding: "25px",
    color: "#333",
    position: "relative",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
    border: "1px solid #838280",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    minHeight: "300px",
    boxSizing: "border-box",
    overflow: "hidden",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const iconCircleStyle = {
    width: "70px",
    height: "70px",
    backgroundColor: "#007bff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "18px",
    boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)",
    flexShrink: 0,
  };

  const titleStyle = {
    fontSize: "1.15rem",
    fontWeight: "700",
    marginBottom: "12px",
    lineHeight: "1.3",
    letterSpacing: "0.5px",
    color: "#2c3e50",
    flexShrink: 0,
    textAlign: "center",
    width: "100%",
  };

  const descriptionStyle = {
    fontSize: "0.82rem",
    lineHeight: "1.4",
    color: "#6c757d",
    margin: "0",
    textAlign: "left",
    width: "100%",
    flex: "1",
  };

  const dotStyle = {
    width: "20px",
    height: "20px",
    backgroundColor: "rgba(255, 131, 3, 0.4)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const innerDotStyle = {
    width: "10px",
    height: "10px",
    backgroundColor: "#FF8303",
    borderRadius: "50%",
  };

  // Check screen size
  const [screenSize, setScreenSize] = React.useState("desktop");

  React.useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("mobile");
      } else if (width < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Responsive styles based on screen size
  const getResponsiveStyles = () => {
    switch (screenSize) {
      case "mobile":
        return {
          container: { ...containerStyle },
          innerContainer: { ...innerContainerStyle },
          progressContainer: { ...progressContainerStyle },
          progressDotsContainer: { ...progressDotsContainerStyle },
          cardsContainer: { ...cardsContainerStyle },
          cardButton: { ...cardButtonStyle },
          card: { ...cardStyle, padding: "25px", minHeight: "280px" },
          iconCircle: { ...iconCircleStyle },
          title: { ...titleStyle },
          description: { ...descriptionStyle },
          dot: { ...dotStyle },
          innerDot: { ...innerDotStyle },
          iconSize: { width: "32px", height: "32px" },
        };
      case "tablet":
        return {
          container: { ...containerStyle, padding: "60px 0" },
          innerContainer: { ...innerContainerStyle, padding: "0 30px" },
          progressContainer: {
            ...progressContainerStyle,
            marginBottom: "35px",
          },
          progressDotsContainer: {
            ...progressDotsContainerStyle,
            padding: "0 15%",
          },
          cardsContainer: {
            ...cardsContainerStyle,
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "25px",
            justifyContent: "space-around",
          },
          cardButton: { ...cardButtonStyle, width: "280px", height: "320px" },
          card: {
            ...cardStyle,
            padding: "28px",
            minHeight: "320px",
            height: "100%",
          },
          iconCircle: {
            ...iconCircleStyle,
            width: "75px",
            height: "75px",
            marginBottom: "19px",
          },
          title: { ...titleStyle, fontSize: "1.2rem", marginBottom: "13px" },
          description: { ...descriptionStyle, fontSize: "0.83rem" },
          dot: { ...dotStyle, width: "22px", height: "22px" },
          innerDot: { ...innerDotStyle, width: "11px", height: "11px" },
          iconSize: { width: "36px", height: "36px" },
        };
      default: // desktop
        return {
          container: { ...containerStyle, padding: "80px 0" },
          innerContainer: { ...innerContainerStyle, padding: "0 40px" },
          progressContainer: {
            ...progressContainerStyle,
            marginBottom: "40px",
          },
          progressDotsContainer: {
            ...progressDotsContainerStyle,
            padding: "0 16.66%",
          },
          cardsContainer: {
            ...cardsContainerStyle,
            flexDirection: "row",
            flexWrap: "nowrap",
            gap: "30px",
            alignItems: "stretch",
          },
          cardButton: { ...cardButtonStyle, width: "320px", height: "340px" },
          card: {
            ...cardStyle,
            padding: "30px",
            minHeight: "340px",
            height: "100%",
          },
          iconCircle: {
            ...iconCircleStyle,
            width: "80px",
            height: "80px",
            marginBottom: "20px",
          },
          title: { ...titleStyle, fontSize: "1.25rem", marginBottom: "15px" },
          description: { ...descriptionStyle, fontSize: "0.85rem" },
          dot: { ...dotStyle, width: "24px", height: "24px" },
          innerDot: { ...innerDotStyle, width: "12px", height: "12px" },
          iconSize: { width: "40px", height: "40px" },
        };
    }
  };

  const styles = getResponsiveStyles();

  const cards = [
    {
      title: "36 SKEMA SERTIFIKASI",
      description:
        "Skema / Profesi / Jabatan / Pekerjaan di bidang bidang Jaminan Sekuriti, Teknologi Informasi dan Konstruksi.",
      icon: (
        <svg
          {...styles.iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
        >
          <rect x="3" y="3" width="6" height="6" rx="1" />
          <rect x="15" y="3" width="6" height="6" rx="1" />
          <rect x="3" y="15" width="6" height="6" rx="1" />
          <rect x="15" y="15" width="6" height="6" rx="1" />
          <rect x="9" y="9" width="6" height="6" rx="1" />
          <line x1="9" y1="6" x2="15" y2="6" />
          <line x1="6" y1="9" x2="6" y2="15" />
          <line x1="18" y1="9" x2="18" y2="15" />
          <line x1="9" y1="18" x2="15" y2="18" />
        </svg>
      ),
    },
    {
      title: "300++ LINK DUDI",
      description:
        "Perusahaan mitra LSP yang siap untuk menerima profesi anda, sehingga ada lebih banyak peluang dari semua bidang pekerjaan.",
      icon: (
        <svg
          {...styles.iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      ),
    },
    {
      title: "1000+ SDM TERVERIFIKASI",
      description:
        "Daftar tenaga kerja profesional yang telah kami sertifikasi, dan siap untuk mendukung kebutuhan SDM tersertifikasi perusahaan Anda.",
      icon: (
        <svg
          {...styles.iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
        >
          <path d="M12 2l8 4-8 4-8-4 8-4z" />
          <path d="M4 10l8 4 8-4" />
          <path d="M4 14l8 4 8-4" />
        </svg>
      ),
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <div style={styles.progressContainer}>
          {/* Progress Line */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: "4px",
              backgroundColor: "#e9ecef",
              borderRadius: "2px",
              transform: "translateY(-50%)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#7EB3E9",
                borderRadius: "2px",
              }}
            />
          </div>

          {/* Progress Dots */}
          <div style={styles.progressDotsContainer}>
            {[1, 2, 3].map((dot) => (
              <div key={dot} style={styles.dot}>
                <div style={styles.innerDot} />
              </div>
            ))}
          </div>
        </div>

        {/* Cards Container */}
        <div style={styles.cardsContainer}>
          {cards.map((card, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(card.title)}
              style={styles.cardButton}
              onMouseEnter={(e) => {
                e.currentTarget.firstChild.style.transform = "translateY(-2px)";
                e.currentTarget.firstChild.style.boxShadow =
                  "0 8px 16px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.firstChild.style.transform = "translateY(0)";
                e.currentTarget.firstChild.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.15)";
              }}
            >
              <div style={styles.card}>
                {/* Icon Circle */}
                <div style={styles.iconCircle}>{card.icon}</div>

                <h3 style={styles.title}>{card.title}</h3>

                <p style={styles.description}>{card.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skema;
