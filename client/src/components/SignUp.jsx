import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./styles/SignUp.module.scss";

export default function SignUp() {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Zarejestruj się</h1>
      <form className={classes.form}>
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
        <Button>Zarejestruj się</Button>
        <div className={classes.info}>Masz już konto? Zaloguj się!</div>
      </form>
    </div>
  );
}
