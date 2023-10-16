import React from "react";
import ProjectItem from "./ProjectItem";
import project1 from "../assets/project1.png";

const Projects = () => {
  return (
    <div name="projects" className="w-full bg-black text-blue-600">
      <div className="flex flex-col justify-center items-center w-full h-full py-8">
        <div className="max-w-[1000px] w-full px-4 gap-8">
          <div className="text-4xl text-left sm:text-6xl sm:text-center pb-8">
            <p className="font-bold inline border-b-4 border-gray-700 hover:border-green-300">
              Projects
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] h-fullw-full px-4">
          <div className="text-lg text-gray-400 hover:text-gray-200 mb-10">
            <p>
              Over the course of my CS Journey, I have been fortunate enough to
              work on a variety of projects. Through the implementation of these
              projects, I have been able to learn new programming languages,
              frameworks, and technologies.
            </p>
          </div>
        </div>
        <div
          name="projectlist"
          className="max-w-[860px] text-center text-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-8 px-4="
        >
          <ProjectItem
            name="Bitcoin Sentiment Tracker"
            technologies="Technologies: Python, NumPy, MatPlotLib, Pandas, Seaborn."
            image={project1}
          />
          <ProjectItem
            name="Hate Crime News Application"
            technologies="Technologies: Koitlin, Android Studio, Firebase."
            image={project1}
          />
          <ProjectItem
            name="Medical Information Survey"
            technologies="Technologies: HTML, CSS, Javascript, ExpressJS, NodeJS."
            image={project1}
          />
          <ProjectItem
            name="Bitcoin Sentiment Tracker"
            technologies="Python, NumPy, MatPlot, Git"
            image={project1}
          />
          <ProjectItem
            name="Bitcoin Sentiment Tracker"
            technologies="Python, NumPy, MatPlot, Git"
            image={project1}
          />
          <ProjectItem
            name="Bitcoin Sentiment Tracker"
            technologies="Python, NumPy, MatPlot, Git"
            image={project1}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
