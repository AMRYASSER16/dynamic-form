import { useState } from "react";
import InputText from "./components";
import useForm from "./hooks/useForm";

function App() {
  interface formStateT {
    id: number;
    label: string;
    value: any;
    error: string;
  }

  const formState = [
    {
      id: 0,
      label: "firstName",
      value: "",
      error: "",
    },
    {
      id: 1,
      label: "lastName",
      value: "",
      error: "",
    },
  ];

  const { form, validate, checkValidHandler, onChangeHandler } = useForm(formState);
  const [error, setError] = useState("");

  const submitFormHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    checkValidHandler();

    // write form logic
    // setError() will be used to take the error message

    form.map((f: formStateT) => {
      if (f.value === "") setError("This field is required !!");
      else setError("");
    });

    console.log(form);
  };

  return (
    <form onSubmit={(e) => submitFormHandler(e)}>
      {form.map((f: formStateT, index: number) => (
        <InputText
          key={f.id}
          label={f.label}
          value={f.value}
          required={true}
          onChange={onChangeHandler(index)}
          valid={f.value === "" ? validate.notValid : validate.valid}
          errorMsg={error === "" ? f.error : error}
          classes={"class"}
        />
      ))}
      <button>Submit</button>
    </form>
  );
}

export default App;