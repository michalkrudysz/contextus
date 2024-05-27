import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./styles/SignUp.module.scss";
import { useHandleFormSubmit } from "../utils/handleFormSubmit";

export default function SignUp({ toggleAuthMode }) {
  const handleSignUp = useHandleFormSubmit("/register");

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Zarejestruj się</h1>
      <form className={classes.form} onSubmit={handleSignUp}>
        <div className={classes["form-group"]}>
          <Input type="text" name="login" placeholder="Login" />
        </div>
        <div className={classes["form-group"]}>
          <Input type="email" name="email" placeholder="E-mail" />
        </div>
        <div className={classes["form-group"]}>
          <Input type="password" name="password" placeholder="Hasło" />
        </div>
        <div className={classes["form-group"]}>
          <Input
            type="password"
            name="repeat-password"
            placeholder="Powtórz hasło"
          />
        </div>
        <Button type="submit">Zarejestruj się</Button>
        <div className={classes.info} onClick={toggleAuthMode}>
          Posiadasz już konto? Zaloguj się!
        </div>
      </form>
    </div>
  );
}
