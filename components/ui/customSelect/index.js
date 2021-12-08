import React from "react";

const Select = ({ labelText, children, id, required, wrapClass, ...props }) => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <div className={`select-wrapper ${wrapClass ? wrapClass : ""} `}>
        <select {...props} id={id} required={required}>
          {children}
        </select>
      </div>
    </>
  );
};

export default Select;
