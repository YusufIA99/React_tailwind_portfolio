import React from "react";
import IOT from "../assets/IOT.png";
import Travel from "../assets/travel.png";
import Himmerland from "../assets/Himmerland.png";
import {
  FaReact,
  FaJs,
  FaBootstrap,
  FaLink,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiFlask, SiTailwindcss, SiFirebase } from "react-icons/si";
import { useSpring, animated } from "@react-spring/web";

function Projects() {
  const fadeInProps = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 170, friction: 40 },
    delay: 200,
  });

  const projects = [
    {
      id: 1,
      image: IOT,
      title: "IOT Project",
      description:
        "This project is focused on Internet of Things (IoT) technology.",
      link: "https://github.com/YusufIA99/Smart-Curtain-IoT",
      icons: [
        <FaReact
          key="react"
          className="text-xl text-blue-500 md:text-lg lg:text-2xl"
        />,
        <FaBootstrap
          key="bootstrap"
          className="text-xl text-purple-500 md:text-lg lg:text-2xl"
        />,
        <FaPython
          key="python"
          className="text-xl text-green-500 md:text-lg lg:text-2xl"
        />,
        <SiFlask
          key="flask"
          className="text-xl text-white md:text-lg lg:text-2xl"
        />,
      ],
    },

    {
      id: 3,
      image: Himmerland,
      title: "Himmerland Boligforegning Community App",
      description:
        "This project is a community app developed using Java and Firebase.",
      link: "https://github.com/YusufIA99/Himmerland-app/tree/main",
      icons: [
        <FaJava
          key="java"
          className="text-xl text-red-500 md:text-lg lg:text-2xl"
        />,
        <SiFirebase
          key="firebase"
          className="text-xl text-yellow-500 md:text-lg lg:text-2xl"
        />,
      ],
    },
    
    {
      id: 2,
      image: Travel,
      title: "Travel React Project",
      description: "This is a travel app made using React and Tailwind CSS.",
      link: "https://yusufia99.github.io/travel-tailwind-vite/",
      icons: [
        <FaReact
          key="react"
          className="text-xl text-blue-500 md:text-lg lg:text-2xl"
        />,
        <FaJs
          key="js"
          className="text-xl text-yellow-500 md:text-lg lg:text-2xl"
        />,
        <SiTailwindcss
          key="tailwind"
          className="text-xl text-teal-500 md:text-lg lg:text-2xl"
        />,
      ],
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <header className="my-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
        See My Work
      </header>
      <div className="grid w-full max-w-screen-lg grid-cols-1 gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8">
        {projects.map((project) => (
          <animated.div
            key={project.id}
            style={fadeInProps}
            className="group relative overflow-hidden rounded-lg bg-neutral-800"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full transform object-cover transition-transform duration-300 group-hover:scale-110 md:h-56 lg:h-80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h1 className="text-2xl font-bold leading-none text-white md:text-xl lg:text-3xl">
                {project.title}
              </h1>
              <p className="mt-2 text-center text-base text-gray-300 md:text-sm lg:text-lg">
                {project.description}
              </p>
              <div className="mt-4 flex justify-center space-x-2 md:space-x-4">
                {project.icons.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-xl text-white md:text-lg lg:text-2xl"
              >
                <FaLink />
              </a>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
