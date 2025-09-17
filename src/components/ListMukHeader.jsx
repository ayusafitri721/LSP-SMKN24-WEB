import React from 'react';

function ListMukHeader({ active = '', onBack, onNavigate }) {
  const isActive = (key) => active.toLowerCase() === key.toLowerCase();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '24px',
      }}
    >
      <button
        onClick={onBack}
        style={{
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          marginRight: '20px',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#666"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <div
        style={{
          display: 'flex',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          padding: '4px',
        }}
      >
        <button
          onClick={() => onNavigate && onNavigate('list-muk')}
          style={{
            padding: '12px 20px',
            fontSize: '14px',
            fontWeight: '600',
            border: 'none',
            backgroundColor: isActive('ak-02') ? '#ff6b35' : 'transparent',
            color: isActive('ak-02') ? 'white' : '#666',
            borderRadius: '8px',
            cursor: 'pointer',
            margin: '4px',
            flexShrink: 0,
            minWidth: 'fit-content',
          }}
        >
          FR.AK.02
        </button>
        <button
          onClick={() => onNavigate && onNavigate('listmuk/AK-03/UmpanBalik')}
          style={{
            padding: '12px 20px',
            fontSize: '14px',
            fontWeight: '600',
            border: 'none',
            backgroundColor: isActive('ak-03') ? '#ff6b35' : 'transparent',
            color: isActive('ak-03') ? 'white' : '#666',
            cursor: 'pointer',
            margin: '4px',
            borderRadius: '8px',
            flexShrink: '0',
            minWidth: 'fit-content',
          }}
        >
          FR.AK.03
        </button>
        <button
          onClick={() => onNavigate && onNavigate('listmuk/AK-04/BandingkanAsesmen')}
          style={{
            padding: '12px 20px',
            fontSize: '14px',
            fontWeight: '600',
            border: 'none',
            backgroundColor: isActive('ak-04') ? '#ff6b35' : 'transparent',
            color: isActive('ak-04') ? 'white' : '#666',
            cursor: 'pointer',
            margin: '4px',
            borderRadius: '8px',
            flexShrink: '0',
            minWidth: 'fit-content',
          }}
        >
          FR.AK.04
        </button>
        <button
          onClick={() => onNavigate && onNavigate('listmuk/AK-05/LaporanAsesment')}
          style={{
            padding: '12px 20px',
            fontSize: '14px',
            fontWeight: '600',
            border: 'none',
            backgroundColor: isActive('ak-05') ? '#ff6b35' : 'transparent',
            color: isActive('ak-05') ? 'white' : '#666',
            cursor: 'pointer',
            margin: '4px',
            borderRadius: '8px',
            flexShrink: '0',
            minWidth: 'fit-content',
          }}
        >
          FR.AK.05
        </button>
        <button
          onClick={() => onNavigate && onNavigate('listmuk/IA-01/CeklisObservasiAktivitas')}
          style={{
            padding: '12px 20px',
            fontSize: '14px',
            fontWeight: '600',
            border: 'none',
            backgroundColor: isActive('ia-01') ? '#ff6b35' : 'transparent',
            color: isActive('ia-01') ? 'white' : '#666',
            cursor: 'pointer',
            margin: '4px',
            borderRadius: '8px',
            flexShrink: '0',
            minWidth: 'fit-content',
          }}
        >
          FR.IA.01
        </button>
        <button
          onClick={() => onNavigate && onNavigate('list-muk/ia02')}
          style={{
            padding: '12px 20px',
            fontSize: '14px',
            fontWeight: '600',
            border: 'none',
            backgroundColor: isActive('ia-02') ? '#ff6b35' : 'transparent',
            color: isActive('ia-02') ? 'white' : '#666',
            cursor: 'pointer',
            margin: '4px',
            borderRadius: '8px',
            flexShrink: '0',
            minWidth: 'fit-content',
          }}
        >
          FR.IA.02
        </button>
        <button
          onClick={() => onNavigate && onNavigate('listmuk/IA-05C/LembarJawabanPG')}
          style={{
            padding: '12px 20px',
            fontSize: '14px',
            fontWeight: '600',
            border: 'none',
            backgroundColor: isActive('ia-05c') ? '#ff6b35' : 'transparent',
            color: isActive('ia-05c') ? 'white' : '#666',
            cursor: 'pointer',
            margin: '4px',
            borderRadius: '8px',
            flexShrink: '0',
            minWidth: 'fit-content',
          }}
        >
          FR.IA.05.C
        </button>
        <button
          onClick={() => onNavigate && onNavigate('listmuk/IA-03/PertanyaanMendukungObservasi')}
          style={{
            padding: '12px 20px',
            fontSize: '14px',
            fontWeight: '600',
            border: 'none',
            backgroundColor: isActive('ia-03') ? '#ff6b35' : 'transparent',
            color: isActive('ia-03') ? 'white' : '#666',
            cursor: 'pointer',
            margin: '4px',
            borderRadius: '8px',
            flexShrink: '0',
            minWidth: 'fit-content',
          }}
        >
          FR.IA.03
        </button>
      </div>
    </div>
  );
}

export default ListMukHeader;
