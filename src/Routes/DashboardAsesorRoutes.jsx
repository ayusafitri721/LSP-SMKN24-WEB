import React from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import DashboardAsesor from "../DashboardAsesor/DashboardAsesor";
import DashboardRpl from "../DashboardAsesor/Dashboard-RPL/DashboardRpl";
import ApprovedUnapproved from "../DashboardAsesor/Approved-Unapproved/ApprovedUnapproved";
import Rekomendasi from "../DashboardAsesor/Rekomendasi/Rekomendasi";

import AsesmenMandiri from "../DashboardAsesor/APL-02/AsesmenMandiri";
import PersetujuanAsesmen from "../DashboardAsesor/AK-01/PersetujuanAsesmen";
import CeklisObservasi from "../DashboardAsesor/IA-01-CL/CeklisObservasi";
import LembarJawaban from "../DashboardAsesor/IA-06-C/LembarJawaban";
import Wawancara from "../DashboardAsesor/IA-09/Wawancara";
import RekamanAsesmen from "../DashboardAsesor/AK-02/RekamanAsesmen";
import LaporanAsesmen from "../DashboardAsesor/AK-05/LaporanAsesmen";

// Komponen placeholder untuk formulir detail
// Ganti ini dengan komponen formulir yang sebenarnya
const PlaceholderForm = ({ title }) => {
  const { nis } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Halaman Formulir: {title}</h1>
      <p>Ini adalah halaman detail untuk NIS: {nis}</p>
      <button onClick={() => navigate(-1)}>Kembali</button>
    </div>
  );
};

const DashboardAsesorRoutes = () => {
  return (
    <Routes>
      {/* Route untuk Dashboard Asesor utama */}
      <Route path="/" element={<DashboardAsesor />} />
      {/* Route untuk Dashboard RPL */}
      <Route path="/dashboard-rpl" element={<DashboardRpl />} />
      {/* Rute dinamis untuk halaman approved/unapproved */}
      <Route path="/approved-unapproved/:nis" element={<ApprovedUnapproved />} />
      {/* Rute dinamis untuk halaman Rekomendasi */}
      <Route path="/rekomendasi/:nis" element={<Rekomendasi />} />

      {/* Rute untuk setiap formulir yang dapat diklik dari card */}
      <Route path="/asesmen-mandiri/:nis" element={<AsesmenMandiri title="ASESMEN MANDIRI" />} />
      <Route path="/persetujuan-asesmen/:nis" element={<PersetujuanAsesmen title="PERSETUJUAN ASESMEN DAN KERAHASIAAN" />} />
      <Route path="/ceklis-observasi/:nis" element={<CeklisObservasi title="CEKLIS OBSERVASI AKTIVITAS DI TEMPAT KERJA/SIMULASI" />} />
      <Route path="/lembar-jawaban/:nis" element={<LembarJawaban title="LEMBAR JAWABAN TERTULIS ESAI" />} />
      <Route path="/wawancara/:nis" element={<Wawancara title="WAWANCARA" />} />
      <Route path="/rekaman-asesmen/:nis" element={<RekamanAsesmen title="REKAMAN ASESMEN KOMPETENSI" />} />
      <Route path="/laporan-asesmen/:nis" element={<LaporanAsesmen title="LAPORAN ASESMEN" />} />
    </Routes>
  );
};

export default DashboardAsesorRoutes;