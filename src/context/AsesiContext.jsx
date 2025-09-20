import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { getAsesis, createAsesi, updateAsesi, deleteAsesi } from "../Api/api";
import { useAuth } from "./AuthContext";

const AsesiContext = createContext();

export const AsesiProvider = ({ children }) => {
  const { user } = useAuth();
  const [asesis, setAsesis] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  const fetchAsesis = useCallback(async () => {
    if (!user || isFetched) return;
    setLoading(true);
    setError(null);
    try {
      const res = await getAsesis();
      setAsesis(res.data?.data || []);
      setIsFetched(true);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch data asesi");
    } finally {
      setLoading(false);
    }
  }, [user , isFetched]);

  const addAsesi = useCallback(async (data) => {
    setLoading(true);
    try {
      const res = await createAsesi(data);
      setAsesis((prev) => [...prev, res.data?.data]);
      return res.data?.data;
    } catch (err) {
      setError(err.response?.data?.message || "Gagal tambah asesi");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const editAsesi = useCallback(async (id, data) => {
    setLoading(true);
    try {
      const res = await updateAsesi(id, data);
      setAsesis((prev) => prev.map((a) => (a.id === id ? res.data?.data : a)));
      return res.data?.data;
    } catch (err) {
      setError(err.response?.data?.message || "Gagal update asesi");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const removeAsesi = useCallback(async (id) => {
    setLoading(true);
    try {
      await deleteAsesi(id);
      setAsesis((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      setError(err.response?.data?.message || "Gagal hapus asesi");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAsesis();
  }, [fetchAsesis]);

  const value = useMemo(
    () => ({
      asesis,
      loading,
      error,
      fetchAsesis,
      addAsesi,
      editAsesi,
      removeAsesi,
    }),
    [asesis, loading, error, fetchAsesis, addAsesi, editAsesi, removeAsesi]
  );

  return (
    <AsesiContext.Provider value={value}>{children}</AsesiContext.Provider>
  );
};

export const useAsesi = () => {
  const context = useContext(AsesiContext);
  if (!context) {
    throw new Error("useAsesi must be used within an AsesiProvider");
  }
  return context;
};
