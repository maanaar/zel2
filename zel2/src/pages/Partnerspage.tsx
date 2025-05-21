import BackgroundWithOverlay from "../components/BackgroundWithOverlay";
import EventForm from "../components/EventForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Services from "../components/Services";


const Partners_services=()=>{

return(
        <div className="min-h-full w-screen">
            <div className="flex flex-col">
                <BackgroundWithOverlay>
                    <Navbar/>
                </BackgroundWithOverlay>
                <Partners/>
                <Footer/>
            </div>
        </div>
    );
};
export default Partners_services ;