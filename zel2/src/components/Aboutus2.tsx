const Aboutus2 = () => {
    return (
        <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('../../src/assets/aboutus2bg.jpeg')" }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            {/* Content container */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-4">
                        VISION & MISSION
                    </p>
                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
                        Our Mission Is Clear – To Craft<br />
                        Exceptional Experiences That Linger<br />
                        In Hearts.
                    </h1>
                </div>

                {/* Cards Container */}
                <div className="flex justify-center gap-6 max-w-6xl w-full flex-wrap lg:flex-nowrap">
                    
                    {/* Video Card */}
                    <div className="bg-white bg-opacity-80 rounded-2xl p-3 border border-gray-700 hover:border-blue-500 transition-all duration-300 w-full md:w-[48%] lg:w-[30%]">
                        <div className="relative bg-gray-800 rounded-xl h-48 flex items-center justify-center overflow-hidden">
                            {/* Video thumbnail placeholder */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"></div>
                            {/* Play button */}
                            <button className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                <div className="w-0 h-0 border-l-[16px] border-l-gray-800 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                            </button>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="flex flex-wrap w-full lg:w-[55%] gap-6">
                        {[
                            {
                                title: "Exceptional Experiences",
                                desc: "We design events that have lasting memories forever.",
                                bg: "bg-blue-900 bg-opacity-90 text-white border-blue-700 hover:border-blue-400",
                                textColor: "text-blue-100",
                            },
                            {
                                title: "Values Of Integrity",
                                desc: "We ensure honesty and transparency in all we do.",
                                bg: "bg-white bg-opacity-95 text-gray-800 border-gray-200 hover:border-gray-400",
                                textColor: "text-gray-600",
                            },
                            {
                                title: "Creativity Craft",
                                desc: "We bring unique ideas to life with precision and care.",
                                bg: "bg-white bg-opacity-95 text-gray-800 border-gray-200 hover:border-gray-400",
                                textColor: "text-gray-600",
                            },
                            {
                                title: "Client-Centricity",
                                desc: "We focus on delivering solutions tailored to your needs.",
                                bg: "bg-white bg-opacity-95 text-gray-800 border-gray-200 hover:border-gray-400",
                                textColor: "text-gray-600",
                            }
                        ].map((card, i) => (
                            <div
                                key={i}
                                className={`${card.bg} rounded-2xl p-6 border transition-all duration-300 w-full md:w-[48%] lg:w-[45%]`}
                            >
                                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                                <p className={`text-sm leading-relaxed ${card.textColor}`}>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus2;
