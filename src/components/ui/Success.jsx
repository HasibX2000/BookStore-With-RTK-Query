import React from "react";

const Success = ({ message }) => {
  return (
    <div className="bg-green-100 rounded-md text-green-700 p-2 text-center">
      {message}
    </div>
  );
};

export default Success;
