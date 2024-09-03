import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <div className="bg-[#32324b] text-white min-h-screen p-8 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full">
        <div className="bg-[#FFFFFF] text-[#32324b] p-8 rounded-lg flex flex-col justify-between">
          <div className="flex items-center">
            <img src="/path-to-icon.png" alt="Digital Marketing Icon" className="w-12 h-12 mr-4" />
            <h2 className="text-2xl font-bold">DIGITAL MARKETING PROGRAM EXECUTION</h2>
          </div>
          <div className="flex justify-end mt-4">
            <div className="bg-[#DFDFDF] w-12 h-12 flex items-center justify-center rounded-full">
              <span className="text-[#32324b] text-3xl">+</span>
            </div>
          </div>
        </div>

        <div className="bg-[#FFFFFF] text-[#32324b] p-8 rounded-lg flex flex-col justify-between">
          <div className="flex items-center">
            <img src="/path-to-icon.png" alt="Creative & Content Icon" className="w-12 h-12 mr-4" />
            <h2 className="text-2xl font-bold">CREATIVE & CONTENT DEVELOPMENT</h2>
          </div>
          <div className="flex justify-end mt-4">
            <div className="bg-[#DFDFDF] w-12 h-12 flex items-center justify-center rounded-full">
              <span className="text-[#32324b] text-3xl">+</span>
            </div>
          </div>
        </div>

        <div className="bg-[#FFFFFF] text-[#32324b] p-8 rounded-lg md:col-span-2 flex flex-col justify-between">
          <div className="flex items-center">
            <img src="/path-to-icon.png" alt="Go-to-Market Strategy Icon" className="w-12 h-12 mr-4" />
            <h2 className="text-4xl font-bold">GO-TO-MARKET STRATEGY & INTEGRATION</h2>
          </div>
          <p className="mt-4 text-lg">
            Refine your market entry with our strategies informed by deep market research. We thoroughly integrate with your operations, leveraging analytics to drive your revenue goals.
          </p>
          <div className="mt-8">
            <button className="bg-[#8000FF] text-white py-3 px-6 rounded-lg text-lg font-bold">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
