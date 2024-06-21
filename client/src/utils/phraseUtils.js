import { apiRequest } from "../services/api";

export const fetchGeneratedPhrase = async (
  userId,
  token,
  setData,
  setDataFetched,
  setError,
  setLoading
) => {
  try {
    setLoading(true);
    const endpoint = `/dashboard/fetchGeneratedPhrase/${userId}`;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await apiRequest(endpoint, "GET", null, headers);

    if (response.success) {
      setData(response.data);
      if (response.data && response.data.length > 0) {
        response.data.forEach(async (item) => {
          if (item.session_id) {
            const patchEndpoint = "/dashboard/updateRetrieved";
            const patchBody = { session_id: item.session_id };
            const patchHeaders = { Authorization: `Bearer ${token}` };
            try {
              await apiRequest(patchEndpoint, "PATCH", patchBody, patchHeaders);
            } catch (patchError) {
              console.error("Failed to send update:", patchError.message);
            }
          }
        });
      }

      setDataFetched(true);
    }
  } catch (error) {
    console.error("Failed to fetch phrase:", error.message);
    setError("Error fetching phrase: " + error.message);
  } finally {
    setLoading(false);
  }
};

export const savePhrase = async (
  userId,
  token,
  data,
  currentIndex,
  setSuccess,
  setError,
  handleNext
) => {
  const body = {
    user_id: userId,
    phrase: data[currentIndex].phrase_en,
    translation: data[currentIndex].phrase_pl,
    level: 1,
    source: "AI",
    last_review_date: new Date().toISOString(),
    review_interval: 1,
  };

  const headers = { Authorization: `Bearer ${token}` };

  try {
    const response = await apiRequest(
      "/dashboard/addPhrase",
      "POST",
      body,
      headers
    );
    if (!response.success) {
      setError(response.message);
    } else {
      setSuccess("Zwrot został pomyślnie dodany");
      setTimeout(() => {
        setSuccess("");
        handleNext();
      }, 500);
    }
  } catch (err) {
    setError("Error saving phrase: " + err.message);
  }
};
