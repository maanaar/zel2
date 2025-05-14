import { ArrowRight } from "lucide-react";

export default function CallToActionBanner() {
  return (
    <div className="w-full bg-blue-950 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Ready To Begin Planning Your Next Event?
        </h2>
        
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto italic">
          Let Ozel Events take the stress out of planning. Share your vision, and we'll handle the rest to create an unforgettable experience.
        </p>
        
        <button className="bg-white text-blue-950 py-3 px-6 rounded-full font-medium flex items-center mx-auto hover:bg-gray-100 transition-colors">
          GET A QUOTATION
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
}