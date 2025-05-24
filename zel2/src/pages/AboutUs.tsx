import Aboutus1 from "../components/Aboutus1";
import Aboutus2 from "../components/Aboutus2";
import Aboutus3 from "../components/Aboutus3";
import BackgroundWithOverlay from "../components/BackgroundWithOverlay";
import EventShowcase from "../components/EventShowcase";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ServiceCards from "../components/ServiceCards";

const AboutUs =()=>{

return(
    <div className="min-h-full w-screen">
        <div className="flex flex-col">
            <BackgroundWithOverlay>
                <Navbar/>
            </BackgroundWithOverlay>
            <Aboutus1/>
            <Aboutus2/>
            <ServiceCards/>
            <EventShowcase/>
            <Aboutus3/>
            <Footer/>

        </div>
    </div>

);
}
export default AboutUs;