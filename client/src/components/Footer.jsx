import classes from "./styles/Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleRedirect = () => {
    window.location.href = "https://krudysz.pl";
  };

  return (
    <footer className={classes.footer}>
      <p>
        <span onClick={handleRedirect} style={{ cursor: "pointer" }}>
          &copy; Michał Krudysz {currentYear}
        </span>
      </p>
    </footer>
  );
};

export default Footer;
