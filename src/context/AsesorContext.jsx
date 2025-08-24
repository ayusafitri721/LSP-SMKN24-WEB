import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getAsesors, createAsesor, updateAsesor, deleteAsesor } from "../Api/api";

const AsesorContext = createContext();

export const AsesorProvider = ({ children }) => {
  const [asesors, setAsesors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ================== FETCH ==================
  const fetchAsesors = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await getAsesors();
      setAsesors(res.data?.data || []);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Gagal fetch data asesor");
      setAsesors([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // ================== CREATE ==================
  const addAsesor = useCallback(async (data) => {
    setLoading(true);
    setError(null);

    try {
      const res = await createAsesor(data);
      setAsesors((prev) => [...prev, res.data?.data]);
      return res.data?.data;
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Gagal tambah asesor");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // ================== UPDATE ==================
  const editAsesor = useCallback(async (id, data) => {
    setLoading(true);
    setError(null);

    try {
      const res = await updateAsesor(id, data);
      setAsesors((prev) =>
        prev.map((a) => (a.id === id ? res.data?.data : a))
      );
      return res.data?.data;
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Gagal update asesor");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // ================== DELETE ==================
  const removeAsesor = useCallback(async (id) => {
    setLoading(true);
    setError(null);

    try {
      await deleteAsesor(id);
      setAsesors((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Gagal hapus asesor");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // fetch saat provider mount
  useEffect(() => {
    fetchAsesors();
  }, [fetchAsesors]);

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
