// App.jsx - Only for Landing Page Routes
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Landing Page Components
import Navbar from './layouts/Navbar';
import Home from './layouts/Home';
import Profil from './layouts/Profil';
import MengapaKami from './layouts/MengapaKami';
import Skema from './layouts/Skema';
import CariSkema from './layouts/CariSkema';
import FooterPage from './layouts/FooterPage';
import SertifikasiCTA from './layouts/SertifikasiCTA';
import LandingPage from './layouts/DetailSertifikasi';
import Kontak from './layouts/kontak';
import Berita from './layouts/Berita';
import TempatUji from './layouts/TempatUji';
import JadwalAsesmen from './layouts/jadwalasesmen';
import GaleriFoto from './layouts/GaleriFoto';
import GaleriVideo from './layouts/GaleriVideo';

// Route Components
import LoginRoutes from './Routes/LoginRoutes';
import RegisterRoutes from './Routes/RegisterRoutes';
import DashboardRoutes from './Routes/DashboardRoutes';

// Asesi Dashboard Components
import LoginAsesi from './Asesi-Dashboard/Login-Asesi';

function App() {
  const [pendingScroll, setPendingScroll] = useState(null);
  
  const homeRef = useRef(null);
  const profileRef = useRef(null);
  const sertifikasiRef = useRef(null);
  const galeriRef = useRef(null);
  const kontakRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = {
      home: homeRef,
      profile: profileRef,
      sertifikasi: sertifikasiRef,
      galeri: galeriRef,
      kontak: kontakRef,
    };
    
    if (refs[section]) {
      refs[section].current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoginClick = () => {
    window.location.href = '/auth/login';
  };

  const goToDashboard = () => {
    window.location.href = '/dashboard';
  };

  const goToLandingPage = () => {
    window.location.href = '/detail-sertifikasi';
  };

  const handleNavigate = (path) => {
    window.location.href = path;
  };

  return (
    <Router>
      <Routes>
        {/* Landing Page Routes */}
        <Route path="/" element={
          <div>
            <Navbar onNavClick={scrollToSection} onLoginClick={handleLoginClick} />
            <div ref={homeRef}>
              <Home 
                goToRegister={() => handleNavigate('/auth/register')} 
                goToDashboard={goToDashboard} 
              />
            </div>
            <div ref={profileRef}>
              <Profil />
            </div>
            <div ref={sertifikasiRef}>
              <MengapaKami />
            </div>
            <div>
              <Skema />
            </div>
            <SertifikasiCTA 
              goToRegister={() => handleNavigate('/auth/register')} 
              goToDashboard={goToDashboard} 
            />
            <div ref={galeriRef}>
              <CariSkema goToLandingPage={goToLandingPage} />
            </div>
            <div ref={kontakRef}>
              <FooterPage />
            </div>
          </div>
        } />

        {/* Public Pages */}
        <Route path="/kontak" element={
          <div>
            <Navbar onNavClick={scrollToSection} onLoginClick={handleLoginClick} />
            <Kontak onBack={() => handleNavigate('/')} />
          </div>
        } />

        <Route path="/berita" element={
          <div>
            <Navbar onNavClick={scrollToSection} onLoginClick={handleLoginClick} />
            <Berita onBack={() => handleNavigate('/')} />
          </div>
        } />

        <Route path="/tempat-uji" element={
          <div>
            <Navbar onNavClick={scrollToSection} onLoginClick={handleLoginClick} />
            <TempatUji 
              onBack={() => handleNavigate('/')} 
              onNavigate={handleNavigate} 
            />
          </div>
        } />

        <Route path="/jadwal-asesmen" element={
          <div>
            <Navbar onNavClick={scrollToSection} onLoginClick={handleLoginClick} />
            <JadwalAsesmen onBack={() => handleNavigate('/')} />
          </div>
        } />

        <Route path="/galeri-foto" element={
          <div>
            <Navbar onNavClick={scrollToSection} onLoginClick={handleLoginClick} />
            <GaleriFoto 
              onBack={() => handleNavigate('/')} 
              onNavigate={handleNavigate} 
            />
          </div>
        } />

        <Route path="/galeri-video" element={
          <div>
            <Navbar onNavClick={scrollToSection} onLoginClick={handleLoginClick} />
            <GaleriVideo 
              onBack={() => handleNavigate('/')} 
              onNavigate={handleNavigate} 
            />
          </div>
        } />

        <Route path="/detail-sertifikasi" element={
          <div>
            <Navbar onNavClick={scrollToSection} onLoginClick={handleLoginClick} />
            <LandingPage 
              onBack={() => handleNavigate('/')} 
              onNavigate={handleNavigate} 
            />
          </div>
        } />

        {/* Auth Routes */}
        <Route path="/auth/login/*" element={<LoginRoutes />} />
        <Route path="/auth/register/*" element={<RegisterRoutes />} />

        {/* Asesi Login Route - TAMBAHAN BARU */}
        <Route path="/asesi/login" element={
          <LoginAsesi 
            goToDashboard={() => handleNavigate('/dashboard')}
          />
        } />

        {/* Dashboard Routes */}
        <Route path="/dashboard/*" element={<DashboardRoutes />} />

        {/* 404 Route */}
        <Route path="*" element={
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            fontSize: '24px',
            color: '#666'
          }}>
            404 - Page Not Found
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;