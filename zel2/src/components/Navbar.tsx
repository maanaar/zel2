import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import zel from '../../src/assets/logo.png';
import menu from '../../src/assets/icon.png';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(window.location.pathname.replace('/', '') || 'home');
  const navigate = useNavigate()
  const location = useLocation();;
  let content;
  if (location.pathname === '/create'){
    content =(<>
            </>);
  }else {
    content = (
        <Link to="/create">
          <button className="px-6 py-2 md:text-lg sm:text-xs bg-gradient-to-br from-[#030C37] to-[#588AB0] text-white rounded-full transition">
            Create an event
          </button>
        </Link>
            );
          }
  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/home');
    }
  }, [navigate]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };
  

  return (
    <div className="bg-white rounded-2xl">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="flex items-center sm:gap-2">
          <img src={zel} alt="zel" className="w-16 h-16 py-1" />
        </div>
        <div className="links flex md:gap-6 sm:gap-2">
          {['home', 'services', 'gallery', 'about', 'contact','myevents'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`hover:underline ${activeTab === tab ? 'underline text-[#588AB0]' : ''}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className='flex flex-row space-x-2 sm:w-1/4'>
        {content}
          <img src={menu} alt='menu' className='px-4'/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
