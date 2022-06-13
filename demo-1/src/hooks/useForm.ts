import { useState, useEffect } from "react";

const useForm = (formState: any) => {
  const formValidation = {
    valid: false,
    notValid: false,
  };

  const [form, setForm] = useState(formState);
  const [validate, setValidate] = useState(formValidation);
  const [error, setError] = useState("");

  const checkValidHandler = () => {
    Object.entries(form).map((key) => {
      if (key[1] !== "") {
        setValidate({ ...validate, valid: true });
      } else {
        setValidate({ ...validate, notValid: true });
      }
    });
  };

  const switchValid = () => {
    if (validate.valid) setValidate({ ...validate, valid: false });
  };

  useEffect(() => {
    switchValid();

    return () => switchValid();
  }, [validate]);

  return {
    form,
    validate,
    error,
    setValidate,
    setForm,
    setError,
    checkValidHandler,
  };
};

export default useForm;