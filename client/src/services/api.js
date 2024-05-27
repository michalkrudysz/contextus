import { API_BASE_URL } from "../config/apiConfig";

export const apiRequest = async (endpoint, method, body) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!response.ok) {
      return {
        success: false,
        message: data.message || "Wystąpił błąd w żądaniu.",
      };
    }
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    return {
      success: false,
      message: "Błąd komunikacji z serwerem.",
    };
  }
};
