import React from "react";

const education = [
  {
    title: "BSc in Computer Science and Engineering",
    institution: "American International University-Bangladesh",
    duration: "2019- 2023",
    description:
      "Completed my Bachelors in Computer science and engineering with a CGPA of 3.68 out of 4. My major was software engineering. I also completed my thesis on Blockchain technology.",
  },
  {
    title: "Higher School Certificate (HSC)",
    institution: "Dhaka College, Dhaka",
    duration: "2016- 2018",
    description:
      "I completed my HSC from Dhaka college with a GPA of 4.92 out of 5. I belong to science background.",
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Ideal School and College, Dhaka",
    duration: "2011- 2016",
    description:
      "I completed my SSC from Ideal School and College with a GPA of 5 out of 5. I belong to science background.",
  },
];

const experience = [
  {
    title: "Associate Software Engineer",
    company: "Secure Link Services Limited",
    duration: "March 2023- December 2023",
    description:
      "Successfully integrated SOAP APIs into a ServiceNow external portal, enhancing data connectivity and functionality. Spearheaded the development of a Leave management application within the ServiceNow platform, streamlining HR processes Demonstrated proficiency in React by integrating APIs and building responsive CRUD applications, showcasing strong front-end development skills. Gained considerable office experience by frequently participating in team initiatives and upholding a solid work culture that included punctuality and teamwork for over a year. Proven track record of effectively working in a professional team environment, contributing to the company's goals, and ensuring the delivery of high-quality software solutions.",
  },
  {
    title: "Intern Software Engineer",
    company: "Secure Link Services Limited",
    duration: "November 2022- February 2023",
    description: "Getting trained in ServiceNow and HubSpot CRM.",
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
                      {ex.company}
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
