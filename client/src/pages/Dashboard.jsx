import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

export default function Dashboard() {
  const { username, userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!username || !userId) {
    return <div>Nie jesteś zalogowany.</div>;
  }

  return (
    <div>
      <h1>Witaj, {username}</h1>
      <p>ID użytkownika: {userId}</p>
      <button onClick={handleLogout}>Wyloguj się</button>
    </div>
  );
}
