import { useState } from "react";
import { useSelector } from "react-redux";
import HeaderDashboard from "../components/HeaderDashboard";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import classes from "./styles/AddPhrase.module.scss";
import { handleSubmitPhrase } from "../utils/phraseManualUtils";

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

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitPhrase(
      { phraseEnglish, phrasePolish, userId, token },
      setError,
      setIsSubmitting,
      setSuccess,
      navigate
    );
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
