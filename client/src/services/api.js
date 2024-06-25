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
      error.data = data;
      throw error;
    }
    return {
      success: true,
      data: data,
    };
  } catch (error) {
    console.error(`API request error: ${error.message}`, {
      endpoint,
      status: error.status,
      errorData: error.data,
    });
    return {
      success: false,
      error: error.message,
      status: error.status,
      errorData: error.data,
    };
  }
};
