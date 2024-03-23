import React from "react";
import Project from "../Layouts/Project";
const projects = [
  {
    id: 1,
    image: "./portfolio/graphic-design-1.png",
    title: "Design Mockup",
    shortDescription: "Designs available for your business",
  },
  {
    id: 2,
    image: "./portfolio/photography-1.png",
    title: "Photography",
    shortDescription: "Photography project",
  },
  {
    id: 3,
    image: "./portfolio/photography-2.png",
    title: "Photography",
    shortDescription: "Photography project",
  },
  {
    id: 4,
    image: "./portfolio/mobile-app.png",
    title: "Mobile app",
    shortDescription: "Mobile app design mockups",
  },
  {
    id: 5,
    image: "./portfolio/ui-ux-1.png",
    title: "UI/UX Design",
    shortDescription: "UI/UX design concepts and wireframes",
  },
  {
    id: 6,
    image: "./portfolio/mobile-app-2.png",
    title: "Mobile app",
    shortDescription: "Mobile app design mockups",
  },
  {
    id: 7,
    image: "./portfolio/ui-ux-2.png",
    title: "UI/UX Design",
    shortDescription: "UI/UX design concepts and wireframes",
  },
];

const Portfolio = () => {
  return (
    <section className="md:w-9/12 w-11/12 flex flex-col md:items-end mx-auto">
      <div className="md:w-[60%]">
        <h1 className="text-4xl font-semibold py-10">Portfolio</h1>
        <div className="bg-black  rounded-[4px] shadow-[0px_10px_25px_-10px] shadow-white px-2 mb-10">
          <ul className="flex items-center justify-center md:gap-10 gap-3">
            <li className="hover:bg-gradient-to-r from-[#f5bd4d] to-[#f89222] hover:bg-clip-text hover:text-transparent cursor-pointer px-2 py-3 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#f89222] transition-colors duration-300">
              All
            </li>
            <li className="hover:bg-gradient-to-r from-[#f5bd4d] to-[#f89222] hover:bg-clip-text hover:text-transparent cursor-pointer py-3 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#f89222] transition-colors duration-300">
              Graphic Design
            </li>
            <li className="hover:bg-gradient-to-r from-[#f5bd4d] to-[#f89222] hover:bg-clip-text hover:text-transparent cursor-pointer py-3 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#f89222] transition-colors duration-300">
              Mobile App
            </li>
            <li className="hover:bg-gradient-to-r from-[#f5bd4d] to-[#f89222] hover:bg-clip-text hover:text-transparent cursor-pointer py-3 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#f89222] transition-colors duration-300">
              Photography
            </li>
            <li className="hover:bg-gradient-to-r from-[#f5bd4d] to-[#f89222] hover:bg-clip-text hover:text-transparent cursor-pointer py-3 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-[#f89222] transition-colors duration-300">
              UI/UX Design
            </li>
          </ul>
        </div>
        <div className="columns-1 md:columns-2 md:w-full w-[85%] mx-auto gap-5 mb-10">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
