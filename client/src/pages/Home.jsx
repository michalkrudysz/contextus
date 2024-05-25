import Header from "../components/Header";
import Footer from "../components/Footer";
import classes from "./styles/Home.module.scss";
import LoginIn from "../components/LoginIn";

const Home = () => {
  return (
    <div className={classes.home}>
      <Header />
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
          <LoginIn />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
