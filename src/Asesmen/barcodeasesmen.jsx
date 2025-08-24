import React from "react";

function BarcodeAsesmen({ onBack }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="card">
        <div className="text-center mb-6">
          <h2 className="title">Barcode Asesmen</h2>
          <p className="subtitle">Silahkan scan barcode di bawah ini</p>
        </div>

        <div className="barcode-area text-center">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=DummyBarcode"
            alt="Dummy Barcode"
            className="mx-auto mb-4"
          />
          <p className="text-gray-600 text-sm">Dummy Barcode</p>
        </div>

        <div className="flex gap-3">
          <button onClick={onBack} className="btn btn-orange flex-1">
            Kembali
          </button>
          <button onClick={() => alert("Barcode berhasil dibuat!")} className="btn btn-orange flex-1">
            Submit
          </button>
        </div>
      </div>
      <style jsx>{`
        .card {
          background-color: white;
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          max-width: 400px;
          width: 100%;
          margin: 0 auto;
        }

        .title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 0.25rem;
        }

        .subtitle {
          color: #6b7280;
          margin-bottom: 1.5rem;
        }

        .barcode-area {
          border: 2px dashed #d1d5db;
          border-radius: 0.5rem;
          padding: 1.5rem;
          background-color: #f9fafb;
          margin-bottom: 1.5rem;
        }

        .btn {
          padding: 0.625rem;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: background-color 0.2s;
          text-align: center;
        }

        .btn-orange {
          background-color: #f97316;
          color: white;
        }

        .btn-orange:hover {
          background-color: #ea580c;
        }
      `}</style>
    </div>
  );
}

export default BarcodeAsesmen;