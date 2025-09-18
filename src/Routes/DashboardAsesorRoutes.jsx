import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardAsesor from "../DashboardAsesor/DashboardAsesor";
import DashboardRpl from "../DashboardAsesor/Dashboard-RPL/DashboardRpl";
import ApprovedUnapproved from "../DashboardAsesor/Approved-Unapproved/ApprovedUnapproved";
import Rekomendasi from "../DashboardAsesor/Rekomendasi/Rekomendasi";

const DashboardAsesorRoutes = () => {
  return (
    <Routes>
      {/* Route untuk Dashboard Asesor utama */}
      <Route path="/" element={<DashboardAsesor />} />
      {/* Route untuk Dashboard RPL */}
      <Route path="/dashboard-rpl" element={<DashboardRpl />} />
      {/* Rute dinamis untuk halaman formulir penilaian */}
      <Route path="/approved-unapproved/:nis" element={<ApprovedUnapproved />} />
      {/* Rute dinamis untuk halaman Rekomendasi */}
      <Route path="/rekomendasi/:nis" element={<Rekomendasi />} />
    </Routes>
  );
};

export default DashboardAsesorRoutes;