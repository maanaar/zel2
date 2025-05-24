import React from "react";

const categories = [
  {
    title: "Conferences",
    desc: "Expertly organize conferences connecting industries, and professionals.",
    image: "../../src/assets/categ1.jpeg",
  },
  {
    title: "Activations",
    desc: "Brand-driven activations that leave lasting impressions.",
    image: "../../src/assets/categ2.jpeg",
  },
  {
    title: "Corporate Events",
    desc: "Strategic corporate experiences aligned with goals.",
    image: "../../src/assets/categ3.jpeg",
  },
  {
    title: "Exhibitions",
    desc: "Immersive exhibitions designed for engagement.",
    image: "../../src/assets/categ4.jpeg",
  },
  {
    title: "Product Launch",
    desc: "Create excitement with unforgettable product launches.",
    image: "../../src/assets/categ5.jpeg",
  },
  {
    title: "Educational Summits",
    desc: "Knowledge-sharing and thought leadership events.",
    image: "../../src/assets/categ6.jpeg",
  },
];

const PortfolioShowcase: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Top Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <img
            src="../../src/assets/pro1.png"
            alt="Speaker"
            className="rounded-xl shadow-lg"
          />
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl">
            ▶️
          </button>
        </div>
        <div>
          <h3 className="text-sm text-blue-600 uppercase font-semibold">
            Exclusive Sneak
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Embark On A Visual Journey Through Our Portfolio
          </h2>
          <p className="mb-4 text-gray-600">
            Discover how events transform into breathtaking realities. From
            elegant corporate setups to immersive activations, our portfolio
            showcases creativity at its finest.
          </p>
          <ul className="list-disc ml-5 space-y-1 text-sm text-gray-700 mb-4">
            <li>Explore stunning designs & immersive event settings.</li>
            <li>See the art of crafting experiences that captivate guests.</li>
          </ul>
          <button className=" bg-gradient-to-br from-[#030C37] to-[#588AB0] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            More About Us
          </button>
        </div>
      </section>

      {/* Hero Banner */}
      <section className="relative h-[300px] bg-cover bg-center" style={{ backgroundImage: "url('../../src/assets/Pro2.png')" }}>
        {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-white text-center">
            <button className="text-4xl mb-4">▶️</button>
            <h2 className="text-2xl md:text-3xl font-bold">
              Always Something Special Happening Events.
            </h2>
          </div>
        </div> */}
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h4 className="text-blue-600 font-semibold uppercase mb-2">
          Event Projects
        </h4>
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Explore Projects From Intimate Affairs To Grand Celebrations
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden shadow-md group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 flex flex-col justify-end">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PortfolioShowcase;
