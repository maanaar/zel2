import React from 'react';
import { useNavigate } from 'react-router-dom';
import zel from '../../src/assets/logo.png';
import bg from '../../src/assets/bg.jpeg';
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();  

  const handleContractorRequest = () => {
    // This will navigate to the '/register' route
    navigate('/register');
  };

  return (
    <div className="w-screen h-screen">
      <div
        className="flex justify-center items-start w-full h-full px-4 py-6 relative"
        style={{
          backgroundColor: "#1C1C3F",
          backgroundImage: `
            linear-gradient(to bottom right, #70296B 67%, #F90DD2 100%),
            url(${bg})`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1C1C3F]/30 z-[-1]"></div>

        <div className="flex flex-col items-center text-center space-y-4 z-10">
          <img
            src={zel}
            alt="Zel Logo"
            className="w-48 md:w-64 lg:w-80 h-auto"
          />

          <h2 className="text-4xl md:text-6xl lg:text-8xl text-white font-serif font-light">
            Welcome back
          </h2>
          <p
            onClick={handleContractorRequest}  // Handle click to navigate
            className="text-white text-lg md:text-xl font-semibold underline underline-offset-4 cursor-pointer"
          >
            Request to be a contractor →
          </p>

          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mt-4">
            <Link to="/signup">
              <button className="text-[#222359] bg-white/60 w-64 md:w-[300px] h-20 rounded-2xl text-xl font-semibold shadow-md backdrop-blur-md">
                Sign up
              </button>
            </Link>
            <Link to="/login">
              <button className="text-[#222359] bg-white/60 w-64 md:w-[300px] h-20 rounded-2xl text-xl font-semibold shadow-md backdrop-blur-md">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
