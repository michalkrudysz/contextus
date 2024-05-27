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

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
};
