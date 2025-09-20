import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  getAssesments,
  createAssesment,
  updateAssesment,
  deleteAssesment,
} from "../Api/api";
import { useAuth } from "./AuthContext";

const AssesmentContext = createContext();

export const AssesmentProvider = ({ children }) => {
  const { user } = useAuth();
  const [assesments, setAssesments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  const fetchAssesments = useCallback(async () => {
    if (!user || isFetched) return;
    setLoading(true);
    setError(null);
    try {
      const res = await getAssesments();
      setAssesments(res.data?.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch data assesment");
    } finally {
      setLoading(false);
    }
  }, [user, isFetched]);

  const addAssesment = useCallback(async (data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await createAssesment(data);
      setAssesments((prev) => [...prev, res.data?.data]);
      return res.data?.data;
    } catch (err) {
      setError(err.response?.data?.message || "Gagal tambah assesment");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const editAssesment = useCallback(async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await updateAssesment(id, data);
      setAssesments((prev) =>
        prev.map((assesment) =>
          assesment.id === id ? res.data?.data : assesment
        )
      );
      return res.data?.data;
    } catch (err) {
      setError(err.response?.data?.message || "Gagal update assesment");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const removeAssesment = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteAssesment(id);
      setAssesments((prev) => prev.filter((assesment) => assesment.id !== id));
    } catch (err) {
      setError(err.response?.data?.message || "Gagal hapus assesment");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAssesments();
  }, [fetchAssesments]);

  const value = useMemo(
    () => ({
      assesments,
      loading,
      error,
      fetchAssesments,
      addAssesment,
      editAssesment,
      removeAssesment,
    }),
    [
      assesments,
      loading,
      error,
      fetchAssesments,
      addAssesment,
      editAssesment,
      removeAssesment,
    ]
  );

  return (
    <AssesmentContext.Provider value={value}>
      {children}
    </AssesmentContext.Provider>
  );
};

export const useAssesment = () => {
  const context = useContext(AssesmentContext);
  if (!context) {
    throw new Error("useAssesment must be used within an AssesmentProvider");
  }
  return context;
};
