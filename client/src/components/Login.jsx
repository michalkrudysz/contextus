import Input from "../UI/Input";
import Button from "../UI/Button";
import classes from "./styles/Login.module.scss";
import { useHandleFormSubmit } from "../utils/handleFormSubmit";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ toggleAuthMode }) {
  const handleLogin = useHandleFormSubmit("/login");
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
  }, [auth.token, navigate]);

  useEffect(() => {
    if (auth.errorMessage && error !== auth.errorMessage) {
      setError(auth.errorMessage);
      setContent(<div className={classes.error}>{auth.errorMessage}</div>);
    }
  }, [auth.errorMessage]);

  const handleFocus = () => {
    setError(null);
    setContent(defaultMessage);
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
          />
        </div>
        <div className={classes["form-group"]}>
          <Input
            type="password"
            name="password"
            placeholder="Hasło"
            onFocus={handleFocus}
          />
        </div>
        <Button type="submit">Zaloguj się</Button>
        {content}
      </form>
    </div>
  );
}
