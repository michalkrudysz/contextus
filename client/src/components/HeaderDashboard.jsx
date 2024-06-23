import logo from "../../public/logo.png";
import classes from "./styles/HeaderDashboard.module.scss";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function HeaderDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="Logo" onClick={() => navigate("/dashboard")} />
      </div>
      <div className={classes.logout}>
        <button onClick={handleLogout}>Wyloguj się</button>
      </div>
    </header>
  );
}
