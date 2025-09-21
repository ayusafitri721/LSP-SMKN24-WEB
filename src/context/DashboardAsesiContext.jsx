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
  getAssesments,
  createAssesmentAsesi,
} from "../api/api";
import { fetchCsrfCookie } from "../api/api";
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
      // Fallback: gunakan data APL-01 sebagai profil asesi bila endpoint /asesi 404
      if (err?.response?.status === 404) {
        try {
          const aplRes = await showapl01();
          const fallback = aplRes.data?.data ?? aplRes.data?.user ?? aplRes.data ?? null;
          if (fallback) setCurrentAsesi(fallback);
        } catch (e) {
          setError(e.response?.data?.message || "Gagal fetch current asesi (fallback APL01)");
        }
      } else {
        setError(err.response?.data?.message || "Gagal fetch current asesi");
      }
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
      if (err?.response?.status === 404) {
        // belum ada APL02, aman diabaikan
        setApl02Data(null);
      } else {
        setError(err.response?.data?.message || "Gagal fetch data APL02");
      }
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
      if (err?.response?.status === 404) {
        setAk02Data(null);
      } else {
        setError(err.response?.data?.message || "Gagal fetch data AK02");
      }
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
      if (err?.response?.status === 404) {
        setAk03Data(null);
      } else {
        setError(err.response?.data?.message || "Gagal fetch data AK03");
      }
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
      if (err?.response?.status === 404) {
        setAk05Data(null);
      } else {
        setError(err.response?.data?.message || "Gagal fetch data AK05");
      }
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
      if (err?.response?.status === 404) {
        setIa01Data(null);
      } else {
        setError(err.response?.data?.message || "Gagal fetch data IA01");
      }
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
    if (!user || user.role !== "assesi") return;
    // Derive asesi_id (NOT user.id). Prefer currentAsesi/apl01Data
    const deriveAsesiId = () => {
      // common shapes: {id, nama_lengkap,...} or {user:{...}}; prefer top-level id for asesi
      const fromCurrent = currentAsesi?.id ?? currentAsesi?.assesi_id ?? currentAsesi?.user?.assesi_id;
      if (fromCurrent) return Number(fromCurrent);
      const fromApl01 = Array.isArray(apl01Data) ? apl01Data[0]?.id ?? apl01Data[0]?.assesi_id : (apl01Data?.id ?? apl01Data?.assesi_id);
      if (fromApl01) return Number(fromApl01);
      try {
        const lp = JSON.parse(localStorage.getItem("asesiProfile"));
        const fromLS = lp?.id ?? lp?.assesi_id;
        if (fromLS) return Number(fromLS);
      } catch {}
      return undefined;
    };
    const asesiId = deriveAsesiId();
    if (!asesiId) return;
    setLoading(true);
    setError(null);
    try {
      const res = await getAssesmentByAsesi(asesiId);
      setUserAssessments(res.data?.data || []);
    } catch (err) {
      if (err?.response?.status === 404) {
        setUserAssessments([]);
      } else {
        setError(err.response?.data?.message || "Gagal fetch user assessments");
      }
    } finally {
      setLoading(false);
    }
  }, [user, currentAsesi, apl01Data]);

  // Ensure user has assesment_asesi by auto-creating one (pick first active assessment)
  const ensureUserAssesmentAsesi = useCallback(async () => {
    if (!user || user.role !== 'assesi') return;
    // reuse deriveAsesiId from above scope
    const deriveAsesiId = () => {
      const fromCurrent = currentAsesi?.id ?? currentAsesi?.assesi_id ?? currentAsesi?.user?.assesi_id;
      if (fromCurrent) return Number(fromCurrent);
      const fromApl01 = Array.isArray(apl01Data) ? apl01Data[0]?.id ?? apl01Data[0]?.assesi_id : (apl01Data?.id ?? apl01Data?.assesi_id);
      if (fromApl01) return Number(fromApl01);
      try { const lp = JSON.parse(localStorage.getItem("asesiProfile")); const fromLS = lp?.id ?? lp?.assesi_id; if (fromLS) return Number(fromLS);} catch {}
      return undefined;
    };
    const asesiId = deriveAsesiId();
    if (!asesiId) return;

    // If already has, skip
    if (Array.isArray(userAssessments) && userAssessments.length > 0) return;

    try {
      const list = await getAssesments();
      const assessments = list.data?.data || [];
      const active = assessments.find(a => String(a.status).toLowerCase() === 'active');
      if (!active) return; // nothing to create

      await fetchCsrfCookie();
      await createAssesmentAsesi({ assesment_id: Number(active.id), assesi_id: Number(asesiId) });
      // refresh user assessments
      await fetchUserAssessments();
    } catch (e) {
      // ignore if backend rejects due to already joined elsewhere
    }
  }, [user, currentAsesi, apl01Data, userAssessments, fetchUserAssessments]);

  // Fetch schema list (for selection/reference)
  const fetchSkemas = useCallback(async () => {
    // Hanya untuk role yang diizinkan (route dilindungi middleware 'approve')
    if (user?.role !== 'assesor' && user?.role !== 'admin') return;
    setLoading(true);
    setError(null);
    try {
      const res = await getSkemas();
      setSkemaList(res.data?.data || []);
    } catch (err) {
      if (err?.response?.status === 403) {
        // asesi tidak diizinkan, abaikan
        setSkemaList([]);
      } else {
        setError(err.response?.data?.message || "Gagal fetch data skema");
      }
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Fetch data saat komponen pertama kali dimuat
  useEffect(() => {
    if (user?.role === "assesi") {
      // Pastikan cookie CSRF / sesi tersedia untuk route Sanctum
      fetchCsrfCookie().finally(() => {
      fetchCurrentAsesi();
      fetchApl01();
      fetchApl02();
      fetchAk02();
      fetchAk03();
      fetchAk05();
      fetchIa01();
      fetchAssessmentStatus();
      fetchUserAssessments();
      // try to ensure assesment_asesi if none
      ensureUserAssesmentAsesi();
      fetchSkemas();
      });
    }
  }, [fetchCurrentAsesi, fetchApl01, fetchApl02, fetchAk02, fetchAk03, fetchAk05, fetchIa01, fetchAssessmentStatus, fetchUserAssessments, ensureUserAssesmentAsesi, fetchSkemas]);

  // Re-fetch user assessments once APL-01 data is loaded (for asesi_id derivation)
  useEffect(() => {
    if (user?.role === 'assesi' && (Array.isArray(apl01Data) ? apl01Data.length > 0 : !!apl01Data)) {
      fetchUserAssessments();
    }
  }, [user, apl01Data, fetchUserAssessments]);

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
      ensureUserAssesmentAsesi,
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
      fetchUserAssessments,
      ensureUserAssesmentAsesi,
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
