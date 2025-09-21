import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { getApl01s, approvementApl01 } from "../Api/api";
import { useAuth } from "./AuthContext";

const Apl01Context = createContext();

export const Apl01Provider = ({ children }) => {
  const { user } = useAuth();
  const [apl01s, setApl01s] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  const fetchApl01s = useCallback(async () => {
    if (!user || user.role !== "admin" || isFetched) return; // Cek role user
    setLoading(true);
    setError(null);
    try {
      const res = await getApl01s();
      setApl01s(res.data?.data || []);
      setIsFetched(true);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch data apl01");
    } finally {
      setLoading(false);
    }
  }, [user, isFetched]);

  const approveApl01 = useCallback(async (id, data) => {
    setLoading(true);
    try {
      const res = await approvementApl01(id, data);
      const updated = res.data?.data;
      setApl01s((prev) =>
        prev.map((item) => (item.id === id ? { ...item, ...updated } : item))
      );
      return updated;
    } catch (err) {
      setError(err.response?.data?.message || "Gagal approve apl01");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (user?.role === "admin") {
      fetchApl01s();
    }
  }, [fetchApl01s]);

  const value = useMemo(
    () => ({ apl01s, loading, error, fetchApl01s, approveApl01 }),
    [apl01s, loading, error, fetchApl01s, approveApl01]
  );

  return (
    <Apl01Context.Provider value={value}>{children}</Apl01Context.Provider>
  );
};

export const useApl01 = () => {
  const context = useContext(Apl01Context);
  if (!context) {
    throw new Error("useApl01 must be used within a Apl01Provider");
  }
  return context;
};
