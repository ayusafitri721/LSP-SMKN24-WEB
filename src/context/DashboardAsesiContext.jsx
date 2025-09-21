import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { getCurrentAsesi, showapl01 } from "../Api/api"; // Tambahkan showapl01
import { useAuth } from "./AuthContext";

const DashboardAsesiContext = createContext();

export const DashboardAsesiProvider = ({ children }) => {
  const { user } = useAuth();
  const [currentAsesi, setCurrentAsesi] = useState(null); // State untuk current asesi
  const [apl01Data, setApl01Data] = useState([]); // State untuk data APL01
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch current asesi
  const fetchCurrentAsesi = useCallback(async () => {
    if (!user || user.role !== "assesi") return; // Cek role user
    setLoading(true);
    setError(null);
    try {
      const res = await getCurrentAsesi();
      setCurrentAsesi(res.data?.data || null); // Simpan data asesi saat ini
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch current asesi");
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Fetch APL01 data
  const fetchApl01 = useCallback(async () => {
    if (!user || user.role !== "assesi") return; // Cek role user
    setLoading(true);
    setError(null);
    try {
      const res = await showapl01();
      setApl01Data(res.data?.data || []); // Simpan data APL01
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch data APL01");
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Fetch data saat komponen pertama kali dimuat
  useEffect(() => {
    if (user?.role === "assesi") {
      fetchCurrentAsesi();
      fetchApl01();
    }
  }, [fetchCurrentAsesi, fetchApl01]);

  const value = useMemo(
    () => ({
      currentAsesi, // Tambahkan currentAsesi ke dalam context value
      apl01Data, // Tambahkan apl01Data ke dalam context value
      loading,
      error,
      fetchCurrentAsesi,
      fetchApl01,
    }),
    [currentAsesi, apl01Data, loading, error, fetchCurrentAsesi, fetchApl01]
  );

  return (
    <DashboardAsesiContext.Provider value={value}>
      {children}
    </DashboardAsesiContext.Provider>
  );
};

export const useDashboardAsesi = () => {
  const context = useContext(DashboardAsesiContext);
  if (!context) {
    throw new Error(
      "useDashboardAsesi must be used within a DashboardAsesiProvider"
    );
  }
  return context;
};
