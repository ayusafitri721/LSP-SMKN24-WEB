import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { getCurrentAsesor } from "../api/api";
import { useAuth } from "./AuthContext";

const DashboardAsesorContext = createContext();

export const DashboardAsesorProvider = ({ children }) => {
  const { user } = useAuth();
  const [currentAsesor, setCurrentAsesor] = useState(null); // State untuk current asesor
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch current asesor
  const fetchCurrentAsesor = useCallback(async () => {
    if (!user || user.role !== "asesor") return; // Cek role user
    setLoading(true);
    setError(null);
    try {
      const res = await getCurrentAsesor();
      const payload = res.data?.data ?? res.data ?? null; // Parsing data
      setCurrentAsesor(payload); // Simpan data asesor saat ini
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch current asesor");
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Fetch data saat komponen pertama kali dimuat
  useEffect(() => {
    if (user?.role === "asesor") {
      fetchCurrentAsesor();
    }
  }, [fetchCurrentAsesor]);

  const value = useMemo(
    () => ({
      currentAsesor,
      loading,
      error,
      fetchCurrentAsesor,
    }),
    [currentAsesor, loading, error, fetchCurrentAsesor]
  );

  return (
    <DashboardAsesorContext.Provider value={value}>
      {children}
    </DashboardAsesorContext.Provider>
  );
};

export const useDashboardAsesor = () => {
  const context = useContext(DashboardAsesorContext);
  if (!context) {
    throw new Error(
      "useDashboardAsesor must be used within a DashboardAsesorProvider"
    );
  }
  return context;
};
