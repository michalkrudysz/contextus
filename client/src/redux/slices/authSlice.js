import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../../services/api";

const initialState = {
  token: null,
  message: "",
  errorMessage: "",
  registrationError: "",
  userId: null,
  username: "",
};

export const loginAction = createAsyncThunk(
  "auth/login",
  async (loginData, { rejectWithValue }) => {
    const result = await apiRequest("/home/login", "POST", loginData);
    if (result.success) {
      return result.data;
    } else {
      return rejectWithValue(result.message);
    }
  }
);

export const registerAction = createAsyncThunk(
  "auth/register",
  async (registerData, { rejectWithValue }) => {
    const result = await apiRequest("/home/register", "POST", registerData);
    if (result.success) {
      return {
        ...result.data,
        loginData: {
          username: registerData.username,
          password: registerData.password,
        },
      };
    } else {
      return rejectWithValue(result.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.message = "";
      state.errorMessage = "";
      state.registrationError = "";
      state.userId = null;
      state.username = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.message = action.payload.message;
        state.userId = action.payload.user.userId;
        state.username = action.payload.user.username;
        state.errorMessage = "";
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.userId = action.payload.user.userId;
        state.username = action.payload.user.username;
        state.registrationError = "";
        state.token = action.payload.token;
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.registrationError = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
