import { useSubmit } from "react-router-dom";

export const useHandleFormSubmit = (action) => {
  const submit = useSubmit();

  return async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const formBody = {};
    formData.forEach((value, key) => {
      formBody[key] = value;
    });

    await submit(formBody, { method: "post", action });
  };
};
