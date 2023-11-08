import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Direction = ({ isEven, title, paragraph }) => {
    useEffect(function () {
        Aos.init({ duration: 1000 });
      }, []);
    return (
    <div>
      <div className="sm:grid grid-cols-6 gap-8 md:gap-10 lg:gap-14 sm:pb-10">
        <div className={`sm:col-span-3 flex flex-col items-start gap-6 py-7 sm:py-10 text-center sm:text-start ${isEven ? 'order-1' : 'order-2'}`}>
          <h2 className="text-2xl sm:text-4xl mx-auto sm:mx-0 font-semibold">
            {title}
          </h2>
          <p className="font-light leading-loose">
            {paragraph}
          </p>
        </div>
        <div className={`sm:col-span-3 rounded-3xl bg-[#c4c4c4] min-w-max min-h-[350px] mt-16 sm:mt-0 ${isEven ? 'order-2' : 'order-1'}`} data-aos={`${isEven ? 'fade-left': 'fade-right'}`}></div>
      </div>
    </div>
  );
};

export default Direction;
