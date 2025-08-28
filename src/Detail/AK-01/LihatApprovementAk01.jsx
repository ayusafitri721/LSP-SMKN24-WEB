import React from 'react';

const LihatApprovementAk01 = ({ onBack, data }) => {
  return (
    <div>
      <h1>Lihat Approvement AK-01</h1>
      <p>Data: {JSON.stringify(data)}</p>
      <button onClick={onBack}>Kembali</button>
    </div>
  );
};

export default LihatApprovementAk01;