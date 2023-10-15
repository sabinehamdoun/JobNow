import React from "react";
import Link from "next/link";
import { LuCalendarSearch } from "react-icons/lu";
import { BsFillBarChartFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import LeftHeader from "./left";

const Header = () => {

  return (
    <div>
      <div className="bg-[#f2f2f2] flex flex-col sm:flex-row">
      <div className="w-[100%] sm:w-[60%] sm:py-10 md:py-16 md:px-16">
        <LeftHeader />
        </div>
        <div className="bg-[#00cc99] sm:rounded-bl-[50px] sm:ml-auto w-[100%] sm:w-[40%]">
        <div className="max-w-screen-sm mx-auto">

          <div className="flex justify-center lg:justify-end items-center ml-auto sm:mb-14">
            <ul className="hidden list-none sm:flex flex-col md:flex-row gap-0 sm:gap-5 md:gap-11 lg:mr-14 py-16">
              <li className="text-white items-center flex whitespace-nowrap">
                <Link href="/">Sign In</Link>
              </li>
              <li>
                <button className="bg-white rounded-lg px-4 py-2 whitespace-nowrap">
                  Create Account
                </button>
              </li>
            </ul>
          </div>
          <div className="px-20 sm:px-16 py-16 sm:py-0">
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
    </div>
  );
};

export default Header;
