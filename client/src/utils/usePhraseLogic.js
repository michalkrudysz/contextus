import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  updatePhraseSuccess,
  updatePhraseFailure,
} from "../features/learning/learningSlice";

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
    const currentIndex = reviewPhrases.indexOf(currentPhrase);
    const nextIndex = currentIndex + 1;
    let nextPhrase =
      nextIndex < reviewPhrases.length ? reviewPhrases[nextIndex] : null;

    if (answerResult === "correct") {
      const updatedPhrase = {
        ...currentPhrase,
        lastReviewDate: new Date().toISOString(),
        level: currentPhrase.level < 6 ? currentPhrase.level + 1 : 6,
      };
      dispatch(updatePhraseSuccess(updatedPhrase));
    } else if (answerResult === "incorrect") {
      const failureUpdate = {
        id: currentPhrase.id,
        lastReviewDate: new Date().toISOString(),
      };
      dispatch(updatePhraseFailure(failureUpdate));
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
