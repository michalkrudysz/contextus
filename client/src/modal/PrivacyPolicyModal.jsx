import classes from "./PrivacyPolicyModal.module.scss";

const PrivacyPolicyModal = ({ isVisible, onAccept, onClose }) => {
  const handleAccept = () => {
    onAccept();
    onClose();
  };

  return (
    isVisible && (
      <>
        <div className={classes["privacy-modal"]}>
          <h4>Polityka Prywatności</h4>
          <div className={classes.container}>
            <h5>Data ostatniej aktualizacji: 26 VI 2024</h5>
            <h5>1. Postanowienia ogólne</h5>
            <p>
              Niniejsza Polityka Prywatności określa zasady przetwarzania
              informacji, w tym danych osobowych oraz ciasteczek, związanych z
              korzystaniem z aplikacji Contextus.
            </p>
            <h5>2. Administrator danych</h5>
            <p>
              Administratorem danych osobowych zbieranych za pośrednictwem
              aplikacji Contextus jest Michał Krudysz. Kontakt z administratorem
              jest możliwy pod adresem e-mail: michal@krudysz.pl.
            </p>
            <h5>3. Cele przetwarzania danych</h5>
            <p>
              Dane osobowe użytkowników aplikacji Contextus są przetwarzane w
              celu:
              <ul>
                <li>realizacji umowy o świadczenie usługi edukacyjnej,</li>
                <li>
                  marketingu bezpośredniego własnych usług, w tym przesyłania
                  treści marketingowych na podany adres e-mail,
                </li>
                <li>zapewnienia bezpieczeństwa usługi.</li>
              </ul>
            </p>
            <h5>4. Zakres zbieranych danych</h5>
            <p>
              W ramach aplikacji Contextus zbierane są następujące dane osobowe:
              <ul>
                <li>Adres e-mail,</li>
                <li>Hasło, w formie zahashowanej,</li>
                <li>Login</li>
                <li>Imię</li>
              </ul>
            </p>

            <h5>5. Odbiorcy danych</h5>
            <p>
              Dane osobowe użytkowników mogą być udostępniane wyłącznie
              podmiotom przetwarzającym je na zlecenie administratora, w tym
              dostawcom usług IT oraz agencjom marketingowym, na podstawie umów
              powierzenia przetwarzania i tylko w zakresie niezbędnym.
            </p>
            <h5>6. Okres przechowywania danych</h5>
            <p>
              Dane osobowe będą przechowywane przez okres niezbędny do
              realizacji umowy, a po jej zakończeniu do momentu cofnięcia zgody
              na przetwarzanie w celach marketingowych.
            </p>
            <h5>7. Prawa użytkownika </h5>
            <p>
              Każdy użytkownik ma prawo do:
              <ul>
                <li>dostępu do swoich danych,</li>
                <li>sprostowania danych,</li>
                <li>usunięcia danych,</li>
                <li>
                  cofnięcia zgody na przetwarzanie danych w dowolnym momencie.
                </li>
              </ul>
            </p>

            <p>
              W celu realizacji powyższych praw, w tym usunięcia konta,
              użytkownik powinien wysłać wiadomość e-mail na adres
              michal@krudysz.pl, podając swój login i adres e-mail. Niezwłocznie
              po przetworzeniu żądania, użytkownik zostanie o tym poinformowany.
            </p>
            <h5>8. Informacje o ciasteczkach</h5>
            <p>
              Aplikacja Contextus używa ciasteczek (cookies) w celu poprawy
              interaktywności i użytkowości aplikacji. Użytkownik może zarządzać
              ciasteczkami za pomocą ustawień swojej przeglądarki.
            </p>
            <h5>9. Zmiany w polityce prywatności</h5>
            <p>
              Administrator zastrzega sobie prawo do dokonywania zmian w
              polityce prywatności.
            </p>
            <button className={classes.button} onClick={handleAccept}>
              Akceptuję
            </button>
          </div>
        </div>
        <div className={classes["modal-overlay"]}></div>
      </>
    )
  );
};

export default PrivacyPolicyModal;
