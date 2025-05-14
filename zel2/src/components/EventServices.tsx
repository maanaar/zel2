import React from 'react';
import bg from '../../src/assets/venuebg.jpeg';

const EventServices: React.FC = () => {
  const services = [
    {
      title: 'Venue',
      description: 'Choose your ideal venue with enchantment and function.',
      img: '/path/to/venue.jpg',
    },
    {
      title: 'Event Catering And Culinary Services',
      description: 'Delight every event with exceptional culinary excellence.',
      img: '/path/to/catering.jpg',
    },
    {
      title: 'Event Marketing And Promotion',
      description: 'Boost awareness of your event with professional marketing strategies.',
      img: '/path/to/marketing.jpg',
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center text-white py-16 px-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#588AB0] to-[#383838] [--tw-gradient-to-position:30%] opacity-75 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] max-w-5xl mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-start md:space-x-4 my-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:w-2/3">
            From Concept To Celebration: Our<br /> Comprehensive Event Services.
          </h1>
          <p className="text-base md:w-1/3 my-auto">
            Our team offers a wide range of tailored services to ensure your event is unforgettable. From conceptual design to onsite execution, we master every detail.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-row justify-center gap-6 my-6 px-4 md:px-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black p-4 rounded-lg shadow-md w-80"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="mt-8 bg-white text-[#030C37] py-2 px-6 rounded-full hover:bg-purple-700 transition">
          See More
        </button>
      </div>
    </div>
  );
};

export default EventServices;
