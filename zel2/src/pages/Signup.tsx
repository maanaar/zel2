import React, { useState } from 'react';
import zel from '../../src/assets/logo.png';
import bg from '../../src/assets/bg.jpeg';

const SignUp = () => {
  const [countryCode, setCountryCode] = useState('+1'); // Default country code: USA

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
          

          {/* First Name & Last Name Fields */}
          <div className="flex space-x-4">
            <div className="w-full">
              <label className="block font-semibold mb-1 text-[#48195C]">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C1C3F]"
              />
            </div>
            <div className="w-full">
              <label className="block font-semibold mb-1 text-[#48195C]">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C1C3F]"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block font-semibold mb-1 text-[#48195C]">Email</label>
            <input
              type="email"
              placeholder="E-mail"
              className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C1C3F]"
            />
          </div>

          {/* Phone Number Field */}
          <div className="flex items-center space-x-2">
            <select
              className="border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C1C3F] w-1/4"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+91">+91</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C1C3F]"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block font-semibold mb-1 text-[#48195C]">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C1C3F]"
            />
          </div>

          {/* Sign Up Button */}
          <button className="w-full bg-[#222359] text-white py-2 rounded-md text-lg hover:opacity-90 transition">
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-sm text-center">
            Already have an account?{" "}
            <a href="#" className="font-semibold text-[#1C1C3F] hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="relative z-10 w-full md:w-2/5 flex flex-col justify-center items-center text-white text-center px-6 pt-7 pb-12 space-y-2">
        <img src={zel} alt="Logo" className="w-3/4 h-3/4" />
        <h1 className="text-3xl md:text-4xl font-semibold leading-snug">
          Welcome,<br />Create Your Account
        </h1>
        <p className="text-base md:text-lg max-w-md">
          Join our community and start your journey today.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
