import React from "react";

const HomePageLeft = () => {
  return (
    <div className="w-full h-screen">
      <h1 className="text-[108px] font-extrabold font-Poppins leading-[102px] text-black">
        YOUR FEET DESERVE THE BEST
      </h1>
      <h5 className="text-xs font-Poppins font-semibold pr-[230px] text-[#5A5959] py-[36px]">
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
        SHOES.
      </h5>
      <div className="flex gap-x-10">
        <button className="px-[16px] py-[6px] bg-red-600 text-[20px] font-semibold font-Poppins">
          Shop Now
        </button>
        <button className="px-[16px] py-[6px] border border-black border-solid text-[20px] font-semibold font-Poppins">
          Category
        </button>
      </div>
    </div>
  );
};

export default HomePageLeft;
