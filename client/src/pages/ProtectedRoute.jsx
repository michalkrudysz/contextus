import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { apiRequest } from "../services/api";
import { logout } from "../features/auth/authSlice";
function ProtectedRoute() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleLogout = useCallback(() => {
    dispatch(logout());
    setShouldRedirect(true);
  }, [dispatch]);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const response = await apiRequest("/home/check-token", "POST", {
          token,
        });
        if (!response.success || response.isValid === false) {
          handleLogout();
          setShouldRedirect(true);
        }
      } catch (error) {
        console.error("Wystąpił błąd podczas sprawdzania tokena:", error);
      }
    };

    if (token) {
      checkToken();
    } else {
      setShouldRedirect(true);
    }
  }, [token, handleLogout]);

  if (shouldRedirect) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
