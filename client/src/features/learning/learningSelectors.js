import { createSelector } from "@reduxjs/toolkit";

const selectLearningState = (state) => state.learning;

export const selectRed = createSelector([selectLearningState], (learning) => {
  console.log("Selecting red phrases:", learning.red);
  return learning.red;
});

export const selectOrange = createSelector(
  [selectLearningState],
  (learning) => {
    console.log("Selecting orange phrases:", learning.orange);
    return learning.orange;
  }
);

export const selectYellow = createSelector(
  [selectLearningState],
  (learning) => {
    console.log("Selecting yellow phrases:", learning.yellow);
    return learning.yellow;
  }
);

export const selectGreen = createSelector([selectLearningState], (learning) => {
  console.log("Selecting green phrases:", learning.green);
  return learning.green;
});

export const selectBlue = createSelector([selectLearningState], (learning) => {
  console.log("Selecting blue phrases:", learning.blue);
  return learning.blue;
});

export const selectSilver = createSelector(
  [selectLearningState],
  (learning) => {
    console.log("Selecting silver phrases:", learning.silver);
    return learning.silver;
  }
);

export const selectLoading = createSelector(
  [selectLearningState],
  (learning) => {
    console.log("Is the state loading?", learning.loading);
    return learning.loading;
  }
);

export const selectError = createSelector([selectLearningState], (learning) => {
  console.log("Are there any errors?", learning.error);
  return learning.error;
});
