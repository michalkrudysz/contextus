import { useSelector } from "react-redux";

export default function Dashboard() {
  const { username, userId } = useSelector((state) => state.auth);

  if (!username || !userId) {
    return <div>Nie jesteś zalogowany.</div>;
  }

  return (
    <div>
      <h1>Witaj, {username}</h1>
      <p>ID użytkownika: {userId}</p>
    </div>
  );
}
