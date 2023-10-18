import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./card";
import { BiLineChartDown, BiBrain } from "react-icons/bi";
import { AiOutlineBank } from "react-icons/ai";
import { MdManageHistory } from "react-icons/md";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";

const JobSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(4.2);

  useEffect(() => {
    function updateSlidesPerView() {
      if (window.innerWidth < 640) {
        setSlidesPerView(1.2);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(3.2);
      } else {
        setSlidesPerView(4.2);
      }
    }

    updateSlidesPerView();

    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <Swiper
      spaceBetween={35}
      slidesPerView={slidesPerView}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        {" "}
        <div className="rounded-3xl bg-[#00cc99] px-5 py-7 text-[#fff]">
          <BiBrain className="text-5xl" />
          <h3 className="text-xl font-semibold my-3">UI/UX Designer</h3>
          <h6>Dimension Studio</h6>
          <p className="text-xs font-light mt-8 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud ad minim veniam labore et dolore.</p>
        </div>
        <div className="flex"> 
        <div className="rounded-3xl bg-[#f9f9f9] px-2 py-1 text-[#fff]">
            <GrLocation />
            San Francisco, CA
        </div>
        <div className="rounded-3xl bg-[#f9f9f9] px-2 py-1 text-[#fff]">
            <GrLocation />
            Full Time
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card>
          <BiLineChartDown className="text-5xl text-[#00cc99]" />
          <h3 className="text-xl font-semibold my-3">Accounting and Finance</h3>
          <p className="text-xs font-light mt-8">350 Job Vacancy</p>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card>
          <AiOutlineBank className="text-5xl text-[#00cc99]" />
          <h3 className="text-xl font-semibold my-3">
            Bank <br /> Institution
          </h3>
          <p className="text-xs font-light mt-8">350 Job Vacancy</p>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card>
          <MdManageHistory className="text-5xl text-[#00cc99]" />
          <h3 className="text-xl font-semibold my-3">
            Product <br /> Management
          </h3>
          <p className="text-xs font-light mt-8">350 Job Vacancy</p>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Card>
          <RiCustomerServiceLine className="text-5xl text-[#00cc99]" />
          <h3 className="text-xl font-semibold my-3">
            Customer <br /> Support
          </h3>
          <p className="text-xs font-light mt-8">350 Job Vacancy</p>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};

export default JobSlider;
