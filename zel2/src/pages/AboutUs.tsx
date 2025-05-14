import BackgroundWithOverlay from "../components/BackgroundWithOverlay";
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
            <ServiceCards/>
            <Footer/>

        </div>
    </div>

);
}
export default AboutUs;