import { useState } from "react";
import { useSelector } from "react-redux";
import { apiRequest } from "../services/api";
import HeaderDashboard from "../components/HeaderDashboard";
import Footer from "../components/Footer";
import classes from "./styles/AddPhrase.module.scss";
import { Link, useNavigate } from "react-router-dom";

export default function AddPhrase() {
  const { token, userId } = useSelector((state) => state.auth);
  const [phraseEnglish, setPhraseEnglish] = useState("");
  const [phrasePolish, setPhrasePolish] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleInputFocus = () => {
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
        setError(
          "Zwrot w języku angielskim musi zawierać co najmniej dwa znaki"
        );
      } else if (phrasePolish.length < 2) {
        setError(
          "Tłumaczenie na język polski musi zawierać co najmniej dwa znaki"
        );
      }
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main className={classes["add-phrase"]}>
        <HeaderDashboard />
        <div className={classes.content}>
          <h1>Wprowadź wyrażenie, które chcesz zapamiętać</h1>
          <form className={classes.form} onSubmit={handleSubmit}>
            <input
              className={classes.input}
              type="text"
              name="phraseEnglish"
              placeholder="Wprowadź zwrot po angielsku"
              value={phraseEnglish}
              onFocus={handleInputFocus}
              onChange={(e) => setPhraseEnglish(e.target.value)}
            />
            <input
              className={classes.input}
              type="text"
              name="phrasePolish"
              placeholder="Wprowadź tłumaczenie na polski"
              value={phrasePolish}
              onFocus={handleInputFocus}
              onChange={(e) => setPhrasePolish(e.target.value)}
            />
            {error && (
              <div className={classes.info}>
                <p className={classes.error}>{error}</p>
              </div>
            )}
            {success && (
              <div className={classes.info}>
                <p className={classes.success}>{success}</p>
              </div>
            )}
            <div className={classes.buttons}>
              <Link to=".." className={classes.button}>
                Wróć
              </Link>
              <button
                className={classes.button}
                type="submit"
                disabled={isSubmitting}
              >
                Zapisz
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </main>
    </>
  );
}
