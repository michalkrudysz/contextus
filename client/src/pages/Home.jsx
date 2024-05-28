import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import classes from "./styles/Home.module.scss";
import { useState } from "react";

const Home = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const toggleAuthMode = () => {
    setIsSigningUp((prevIsSigningUp) => !prevIsSigningUp);
  };

  return (
    <div className={classes.home}>
      <Header toggleAuthMode={toggleAuthMode} />
      <div className={classes["main-container"]}>
        <div className={classes["left-side"]}>
          <div className={classes["content"]}>
            <div className={classes.title}>
              <h1>Sam decyduj o nauce</h1>
              <h2>Twórz własny styl nauki języka</h2>
            </div>
            <div className={classes.description}>
              <p>Wpisz słowo, by uzyskać przykłady jego zastosowania.</p>
              <p>Zachowaj codzienne zwroty, by lepiej je zapamiętać.</p>
              <p>Naucz się szybciej dzięki metodzie SRS.</p>
            </div>
          </div>
        </div>
        <div className={classes["right-side"]}>
          {isSigningUp ? (
            <SignUp toggleAuthMode={toggleAuthMode} />
          ) : (
            <Login toggleAuthMode={toggleAuthMode} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
