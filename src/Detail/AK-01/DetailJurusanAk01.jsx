import React from 'react';

const DetailJurusanAk01 = ({ onBack, onNavigate, data }) => {
  return (
    <div>
      <h1>Detail Jurusan AK-01</h1>
      <p>Data: {JSON.stringify(data)}</p>
      <button onClick={onBack}>Kembali</button>
      <button onClick={() => onNavigate('lihatdetailak01')}>Lihat Detail</button>
    </div>
  );
};

export default DetailJurusanAk01;