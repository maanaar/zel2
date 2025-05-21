import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
const staticServices: Service[] = [
    {
      id: '1',
      name: 'Planning',
      description: 'Professional planning services to organize all aspects of your event',
      price: 3000,
      image: '../../src/assets/planing.jpeg',
      rating: 5,
      bookings: 120,
      duration: '2-3 weeks',
      contactText: 'Our experienced event has a huge success. Thanks to the exceptional planning and attention to detail. I was extremely pleased with the service coordinator and the event flow!',
      partners: ['EventMasters', 'PlanPerfect', 'OrganizeIt', 'LuxuryPlanning']
    },
    {
      id: '2',
      name: 'Venue',
      description: 'Find the perfect venue for your events, from intimate gatherings to grand celebrations',
      price: 20000,
      image: '../../src/assets/venue.jpeg',
      rating: 5,
      bookings: 85,
      duration: '4-5 hours',
      contactText: 'Our experienced event was a huge success. Thanks to the exceptional planning and attention to detail. I was extremely pleased with the service coordinator and the event flow!',
      partners: ['Hilton', 'Four Seasons', 'Marriott', 'Omni Hotels']
    },
    {
      id: '3',
      name: 'Lighting',
      description: 'Set the mood with the latest lighting technology for your special event',
      price: 5000,
      image: '../../src/assets/lighting.jpeg',
      rating: 5,
      bookings: 95, 
      duration: '5-6 hours',
      contactText: 'Our experienced event was a huge success. Thanks to the exceptional planning and attention to detail. I was extremely pleased with the service coordinator and the event flow!',
      partners: ['LightCraft', 'IlluminateEvents', 'BrightIdeas', 'MoodLighting']
    },
    {
      id: '4',
      name: 'Hosting',
      description: 'Professional hosts to guide your event and keep everything on schedule',
      price: 2500,
      image: '../../src/assets/hosting.jpeg',
      rating: 5,
      bookings: 110,
      duration: '4-5 hours',
      contactText: 'Our experienced event was a huge success. Thanks to the exceptional planning and attention to detail. I was extremely pleased with the service coordinator and the event flow!',
      partners: ['SpeakEasy', 'HostingPros', 'EventMCs', 'ElegantEmcees']
    },
    {
      id: '5',
      name: 'Catering',
      description: 'Delicious food options to satisfy your guests from breakfast to dinner service',
      price: 10000,
      image: '/../../src/assets/catering.jpeg',
      rating: 5,
      bookings: 130,
      duration: '6-8 hours',
      contactText: 'Our experienced event was a huge success. Thanks to the exceptional planning and attention to detail. I was extremely pleased with the service coordinator and the event flow!',
      partners: ['TasteBuds', 'GourmetEvents', 'DeliciousMoments', 'ElegantCatering']
    },
    {
      id: '6',
      name: 'Photography',
      description: 'Capture beautiful memories of your special event with our professional photographers',
      price: 3000,
      image: '../../src/assets/marketing.jpeg',
      rating: 5,
      bookings: 115,
      duration: '4-6 hours',
      contactText: 'Our experienced event was a huge success. Thanks to the exceptional planning and attention to detail. I was extremely pleased with the service coordinator and the event flow!',
      partners: ['ClickPerfect', 'MemoryCapture', 'LensMasters', 'EventPhotos']
    }
  ];
const servicesData = {
  Venue: [
    {
      name: "Hilton",
      image: "../../src/assets/hilton.jpg",
      price: 3200,
      rating: 5,
      review: "Our corporate event was a huge success...",
    },
    {
      name: "Four Seasons",
      image: "../../src/assets/fourseasons.jpg",
      price: 3200,
      rating: 5,
      review: "Premium service and beautiful location...",
    },
    // Add more venues...
  ],
  Hosting: [
    {
      name: "Marriott Hosting",
      image: "../../src/assets/hilton.jpgmarriott.jpg",
      price: 2500,
      rating: 4,
      review: "Flawless execution of hosting needs...",
    },
    // Add more hosting examples...
  ],
  Catering: [
    {
      name: "Hilton Catering",
      image: "/images/hilton-catering.jpg",
      price: 1500,
      rating: 5,
      review: "Delicious food and on-time service...",
    },
    // Add more catering examples...
  ],
  // Add other services...
};

type ServiceType = keyof typeof servicesData;

export default function Partners() {
  const [selectedService, setSelectedService] = useState<ServiceType>("Venue");

  return (
    <div className="flex">
      {/* Sidebar Filters */}
      <aside className="w-1/4 p-4 bg-gray-100 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Filter By</h2>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value as ServiceType)}
        >
          {Object.keys(servicesData).map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </aside>

      {/* Content Area */}
      <main className="w-3/4 p-4 space-y-6">
        {servicesData[selectedService].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 border rounded shadow bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-48 h-32 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.review}</p>
              <div className="flex items-center mt-2">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                ))}
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold">{item.price}₺</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
