import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Planet from './Planet.jsx';

const NavItem = ({ to, label, setHomePagePosition }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  const updateHomePagePosition = () => {
    if (to === '/Projects' && location.pathname === '/') {
      setHomePagePosition('left');
    } else if (to === '/Certificates' && location.pathname === '/Projects') {
      setHomePagePosition('right');
    } else if (to === '/' && location.pathname === '/Projects') {
      setHomePagePosition('left');
    } else if (to === '/' && location.pathname === '/Certificates') {
      setHomePagePosition('right');
    } else if (to === '/Certificates' && location.pathname === '/') {
      setHomePagePosition('right');
    } else if (to === '/Projects' && location.pathname === '/Certificates') {
      setHomePagePosition('left');
    }
  };

  return (
    <li className="group relative">
      <Link
        to={to}
        className={`${
          isActive ? 'text-[#dbb074]' : 'text-[#b1b0b0]'
        } hover:text-[#dbb074]`}
        aria-current={isActive ? 'page' : undefined}
        onClick={updateHomePagePosition}
      >
        {label}
      </Link>
      <span
        className={`absolute left-0 bottom-0 h-[2px] bg-[#dbb074] transition-all duration-300 ${
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      ></span>
    </li>
  );
};

function NavBar({ setHomePagePosition }) {
  const location = useLocation();

  return (
    <nav className="relative">
      {location.pathname === '/' ? (
        <>
          <Planet position="left" />
          <Planet position="right" />
        </>
      ) : location.pathname === '/Projects' ? (
        <Planet position="left" />
      ) : location.pathname === '/Certificates' ? (
        <Planet position="right" />
      ) : (
        <Planet position={'nothing'} />
      )}
      
      <ul className="fixed flex justify-center space-x-[70px] w-full mb-[25px] bottom-0 text-lg">
        <NavItem to="/Certificates" label="Certificates" setHomePagePosition={setHomePagePosition} />
        <NavItem to="/" label="Home" setHomePagePosition={setHomePagePosition} />
        <NavItem to="/Projects" label="Projects" setHomePagePosition={setHomePagePosition} />
      </ul>
    </nav>
  );
}

export default NavBar;
