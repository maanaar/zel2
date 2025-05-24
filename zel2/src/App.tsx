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
import Partners_services from './pages/Partners_Services';
import ContactUs from './pages/ContactUs';
import Ourprojects from './pages/Ourprojects';
import { useEffect, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  // Check initial login status on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('userEmail');
    
    if (token && email) {
      setIsLoggedIn(true);
      setUserEmail(email);
    }
  }, []);

  // Handle login status changes from Login component
  const handleLoginStatusChange = (loginStatus, email = null) => {
    setIsLoggedIn(loginStatus);
    
    if (loginStatus && email) {
      setUserEmail(email);
      localStorage.setItem('userEmail', email);
    } else if (!loginStatus) {
      setUserEmail(null);
      localStorage.removeItem('userEmail');
      localStorage.removeItem('token');
    }
    
    // Optional: Send to analytics/tracking service
    console.log('Login status changed:', { isLoggedIn: loginStatus, email });
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<Login onLoginStatusChange={handleLoginStatusChange}
                isLoggedIn={isLoggedIn}
                userEmail={userEmail}
                 />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path='/home' element={<Event_home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/create' element={<CreateEvent/>}/>
        <Route path='/myevents' element={<EventTracking isLoggedIn={isLoggedIn}
                userEmail={userEmail}/>}/>
        <Route path='/services' element={<Partners_services/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/ourprojects' element={<Ourprojects/>}/>
      </Routes>
    </Router>
  );
}

export default App;
