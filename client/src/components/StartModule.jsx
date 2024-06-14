import classes from "./styles/StartModule.module.scss";
import { Link } from "react-router-dom";
import LevelTracking from "./LevelTracking";

export default function StartModule({ username, phraseStats }) {
  return (
    <div className={classes["main-container"]}>
      <div className={classes.content}>
        <div className={classes.left}>
          <h1>
            <span> Cześć, </span>
            {username}!
          </h1>
          <h2>
            Miło Cię widzieć w gronie uczących się
            <span>
              <br></br>
              Pamiętaj, że zaledwie 15 minut nauki dziennie dzieli Cię od
              opanowania języka obcego
            </span>
          </h2>
          <LevelTracking phraseStats={phraseStats} />
          <div className={classes.buttons}>
            <Link
              to="/dashboard/startlearning"
              className={`${classes.button} ${classes["left-button"]}`}
            >
              Rozpocznij naukę
            </Link>
          </div>
        </div>
        <div className={classes.right}>
          <h1>Twoja nauka, Twój styl</h1>
          <h2>
            Dodaj ulubione zwroty lub podaj słowo, a my stworzymy za Ciebie
            zdania z jego użyciem
          </h2>
          <div className={classes.buttons}>
            <Link
              to="/dashboard/addphrase"
              className={`${classes.button} ${classes["right-button"]}`}
            >
              Dodaj zwrot
            </Link>

            <Link
              to="/dashboard/giveword"
              className={`${classes.button} ${classes["right-button"]}`}
            >
              Podaj słowo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
