"use client";
import Icon from "@/components/Icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

const HomeBlog = () => {
  return (
    <section className="w-full relative">
      <div className="container">
        <div className="w-full relative">
          <h4 className="text-[15rem] leading-[1.26] font-medium text-center py-[10rem]">
            BLOG
          </h4>
        </div>
        <div className="w-full relative">
          <Swiper
            className="!overflow-visible"
            slidesPerView={"auto"}
            spaceBetween={80}
            centeredSlides
            loop
          >
            <SwiperSlide className="!w-[47.4rem]">
              <div className="w-full">
                <div className="w-full aspect-[473/493] relative bg-[#eee] mb-[2rem]">
                  <Image src={"/images/blogs/blog-1.jpg"} alt="blog" fill />
                </div>
                <h5 className="w-full relative text-[1.8rem] leading-[1.26] mb-[.8rem] text-[#686868]">
                  5 Min Read
                </h5>
                <h3 className="text-[3.5rem] font-semibold leading-[1.26]">
                  Blog Title
                </h3>
                <p className="w-full relative text-[2rem] leading-[1.55]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-[47.4rem]">
              <div className="w-full">
                <div className="w-full aspect-[473/493] relative bg-[#eee] mb-[2rem]">
                  <Image src={"/images/blogs/blog-2.jpg"} alt="blog" fill />
                </div>
                <h5 className="w-full relative text-[1.8rem] leading-[1.26] mb-[.8rem] text-[#686868]">
                  5 Min Read
                </h5>
                <h3 className="text-[3.5rem] font-semibold leading-[1.26]">
                  Blog Title
                </h3>
                <p className="w-full relative text-[2rem] leading-[1.55]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-[47.4rem]">
              <div className="w-full">
                <div className="w-full aspect-[473/493] relative bg-[#eee] mb-[2rem]">
                  <Image src={"/images/blogs/blog-3.jpg"} alt="blog" fill />
                </div>
                <h5 className="w-full relative text-[1.8rem] leading-[1.26] mb-[.8rem] text-[#686868]">
                  5 Min Read
                </h5>
                <h3 className="text-[3.5rem] font-semibold leading-[1.26]">
                  Blog Title
                </h3>
                <p className="w-full relative text-[2rem] leading-[1.55]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-[47.4rem]">
              <div className="w-full">
                <div className="w-full aspect-[473/493] relative bg-[#eee] mb-[2rem]">
                  <Image src={"/images/blogs/blog-4.jpg"} alt="blog" fill />
                </div>
                <h5 className="w-full relative text-[1.8rem] leading-[1.26] mb-[.8rem] text-[#686868]">
                  5 Min Read
                </h5>
                <h3 className="text-[3.5rem] font-semibold leading-[1.26]">
                  Blog Title
                </h3>
                <p className="w-full relative text-[2rem] leading-[1.55]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-[47.4rem]">
              <div className="w-full">
                <div className="w-full aspect-[473/493] relative bg-[#eee] mb-[2rem]">
                  <Image src={"/images/blogs/blog-5.jpg"} alt="blog" fill />
                </div>
                <h5 className="w-full relative text-[1.8rem] leading-[1.26] mb-[.8rem] text-[#686868]">
                  5 Min Read
                </h5>
                <h3 className="text-[3.5rem] font-semibold leading-[1.26]">
                  Blog Title
                </h3>
                <p className="w-full relative text-[2rem] leading-[1.55]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="!w-[47.4rem]">
              <div className="w-full">
                <div className="w-full aspect-[473/493] relative bg-[#eee] mb-[2rem]">
                  <Image src={"/images/blogs/blog-6.jpg"} alt="blog" fill />
                </div>
                <h5 className="w-full relative text-[1.8rem] leading-[1.26] mb-[.8rem] text-[#686868]">
                  5 Min Read
                </h5>
                <h3 className="text-[3.5rem] font-semibold leading-[1.26]">
                  Blog Title
                </h3>
                <p className="w-full relative text-[2rem] leading-[1.55]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-full flex justify-center pt-[8rem]">
          <Link href={"/"} className="text-[5rem] font-semibold flex items-center space-x-[1.2rem]">
            <span className="leading-none flex items-center">View All</span>
            <span className=" flex items-center"> <Icon icon="arrow-1" size={'6rem'} color="#000" /> </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlog;
