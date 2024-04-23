import React from "react";
import Project from "../Layouts/Project";
const projects = [
  {
    id: 1,
    image: "./portfolio/events.png",
    title: "Simple Events  App",
    shortDescription:
      "Displaying present, past and upcoming events in a card view, along with login and signup pages. Searching and sorting is included.",
    preview:
      "https://65cb9f94b605730c8e88226d--resplendent-nougat-bdc9e7.netlify.app/",
    github: "https://github.com/IktedarRajin24/events-aiub",
  },
  {
    id: 2,
    image: "./portfolio/todo.png",
    title: "Todo list",
    shortDescription:
      "Simple todo list application built with react hooks. User can view, add, delete and update a todo list.",
    preview: "https://todo-list-by-rushdi.surge.sh/",
    github: "https://github.com/IktedarRajin24/simple-todo-list",
  },
  {
    id: 3,
    image: "./portfolio/tictactoe.png",
    title: "Tic Tac Toe game",
    shortDescription:
      "A simple tic-tac-toe game built using React with a playable state and also history is preserved.",
    preview: "https://awesome-tic-tac-toe.surge.sh/",
    github: "https://github.com/IktedarRajin24/tic-tac-toe",
  },
  {
    id: 4,
    image: "./portfolio/quiz.png",
    title: "React quiz app",
    shortDescription:
      "A simple quiz app with 15 questions where states managed by useReducer hook.",
    preview: "https://react-requiz.surge.sh/",
    github: "https://github.com/IktedarRajin24/react-quiz",
  },
  {
    id: 5,
    image: "./portfolio/nouns.png",
    title: "Nouns names services",
    shortDescription: "A simple website designed with React and scss",
    preview:
      "https://65239ac94195593f92240bde--inspiring-begonia-0b2da8.netlify.app/",
    github: "https://github.com/IktedarRajin24/nouns-name-service",
  },
  {
    id: 6,
    image: "./portfolio/nounish.png",
    title: "Nounish Club",
    shortDescription: "A simple website designed with React and tailwind",
    preview: "https://flowery-goat.surge.sh/",
    github: "https://github.com/IktedarRajin24/Nounish-club",
  },
  {
    id: 7,
    image: "./portfolio/users.png",
    title: "Users list",
    shortDescription:
      "Displaying users in card view along with a single user view. Including searching and sorting.",
    preview: "https://user-list-react.surge.sh",
    github: "https://github.com/IktedarRajin24/React-User-list",
  },
];

const Portfolio = () => {
  return (
    <section className="md:w-9/12 w-11/12 flex flex-col md:items-end mx-auto">
      <div className="md:w-[60%]">
        <h1 className="text-4xl font-semibold py-10">Portfolio</h1>

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
