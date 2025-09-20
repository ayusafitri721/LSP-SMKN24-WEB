import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  getAsesors,
  createAsesor,
  updateAsesor,
  deleteAsesor,
} from "../Api/api";
import { useAuth } from "./AuthContext";

const AsesorContext = createContext();

export const AsesorProvider = ({ children }) => {
  const { user } = useAuth();
  const [asesors, setAsesors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  const fetchAsesors = useCallback(async () => {
    if (!user || isFetched) return;
    setLoading(true);
    setError(null);
    try {
      const res = await getAsesors(1, 100);
      setAsesors(res.data?.data.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch data asesor");
    } finally {
      setLoading(false);
    }
  }, [user, isFetched]);

  const addAsesor = useCallback(async (data) => {
    setLoading(true);
    try {
      const res = await createAsesor(data);
      setAsesors((prev) => [...prev, res.data?.data]);
      return res.data?.data;
    } catch (err) {
      setError(err.response?.data?.message || "Gagal tambah asesor");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const editAsesor = useCallback(async (id, data) => {
    setLoading(true);
    try {
      const res = await updateAsesor(id, data);
      setAsesors((prev) => prev.map((a) => (a.id === id ? res.data?.data : a)));
      return res.data?.data;
    } catch (err) {
      setError(err.response?.data?.message || "Gagal update asesor");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const removeAsesor = useCallback(async (id) => {
    setLoading(true);
    try {
      await deleteAsesor(id);
      setAsesors((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      setError(err.response?.data?.message || "Gagal hapus asesor");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAsesors();
  }, [fetchAsesors]);

  const value = useMemo(
    () => ({
      asesors,
      loading,
      error,
      fetchAsesors,
      addAsesor,
      editAsesor,
      removeAsesor,
    }),
    [asesors, loading, error, fetchAsesors, addAsesor, editAsesor, removeAsesor]
  );

  return (
    <AsesorContext.Provider value={value}>{children}</AsesorContext.Provider>
  );
};

export const useAsesor = () => {
  const context = useContext(AsesorContext);
  if (!context) {
    throw new Error("useAsesor must be used within an AsesorProvider");
  }
  return context;
};
