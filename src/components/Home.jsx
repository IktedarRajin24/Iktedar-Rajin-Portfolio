import React from "react";

const Home = () => {
  return (
    <>
      <header className="w-full py-4 bg-[#121414] ">
        <div className="2xl:w-9/12 w-[85%] mx-auto flex md:flex-row flex-col md:gap-0 gap-5 justify-between">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">
              Daryl{" "}
              <span className="bg-gradient-to-r from-[#f5bd4d] to-[#f89222] bg-clip-text text-transparent md:mt-10">
                Smith
              </span>
            </h1>
            <p className="text-lg">UI/UX designer</p>
          </div>
          <div className="md:w-[60%] flex items-center justify-between">
            <p className="text-2xl font-semibold flex items-center justify-start gap-2">
              {" "}
              <img src="./icons/home.png" alt="home-icon" /> Home
            </p>
            <button className="h-10 md:w-[20%] w-[40%] bg-gradient-to-r from-[#f5bd4d] to-[#f89222] bg-clip-text hover:bg-clip-content text-transparent hover:text-white  border-[1px] border-[#f89222] rounded-[50px] bg-transparent transition-all duration-300">
              Talk To Me
            </button>
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
              src="./profile-photo.png"
              alt="profile-photo-daryl-smith"
              className="bg-[#000000] md:mt-0 mt-10 md:w-auto w-[80%] relative flex-grow"
            />
            <div className="bg-[#000000] md:w-auto w-[80%]  flex justify-center items-center gap-2 py-3 shadow-[0px_-5px_25px_-10px] shadow-white">
              <img
                src="./icons/facebook.png"
                alt="facebook-icon"
                className="cursor-pointer"
              />
              <img
                src="./icons/linkedin.png"
                alt="linkedin-icon"
                className="cursor-pointer"
              />
              <img
                src="./icons/pinterest.png"
                alt="pinterest-icon"
                className="cursor-pointer"
              />
              <img
                src="./icons/instagram.png"
                alt="instagram-icon"
                className="cursor-pointer"
              />
              <img
                src="./icons/x.png"
                alt="x-icon"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div id="profile-details" className="md:w-[60%]">
            <div>
              <p className="bg-gradient-to-r from-[#f5bd4d] to-[#f89222] bg-clip-text text-transparent uppercase font-semibold md:mt-10">
                Introduction
              </p>
              <h1 className="text-4xl font-semibold py-4 md:w-[70%] leading-[50px]">
                I'm a Creative Developer & UI/UX Design Expert
              </h1>
              <p className="pb-10">
                24 years &nbsp; / &nbsp; Robert Smith &nbsp; / &nbsp; UK London
              </p>
              <p className="md:w-[75%] w-11/12 text-sm text-[#c6c6c6]">
                Prolific, full stack web developer with a passion for metrics
                and beating former "best-yets. Prototyped 25 new product
                features per year for Flexor, Inc. Decreased rework by 22% and
                costs by 15%. Consistently receive high user experience scores
                for all web development projects, including a 55% increase for
                Flexor, Inc. Passionate about building world class web
                applications. One of my sites received a 2020 Webby for Best
                Navigation and Structure.
              </p>
              <button className="h-10 md:w-[30%] w-[50%] flex items-center justify-center gap-3 my-10 rounded-full bg-gradient-to-r from-[#f5bd4d] to-[#f89222] bg-clip-content hover:bg-clip-text text-white hover:text-transparent  border-[1px] border-[#f89222] bg-transparent transition-all duration-300">
                Download CV <img src="./icons/download.png" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
