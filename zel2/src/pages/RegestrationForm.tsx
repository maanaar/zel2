import React, { useState } from 'react';
import zel from '../../src/assets/logo.png';
import bg from '../../src/assets/bg.jpeg';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


interface FormData {
  organizationName: string;
  email: string;
  phoneNumber: string;
  tin: string;
  category: string;
  location: string;
  priceRange: string;
  healthCertificate: string | null;
}

interface CapacityPricing {
  capacityRange: string;
  price: string;
}

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    organizationName: '',
    email: '',
    phoneNumber: '',
    tin: '',
    category: '',
    location: '',
    priceRange: '',
    healthCertificate: null,
  });

  const [pricingByCapacity, setPricingByCapacity] = useState<CapacityPricing[]>([
    { capacityRange: '', price: '' },
  ]);

  const locations = ["Location 1", "Location 2", "Location 3"];
  const categories = ["Category 1", "Category 2", "Category 3"];
  const capacityRanges = ["200-500", "500-1000", "1000-5000", "5000-10000"];

  const navigate =useNavigate();
  const validatePhoneNumber = (phone: string) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const {
    organizationName,
    email,
    phoneNumber,
    tin,
    category,
    location,
    healthCertificate,
  } = formData;

  if (
    !organizationName ||
    !email ||
    !phoneNumber ||
    !tin ||
    !category ||
    !location ||
    !healthCertificate
  ) {
    alert("Please fill in all fields and upload a health certificate.");
    return;
  }

  if (!validatePhoneNumber(phoneNumber)) {
    alert('Please enter a valid phone number.');
    return;
  }

  if (pricingByCapacity.some(p => !p.capacityRange || !p.price)) {
    alert("Please complete all pricing by capacity fields.");
    return;
  }

  const payload = {
    ...formData,
    pricingByCapacity,
  };

  try {
    const response = await fetch('https://your-backend.com/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error('Failed to submit form');

    const result = await response.json();
    alert('Form submitted successfully!');
    console.log('Server response:', result);
  } catch (error) {
    console.warn("API unavailable. Saving locally instead...");
    // Save to localStorage if API fails
    const existing = localStorage.getItem('pendingRegistrations');
    const stored = existing ? JSON.parse(existing) : [];
    stored.push(payload);
    localStorage.setItem('pendingRegistrations', JSON.stringify(stored));
    alert('Saved locally. Will try again when online or with API.');
  }

  // Reset form
  setFormData({
    organizationName: '',
    email: '',
    phoneNumber: '',
    tin: '',
    category: '',
    location: '',
    priceRange: '',
    healthCertificate: null,
  });
  setPricingByCapacity([{ capacityRange: '', price: '' }]);
};


  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (['pdf', 'jpg', 'jpeg', 'png'].includes(ext || '')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, healthCertificate: reader.result as string });
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please upload a valid image or PDF file.');
      }
    }
  };

  return (
    <div className='w-full'>
      <div
        className="flex items-center justify-center min-h-full w-screen"
        style={{
          backgroundColor: "#1C1C3F",
          backgroundImage: `
            linear-gradient(to bottom right, #70296B 67%, #F90DD2 100%),
            url(${bg})`,
          backgroundBlendMode: "overlay",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        
        <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-4xl flex  relative mx-4 my-2">
          
        <div className="text-center mb-6">
          <div className='flex flex-row'>
            <button type="button" className='text-navy-900 mt-1' onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2" /> 
          </button>
              <h1 className="text-3xl font-bold text-purple-900">Registration Form</h1>
            </div>
            <img src={zel} alt="Zel Logo" className="w-128 mx-auto mt-4" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mx-32 my-16">
            {/* Organization Name */}
            <div>
              <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-1">
                Organization Name
              </label>
              <input
                id="organizationName"
                type="text"
                value={formData.organizationName}
                onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Organization Email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value="+62"
                  readOnly
                  className="w-16 px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
                <input
                  id="phone"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="8313765626"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* TIN */}
            <div>
              <label htmlFor="tin" className="block text-sm font-medium text-gray-700 mb-1">
                TIN
              </label>
              <input
                id="tin"
                type="text"
                value={formData.tin}
                onChange={(e) => setFormData({ ...formData, tin: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select category</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="">Select location</option>
                {locations.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>

            {/* Health Certificate Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Health Certificate (Image/PDF)
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="healthCertificate"
                />
                <button
                  type="button"
                  onClick={() => document.getElementById('healthCertificate')?.click()}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Upload File
                </button>
                {formData.healthCertificate && (
                  <span className="text-green-600 text-sm">Uploaded ✅</span>
                )}
              </div>
              {formData.healthCertificate && (
                <img
                  src={formData.healthCertificate}
                  alt="Certificate Preview"
                  className="mt-4 max-w-xs max-h-40 rounded-md shadow"
                />
              )}
            </div>

            

            {/* Pricing By Capacity */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pricing Based on Capacity
              </label>
              {pricingByCapacity.map((entry, index) => (
                <div key={index} className="flex items-center gap-4 mb-2">
                  <select
                    value={entry.capacityRange}
                    onChange={(e) => {
                      const updated = [...pricingByCapacity];
                      updated[index].capacityRange = e.target.value;
                      setPricingByCapacity(updated);
                    }}
                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Capacity</option>
                    {capacityRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                  <input
                    type="number"
                    placeholder="Price"
                    value={entry.price}
                    onChange={(e) => {
                      const updated = [...pricingByCapacity];
                      updated[index].price = e.target.value;
                      setPricingByCapacity(updated);
                    }}
                    className="w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const updated = pricingByCapacity.filter((_, i) => i !== index);
                      setPricingByCapacity(updated);
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setPricingByCapacity([...pricingByCapacity, { capacityRange: '', price: '' }])}
                className="text-sm text-purple-900 font-medium mt-2 hover:underline"
              >
                + Add another
              </button>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={!formData.healthCertificate}
                className="px-6 py-2 text-sm font-semibold text-white bg-purple-900 rounded-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
