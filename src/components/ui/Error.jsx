import React from "react";

const Error = ({ message }) => {
  return (
    <div className="p-2 text-center rounded-md bg-red-100 text-red-700">
      {message}
    </div>
  );
};

export default Error;
