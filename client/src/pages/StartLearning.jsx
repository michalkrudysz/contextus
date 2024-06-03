import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhrase } from "../features/learning/learningThunks";
import classes from "./styles/StartLearning.module.scss";
import HeaderDashboard from "../components/HeaderDashboard";
import LearningModule from "../components/LearningModule";
import Footer from "../components/Footer";

export default function StartLearning() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    if (userId) {
      dispatch(fetchPhrase(userId));
    }
  }, [userId, dispatch]);

  return (
    <main className={classes["start-learning"]}>
      <HeaderDashboard />
      <LearningModule />
      <Footer />
    </main>
  );
}
