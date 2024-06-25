import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeaderDashboard from "../components/HeaderDashboard";
import Footer from "../components/Footer";
import StartModule from "../components/StartModule";
import VerificationCode from "../components/VerificationCode";
import { apiRequest } from "../services/api";
import classes from "./styles/Dashboard.module.scss";
import LoadingPage from "../components/LoadingPage";

export default function Dashboard() {
  const { firstname, token, userId, username } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [phraseStats, setPhraseStats] = useState({
    total: 0,
    levels: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
  });
  const [verificationNeeded, setVerificationNeeded] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const response = await apiRequest(
          "/home/username",
          "POST",
          { username },
          { Authorization: `Bearer ${token}` }
        );
        if (
          response.status === 403 &&
          response.errorData &&
          response.errorData.message === "Account is not verified."
        ) {
          setVerificationNeeded(true);
        }
      } catch (error) {
        console.error(
          "Błąd podczas ładowania danych inicjalizacyjnych:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    const fetchPhraseData = async () => {
      if (!verificationNeeded) {
        setLoading(true);
        try {
          const response = await apiRequest(
            `/dashboard/getPhrase/${userId}`,
            "GET",
            null,
            { Authorization: `Bearer ${token}` }
          );
          if (response.success && response.data.phrases) {
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
      }
    };

    fetchInitialData().then(fetchPhraseData);
  }, [userId, token, username, verificationNeeded]);

  useEffect(() => {
    if (verificationNeeded) {
      navigate("/verification");
    }
  }, [verificationNeeded, navigate]);

  if (verificationNeeded) {
    return <VerificationCode />;
  }

  return (
    <main className={classes.dashboard}>
      <HeaderDashboard />
      {loading ? (
        <LoadingPage content="Trwa ładowanie..." />
      ) : (
        <StartModule username={firstname} phraseStats={phraseStats} />
      )}
      <Footer />
    </main>
  );
}
