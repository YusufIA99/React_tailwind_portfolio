import React from "react";
import PropTypes from "prop-types";
import { projects } from "../data/projects";
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
  FaNodeJs,
} from "react-icons/fa";
import {
  SiFlask,
  SiTailwindcss,
  SiFirebase,
  SiShopify,
  SiFigma,
  SiTypescript,
  SiExpo,
  SiOpenai,
} from "react-icons/si";
import { useSpring, animated } from "@react-spring/web";
import { SPRING_CONFIG } from "../utils/animation.js";

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
  PythonIcon: () => <FaPython className={`${iconStyle} text-[#3776AB]`} />,
  FlaskIcon: () => <SiFlask className={`${iconStyle} text-white`} />,
  JsIcon: () => <FaJs className={`${iconStyle} text-yellow-500`} />,
  TailwindIcon: () => <SiTailwindcss className={`${iconStyle} text-teal-500`} />,
  NodeIcon: () => <FaNodeJs className={`${iconStyle} text-green-600`} />,
  OpenAiIcon: () => <SiOpenai className={`${iconStyle} text-white`} />,
};


const ProjectCard = React.memo(({ project, index }) => {
  const fadeInProps = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: SPRING_CONFIG,
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
          {project.icons.map((iconName) => {
            const IconComponent = IconComponents[iconName];
            return <IconComponent key={iconName} />;
          })}
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

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

function Projects() {
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