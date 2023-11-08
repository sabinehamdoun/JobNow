import React from "react";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";

const ContactUs = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mx-auto text-center px-7 sm:px-10 lg:px-20 py-5">
      <h2 className="col-span-3 text-3xl">Get in touch</h2>
      <p className="col-span-3 font-light">Let's talk about jobs!</p>
      <div className="col-span-3 grid grid-cols-3 gap-4">
        <div className="relative bg-[#f9f9f9] rounded-lg col-span-3 sm:col-span-1">
          <div className="flex items-center">
            <BsFillPersonFill className="w-6 h-6 ml-3 absolute text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full pl-11 text-xs md:text-sm px-3 py-3 rounded-lg focus:outline-none border border-gray-300"
            />
          </div>
        </div>
        <div className="relative bg-[#f9f9f9] rounded-lg col-span-3 sm:col-span-1">
          <div className="flex items-center">
            <BsFillTelephoneFill className="w-5 h-5 ml-3 absolute text-gray-400" />
            <input
              type="text"
              name="phone"
              placeholder="Your phone number"
              className="w-full pl-11 text-xs md:text-sm px-3 py-3 rounded-lg focus:outline-none border border-gray-300"
            />
          </div>
        </div>
        <div className="relative bg-[#f9f9f9] rounded-lg col-span-3 sm:col-span-1">
          <div className="flex items-center">
            <MdEmail className="w-5 h-5 ml-3 absolute text-gray-400" />
            <input
              type="text"
              name="phone"
              placeholder="Your email"
              className="w-full pl-11 text-xs md:text-sm px-3 py-3 rounded-lg focus:outline-none border border-gray-300"
            />
          </div>
        </div>
        <div className="relative bg-[#f9f9f9] rounded-lg col-span-3">
          <div className="flex">
            <BiSolidMessageRounded className="w-5 h-5 ml-3 mt-3 absolute text-gray-400" />
            <textarea
              type="text"
              name="message"
              placeholder="Leave a message"
              rows="4"
              className="w-full pl-11 text-xs md:text-sm px-3 py-3 rounded-lg focus:outline-none border border-gray-300"
            />
          </div>
        </div>
        
      </div>
      <div className="col-span-3 flex justify-center items-center text-center mt-3">
        <button className="text-white bg-[#00cc99] hover:bg-[#fff] border-[#00cc99] hover:text-[#00cc99] border-2 px-8 py-3 rounded-lg whitespace-nowrap font-semibold text-sm sm:text-base">
          View More
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
