// src/components/NavAsesi.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavAsesi = ({ activeTab }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const tabs = [
    { name: 'FR.APL.01', path: '/dashboard-asesi/apl-01' },
    { name: 'FR.APL.02', path: '/dashboard-asesi/apl-02' },
    // IA forms are hidden from asesi - they are for asesor only
    // AK forms - only show allowed ones
    { name: 'FR.AK.01', path: '/dashboard-asesi/ak-01' },
    { name: 'FR.AK.03', path: '/dashboard-asesi/ak-03' },
    { name: 'FR.AK.04', path: '/dashboard-asesi/ak-04' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        gap: '40px',
        alignItems: 'center',
        padding: '5px 0',
      }}
    >
      {tabs.map((tab) => (
        <div
          key={tab.name}
          style={{
            cursor: 'pointer',
            fontWeight: activeTab === tab.name ? 'bold' : 'normal',
            color: activeTab === tab.name ? '#FF8C00' : '#000',
            whiteSpace: 'nowrap',
            fontSize: '12px',
            flexShrink: 0,
          }}
          onClick={() => handleNavigate(tab.path)}
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
};

export default NavAsesi;