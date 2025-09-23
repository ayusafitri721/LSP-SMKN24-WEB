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
  getAssesmentAsesis,
  createAssesment,
  updateAssesment,
  deleteAssesment,
} from "../api/api";
import { useAuth } from "./AuthContext";

const AssesmentContext = createContext();

export const AssesmentProvider = ({ children }) => {
  const { user } = useAuth();
  const [assesments, setAssesments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false);
  const [assesmentAsesisisFetched, setAssesmentAsesisFetched] = useState(false);
  const [assesmentAsesis, setAssesmentAsesis] = useState([]);

  const fetchAssesments = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      const res = await getAssesments();
      setAssesments(res.data?.data || []);
      setIsFetched(true);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch data assesment");
    } finally {
      setLoading(false);
    }
  }, [user]);

  const fetchAssesmentAsesis = useCallback(async () => {
    if (!user || (user.role !== "admin" && user.role !== "asesor")) return;
    setLoading(true);
    setError(null);
    try {
      const res = await getAssesmentAsesis();
      setAssesmentAsesis(res.data?.data || []);
      setAssesmentAsesisFetched(true);
    } catch (err) {
      setError(
        err.response?.data?.message || "Gagal fetch data assesment asesi"
      );
    } finally {
      setLoading(false);
    }
  }, [user]);

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
    if (!isFetched) {
      fetchAssesments();
    }
    if (!assesmentAsesisisFetched) {
      fetchAssesmentAsesis();
    }
  }, [
    fetchAssesments,
    fetchAssesmentAsesis,
    isFetched,
    assesmentAsesisisFetched,
  ]);

  const value = useMemo(
    () => ({
      assesments,
      assesmentAsesis, // 👈 tambahan
      loading,
      error,
      fetchAssesments,
      fetchAssesmentAsesis, // 👈 tambahan
      addAssesment,
      editAssesment,
      removeAssesment,
    }),
    [
      assesments,
      assesmentAsesis,
      loading,
      error,
      fetchAssesments,
      fetchAssesmentAsesis,
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
