import { useState, useEffect } from "react";
import classes from "./CookieModal.module.scss";

const CookieModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className={classes["cookie-modal"]}>
        <h4>Cookies i Lokalne Przechowywanie Danych</h4>
        <div className={classes.container}>
          <p>
            Nasza witryna korzysta z plików cookies oraz lokalnego
            przechowywania danych w celu optymalizacji jakości świadczonych
            usług oraz poprawy komfortu użytkowania.
          </p>
          <button className={classes.button} onClick={handleAccept}>
            Akceptuję
          </button>
        </div>
      </div>
    )
  );
};

export default CookieModal;
