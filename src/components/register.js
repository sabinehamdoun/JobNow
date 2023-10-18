import React from "react";

const Register = () => {
  return (
    <div className="bg-[#003a2c] rounded-[8px] sm:rounded-[26px] text-white text-center mx-3 md:mx-20">
      <div className="2xl:container mx-auto py-7 sm:py-12 flex flex-col gap-4">
        <h2 className="text-2xl sm:text-3xl font-semibold ">
          Register your CV Now!
        </h2>
        <p className="font-light text-sm text-[#aaaaaa] px-3 md:px-20 lg:px-72 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="mx-auto border-[#fff] border-solid border-2 px-5 sm:px-8 py-2 sm:py-3 rounded-lg whitespace-nowrap mt-3">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Register;
