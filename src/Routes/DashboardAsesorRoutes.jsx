// src/routes/DashboardAsesorRoutes.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardAsesor from "../DashboardAsesor/Dashboard-RPL/DashboardAsesor";
import DashboardRpl from "../DashboardAsesor/Dashboard-RPL/DashboardRpl";

const DashboardAsesorRoutes = () => {
  return (
    <Routes>
      {/* Route untuk Dashboard Asesor utama */}
      <Route path="/" element={<DashboardAsesor />} />

      {/* Route untuk Dashboard RPL */}
      <Route path="/dashboard-rpl" element={<DashboardRpl />} />
    </Routes>
  );
};

export default DashboardAsesorRoutes;
