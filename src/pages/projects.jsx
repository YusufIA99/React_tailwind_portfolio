import React from 'react';
import NFT from '../assets/NFT.png';
import { FaReact, FaJs, FaGit, FaGithub, FaPython, FaHtml5, FaCss3Alt, FaBootstrap, FaFigma, FaLink } from 'react-icons/fa';

function Projects() {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-8 gap-4 w-full max-w-screen-lg h-5/6 p-4 rounded-lg">
 <div className="col-span-2 row-span-3 bg-neutral-800 flex flex-col justify-start items-start rounded-lg w-full relative">
  <img src={NFT} alt="NFT" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
</div>
    <div className="col-span-2 row-span-2 bg-neutral-800 p-4 flex flex-col justify-start items-start rounded-lg w-full">
          <h1 className="text-white text-3xl font-bold leading-none">NFT react project</h1>
          <p className="text-gray-400 text-lg mt-2">
           This project serves as a frontend interface for an NFT marketplace. 
          </p>
            <div className="mt-4 flex space-x-4">
        <FaReact className="text-blue-500 text-2xl" />
        <FaJs className="text-yellow-500 text-2xl" />
        <FaBootstrap className="text-purple-500 text-2xl" />
      </div>
        </div>
         <div className="col-span-2 row-span-1 bg-neutral-800 p-4 flex justify-center items-center rounded-lg w-full">
      <a href="https://yusufia99.github.io/NFT/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
        <FaLink />
      </a>
    </div>
<div className="col-span-2 row-span-3 bg-neutral-800 flex flex-col justify-start items-start rounded-lg w-full relative">
  <img src={NFT} alt="NFT" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
</div>
    <div className="col-span-2 row-span-2 bg-neutral-800 p-4 flex flex-col justify-start items-start rounded-lg w-full">
          <h1 className="text-white text-3xl font-bold leading-none">NFT react project</h1>
          <p className="text-gray-400 text-lg mt-2">
           This project serves as a frontend interface for an NFT marketplace. 
          </p>
            <div className="mt-4 flex space-x-4">
        <FaReact className="text-blue-500 text-2xl" />
        <FaJs className="text-yellow-500 text-2xl" />
        <FaBootstrap className="text-purple-500 text-2xl" />
      </div>
        </div>
         <div className="col-span-2 row-span-1 bg-neutral-800 p-4 flex justify-center items-center rounded-lg w-full">
      <a href="https://yusufia99.github.io/NFT/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
        <FaLink />
      </a>
    </div>
    <div className="col-span-2 row-span-3 bg-neutral-800 flex flex-col justify-start items-start rounded-lg w-full relative">
  <img src={NFT} alt="NFT" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
</div>
    <div className="col-span-2 row-span-2 bg-neutral-800 p-4 flex flex-col justify-start items-start rounded-lg w-full">
          <h1 className="text-white text-3xl font-bold leading-none">NFT react project</h1>
          <p className="text-gray-400 text-lg mt-2">
           This project serves as a frontend interface for an NFT marketplace. 
          </p>
            <div className="mt-4 flex space-x-4">
        <FaReact className="text-blue-500 text-2xl" />
        <FaJs className="text-yellow-500 text-2xl" />
        <FaBootstrap className="text-purple-500 text-2xl" />
      </div>
        </div>
         <div className="col-span-2 row-span-1 bg-neutral-800 p-4 flex justify-center items-center rounded-lg w-full">
      <a href="https://yusufia99.github.io/NFT/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl">
        <FaLink />
      </a>
    </div>
    


       
         
      </div>
    </div>
  );
}

export default Projects;