import { useSelector } from "react-redux";
import HeaderDashboard from "../components/HeaderDashboard";
import classes from "./styles/Dashboard.module.scss";
import Footer from "../components/Footer";
import StartModule from "../components/StartModule";

export default function Dashboard() {
  const { firstname } = useSelector((state) => state.auth);

  return (
    <main className={classes.dashboard}>
      <HeaderDashboard />
      <StartModule username={firstname} />
      <Footer />
    </main>
  );
}
