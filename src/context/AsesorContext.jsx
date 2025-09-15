import React, { createContext, useContext, useState, useEffect } from "react";
import { getAsesors, createAsesor, updateAsesor, deleteAsesor } from "../Api/api";

const AsesorContext = createContext();

export const AsesorProvider = ({ children }) => {
  const [asesors, setAsesors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ================== FETCH ==================
  const fetchAsesors = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await getAsesors(1, 100);
      setAsesors(res.data?.data.data || []);
      console.log("Fetched asesors:", res.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Gagal fetch data asesor");
      setAsesors([]);
    } finally {
      setLoading(false);
    }
  };

  // ================== CREATE ==================
  const addAsesor = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const res = await createAsesor(data);
      const newAsesor = res.data?.data;
      if (newAsesor) setAsesors((prev) => [...prev, newAsesor]);
      return newAsesor;
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Gagal tambah asesor");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ================== UPDATE ==================
  const editAsesor = async (id, data) => {
    setLoading(true);
    setError(null);

    try {
      const res = await updateAsesor(id, data);
      const updated = res.data?.data;
      setAsesors((prev) =>
        prev.map((a) => (a.id === id ? updated : a))
      );
      return updated;
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Gagal update asesor");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // ================== DELETE ==================
  const removeAsesor = async (id) => {
    setLoading(true);
    setError(null);

    try {
      await deleteAsesor(id);
      setAsesors((prev) => prev.filter((a) => a.id !== id));
      return true;
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Gagal hapus asesor");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // fetch saat provider mount
  useEffect(() => {
    fetchAsesors();
  }, []);

  return (
    <AsesorContext.Provider
      value={{
        asesors,
        loading,
        error,
        fetchAsesors,
        addAsesor,
        editAsesor,
        removeAsesor,
      }}
    >
      {children}
    </AsesorContext.Provider>
  );
};

// Hook custom
export const useAsesor = () => {
  const context = useContext(AsesorContext);
  if (!context) {
    throw new Error("useAsesor harus digunakan di dalam AsesorProvider");
  }
  return context;
};
