const Clients=()=> {
  return (
        <div className="bg-gradient-to-br from-[#030C37] to-[#588AB0] text-white py-16 px-4">
        <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wide text-gray-300">Testimonials</p>
            <h2 className="text-3xl font-bold mt-2">Our Clients Testimonials And<br />Success Stories.</h2>
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
            {/* <!-- Testimonial 1 --> */}

            <div className="bg-gradient-to-br from-[#f5f3ff] to-[#faf5ff] text-gray-800 p-6 rounded-2xl max-w-md shadow-md">
            <p className="text-3xl text-[#5C6AC4] mb-2">❝</p>
            <p className="mb-6 text-[15px] leading-relaxed font-medium italic">
            Ozel Events exceeded our expectations! Their attention to detail and professionalism made our corporate gala a memorable experience. We will definitely work with them again.
            </p>
            <div className="flex flex-col items-center ">
                <div className="w-6 h-0.5 bg-[#1ca9c9] my-2"></div>
                <p className="font-bold text-gray-900">Mr. Ahmed Khalil</p>
                <p className="text-xs tracking-wide text-gray-500 uppercase mt-1">Marketing Manager, Al-Fahd Group</p>
            </div>
            </div>

            {/* <!-- Testimonial 2 --> */}
            <div className="bg-gradient-to-br from-[#f5f3ff] to-[#faf5ff] text-gray-800 p-6 rounded-2xl max-w-md shadow-md">
            <p className="text-3xl text-[#5C6AC4] mb-2">❝</p>
            <p className="mb-6 text-[15px] leading-relaxed font-medium italic">
                From planning to execution, Ozel Events delivered perfection. Our product launch event was flawless, and the team ensured everything went smoothly.
            </p>
            <div className="flex flex-col items-center ">
                <div className="w-6 h-0.5 bg-[#1ca9c9] my-2"></div>
                <p className="font-bold text-gray-900">Ms. Leila Hassan</p>
                <p className="text-xs tracking-wide text-gray-500 uppercase mt-1">Operations Head, Noor Enterprises</p>
            </div>
            </div>
        </div>

        {/* <!-- Pagination dots --> */}
        <div className="flex justify-center mt-8 space-x-2">
            <span className="w-6 h-1 bg-cyan-400 rounded-full"></span>
            <span className="w-2 h-1 bg-gray-400 rounded-full"></span>
            <span className="w-2 h-1 bg-gray-400 rounded-full"></span>
        </div>
        </div>
        );
        };

export default Clients;