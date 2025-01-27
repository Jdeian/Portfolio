import React from 'react';
import WaterBillLogin from '../assets/img/water-bill-login.png';
import WaterBill from '../assets/img/water-bill.png';
import ChurchillsChicken from '../assets/img/churchills-chicken.png';
import ChurchillsFood from '../assets/img/churchills-foods.png';
import Memorix from '../assets/img/memorix-mockup.png';
import MemorixLogin from '../assets/img/memorix-login.png';
import MemorixAdmin from '../assets/img/memorix-admin.png';
import MemorixAdminLogin from '../assets/img/memorix-admin-login.png';

function Projects() {
  return (
    <div className="flex max-w-full min-h-screen">
      <div className="w-1/2 space-y-3 animate-slideIn">
        <h1 className="text-center mr-[-200px] mt-[200px] text-white text-[70px] font-bold">Projects</h1>
        <p className="text-center mr-[-200px] text-[#b1b0b0] font-thin">
          Showcase of my recent works.
        </p>
      </div>

      <div className="flex flex-col items-center w-full max-w-2xl mt-[30px] p-10 space-y-[68px] overflow-y-auto h-[80vh] mr-[20px] bg-[#1a1a1a] shadow-[5px_10px_30px_rgba(255,255,255,0.15),5px_5px_30px_rgba(150,150,150,0.1)] transition-all rounded-lg">
        <div className="flex items-center">
          <a href="https://github.com/Jdeian/WaterBiill.git" className="w-1/2 pt-[120px]" target="_blank">
            <div className="card">
              <div className="wrapper">
                <img src={WaterBillLogin} className="cover-image shadow-[0_0_0px_0px_rgba(219,176,116,0.4),5px_5px_10px_rgba(219,176,116,0.7)] transition-all" alt="Water Bill Cover" />
              </div>
              <img src={WaterBill} className="character" alt="Water Bill Project" />
            </div>
          </a>
          <p className="text-[#b1b0b0] font-thin">
          This is a water bill system, created through a GUI in Java, that tracks customer records, manages water usage, and allows users to log in and view their bills, while enabling admins to easily add and create bills.          </p>
        </div>

        <div className="flex items-center space-x-5">
          <p className="text-[#b1b0b0] font-thin">
          Churchill's Chicken is a static website built to advertise the delicious foods available at Churchill's Chicken. The site features hardcoded content showcasing various menu items, promotions, and store locations to attract potential customers.</p>
          <a href="https://churchill-s-website.vercel.app/" className="w-1/2" target="_blank">
            <div className="card">
              <div className="wrapper">
                <img src={ChurchillsChicken} className="cover-image shadow-[0_0_0px_0px_rgba(219,176,116,0.4),5px_5px_10px_rgba(219,176,116,0.7)] transition-all" alt="Churchill's Chicken Cover" />
              </div>
              <img src={ChurchillsFood} className="character" alt="Churchill's Chicken Project" />
            </div>
          </a>
        </div>

        <div className="flex items-center space-x-5">
          <a href="https://github.com/Jdeian/Memorix-App.git" className="w-1/2" target="_blank">
            <div className="card">
              <div className="wrapper">
                <img src={MemorixLogin} className="cover-image shadow-[0_0_0px_0px_rgba(219,176,116,0.4),5px_5px_10px_rgba(219,176,116,0.7)] transition-all" alt="Memorix Login Cover" />
              </div>
              <img src={Memorix} className="character" alt="Memorix Project" />
            </div>
          </a>
          <p className="text-[#b1b0b0] font-thin">Memorix is a Java-based mobile app designed for students, enabling them to review, take notes, and create courses where they can store and share custom questionnaires with others.          </p>
        </div>

        <div className="flex items-center space-x-5">
          <p className="text-[#b1b0b0] font-thin">Memorix Admin is a web-based platform built with hardcoded HTML, CSS, JavaScript, and PHP backend. It tracks the revenue of the Memorix app, monitors user activity, and provides tools for user management.          </p>
          <a href="#" className="w-1/2" target="_blank">
            <div className="card">
              <div className="wrapper">
                <img src={MemorixAdminLogin} className="cover-image shadow-[0_0_0px_0px_rgba(219,176,116,0.4),5px_5px_10px_rgba(219,176,116,0.7)] transition-all" alt="Memorix Admin Login Cover" />
              </div>
              <img src={MemorixAdmin} className="character" alt="Memorix Admin Project" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
