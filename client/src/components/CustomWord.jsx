import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleSubmitWord } from "../utils/wordUtils";
import classes from "./styles/CustomWord.module.scss";

export default function CustomWord({ onSuccessfulSubmission }) {
  const [word, setWord] = useState("");
  const [response, setResponse] = useState("");
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.userId);
  const navigate = useNavigate();

  const handleSubmission = async (event) => {
    event.preventDefault();
    const result = await handleSubmitWord(
      word,
      token,
      userId,
      navigate,
      onSuccessfulSubmission
    );
    setResponse(result);
  };

  return (
    <div className={classes.content}>
      <h1>Wpisz słowo, a my stworzymy za Ciebie zdania z jego użyciem!</h1>
      <form onSubmit={handleSubmission}>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Wpisz słowo..."
        />
        <button type="submit">Generuj</button>
      </form>
      <div className={classes.response}>
        {response && <p>{JSON.stringify(response).slice(1, -1)}</p>}
      </div>
    </div>
  );
}
