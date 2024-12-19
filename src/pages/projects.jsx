import React from "react";
import IOT from "../assets/IOT.png";
import Travel from "../assets/travel.png";
import Himmerland from "../assets/Himmerland.png";
import Fraizer from "../assets/fraizer.png"; // Add the image for Fraizer
import Portfolio from "../assets/Portfolio.pdf"; // Import the PDF file
import ExploreAalborg from "../assets/ExploreAalborg.png"; // Add the image for Explore Aalborg
import {
  FaReact,
  FaJs,
  FaBootstrap,
  FaLink,
  FaPython,
  FaJava,
  FaCss3Alt,
  FaHtml5,
  FaUnity, 
} from "react-icons/fa";
import { SiFlask, SiTailwindcss, SiFirebase, SiShopify, SiFigma, SiCsharp } from "react-icons/si";
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
       image: ExploreAalborg,
       title: "IXD 7 Projects",
       description:
         "This project contains a downloadable presentation of 2 mini-projects and 1 bigger project I was part of during my 7th semester in Interaction Design.",
       link: Portfolio,
       icons: [
         <FaUnity
           key="unity"
           className="text-xl text-gray-500 md:text-lg lg:text-2xl"
         />,
         <SiFigma
           key="figma"
           className="text-xl text-pink-500 md:text-lg lg:text-2xl"
         />,
         <SiCsharp
           key="csharp"
           className="text-xl text-purple-500 md:text-lg lg:text-2xl"
         />,
       ],
     },
     {
       id: 2,
       image: Fraizer,
       title: "Fraizer Webshop",
       description:
         "Fraizer is a Danish fashion brand founded in 2023, focused on high-quality, affordable fashion with a timeless Scandinavian style. I worked on the webshop, implementing custom features and designs using Shopify and CSS.",
       link: "https://fraizer.dk", // Replace with the actual link
       icons: [
         <SiShopify
           key="shopify"
           className="text-xl text-green-500 md:text-lg lg:text-2xl"
         />,
         <FaCss3Alt
           key="css"
           className="text-xl text-blue-600 md:text-lg lg:text-2xl"
         />,
         <FaHtml5
           key="html"
           className="text-xl text-orange-500 md:text-lg lg:text-2xl"
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
       id: 4,
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
           className="text-xl md:text-lg lg:text-2xl"
           style={{ color: "#3776AB" }} // Set the color explicitly
         />,
         <SiFlask
           key="flask"
           className="text-xl text-white md:text-lg lg:text-2xl"
         />,
       ],
     },
     {
       id: 5,
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
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full transform object-cover transition-transform duration-300 group-hover:scale-110 md:h-56 lg:h-80"
              />
            ) : (
              <div className="flex h-64 w-full items-center justify-center bg-gray-700 md:h-56 lg:h-80">
                <p className="text-white">No Image Available</p>
              </div>
            )}
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
                download
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
