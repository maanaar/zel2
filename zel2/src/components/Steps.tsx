import React from 'react';

const Steps: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Consultation And Vision Clarification',
      description: 'We work with you to define your goals, understand your vision, and lay the foundation for your event.',
    },
    {
      number: '02',
      title: 'Detailed Planning And Coordination',
      description: 'Our experts handle all planning details, coordinate with vendors, and ensure everything is on track.',
    },
    {
      number: '03',
      title: 'Execution And On-Site Management',
      description: 'We oversee every detail during the event, ensuring flawless execution and a seamless experience.',
    },
    {
      number: '04',
      title: 'Post-Event Wrap-Up And Feedback',
      description: 'After the event, we review results, gather feedback, and provide insights for continuous improvement.',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#0B1123] to-[#1A2B4C] py-16 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h4 className="text-sm font-semibold text-gray-400 tracking-widest mb-2">HOW IT WORKS</h4>
        <h2 className="text-3xl md:text-4xl font-bold">Learn How We Make Every Event Extraordinary.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {steps.map((step, index) => (
          <div key={index} className="bg-white text-black p-6 rounded-2xl shadow-lg relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-[#6A90B0] text-white text-lg font-bold w-12 h-12 rounded-full flex items-center justify-center">
                {step.number}
              </div>
            </div>
            <h3 className="text-xl font-semibold mt-8 mb-4">{step.title}</h3>
            <p className="text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
