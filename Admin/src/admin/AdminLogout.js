import { useEffect } from "react";
import { useAdminAuth } from "../context/AdminAuthContext";

const AdminLogout = () => {
  const { logout } = useAdminAuth();

  useEffect(() => {
    logout();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Logging out...</h2>
    </div>
  );
};

export default AdminLogout;
