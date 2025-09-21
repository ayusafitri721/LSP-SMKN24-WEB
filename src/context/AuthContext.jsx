// context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/api";
import axios from "axios"; // untuk hit csrf-cookie di origin root

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Helper: base host untuk sanctum csrf-cookie (tanpa /api)
  const BASE_HOST = "http://127.0.0.1:8000";

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      // 1) Ambil CSRF cookie agar Laravel set XSRF-TOKEN & sesi
      await axios.get(`${BASE_HOST}/sanctum/csrf-cookie`, { withCredentials: true }); // penting
      // 2) Login (cookie-based). Jika backend login berada di /api/auth/login, tetap ok asalkan Sanctum stateful
      const res = await api.post("/auth/login", credentials); // api sudah withCredentials
      // 3) Simpan info user; jika backend mengandalkan cookie, token mungkin tidak diperlukan
      // optional: simpan token jika backend juga mengembalikan bearer, tetapi untuk SPA cookie tidak wajib
      const backendUser = res.data?.user || null;
      const token = res.data?.token || null;
      const minimalUser = backendUser ? { id: backendUser.id, role: backendUser.role, username: backendUser.username, jurusan_id: backendUser.jurusan_id, token } : null;
      if (minimalUser) localStorage.setItem("user", JSON.stringify(minimalUser));
      // 4) Ambil profil user dari endpoint yang tersedia (/asesi)
      try {
        const profile = await api.get("/asesi");
        // Simpan profil asesi secara terpisah bila diperlukan oleh komponen lain
        const asesiProfile = profile.data?.data ?? profile.data?.user ?? profile.data ?? null;
        try { if (asesiProfile) localStorage.setItem("asesiProfile", JSON.stringify(asesiProfile)); } catch {}
        // Tetap gunakan user dari response login untuk role/jurusan/username, sertakan token
        setUser(minimalUser || backendUser);
      } catch {
        setUser(minimalUser || res.data?.user);
      }
      return true;
    } catch (err) {
      setError(err?.response?.data?.message || "Login gagal");
      throw err?.response?.data || err;
    } finally {
      setLoading(false);
    }
  };

  // Hydrate user from localStorage on initial mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("user");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.id) {
          setUser(parsed);
        }
      }
    } catch {}
  }, []);

  const register = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      await axios.get(`${BASE_HOST}/sanctum/csrf-cookie`, { withCredentials: true });
      const res = await api.post("/auth/register", formData);
      return res.data;
    } catch (err) {
      setError(err?.response?.data?.message || "Register gagal");
      throw err?.response?.data || err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
