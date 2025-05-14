import React from "react";
import chooseus from '../../src/assets/chooseus.jpeg'

export default function WhyChooseUs() {
  const features = [
    {
      title: "Expertise And Experience",
      description: "5+ years of creating successful and memorable events.",
      bgColor: "bg-blue-950",
      textColor: "text-white"
    },
    {
      title: "Creative Vision And Innovation",
      description: "Transforming unique ideas into unforgettable event experiences.",
      bgColor: "bg-white",
      textColor: "text-gray-700"
    },
    {
      title: "Personalized Service And Attention",
      description: "Dedicated to understanding and delivering your unique vision.",
      bgColor: "bg-white",
      textColor: "text-gray-700"
    },
    {
      title: "Client-Centric Approach",
      description: "Focusing on satisfaction and building long-lasting relationships.",
      bgColor: "bg-white",
      textColor: "text-gray-700"
    }
  ];

  return (
    <div className="w-full bg-gray-100  px-4 mx-auto my-0 md:px-8">
      <div className="max-w-full h-full mx-16 flex flex-col  md:flex-row gap-16">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 md:mb-0">
          <div className="rounded-lg overflow-hidden h-full">
            <img 
              src={chooseus} 
              alt="Team collaboration" 
              className="w-full h-3/4 rounded-2xl object-cover"
            />
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className="w-full md:w-1/2 mx-2">
          {/* Heading section */}
          <div className="mb-6">
            <p className="text-blue-600 font-medium mb-2">WHY CHOOSE US</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              We Have The Expertise To Transform Your Vision Into A Flawless Celebration.
            </h2>
            <p className="mt-4 text-gray-600">
              At Ozel Events, we combine creativity, precision, and dedication to make every event exceptional. 
              From planning to execution, our tailored approach ensures your unique needs are met with elegance.
            </p>
          </div>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`${feature.bgColor} ${feature.textColor} p-6 rounded-3xl`}
              >
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className={`${feature.bgColor === 'bg-blue-950' ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}