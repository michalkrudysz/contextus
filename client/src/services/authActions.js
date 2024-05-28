import { apiRequest } from "./api";
import { loginSuccess, loginFailed } from "../redux/slices/authSlice";
import store from "../redux/store";

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const loginData = {
    username: formData.get("login"),
    password: formData.get("password"),
  };

  const result = await apiRequest("/home/login", "POST", loginData);

  if (result.success) {
    store.dispatch(
      loginSuccess({
        token: result.data.token,
        message: result.data.message,
        userId: result.data.user.userId,
        username: result.data.user.username,
      })
    );
  } else {
    store.dispatch(loginFailed({ message: result.message }));
  }

  return result;
};

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const registerData = {
    username: formData.get("login"),
    email: formData.get("email"),
    password: formData.get("password"),
    repeatPassword: formData.get("repeat-password"),
  };

  return apiRequest("/home/register", "POST", registerData);
};
