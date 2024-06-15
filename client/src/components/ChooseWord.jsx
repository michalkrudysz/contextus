import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../services/api";
import classes from "./styles/ChooseWord.module.scss";

export default function ChooseWord() {
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchGeneratedPhrase = async () => {
      if (dataFetched) return;

      try {
        setLoading(true);
        const endpoint = `/dashboard/fetchGeneratedPhrase/${userId}`;
        const headers = { Authorization: `Bearer ${token}` };
        const response = await apiRequest(endpoint, "GET", null, headers);

        if (response.success) {
          setData(response.data);
          setDataFetched(true);
        }
      } catch (error) {
        console.error("Failed to fetch phrase:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGeneratedPhrase();
  }, [userId, token, dataFetched]);

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("..");
    }
  };

  const save = async () => {
    const body = {
      user_id: userId,
      phrase: data[currentIndex].phrase_en,
      translation: data[currentIndex].phrase_pl,
      level: 1,
      source: "manual",
      last_review_date: new Date().toISOString(),
      review_interval: 1,
    };

    const headers = { Authorization: `Bearer ${token}` };

    try {
      const response = await apiRequest(
        "/dashboard/addPhrase",
        "POST",
        body,
        headers
      );
      if (!response.success) {
        setError(response.message);
      } else {
        setSuccess("Zwrot został pomyślnie dodany");
        setTimeout(() => {
          setSuccess("");
          handleNext();
        }, 500);
      }
    } catch (err) {
      setError("Error saving phrase: " + err.message);
    }
  };

  return (
    <div className={classes.main}>
      <h1>Przygotowana fraza</h1>
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        <>
          {error && <p className="error">{error}</p>}
          <div className={classes.phrases}>
            <p>
              <span> Po angielsku: </span>
              {data[currentIndex].phrase_en}
            </p>
            <p>
              <span>Po polsku:</span>
              {data[currentIndex].phrase_pl}
            </p>
          </div>
          {success && <p className={classes.success}>{success}</p>}
          <div className={classes.buttons}>
            <button onClick={handleNext}>Kolejny zwrot</button>
            <button onClick={save}>Zapisz zwrot</button>
          </div>
        </>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}
