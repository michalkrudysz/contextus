import { Link } from "react-router-dom";
import classes from "./styles/LearningModule.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  selectReadyForReviewPhrases,
  selectPhrasesCountByLevel,
} from "../features/learning/learningSelectors";
import { useState, useEffect } from "react";
import {
  updatePhraseSuccess,
  updatePhraseFailure,
} from "../features/learning/learningSlice";

export default function LearningModule() {
  const reviewPhrases = useSelector(selectReadyForReviewPhrases);
  const phrasesCountByLevel = useSelector(selectPhrasesCountByLevel);

  const dispatch = useDispatch();

  const [currentPhrase, setCurrentPhrase] = useState(reviewPhrases[0] || {});
  const [translation, setTranslation] = useState("");
  const [answerResult, setAnswerResult] = useState(null);
  const [buttonContent, setButtonContent] = useState("Sprawdź");
  const [currentLanguagePhrase, setCurrentLanguagePhrase] = useState(
    currentPhrase.translation || ""
  );
  const [isSessionComplete, setIsSessionComplete] = useState(false);

  useEffect(() => {
    if (reviewPhrases.length > 0) {
      setCurrentPhrase(reviewPhrases[0]);
      setCurrentLanguagePhrase(reviewPhrases[0].translation);
    }
  }, [reviewPhrases]);

  const level = currentPhrase.level || null;
  const phrasesCount = phrasesCountByLevel[level] || 0;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (
      translation.toLowerCase().trim() ===
      currentPhrase.phrase.toLowerCase().trim()
    ) {
      setAnswerResult("correct");
      setButtonContent("Dalej");
    } else {
      setAnswerResult("incorrect");
      setButtonContent("Dalej");
    }
  };

  const handleNextPhrase = () => {
    if (reviewPhrases.length > 0) {
      const currentIndex = reviewPhrases.indexOf(currentPhrase);
      const nextIndex = currentIndex + 1;
      let nextPhrase;

      if (nextIndex < reviewPhrases.length) {
        nextPhrase = reviewPhrases[nextIndex];
      }

      if (answerResult === "correct") {
        // Aktualizacja stanu zwrotu przy poprawnej odpowiedzi
        const updatedPhrase = {
          ...currentPhrase,
          lastReviewDate: new Date().toISOString(),
          level: currentPhrase.level < 6 ? currentPhrase.level + 1 : 6,
        };
        dispatch(updatePhraseSuccess(updatedPhrase));
      } else if (answerResult === "incorrect") {
        // Aktualizacja stanu zwrotu przy błędnej odpowiedzi
        const failureUpdate = {
          id: currentPhrase.id,
          lastReviewDate: new Date().toISOString(),
        };
        dispatch(updatePhraseFailure(failureUpdate));
      }

      if (nextPhrase) {
        // Aktualizacja lokalnych stanów dla nowego zwrotu
        setCurrentPhrase(nextPhrase);
        setCurrentLanguagePhrase(nextPhrase.translation);
        setTranslation("");
        setAnswerResult(null);
        setButtonContent("Sprawdź");
      } else {
        setIsSessionComplete(true);
      }
    }
  };

  const togglePhrase = () => {
    setCurrentLanguagePhrase(
      currentLanguagePhrase === currentPhrase.translation
        ? currentPhrase.phrase
        : currentPhrase.translation
    );
  };

  return (
    <div className={classes.content}>
      {isSessionComplete ? (
        <div className={classes.sessionComplete}>
          <h2>
            Zgodnie z metodą nauki SRS, przećwiczyłeś dzisiaj wszystko. Dodaj
            nowe zwroty.
          </h2>
        </div>
      ) : (
        <>
          <h1>Przetłumacz wyświetlony zwrot na język angielski</h1>
          <h2>{currentLanguagePhrase}</h2>
          <div className={classes.translation}>
            <button
              className={classes["translation-button"]}
              type="button"
              onClick={togglePhrase}
            >
              {currentLanguagePhrase === currentPhrase.translation
                ? "Pokaż tłumaczenie"
                : "Pokaż zwrot"}
            </button>
          </div>
          <form className={classes.form} onSubmit={handleFormSubmit}>
            <input
              className={classes.input}
              type="text"
              placeholder="Wprowadź tłumaczenie na angielski"
              value={translation}
              onChange={(e) => setTranslation(e.target.value)}
            />
            {answerResult !== null && (
              <div className={classes.info}>
                {answerResult === "correct" ? (
                  <p className={classes.correct}>Poprawna odpowiedź!</p>
                ) : (
                  <p className={classes.incorrect}>Niepoprawna odpowiedź!</p>
                )}
              </div>
            )}
            <div className={classes.buttons}>
              <Link
                to=".."
                className={`${classes.button} ${classes.synchronize}`}
              >
                Synchronizuj
              </Link>
              <button
                className={classes.button}
                type="button"
                onClick={
                  buttonContent === "Dalej"
                    ? handleNextPhrase
                    : handleFormSubmit
                }
              >
                {buttonContent}
              </button>
            </div>
          </form>
          <div className={classes["level-info"]}>
            <h2>
              Poziom: <span>{level}</span>
            </h2>
            <h3>
              Ilość zwrotów: <span>{phrasesCount}</span>
            </h3>
          </div>
        </>
      )}
    </div>
  );
}
