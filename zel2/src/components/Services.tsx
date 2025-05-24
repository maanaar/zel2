import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronDown, ChevronRight, Star} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  bookings: number;
  duration: string;
  contactText: string;
  partners: string[];
}

const sharedCapacities = [
  { label: '200-500 people', price: 3200 },
  { label: '500-1000 people', price: 4200 },
  { label: '1000-5000 people', price: 5200 },
  { label: '5000-10000 people', price: 7000 },
];

export default function Services() {
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
      partners: ['Hilton', 'Four Seasons', 'Marriott', 'conrad']
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
      partners: ['EGYLUX', 'Siraj', 'Huda', 'Delta']
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
      partners: ['Egypt Hosting', 'Imex', 'Nile Youth', 'City Net']
    },
    {
      id: '5',
      name: 'Catering',
      description: 'Delicious food options to satisfy your guests from breakfast to dinner service',
      price: 10000,
      image: '../../src/assets/catering.jpeg',
      rating: 5,
      bookings: 130,
      duration: '6-8 hours',
      contactText: 'Our experienced event was a huge success. Thanks to the exceptional planning and attention to detail. I was extremely pleased with the service coordinator and the event flow!',
      partners: ['Crave', 'Sedra', 'Stills by gabys', 'Blbaa']
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
      partners: ['Antikka', 'Farah', 'Ghazal', 'moments']
    }
  ];

  const [services] = useState<Service[]>(staticServices);
  const [filteredServices, setFilteredServices] = useState<Service[]>(staticServices);
  const [selectedServiceType, setSelectedServiceType] = useState('All Services');
  const [featuredService, setFeaturedService] = useState<Service | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [typeDropdownOpen, setTypeDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const [selectedCapacities, setSelectedCapacities] = useState<Record<string, string>>({});
  const [showPartnerFilter, setShowPartnerFilter] = useState(false);
  const [selectedPartnerFilters, setSelectedPartnerFilters] = useState<string[]>([]);
  const navigate = useNavigate();
  // Get all unique partners from all services
  const allPartners = Array.from(new Set(staticServices.flatMap(service => service.partners)));

  const serviceTypes = ['All Services', ...Array.from(new Set(staticServices.map(s => s.name)))];

  const handleServiceTypeChange = (type: string) => {
    setSelectedServiceType(type);
    setFilteredServices(type === 'All Services' ? services : services.filter(s => s.name === type));
  };

  const navigateCarousel = (direction: 'next' | 'prev') => {
    if (!services.length) return;
    setCarouselIndex((prev) => direction === 'next' ? (prev + 1) % services.length : (prev - 1 + services.length) % services.length);
  };

  useEffect(() => { 
    if (services.length) setFeaturedService(services[carouselIndex]); 
  }, [carouselIndex, services]);
  
  useEffect(() => { 
    if (services.length) setFeaturedService(services[0]); 
  }, [services]);
  
  useEffect(() => { 
    setSelectedPartnerFilters([]); 
  }, [selectedService]);

  const renderStars = (rating: number) => (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill={i < rating ? '#FFD700' : 'none'} color={i < rating ? '#FFD700' : '#D3D3D3'} />
      ))}
    </div>
  );

 return (
  <div className="bg-gray-50 p-4 w-full max-w-6xl mx-auto">
    {selectedService ? (
      <div>
        <div className="mb-4 flex justify-end items-center">
          <div className='flex flex-row justify-end'>
          <button className='mx-64' onClick={() => setSelectedService(null)}>
            ← Back to Services
          </button>
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-600">Change Service:</label>
            <select
              value={selectedService.name}
              onChange={(e) => {
                const newService = services.find(s => s.name === e.target.value);
                if (newService) setSelectedService(newService);
              }}
              className="px-2 py-1 text-sm border border-gray-300 rounded-md"
            >
              {services.map((service) => (
                <option key={service.id} value={service.name}>{service.name}</option>
              ))}
            </select>
          </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {selectedService.partners.map((partner, index) => {
            const selectedLabel = selectedCapacities[partner] || sharedCapacities[0].label;
            const selectedPrice = sharedCapacities.find(cap => cap.label === selectedLabel)?.price || 0;

            return (
              <div key={index} className="flex flex-col lg:flex-row bg-white rounded-xl shadow p-4 gap-6">
                <div className="relative w-full lg:w-1/2">
                  <img
                    src={`../../src/assets/${partner.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                    alt={partner}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-md shadow text-center w-4/5">
                    <h3 className="text-lg font-semibold text-gray-800">{partner}</h3>
                    <p className="text-xs text-gray-500">Explore your audience with entertainment options.</p>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-between pt-4 lg:pt-0">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <label className="text-sm font-medium text-gray-600">Capacity</label>
                        <select
                          className="block mt-1 px-3 py-1 border border-gray-300 rounded-md text-sm"
                          value={selectedLabel}
                          onChange={(e) =>
                            setSelectedCapacities(prev => ({ ...prev, [partner]: e.target.value }))
                          }
                        >
                          {sharedCapacities.map((cap, i) => (
                            <option key={i} value={cap.label}>{cap.label}</option>
                          ))}
                        </select>
                      </div>
                      <div className="text-purple-700 font-bold text-2xl">${selectedPrice}</div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-2">
                      <strong>Customer 1:</strong> "{selectedService.contactText}"
                    </p>
                    
                    <div>{renderStars(selectedService.rating)}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <>
        {/* Featured Service */}
        <div className="relative mb-6">
          <div className="bg-purple-100 rounded-xl overflow-hidden">
            <img
              src={featuredService?.image || '/api/placeholder/800/600'}
              alt={featuredService?.name || 'Featured service'}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-48 bg-purple-900/30" />
            <div className="absolute bottom-4 left-0 w-full text-center">
              <h2 className="text-white text-2xl font-bold">{featuredService?.name || 'Services'}</h2>
            </div>
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/60 p-1 rounded-full hover:bg-white/80"
              onClick={() => navigateCarousel('prev')}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/60 p-1 rounded-full hover:bg-white/80"
              onClick={() => navigateCarousel('next')}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex justify-between items-center">
          <div className="relative">
            <button
              className="bg-white px-4 py-2 rounded-md border border-gray-300 flex items-center"
              onClick={() => setTypeDropdownOpen(!typeDropdownOpen)}
            >
              {selectedServiceType} <ChevronDown size={16} className="ml-1" />
            </button>
            {typeDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md z-10 border border-gray-100 w-48">
                {serviceTypes.map((type) => (
                  <div
                    key={type}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      handleServiceTypeChange(type);
                      setTypeDropdownOpen(false);
                    }}
                  >
                    {type}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="text-sm text-gray-500">
            Showing {filteredServices.length} of {services.length} services
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative">
                <img src={service.image} alt={service.name} className="w-full h-64 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3">
                  <h3 className="text-white text-lg font-medium">{service.name}</h3>
                </div>
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-600 h-12">{service.description}</p>
                <div className="mt-2 font-thin">
                  {service.partners.map((partner, index) => (
                    <span key={index} className='mx-2'>
                      {partner}  
                    </span>
                  ))}
                </div>
                <div className="mt-2 text-xs text-gray-600">{service.contactText}</div>
                <div className="mt-3">{renderStars(service.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    )}
  </div>
);
}