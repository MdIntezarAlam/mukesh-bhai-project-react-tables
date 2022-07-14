import React from "react";
import "../styles/inputelement.css";

const InputElement = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
  autoComplete,
}) => {
  return (
    <div className="inputs">
      <div className="input__ele">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="reg_input"
        />
        {error && <span className="error">{error}</span>}
      </div>
    </div>
  );
};

export default InputElement;
