import { useState } from "react";
import { useSelector } from "react-redux";
import { apiRequest } from "../services/api";
import classes from "./styles/CustomWord.module.scss";

export default function CustomWord({ onSuccessfulSubmission }) {
  const [word, setWord] = useState("");
  const [response, setResponse] = useState("");
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.userId);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const body = {
      word: word,
      userId: userId,
    };

    try {
      const serverResponse = await apiRequest(
        "/dashboard/generatePhrase",
        "POST",
        body,
        headers
      );
      setResponse(serverResponse);
      if (serverResponse.success) {
        onSuccessfulSubmission();
      }
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
  };

  return (
    <div className={classes.content}>
      <h1>Wpisz słowo, a my stworzymy za Ciebie zdania z jego użyciem!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Wpisz słowo..."
        />
        <button type="submit">Generuj</button>
      </form>
      {response && <p>{JSON.stringify(response)}</p>}
    </div>
  );
}
