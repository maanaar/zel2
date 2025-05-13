import React from 'react';
import zel from '../../src/assets/logo.png';
import menu from '../../src/assets/icon.png'

const Navbar = () => {
  return (
    <div className=" bg-white rounded-2xl">
      <div className="container mx-auto  flex flex-row justify-between items-center">
        <div className="flex items-center  sm:gap-2">
          <img src={zel} alt="zel" className="w-16 h-16 py-1" />
        </div>
        <div className="links flex md:gap-6 sm:gap-2 s:">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        <div className='flex flex-row space-x-2 sm:w-1/4'>
          <button className="px-6 py-2 md:text-l sm:text-xs bg-gradient-to-br from-[#030C37] to-[#588AB0] text-white rounded-full transition">
            Create an event
          </button>
          <img src={menu} alt='menu' className='px-4'/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;