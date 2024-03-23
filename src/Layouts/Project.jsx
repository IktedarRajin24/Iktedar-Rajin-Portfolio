import React, { useRef, useState } from "react";

const Project = ({ project }) => {
  const { image, title, shortDescription } = project;
  const imageRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      className="mb-10 break-inside-avoid relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={title} className="" ref={imageRef} />
      <div
        className={`absolute top-0 bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "opacity 1s ease" }}
      >
        <img src="./icons/link.png" alt="" className="absolute top-0 right-0" />
        <h2 className="text-lg">{title}</h2>
        <p>{shortDescription}</p>
      </div>
    </div>
  );
};

export default Project;
