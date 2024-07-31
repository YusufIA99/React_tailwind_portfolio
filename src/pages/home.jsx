import React from 'react';
import github from '../assets/github.png';
import stars from '../assets/stars.png';

function Home() {
  return (
    <div className="w-full h-screen flex justify-center bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-8 gap-4 w-full max-w-screen-lg h-5/6 p-4 rounded-lg">
       <div className="col-span-1 md:col-span-2 row-span-2 bg-neutral-800 p-4 flex flex-col justify-start items-start rounded-lg">
  <h1 className="text-white text-3xl font-bold leading-none">Who am I?</h1>
  <p className="text-gray-400 text-lg mt-2">
    Hey! My name is Yusuf. I am a software developer and currently a student at Aalborg University. 
    I am passionate about creating innovative software solutions and am always seeking new challenges. 
    If my profile interests you, please feel free to <a href="mailto:yusuia0154@gmail.com">contact</a> me.
  </p>
</div>
<div className="hidden md:block row-span-4 col-span-1 md:col-start-3 bg-neutral-800items-center justify-center rounded-lg overflow-hidden">
  <img src={stars} alt="Stars" className="w-full h-full object-cover" />
</div>
       <div className="row-span-3 col-span-1 md:col-start-2 md:row-start-3 bg-neutral-800 p-4 flex flex-col items-center justify-center rounded-lg">
  <a href="https://github.com/YusufIA99" target="_blank" rel="noopener noreferrer">
    <img src={github} alt="GitHub" className="max-w-xs max-h-16 object-contain rounded-lg mb-4" />
  </a>
  <h1 className='text-white text-3xl font-bold leading-none'>Yusuf Issa</h1>
</div>
        <div className="hidden md:block row-span-1 col-span-1 md:col-start-3 md:row-start-5 bg-cyan-900  p-4 items-center justify-center rounded-lg">Nice quote</div>
        <div className="col-span-1 md:col-span-2 row-span-3 md:col-start-2 md:row-start-6 bg-neutral-800  p-4 flex items-center justify-center rounded-lg">Experience</div>
        <div className="row-span-1 col-span-1 md:col-start-1 md:row-start-3 bg-cyan-900 p-4 flex flex-col justify-center items-center rounded-lg">
          <h1 className="text-white text-3xl font-bold leading-none text-center">Student & <br />Software developer</h1>
        </div>
        <div className="row-span-5 col-span-1 md:col-start-1 md:row-start-4 bg-neutral-800  p-4 flex items-center justify-center rounded-lg">Technologies</div>
      </div>
    </div>
  );
}

export default Home;