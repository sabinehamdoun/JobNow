import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";

const LeftHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="max-w-screen-md mx-auto">
        <div className="flex max-w-screen-xl px-6 py-7 sm:py-3">
          <h1 className="text-4xl mx-auto sm:mx-0">
            Job<span className="text-[#00cc99]">Now</span>
          </h1>
          <div className="flex justify-end items-center sm:ml-auto">
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
              className={`hidden sm:flex list-none gap-4 md:gap-6 lg:gap-11 xl:12 mr-5 sm:mr-14`}
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
        {isMobileMenuOpen && (<div className="flex flex-col text-center items-center pb-5"> 
            <ul
              className={`flex flex-col sm:hidden list-none gap-4 md:gap-6 lg:gap-11 xl:12 mr-5 sm:mr-14`}
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
        <div className="py-14 sm:py-20 px-6 text-center sm:text-left bg-[#fbfbfb] sm:bg-[#f2f2f2]">
          <h1 className="text-3xl sm:text-5xl">Search, Find, & Apply</h1>
          <p className="pt-8 sm:pr-20 pb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <div className="rounded-2xl bg-white flex flex-col sm:flex-row p-4 sm:px-2 sm:py-4 md:p-5 sm:gap-1 md:gap-3">
            <input
              type="text"
              id="job"
              name="job"
              placeholder="Job title or Keyword"
              className="bg-[#f9f9f9] text-xs w-full sm:w-2/5 rounded-md p-3 md:text-base placeholder-black "
            />
            <br />
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              className="bg-[#f9f9f9] text-xs w-full sm:w-2/5 rounded-md px-3 py-2 md:text-base placeholder-black"
            />
            <button className="w-full sm:w-1/5 bg-[#00cc99] rounded-xl text-xs sm:text-md text-white py-2 sm:py-0 mt-6 sm:mt-0">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftHeader;
