import React from "react";
import JobSlider from "./job-slider";

const Jobs = () => {
  return (
    <div className="py-16 sm:py-24 px-5 sm:px-2 flex flex-col gap-8">
      <h2 className="text-center text-2xl sm:text-4xl mx-auto sm:mx-0 font-semibold">
        Recently Added Jobs
      </h2>
      <p className="text-center font-light px-8 sm:px-20 md:px-32 lg:px-44 pb-5 text-sm sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud ad minim veniam labore et dolore.
      </p>
      <div className="md:pl-12">
        <JobSlider />
      </div>
      <button className="font-semibold mx-auto text-[#00cc99] hover:text-white hover:bg-[#00cc99] border-[#00cc99] border-solid border-2 px-8 py-3 rounded-lg whitespace-nowrap mt-5 text-sm sm:text-base">
        View More
      </button>
    </div>
  );
};

export default Jobs;
