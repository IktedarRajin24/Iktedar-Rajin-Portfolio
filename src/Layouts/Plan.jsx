import React from "react";
import Button from "./Button";

const Plan = ({ plan }) => {
  const { name, price, features } = plan;

  return (
    <div className="bg-black py-10 hover:scale-[1.02] transition-transform duration-500">
      <div className="bg-gradient-to-r from-[#f5bd4d70] to-[#f8922230] w-[35%] text-center py-2 px-2 rounded-e-full my-5">
        {name}
      </div>
      <h1 className="text-sm mx-5">
        <span className="text-4xl font-semibold">{price}</span> / month
      </h1>
      <div className="bg-[#121414] w-11/12 mx-auto py-5 my-5">
        {features.map((feature) => (
          <div
            key={feature.name}
            className={`px-2 py-2 text-xs ${
              feature.notProvided ? "line-through text-[#979797]" : ""
            }`}
          >
            {feature.name}
          </div>
        ))}
      </div>
      <div className="w-11/12 mx-auto">
        <button className="h-10 w-1/2 bg-gradient-to-r from-[#f5bd4d] to-[#f89222] bg-clip-text hover:bg-clip-content text-transparent hover:text-white  border-[1px] border-[#f89222] rounded-[10px] bg-transparent transition-all duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Plan;
