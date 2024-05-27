import classes from "./styles/Button.module.scss";

const Button = ({ children, onClick }) => {
  return (
    <button type="submit" className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
