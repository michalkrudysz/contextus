import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhrase } from "../features/learning/learningThunks";
import classes from "./styles/StartLearning.module.scss";
import HeaderDashboard from "../components/HeaderDashboard";

export default function StartLearning() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.userId);
  const { phrase, loading, error } = useSelector((state) => state.learning);

  useEffect(() => {
    if (userId) {
      dispatch(fetchPhrase(userId));
    }
  }, [userId, dispatch]);

  return (
    <main className={classes["start-learning"]}>
      <HeaderDashboard />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {phrase && <pre>{JSON.stringify(phrase, null, 2)}</pre>}
    </main>
  );
}
