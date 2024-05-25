import { Link } from "react-router-dom";
import logo from "../../public/logo.png";
import classes from "./styles/Header.module.scss";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes["main-container"]}>
        <div className={classes["logo-container"]}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className={classes.content}>
          <h1>Twój przyjaciel w nauce języków obcych</h1>
        </div>
      </div>
    </header>
  );
}
