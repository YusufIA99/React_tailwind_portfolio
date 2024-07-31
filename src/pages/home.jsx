import React from 'react';
import github from '../assets/github.png';
import stars from '../assets/stars.png';
import { FaReact, FaJs, FaGit, FaGithub, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaFigma } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

function Home() {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-4 w-full max-w-screen-lg h-5/6 p-4 rounded-lg">
        <div className="col-span-1 md:col-span-2 row-span-2 bg-neutral-800 p-4 flex flex-col justify-start items-start rounded-lg w-full">
          <h1 className="text-white text-3xl font-bold leading-none">Who am I?</h1>
          <p className="text-gray-400 text-lg mt-2">
            Hey! My name is Yusuf. I am a software developer and currently a student at Aalborg University. 
            I am passionate about creating innovative software solutions and am always seeking new challenges. 
            If my profile interests you, please feel free to <a href="mailto:yusuia0154@gmail.com">contact</a> me.
          </p>
        </div>
        <div className="hidden md:block row-span-3 col-span-1 md:col-start-3 bg-neutral-800 items-center justify-center rounded-lg overflow-hidden w-full">
          <img src={stars} alt="Stars" className="w-full h-full object-cover" />
        </div>
        <div className="row-span-2 col-span-1 md:col-start-2 md:row-start-3 bg-neutral-800 p-4 flex flex-col items-center justify-center rounded-lg w-full">
          <a href="https://github.com/YusufIA99" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="max-w-xs max-h-16 object-contain rounded-lg mb-4" />
          </a>
          <h1 className='text-white text-3xl font-bold leading-none'>Yusuf Issa</h1>
        </div>
        <div className="hidden md:block row-span-1 col-span-1 md:col-start-3 md:row-start-4 bg-cyan-900 p-4 items-center justify-center rounded-lg w-full">
          <p className="text-white text-center">"Design is not just what it looks like and feels like. Design is how it works." </p>
        </div>
        <div className="col-span-1 md:col-span-2 row-span-4 md:col-start-2 md:row-start-5 bg-neutral-800 p-4 flex flex-col items-start justify-start rounded-lg w-full">
          <h2 className="text-white text-2xl font-bold mb-4">Education</h2>
          <ul className="text-gray-400 text-lg list-none">
            <li className="mb-2">
              <h3 className="text-white text-xl font-semibold">Bachelor in Information Technology</h3>
              <p className="text-gray-400">Aalborg University - 2020 to 2024</p>
              <p className="text-gray-400">Designed and developed various systems, focusing on usability and user experience. 
              </p>
            </li>
            <li className="mb-2">
              <h3 className="text-white text-xl font-semibold">Master in Interaction Design</h3>
              <p className="text-gray-400">2024-present</p>
              <p className="text-gray-400">In this program, I will gain expertise in digital innovation with a strong focus on user-centered design. 
              I will develop, design, and evaluate interactive technologies, 
              staying at the forefront of the latest trends to create great digital experiences.</p>
            </li>
          </ul>
        </div>
        <div className="row-span-1 col-span-1 md:col-start-1 md:row-start-3 bg-cyan-900 p-4 flex flex-col justify-center items-center rounded-lg w-full">
          <h1 className="text-white text-3xl font-bold leading-none text-center">Student & <br />Software Developer</h1>
        </div>
        <div className="row-span-5 col-span-1 md:col-start-1 md:row-start-4 bg-neutral-800 p-4 flex flex-col items-start justify-start rounded-lg w-full">
          <h2 className="text-white text-2xl font-bold mb-4">Technologies</h2>
          <ul className="text-gray-400 text-lg list-none">
            <li className="flex items-center mb-2">
              <FaHtml5 className="mr-2 text-orange-500" /> HTML
            </li>
            <li className="flex items-center mb-2">
              <FaCss3Alt className="mr-2 text-blue-600" /> CSS
            </li>
            <li className="flex items-center mb-2">
              <FaJs className="mr-2 text-yellow-500" /> JavaScript
            </li>
            <li className="flex items-center mb-2">
              <FaReact className="mr-2 text-blue-500" /> React
            </li>
            <li className="flex items-center mb-2">
              <FaGit className="mr-2 text-red-500" /> Git
            </li>
            <li className="flex items-center mb-2">
              <FaGithub className="mr-2 text-gray-500" /> GitHub
            </li>
            <li className="flex items-center mb-2">
              <FaPython className="mr-2 text-blue-400" /> Python
            </li>
            <li className="flex items-center mb-2">
              <SiTailwindcss className="mr-2 text-teal-500" /> TailwindCSS
            </li>
            <li className="flex items-center mb-2">
              <FaBootstrap className="mr-2 text-purple-600" /> Bootstrap
            </li>
            <li className="flex items-center mb-2">
              <FaFigma className="mr-2 text-pink-500" /> Figma
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;