// routes/RegisterRoutes.jsx - Register Routes Handler
import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// Register Components
import Register from '../Auth/Register';

const RegisterRoutes = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard');
  };
const goToLogin = () => {
  // Ganti path ini ke login yang benar (yang ada goToRegister prop)
  navigate('/auth/login'); // atau path yang benar ke Login dengan goToRegister
};
  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Routes>
      {/* Default register route */}
      <Route 
        path="/" 
        element={
          <Register 
            onBack={handleBackToHome}
            goToDashboard={goToDashboard}
            goToLogin={goToLogin}
          />
        } 
      />

      {/* Catch all - redirect to default register */}
      <Route 
        path="*" 
        element={<Navigate to="/auth/register/" replace />} 
      />
    </Routes>
  );
};

export default RegisterRoutes;