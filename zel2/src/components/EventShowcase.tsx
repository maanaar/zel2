import { Play } from "lucide-react";
import { useState } from "react";
import vid_bg from '../../src/assets/vid_bg.jpeg';

export default function EventShowcase() {
  const [isHovered, setIsHovered] = useState(false);
  
  const stats = [
    { value: "500", label: "Events Hosted" },
    { value: "98 %", label: "Client Satisfaction Rate" },
    { value: "5 Y", label: "Years of Experience" },
    { value: "68", label: "Venues Collaborated With" }
  ];

  return (
    <div className="relative w-full h-screen flex flex-col">
      {/* Hero section with background image */}
      <div className="relative w-full flex-1 overflow-hidden">
        {/* Dark overlay for better text visibility */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-10"
        />
        
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${vid_bg})`,
          }}
        />
        
        {/* Content overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          {/* Play button */}
          <button 
            className={`flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-8 transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Play size={40} className="text-white ml-1" fill="white" />
          </button>
          
          {/* Tagline */}
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
              Where Every Event Feels
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Extraordinary.
            </h1>
          </div>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="bg-blue-950 py-8 px-4 mx-24 mb-4 rounded-b-3xl">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative">
              <span className="absolute top-0 right-0 text-blue-800 text-xl font-bold">+</span>
              <h2 className="text-5xl font-bold text-white mb-2">{stat.value}</h2>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}