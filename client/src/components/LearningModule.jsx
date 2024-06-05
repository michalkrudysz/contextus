import { Link } from "react-router-dom";
import classes from "./styles/LearningModule.module.scss";
import { useSelector } from "react-redux";
import {
  selectReadyForReviewPhrases,
  selectPhrasesCountByLevel,
  selectPhrases,
} from "../features/learning/learningSelectors";
import { usePhraseLogic } from "../utils/usePhraseLogic";
import { useEffect } from "react";

export default function LearningModule() {
  const reviewPhrases = useSelector(selectReadyForReviewPhrases);
  const getPhrases = useSelector(selectPhrases);
  const phrasesCountByLevel = useSelector(selectPhrasesCountByLevel);

  const {
    currentPhrase,
    translation,
    setTranslation,
    answerResult,
    buttonContent,
    currentLanguagePhrase,
    handleFormSubmit,
    handleNextPhrase,
    togglePhrase,
  } = usePhraseLogic(reviewPhrases);

  const level = currentPhrase.level || null;
  const phrasesCount = phrasesCountByLevel[level] || 0;
  const isSessionComplete = reviewPhrases.length === 0;

  useEffect(() => {
    console.log(getPhrases);
  }, [getPhrases]);

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
            <p>
              Łączna ilość zwrotów do powtórzenia na dziś:{" "}
              <span>{reviewPhrases.length}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
