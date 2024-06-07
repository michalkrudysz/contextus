import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeaderDashboard from "../components/HeaderDashboard";
import Footer from "../components/Footer";
import StartModule from "../components/StartModule";
import { apiRequest } from "../services/api";

export default function Dashboard() {
  const { firstname, token, userId } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);
  const [phraseStats, setPhraseStats] = useState({
    total: 0,
    levels: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiRequest(
          `/dashboard/getPhrase/${userId}`,
          "GET",
          null,
          { Authorization: token }
        );
        if (response.data && response.data.phrases) {
          const levelCounts = { ...phraseStats.levels };

          response.data.phrases.forEach((item) => {
            if (
              item.level &&
              Object.hasOwnProperty.call(levelCounts, item.level)
            ) {
              levelCounts[item.level]++;
            }
          });

          setPhraseStats({
            total: response.data.phrases.length,
            levels: levelCounts,
          });
        }
      } catch (error) {
        console.error("Błąd podczas ładowania fraz:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId, token]);

  return (
    <main className="dashboard">
      <HeaderDashboard />
      {loading ? (
        <p>Ładowanie...</p>
      ) : (
        <StartModule username={firstname} phraseStats={phraseStats} />
      )}
      <Footer />
    </main>
  );
}
