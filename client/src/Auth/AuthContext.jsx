import { createContext, useState, useEffect } from "react";
import API from "../api/axios";
import LoadingSpinner from "../Components/LoadingSpinner";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const logout = async () => {
  try {
    await API.post("/client/logout");
  } catch (error) {
    toast.error("Logout Failed!", error.message);
  }
};

export const AuthProvider = function ({ children }) {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      setLoading(true);
      const res = await API.get("/client/me");
      setUser(res.data?.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
