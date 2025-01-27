import React, { useState } from 'react';
import Certificate1 from '../assets/Certificates/Certificate1.jpg';
import Certificate2 from '../assets/Certificates/Certificate2.jpg';
import Certificate3 from '../assets/Certificates/Certificate3.jpg';
import Certificate4 from '../assets/Certificates/Certificate4.jpg';
import Certificate5 from '../assets/Certificates/Certificate5.jpg';
import Certificate6 from '../assets/Certificates/Certificate6.jpg';

function Certificates() {
  const [zoomedIn, setZoomedIn] = useState(false);
  const [currentZoomedImage, setCurrentZoomedImage] = useState('');

  const handleZoomIn = (imageSrc) => {
    setCurrentZoomedImage(imageSrc);
    setZoomedIn(true);
  };

  const handleCloseZoom = () => {
    setZoomedIn(false);
    setCurrentZoomedImage('');
  };

 

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md space-y-2 animate-slideIn left-0 absolute ml-[30px]">
        <h1 className="text-white text-[50px] font-bold">Certificates</h1>
        <p className="text-[#b1b0b0] font-thin">View my credentials and achievements.</p>
      </div>

      <div className="mt-[-50px] flex flex-wrap w-[750px] p-[30px] ml-[100px] border border-gray-600 justify-center space-y-[20px] overflow-auto max-h-[85vh] bg-[#1a1a1a] rounded-lg shadow-[10px_10px_30px_rgba(255,255,255,0.15),5px_5px_30px_rgba(150,150,150,0.1)] transition-all scrollbar-hide">
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <div
            className="max-w-sm w-[330px] border border-gray-400 transform duration-300 bg-[#dbb074] rounded-lg cursor-pointer hover:-translate-y-2 hover:shadow-[35px_35px_10px_rgba(0,0,0,0.25)] transition-all"
            onClick={() => handleZoomIn(Certificate1)}
          >
            <img src={Certificate1} alt="Certificate 1" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">Pythoon Essentials</h2>
              <p className="text-sm text-gray-600">Cisco</p>
            </div>
          </div>
          <div
            className="max-w-sm w-[330px] bg-[#dbb074] rounded-lg shadow-lg cursor-pointer hover:-translate-y-2 hover:shadow-[35px_35px_10px_rgba(0,0,0,0.25)] transition-all"
            onClick={() => handleZoomIn(Certificate2)}
          >
            <img src={Certificate2} alt="Certificate 2" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">Java Programming For Beginners</h2>
              <p className="text-sm text-gray-600">Issued by Simplilearn</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 w-full mt-4">
          <div
            className="max-w-sm w-[330px] bg-[#dbb074] rounded-lg shadow-lg cursor-pointer hover:-translate-y-2 hover:shadow-[35px_35px_10px_rgba(0,0,0,0.25)] transition-all"
            onClick={() => handleZoomIn(Certificate3)}
          >
            <img src={Certificate3} alt="Certificate 3" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">Introduction To HTML</h2>
              <p className="text-sm text-gray-600">Issued by Simplilearn</p>
            </div>
          </div>
          <div
            className="max-w-sm w-[330px] bg-[#dbb074] rounded-lg shadow-lg cursor-pointer hover:-translate-y-2 hover:shadow-[35px_35px_10px_rgba(0,0,0,0.25)] transition-all"
            onClick={() => handleZoomIn(Certificate4)}
          >
            <img src={Certificate4} alt="Certificate 4" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">Introduction To Graphic Design</h2>
              <p className="text-sm text-gray-600">Issued by Simplilean</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 w-full mt-4">
          <div
            className="max-w-sm w-[330px] bg-[#dbb074] rounded-lg shadow-lg cursor-pointer hover:-translate-y-2 hover:shadow-[35px_35px_10px_rgba(0,0,0,0.25)] transition-all"
            onClick={() => handleZoomIn(Certificate5)}
          >
            <img src={Certificate5} alt="Certificate 5" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">EnGenius Certified Network Professional</h2>
              <p className="text-sm text-gray-600">Issued by EnGenius</p>
            </div>
          </div>
          <div
            className="max-w-sm w-[330px] bg-[#dbb074] rounded-lg shadow-lg cursor-pointer hover:-translate-y-2 hover:shadow-[35px_35px_10px_rgba(0,0,0,0.25)] transition-all"
            onClick={() => handleZoomIn(Certificate6)}
          >
            <img src={Certificate6} alt="Certificate 6" className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">EnGenius Certified Network Professional</h2>
              <p className="text-sm text-gray-600">Issued by EnGenius</p>
            </div>
          </div>
        </div>
      </div>
      
      {zoomedIn && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 overflow-auto"
    onClick={handleCloseZoom}
  >
    <div className="max-w-[70%] max-h-[70%] mt-[-70px]">
      <div className="relative">
        <img 
          src={currentZoomedImage} 
          alt="Zoomed Certificate" 
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>
      <button
          className="absolute top-[40px] right-[160px]  text-gray-300 p-2 hover:text-gray-500 flex items-center justify-center"
          onClick={handleCloseZoom}
        >
          <i className="fas fa-times text-xl"></i>
        </button>
    </div>
  </div>
)}

    </div>
  );
}

export default Certificates;
