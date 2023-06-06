import { useEffect, useRef } from "react";

const FormInput = ({ id, label, inputProps }) => {
  const inputRef = useRef(null);
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
        {...inputProps}
      />
      <div className="mt-1 mb-3 text-xs text-red-500"></div>
    </div>
  );
};

export default FormInput;
