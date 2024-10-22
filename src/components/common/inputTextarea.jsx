import React from "react";

function InputTextarea({
  name,
  label,
  rows,
  value,
  onChange,
  disabled,
  className,
  autoFocus,
}) {
  return (
    <div className={"form-floating " + (className ? className : "")}>
      <textarea
        className="form-control h-auto quicksand"
        id={name}
        name={name}
        rows={rows || 4}
        value={value}
        placeholder={label}
        onChange={({ target }) => onChange(target.value)}
        autoComplete="off"
        disabled={disabled}
        autoFocus={autoFocus || false}
      />
      {label && <label htmlFor={name}>{label}</label>}
    </div>
  );
}

export default InputTextarea;
