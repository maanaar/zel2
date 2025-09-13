import { useState } from "react";
import { ChevronDown, CheckCircle, AlertCircle, Loader } from "lucide-react";

type EventFormProps = {
  onSubmit?: (formData: EventFormData) => void;
  apiEndpoint?: string;
};

type EventFormData = {
  organizationName: string;
  eventType: string;
  date: string;
  time: string;
  duration: string;
  budgetCategory: string;
  location: "Cairo" | "Alexandria" | null;
  capacity: string;
  venue: string;
  catering: string;
  photography: string;
  hosting: string;
  lighting: string;
  additionalServices: {
    both: boolean;
    decoration: boolean;
    transportation: boolean;
  };
  specialRequest: string;
};

type ValidationErrors = {
  [key in keyof EventFormData]?: string;
} & {
  api?: string;
};

export default function EventForm({ onSubmit, apiEndpoint = "/api/events" }: EventFormProps) {
  const [formData, setFormData] = useState<EventFormData>({
    organizationName: "",
    eventType: "",
    date: "",
    time: "",
    duration: "3h 45m",
    budgetCategory: "",
    location: null,
    capacity: "",
    venue: "",
    catering: "",
    photography: "",
    hosting: "",
    lighting: "",
    additionalServices: {
      both: false,
      decoration: false,
      transportation: false,
    },
    specialRequest: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    
    if (!formData.organizationName.trim()) {
      newErrors.organizationName = "Organization name is required";
    }
    
    if (!formData.eventType) {
      newErrors.eventType = "Please select an event type";
    }
    
    if (!formData.date) {
      newErrors.date = "Date is required";
    }
    
    if (!formData.time) {
      newErrors.time = "Time is required";
    }
    
    if (!formData.budgetCategory) {
      newErrors.budgetCategory = "Please select a budget category";
    }
    
    if (!formData.location) {
      newErrors.location = "Please select a location";
    }
    
    if (!formData.capacity.trim()) {
      newErrors.capacity = "Capacity is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field if it exists
    if (errors[name as keyof EventFormData]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof EventFormData];
        return newErrors;
      });
    }
  };

  const handleRadioChange = (value: "Cairo" | "Alexandria") => {
    setFormData((prev) => ({ ...prev, location: value }));
    if (errors.location) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.location;
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (service: "both" | "decoration" | "transportation") => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: {
        ...prev.additionalServices,
        [service]: !prev.additionalServices[service],
      },
    }));
  };

  const handleSubmit = async () => {
    // First run client-side validation
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    setFormStatus("idle");
    
    try {
      // Call the API with form data
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || "Something went wrong");
      }
      
      const data = await response.json();
      setFormStatus("success");
      
      // Call onSubmit callback if provided
      if (onSubmit) {
        onSubmit(formData);
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
      setFormStatus("error");
      setErrors(prev => ({ 
        ...prev, 
        api: error instanceof Error ? error.message : "Failed to submit form"
      }));
    } finally {
      setIsLoading(false);
    }
  };

  const SelectField = ({ label, name, value, options }: { label: string; name: string; value: string; options?: string[] }) => (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={(e) => {
          setFormData((prev) => ({ ...prev, [name]: e.target.value }));
          // Clear error for this field if it exists
          if (errors[name as keyof EventFormData]) {
            setErrors(prev => {
              const newErrors = { ...prev };
              delete newErrors[name as keyof EventFormData];
              return newErrors;
            });
          }
        }}
        className={`w-full bg-gray-900 border ${
          errors[name as keyof EventFormData] ? "border-red-500" : "border-gray-700"
        } rounded py-2 px-3 text-white appearance-none pr-10`}
      >
        <option value="">{`Select ${label}`}</option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        <ChevronDown size={16} />
      </div>
      {errors[name as keyof EventFormData] && (
        <p className="text-red-500 text-xs mt-1">{errors[name as keyof EventFormData]}</p>
      )}
    </div>
  );

  return (
    <div className="bg-[#030C37] text-white p-6 w-full mx-auto">
      <div className="mx-24">
        <h1 className="text-2xl font-bold mb-2 ">Tell Us About Your Event</h1>
        <p className="text-gray-300 mb-6">
          Our team will work with you to bring it to life. From concept to execution, we're here to make your vision a reality.
        </p>
      </div>
      {formStatus === "success" && (
        <div className="mb-6 bg-green-900 border border-green-700 rounded-md p-4 flex items-start">
          <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
          <div>
            <h3 className="font-medium text-green-400">Success!</h3>
            <p className="text-green-300">Your event request has been submitted successfully. Our team will contact you shortly.</p>
          </div>
        </div>
      )}

      {formStatus === "error" && (
        <div className="mb-6 bg-red-900 border border-red-700 rounded-md p-4 flex items-start">
          <AlertCircle className="text-red-500 mr-3 mt-0.5 flex-shrink-0" size={18} />
          <div>
            <h3 className="font-medium text-red-400">Error</h3>
            <p className="text-red-300">{errors.api || "Failed to submit the form. Please try again later."}</p>
          </div>
        </div>
      )}

      <div className="space-y-6 mx-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Organization Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Organization Name</label>
            <input
              type="text"
              name="organizationName"
              value={formData.organizationName}
              onChange={handleChange}
              placeholder="Type Organization Name"
              className={`w-full bg-gray-900 border ${
                errors.organizationName ? "border-red-500" : "border-gray-700"
              } rounded py-2 px-3 text-white`}
            />
            {errors.organizationName && (
              <p className="text-red-500 text-xs mt-1">{errors.organizationName}</p>
            )}
          </div>

          {/* Event Type */}
          <div>
            <label className="block text-sm font-medium mb-2">Event Type</label>
            <input
              type="text"
              placeholder="Event Type"
              name="eventType"
              className={`w-full bg-gray-900 border ${
                errors.organizationName ? "border-red-500" : "border-gray-700"
              } rounded py-2 px-3 text-white`}
              value={formData.eventType}
              
            />
          </div>
        </div>

        {/* Date, Time, Duration */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Date</label>
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="March 19, 2025"
              className={`w-full bg-gray-900 border ${
                errors.date ? "border-red-500" : "border-gray-700"
              } rounded py-2 px-3 text-white`}
            />
            {errors.date && (
              <p className="text-red-500 text-xs mt-1">{errors.date}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Time</label>
            <input
              type="text"
              name="time"
              value={formData.time}
              onChange={handleChange}
              placeholder="02:00 PM"
              className={`w-full bg-gray-900 border ${
                errors.time ? "border-red-500" : "border-gray-700"
              } rounded py-2 px-3 text-white`}
            />
            {errors.time && (
              <p className="text-red-500 text-xs mt-1">{errors.time}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Duration</label>
            <SelectField
              label="Duration"
              name="duration"
              value={formData.duration}
              options={["1h", "2h", "3h", "3h 45m", "4h", "5h", "6h"]}
            />
          </div>
        </div>


        {/* Location */}
        <div>
          <label className="block text-sm font-medium mb-2">Location</label>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input
                type="radio"
                id="cairo"
                checked={formData.location === "Cairo"}
                onChange={() => handleRadioChange("Cairo")}
                className="mr-2"
              />
              <label htmlFor="cairo">Cairo</label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="alexandria"
                checked={formData.location === "Alexandria"}
                onChange={() => handleRadioChange("Alexandria")}
                className="mr-2"
              />
              <label htmlFor="alexandria">Alexandria</label>
            </div>
          </div>
          {errors.location && (
            <p className="text-red-500 text-xs mt-1">{errors.location}</p>
          )}
        </div>

        {/* Holding Capacity */}
        <div>
          <label className="block text-sm font-medium mb-2">Holding Capacity</label>
          <input
            type="text"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            placeholder="How many attendees are expected?"
            className={`w-full bg-gray-900 border ${
              errors.capacity ? "border-red-500" : "border-gray-700"
            } rounded py-2 px-3 text-white`}
          />
          {errors.capacity && (
            <p className="text-red-500 text-xs mt-1">{errors.capacity}</p>
          )}
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Venue</label>
            <SelectField label="Venue" name="venue" value={formData.venue} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Catering</label>
            <SelectField label="Catering" name="catering" value={formData.catering} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Photography</label>
            <SelectField label="Photography" name="photography" value={formData.photography} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Hosting</label>
            <SelectField label="Hosting" name="hosting" value={formData.hosting} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Lighting</label>
            <SelectField label="Lighting" name="lighting" value={formData.lighting} />
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <label className="block text-sm font-medium mb-2">Do You Want Decoration / Transportation?</label>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="both"
                checked={formData.additionalServices.both}
                onChange={() => handleCheckboxChange("both")}
                className="mr-2"
              />
              <label htmlFor="both">Both</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="decoration"
                checked={formData.additionalServices.decoration}
                onChange={() => handleCheckboxChange("decoration")}
                className="mr-2"
              />
              <label htmlFor="decoration">Decoration</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="transportation"
                checked={formData.additionalServices.transportation}
                onChange={() => handleCheckboxChange("transportation")}
                className="mr-2"
              />
              <label htmlFor="transportation">Transportation</label>
            </div>
          </div>
        </div>

        {/* Special Request */}
        <div>
          <label className="block text-sm font-medium mb-2">Any Special Request?</label>
          <textarea
            name="specialRequest"
            value={formData.specialRequest}
            onChange={handleChange}
            rows={4}
            className="w-full bg-gray-900 border border-gray-700 rounded py-2 px-3 text-white"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full flex justify-center items-center ${
              isLoading 
                ? "bg-white cursor-not-allowed" 
                : "bg-white "
            } text-blue-950 font-bold py-3 px-4 rounded-3xl transition duration-200`}
          >
            {isLoading ? (
              <>
                <Loader className="animate-spin mr-2" size={18} />
                PROCESSING...
              </>
            ) : (
              "CHECK OUT"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}