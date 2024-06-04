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
      const { id, lastReviewDate, level } = action.payload;
      const index = state.phrases.findIndex((phrase) => phrase.id === id);
      if (index !== -1) {
        state.phrases[index].lastReviewDate = lastReviewDate;
        state.phrases[index].level = level;
        state.phrases[index].repetitions += 1;
        switch (level) {
          case 1:
            state.phrases[index].reviewInterval = 1;
            break;
          case 2:
            state.phrases[index].reviewInterval = 2;
            break;
          case 3:
            state.phrases[index].reviewInterval = 7;
            break;
          case 4:
            state.phrases[index].reviewInterval = 14;
            break;
          case 5:
            state.phrases[index].reviewInterval = 30;
            break;
          case 6:
            state.phrases[index].reviewInterval = 60;
            break;
          default:
            break;
        }
      }
    },
    updatePhraseFailure: (state, action) => {
      const { id, lastReviewDate } = action.payload;
      const index = state.phrases.findIndex((phrase) => phrase.id === id);
      if (index !== -1) {
        state.phrases[index].lastReviewDate = lastReviewDate;
        state.phrases[index].level = 1;
        state.phrases[index].repetitions += 1;
        state.phrases[index].reviewInterval = 1;
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
