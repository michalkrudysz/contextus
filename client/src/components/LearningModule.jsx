import { Link } from "react-router-dom";
import classes from "./styles/LearningModule.module.scss";

export default function LearningModul() {
  return (
    <div className={classes.content}>
      <h1>Przetłumacz wyświetlony zwrot na język angielski</h1>
      <h2>Nie płacz jak dziecko</h2>
      <form className={classes.form}>
        <input
          className={classes.input}
          type="text"
          placeholder="Wprowadź tłumaczenie na angielski"
        />
        <div className={classes.info}>
          <p>Poprawnie</p>
        </div>
        <div className={classes.buttons}>
          <Link to=".." className={`${classes.button} ${classes.synchronize}`}>
            Synchronizuj
          </Link>
          <button className={classes.button} type="submit">
            Sprawdź
          </button>
        </div>
      </form>
      <div className={classes["level-info"]}>
        <h2>
          Poziom: <span>pierwszy</span>
        </h2>
        <h3>
          Ilość zwrotów: <span>20</span>
        </h3>
      </div>
    </div>
  );
}
