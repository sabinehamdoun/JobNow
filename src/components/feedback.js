import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const Feedback = () => {
  return (
    <div className="2xl:container mx-auto py-10 px-10 sm:py-28 sm:px-8 md:px-20 text-center sm:text-start">
      <h2 className="text-3xl sm:text-4xl font-semibold ">
        People's Feedback about JobNow!
      </h2>
      <div className="grid grid-cols-2 gap-28 py-5">
        <div className="col-span-2 sm:col-span-1 flex flex-col items-center sm:items-start py-3">
          <p className="font-light text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="font-semibold text-md py-10">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ad minim veniam labore et dolore."
          </p>
          <h2 className="text-lg sm:text-xl font-semibold ">Brown Garcia</h2>
          <p className="font-light text-xs py-3">
            Full Stack Developer in XReact Tech
          </p>
          <div className="flex gap-4 text-3xl text-white mt-1">
            <button className="bg-[#d2d2d2] rounded-[26px] hover:bg-[#00cc99] p-0.5">
              <BiLeftArrowAlt />
            </button>
            <button className="bg-[#d2d2d2] rounded-[26px] hover:bg-[#00cc99] p-0.5">
              <BiRightArrowAlt />
            </button>
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 rounded-3xl bg-[#00cc99] lg:ml-16"></div>
      </div>
    </div>
  );
};

export default Feedback;
