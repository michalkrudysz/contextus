import { apiRequest } from "../services/api";

export async function handleSubmitWord(
  word,
  token,
  userId,
  navigate,
  onSuccessfulSubmission
) {
  if (word.trim() === "") {
    return "Musisz wprowadzić słowo!";
  }
  if (word.length > 15) {
    return "Wprowadzone słowo nie może mieć więcej niż 15 znaków.";
  }

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const body = {
    word: word,
    userId: userId,
  };

  try {
    const serverResponse = await apiRequest(
      "/dashboard/generatePhrase",
      "POST",
      body,
      headers
    );
    if (
      serverResponse.data.message ===
      "Przy darmowym planie możesz korzystać z funkcji generowania zwrotów przez SI maksymalnie dwa razy na dobę."
    ) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
      return serverResponse.data.message;
    } else if (serverResponse.success) {
      onSuccessfulSubmission();
    } else {
      return serverResponse.data.message;
    }
  } catch (error) {
    return `Error: ${error.message}`;
  }
}
