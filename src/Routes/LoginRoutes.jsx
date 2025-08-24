// routes/LoginRoutes.jsx - Login Routes Handler
import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// Login Components - Only Admin Login
import Login from '../Auth/Login';

const LoginRoutes = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Routes>
      {/* Default login route */}
      <Route 
        path="/" 
        element={
          <Login 
            onBack={handleBackToHome}
            goToDashboard={goToDashboard}
          />
        }
      />
      
      {/* Main Login Route */}
      <Route 
        path="/login" 
        element={
          <Login 
            onBack={handleBackToHome}
            goToDashboard={goToDashboard}
          />
        }
      />
    </Routes>
  );
};

export default LoginRoutes;