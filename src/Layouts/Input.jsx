import React from "react";

const Input = ({ label, type, width, height }) => {
  const inputStyle = {
    width: width,
    height: height,
  };
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <input
        className="px-2 py-1 mt-5 rounded-[10px] bg-black border-[0.1px] border-[#f89222] focus:outline-none focus:ring-2 focus:ring-[#f5bd4d] transition-all duration-300"
        type={type}
        id="name"
        style={inputStyle}
      />
    </div>
  );
};

export default Input;
