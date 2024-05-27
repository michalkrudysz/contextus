import { apiRequest } from "./api";

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const loginData = {
    username: formData.get("login"),
    password: formData.get("password"),
  };

  console.log("Login Data:", loginData);

  return apiRequest("/home/login", "POST", loginData);
};

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const registerData = {
    username: formData.get("login"),
    email: formData.get("email"),
    password: formData.get("password"),
    repeatPassword: formData.get("repeat-password"),
  };

  console.log("Register Data:", registerData);

  return apiRequest("/home/register", "POST", registerData);
};
