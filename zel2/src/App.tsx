import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './pages/RegestrationForm';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';
import SignUp from './pages/Signup';
import PaymentForm from './pages/PaymentForm';
import Event_home from './pages/Event_home';
import AboutUs from './pages/AboutUs';
import CreateEvent from './pages/CreateEvent';
import EventTracking from './pages/EventTracking';
import Partners_services from './pages/partners_services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path='/home' element={<Event_home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/create' element={<CreateEvent/>}/>
        <Route path='/myevents' element={<EventTracking/>}/>
        <Route path='/services' element={<Partners_services/>}/>

      </Routes>
    </Router>
  );
}

export default App;
