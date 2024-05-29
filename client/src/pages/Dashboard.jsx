import { useSelector } from "react-redux";
import HeaderDashboard from "../components/HeaderDashboard";
import classes from "./styles/Dashboard.module.scss";
import Footer from "../components/Footer";
import StartModule from "../components/StartModule";

export default function Dashboard() {
  const { firstname, username, userId } = useSelector((state) => state.auth);

  if (!username || !userId) {
    return <div>Nie jesteś zalogowany.</div>;
  }

  return (
    <main className={classes.dashboard}>
      <HeaderDashboard />
      <StartModule username={firstname} />
      <Footer />
    </main>
  );
}
