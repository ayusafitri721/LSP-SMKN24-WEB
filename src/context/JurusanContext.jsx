import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import {
  jurusans as apiJurusans,
  putJurusan,
  deleteJurusan,
  createJurusan,
} from "../api/api";

const JurusanContext = createContext();

export function JurusanProvider({ children }) {
  const [jurusanList, setJurusanList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJurusans = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await apiJurusans();
      setJurusanList(res.data.data || []);
    } catch (err) {
      setError(err.response?.data?.message || "Gagal mengambil data jurusan!");
    } finally {
      setLoading(false);
    }
  }, []);

  const postJurusan = useCallback(async (data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await createJurusan(data);
      setJurusanList((prev) => [...prev, res.data?.data]);
      return res.data?.data;
    } catch (err) {
      setError(err.response?.data?.message || "Gagal menambah jurusan!");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateJurusan = useCallback(async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const res = await putJurusan(id, data);
      setJurusanList((prev) =>
        prev.map((jurusan) => (jurusan.id === id ? res.data?.data : jurusan))
      );
      return res.data?.data;
    } catch (err) {
      setError(err.response?.data?.message || "Gagal mengubah jurusan!");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const removeJurusan = useCallback(async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteJurusan(id);
      setJurusanList((prev) => prev.filter((jurusan) => jurusan.id !== id));
    } catch (err) {
      setError(err.response?.data?.message || "Gagal menghapus jurusan!");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJurusans();
  }, [fetchJurusans]);

  const value = useMemo(
    () => ({
      jurusanList,
      loading,
      error,
      fetchJurusans,
      postJurusan,
      updateJurusan,
      removeJurusan,
    }),
    [
      jurusanList,
      loading,
      error,
      fetchJurusans,
      postJurusan,
      updateJurusan,
      removeJurusan,
    ]
  );

  return (
    <JurusanContext.Provider value={value}>{children}</JurusanContext.Provider>
  );
}

export function useJurusan() {
  const context = useContext(JurusanContext);
  if (!context) {
    throw new Error("useJurusan must be used within a JurusanProvider");
  }
  return context;
}
