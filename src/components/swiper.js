import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./card";
import { BiLineChartDown, BiBrain } from "react-icons/bi";
import { AiOutlineBank } from "react-icons/ai";
import { MdManageHistory } from "react-icons/md";
import { RiCustomerServiceLine } from "react-icons/ri";

const Slider = () => {
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
          <h3 className="text-xl font-semibold my-3">Design and Development</h3>
          <p className="text-xs font-light mt-8 ">350 Job Vacancy</p>
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

export default Slider;
