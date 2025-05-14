import BackgroundWithOverlay from "../components/BackgroundWithOverlay";
import CallToActionBanner from "../components/CallToActionBanner";
import EventShowcase from "../components/EventShowcase";
import ExperienceSection from "../components/ExperienceSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceCards from "../components/ServiceCards";
import Steps from "../components/Steps";
import WhyChooseUs from "../components/WhyChooseUS";
import EventServices from "../components/EventServices";

const Event_home =()=>{

return(
        <div className="min-h-full w-screen">
            <div className="flex flex-col">
                <BackgroundWithOverlay>
                    <Navbar/>
                </BackgroundWithOverlay>
                <ServiceCards/>
                <ExperienceSection/>
                <EventServices/>
                <Steps/>
                <EventShowcase/>
                <WhyChooseUs/>
                <CallToActionBanner/>
                <Footer/>
            </div>
        </div>

);
};

export default Event_home;