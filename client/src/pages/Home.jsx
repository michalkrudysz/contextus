import Header from "../components/Header";
import Footer from "../components/Footer";
import classes from "./styles/Home.module.scss";

const Home = () => {
  return (
    <div className={classes.home}>
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
