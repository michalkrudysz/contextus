import classes from "./styles/Input.module.scss";

const Input = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      className={classes.input}
      placeholder={placeholder}
    />
  );
};

export default Input;
