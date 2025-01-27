import React from 'react';
import FacePicture from '../assets/img/face-picture.png';

function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="absolute flex items-center justify-center w-[580px] h-[580px] border-[4px] border-l-[1px] mt-[-70px] border-r-[0px] border-l-transparent border-r-transparent border-[#464646] rounded-full">
          <div className="absolute w-full h-full rounded-full border-r-[5px] border-l-transparent animate-border-highlight"></div>
          <div className="w-[200px] h-[200px] rounded-full bg-[#e7e6f0] shadow-[0_0_180px_10px_rgba(219,176,116,0.7),0_0_80px_20px_rgba(219,176,116,0.4)] animate-shadow-pulse"></div>
          <img src={FacePicture} alt="Profile" className="absolute -[300px] h-[250px] rounded-full mb-[25px] object-cover animate-move-face" />
        </div>

        <div className="max-w-md space-y-2 z-10 animate-slideIn ml-[-570px] mt-[-75px]">
          <h1 className="text-white text-[70px] font-bold">Hello</h1>
          <div className="flex items-center space-x-2"> 
            <hr className="w-3 h-[3px] bg-white border-none ml-[6px] mt-[-10px]"/>
            <p className="text-white font-bold mt-[-10px]">Jade Ian Lucero</p>
          </div>
          <p className="text-[#b1b0b0] font-light ml-[27px]">A student passionate<br/>about web design<br/>and development.</p>
        </div>
        <div className="absolute top-[240px] space-y-3 right-[250px] text-[#b1b0b0] font-light">
            <p className="rounded-lg right-[20px] ml-[-26px] shadow-lg">Front-end</p>
            <p className="rounded-lg shadow-lg ml-[-3px]">Back-end</p>
            <p className="rounded-lg shadow-lg">Version Control</p>
            <p className="rounded-lg shadow-lg ml-[-3px]">Database</p>
            <p className="rounded-lg shadow-lg ml-[-25px]">Mobile App</p>
        </div>
      </div>
    </>
  );
}

export default Home;
