import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { PiSuitcaseSimple } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";


const JobSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(2.8);

  useEffect(() => {
    function updateSlidesPerView() {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(1.2);
      } else {
        setSlidesPerView(2.8);
      }
    }

    updateSlidesPerView();

    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <div className="2xl:container mx-auto pl-3 md:pl-10">
    <Swiper 
      spaceBetween={40}
      slidesPerView={slidesPerView}
      onSwiper={(swiper) => console.log(swiper)} 
    >
      <SwiperSlide>
        {" "}
        <div className="flex flex-col items-start justify-between rounded-3xl bg-[#fff] px-7 py-7">
          <img src="/assets/ux.webp" className="h-16 rounded-[46px] object-fit" />
          <h3 className="text-xl font-semibold mt-5 whitespace-nowrap">UI/UX Designer</h3>
          <h6 className="text-sm font-semibold text-gray-500 my-3 mb-7">Dimension Studio</h6>
          <p className="text-xs font-light mt-auto text-gray-500 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ad minim veniam labore et dolore.
          </p>
          <div className="flex flex-row md:flex-col lg:flex-row items-start gap-2 py-5 whitespace-nowrap">
            <div className="flex items-center gap-2 rounded-lg bg-[#f9f9f9] px-2 py-2">
              <GrLocation className="text-lg"/>
              <p className="font-semibold text-xs">San Francisco, CA</p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[#f9f9f9] px-2 py-2">
              <PiSuitcaseSimple className="text-lg" />
              <p className="font-semibold text-xs">Full Time</p>
            </div>
          </div>
          <button className="flex items-center gap-3 text-[#00cc99] font-semibold text-xl">
            Apply Now
            <IoIosArrowForward />
          </button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="flex flex-col items-start justify-between rounded-3xl bg-[#fff] px-7 py-7">
          <img src="/assets/AngularJs.svg" className="h-16 w-16 rounded-[20px] object-fill p-1" />
          <h3 className="text-xl font-semibold mt-5 whitespace-nowrap">Full Stack Developer</h3>
          <h6 className="text-sm font-semibold text-gray-500 my-3 mb-7">Alpander</h6>
          <p className="text-xs font-light mt-auto text-gray-500 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ad minim veniam labore et dolore.
          </p>
          <div className="flex flex-row md:flex-col lg:flex-row items-start gap-2 py-5 whitespace-nowrap">
            <div className="flex items-center gap-2 rounded-lg bg-[#f9f9f9] px-2 py-2">
              <GrLocation className="text-lg"/>
              <p className="font-semibold text-xs">San Francisco, CA</p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[#f9f9f9] px-2 py-2">
              <PiSuitcaseSimple className="text-lg" />
              <p className="font-semibold text-xs">Full Time</p>
            </div>
          </div>
          <button className="flex items-center gap-3 text-[#00cc99] font-semibold text-xl">
            Apply Now
            <IoIosArrowForward />
          </button>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col items-start justify-between rounded-3xl bg-[#fff] px-7 py-7">
          <img src="/assets/ux.webp" className="h-16 rounded-[46px] object-fit" />
          <h3 className="text-xl font-semibold mt-5 whitespace-nowrap">Product Designer</h3>
          <h6 className="text-sm font-semibold text-gray-500 my-3 mb-7">XReact Tech</h6>
          <p className="text-xs font-light mt-auto text-gray-500 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ad minim veniam labore et dolore.
          </p>
          <div className="flex flex-row md:flex-col lg:flex-row items-start gap-2 py-5 whitespace-nowrap">
            <div className="flex items-center gap-2 rounded-lg bg-[#f9f9f9] px-2 py-2">
              <GrLocation className="text-lg"/>
              <p className="font-semibold text-xs">San Francisco, CA</p>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-[#f9f9f9] px-2 py-2">
              <PiSuitcaseSimple className="text-lg" />
              <p className="font-semibold text-xs">Full Time</p>
            </div>
          </div>
          <button className="flex items-center gap-3 text-[#00cc99] font-semibold text-xl">
            Apply Now
            <IoIosArrowForward />
          </button>
        </div>
      </SwiperSlide>  
    </Swiper>
    </div>
  );
};

export default JobSlider;
