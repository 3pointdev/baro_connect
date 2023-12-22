import { useEffect, useState } from "react";
import { InputProps } from "./input.type";

export default function ValidInput({
  value,
  onChange,
  placeholder,
  id,
  label,
  valid,
  validMessage,
  type,
}: InputProps) {
  const [validColor, setValidColor] = useState<string>("");

  useEffect(() => {
    switch (valid) {
      case "pass":
        setValidColor("green");
        break;
      case "fail":
        setValidColor("red");
        break;
      default:
        setValidColor("transparent");
        break;
    }
  }, [valid]);

  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className={`block mb-2 text-lg font-medium text-${validColor}-700 dark:text-${validColor}-500`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={`outline-none bg-${validColor}-50 border border-${validColor}-500 text-${validColor}-900 dark:text-${validColor}-400 placeholder-${validColor}-700 dark:placeholder-${validColor}-500 text-sm rounded-lg focus:ring-${validColor}-500 focus:border-${validColor}-500 block w-full p-2.5 dark:bg-gray-700 dark:border-${validColor}-500`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {valid !== "" && (
        <p
          className={`mt-2 text-sm text-${validColor}-600 dark:text-${validColor}-500`}
        >
          <span className="font-medium">{validMessage}</span>
        </p>
      )}
    </div>
  );
}
