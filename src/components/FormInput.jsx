import { useContext, useEffect, useRef } from "react";
import { FormContext } from "../App";

const ID_REG = new RegExp("^[a-z0-9_-]{5,20}$");
const PW_REG = new RegExp("^[a-zA-Z0-9]{8,16}$");

const FormInput = ({ id, label, inputProps }) => {
  const inputRef = useRef(null);
  const { formData, setFormData } = useContext(FormContext);

  const checkReg = () => {
    const value = formData[id];
    if (value.length === 0) {
      return "required";
    } else {
      switch (id) {
        case "id":
          return ID_REG.test(value) ? true : "invalidId";
        case "pw":
          return PW_REG.test(value) ? true : "invalidPw";
        case "confirmPw":
          return formData["pw"] === value ? true : "invalidPwCheck";
        default:
          return;
      }
    }
  };

  useEffect(() => {
    if (id === "id") {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        className="shadow border rounded w-full py-2 px-3 text-gray-700"
        ref={inputRef}
        value={formData[id]}
        onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
        onBlur={checkReg}
        {...inputProps}
      />
      <div className="mt-1 mb-3 text-xs text-red-500"></div>
    </div>
  );
};

export default FormInput;
