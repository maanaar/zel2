import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import zel from '../../src/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0b1e39] text-white py-10 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5 md:px-0">
        
        <div>
          <img src={zel} alt="Logo" className="mb-4 w-28 to-white" />
          <p className="text-sm">
            Established in 2024, Ozel Events is one of the leading event management companies based in Alexandria, Egypt. We create seamless, memorable, and extraordinary events tailored to your needs.
          </p>
          <p className="mt-4 text-sm">
            📧 ozelevents6@gmail.com <br />
            📞 +20 10 11760137
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:underline flex items-center gap-2"><IoIosArrowForward /> Homepage</a></li>
            <li><a href="#about" className="hover:underline flex items-center gap-2"><IoIosArrowForward /> About Us</a></li>
            <li><a href="#services" className="hover:underline flex items-center gap-2"><IoIosArrowForward /> Our Services</a></li>
            <li><a href="#events" className="hover:underline flex items-center gap-2"><IoIosArrowForward /> Our Events</a></li>
            <li><a href="#contact" className="hover:underline flex items-center gap-2"><IoIosArrowForward /> Contact Us</a></li>
          </ul>
        </div>

        {/* <div>
          <h3 className="font-semibold mb-4">Usefull Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#disclaimer" className="hover:underline flex items-center gap-2"><IoIosArrowForward /> Disclaimer</a></li>
            <li><a href="#privacy" className="hover:underline flex items-center gap-2"><IoIosArrowForward /> Privacy Policy</a></li>
            <li><a href="#terms" className="hover:underline flex items-center gap-2"><IoIosArrowForward /> Term Of Service</a></li>
            <li><a href="#refund" className="hover:underline flex items-center gap-2"><IoIosArrowForward /> Refund Guarantee</a></li>
            <li><a href="#payment" className="hover:underline flex items-center gap-2"><IoIosArrowForward /> Payment Method</a></li>
          </ul>
        </div> */}

        <div>
          <h3 className="font-semibold mb-4">Follow Us On Social Media</h3>
          <p className="text-sm mb-4">
            Stay connected with us on social media for updates, tips, and event inspiration.
          </p>
          <div className="flex space-x-4">
            <FaFacebookF className="cursor-pointer hover:text-[#3b5998]" size={20} />
            <FaInstagram className="cursor-pointer hover:text-[#e4405f]" size={20} />
            <FaYoutube className="cursor-pointer hover:text-[#ff0000]" size={20} />
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-600 mt-8">
        <p className="text-center py-4 text-sm">
          ALL RIGHTS RESERVED - OZEL EVENTS
        </p>
      </div>
    </footer>
  );
};

export default Footer;