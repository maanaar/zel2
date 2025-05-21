import BackgroundWithOverlay from "../components/BackgroundWithOverlay";
import EventForm from "../components/EventForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const CreateEvent =()=>{

return(
        <div className="min-h-full w-screen">
            <div className="flex flex-col">
                <BackgroundWithOverlay>
                    <Navbar/>
                </BackgroundWithOverlay>
                <EventForm/>
                <Footer/>
            </div>
        </div>
    );
};
export default CreateEvent ;