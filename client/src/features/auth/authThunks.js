import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../../services/api";

export const loginAction = createAsyncThunk(
  "auth/login",
  async (loginData, { rejectWithValue }) => {
    try {
      const result = await apiRequest("/home/login", "POST", loginData);
      if (result.success) {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("userId", result.data.user.userId);
        localStorage.setItem("username", result.data.user.username);
        localStorage.setItem("firstname", result.data.user.firstname);
        return result.data;
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      const errorMessage = error.message.split(" (Status:")[0];
      return rejectWithValue(errorMessage || "Nieznany błąd logowania.");
    }
  }
);

export const registerAction = createAsyncThunk(
  "auth/register",
  async (registerData, { rejectWithValue }) => {
    try {
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
        throw new Error(result.message);
      }
    } catch (error) {
      const errorMessage = error.message.split(" (Status:")[0];
      return rejectWithValue(errorMessage || "Nieznany błąd rejestracji.");
    }
  }
);
