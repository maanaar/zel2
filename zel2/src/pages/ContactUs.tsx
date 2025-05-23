import React from 'react';
import BackgroundWithOverlay from '../components/BackgroundWithOverlay';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const ContactUs = () => {

    return(
        <div className="min-h-full w-screen">
            <div className="flex flex-col">
                <BackgroundWithOverlay>
                    <Navbar/>
                </BackgroundWithOverlay>
                <ContactSection/>
                <Footer/>
            </div>
        </div>
    );
};
export default ContactUs;