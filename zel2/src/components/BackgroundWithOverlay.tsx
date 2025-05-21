import { useLocation } from 'react-router-dom';
import bg from '../../src/assets/bg.jpeg';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';


const BackgroundWithOverlay = ({children }) => {
  
  const location = useLocation(); // Get current route

  // Conditionally render different content based on route
  let content;

  if (location.pathname === '/services') {
    content = (
      <>
        <p className="uppercase text-sm tracking-widest mb-2">Our Services</p>
        <p className="text-5xl font-bold leading-tight mb-4">Explore our exclusive range of event services designed to make your moments unforgettable.</p>
      </>
    );

  } else if (location.pathname === '/about') {
    content = (
      <>
        <p className="uppercase text-sm tracking-widest mb-2">About Us</p>
        <p className="text-5xl font-bold leading-tight mb-4">Learn more about our journey and commitment</p>
      </>
    );
  }
  else if (location.pathname === '/create') {
    content = (
      <>
        <p className="uppercase text-sm tracking-widest mb-2">CREATE AN EVENT</p>
        <p className="text-5xl font-bold leading-tight mb-4">Lets Create Your Next Event</p>
      </>
    );
  }else if (location.pathname === '/myevents') {
    content = (
      <>
        <p className="uppercase text-sm tracking-widest mb-2">OUR EVENTS</p>
        <p className="text-5xl font-bold leading-tight mb-4">Tracking My Events</p>
      </>
    );
  } else {
    content = (
      <>
        <p className="uppercase text-sm tracking-widest mb-2">Crafting Unforgettable Moments</p>
        <h1 className="text-5xl font-bold leading-tight mb-4">Step Into A World Where Every Event Is A Masterpiece.</h1>
        <p className="text-md mb-6">
          Ozel Events brings your vision to life with elegance and innovation. From corporate events to
          product launches, we ensure every detail is flawless, creating extraordinary experiences tailored to your needs.
        </p>
        <div className="flex space-x-4">
          <button className="bg-gradient-to-tr from-[#030C37] to-[#588AB0] text-white font-semibold py-2 px-6 rounded-full">
            Our Services
          </button>
          <button className="bg-white hover:bg-gray-200 text-black font-semibold py-2 px-6 rounded-full">
            See Projects
          </button>
        </div>
      </>
    );
  }

    return (
      <div
        className="relative w-full h-screen"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-[#383838] to-[#89375F] opacity-60" />
        <div className="relative flex flex-row justify-end space-x-11 p-4">
          <h12 className='text-white'>ozelevents6@gmail.com</h12>
          <h12 className='text-white' >+20 10 11760137</h12>
          <div className="flex space-x-4 items-center">
            <FaFacebookF className="cursor-pointer hover:text-[#3b5998] text-white" size={20} />
            <FaInstagram className="cursor-pointer hover:text-[#e4405f] text-white" size={20} />
            <FaYoutube className="cursor-pointer hover:text-[#ff0000] text-white" size={20} />
          </div>
        </div>
{/*  */}
        <div className="relative z-10 mx-16  pt-6">{children}</div> 

        <div className="relative z-10 flex flex-col justify-center h-full px-16 text-white max-w-3xl">
          {content}
        </div>
     </div>
        
      // </div>
    );
  };
  
  export default BackgroundWithOverlay;