import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { apiRequest } from "../services/api";
import HeaderDashboard from "./HeaderDashboard";
import Footer from "./Footer";
import classes from "./styles/VerificationCode.module.scss";

export default function VerificationCode() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const { token, username } = useSelector((state) => state.auth);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await apiRequest(
        "/home/compare",
        "PUT",
        { username, code },
        { Authorization: `Bearer ${token}` }
      );
      console.log("Verification response:", response);

      if (response.data.message === "Verification successful") {
        navigate("/dashboard");
      } else {
        setMessage("Podałeś błędny kod weryfikacyjny!");
      }
    } catch (error) {
      setMessage("Podałeś błędny kod weryfikacyjny!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={classes.main}>
        <HeaderDashboard />
        <div className={classes.cointainer}>
          <form onSubmit={handleSubmit}>
            <p>Wprowadź kod, który wysłaliśmy Ci na podany adres e-mail</p>
            <input
              className={classes.input}
              type="text"
              id="verificationCode"
              name="verificationCode"
              value={code}
              onChange={handleChange}
              required
            />
            <button className={classes.button} type="submit" disabled={loading}>
              {loading ? "Weryfikowanie..." : "Zweryfikuj"}
            </button>
            <div className={classes.message}>{message && <p>{message}</p>}</div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
