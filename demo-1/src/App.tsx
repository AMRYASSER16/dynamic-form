import { useState } from "react";
import InputText from "./components";
import useForm from "./hooks/useForm";

function App() {
  const formState = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
  };

  const { form, validate, setForm, checkValidHandler } =
    useForm(formState);
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
      {Object.entries(form).map((key, value) => (
        <InputText
          key={value}
          label={key[0]}
          value={`${key[1]}`}
          onChange={(e) => setForm({ ...form, [key[0]]: e.target.value })}
          valid={key[1] === "" ? validate.notValid : validate.valid}
          errorMsg={error}
          classes={"class"}
        />
      ))}
      <button>Submit</button>
    </form>
  );
}

export default App;