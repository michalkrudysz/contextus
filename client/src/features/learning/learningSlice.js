import { createSlice } from "@reduxjs/toolkit";
import { fetchPhrase } from "./learningThunks";

const initialState = {
  phrases: [],
  loading: false,
  error: null,
};

const learningSlice = createSlice({
  name: "learning",
  initialState,
  reducers: {
    updatePhraseSuccess: (state, action) => {
      const { id, lastReviewDate, level, repetitions, reviewInterval } =
        action.payload;
      const index = state.phrases.findIndex((phrase) => phrase.id === id);
      if (index !== -1) {
        state.phrases[index].lastReviewDate = lastReviewDate;
        state.phrases[index].level = level;
        state.phrases[index].repetitions = repetitions;
        state.phrases[index].reviewInterval = reviewInterval;
      }
    },
    updatePhraseFailure: (state, action) => {
      const { id, lastReviewDate, level, repetitions, reviewInterval } =
        action.payload;
      const index = state.phrases.findIndex((phrase) => phrase.id === id);
      if (index !== -1) {
        state.phrases[index].lastReviewDate = lastReviewDate;
        state.phrases[index].level = level;
        state.phrases[index].repetitions = repetitions;
        state.phrases[index].reviewInterval = reviewInterval;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhrase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhrase.fulfilled, (state, action) => {
        state.phrases = action.payload.phrases;
        state.loading = false;
      })
      .addCase(fetchPhrase.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Nie udało się pobrać fraz.";
      });
  },
});

export const { updatePhraseSuccess, updatePhraseFailure } =
  learningSlice.actions;
export default learningSlice.reducer;
