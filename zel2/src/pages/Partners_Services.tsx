import BackgroundWithOverlay from "../components/BackgroundWithOverlay";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../components/Services";


const Partners_services=()=>{

return(
        <div className="min-h-full w-screen">
            <div className="flex flex-col">
                <BackgroundWithOverlay>
                    <Navbar/>
                </BackgroundWithOverlay>
                <Services/>
                <Footer/>
            </div>
        </div>
    );
};
export default Partners_services ;