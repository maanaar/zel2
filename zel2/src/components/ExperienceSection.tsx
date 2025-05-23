import experienceImg1 from '../../src/assets/experience1.png'; // Replace with your actual images
import experienceImg2 from '../../src/assets/experience2.png';

const ExperienceSection = () => {
  return (
    // <div className="w-full grid md:grid-cols-2 ">
      <div className='flex felx-row items-center px-32 py-12  space-x-32'>
      <img src={experienceImg1} alt="Event Crowd" className="rounded-2xl" />
      
      <div className=' mx-0'>
        <p className="text-sm uppercase text-blue-600 font-semibold mb-2 space-x-4">
          Crafting Experiences, Building Memories
        </p>
        <h2 className="text-3xl font-bold mb-4 leading-snug">
          We Take Pride In Curating Experiences That Transcend The Ordinary.
        </h2>
        <div className='flex flex-row'>
            <p className="text-gray-700 italic mb-6 gap-8 space-x-2">
              At Ozel Events, we specialize in delivering exceptional corporate events that leave a
              lasting impression. Our meticulous attention to detail ensures every event is as unique as
              the people behind it.
            </p>
            <img src={experienceImg2} alt="Speaker on stage" className="rounded-2xl w-full" />
        </div>
        <button className="bg-[#0D0D44] text-white py-2 px-5 mt-8 rounded-full hover:bg-blue-800">
          More About Us
        </button>
      </div>
      </div>
    // </div>
  );
};

export default ExperienceSection;
