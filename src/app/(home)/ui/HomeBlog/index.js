"use client";
import Icon from "@/components/Icon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
gsap.config({ force3D : true })

import { Swiper, SwiperSlide } from "swiper/react";


const HomeBlog = () => {
  const containerRef = useRef(null)
  useGSAP((ctx, ctxSafe) => {
    const wrapper = ctx.selector('.item-wrapper')
    const mousemove = ctx.selector('.item-move')
    const containerWidth = ctx.selector('.container-width')
    const containerSize = (mousemove[0].clientWidth - containerWidth[0].clientWidth) /2
    console.log(containerSize);
    



    mousemove[0].addEventListener('mousemove', (e) => {
      console.log(e.clientX - ((mousemove[0].clientWidth) /2));
      const movingWidth = (e.clientX - (((mousemove[0].clientWidth)) / 2)) * -1 
      gsap.to(wrapper, {
        x: movingWidth,
        duration: 0.4, // Smooth transition
        ease: "power1.out", // Smoother easing
        overwrite: "auto", // Prevent animation conflicts
      });
      // console.log(wrapper[0].clientWidth);
    })

    
  
  }, { scope : containerRef})
  return (
    <section className="w-full relative" ref={containerRef}>
      <div className="container">
        <div className="w-full relative container-width">
          <h4 className="text-[15rem] leading-[1.26] font-medium text-center py-[10rem]">
            BLOG
          </h4>
        </div>
        </div>
        <div className="w-full relative flex justify-center item-move">
          <div
            className="w-auto relative flex item-wrapper will-change-transform"
          >
            <Link href={'/'} className="!w-[55rem] px-[4rem]">
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
            </Link>
            <Link href={'/'} className="!w-[55rem] px-[4rem]">
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
            </Link>
            <Link href={'/'} className="!w-[55rem] px-[4rem]">
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
            </Link>
            <Link href={'/'} className="!w-[55rem] px-[4rem]">
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
            </Link>
            <Link href={'/'} className="!w-[55rem] px-[4rem]">
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
            </Link>
            <Link href={'/'} className="!w-[55rem] px-[4rem]">
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
            </Link>
          </div>
        </div>
        <div className="w-full flex justify-center pt-[8rem]">
          <Link href={"/"} className="text-[5rem] font-semibold flex items-center space-x-[1.2rem]">
            <span className="leading-none flex items-center">View All</span>
            <span className=" flex items-center"> <Icon icon="arrow-1" size={'6rem'} color="#000" /> </span>
          </Link>
        </div>
    </section>
  );
};

export default HomeBlog;
