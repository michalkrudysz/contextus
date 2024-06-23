import { apiRequest } from "../services/api";

export const handleSubmitPhrase = async (
  { phraseEnglish, phrasePolish, userId, token },
  setError,
  setIsSubmitting,
  setSuccess,
  navigate
) => {
  setIsSubmitting(true);
  if (phraseEnglish.length >= 2 && phrasePolish.length >= 2) {
    const currentDate = new Date().toISOString().split("T")[0];
    const body = {
      user_id: userId,
      phrase: phraseEnglish,
      translation: phrasePolish,
      level: 1,
      source: "manual",
      last_review_date: currentDate,
      review_interval: 1,
    };
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await apiRequest(
        "/dashboard/addPhrase",
        "POST",
        body,
        headers
      );
      if (!response.success) {
        setError(response.message);
        setIsSubmitting(false);
      } else {
        setSuccess("Zwrot został pomyślnie dodany");
        setTimeout(() => {
          navigate("..");
        }, 1500);
      }
    } catch (error) {
      setError(error.message);
      setIsSubmitting(false);
    }
  } else {
    if (phraseEnglish.length < 2 && phrasePolish.length < 2) {
      setError("Oba pola muszą zawierać co najmniej dwa znaki");
    } else if (phraseEnglish.length < 2) {
      setError("Zwrot w języku angielskim musi zawierać co najmniej dwa znaki");
    } else if (phrasePolish.length < 2) {
      setError(
        "Tłumaczenie na język polski musi zawierać co najmniej dwa znaki"
      );
    }
    setIsSubmitting(false);
  }
};
