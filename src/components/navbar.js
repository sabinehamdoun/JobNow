import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <div className="2xl:container mx-auto font-semibold">
        <div className="flex justify-between px-7 sm:px-0 py-7 sm:py-0">
          <Link href="/" className="font-bold text-4xl text-black flex">
            Job
            <span className="text-[#00cc99] flex">
              N<FaSearch className="mt-[10px] ml-0.5 -mr-1 text-[28px]" />w
            </span>
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
              className={`hidden sm:flex list-none gap-4 sm:gap-3 md:gap-8 lg:gap-11 xl:12 mr-5 whitespace-nowrap`}
            >
              <li className="hover:text-[#00cc99]">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#00cc99]">
                <Link href="/">Job</Link>
              </li>
              <li className="hover:text-[#00cc99]">
                <Link href="/about">About Us</Link>
              </li>
              <li className="hover:text-[#00cc99]">
                <Link href="/contact">Contact</Link>
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
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
