import React from 'react';
import {
  MapPin,
  Mail,
  Phone
} from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="relative z-10 pt-24 pb-12 px-4 md:px-12 bg-[#0B0D3F] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#0B0D3F] rounded-3xl overflow-hidden shadow-xl">

        {/* Left - Form */}
        <div className="p-8 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Leave A Message For Personalized Expert Guidance.
          </h2>
          <p className="text-sm text-gray-300">
            Got questions or need assistance? Our team is here to help you create unforgettable events.
          </p>
          <form className="space-y-6">

            {/* Name fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-white mb-1">First Name</label>
                <input type="text" placeholder="Eg. Ahmed" className="custom-input" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-white mb-1">Last Name</label>
                <input type="text" placeholder="Eg. Nabil" className="custom-input" />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm text-white mb-1">Email</label>
              <input type="email" placeholder="Email" className="custom-input" />
            </div>

            {/* Subject */}
            <div className="flex flex-col">
              <label className="text-sm text-white mb-1">Subject</label>
              <input type="text" placeholder="Eg. Services" className="custom-input" />
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label className="text-sm text-white mb-1">Your Message</label>
              <textarea placeholder="Your message..." className="custom-input h-32 resize-none" />
            </div>

            {/* Submit */}
            <button type="submit" className="bg-white text-[#0B0D3F] font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">
              SEND MESSAGE
            </button>
          </form>
        </div>

    <div
      className="relative bg-cover bg-center rounded-3xl overflow-hidden"
      style={{ backgroundImage: 'url(../../src/assets/contact.jpeg)' }}
    >
      <div className="bg-[#0B0D3F]/40 backdrop-blur-sm p-8 text-white h-full w-full">
        <p className="uppercase text-xs tracking-widest text-gray-300 mb-2">Contact Information</p>
        <h3 className="text-2xl font-semibold leading-snug mb-3">
          Let's Meet With Us Whether<br />
          You're Ready To Start Planning<br />
          Your Next Event
        </h3>
        <p className="text-sm text-gray-300 mb-6 max-w-md">
          We’d love to discuss how we can make your vision a reality. Reach out to us or visit one of our offices.
        </p>

        <div className="space-y-32 text-sm">
          <div className="flex items-start gap-8">
            <div className='flex flex-row'>
            <MapPin className="text-white mt-1" size={18} />
            <div>
              <p className="font-semibold">Head Office</p>
              <p className="text-gray-300">kafr abdu, alexandria, egypt.</p>
            </div>
          </div>

          <div className="flex items-start gap-8">
            <MapPin className="text-white mt-1" size={18} />
            <div>
              <p className="font-semibold">Secondary Office</p>
              <p className="text-gray-300">downtown plaza, cairo, egypt.</p>
            </div>
          </div>
          </div>
          <div className='flex flex-row space-x-8'>
          <div className="flex items-start gap-8">
            <Mail className="text-white mt-1" size={18} />
            <div>
              <p className="font-semibold">Email Address</p>
              <p className="text-gray-300">ozelevents6@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-8">
            <Phone className="text-white mt-1" size={18} />
            <div>
              <p className="font-semibold">Telephone</p>
              <p className="text-gray-300">+20 10 11760137</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  

      </div>
    </section>
  );
};

export default ContactSection;
