import { useEffect, useState } from "react";
import axios from "axios";

const staticServices = [
  {
    title: "Event Planning",
    description: "We bring your vision to life with seamless planning from start to finish.",
    icon: "💡",
  },
  {
    title: "Virtual Event Solutions",
    description: "Host impactful virtual events with innovative solutions.",
    icon: "🔗",
  },
  {
    title: "In-Person Events",
    description: "Tailored services for unforgettable conferences and celebrations.",
    icon: "👥",
  },
];

const ServiceCards = () => {
  const [services, setServices] = useState(staticServices);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("https://api.example.com/services");
        if (response.data.length > 0) {
          setServices(response.data);
        }
      } catch (err) {
        setError("Failed to load services from API.");
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="bg-white grid md:grid-cols-3 gap-6 px-8 py-12 mx-12 ">
      {services.map((service, index) => (
        <div
          key={service.id || index}
          className={`rounded-2xl p-6 shadow-lg mx-9  ${
            index === 0 ? "bg-[#0D0D44] text-white" : "bg-white text-black"
          }`}
        >
          <div className="text-3xl mb-4">{service.icon || "ℹ️"}</div>
          <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
          <p className="text-sm">{service.description}</p>
          <button className="mt-4 text-sm font-semibold underline hover:text-blue-500">
            Learn More →
          </button>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
