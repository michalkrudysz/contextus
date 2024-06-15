import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apiRequest } from "../services/api";

export default function ChooseWord() {
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);

  const userId = useSelector((state) => state.auth.userId);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchGeneratedPhrase = async () => {
      if (dataFetched) return;

      try {
        setLoading(true);

        const endpoint = `/dashboard/fetchGeneratedPhrase/${userId}`;
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await apiRequest(endpoint, "GET", null, headers);

        if (response.success) {
          console.log(response.data); // Keeping this log for debugging
          setData(response.data);
          setDataFetched(true);
        }
      } catch (error) {
        console.error("Failed to fetch phrase:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGeneratedPhrase();
  }, [userId, token, dataFetched]);

  const handleNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("Wszystko");
    }
  };

  return (
    <div>
      <h1>ChooseWord</h1>
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        <>
          <p>Phrase PL: {data[currentIndex].phrase_pl}</p>
          <p>Phrase EN: {data[currentIndex].phrase_en}</p>
          <button onClick={handleNext}>DALEJ</button>
        </>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}
