import React from "react";
const skills = [
  {
    name: "HTML & CSS",
    expertise: 95,
  },
  {
    name: "JavaScript",
    expertise: 90,
  },
  {
    name: "ReactJS",
    expertise: 80,
  },
  {
    name: "Tailwind",
    expertise: 95,
  },
  {
    name: "Bootstrap",
    expertise: 95,
  },
  {
    name: "PHP and Laravel",
    expertise: 55,
  },
  {
    name: "NodeJS",
    expertise: 60,
  },
  {
    name: "MongoDB",
    expertise: 50,
  },
  {
    name: "MySQL",
    expertise: 70,
  },
];

const Skills = () => {
  return (
    <section className="md:w-9/12 w-11/12 flex flex-col md:items-end mx-auto">
      <div className="md:w-[60%]">
        <h1 className="text-4xl font-semibold py-10">Skills</h1>
        <div className="w-full flex flex-col items-start gap-4 mb-10">
          {skills.map((skill) => (
            <div key={skill.name} className="w-full">
              <div className="w-full mb-3 flex items-center justify-between">
                <p className="text-xl">{skill.name}</p>
                <p className="bg-gradient-to-r from-[#f5bd4d] to-[#f89222] bg-clip-text text-transparent">
                  {skill.expertise}%
                </p>
              </div>
              <div className="w-full bg-gradient-to-r from-[#f5bd4d30] to-[#f8922230] rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className={`bg-gradient-to-r from-[#f5bd4d] to-[#f89222] h-2.5 rounded-full`}
                  style={{
                    width: `${skill.expertise}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
