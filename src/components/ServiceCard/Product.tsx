import React from 'react';

function Product({ val, mover, count }: { val: any; mover: any; count: any }) {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.backgroundColor = val.bg;
    mover(count);
  };

  return (
    <div
      className="w-full py-5 h-[16vw] transition-transform"
      style={{ transition: 'background-color 0.3s ease' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'initial')}
    >
      <div className="prodtAnim max-w-[1500px] mx-auto flex flex-wrap items-center justify-between py-[2vw]">
        <h2 className="text-[1vw] font-medium">{val.title}</h2>
        <div className="w-1/4 flex flex-col gap-[1vw]">
          <p className="w-3/4 text-[.9vw] leading-[1.5vw]">{val.desc}</p>
          <div className="flex items-center gap-[1vw]">
            {val.live && <CustomButton text="Live Website" />}
            {val.case && <CustomButton text="Contact" />}
          </div>
        </div>
      </div>
    </div>
  );
}

const CustomButton = ({ text }: { text: string }) => (
  <button className="bg-[#fff] text-[#050505] px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-primary hover:text-white">
    {text}
  </button>
);

export default Product;