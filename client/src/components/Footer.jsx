import classes from "./styles/Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={classes.footer}>
      <p>&copy; {currentYear} Michał Krudysz</p>
    </footer>
  );
}
