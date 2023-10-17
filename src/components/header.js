import React from "react";
import Link from "next/link";
import { LuCalendarSearch } from "react-icons/lu";
import { BsFillBarChartFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";

const Header = () => {

  return (
    <div>
      <div className="bg-[#f2f2f2] flex">
        <div className="w-[60%] p-16">
          <div className="flex max-w-screen-xl">
            <h1 className="text-4xl">
              Job<span className="text-[#00cc99]">Now</span>
            </h1>
            <div className="flex justify-end items-center ml-auto">
              <ul className="list-none flex gap-0 sm:gap-11 mr-5 sm:mr-14">
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
          <div className="py-20">
            <h1 className="text-5xl">Search, Find, & Apply</h1>
            <p className="pt-8 pr-20 pb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className="rounded-2xl bg-white flex p-5 gap-3">
              <input
                type="text"
                id="job"
                name="job"
                placeholder="Job title or Keyword"
                className="bg-[#f9f9f9] w-2/5 rounded-md p-3 text-base placeholder-black "
              />
              <br />
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Location"
                className="bg-[#f9f9f9] w-2/5 rounded-md px-3 py-2 text-base placeholder-black"
              />
              <button className="w-1/5 bg-[#00cc99] rounded-xl text-md text-white">
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#00cc99] rounded-bl-[50px] ml-auto w-[40%] p-16">
          <div className="flex justify-end items-center ml-auto mb-14">
            <ul className="list-none flex gap-0 sm:gap-11 mr-5 sm:mr-14">
              <li className="text-white items-center flex">
                <Link href="/">Sign In</Link>
              </li>
              <li>
                <button className="bg-white rounded-lg px-4 py-2">
                  Create Account
                </button>
              </li>
            </ul>
          </div>
          <div>
            <div
              className="my-10 rounded-xl bg-white flex p-5 w-20 h-20 items-center"
              style={{ transform: "rotate(-5deg)" }}
            >
              <LuCalendarSearch
                className="h-16 w-16"
                style={{ verticalAlign: "middle", color: "#00cc99" }}
              />
            </div>
            <div
              className="my-10 rounded-xl bg-white flex p-5 w-20 h-20 items-center justify-end ml-auto"
              style={{ transform: "rotate(5deg)" }}
            >
              <BsFillBarChartFill
                className="h-10 w-12 rounded-lg p-1.5"
                style={{
                  verticalAlign: "middle",
                  color: "#fff",
                  backgroundColor: "#00cc99",
                }}
              />
            </div>

            <div
              className="rounded-xl bg-white flex p-4 w-20 h-20 items-center"
              style={{ transform: "rotate(-5deg)" }}
            >
              <MdSecurity
                className="h-20 w-20"
                style={{ verticalAlign: "middle", color: "#00cc99" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;