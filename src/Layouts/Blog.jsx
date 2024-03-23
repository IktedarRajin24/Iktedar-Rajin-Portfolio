import React from "react";

const Blog = ({ blog }) => {
  const { image, title, content, type, author, date } = blog;
  return (
    <div className="bg-black mb-10 break-inside-avoid hover:scale-[1.02] transition-transform duration-500">
      <img src={image} alt={`${type}-blog-pic`} />

      <div className="px-4 py-5">
        <p className="text-xs text-[#979797] w-9/12">
          {type} | &nbsp; {date}
        </p>
        <h1 className="text-lg my-4 leading-8 font-semibold">{title}</h1>
        <p className="text-xs text-[#979797] w-9/12">{content}</p>
        <div className="text-sm mt-10 mb-5 flex items-center gap-2">
          <div className="bg-gradient-to-r from-[#f5bd4d] to-[#f89222] w-5 h-[2px]"></div>{" "}
          Posted by {author}{" "}
          <div className="bg-gradient-to-r from-[#f5bd4d] to-[#f89222] w-5 h-[2px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
