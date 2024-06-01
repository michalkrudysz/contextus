import { API_BASE_URL } from "../config/apiConfig";

export const apiRequest = async (endpoint, method, body, headers = {}) => {
  try {
    const requestOptions = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    if (method !== "GET" && method !== "HEAD" && body !== null) {
      requestOptions.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, requestOptions);
    const data = await response.json();
    if (!response.ok) {
      const error = new Error(data.message || "Wystąpił błąd w żądaniu.");
      error.status = response.status;
      throw error;
    }
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    throw new Error(
      error.message + (error.status ? ` (Status: ${error.status})` : "")
    );
  }
};
