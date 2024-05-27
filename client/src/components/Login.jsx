import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./styles/Login.module.scss";
import { useHandleFormSubmit } from "../utils/handleFormSubmit";

export default function Login({ toggleAuthMode }) {
  const handleLogin = useHandleFormSubmit("/login");

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Zaloguj się</h1>
      <form className={classes.form} onSubmit={handleLogin}>
        <div className={classes["form-group"]}>
          <Input type="text" name="login" placeholder="Login" />
        </div>
        <div className={classes["form-group"]}>
          <Input type="password" name="password" placeholder="Hasło" />
        </div>
        <Button type="submit">Zaloguj się</Button>
        <div className={classes.info} onClick={toggleAuthMode}>
          Nie masz konta? Utwórz je!
        </div>
      </form>
    </div>
  );
}
