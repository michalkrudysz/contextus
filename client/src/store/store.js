import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import learningReducer from "../features/learning/learningSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    learning: learningReducer,
  },
});

export default store;
