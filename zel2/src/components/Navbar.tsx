import React from 'react';
import zel from '../../src/assets/logo.png';
import menu from '../../src/assets/icon.png'

const Navbar = () => {
  return (
    <div className=" bg-white rounded-2xl">
      <div className="container mx-auto  flex flex-row justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={zel} alt="zel" className="w-16 h-16 py-1" />
        </div>
        <div className="links flex gap-6">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
          <a href="#about" className="hover:underline">About Us</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
        <div className='flex flex-row space-x-2'>
          <button className="px-6 py-2 bg-gradient-to-br from-[#030C37] to-[#588AB0] text-white rounded-full transition">
            Create an event
          </button>
          <img src={menu} alt='menu' className='px-4'/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;