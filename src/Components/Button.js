"use client";

import React from "react";

const Button = ({ text, onClick, className, type }) => {
  return (
    <>
      <button onClick={onClick} className={`${className} transition-all duration-300 ease-in-out hover:transition-all hover:duration-300 hover:ease-in-out`} type={type}>
        {text}
      </button>
    </>
  );
};

export default Button