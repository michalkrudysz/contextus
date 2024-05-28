import logo from "../../public/logo.png";
import classes from "./styles/Header.module.scss";

export default function Header({ toggleAuthMode }) {
  return (
    <header className={classes.header}>
      <div className={classes["main-container"]}>
        <div className={classes["logo-container"]}>
          <img src={logo} alt="Logo" onClick={toggleAuthMode} />
        </div>
        <div className={classes.content}>
          <h1>Twój przyjaciel w nauce języków obcych</h1>
        </div>
      </div>
    </header>
  );
}
