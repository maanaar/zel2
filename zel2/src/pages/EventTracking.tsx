import BackgroundWithOverlay from "../components/BackgroundWithOverlay";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tracking from "../components/Tracking";

const EventTracking =()=>{

return(
        <div className="min-h-full w-screen">
            <div className="flex flex-col">
                <BackgroundWithOverlay>
                    <Navbar/>
                </BackgroundWithOverlay>
                <Tracking/>
                <Footer/>
            </div>
        </div>
);
};
export default EventTracking;