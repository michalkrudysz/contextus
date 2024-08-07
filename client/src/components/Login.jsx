import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./styles/Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAction } from "../features/auth/authThunks";

export default function Login({ toggleAuthMode }) {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const defaultMessage = (
    <div className={classes.info} onClick={toggleAuthMode}>
      Nie masz konta? Utwórz je!
    </div>
  );
  const [content, setContent] = useState(defaultMessage);

  useEffect(() => {
    if (auth.token) {
      navigate("/dashboard");
    }
    if (auth.errorMessage && error !== auth.errorMessage) {
      setError(auth.errorMessage);
      setContent(<div className={classes.error}>{auth.errorMessage}</div>);
    } else {
      setError(null);
      setContent(defaultMessage);
    }
  }, [auth.token, auth.errorMessage, navigate]);

  const handleFocus = () => {
    setError(null);
    setContent(defaultMessage);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const loginData = {
      username: formData.get("login"),
      password: formData.get("password"),
    };
    setError(null);
    setContent(defaultMessage);
    dispatch(loginAction(loginData));
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Zaloguj się</h1>
      <form className={classes.form} onSubmit={handleLogin}>
        <div className={classes["form-group"]}>
          <Input
            type="text"
            name="login"
            placeholder="Login"
            onFocus={handleFocus}
            required
          />
        </div>
        <div className={classes["form-group"]}>
          <Input
            type="password"
            name="password"
            placeholder="Hasło"
            onFocus={handleFocus}
            required
          />
        </div>
        <Button type="submit">Zaloguj się</Button>
        {content}
      </form>
    </div>
  );
}
