import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Data dummy untuk nama asesi
const asesiData = {
"08939239239": "AFDHAL EZHAR RAHMA PANGESTU",
};

// Komponen Utama
const ApprovedUnapproved = () => {
 const nis = "08939239239"; // Mock NIS for demo
 const navigate = useNavigate(); // Inisialisasi useNavigate hook
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
   navigate(`/dashboard-asesor${formulir.route}/${nis}`); // Menggunakan navigate()
 };
 // Handler untuk tombol Rekomendasikan
 const handleRecommend = () => {
   if (allApproved) {
     navigate(`/dashboard-asesor/rekomendasi/${nis}`); // Menggunakan navigate()
   } else {
     alert("Anda harus menyetujui semua formulir terlebih dahulu.");
   }
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
 // Styling Object
 const pageContainerStyle = {
   backgroundColor: 'white',
   minHeight: '100vh',
   fontFamily: 'Arial, sans-serif',
   padding: '15px',
 };
 const headerSectionStyle = {
   backgroundImage: "linear-gradient(rgba(255,165,0,0.4), rgba(255,140,0,0.4)), url('/src/img/kontak.png')",
   backgroundSize: 'cover',
   backgroundPosition: 'center',
   borderRadius: '0 0 40px 40px',
   overflow: 'hidden',
   marginBottom: '0',
 };
 const logoContainerStyle = {
   height: '180px',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
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
   borderRadius: '0 0 15px 15px',
   padding: '30px 15px 15px 15px',
   boxShadow: 'none',
   marginTop: '0',
   border: 'none',
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
   marginBottom: '10px',
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
 return (
   <div style={pageContainerStyle}>
     {/* Header dengan background gambar - mengikuti style dari kode kedua */}
     <div style={headerSectionStyle}>
       <div style={logoContainerStyle}>
         <h1 style={logoTextStyle}>
           MyLSP
         </h1>
       </div>
     </div>
     {/* Content card yang membungkus sub-header dan forms list */}
     <div style={contentCardStyle}>
       {/* Sub-header dengan nama asesi dan tombol Rekomendasikan */}
       <div style={subHeaderStyle}>
         <h2 style={asesiNameStyle}>{asesiName}</h2>
         <button
           style={{
             ...recommendButtonStyle,
             backgroundColor: allApproved ? '#33b069' : '#f97316',
             cursor: allApproved ? 'pointer' : 'not-allowed',
             opacity: allApproved ? 1 : 0.6,
           }}
           onClick={handleRecommend}
           disabled={!allApproved}
         >
           Rekomendasikan
         </button>
       </div>
       
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
                   ...actionButtonStyle, 
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
                   ...actionButtonStyle,
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
   </div>
 );
};

export default ApprovedUnapproved;