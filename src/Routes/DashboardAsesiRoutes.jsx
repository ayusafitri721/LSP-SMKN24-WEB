// src/routes/DashboardAsesiRoutes.jsx

import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardAsesi from "../DashboardAsesi/DashboardAsesi";
import ProfileSection from "../layouts/ProfileSection";

// Import semua komponen formulir yang relevan dengan Asesi
import APL01 from "../DashboardAsesi/APL-01/APL-01";
import APL02 from "../DashboardAsesi/APL-02/APL-02";
import AK01 from "../DashboardAsesi/AK-01/AK-01";
import AK02 from "../DashboardAsesi/AK-02/AK-02";
import AK03 from "../DashboardAsesi/AK-03/AK-03";
import AK04 from "../DashboardAsesi/AK-04/AK-04";
import AK05 from "../DashboardAsesi/AK-05/AK-05";
import IA01 from "../DashboardAsesi/IA-01-CL/IA-01-CL";
import IA02 from "../DashboardAsesi/IA-02-TPD/IA-02-TPD";
import IA03 from "../DashboardAsesi/IA-03/IA-03";
import IA06C from "../DashboardAsesi/IA-06-C/IA-06-C";
import IA06A from "../DashboardAsesi/IA-06A-DPT/IA-06A-DPT";
import IA09 from "../DashboardAsesi/IA-09/IA-09";

const DashboardAsesiRoutes = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleSidebarMenuClick = (menuName) => {
    if (menuName === "Logout") {
      if (window.confirm("Apakah Anda yakin ingin logout?")) {
        alert("Logout berhasil!");
        navigate("/");
      }
      return;
    }

    setActiveMenu(menuName);
    const pageMap = {
      "Dashboard": "",
      "APL.01": "apl-01",
      "APL.02": "apl-02",
      "AK.01": "ak-01",
      "AK.02": "ak-02",
      "AK.03": "ak-03",
      "AK.04": "ak-04",
      "AK.05": "ak-05",
      "IA.01": "ia-01",
      "IA.02": "ia-02",
      "IA.03": "ia-03",
      "IA-06A": "ia-06",
      "IA-06.C": "ia-06c",
      "IA-09": "ia-09",
      "Profile": "profile-asesi",
    };

    if (pageMap[menuName] !== undefined) {
      navigate(`${pageMap[menuName]}`);
    }
  };

  // Layout khusus untuk dashboard utama (tanpa sidebar)
  const DashboardMainLayout = ({ children }) => (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: "#f5f5f5",
      }}
    >
      <div style={{ backgroundColor: "#fafafa" }}>
        {children}
      </div>
    </div>
  );

  // Layout untuk form-form (tanpa sidebar)
  const FormLayout = ({ children }) => (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        backgroundColor: "#f5f5f5",
        padding: "20px"
      }}
    >
      <div style={{ flex: 1, backgroundColor: "#fafafa", padding: "20px" }}>
        {children}
      </div>
    </div>
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <DashboardMainLayout>
            <DashboardAsesi onNavigate={handleSidebarMenuClick} />
          </DashboardMainLayout>
        }
      />

      <Route
        path="/apl-01"
        element={
          <FormLayout>
            <APL01 />
          </FormLayout>
        }
      />
      <Route
        path="/apl-02"
        element={
          <FormLayout>
            <APL02 />
          </FormLayout>
        }
      />
      <Route
        path="/ak-01"
        element={
          <FormLayout>
            <AK01 />
          </FormLayout>
        }
      />
      <Route
        path="/ak-02"
        element={
          <FormLayout>
            <AK02 />
          </FormLayout>
        }
      />
      <Route
        path="/ak-03"
        element={
          <FormLayout>
            <AK03 />
          </FormLayout>
        }
      />
      <Route
        path="/ak-04"
        element={
          <FormLayout>
            <AK04 />
          </FormLayout>
        }
      />
      <Route
        path="/ak-05"
        element={
          <FormLayout>
            <AK05 />
          </FormLayout>
        }
      />
      <Route
        path="/ia-01"
        element={
          <FormLayout>
            <IA01 />
          </FormLayout>
        }
      />
      <Route
        path="/ia-02"
        element={
          <FormLayout>
            <IA02 />
          </FormLayout>
        }
      />
      <Route
        path="/ia-03"
        element={
          <FormLayout>
            <IA03 />
          </FormLayout>
        }
      />
      <Route
        path="/ia-06"
        element={
          <FormLayout>
            <IA06A />
          </FormLayout>
        }
      />
      <Route
        path="/ia-06c"
        element={
          <FormLayout>
            <IA06C />
          </FormLayout>
        }
      />
      <Route
        path="/ia-09"
        element={
          <FormLayout>
            <IA09 />
          </FormLayout>
        }
      />
      <Route
        path="/profile-asesi"
        element={
          <FormLayout>
            <ProfileSection />
          </FormLayout>
        }
      />
    </Routes>
  );
};

export default DashboardAsesiRoutes;