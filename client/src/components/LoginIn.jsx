import classes from "./styles/LoginIn.module.scss";

export default function Login() {
  return (
    <div className={classes["container"]}>
      <h1 className={classes["title"]}>Zaloguj się</h1>
      <form className={classes["form"]}>
        <div className={classes["form-group"]}>
          <input
            type="text"
            name="login"
            className={classes["input"]}
            placeholder="Login"
          />
        </div>
        <div className={classes["form-group"]}>
          <input
            type="password"
            name="password"
            className={classes["input"]}
            placeholder="Hasło"
          />
        </div>
        <button type="submit" className={classes["button"]}>
          Zaloguj się
        </button>
        <div className={classes["info"]}>Nie masz konta? Utwórz je!</div>
      </form>
    </div>
  );
}
