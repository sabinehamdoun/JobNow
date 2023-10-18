import React from "react";
import Card from "./card";
import { BiImport, BiFile, BiFileFind } from "react-icons/bi";
import { TiExportOutline } from "react-icons/ti";

const Work = () => {
  return (
    <div className="py-10 px-8 sm:py-28 sm:px-8 md:px-20">
      <div className="mx-auto 2xl:container">
        <div>
          <h2 className="text-3xl sm:text-4xl mx-auto sm:mx-0 font-semibold ">
            How it works
          </h2>
          <div className="flex items-start sm:justify-between sm:gap-28 md:gap-44 lg:gap-80 flex-col sm:flex-row py-7 sm:items-center md:mb-4">
            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud ad minim veniam labore et
              dolore.
            </p>
            <button className="text-[#00cc99] border-[#00cc99] border-solid border-2 px-8 py-3 rounded-lg whitespace-nowrap mt-5 sm:mt-0">
              Learn More
            </button>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
              <Card>
                <BiImport className="text-5xl transform -rotate-90 text-[#00cc99]" />
                <h3 className="text-xl font-semibold my-3">Register</h3>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </Card>
              <Card>
                <BiFile className="text-5xl text-[#00cc99]" />
                <h3 className="text-xl font-semibold my-3">Create a Resume</h3>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </Card>
              <Card>
                <BiFileFind className="text-5xl text-[#00cc99]" />
                <h3 className="text-xl font-semibold my-3">Find Job</h3>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </Card>
              <Card>
                <TiExportOutline className="text-5xl text-[#00cc99]" />
                <h3 className="text-xl font-semibold my-3">Apply Job</h3>
                <p className="text-xs font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </Card>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-8 md:gap-10 lg:gap-14 py-24 sm:py-32">
          <div className="col-span-5 sm:col-span-2 rounded-3xl sm:px-32 py-32 bg-[#c4c4c4]"></div>
          <div className="col-span-5 sm:col-span-3 flex flex-col items-start gap-6 py-7 sm:py-10">
            <h2 className="text-2xl sm:text-4xl mx-auto sm:mx-0 font-semibold">
              We will help you to become an employee in your dream company
            </h2>
            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud ad minim veniam labore et
              dolore.
            </p>
            <button className="text-[#00cc99] border-[#00cc99] border-solid border-2 px-8 py-3 rounded-lg whitespace-nowrap">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
