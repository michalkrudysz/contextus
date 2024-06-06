import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../../services/api";

export const fetchPhrase = createAsyncThunk(
  "learning/fetchPhrase",
  async (userId, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;
    try {
      const result = await apiRequest(
        `/dashboard/getPhrase/${userId}`,
        "GET",
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (result.success) {
        return result.data;
      } else {
        return rejectWithValue(result.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updatePhraseProgress = createAsyncThunk(
  "learning/updatePhraseProgress",
  async (phraseData, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.token;
    try {
      const result = await apiRequest(
        "/dashboard/updatePhraseProgress",
        "PUT",
        phraseData,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      if (result.success) {
        return result.data;
      } else {
        return rejectWithValue(result.message);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
