import React, { useMemo } from "react";
import IOT from "../assets/IOT.png";
import Travel from "../assets/travel.png";
import Himmerland from "../assets/Himmerland.png";
import Fraizer from "../assets/fraizer.png";
import Portfolio from "../assets/Portfolio.pdf";
import ExploreAalborg from "../assets/ExploreAalborg.png";
import Progress from "../assets/progress.png";
import Siid from "../assets/SIID.png";
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
import {
  SiFlask,
  SiTailwindcss,
  SiFirebase,
  SiShopify,
  SiFigma,
  SiTypescript,
  SiExpo,
} from "react-icons/si";
import { useSpring, animated } from "@react-spring/web";

const iconStyle = "text-xl md:text-lg lg:text-2xl";

const IconComponents = {
  ReactIcon: () => <FaReact className={`${iconStyle} text-blue-500`} />,
  TypeScriptIcon: () => <SiTypescript className={`${iconStyle} text-blue-500`} />,
  ExpoIcon: () => <SiExpo className={`${iconStyle} text-black`} />,
  CssIcon: () => <FaCss3Alt className={`${iconStyle} text-blue-600`} />,
  UnityIcon: () => <FaUnity className={`${iconStyle} text-gray-500`} />,
  FigmaIcon: () => <SiFigma className={`${iconStyle} text-pink-500`} />,
  ShopifyIcon: () => <SiShopify className={`${iconStyle} text-green-500`} />,
  HtmlIcon: () => <FaHtml5 className={`${iconStyle} text-orange-500`} />,
  JavaIcon: () => <FaJava className={`${iconStyle} text-red-500`} />,
  FirebaseIcon: () => <SiFirebase className={`${iconStyle} text-yellow-500`} />,
  BootstrapIcon: () => <FaBootstrap className={`${iconStyle} text-purple-500`} />,
  PythonIcon: () => <FaPython className={iconStyle} style={{ color: "#3776AB" }} />,
  FlaskIcon: () => <SiFlask className={`${iconStyle} text-white`} />,
  JsIcon: () => <FaJs className={`${iconStyle} text-yellow-500`} />,
  TailwindIcon: () => <SiTailwindcss className={`${iconStyle} text-teal-500`} />,
};


const ProjectCard = React.memo(({ project, index }) => {
  const fadeInProps = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 170, friction: 40 },
    delay: 200 + index * 100, 
  });

  return (
    <animated.div
      style={fadeInProps}
      className="group relative overflow-hidden rounded-lg bg-neutral-800"
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full object-cover transition-transform duration-300 will-change-transform group-hover:scale-110 md:h-56 lg:h-80"
          loading="lazy"
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
          {project.icons.map((IconComponent, idx) => (
            <IconComponent key={idx} />
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-xl text-white md:text-lg lg:text-2xl"
          download={project.link.endsWith('.pdf') ? true : undefined}
        >
          <FaLink />
        </a>
      </div>
    </animated.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

function Projects() {
  const projects = useMemo(() => [
    {
      id: 1,
      image: Siid,
      title: "IXD 8 Project",
      description:
        "This application is developed as a research project with three distinct tasks. Built using React Native, TypeScript, Expo, and CSS, it aims to study how the Situationally-Induced Impairments and Disabilities (SIID) pain affect mobile interaction.",
      link: "https://github.com/leongroth/PainPhones",
      icons: [
        IconComponents.ReactIcon,
        IconComponents.TypeScriptIcon,
        IconComponents.ExpoIcon,
        IconComponents.CssIcon,
      ],
    },
    {
      id: 2,
      image: ExploreAalborg,
      title: "IXD 7 Projects",
      description:
        "This project contains a downloadable presentation of 2 mini-projects and 1 bigger project I was part of during my 7th semester in Interaction Design.",
      link: Portfolio,
      icons: [IconComponents.UnityIcon, IconComponents.FigmaIcon],
    },
    {
      id: 3,
      image: Fraizer,
      title: "Fraizer Webshop",
      description:
        "Fraizer is a Danish fashion brand founded in 2023, focused on high-quality, affordable fashion with a timeless Scandinavian style. I worked on the webshop, implementing custom features and designs using Shopify and CSS.",
      link: "https://fraizer.dk",
      icons: [
        IconComponents.ShopifyIcon,
        IconComponents.CssIcon,
        IconComponents.HtmlIcon,
      ],
    },
    {
      id: 4,
      image: Himmerland,
      title: "Himmerland Boligforegning Community App",
      description:
        "This project is a community app developed using Java and Firebase.",
      link: "https://github.com/YusufIA99/Himmerland-app/tree/main",
      icons: [IconComponents.JavaIcon, IconComponents.FirebaseIcon],
    },
    {
      id: 5,
      image: IOT,
      title: "IOT Project",
      description:
        "This project is focused on Internet of Things (IoT) technology.",
      link: "https://github.com/YusufIA99/Smart-Curtain-IoT",
      icons: [
        IconComponents.ReactIcon,
        IconComponents.BootstrapIcon,
        IconComponents.PythonIcon,
        IconComponents.FlaskIcon,
      ],
    },
    {
      id: 6,
      image: Travel,
      title: "Travel React Project",
      description: "This is a travel app made using React and Tailwind CSS.",
      link: "https://yusufia99.github.io/travel-tailwind-vite/",
      icons: [
        IconComponents.ReactIcon,
        IconComponents.JsIcon,
        IconComponents.TailwindIcon,
      ],
    },
  ], []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center">
      <header className="my-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
        See My Work
      </header>
      <div className="grid w-full max-w-screen-lg grid-cols-1 gap-6 p-6 md:grid-cols-2 md:gap-8 md:p-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;