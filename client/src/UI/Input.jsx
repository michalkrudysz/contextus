import classes from "./styles/Input.module.scss";

const Input = ({ type, name, placeholder, ...props }) => {
  return (
    <input
      type={type}
      name={name}
      className={classes.input}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;
