import { createSlice } from "@reduxjs/toolkit";
import { fetchPhrase } from "./learningThunks";

const initialState = {
  red: [],
  orange: [],
  yellow: [],
  green: [],
  blue: [],
  silver: [],
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
        console.log("Fetching phrase: Loading state set to true.");
      })
      .addCase(fetchPhrase.fulfilled, (state, action) => {
        state.loading = false;
        console.log("Received phrases:", action.payload.phrases);
        action.payload.phrases.forEach((item) => {
          switch (item.level) {
            case 1:
              state.red.push(item);
              console.log(`Added to red:`, item);
              break;
            case 2:
              state.orange.push(item);
              console.log(`Added to orange:`, item);
              break;
            case 3:
              state.yellow.push(item);
              console.log(`Added to yellow:`, item);
              break;
            case 4:
              state.green.push(item);
              console.log(`Added to green:`, item);
              break;
            case 5:
              state.blue.push(item);
              console.log(`Added to blue:`, item);
              break;
            case 6:
              state.silver.push(item);
              console.log(`Added to silver:`, item);
              break;
            default:
              console.log("Unexpected level:", item.level);
          }
        });

        const totalCount =
          state.red.length +
          state.orange.length +
          state.yellow.length +
          state.green.length +
          state.blue.length +
          state.silver.length;
        console.log("Total count of phrases:", totalCount);
        console.log(
          `Percentage - Red: ${((state.red.length / totalCount) * 100).toFixed(
            2
          )}%`
        );
        console.log(
          `Percentage - Orange: ${(
            (state.orange.length / totalCount) *
            100
          ).toFixed(2)}%`
        );
        console.log(
          `Percentage - Yellow: ${(
            (state.yellow.length / totalCount) *
            100
          ).toFixed(2)}%`
        );
        console.log(
          `Percentage - Green: ${(
            (state.green.length / totalCount) *
            100
          ).toFixed(2)}%`
        );
        console.log(
          `Percentage - Blue: ${(
            (state.blue.length / totalCount) *
            100
          ).toFixed(2)}%`
        );
        console.log(
          `Percentage - Silver: ${(
            (state.silver.length / totalCount) *
            100
          ).toFixed(2)}%`
        );
      })
      .addCase(fetchPhrase.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
        console.log("Fetch failed:", action.payload);
      });
  },
});

export default learningSlice.reducer;
