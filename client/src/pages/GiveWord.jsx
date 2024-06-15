import { useState } from "react";
import CustomWord from "../components/CustomWord";
import ChooseWord from "../components/ChooseWord"; // Ensure this component is correctly imported

export default function GiveWord() {
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const handleSuccessfulSubmission = () => {
    setIsSubmittedSuccessfully(true);
  };

  return (
    <div>
      {!isSubmittedSuccessfully ? (
        <CustomWord onSuccessfulSubmission={handleSuccessfulSubmission} />
      ) : (
        <ChooseWord />
      )}
    </div>
  );
}
