// components/CustomWord.js
import { useState } from "react";
import { useSelector } from "react-redux";
import { apiRequest } from "../services/api";

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
        onSuccessfulSubmission(); // Trigger the callback if the submission is successful
      }
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Give Word</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="Enter a word"
        />
        <button type="submit">Submit</button>
      </form>
      {response && <p>{JSON.stringify(response)}</p>}
    </div>
  );
}
