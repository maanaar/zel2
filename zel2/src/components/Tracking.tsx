import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type ServiceStatus = 'In Progress' | 'Not Ready' | 'Done';

type Service = {
  name: string;
  status: ServiceStatus;
};

type Event = {
  id: number;
  title: string;
  eventSent: boolean;
  services: Service[];
  completed: boolean;
};

interface EventTrackingInterfaceProps {
  isLoggedIn?: boolean;
  userEmail?: string | null;
}

const staticEvents: Event[] = [
  {
    id: 1,
    title: "Event 1 Tracking",
    eventSent: true,
    services: [
      { name: "Planning", status: "In Progress" },
      { name: "Catering", status: "Not Ready" },
      { name: "Photography", status: "Not Ready" },
      { name: "Lighting", status: "Not Ready" },
      { name: "Hosting", status: "Not Ready" },
      { name: "Venue", status: "Done" },
    ],
    completed: false,
  },
  {
    id: 2,
    title: "Event 2 Tracking",
    eventSent: true,
    services: [
      { name: "Planning", status: "In Progress" },
      { name: "Catering", status: "Not Ready" },
      { name: "Venue", status: "Done" },
    ],
    completed: false,
  },
];

export default function EventTrackingInterface({ 
  isLoggedIn: propIsLoggedIn, 
  userEmail: propUserEmail 
}: EventTrackingInterfaceProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    // Use props first, then fall back to localStorage
    const email = propUserEmail || localStorage.getItem('userEmail');
    const loggedIn = propIsLoggedIn !== undefined ? propIsLoggedIn : !!localStorage.getItem('token');
    
    setIsLoggedIn(loggedIn);
    setUserEmail(email);

    if (!loggedIn || !email) {
      setLoading(false);
      return;
    }

    const fetchEvents = async () => {
      if (email === 'test@example.com') {
        setEvents(staticEvents);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/events?email=${encodeURIComponent(email)}`);
        const userEvents: Event[] = await response.json();
        setEvents(userEvents || []);
      } catch (error) {
        console.error('Error fetching events:', error);
        // Fallback to static events for demo
        setEvents(staticEvents);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [propIsLoggedIn, propUserEmail]);

  const getStatusColor = (status: ServiceStatus) => {
    switch (status) {
      case 'In Progress':
      case 'Not Ready':
        return 'text-red-500';
      case 'Done':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-900"></div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Login Required</h2>
        <p className="text-lg text-gray-700 mb-6">You must be logged in to track your events.</p>
        <Link
          to="/login"
          className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition text-lg font-medium"
        >
          Go to Login
        </Link>
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">No Events Found</h2>
        <p className="text-lg text-gray-700 mb-6">
          Welcome {userEmail}! You don't have any events yet.
        </p>
        <Link
          to="/create"
          className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition text-lg font-medium"
        >
          Create Your First Event
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Event Tracking</h1>
          <p className="text-gray-600">Welcome back, {userEmail}!</p>
        </div>

        {/* Events */}
        <div className="flex flex-col space-y-8">
          {events.map((event) => (
            <div key={event.id} className="overflow-hidden shadow-lg rounded-2xl">
              <div className="bg-purple-900 text-white text-center py-4 font-medium text-lg">
                {event.title}
              </div>
              <div className="bg-white p-6">
                {/* Step 1 */}
                <div className="flex items-start space-x-5 mb-4">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-xs text-white">
                      ✓
                    </div>
                    <div className="w-0.5 h-16 bg-gray-300 mt-1"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-green-500 font-medium text-lg">1. Event Sent</p>
                    <p className="text-gray-700 ml-4 mt-2">Your event has been successfully sent.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start space-x-5 mb-4">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border-2 border-orange-400 bg-orange-100 flex items-center justify-center text-xs text-orange-600">
                      ⦿
                    </div>
                    <div className="w-0.5 h-32 bg-gray-300 mt-1"></div>
                  </div>
                  <div className="flex-1">
                    <p className="text-orange-600 font-medium text-lg">2. In Progress</p>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-2 mt-3 ml-4">
                      {event.services.map((service, index) => (
                        <div key={index} className="flex justify-between items-center py-1">
                          <span className="text-gray-700">{service.name}</span>
                          <span className={`font-medium ${getStatusColor(service.status)}`}>
                            {service.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start space-x-5">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center text-xs text-gray-400">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 font-medium text-lg">3. Completed</p>
                    <p className="text-gray-700 ml-4 mt-2">Awaiting all services to be complete...</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="text-center mt-8 space-x-4">
          <Link
            to="/create"
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition"
          >
            Create New Event
          </Link>
          
        </div>
      </div>
    </div>
  );
}