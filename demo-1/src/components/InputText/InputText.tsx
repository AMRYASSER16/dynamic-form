import { InputText } from "primereact/inputtext";
import { types } from "./types";

const InputTextC = (props: types) => {
  const {
    label,
    errorMsg,
    valid,
    classes,
    value,
    minLength,
    maxLength,
    onChange,
  } = props;

  return (
    <div className={`InputText_C ${classes} ${valid ? "p-error" : ""}`}>
      {label && (
        <div className="label">
          <label>{label} *</label>
        </div>
      )}
      <InputText
        value={value}
        minLength={minLength}
        maxLength={maxLength}
        onChange={onChange}
        className={`${valid ? "p-invalid" : ""}`}
      />
      {valid && <div className="error-msg">{errorMsg}</div>}
    </div>
  );
};

export default InputTextC;