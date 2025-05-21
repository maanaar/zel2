import { useState } from 'react';

// Define types for our event tracking data
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

export default function EventTrackingInterface() {
  // Initial event data based on the image
  const [events, setEvents] = useState<Event[]>([
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
    }
  ]);

  // Function to get status color
  const getStatusColor = (status: ServiceStatus) => {
    switch (status) {
      case 'In Progress':
        return 'text-red-500';
      case 'Not Ready':
        return 'text-red-500';
      case 'Done':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="flex flex-col space-y-8 w-full w-full px-16 my-8 mx-auto">
      {events.map((event) => (
        <div key={event.id} className="overflow-hidden shadow-md">
          {/* Header - now more separated with extra rounded corners */}
          <div className="bg-purple-900 text-white text-center py-4 rounded-2xl font-medium text-lg mb-3">
            {event.title}
          </div>
          
          <div className="bg-white p-6 rounded-2xl border border-gray-200">
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
                <p className="text-gray-700 ml-4 mt-2">your event has been successfully sent.</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex items-start space-x-5 mb-4">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center text-xs text-gray-400">
                  ⦿
                </div>
                <div className="w-0.5 h-32 bg-gray-300 mt-1"></div>
              </div>
              <div className="flex-1">
                <p className="text-gray-700 font-medium text-lg">2. In Progress</p>
                <div className="grid grid-cols-2 gap-x-12 gap-y-2 mt-3 ml-4">
                  {event.services.map((service, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-700">{service.name}</span>
                      <span className={getStatusColor(service.status)}>
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
                <p className="text-gray-700 ml-4 mt-2">awaiting all services to be complete...</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}