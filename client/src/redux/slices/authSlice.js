import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  message: "",
  errorMessage: "",
  userId: null,
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.message = action.payload.message;
      state.userId = action.payload.userId;
      state.username = action.payload.username;
    },
    loginFailed: (state, action) => {
      state.errorMessage = action.payload.message;
    },
    logout: (state) => {
      state.token = null;
      state.message = "";
      state.userId = null;
      state.username = "";
    },
  },
});

export const { loginSuccess, loginFailed, logout } = authSlice.actions;

export default authSlice.reducer;
