import BackgroundWithOverlay from "../components/BackgroundWithOverlay";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PortfolioShowcase from "../components/Projects";

const Ourprojects =()=>{

return(
    <div className="min-h-full w-screen">
        <div className="flex flex-col">
            <BackgroundWithOverlay>
                <Navbar/>
            </BackgroundWithOverlay>
            <PortfolioShowcase/>
            <Clients/>
            <Footer/>

        </div>
    </div>

);
}
export default Ourprojects;