import { useSubmit } from "react-router-dom";

export const useHandleFormSubmit = (action) => {
  const submit = useSubmit();

  return async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    submit(formData, { method: "post", action });
  };
};
