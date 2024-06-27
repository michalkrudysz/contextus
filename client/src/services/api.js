import { API_BASE_URL } from "../config/apiConfig";

export const apiRequest = async (endpoint, method, body, headers = {}) => {
  try {
    console.log(`Making API request to ${API_BASE_URL}${endpoint}`);

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

    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, requestOptions);

    console.log(`Response from ${url}:`, {
      status: response.status,
      headers: response.headers,
    });

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
      url: `${API_BASE_URL}${endpoint}`,
      method: method,
      requestBody: body,
      responseStatus: error.status || "No response status",
      errorData: error.data || "No error data",
      fullError: error,
    });
    return {
      success: false,
      error: error.message,
      status: error.status,
      errorData: error.data,
    };
  }
};
