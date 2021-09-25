import React from "react";

const Button = ({ isLoading, disabled, children, ...rest }) => {
  return (
    <button
      className={`${
        disabled || isLoading
          ? " bg-gray-500 hover:bg-gray-600"
          : "bg-primary hover:bg-dark"
      } text-white py-3 px-5 rounded-md font-poppins focus:outline-none focus:ring-transparent w-32`}
      {...rest}
    >
      {isLoading ? (
        <div className=" font-semibold text-lg">Loading...</div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
