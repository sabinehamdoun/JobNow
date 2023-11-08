import React from "react";
import Link from "next/link";
import { LuCalendarSearch } from "react-icons/lu";
import { BsFillBarChartFill } from "react-icons/bs";
import { MdSecurity } from "react-icons/md";
import { MdEmail, MdPassword } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const SignInPage = () => {
  return (
    <div>
      <div className="backScreen">
        <div className="2xl:container mx-auto flex flex-col sm:flex-row">
          <div className="w-[100%] sm:w-[60%] py-8 sm:py-10 md:py-40 h-screen px-10 sm:px-7 md:px-12 lg:px-20">
            <div
              className="rounded-xl bg-white flex p-5 sm:mx-7 w-20 h-20 items-center"
              style={{ transform: "rotate(-5deg)" }}
            >
              <LuCalendarSearch
                className="h-16 w-16"
                style={{ verticalAlign: "middle", color: "#00cc99" }}
              />
            </div>
            <div className="flex my-10 ml-24 items-center">
              <h1 className="text-5xl font-semibold mx-auto sm:flex text-[#00cc99] sm:whitespace-nowrap">
                Welcome to{" "}
                <span
                  href="/"
                  className="ml-2 font-bold text-5xl text-black flex"
                >
                  Job
                  <span className="text-[#00cc99] flex">Now</span>
                </span>
              </h1>
              <div
                className=" rounded-xl bg-white flex p-5 w-20 h-20 items-center justify-end ml-4"
                style={{ transform: "rotate(10deg)" }}
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
            </div>
            <div
              className="rounded-xl bg-white flex p-4 w-20 h-20 items-center"
              style={{ transform: "rotate(-8deg)" }}
            >
              <MdSecurity
                className="h-20 w-20"
                style={{ verticalAlign: "middle", color: "#00cc99" }}
              />
            </div>
          </div>
          <div className="rightScreen sm:rounded-bl-[50px] sm:ml-auto w-[100%] sm:w-[40%] px-5 sm:px-20 flex flex-col justify-center ">
            <div className="md:py-40 h-screen ">
            <h2 className="text-3xl font-semibold text-center mb-10 text-white">Sign In</h2>
            <div className="relative rounded-lg">
              <div className="flex items-center mb-7">
                <MdEmail className="w-5 h-5 ml-3 absolute text-gray-400" />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="bg-[#f9f9f9] w-full pl-11 px-3 py-4 font-semibold rounded-lg focus:outline-none"
                />
              </div>
              <div className="relative rounded-lg">
                <div className="flex items-center">
                  <RiLockPasswordFill className="w-5 h-5 ml-3 absolute text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-[#f9f9f9] w-full pl-11 px-3 py-4 font-semibold rounded-lg focus:outline-none"
                    />
                </div>
              </div>
              <div className="mt-10 text-center"> 
              <button className="bg-[#f9f9f9] hover:bg-[#55e4c0] rounded-lg text-[#00cc99] hover:text-[#fff] border-2 border-[#00cc99] px-7 py-3 sm:py-2 mt-6 sm:mt-0 ">
              Sign In
            </button>
            </div>
            <p className="text-sm text-white mt-6 text-center">Don't have an account? <a href="/" className="underline">Create an account</a></p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
