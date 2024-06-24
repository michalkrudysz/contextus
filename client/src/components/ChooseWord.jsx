import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./styles/ChooseWord.module.scss";
import { fetchGeneratedPhrase, savePhrase } from "../utils/phraseUtils";

export default function ChooseWord() {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const navigate = useNavigate();
  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!dataFetched) {
      fetchGeneratedPhrase(
        userId,
        token,
        setData,
        setDataFetched,
        setError,
        setLoading
      );
    }
  }, [userId, token, dataFetched]);

  const handleNext = () => {
    setIsSaving(false);
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("..");
    }
  };

  const save = async () => {
    setIsSaving(true);
    savePhrase(userId, token, data, currentIndex, setSuccess, setError, () => {
      handleNext();
      setIsSaving(false);
    });
  };

  return (
    <div className={classes.main}>
      <h1>{loading ? "Trwa tworzenie fraz" : "Przygotowana fraza"}</h1>
      <div className={classes.container}>
        {loading ? (
          <p className={classes["loading-text"]}>
            Przygotowujemy dla Ciebie frazy...
          </p>
        ) : data.length > 0 ? (
          <>
            {error && <p className="error">{error}</p>}
            <div className={classes.phrases}>
              <p>
                <span>Po angielsku: </span>
                {data[currentIndex].phrase_en}
              </p>
              <p>
                <span>Po polsku: </span>
                {data[currentIndex].phrase_pl}
              </p>
            </div>
            <div className={classes.buttons}>
              <button onClick={handleNext}>Kolejny zwrot</button>
              <button disabled={isSaving} onClick={save}>
                Zapisz zwrot
              </button>
            </div>
            {success && <p className={classes.success}>{success}</p>}
          </>
        ) : (
          <p>Brak danych</p>
        )}
      </div>
    </div>
  );
}
