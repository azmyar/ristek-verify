import React from "react";

const Input = (props) => {
  const { isError, errorMessage, ...rest } = props;
  return (
    <div className="w-full h-full">
      <input
        className={`border-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent focus:border-2 focus:ring-transparent border-2 appearance-none rounded-sm h-10 w-full p-3 ${
          isError
            ? "bg-error bg-opacity-10 focus:bg-error focus:bg-opacity-10 border-error focus:border-error "
            : "bg-faded"
        } focus:bg-white focus:shadow-md text-tertiary`}
        {...rest}
      />
      {isError && <div className="text-error pt-2">{errorMessage}</div>}
    </div>
  );
};

export default Input;
