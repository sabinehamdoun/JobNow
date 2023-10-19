import Link from "next/link";
import React from "react";
import { BsGoogle, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#00cc99]">
      <div className="2xl:container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 px-6 sm:px-16 sm:pl-24 py-10 pt-52">
        <div className="text-white my-auto col-span-2 md:col-span-2">
          <Link href="/" className="font-bold text-4xl text-black">
            Job<span className="text-white">Now</span>
          </Link>
          <p className="font-light text-xs leading-normal mt-2 sm:pr-16 lg:pr-52">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="text-white col-span-1 md:col-span-1">
          <h2 className="font-semibold text-xl">Company</h2>
          <ul className="flex flex-col gap-2 mt-2 list-none text-xs sm:pr-12 lg:pr-0">
            <li className="font-light leading-loose">
              Address: 123 Fifth Avenue, New York - 1060, USA
            </li>
            <li className="font-light whitespace-nowrap">
              Call Us: *(1600) 456 7890
            </li>
            <li className="font-light whitespace-nowrap">
              Email: yourid@example.com
            </li>
            <li className="font-light whitespace-nowrap">
              Mon Sat: 9:00 AM - 19:00 PM
            </li>
          </ul>
        </div>

        <div className="text-white col-span-1 md:col-span-1 ml-auto sm:ml-10">
          <h2 className="font-semibold text-xl">Pages</h2>
          <ul className="flex flex-col gap-2 mt-2 text-xs">
            <Link href={'/'} className="font-light flex items-center gap-1">
              <IoIosArrowForward />
              Home
            </Link>
            <Link href={'/'} className="font-light flex items-center gap-1">
              <IoIosArrowForward />
              Booking
            </Link>
            <Link href={'/'} className="font-light flex items-center gap-1">
              <IoIosArrowForward />
              Facilities
            </Link>
            <Link href={'/'} className="font-light flex items-center gap-1">
              <IoIosArrowForward />
              About Us
            </Link>
            <Link href={'/'} className="font-light flex items-center gap-1">
              <IoIosArrowForward />
              Location
            </Link>
            <Link href={'/'} className="font-light flex items-center gap-1">
              <IoIosArrowForward />
              Contact
            </Link>
          </ul>
        </div>

        <div className="text-white col-span-1 md:col-span-1">
          <h2 className="font-semibold text-xl">Contact Us</h2>
          <div className="flex gap-5 text-xl py-3">
            <Link href="https://www.google.com/">
              <BsGoogle />
            </Link>
            <Link href="https://www.facebook.com/">
              <BsFacebook />
            </Link>
            <Link href="https://twitter.com/">
              <BsTwitter />
            </Link>
            <Link href="https://www.linkedin.com/">
              <BsLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
