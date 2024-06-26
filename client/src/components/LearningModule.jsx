import { Link } from "react-router-dom";
import { useLearningModuleLogic } from "../utils/useLearningModuleLogic";
import LoadingPage from "./LoadingPage";
import classes from "./styles/LearningModule.module.scss";

export default function LearningModule() {
  const {
    isLoading,
    levelColor,
    sessionComplete,
    currentPhrase,
    translation,
    setTranslation,
    answerResult,
    buttonContent,
    currentLanguagePhrase,
    handleFormSubmit,
    handleNextPhrase,
    togglePhrase,
    handleKeyPress,
    reviewPhrases,
    phrasesCountByLevel,
  } = useLearningModuleLogic();

  const level = currentPhrase ? currentPhrase.level : null;
  const phrasesCount = level ? phrasesCountByLevel[level] || 0 : 0;

  if (isLoading) {
    return <LoadingPage content="Trwa ładowanie..." />;
  }

  return (
    <div className={`${classes.content} ${levelColor}`}>
      {sessionComplete ? (
        <div>
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
              className={`${classes["translation-button"]} ${levelColor}`}
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
              onKeyDown={handleKeyPress}
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
                Wróć
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
              Poziom: <span className={levelColor}>{level}</span>
            </h2>
            <h3>
              Ilość zwrotów: <span className={levelColor}>{phrasesCount}</span>
            </h3>
            <p>
              Łączna ilość zwrotów do powtórzenia na dziś:
              <span>{reviewPhrases.length}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
