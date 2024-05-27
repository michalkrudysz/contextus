import { useState } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { registerAction } from "../services/authActions";
import classes from "./styles/SignUp.module.scss";

const message = "Posiadasz już konto? Zaloguj się!";

export default function SignUp({ toggleAuthMode }) {
  const [error, setError] = useState(null);
  const [content, setContent] = useState(
    <div className={classes.info} onClick={toggleAuthMode}>
      {message}
    </div>
  );

  const handleInputChange = () => {
    if (error) {
      setError(null);
      setContent(
        <div className={classes.info} onClick={toggleAuthMode}>
          {message}
        </div>
      );
    }
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const result = await registerAction({
      request: {
        formData: () => formData,
      },
    });

    if (!result.success) {
      setError(result.message);
      setContent(<div className={classes.error}>{result.message}</div>);
    } else {
      console.log("Registration successful", result.data);
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Zarejestruj się</h1>
      <form
        className={classes.form}
        onSubmit={handleSignUp}
        onFocus={handleInputChange}
      >
        <div className={classes["form-group"]}>
          <Input
            type="text"
            name="login"
            placeholder="Login"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={classes["form-group"]}>
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={classes["form-group"]}>
          <Input
            type="password"
            name="password"
            placeholder="Hasło"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={classes["form-group"]}>
          <Input
            type="password"
            name="repeat-password"
            placeholder="Powtórz hasło"
            onChange={handleInputChange}
            required
          />
        </div>
        <Button type="submit">Zarejestruj się</Button>
        {content}
      </form>
    </div>
  );
}
