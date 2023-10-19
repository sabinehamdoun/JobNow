import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

const LeftHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="2xl:container mx-auto font-semibold">
        <div className="flex justify-between px-7 sm:px-0 py-7 sm:py-0">
          <Link href="/" className="text-4xl mx-auto sm:mx-0 font-bold">
            Job<span className="text-[#00cc99]">Now</span>
          </Link>
          <div className="flex items-center">
            {!isMobileMenuOpen ? (
              <button
                className="block sm:hidden text-2xl"
                onClick={toggleMobileMenu}
              >
                <RiMenu3Fill className="bg-[#00cc99] text-white p-0.5 rounded-[4px] w-[36px] h-[29px]" />
              </button>
            ) : (
              <button
                className="block sm:hidden text-3xl"
                onClick={toggleMobileMenu}
              >
                <MdOutlineCancel className="text-[#00cc99]" />
              </button>
            )}
            <ul
              className={`hidden sm:flex list-none gap-4 md:gap-6 lg:gap-11 xl:12 mr-5 sm:mr-14 whitespace-nowrap`}
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Job</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="sm:hidden absolute pt-14 pb-20 w-screen bg-[#f2f2f2] flex flex-col items-center justify-center z-50 ">
            <ul
              className={`flex flex-col sm:hidden list-none gap-7 text-xl text-center`}
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Job</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
        )}

        <div className="py-14 sm:py-28 px-7 sm:px-0 text-center sm:text-left bg-[#fbfbfb] sm:bg-[#f2f2f2] relative">
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

            <button className="bg-[#00cc99] rounded-xl text-xs sm:text-sm text-white px-7 py-3 sm:py-0 mt-6 sm:mt-0">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftHeader;
