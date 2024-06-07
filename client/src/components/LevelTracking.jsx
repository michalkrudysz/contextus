import classes from "./styles/LevelTracking.module.scss";

export default function LevelTracking({ phraseStats }) {
  return (
    <div className={classes["level-tracking"]}>
      <h3>Liczba zwrotów na poszczególnych poziomach:</h3>
      <div className={classes["levels"]}>
        <div className={`${classes.red} ${classes.level}`}>
          {phraseStats.levels[1]}
        </div>
        <div className={`${classes.orange} ${classes.level}`}>
          {" "}
          {phraseStats.levels[2]}
        </div>
        <div className={`${classes.yellow} ${classes.level}`}>
          {" "}
          {phraseStats.levels[3]}
        </div>
        <div className={`${classes.green} ${classes.level}`}>
          {" "}
          {phraseStats.levels[4]}
        </div>
        <div className={`${classes.blue} ${classes.level}`}>
          {" "}
          {phraseStats.levels[5]}
        </div>
        <div className={`${classes.silver} ${classes.level}`}>
          {" "}
          {phraseStats.levels[6]}
        </div>
        <div className={`${classes["total-quantity"]} ${classes.level}`}>
          Łączna liczba: {phraseStats.total}
        </div>
      </div>
    </div>
  );
}
