import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import zel from '../../src/assets/logo.png';
import menu from '../../src/assets/icon.png';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(window.location.pathname.replace('/', '') || 'home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Redirect '/' to '/home'
  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/home');
    }
  }, [navigate]);

  // Check login status on mount
  useEffect(() => {
    const token = localStorage.getItem('token'); // or sessionStorage.getItem
    setIsLoggedIn(!!token);
  }, [location]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    navigate(`/${tab}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  let createButtonContent;
  if (location.pathname === '/create') {
    createButtonContent = <></>;
  } else {
    createButtonContent = (
      <Link to="/create">
        <button className="px-6 py-2 md:text-lg sm:text-xs bg-gradient-to-br from-[#030C37] to-[#588AB0] text-white rounded-full transition">
          Create an event
        </button>
      </Link>
    );
  }

  return (
    <div className="bg-white rounded-2xl">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="flex items-center sm:gap-2">
          <img src={zel} alt="zel" className="w-16 h-16 py-1" />
        </div>

        <div className="links flex md:gap-6 sm:gap-2">
          {['home', 'services', 'ourprojects', 'about', 'contact', 'myevents'].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`hover:underline ${activeTab === tab ? 'underline text-[#588AB0]' : ''}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex flex-row space-x-2 sm:w-1/4 items-center">
          {createButtonContent}

          {/* Login / Logout Button */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-sm bg-red-500 text-white px-4 py-1 rounded-full"
            >
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="text-sm bg-blue-500 text-white px-4 py-1 rounded-full">
                Login
              </button>
            </Link>
          )}

          <img src={menu} alt="menu" className="px-4" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
