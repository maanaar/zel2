const Aboutus3 = () => {
    return(
    <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
            
            {/* <!-- Main container with flex layout --> */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* <!-- Left side - Image --> */}
            <div className="flex-1 lg:max-w-lg">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* <!-- Placeholder image - replace with your actual image --> */}
                <img 
                    src="../../src/assets/aboutus3.png" 
                    alt="Event planning" 
                    className="w-full h-[500px] object-cover"
                />
                {/* <!-- Dark overlay for better contrast if needed --> */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
            </div>

            {/* <!-- Right side - Content --> */}
            <div className="flex-1 space-y-8">
                
                {/* <!-- Header --> */}
                <div>
                <p className="text-blue-500 text-sm font-medium tracking-wider uppercase mb-3">
                    WHY CHOOSE US
                </p>
                <h2 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Turning Ideas Into Memorable<br/>
                    Experiences
                </h2>
                <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                    At Oval Events, we redefine event management with a unique blend of creativity, efficiency, and 
                    dedication. Here's what sets us apart:
                </p>
                </div>

                {/* <!-- Feature cards grid --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* <!-- Comprehensive Event Support --> */}
                <div className="bg-blue-900 rounded-2xl p-6 text-white">
                    <h3 className="text-xl font-semibold mb-3">
                    Comprehensive Event Support
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed">
                    We provide end-to-end solutions, ensuring a flawless journey from planning to execution.
                    </p>
                </div>

                {/* <!-- Creative Excellence --> */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-gray-900 text-xl font-semibold mb-3">
                    Creative Excellence
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                    Our team delivers innovative concepts that make every event truly one-of-a-kind.
                    </p>
                </div>

                {/* <!-- Time And Budget Optimization --> */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-gray-900 text-xl font-semibold mb-3">
                    Time And Budget Optimization
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                    We maximize value by offering cost-effective solutions without compromising on quality.
                    </p>
                </div>

                {/* <!-- Beyond The Event --> */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-gray-900 text-xl font-semibold mb-3">
                    Beyond The Event
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                    We build loyal programs and post-event services, continuing to deliver value even after the event concludes.
                    </p>
                </div>

                </div>
            </div>
            </div>
        </div>
        </div>
    );
};
export default Aboutus3; 