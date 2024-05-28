import { useSubmit, useNavigate } from "react-router-dom";

export const useHandleFormSubmit = (action, setError) => {
  const submit = useSubmit();
  const navigate = useNavigate();

  return async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const formBody = {};
    formData.forEach((value, key) => {
      formBody[key] = value;
    });

    const result = await submit(formBody, { method: "post", action });

    if (!result.success) {
      setError(result.error);
    } else {
      navigate("/success");
    }
  };
};
