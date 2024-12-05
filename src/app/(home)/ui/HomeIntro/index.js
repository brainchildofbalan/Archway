import Image from "next/image";
import React from "react";

const HomeIntro = () => {
  return (
    <section className="w-full">
      <div className="pinner min-h-[100vh]">
        <div className="w-full relative h-full">
          <div className="container">
            <div className="w-full relative">
              <div className="w-full flex flex-col">
                <div className="w-auto flex flex-wrap -mx-[4.35rem]">
                  <div className="w-1/3 px-[4.35rem]">
                    <div className="w-full aspect-[437/706] bg-[#eee] relative">
                    <Image src={"/images/banner/banner-1.jpg"} alt="blog" fill /></div>
                  </div>
                  <div className="w-1/3 px-[4.35rem]">
                    <div className="w-full aspect-[437/706] bg-[#eee] relative">
                    <Image src={"/images/banner/banner-2.jpg"} alt="blog" fill /></div>
                  </div>
                  <div className="w-1/3 px-[4.35rem]">
                    <div className="w-full aspect-[437/706] bg-[#eee] relative">
                    <Image src={"/images/banner/banner-3.jpg"} alt="blog" fill /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative">
          <div className="container">
            <div className="w-full flex flex-col">
              <h4 className="text-[20.3rem] leading-[1.26] uppercase font-medium">
                <span className="w-full flex whitespace-nowrap">Crafting</span>
                <span className="w-full flex items-center whitespace-nowrap">
                  <span>Spaces</span>
                  <span className="w-[39.5rem] ml-[3rem] block aspect-[395/211] overflow-hidden relative rounded-[1.6rem] bg-[#eeee]">
                  <Image src={"/images/video/video.jpg"} alt="blog" fill /></span>
                </span>
                <span className="w-full flex whitespace-nowrap">
                  Inspiring Lives
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
