import React from 'react';
import NFT from '../assets/NFT.png';
import IOT from '../assets/IOT.png';
import Travel from '../assets/travel.png';
import { FaReact, FaJs, FaBootstrap, FaLink, FaPython } from 'react-icons/fa';
import { SiFlask, SiTailwindcss } from 'react-icons/si';
import { useSpring, animated } from '@react-spring/web';

function Projects() {
  const fadeInProps = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 170, friction: 40 },
    delay: 200,
  });

  const projects = [
    {
      id: 1,
      image: IOT,
      title: "IOT Project",
      description: "This project is focused on Internet of Things (IoT) technology.",
      link: "https://github.com/YusufIA99/Smart-Curtain-IoT",
      icons: [
        <FaReact key="react" className="text-blue-500 text-2xl" />,
        <FaBootstrap key="bootstrap" className="text-purple-500 text-2xl" />,
        <FaPython key="python" className="text-green-500 text-2xl" />,
        <SiFlask key="flask" className="text-white text-2xl" />
      ],
    },
    {
      id: 2,
      image: Travel,
      title: "Travel React Project",
      description: "This is travel app made using react and tailwindcss.",
      link: "https://github.com/YusufIA99/travel-tailwind-vite",
      icons: [
        <FaReact key="react" className="text-blue-500 text-2xl" />,
        <FaJs key="js" className="text-yellow-500 text-2xl" />,
        <SiTailwindcss key="tailwind" className="text-teal-500 text-2xl" />
      ],
    },
    {
      id: 3,
      image: NFT,
      title: "NFT React Project",
      description: "This project serves as a frontend interface for an NFT marketplace.",
      link: "https://yusufia99.github.io/NFT/",
      icons: [
        <FaReact key="react" className="text-blue-500 text-2xl" />,
        <FaJs key="js" className="text-yellow-500 text-2xl" />,
        <FaBootstrap key="bootstrap" className="text-purple-500 text-2xl" />
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <header className="text-4xl font-bold my-8 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
        See My Work
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-screen-lg p-8">
        {projects.map((project) => (
          <animated.div key={project.id} style={fadeInProps} className="relative group bg-neutral-800 rounded-lg overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-80 object-cover transition-transform duration-300 transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
              <h1 className="text-white text-3xl font-bold leading-none">{project.title}</h1>
              <p className="text-gray-300 text-lg mt-2 text-center">
                {project.description}
              </p>
              <div className="mt-4 flex space-x-4 justify-center">
                {project.icons.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 text-white text-2xl">
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