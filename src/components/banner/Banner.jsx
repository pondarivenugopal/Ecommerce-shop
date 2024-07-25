import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import bannerbg from "../../assets/banner-bg.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { FaAmazonPay } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className="flex justify-center items-center py-12 sm:py-0 min-h-[500px] bg-cover bg-no-repeat mt-20 h-dvh"
      style={{
        backgroundImage: `url(${bannerbg})`,
      }}
    >
      <div className="container md:flex mt-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="..."
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-20px_-20px_1px_rgba(255,255,255,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0 p-5">
            <h1 data-aos="fade-down" className="text-3xl sm:text-4xl font-bold">
              Summer Sale upto 50% Off
            </h1>
            <p data-aos="flip-left" className="text-sm text-gray-500 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              reiciendis inventore iste ratione ex alias quis magni at optio
            </p>
            <div className="flex flex-col gap-4 ">
              <div data-aos="flip-down" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-400" />
                <p>Quality Products</p>
              </div>
              <div data-aos="flip-down" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-400" />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="flip-down" className="flex items-center gap-4">
                <FaAmazonPay className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-gray-500 " />
                <p>Easy Payment method</p>
              </div>
              <div data-aos="flip-down" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-400" />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
