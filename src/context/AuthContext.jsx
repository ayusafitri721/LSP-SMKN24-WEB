// context/AuthContext.jsx
import { createContext, useContext, useState, useMemo, useEffect } from "react";
import api from "../Api/api"; // axios instance misalnya

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/auth/login", credentials);
      const userData = {
        id: res.data.user.id,
        username: res.data.user.username,
        role: res.data.user.role,
        token: res.data.token,
      };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
      return res.data;
    } catch (err) {
      setError(err.response?.data || "Gagal login!");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    delete api.defaults.headers.common["Authorization"];
  };

  useEffect(() => {
    if (user?.token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    }
  }, [user]);

  const value = useMemo(
    () => ({ user, login, logout, loading, error }),
    [user, loading, error]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
