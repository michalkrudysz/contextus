import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { apiRequest } from "../services/api";

export default function GiveWord() {
  const [word, setWord] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
      setLoading(true); // Start loading when connection opens
    };

    socket.onmessage = (event) => {
      setData(JSON.parse(event.data));
      setLoading(false); // Stop loading when data is received
    };

    socket.onerror = (error) => {
      console.error("WebSocket Error:", error);
      setLoading(false); // Stop loading on error
    };

    return () => socket.close();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const body = {
      word: word,
    };

    setLoading(true); // Start loading when the request is made
    try {
      const response = await apiRequest(
        "/dashboard/generatePhrase",
        "POST",
        body,
        headers
      );
      console.log("Response:", response);
      alert("Phrase generated successfully!");
      setLoading(false); // Stop loading after the request
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to generate phrase: " + error.message);
      setLoading(false); // Stop loading on error
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.map((item, index) => (
            <div key={index}>
              <p>
                {item.EN} - {item.PL}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
