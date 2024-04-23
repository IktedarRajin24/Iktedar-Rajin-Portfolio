import React from "react";
import {
  FaDownload,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaSnapchat,
} from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <header className="w-full py-4 bg-[#121414] ">
        <div className="2xl:w-9/12 w-[85%] mx-auto flex md:flex-row flex-col md:gap-0 gap-5 justify-between">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">
              MD Iktedar Hasan Rushdi{" "}
              <span className="bg-gradient-to-r from-[#f5bd4d] to-[#f89222] bg-clip-text text-transparent md:mt-10">
                Rajin
              </span>
            </h1>
            <p className="text-lg">Frontend Developer</p>
          </div>
          <div className="md:w-[60%] flex items-center justify-between">
            <p className="text-2xl font-semibold flex items-center justify-start gap-2">
              {" "}
              <img src="./icons/home.png" alt="home-icon" /> Home
            </p>
            <a
              className="h-10 md:w-[20%] w-[40%] bg-gradient-to-r from-[#f5bd4d] to-[#f89222] bg-clip-text hover:bg-clip-content text-transparent hover:text-white  border-[1px] border-[#f89222] rounded-[50px] bg-transparent transition-all ease-out duration-500 cursor-pointer flex items-center justify-center"
              href="https://wa.me/01627898945?text=Good Afternoon. Let's Talk"
            >
              Talk To Me
            </a>
          </div>
        </div>
      </header>
      <section className="w-full h-auto relative">
        <div className="2xl:w-[85%] w-[90%] flex md:flex-row flex-col items-end justify-end gap-20 mx-auto ">
          <div
            id="profile-photo"
            className="md:block flex flex-col items-center"
          >
            <img
              src="./profile_photo.PNG"
              alt="profile-photo-daryl-smith"
              className="bg-[#000000] md:mt-0 mt-10 md:w-auto w-[80%] relative flex-grow"
            />
            <div className="bg-[#000000] md:w-auto w-[80%]  flex justify-center items-center gap-2 py-3 shadow-[0px_-5px_25px§_-10px] shadow-white">
              <a
                href="https://www.facebook.com/iktedarhasanrushdi.rajin"
                className="bg-gray-900 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 hover:text-black transition-colors duration-500 ease-out"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/in/md-iktedar-hasan-rushdi-rajin-18148520a"
                className="bg-gray-900 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 hover:text-black transition-colors duration-500 ease-out"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/__man.of.steel___"
                className="bg-gray-900 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 hover:text-black transition-colors duration-500 ease-out"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/IktedarRajin24"
                className="bg-gray-900 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 hover:text-black transition-colors duration-500 ease-out"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.snapchat.com/add/manofsteel2410"
                className="bg-gray-900 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300 hover:text-black transition-colors duration-500 ease-out"
                target="_blank"
              >
                <FaSnapchat />
              </a>
            </div>
          </div>
          <div id="profile-details" className="md:w-[60%]">
            <div>
              <p className="bg-gradient-to-r from-[#f5bd4d] to-[#f89222] bg-clip-text text-transparent uppercase font-semibold md:mt-10">
                Introduction
              </p>
              <h1 className="text-4xl font-semibold py-4 md:w-[70%] leading-[50px]">
                I'm a Creative Frontend Developer
              </h1>
              <p className="pb-10">
                24 years &nbsp; / &nbsp; Rushdi &nbsp; / &nbsp; Dhaka,
                Bangladesh
              </p>
              <p className="md:w-[75%] w-11/12 text-sm text-[#c6c6c6]">
                I am a very determined computer science graduate who has
                expertise in frontend technologies like HTML, CSS, and
                JavaScript. I have also worked at SELISE for over a year as a
                software engineer. I have very strong knowledge of JavaScript
                and its framework, ReactJS. I also have expertise in Bootstrap
                and TailwindCSS. I have done Figma translation and also worked
                with REST and SOAP APIs. I have a very strong willingness to
                work in frontend development and help the industry with my
                skills and potential.
              </p>
              <a
                className="h-10 md:w-[30%] w-[50%] flex items-center justify-center gap-3 my-10 rounded-full bg-gradient-to-r from-[#f5bd4d] to-[#f89222] bg-clip-content hover:bg-clip-text text-white hover:text-[#f89222]   border-[1px] border-[#f89222] bg-transparent transition-all duration-300 ease-out"
                download="resume"
                href="./resume/Curriculum_Vitae.pdf"
              >
                Download CV <FaDownload />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
