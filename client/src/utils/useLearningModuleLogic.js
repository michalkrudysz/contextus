import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  selectReadyForReviewPhrases,
  selectPhrasesCountByLevel,
  selectLoading,
} from "../features/learning/learningSelectors";
import { useNavigate } from "react-router-dom";
import { usePhraseLogic } from "./usePhraseLogic";
import classes from "../components/styles/LearningModule.module.scss";

export function useLearningModuleLogic() {
  const isLoading = useSelector(selectLoading);
  const reviewPhrases = useSelector(selectReadyForReviewPhrases);
  const phrasesCountByLevel = useSelector(selectPhrasesCountByLevel);
  const navigate = useNavigate();

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
    handleKeyPress,
  } = usePhraseLogic(reviewPhrases);

  const [levelColor, setLevelColor] = useState(null);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [dataChecked, setDataChecked] = useState(false);

  useEffect(() => {
    if (currentPhrase?.level) {
      const level = currentPhrase.level;
      const colors = {
        1: classes.red,
        2: classes.orange,
        3: classes.yellow,
        4: classes.green,
        5: classes.blue,
        6: classes.silver,
      };
      setLevelColor(colors[level] || null);
    }
  }, [currentPhrase]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLoading && !dataChecked) {
        setDataChecked(true);
        if (reviewPhrases.length === 0) {
          setSessionComplete(true);
          setTimeout(() => {
            navigate("/dashboard");
          }, 2000);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isLoading, reviewPhrases.length, navigate, dataChecked]);

  return {
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
  };
}
