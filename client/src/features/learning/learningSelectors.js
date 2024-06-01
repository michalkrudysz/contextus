import { createSelector } from "@reduxjs/toolkit";

const selectLearningState = (state) => state.learning;

export const selectPhrase = createSelector(
  [selectLearningState],
  (learning) => learning.phrase
);

export const selectLoading = createSelector(
  [selectLearningState],
  (learning) => learning.loading
);

export const selectError = createSelector(
  [selectLearningState],
  (learning) => learning.error
);
