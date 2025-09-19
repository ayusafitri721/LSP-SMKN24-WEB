import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Data dummy untuk nama asesi
const asesiData = {
  "08939239239": "AFDHAL EZHAR RAHMA PANGESTU",
};

// Komponen Header
const Header = ({ asesiName, isAllApproved, nis }) => {
  const navigate = useNavigate();

  const handleRecommend = () => {
    if (isAllApproved) {
      navigate(`/dashboard-asesor/rekomendasi/${nis}`);
    } else {
      alert("Anda harus menyetujui semua formulir terlebih dahulu.");
    }
  };

  return (
    <div style={headerContainerStyle}>
      <div style={mainHeaderStyle}>
        MyLSP
      </div>
      <div style={subHeaderStyle}>
        <h2 style={asesiNameStyle}>{asesiName}</h2>
        <button
          style={{
            ...recommendButtonStyle,
            backgroundColor: isAllApproved ? '#33b069' : '#f97316',
            cursor: isAllApproved ? 'pointer' : 'not-allowed',
            opacity: isAllApproved ? 1 : 0.6,
          }}
          onClick={handleRecommend}
          disabled={!isAllApproved}
        >
          Rekomendasikan
        </button>
      </div>
    </div>
  );
};

// Komponen Utama
const ApprovedUnapproved = () => {
  const { nis } = useParams();
  const navigate = useNavigate();

  // State untuk status persetujuan setiap formulir
  const [formulirStatus, setFormulirStatus] = useState([
    { code: "FR.APL.02", title: "ASESMEN MANDIRI", status: null, route: "/asesmen-mandiri" },
    { code: "FR.AK.01", title: "PERSETUJUAN ASESMEN DAN KERAHASIAAN", status: null, route: "/persetujuan-asesmen" },
    { code: "FR.IA.01.CL", title: "CEKLIS OBSERVASI AKTIVITAS DI TEMPAT KERJA/SIMULASI", status: null, route: "/ceklis-observasi" },
    { code: "FR.IA.06.C", title: "LEMBAR JAWABAN TERTULIS ESAI", status: null, route: "/lembar-jawaban" },
    { code: "FR.IA.09", title: "WAWANCARA", status: null, route: "/wawancara" },
    { code: "FR.AK.02", title: "REKAMAN ASESMEN KOMPETENSI", status: null, route: "/rekaman-asesmen" },
    { code: "FR.AK.05", title: "LAPORAN ASESMEN", status: null, route: "/laporan-asesmen" },
  ]);

  const [allApproved, setAllApproved] = useState(false);
  const asesiName = asesiData[nis] || "NAMA ASESI TIDAK DITEMUKAN";

  // Memperbarui status 'allApproved' ketika ada perubahan pada 'formulirStatus'
  useEffect(() => {
    const isApproved = formulirStatus.every(item => item.status === 'approved');
    setAllApproved(isApproved);
  }, [formulirStatus]);

  // Handler untuk klik tombol Approve/Unapprove
  const handleApproveUnapprove = (index, status) => {
    setFormulirStatus(prevStatus => {
      const newStatus = [...prevStatus];
      newStatus[index].status = status;
      return newStatus;
    });
  };

  // Handler untuk navigasi ke form detail
  const handleNavigateToForm = (formulir) => {
    navigate(`/dashboard-asesor${formulir.route}/${nis}`);
  };

  // Fungsi untuk mendapatkan style yang berbeda untuk setiap card
  const getFormItemStyle = (index) => {
    const gradients = [
      'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
      'linear-gradient(135deg, #5BA0F2 0%, #4A90E2 100%)',
      'linear-gradient(135deg, #357ABD 0%, #2E6DA4 100%)',
      'linear-gradient(135deg, #6BB6FF 0%, #4A90E2 100%)',
      'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)',
      'linear-gradient(135deg, #5BA0F2 0%, #4A90E2 100%)',
      'linear-gradient(135deg, #357ABD 0%, #2E6DA4 100%)',
    ];
    
    return {
      background: gradients[index % gradients.length],
      borderRadius: '12px',
      padding: '0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      overflow: 'hidden',
      transition: 'transform 0.2s ease',
      cursor: 'pointer',
      marginBottom: '8px',
    };
  };

  return (
    <div style={pageContainerStyle}>
      <Header asesiName={asesiName} isAllApproved={allApproved} nis={nis} />
      <div style={formsListContainerStyle}>
        {formulirStatus.map((formulir, index) => (
          <div key={index} style={getFormItemStyle(index)}>
            <div 
              style={formContentStyle}
              onClick={() => handleNavigateToForm(formulir)}
            >
              <p style={formCodeStyle}>{formulir.code}</p>
              <p style={formTitleStyle}>{formulir.title}</p>
              <p style={formNisStyle}>NIS: {nis}</p>
            </div>
            <div style={buttonContainerStyle}>
              <button
                style={{
                  ...actionButtonStyle, // Menggunakan actionButtonStyle yang sudah disiapkan
                  backgroundColor: formulir.status === 'approved' ? '#f97316' : '#6c757d',
                  cursor: formulir.status ? 'not-allowed' : 'pointer',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleApproveUnapprove(index, 'approved');
                }}
                disabled={!!formulir.status}
              >
                Approve
              </button>
              <button
                style={{
                  ...actionButtonStyle, // Menggunakan actionButtonStyle
                  backgroundColor: formulir.status === 'unapproved' ? '#f97316' : '#6c757d',
                  cursor: formulir.status ? 'not-allowed' : 'pointer',
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleApproveUnapprove(index, 'unapproved');
                }}
                disabled={!!formulir.status}
              >
                Unapprove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styling Object - sesuai dengan desain UI
const pageContainerStyle = {
  backgroundColor: '#f8f9fa',
  minHeight: '100vh',
  fontFamily: 'Roboto, sans-serif',
};

const headerContainerStyle = {
  width: '100%',
  position: 'relative',
  paddingBottom: '20px',
};

const mainHeaderStyle = {
  width: '100%',
  height: '200px',
  backgroundImage: `linear-gradient(rgba(255, 165, 0, 0.7), rgba(255, 140, 0, 0.7)), url('https://i.ibb.co/CByYk5p/image-7fdd46.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: '48px',
  fontWeight: 'bold',
  textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
  position: 'relative',
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

const asesiNameStyle = {
  fontSize: '18px',
  fontWeight: '600',
  margin: 0,
  color: '#333',
};

const recommendButtonStyle = {
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  padding: '12px 24px',
  fontSize: '14px',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
};

const formsListContainerStyle = {
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  margin: '0 auto',
  maxWidth: '900px',
  backgroundColor: 'white',
  borderRadius: '15px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  marginTop: '10px',
};

const formContentStyle = {
  flex: 1,
  padding: '16px 20px',
  color: 'white',
  cursor: 'pointer',
};

const formCodeStyle = {
  fontSize: '14px',
  fontWeight: 'bold',
  color: 'white',
  margin: 0,
};

const formTitleStyle = {
  fontSize: '12px',
  color: 'white',
  margin: '2px 0 0 0',
  opacity: 0.9,
};

const formNisStyle = {
  fontSize: '11px',
  color: 'white',
  margin: '2px 0 0 0',
  opacity: 0.8,
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '6px',
  padding: '16px 20px',
};

const actionButtonStyle = {
  color: 'white',
  border: 'none',
  borderRadius: '9999px',
  padding: '8px 16px',
  fontSize: '13px',
  fontWeight: '600',
  transition: 'all 0.3s ease',
  minWidth: '80px',
};

export default ApprovedUnapproved;