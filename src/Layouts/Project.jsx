import React, { useRef, useState } from "react";
import { IoIosLink, IoLogoGithub } from "react-icons/io";

const Project = ({ project }) => {
  const { image, title, shortDescription, preview, github } = project;
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
        className={`absolute top-0 bg-black bg-opacity-75 w-full h-full flex flex-col items-center justify-center ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{ transition: "opacity 1s ease" }}
      >
        <a
          href={preview}
          className="absolute top-2 right-2 bg-black bg-opacity-50 p-1 rounded-full"
          target="_blank"
        >
          <IoIosLink />
        </a>
        <a
          href={github}
          className="absolute top-10 right-2 bg-black bg-opacity-50 p-1 rounded-full"
          target="_blank"
        >
          <IoLogoGithub />
        </a>
        <h2 className="text-lg">{title}</h2>
        <p className="px-3">{shortDescription}</p>
      </div>
    </div>
  );
};

export default Project;
