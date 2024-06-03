import { addDays, parseISO } from "date-fns";
import { createSelector } from "reselect";

export const selectPhrases = (state) => state.learning.phrases;

export const selectLoading = (state) => state.learning.loading;

export const selectError = (state) => state.learning.error;

const getPhrases = (state) => state.learning.phrases;

export const selectReadyForReviewPhrases = createSelector(
  [getPhrases],
  (phrases) => {
    const today = new Date();
    return phrases.filter((phrase) => {
      const lastReviewDate = parseISO(phrase.lastReviewDate);
      const nextReviewDate = addDays(lastReviewDate, phrase.reviewInterval);
      return nextReviewDate <= today;
    });
  }
);
