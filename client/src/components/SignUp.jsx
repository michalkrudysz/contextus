import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { registerAction, loginAction } from "../redux/slices/authSlice";
import classes from "./styles/SignUp.module.scss";

const message = "Posiadasz już konto? Zaloguj się!";

export default function SignUp({ toggleAuthMode }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [attemptedSignUp, setAttemptedSignUp] = useState(false);
  const auth = useSelector((state) => state.auth);
  const defaultMessage = (
    <div className={classes.info} onClick={toggleAuthMode}>
      {message}
    </div>
  );
  const [content, setContent] = useState(defaultMessage);

  useEffect(() => {
    if (auth.token) {
      navigate("/dashboard");
    }
  }, [auth.token, navigate]);

  useEffect(() => {
    if (
      attemptedSignUp &&
      auth.registrationError &&
      error !== auth.registrationError
    ) {
      setError(auth.registrationError);
      setContent(<div className={classes.error}>{auth.registrationError}</div>);
    }
  }, [auth.registrationError, error, attemptedSignUp]);
  const handleInputFocus = () => {
    if (error) {
      setError(null);
      setContent(defaultMessage);
      setAttemptedSignUp(false);
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const registerData = {
      username: formData.get("login"),
      email: formData.get("email"),
      password: formData.get("password"),
      repeatPassword: formData.get("repeat-password"),
    };

    setError(null);
    setContent(defaultMessage);
    setAttemptedSignUp(true);
    const resultAction = await dispatch(registerAction(registerData));
    if (registerAction.fulfilled.match(resultAction)) {
      const loginData = {
        username: registerData.username,
        password: registerData.password,
      };
      await dispatch(loginAction(loginData));
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Zarejestruj się</h1>
      <form
        className={classes.form}
        onSubmit={handleSignUp}
        onFocus={handleInputFocus}
      >
        <div className={classes["form-group"]}>
          <Input type="text" name="login" placeholder="Login" required />
        </div>
        <div className={classes["form-group"]}>
          <Input type="email" name="email" placeholder="E-mail" required />
        </div>
        <div className={classes["form-group"]}>
          <Input type="password" name="password" placeholder="Hasło" required />
        </div>
        <div className={classes["form-group"]}>
          <Input
            type="password"
            name="repeat-password"
            placeholder="Powtórz hasło"
            required
          />
        </div>
        <Button type="submit">Zarejestruj się</Button>
        {content}
      </form>
    </div>
  );
}
