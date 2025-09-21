import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { 
  getCurrentAsesi, 
  showapl01, 
  getAssesmentByAsesi,
  getAssesmentAssesiStatus,
  getApl02ByAssesi 
} from "../api/api";
import { useAuth } from "./AuthContext";

const DashboardAsesiContext = createContext();

export const DashboardAsesiProvider = ({ children }) => {
  const { user } = useAuth();
  const [currentAsesi, setCurrentAsesi] = useState(null); // State untuk current asesi
  const [apl01Data, setApl01Data] = useState([]); // State untuk data APL01
  const [apl02Data, setApl02Data] = useState(null); // State untuk data APL02
  const [assessmentStatus, setAssessmentStatus] = useState(null); // State untuk status assessment
  const [userAssessments, setUserAssessments] = useState([]); // State untuk assessment user
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

  // Fetch APL02 data
  const fetchApl02 = useCallback(async () => {
    if (!user || user.role !== "assesi" || !user.id) return;
    setLoading(true);
    setError(null);
    try {
      const res = await getApl02ByAssesi(user.id);
      setApl02Data(res.data?.data || null);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch data APL02");
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Fetch assessment status
  const fetchAssessmentStatus = useCallback(async () => {
    if (!user || user.role !== "assesi") return;
    setLoading(true);
    setError(null);
    try {
      const res = await getAssesmentAssesiStatus();
      setAssessmentStatus(res.data?.data || null);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch status assessment");
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Fetch user assessments
  const fetchUserAssessments = useCallback(async () => {
    if (!user || user.role !== "assesi" || !user.id) return;
    setLoading(true);
    setError(null);
    try {
      const res = await getAssesmentByAsesi(user.id);
      setUserAssessments(res.data?.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch user assessments");
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Fetch data saat komponen pertama kali dimuat
  useEffect(() => {
    if (user?.role === "assesi") {
      fetchCurrentAsesi();
      fetchApl01();
      fetchApl02();
      fetchAssessmentStatus();
      fetchUserAssessments();
    }
  }, [fetchCurrentAsesi, fetchApl01, fetchApl02, fetchAssessmentStatus, fetchUserAssessments]);

  const value = useMemo(
    () => ({
      currentAsesi,
      apl01Data,
      apl02Data,
      assessmentStatus,
      userAssessments,
      loading,
      error,
      fetchCurrentAsesi,
      fetchApl01,
      fetchApl02,
      fetchAssessmentStatus,
      fetchUserAssessments,
    }),
    [
      currentAsesi, 
      apl01Data, 
      apl02Data, 
      assessmentStatus, 
      userAssessments, 
      loading, 
      error, 
      fetchCurrentAsesi, 
      fetchApl01, 
      fetchApl02, 
      fetchAssessmentStatus, 
      fetchUserAssessments
    ]
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
