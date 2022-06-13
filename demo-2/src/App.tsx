import { useState } from "react";
import InputText from "./components";
import useForm from "./hooks/useForm";

function App() {
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

  const { form, validate, setForm, checkValidHandler } = useForm(formState);
  const [error, setError] = useState("");

  const submitFormHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    checkValidHandler();

    // write form logic
    // setError() will be used to take the error message

    console.log(form);
  };

  return (
    <form onSubmit={(e) => submitFormHandler(e)}>
      {form.map((f: any) => (
        <InputText
          key={f.id}
          label={f.label}
          value={f.value}
          onChange={(e) => {
            console.log(f)
          }}
          valid={f.value === "" ? validate.notValid : validate.valid}
          errorMsg={f.error}
          classes={"class"}
        />
      ))}
      <button>Submit</button>
    </form>
  );
}

export default App;