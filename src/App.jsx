import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Transition from './Transition.jsx';
import Home from './Components/Home.jsx';
import Projects from './Components/Projects.jsx';
import Certificates from './Components/Certificates.jsx';
import NavBar from './Components/NavBar.jsx';
import VideoBg from './assets/img/VideoBg.mp4';

function App() {
  const [homePagePosition, setHomePagePosition] = useState();
  
  return (
    <Router>
      <div className="relative h-screen w-full">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src={VideoBg} type="video/mp4" />
          <source src="vecteezy_spinning-digital-earth-on-space_2014290.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-30 -z-10"></div>
        <NavBar homePagePosition={homePagePosition} setHomePagePosition={setHomePagePosition}/>
        <AnimatedRoutes homePagePosition={homePagePosition}/>
      </div>
    </Router>
  );
}

function AnimatedRoutes({ homePagePosition }) {
  const location = useLocation();
  console.log(homePagePosition)
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Transition pagePosition={homePagePosition}><Home /></Transition>} />
        <Route path="/Projects" element={<Transition pagePosition="right"><Projects /></Transition>} />
        <Route path="/Certificates" element={<Transition pagePosition="left"><Certificates /></Transition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
