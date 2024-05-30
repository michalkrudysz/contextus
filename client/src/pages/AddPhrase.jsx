import HeaderDashboard from "../components/HeaderDashboard";
import Footer from "../components/Footer";
import classes from "./styles/AddPhrase.module.scss";
import { Link } from "react-router-dom";

export default function AddPhrase() {
  return (
    <>
      <main className={classes["add-phrase"]}>
        <HeaderDashboard />
        <div className={classes.content}>
          <h1>Wprowadź wyrażenie, które chcesz zapamiętać</h1>
          <form className={classes.form}>
            <input
              className={classes.input}
              type="text"
              name="phraseEnglish"
              placeholder="Wprowadź zwrot po angielsku"
            />

            <input
              className={classes.input}
              type="text"
              name="phrasePolish"
              placeholder="Wprowadź tłumaczenie na polski"
            />

            <div className={classes.buttons}>
              <Link to=".." className={classes.button}>
                Wróć
              </Link>
              <button className={classes.button} type="submit">
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
