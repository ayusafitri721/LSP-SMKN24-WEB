// routes/LoginRoutes.jsx - Login Routes Handler
import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

// Login Components - Only Admin Login
import Login from "../Auth/Login";

const LoginRoutes = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("User from localStorage:", user);
    if (user && user.role === "admin") {
      window.location.href = "/dashboard";
    } else if (user && user.role === "assesi") {
      window.location.href = "/dashboard-asesi";
    } else if (user && user.role === "asesor") {
      window.location.href = "/dashboard-asesor";
    } else {
      window.location.href = "/auth/login";
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <Routes>
      {/* Default login route */}
      <Route
        path="/"
        element={
          <Login onBack={handleBackToHome} goToDashboard={goToDashboard} />
        }
      />
    </Routes>
  );
};

export default LoginRoutes;
