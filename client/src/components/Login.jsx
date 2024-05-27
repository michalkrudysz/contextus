import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./styles/Login.module.scss";

export default function Login() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Zaloguj się</h1>
      <form className={classes.form}>
        <div className={classes["form-group"]}>
          <Input type="text" name="login" placeholder="Login" />
        </div>
        <div className={classes["form-group"]}>
          <Input type="password" name="password" placeholder="Hasło" />
        </div>
        <Button>Zaloguj się</Button>
        <div className={classes.info}>Nie masz konta? Utwórz je!</div>
      </form>
    </div>
  );
}
