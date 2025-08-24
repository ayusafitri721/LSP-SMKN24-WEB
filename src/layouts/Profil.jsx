import { useEffect, useRef } from "react";

function Profil() {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target); // animasi cuma sekali
          }
        });
      },
      { threshold: 0.2 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        padding: "80px 40px",
        backgroundColor: "#fff",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          fontWeight: "700",
          color: "#111",
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        PROFILE
      </h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <div style={{ flex: "1 1 300px", textAlign: "center" }}>
          <img
            src="src/img/profile_lsp.png"
            alt="Profile"
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>

        {/* Teks kanan dengan animasi manual */}
        <div
          ref={textRef}
          style={{
            flex: "1 1 400px",
            opacity: 0,
            transform: "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#111",
                margin: 0,
                paddingBottom: "6px",
                marginRight: "10px",
              }}
            >
              Tentang Kami
            </h3>
            <div
              style={{
                flex: 1,
                height: "2px",
                backgroundColor: "#ccc",
                marginBottom: "6px",
              }}
            ></div>
          </div>
          <p
            style={{
              fontSize: "16px",
              color: "#333",
              marginBottom: "12px",
              lineHeight: "1.6",
              textAlign: "justify",
            }}
          >
            Salah satu tujuan Pemerintah Indonesia adalah mendorong percepatan
            pengakuan sertifikasi kompetensi kerja secara berkelanjutan pada
            bidang profesi Teknologi Informasi dan Komunikasi yang
            infrastrukturnya telah siap untuk melaksanakan proses sertifikasi.
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#333",
              marginBottom: "20px",
              lineHeight: "1.6",
              textAlign: "justify",
            }}
          >
            Untuk merealisasikan percepatan pelaksanaan sertifikasi kompetensi,
            Badan Nasional Sertifikasi Profesi (BNSP) telah memberikan lisensi
            kepada Lembaga Sertifikasi Profesi Media Informatika pada tanggal 25
            April 2022 Nomor BNSP-LSP-2121-ID Surat Keputusan
            KEP.0868/BNSP/IV/2022 dan berlaku hingga 25 April 2027.
          </p>
          <button
            style={{
              backgroundColor: "white",
              border: "5px solid #2C94FF",
              color: "#2C94FF",
              padding: "12px 24px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontSize: "14px",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#2C94FF";
              e.target.style.color = "white";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "white";
              e.target.style.color = "#2C94FF";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Learn More &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profil;
