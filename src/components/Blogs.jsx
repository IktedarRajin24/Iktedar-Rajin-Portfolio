import React from "react";
import Blog from "../Layouts/Blog";

const blogs = [
  {
    image: "./blogImages/photography.png",
    title: "The artist vocation is to send light into the human heart.",
    date: "28 April, 2022",
    author: "Daryl Smith",
    content:
      "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
    type: "Photography",
  },
  {
    image: "./blogImages/graphic-design.png",
    title: "There are countless versions of lorem ipsum, the most famous.",
    date: "28 April, 2022",
    author: "Daryl Smith",
    content:
      "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
    type: "Graphic Design",
  },
  {
    image: "./blogImages/design.png",
    title: "UI Interactions of the week",
    date: "28 April, 2022",
    author: "Daryl Smith",
    content:
      "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
    type: "Design",
  },
  {
    image: "./blogImages/adventure.png",
    title: "The mission of art is to represent nature not to imitate her.",
    date: "28 April, 2022",
    author: "Daryl Smith",
    content:
      "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
    type: "Adventure",
  },
  {
    image: "./blogImages/travel-1.png",
    title: "The principles of true art is not to portray, but to evoke.",
    date: "28 April, 2022",
    author: "Daryl Smith",
    content:
      "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
    type: "Travel",
  },
  {
    image: "./blogImages/travel-2.png",
    title: "Party Jokes Startling But Unnecessary",
    date: "28 April, 2022",
    author: "Daryl Smith",
    content:
      "Lorem Ipsum is simply dummy text the printing typesetting industry. Lorem Ipsum has been...",
    type: "Travel",
  },
];

const Blogs = () => {
  return (
    <section className="md:w-9/12 w-11/12 flex flex-col md:items-end mx-auto">
      <div className="md:w-[60%]">
        <h1 className="text-4xl font-semibold py-10">Blog</h1>
        <div className="columns-1 md:columns-2 md:w-full w-[85%] mx-auto gap-5 mb-10">
          {blogs.map((blog) => (
            <Blog key={blog.title} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
