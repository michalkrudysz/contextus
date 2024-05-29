import logo from "../../public/logo.png";
import classes from "./styles/HeaderDashboard.module.scss";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

export default function HeaderDashboard() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={classes.logut}>
        <button onClick={handleLogout}>Wyloguj się</button>
      </div>
    </header>
  );
}
