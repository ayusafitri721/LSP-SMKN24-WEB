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
    { name: 'FR.IA.01.CL', path: '/dashboard-asesi/ia-01' },
    { name: 'FR.IA.02.TPD', path: '/dashboard-asesi/ia-02' },
    { name: 'FR.IA.03', path: '/dashboard-asesi/ia-03' },
    { name: 'FR.IA.06A.DPT', path: '/dashboard-asesi/ia-06' },
    { name: 'FR.IA.06.C', path: '/dashboard-asesi/ia-06c' },
    { name: 'FR.IA.09', path: '/dashboard-asesi/ia-09' },
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