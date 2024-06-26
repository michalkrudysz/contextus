import { useState, useEffect } from "react";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import classes from "./CookieModal.module.scss";

const CookieModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [privacyModalVisible, setPrivacyModalVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
    setPrivacyModalVisible(false);
  };

  const handlePrivacyPolicyClick = () => {
    setIsVisible(false);
    setPrivacyModalVisible(true);
  };

  return (
    <>
      {isVisible && (
        <div className={classes["cookie-modal"]}>
          <h4>Cookies i Lokalne Przechowywanie Danych</h4>
          <div className={classes.container}>
            <p>
              Witryna wykorzystuje pliki cookies oraz lokalne metody
              przechowywania danych, aby optymalizować jakość świadczonych usług
              i podnieść komfort użytkowania. Rejestrując się w serwisie,
              zgadzasz się na przestrzeganie naszej{" "}
              <span
                onClick={handlePrivacyPolicyClick}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                polityki prywatności
              </span>
              .
            </p>
            <button className={classes.button} onClick={handleAccept}>
              Akceptuję
            </button>
          </div>
        </div>
      )}
      <PrivacyPolicyModal
        isVisible={privacyModalVisible}
        onAccept={handleAccept}
        onClose={() => setIsVisible(true)}
      />
    </>
  );
};

export default CookieModal;
