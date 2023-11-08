import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import Navbar from "./navbar";

const LeftHeader = () => { 
  return (
    <div>
      <div className="2xl:container mx-auto font-semibold">
        <Navbar />
        <div className="py-14 sm:py-28 px-7 sm:px-0 text-center sm:text-left bg-[#fbfbfb] sm:bg-inherit relative">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Search, Find, & Apply
          </h1>
          <p className="pt-8 sm:pr-20 pb-12 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
          <div className="rounded-2xl bg-white flex flex-col sm:flex-row p-4 sm:px-2 py-7 sm:py-4 md:p-5 gap-1 md:gap-3">
            <div className="flex-1 relative bg-[#f9f9f9] rounded-lg">
              <div className="flex items-center">
                <FiSearch className="w-6 h-6 ml-3" />
                <input
                  type="text"
                  id="job"
                  name="job"
                  placeholder="Job title or Keyword"
                  className="bg-[#f9f9f9] w-full text-xs md:text-sm placeholder-black px-3 py-3 font-semibold rounded-lg focus:outline-none"
                />
              </div>
            </div>
            <br />
            <div className="flex-1 relative bg-[#f9f9f9] rounded-lg">
              <div className="flex items-center">
                <GrLocation className="w-6 h-6 ml-3" />
                <select
                  id="location"
                  name="location"
                  className="bg-[#f9f9f9] w-full text-xs md:text-sm placeholder-black px-3 py-3 font-semibold rounded-lg focus:outline-none"
                >
                  <option value="">Location</option>
                  <option value="location1">Location 1</option>
                  <option value="location2">Location 2</option>
                  <option value="location3">Location 3</option>
                </select>
              </div>
            </div>

            <button className="bg-[#00cc99] hover:bg-[#00cc99ca] rounded-xl text-xs sm:text-sm text-white px-7 py-3 sm:py-0 mt-6 sm:mt-0">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftHeader;
