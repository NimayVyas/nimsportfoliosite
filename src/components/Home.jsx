import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-black">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#374151]">
          Nimay Vyas
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-400 max-w-[700px]">
          I am a Full Stack Developer
        </h2>

        <div>
          <button className="text-green-300 group border-2 border-green-200 px-6 py-3 my-4 flex items-center hover:font-bold">
            View Work
            <span className="group-hover:rotate-90 group-hover:ml-2 duration-300">
              <HiArrowNarrowRight className="ml-3 hover:animate-pulse" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
