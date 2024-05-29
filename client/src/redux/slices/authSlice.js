import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../../services/api";

const initialState = {
  token: localStorage.getItem("token") || null,
  message: "",
  errorMessage: "",
  registrationError: "",
  userId: localStorage.getItem("userId") || null,
  username: localStorage.getItem("username") || "",
  firstname: localStorage.getItem("firstname") || "",
};

export const loginAction = createAsyncThunk(
  "auth/login",
  async (loginData, { rejectWithValue }) => {
    const result = await apiRequest("/home/login", "POST", loginData);
    if (result.success) {
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("userId", result.data.user.userId);
      localStorage.setItem("username", result.data.user.username);
      localStorage.setItem("firstname", result.data.user.firstname);
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
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("userId", result.data.user.userId);
      localStorage.setItem("username", result.data.user.username);
      localStorage.setItem("firstname", result.data.user.firstname);
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
      state.firstname = "";
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("username");
      localStorage.removeItem("firstname");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.message = action.payload.message;
        state.userId = action.payload.user.userId;
        state.username = action.payload.user.username;
        state.firstname = action.payload.user.firstname;
        state.errorMessage = "";
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.errorMessage = action.payload;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.userId = action.payload.user.userId;
        state.username = action.payload.user.username;
        state.firstname = action.payload.user.firstname;
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
