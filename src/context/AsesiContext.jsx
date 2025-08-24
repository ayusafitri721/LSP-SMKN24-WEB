import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getAsesis, createAsesi, updateAsesi, deleteAsesi } from "../Api/api";

const AsesiContext = createContext();

export const AsesiProvider = ({ children }) => {
  const [asesis, setAsesis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // ================== FETCH ==================
  const fetchAsesis = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await getAsesis();
      setAsesis(res.data?.data || []);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Gagal fetch data asesi");
      setAsesis([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // ================== CREATE ==================
  const addAsesi = useCallback(async (data) => {
    setLoading(true);
    setError(null);

    try {
      const res = await createAsesi(data);
      // Tambahkan data baru ke state biar langsung kelihatan
      setAsesis((prev) => [...prev, res.data?.data]);
      return res.data?.data;
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Gagal tambah asesi");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // ================== UPDATE ==================
  const editAsesi = useCallback(async (id, data) => {
    setLoading(true);
    setError(null);

    try {
      const res = await updateAsesi(id, data);
      setAsesis((prev) =>
        prev.map((a) => (a.id === id ? res.data?.data : a))
      );
      return res.data?.data;
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Gagal update asesi");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // ================== DELETE ==================
  const removeAsesi = useCallback(async (id) => {
    setLoading(true);
    setError(null);

    try {
      await deleteAsesi(id);
      setAsesis((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Gagal hapus asesi");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch saat provider mount
  useEffect(() => {
    fetchAsesis();
  }, [fetchAsesis]);

  return (
    <AsesiContext.Provider
      value={{
        asesis,
        loading,
        error,
        fetchAsesis,
        addAsesi,
        editAsesi,
        removeAsesi,
      }}
    >
      {children}
    </AsesiContext.Provider>
  );
};

// Hook custom untuk akses AsesiContext
export const useAsesi = () => {
  const context = useContext(AsesiContext);
  if (!context) {
    throw new Error("useAsesi harus digunakan di dalam AsesiProvider");
  }
  return context;
};
