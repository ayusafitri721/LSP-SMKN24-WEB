import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { getSkemas, postApl02 } from "../api/api";
import { useAuth } from "./AuthContext";

const SkemaContext = createContext();

export function SkemaProvider({ children }) {
  const { user } = useAuth();
  const [skemaList, setSkemaList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false); // Caching flag

  const fetchSkemas = useCallback(async () => {
    if (!user || user.role !== "admin" || isFetched) return; // Cek role user
    setLoading(true);
    setError(null);
    try {
      const res = await getSkemas();
      setSkemaList(res.data.data || []);
      setIsFetched(true); // Tandai sudah di-fetch
    } catch (err) {
      setError(err.response?.data?.message || "Gagal mengambil data skema!");
    } finally {
      setLoading(false);
    }
  }, [user, isFetched]);

  const importFile = useCallback(async (data) => {
    setLoading(true);
    setError(null);
    try {
      await postApl02(data);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal import data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user?.role === "admin") {
      fetchSkemas();
    }
  }, [fetchSkemas, user]);

  const value = useMemo(
    () => ({
      skemaList,
      loading,
      error,
      fetchSkemas,
      importFile,
    }),
    [skemaList, loading, error, fetchSkemas, importFile]
  );

  return (
    <SkemaContext.Provider value={value}>{children}</SkemaContext.Provider>
  );
}

export function useSkema() {
  const context = useContext(SkemaContext);
  if (!context) {
    throw new Error("useSkema must be used within a SkemaProvider");
  }
  return context;
}
