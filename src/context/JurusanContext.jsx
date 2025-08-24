import { createContext, useContext, useState, useEffect } from "react";
import { jurusans as apiJurusans } from "../Api/api"; // service ambil jurusan

// Context
const JurusanContext = createContext();

// Provider
export function JurusanProvider({ children }) {
  const [jurusanList, setJurusanList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch jurusan
  const fetchJurusans = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiJurusans();
      setJurusanList(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal mengambil data jurusan!");
    } finally {
      setLoading(false);
    }
  };

  // Auto load saat pertama
  useEffect(() => {
    fetchJurusans();
  }, []);

  return (
    <JurusanContext.Provider
      value={{ jurusanList, loading, error, fetchJurusans }}
    >
      {children}
    </JurusanContext.Provider>
  );
}

// Hook
export function useJurusan() {
  const context = useContext(JurusanContext);
  if (!context) {
    throw new Error("useJurusan must be used within a JurusanProvider");
  }
  return context;
}
