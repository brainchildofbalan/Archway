import Image from "next/image";
import React from "react";

const HomeReviews = () => {
  return (
    <section className="w-full relative">
      <div className="container">
        <div className="w-full relative h-[100vh] flex items-center">
          <div className="w-full h-full absolute flex items-center max-w-[50%] z-[1]">
            <h4 className="text-[14rem] leading-[1.26] font-medium">REVIEWS</h4>
          </div>
          <div className="w-full relative h-full flex items-center justify-end">
            <div className="w-full max-w-[47.1rem] relative aspect-[471/780] bg-[#eee]">
            <Image src={"/images/review/review-1.jpg"} alt="blog" fill /></div>
            <div className="w-full max-w-[54rem] flex flex-col leading-[1.26] ps-[6rem]">
              <h4 className="text-[2rem] text-[#686868] font-medium mb-[.8rem]">Project Name</h4>
              <h3 className="text-[4rem] text-[#000] font-semibold mb-[4.2rem]">Client Name</h3>
              <p className="text-[2rem] text-[#000] leading-[1.55]">{`“At Archway, we believe architecture is more than constructing buildings – it’s about creating spaces that inspire, uplift, and resonate with the spirit of those who inhabit them.”`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeReviews;
