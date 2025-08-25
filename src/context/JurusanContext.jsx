import { createContext, useContext, useState, useEffect } from "react";
import { jurusans as apiJurusans, putJurusan } from "../Api/api"; // service ambil jurusan
import { createJurusan } from "../Api/api";

import { data } from "react-router-dom";
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
      console.log("cek", res.data.data );
      setJurusanList(res.data.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal mengambil data jurusan!");
    } finally {
      setLoading(false);
    }
  };

  const postJurusan = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await createJurusan(data);
      setJurusanList((prev) => [...prev, res.data?.data]);
      return res.data?.data;
    } catch (err) {
      setError(err.response?.data?.message || "Gagal menambah jurusan!");
      throw err;
    }
  }

  const updateJurusan = async (id, data) => {
    setLoading(true);
    setError(null);
    try{
      const res = await putJurusan(id, data);
      return res.data?.data;
    }catch(err){
      setError(err.response?.data?.message || "Gagal menambah jurusan!");
      throw err;
    }
  }

  // Auto load saat pertama
  useEffect(() => {
    fetchJurusans();
  }, []);

  return (
    <JurusanContext.Provider
      value={{ jurusanList, loading, error, fetchJurusans, postJurusan, updateJurusan }}
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
