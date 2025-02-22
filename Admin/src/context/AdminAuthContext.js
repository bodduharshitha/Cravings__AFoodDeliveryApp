import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
    localStorage.getItem("adminToken") ? true : false
  );
  const navigate = useNavigate();

  const login = (token) => {
    localStorage.setItem("adminToken", token);
    setIsAdminAuthenticated(true);
    navigate("/admin");
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setIsAdminAuthenticated(false);
    navigate("/admin/login");
  };

  return (
    <AdminAuthContext.Provider value={{ isAdminAuthenticated, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
