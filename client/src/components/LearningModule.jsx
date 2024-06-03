import { Link } from "react-router-dom";
import classes from "./styles/LearningModule.module.scss";
import { useSelector } from "react-redux";
import {
  selectReadyForReviewPhrases,
  selectPhrases,
} from "../features/learning/learningSelectors";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePhraseSuccess } from "../features/learning/learningSlice";

export default function LearningModule() {
  // Pobieranie danych z Redux store
  const allPhrases = useSelector(selectPhrases);
  const reviewPhrases = useSelector(selectReadyForReviewPhrases);
  const dispatch = useDispatch();

  // Logowanie wszystkich zwrotów
  useEffect(() => {
    console.log("All phrases:", allPhrases);
  }, [allPhrases]);

  // Ustawianie aktualnego zwrotu
  const [currentPhrase, setCurrentPhrase] = useState(
    reviewPhrases.length > 0 ? reviewPhrases[0] : {}
  );

  // Aktualizacja `currentPhrase` gdy `reviewPhrases` się zmienia
  useEffect(() => {
    if (reviewPhrases.length > 0) {
      setCurrentPhrase(reviewPhrases[0]);
    }
  }, [reviewPhrases]);

  // Zarządzanie stanem wejściowym
  const [translation, setTranslation] = useState("");

  const handleTranslationChange = (event) => {
    setTranslation(event.target.value);
  };

  const [answerResult, setAnswerResult] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (translation === currentPhrase.phrase) {
      setAnswerResult("correct");

      // Aktualizacja frazy tylko jeśli odpowiedź jest poprawna
      const updatedPhrase = {
        id: currentPhrase.id,
        lastReviewDate: new Date().toISOString(),
        level: currentPhrase.level < 6 ? currentPhrase.level + 1 : 6, // Asumujemy, że 6 to maksymalny poziom
      };

      // Dispatch akcji z zaktualizowanymi danymi
      dispatch(updatePhraseSuccess(updatedPhrase));
    } else {
      setAnswerResult("incorrect");
    }
  };

  const [currentLanguagePhrase, setCurrentLanguagePhrase] = useState(
    currentPhrase.translation
  );
  useEffect(() => {
    setCurrentLanguagePhrase(currentPhrase.translation);
  }, [currentPhrase.translation]);

  const checkTranslation = () => {
    // Jeśli aktualnie wyświetlany tekst jest tłumaczeniem, pokaż oryginalny zwrot
    if (currentLanguagePhrase === currentPhrase.translation) {
      setCurrentLanguagePhrase(currentPhrase.phrase);
    } else {
      // W przeciwnym razie pokaż tłumaczenie
      setCurrentLanguagePhrase(currentPhrase.translation);
    }
  };

  return (
    <div className={classes.content}>
      <h1>Przetłumacz wyświetlony zwrot na język angielski</h1>
      <h2>{currentLanguagePhrase}</h2>
      <div className={classes.translation}>
        <button
          className={classes["translation-button"]}
          type="submit"
          onClick={checkTranslation}
        >
          {currentLanguagePhrase === currentPhrase.phrase
            ? "Pokaż zwrot"
            : "Pokaż tłumaczenie"}
        </button>
      </div>
      <form className={classes.form} onSubmit={handleFormSubmit}>
        <input
          className={classes.input}
          type="text"
          placeholder="Wprowadź tłumaczenie na angielski"
          value={translation}
          onChange={handleTranslationChange}
        />

        <div className={classes.info}>
          {answerResult === "correct" && (
            <p className={classes.correct}>Poprawna odpowiedź!</p>
          )}
          {answerResult === "incorrect" && (
            <p className={classes.incorrect}>Niepoprawna odpowiedź!</p>
          )}
        </div>
        <div className={classes.buttons}>
          <Link to=".." className={`${classes.button} ${classes.synchronize}`}>
            Synchronizuj
          </Link>
          <button className={classes.button} type="submit">
            Sprawdź
          </button>
        </div>
      </form>
      <div className={classes["level-info"]}>
        <h2>
          Poziom:<span>pierwszy</span>
        </h2>
        <h3>
          Ilość zwrotów: <span>20</span>
        </h3>
      </div>
    </div>
  );
}
