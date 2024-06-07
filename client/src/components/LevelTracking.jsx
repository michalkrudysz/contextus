import classes from "./styles/LevelTracking.module.scss";

export default function LevelTracking() {
  return (
    <div className={classes["level-tracking"]}>
      <h3>Liczba zwrotów na poszczególnych poziomach:</h3>
      <div className={classes["levels"]}>
        <div className={`${classes.red} ${classes.level}`}>5</div>
        <div className={`${classes.orange} ${classes.level}`}>6</div>
        <div className={`${classes.yellow} ${classes.level}`}>5</div>
        <div className={`${classes.green} ${classes.level}`}>9</div>
        <div className={`${classes.blue} ${classes.level}`}>10</div>
        <div className={`${classes.silver} ${classes.level}`}>11</div>
        <div className={`${classes["total-quantity"]} ${classes.level}`}>
          Łączna liczba: 12
        </div>
      </div>
    </div>
  );
}
