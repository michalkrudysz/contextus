import { createSlice } from "@reduxjs/toolkit";
import { fetchPhrase } from "./learningThunks";

const initialState = {
  phrase: null,
  loading: false,
  error: null,
};

const learningSlice = createSlice({
  name: "learning",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhrase.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPhrase.fulfilled, (state, action) => {
        state.phrase = action.payload;
        state.loading = false;
      })
      .addCase(fetchPhrase.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default learningSlice.reducer;
