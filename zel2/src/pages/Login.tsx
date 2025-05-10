import React, { useState } from 'react';
import zel from '../../src/assets/logo.png';
import bg from '../../src/assets/bg.jpeg';


const Login = () => {
  const [role, setRole] = useState('User'); // Default role

  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative flex flex-col md:flex-row"
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
      <div className="absolute inset-0 bg-[#1C1C3F]/45 z-0"></div>
      {/* Form Section */}
      <div className="relative z-10 w-full md:w-3/5 flex items-center justify-center p-6">
      <div className="bg-white rounded-[32px] p-12 w-full max-w-lg shadow-lg space-y-6">
          
          {/* Tabs */}
          <div className="flex w-full bg-gray-200 rounded-full text-sm font-medium overflow-hidden">
            {['Contractor', 'User', 'Admin'].map((r) => (
              <button
                key={r}
                onClick={() => setRole(r)}
                className={`flex-1 py-2 rounded-full transition-all duration-200 ${
                  role === r ? 'bg-[#222359] text-white' : 'text-[#222359] hover:bg-white'
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          {/* Email or Username Field */}
          <div>
            <label className="block font-semibold mb-1">
              {role === 'Contractor' ? 'Username' : 'Email'}
            </label>
            <input
              type={role === 'Contractor' ? 'text' : 'email'}
              placeholder={role === 'Contractor' ? 'Username' : 'E-mail'}
              className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C1C3F]"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C1C3F]"
            />
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-[#1C1C3F]" />
              Remember Me
            </label>
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full bg-[#222359] text-white py-2 rounded-md text-lg hover:opacity-90 transition">
            Login
          </button>

          {/* Sign Up Link */}
          <p className="text-sm text-center">
            Don&apos;t have an account?{" "}
            <a href="#" className="font-semibold text-[#1C1C3F] hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-center text-white text-center px-6 pt-7 pb-12 space-y-2">
        <img src={zel} alt="Logo" className="w-3/4 h-3/4" />
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
          Hello,<br />Welcome back
        </h1>
        <p className="text-base md:text-lg max-w-md">
          Step into a world where every event is a masterpiece.
        </p>
      </div>
    </div>
  );
};

export default Login;
