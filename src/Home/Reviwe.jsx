import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Flowbite.js styles

import { Avatar } from "flowbite-react";

//react icon
import { FaStar } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import ProfilePic from "../assets/profile.jpg"

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Reviwe = () => {
  return (
    <div className="my-12 px-14 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customer
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 md:m-5 rounded-xl border">
            <div className="space-y-6 p-5">
              <div className="text-amber-500 flex gap-2 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  quas voluptates dolorum doloremque vitae nemo officia incidunt
                  necessitatibus consectetur accusantium obcaecati dolores sit
                  quisquam eligendi architecto explicabo praesentium cupiditate
                  modi.
                </p>
                <Avatar
                  img={ProfilePic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, of Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 md:m-5 rounded-xl border">
            <div className="space-y-6 p-5">
              <div className="text-amber-500 flex gap-2 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  quas voluptates dolorum doloremque vitae nemo officia incidunt
                  necessitatibus consectetur accusantium obcaecati dolores sit
                  quisquam eligendi architecto explicabo praesentium cupiditate
                  modi.
                </p>
                <Avatar
                  img={ProfilePic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, of Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 md:m-5 rounded-xl border">
            <div className="space-y-6 p-5">
              <div className="text-amber-500 flex gap-2 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  quas voluptates dolorum doloremque vitae nemo officia incidunt
                  necessitatibus consectetur accusantium obcaecati dolores sit
                  quisquam eligendi architecto explicabo praesentium cupiditate
                  modi.
                </p>
                <Avatar
                  img={ProfilePic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, of Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 md:m-5 rounded-xl border">
            <div className="space-y-6 p-5">
              <div className="text-amber-500 flex gap-2 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  quas voluptates dolorum doloremque vitae nemo officia incidunt
                  necessitatibus consectetur accusantium obcaecati dolores sit
                  quisquam eligendi architecto explicabo praesentium cupiditate
                  modi.
                </p>
                <Avatar
                  img={ProfilePic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, of Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 md:m-5 rounded-xl border">
            <div className="space-y-6 p-5">
              <div className="text-amber-500 flex gap-2 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  quas voluptates dolorum doloremque vitae nemo officia incidunt
                  necessitatibus consectetur accusantium obcaecati dolores sit
                  quisquam eligendi architecto explicabo praesentium cupiditate
                  modi.
                </p>
                <Avatar
                  img={ProfilePic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, of Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow-2xl bg-white py-8 md:m-5 rounded-xl border">
            <div className="space-y-6 p-5">
              <div className="text-amber-500 flex gap-2 ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* Text */}
              <div className="mt-7">
                <p className="mb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
                  quas voluptates dolorum doloremque vitae nemo officia incidunt
                  necessitatibus consectetur accusantium obcaecati dolores sit
                  quisquam eligendi architecto explicabo praesentium cupiditate
                  modi.
                </p>
                <Avatar
                  img={ProfilePic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 mb-4"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, of Company</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviwe;
