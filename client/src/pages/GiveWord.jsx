import { useState } from "react";
import CustomWord from "../components/CustomWord";
import ChooseWord from "../components/ChooseWord";
import HeaderDashboard from "../components/HeaderDashboard";
import Footer from "../components/Footer";
import classes from "./styles/GiveWord.module.scss";

export default function GiveWord() {
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const handleSuccessfulSubmission = () => {
    setIsSubmittedSuccessfully(true);
  };

  return (
    <>
      <main className={classes.main}>
        <HeaderDashboard />
        {!isSubmittedSuccessfully ? (
          <CustomWord onSuccessfulSubmission={handleSuccessfulSubmission} />
        ) : (
          <ChooseWord />
        )}
        <Footer />
      </main>
    </>
  );
}
