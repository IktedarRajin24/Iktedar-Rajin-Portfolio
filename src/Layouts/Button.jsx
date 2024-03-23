import React from "react";

const Button = ({ children, width, borderRadius }) => {
  const buttonStyle = {
    width: width,
    borderRadius: borderRadius,
  };
  return (
    <button
      className="h-10 my-10 rounded-[10px] bg-gradient-to-r from-[#f5bd4d] to-[#f89222] bg-clip-content hover:bg-clip-text text-white hover:text-transparent  border-[1px] border-[#f89222] bg-transparent transition-all duration-300"
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

export default Button;
