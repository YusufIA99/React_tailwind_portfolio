import React from "react";
import github from "../assets/github.png";
import Yusuf from "../assets/Yusuf.png";
import {
  FaReact,
  FaJs,
  FaGit,
  FaGithub,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaFigma,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { useSpring, animated } from "@react-spring/web";
import { useTheme } from "./themecontext.jsx";

function Home() {
  const { theme } = useTheme();

  const leftAnimationProps = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { tension: 170, friction: 40 },
    delay: 200,
  });

  const rightAnimationProps = useSpring({
    from: { opacity: 0, transform: "translateX(100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { tension: 170, friction: 40 },
    delay: 200,
  });

  const bgColor =
    theme === "dark" || theme === "dark-gradient"
      ? "bg-neutral-800"
      : "bg-white";
  const textColor =
    theme === "dark" || theme === "dark-gradient" ? "text-white" : "text-black";
  const textSecondaryColor =
    theme === "dark" || theme === "dark-gradient"
      ? "text-gray-400"
      : "text-gray-700";
  const accentColor =
    theme === "dark" || theme === "dark-gradient"
      ? "bg-cyan-900"
      : "bg-blue-400";

  return (
    <div className="flex h-screen w-full justify-center">
      <div className="grid-rows-auto grid h-5/6 w-full max-w-screen-lg grid-cols-1 gap-4 rounded-lg p-4 md:grid-cols-3">
        <animated.div
          style={leftAnimationProps}
          className={`col-span-1 row-span-2 flex w-full flex-col items-start justify-start rounded-lg p-4 md:col-span-2 ${bgColor}`}
        >
          <h1
            className={`text-3xl font-bold leading-none md:text-2xl lg:text-3xl ${textColor}`}
          >
            Who am I?
          </h1>
          <p
            className={`mt-2 text-lg md:text-base lg:text-lg ${textSecondaryColor}`}
          >
            Hi, I'm Yusuf! I’m a frontend developer currently studying at
            Aalborg University. I am passionate about creating innovative
            software solutions that enhance user experiences. If my profile
            interests you, please feel free to{" "}
            <a
              href="mailto:yusuia0154@gmail.com"
              className={`text-blue-500 underline`}
            >
              contact
            </a>{" "}
            me.
          </p>
        </animated.div>
        <animated.div
          style={rightAnimationProps}
          className={`col-span-1 row-span-4 flex hidden h-full w-full items-center justify-center overflow-hidden rounded-lg md:col-start-3 md:block ${bgColor}`}
        >
          <div className="relative h-full w-full">
            <img
              src={Yusuf}
              alt="Yusuf"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </animated.div>

        <div
          className={`col-span-1 row-span-2 flex w-full flex-col items-center justify-center rounded-lg p-4 md:col-start-2 md:row-start-3 ${bgColor}`}
        >
          <a
            href="https://github.com/YusufIA99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt="GitHub"
              className="mb-4 max-h-16 max-w-xs rounded-lg object-contain md:max-h-12 md:max-w-sm lg:max-h-16 lg:max-w-xs"
            />
          </a>
          <h1
            className={`text-3xl font-bold leading-none md:text-2xl lg:text-3xl ${textColor}`}
          >
            Yusuf Issa
          </h1>
        </div>
        <animated.div
          style={leftAnimationProps}
          className={`col-span-1 row-span-4 flex w-full flex-col items-start justify-start rounded-lg p-4 md:col-span-2 md:col-start-2 md:row-start-5 ${bgColor}`}
        >
          <h2
            className={`mb-4 text-2xl font-bold md:text-xl lg:text-2xl ${textColor}`}
          >
            Education
          </h2>
          <ul
            className={`list-none text-lg md:text-base lg:text-lg ${textSecondaryColor}`}
          >
            <li className="mb-2">
              <h3
                className={`text-xl font-semibold md:text-lg lg:text-xl ${textColor}`}
              >
                Master in Interaction Design
              </h3>
              <p>Aalborg University - 2024 to present</p>
              <p>
                In this program, I am gaining expertise in interactive
                technology with an emphasis on user-centered design.
              </p>
            </li>
            <li className="mb-2">
              <h3
                className={`text-xl font-semibold md:text-lg lg:text-xl ${textColor}`}
              >
                Bachelor in Information Technology
              </h3>
              <p>Aalborg University - 2020 to 2023</p>
              <p>
                Designed and developed various systems, focusing on usability
                and user experience. During my bachelor’s program, I specialized
                in the technical direction, focusing on software development.
              </p>
            </li>
          </ul>
        </animated.div>
        <animated.div
          style={rightAnimationProps}
          className={`col-span-1 row-span-1 flex w-full flex-col items-center justify-center rounded-lg ${accentColor} p-4 md:col-start-1 md:row-start-3`}
        >
          <h1 className="text-center text-3xl font-bold leading-none text-white md:text-2xl lg:text-3xl">
            Student & <br />
            Frontend Developer
          </h1>
        </animated.div>
        <animated.div
          style={leftAnimationProps}
          className={`col-span-1 row-span-5 flex w-full flex-col items-start justify-start rounded-lg p-4 md:col-start-1 md:row-start-4 ${bgColor}`}
        >
          <h2
            className={`mb-4 text-2xl font-bold md:text-xl lg:text-2xl ${textColor}`}
          >
            Technologies
          </h2>
          <ul
            className={`list-none text-lg md:text-base lg:text-lg ${textSecondaryColor}`}
          >
            <li className="mb-2 flex items-center">
              <FaJs className="mr-2 text-yellow-500" /> JavaScript
            </li>
            <li className="mb-2 flex items-center">
              <FaReact className="mr-2 text-blue-500" /> React
            </li>
            <li className="mb-2 flex items-center">
              <FaHtml5 className="mr-2 text-orange-500" /> HTML
            </li>
            <li className="mb-2 flex items-center">
              <FaCss3Alt className="mr-2 text-blue-600" /> CSS
            </li>
            <li className="mb-2 flex items-center">
              <SiTailwindcss className="mr-2 text-teal-500" /> TailwindCSS
            </li>
            <li className="mb-2 flex items-center">
              <FaBootstrap className="mr-2 text-purple-600" /> Bootstrap
            </li>
            <li className="mb-2 flex items-center">
              <FaGit className="mr-2 text-red-500" /> Git
            </li>
            <li className="mb-2 flex items-center">
              <FaGithub className="mr-2 text-gray-500" /> GitHub
            </li>
            <li className="mb-2 flex items-center">
              <FaFigma className="mr-2 text-pink-500" /> Figma
            </li>
          </ul>
        </animated.div>
      </div>
    </div>
  );
}

export default Home;
