import React from "react";

const education = [
  {
    title: "B.A. and M.S., in Computer Science",
    institution: "Harvard University",
    duration: "2016- 2020",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis minus, id consectetur explicabo ipsa obcaecati iure molestias voluptatum numquam, veritatis illo iusto repudiandae tempora aperiam, corrupti eveniet eum vitae!",
  },
  {
    title: "Bachelor Degree",
    institution: "Helwan University",
    duration: "2014- 2016",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis minus, id consectetur explicabo ipsa obcaecati iure molestias voluptatum numquam, veritatis illo iusto repudiandae tempora aperiam, corrupti eveniet eum vitae!",
  },
];

const experience = [
  {
    title: "UI/UX Designer",
    role: "Website Design",
    duration: "2016- 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis minus, id consectetur explicabo ipsa obcaecati iure molestias voluptatum numquam, veritatis illo iusto repudiandae tempora aperiam, corrupti eveniet eum vitae!",
  },
  {
    title: "Junior Web Designer",
    role: "Product Designer",
    duration: "2012- 2016",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis minus, id consectetur explicabo ipsa obcaecati iure molestias voluptatum numquam, veritatis illo iusto repudiandae tempora aperiam, corrupti eveniet eum vitae!",
  },
];

const Resume = () => {
  return (
    <section className="md:w-9/12 w-11/12 flex flex-col md:items-end mx-auto">
      <div className="md:w-[60%]">
        <h1 className="text-4xl font-semibold py-10">Resume</h1>

        <h1 className="flex items-center text-xl font-semibold gap-2 pb-8">
          <span>
            <img src="./icons/education.png" alt="education" />
          </span>
          Education
        </h1>
        <div className="flex relative mb-10">
          <div className="w-[8px] border-[2px] border-[#646464] rounded-full absolute left-1 h-full"></div>
          <div className="flex flex-col h-full justify-between">
            {education.map((ed) => (
              <div
                className="flex items-start gap-5 mb-10 z-10 mt-5"
                key={ed.title}
              >
                <div className="w-[16px] h-[16px] border-[2px] border-[#646464] bg-[#171B1A] rotate-45"></div>
                <div className="flex flex-col gap-4 w-11/12">
                  <div className="w-fit px-3 py-2 border-[1px] border-[#646464] rounded-[4px]">
                    {ed.duration}
                  </div>
                  <div className="w-full px-5 py-5 bg-[#121414] border-[1px] border-[#646464] rounded-[8px] hover:scale-[1.02] transition-transform duration-500">
                    <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#f5bd4d] to-[#f89222] bg-clip-text text-transparent">
                      {ed.institution}
                    </h1>
                    <p className="text-[#8f8f8f] my-2">{ed.title}</p>
                    <div className="w-full h-[2px] bg-[#222222] my-3"></div>
                    <p>{ed.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1 className="flex items-center text-xl font-semibold gap-2 pb-8">
          <span>
            <img src="./icons/education.png" alt="education" />
          </span>
          Work History
        </h1>
        <div className="flex relative mb-10">
          <div className="w-[8px] border-[2px] border-[#646464] rounded-full absolute left-1 h-full"></div>
          <div className="flex flex-col h-full justify-between">
            {experience.map((ex) => (
              <div
                className="flex items-start gap-5 mb-10 z-10 mt-5"
                key={ex.title}
              >
                <div className="w-[16px] h-[16px] border-[2px] border-[#646464] bg-[#171B1A] rotate-45"></div>
                <div className="flex flex-col gap-4 w-11/12">
                  <div className="w-fit px-3 py-2 border-[1px] border-[#646464] rounded-[4px]">
                    {ex.duration}
                  </div>
                  <div className="w-full px-5 py-5 bg-[#121414] border-[1px] border-[#646464] rounded-[8px] hover:scale-[1.02] transition-transform duration-500">
                    <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#f5bd4d] to-[#f89222] bg-clip-text text-transparent">
                      {ex.role}
                    </h1>
                    <p className="text-[#8f8f8f] my-2">{ex.title}</p>
                    <div className="w-full h-[2px] bg-[#222222] my-3"></div>
                    <p>{ex.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
