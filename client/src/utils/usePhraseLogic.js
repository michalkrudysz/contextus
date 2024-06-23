import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  updatePhraseSuccess,
  updatePhraseFailure,
} from "../features/learning/learningSlice";
import { updatePhraseProgress } from "../features/learning/learningThunks";

export function usePhraseLogic(reviewPhrases) {
  const dispatch = useDispatch();
  const [currentPhrase, setCurrentPhrase] = useState(reviewPhrases[0] || {});
  const [translation, setTranslation] = useState("");
  const [answerResult, setAnswerResult] = useState(null);
  const [buttonContent, setButtonContent] = useState("Sprawdź");
  const [currentLanguagePhrase, setCurrentLanguagePhrase] = useState(
    currentPhrase.translation || ""
  );

  useEffect(() => {
    if (reviewPhrases.length > 0) {
      setCurrentPhrase(reviewPhrases[0]);
      setCurrentLanguagePhrase(reviewPhrases[0].translation);
    }
  }, [reviewPhrases]);

  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9ąćęłńóśźż?.!\s]/gi, "")
      .trim()
      .replace(/[?.!]+$/, "");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (normalizeText(translation) === normalizeText(currentPhrase.phrase)) {
      setAnswerResult("correct");
      setButtonContent("Dalej");
    } else {
      setAnswerResult("incorrect");
      setButtonContent("Dalej");
    }
  };

  function calculateReviewInterval(level) {
    switch (level) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 7;
      case 4:
        return 14;
      case 5:
        return 30;
      case 6:
        return 60;
      default:
        return 1;
    }
  }

  const handleNextPhrase = () => {
    const currentIndex = reviewPhrases.indexOf(currentPhrase);
    const nextIndex = currentIndex + 1;
    let nextPhrase =
      nextIndex < reviewPhrases.length ? reviewPhrases[nextIndex] : null;

    if (answerResult === "correct") {
      const nextLevel = currentPhrase.level < 6 ? currentPhrase.level + 1 : 6;
      const updatedPhrase = {
        id: currentPhrase.id,
        lastReviewDate: new Date().toISOString(),
        level: nextLevel,
        repetitions: currentPhrase.repetitions + 1,
        reviewInterval: calculateReviewInterval(nextLevel),
      };
      dispatch(updatePhraseSuccess(updatedPhrase));
      dispatch(updatePhraseProgress(updatedPhrase));
    } else if (answerResult === "incorrect") {
      const failureUpdate = {
        id: currentPhrase.id,
        lastReviewDate: new Date().toISOString(),
        level: 1,
        repetitions: currentPhrase.repetitions + 1,
        reviewInterval: calculateReviewInterval(1),
      };
      dispatch(updatePhraseFailure(failureUpdate));
      dispatch(updatePhraseProgress(failureUpdate));
    }

    if (nextPhrase) {
      setCurrentPhrase(nextPhrase);
      setCurrentLanguagePhrase(nextPhrase.translation);
      setTranslation("");
      setAnswerResult(null);
      setButtonContent("Sprawdź");
    }
  };

  const togglePhrase = () => {
    setCurrentLanguagePhrase(
      currentLanguagePhrase === currentPhrase.translation
        ? currentPhrase.phrase
        : currentPhrase.translation
    );
  };

  return {
    currentPhrase,
    translation,
    setTranslation,
    answerResult,
    buttonContent,
    currentLanguagePhrase,
    handleFormSubmit,
    handleNextPhrase,
    togglePhrase,
  };
}
