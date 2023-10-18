import React from "react";
import { BsGoogle, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#00cc99]">
      <div className="2xl:container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 px-6 sm:px-14 py-10 pt-52">
        <div className="text-white my-auto col-span-2 md:col-span-2">
          <h1 className="font-bold text-4xl text-black">
            Job<span className="text-white">Now</span>
          </h1>
          <p className="font-light text-xs leading-normal mt-2 pr-52">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="text-white col-span-1 md:col-span-1">
          <h2 className="font-semibold text-xl">Company</h2>
          <ul className="flex flex-col gap-2 mt-2 list-none text-xs pr-12 lg:pr-0">
            <li className="font-light leading-loose whitespace-nowrap md:whitespace-normal">Address: 123 Fifth Avenue, New York - 1060, USA</li>
            <li className="font-light whitespace-nowrap">Call Us: *(1600) 456 7890</li>
            <li className="font-light whitespace-nowrap">Email: yourid@example.com</li>
            <li className="font-light whitespace-nowrap">Mon Sat: 9:00 AM - 19:00 PM</li>
          </ul>
        </div>

        <div className="text-white col-span-1 md:col-span-1 ml-auto sm:ml-10">
          <h2 className="font-semibold text-xl">Pages</h2>
          <ul className="flex flex-col gap-2 mt-2 text-xs">
            <li className="font-light flex items-center gap-1">
              <IoIosArrowForward />Home
            </li>
            <li className="font-light flex items-center gap-1">
              <IoIosArrowForward />Booking
            </li>
            <li className="font-light flex items-center gap-1">
              <IoIosArrowForward />Facilities
            </li>
            <li className="font-light flex items-center gap-1">
              <IoIosArrowForward />About Us
            </li>
            <li className="font-light flex items-center gap-1">
              <IoIosArrowForward />Location
            </li>
            <li className="font-light flex items-center gap-1">
              <IoIosArrowForward />Contact
            </li>
          </ul>
        </div>

        <div className="text-white col-span-1 md:col-span-1">
          <h2 className="font-semibold text-xl">Contact Us</h2>
          <div className="flex gap-5 text-xl py-3">
            <BsGoogle />
            <BsFacebook />
            <BsTwitter />
            <BsLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
