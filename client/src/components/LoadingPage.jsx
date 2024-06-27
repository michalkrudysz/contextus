import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./styles/LoadingPage.module.scss";
import Footer from "./Footer";
import graphic from "../../public/graphics.png";

export default function LoadingPage({ content }) {
  const navigate = useNavigate();
  const [logo, setLogo] = useState(localStorage.getItem("logo") || graphic);

  useEffect(() => {
    const fetchLogo = async () => {
      if (!localStorage.getItem("logo")) {
        try {
          const response = await fetch(graphic);
          const blob = await response.blob();
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64data = reader.result;
            localStorage.setItem("logo", base64data);
            setLogo(base64data);
          };
          reader.readAsDataURL(blob);
        } catch (error) {
          console.error("Error loading logo:", error);
          setLogo(graphic);
        }
      }
    };

    fetchLogo();
  }, []);

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className={classes["loading-page"]}>
        <div className={classes.loading}>
          <div className={classes.logo} onClick={handleLogoClick}>
            <img src={logo} alt="logo" />
          </div>
          <div className={classes.text}>{content}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
