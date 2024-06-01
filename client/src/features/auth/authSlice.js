import { createSlice } from "@reduxjs/toolkit";
import { loginAction, registerAction } from "./authThunks";

const initialState = {
  token: localStorage.getItem("token") || null,
  message: "",
  errorMessage: "",
  registrationError: "",
  userId: localStorage.getItem("userId") || null,
  username: localStorage.getItem("username") || "",
  firstname: localStorage.getItem("firstname") || "",
};

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
        state.errorMessage =
          action.payload || "Błąd logowania. Spróbuj ponownie.";
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
        state.registrationError =
          action.payload || "Błąd rejestracji. Spróbuj ponownie.";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
