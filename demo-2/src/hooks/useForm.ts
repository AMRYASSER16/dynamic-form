import { useState, useEffect } from "react";

const useForm = (formState: any) => {
  const formValidation = {
    valid: false,
    notValid: false,
  };

  const [form, setForm] = useState(formState);
  const [validate, setValidate] = useState(formValidation);

  const checkValidHandler = () => {
    form.map((f: any) => {
      if (f.value !== "") {
        setValidate({ ...validate, valid: true });
      } else {
        setValidate({ ...validate, notValid: true });
      }
    });
  };

  const onChangeHandler = (index: number) => (e: any) => {
    const { value } = e.target;
    setForm((form: any) =>
      form.map((el: any, i: any) => (i === index ? { ...el, value } : el))
    );
  };

  const switchValid = () => {
    if (validate.valid) setValidate({ ...validate, valid: false });
  };

  useEffect(() => {
    switchValid();

    return () => switchValid();
  }, [validate, switchValid]);

  return {
    form,
    validate,
    setValidate,
    setForm,
    checkValidHandler,
    onChangeHandler
  };
};

export default useForm;