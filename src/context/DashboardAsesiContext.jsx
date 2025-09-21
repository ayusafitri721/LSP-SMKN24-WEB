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
  getApl02ByAssesi,
  getFormAk02ByAssesi,
  getFormAk03ByAssesi,
  getFormAk05ByAssesi,
  getFormIa01ByAssesi,
  getSkemas,
} from "../api/api";
import { useAuth } from "./AuthContext";

const DashboardAsesiContext = createContext();

export const DashboardAsesiProvider = ({ children }) => {
  const { user } = useAuth();
  const [currentAsesi, setCurrentAsesi] = useState(null); // State untuk current asesi
  const [apl01Data, setApl01Data] = useState([]); // State untuk data APL01
  const [apl02Data, setApl02Data] = useState(null); // State untuk data APL02
  const [ak02Data, setAk02Data] = useState(null); // State untuk data AK02
  const [ak03Data, setAk03Data] = useState(null); // State untuk data AK03
  const [ak05Data, setAk05Data] = useState(null); // State untuk data AK05
  const [ia01Data, setIa01Data] = useState(null); // State untuk data IA01
  const [skemaList, setSkemaList] = useState([]); // State untuk daftar skema
  const [assessmentStatus, setAssessmentStatus] = useState(null); // State untuk status assessment
  const [userAssessments, setUserAssessments] = useState([]); // State untuk assessment user
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch current asesi
  const fetchCurrentAsesi = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      const res = await getCurrentAsesi();
      // Backend may return {data: {...}} or {user: {...}} or raw object
      const payload = res.data?.data ?? res.data?.user ?? res.data ?? null;
      setCurrentAsesi(payload); // Simpan data asesi saat ini
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch current asesi");
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Fetch APL01 data
  const fetchApl01 = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      const res = await showapl01();
      // Controller currently returns asesi in {user: {...}}; keep robust parsing
      const payload = res.data?.data ?? res.data?.user ?? res.data ?? [];
      setApl01Data(payload); // Simpan data APL01 (or proxy data)
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch data APL01");
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Fetch APL02 data
  const fetchApl02 = useCallback(async () => {
    const uid = user?.id ?? (() => { try { return JSON.parse(localStorage.getItem("user"))?.id } catch { return undefined } })();
    if (!uid) return;
    setLoading(true);
    setError(null);
    try {
      const res = await getApl02ByAssesi(uid);
      setApl02Data(res.data?.data || null);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch data APL02");
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Fetch AK02 data
  const fetchAk02 = useCallback(async () => {
    const uid = user?.id ?? (() => { try { return JSON.parse(localStorage.getItem("user"))?.id } catch { return undefined } })();
    if (!uid) return;
    setLoading(true);
    setError(null);
    try {
      const res = await getFormAk02ByAssesi(uid);
      setAk02Data(res.data?.data || null);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch data AK02");
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Fetch AK03 data
  const fetchAk03 = useCallback(async () => {
    const uid = user?.id ?? (() => { try { return JSON.parse(localStorage.getItem("user"))?.id } catch { return undefined } })();
    if (!uid) return;
    setLoading(true);
    setError(null);
    try {
      const res = await getFormAk03ByAssesi(uid);
      setAk03Data(res.data?.data || null);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch data AK03");
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Fetch AK05 data
  const fetchAk05 = useCallback(async () => {
    const uid = user?.id ?? (() => { try { return JSON.parse(localStorage.getItem("user"))?.id } catch { return undefined } })();
    if (!uid) return;
    setLoading(true);
    setError(null);
    try {
      const res = await getFormAk05ByAssesi(uid);
      setAk05Data(res.data?.data || null);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch data AK05");
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Fetch IA01 data
  const fetchIa01 = useCallback(async () => {
    const uid = user?.id ?? (() => { try { return JSON.parse(localStorage.getItem("user"))?.id } catch { return undefined } })();
    if (!uid) return;
    setLoading(true);
    setError(null);
    try {
      const res = await getFormIa01ByAssesi(uid);
      setIa01Data(res.data?.data || null);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch data IA01");
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Fetch assessment status
  const fetchAssessmentStatus = useCallback(async () => {
    if (!user) return;
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

  // Fetch schema list (for selection/reference)
  const fetchSkemas = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getSkemas();
      setSkemaList(res.data?.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal fetch data skema");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch data saat komponen pertama kali dimuat
  useEffect(() => {
    if (user?.role === "assesi") {
      fetchCurrentAsesi();
      fetchApl01();
      fetchApl02();
      fetchAk02();
      fetchAk03();
      fetchAk05();
      fetchIa01();
      fetchAssessmentStatus();
      fetchUserAssessments();
      fetchSkemas();
    }
  }, [fetchCurrentAsesi, fetchApl01, fetchApl02, fetchAk02, fetchAk03, fetchAk05, fetchIa01, fetchAssessmentStatus, fetchUserAssessments, fetchSkemas]);

  const value = useMemo(
    () => ({
      currentAsesi,
      apl01Data,
      apl02Data,
      ak02Data,
      ak03Data,
      ak05Data,
      ia01Data,
      skemaList,
      assessmentStatus,
      userAssessments,
      loading,
      error,
      fetchCurrentAsesi,
      fetchApl01,
      fetchApl02,
      fetchAk02,
      fetchAk03,
      fetchAk05,
      fetchIa01,
      fetchSkemas,
      fetchAssessmentStatus,
      fetchUserAssessments,
    }),
    [
      currentAsesi, 
      apl01Data, 
      apl02Data, 
      ak02Data,
      ak03Data,
      ak05Data,
      ia01Data,
      skemaList,
      assessmentStatus, 
      userAssessments, 
      loading, 
      error, 
      fetchCurrentAsesi, 
      fetchApl01, 
      fetchApl02, 
      fetchAk02,
      fetchAk03,
      fetchAk05,
      fetchIa01,
      fetchSkemas,
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
