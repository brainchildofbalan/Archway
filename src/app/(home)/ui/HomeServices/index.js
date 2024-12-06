"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const HomeServices = () => {
  const containerRef = useRef(null);

  useGSAP(
    (ctx, ctxSafe) => {
      const items = ctx.selector(".items");
      const itemHeight = items[0].clientHeight * (items.length - 1);
      console.log(items);
      const pinTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".pinner",
          pin: true,
          end: `${itemHeight * 3}px`,
          markers: false,
          scrub: true,
          pinSpacer: true,
          anticipatePin: 1,
        },
      });
          
          items.forEach((element, index) => {
          if (index === 0) {
              pinTimeline.to(items[index], {y : (window.innerHeight/1.1)*-1, duration : 1})
          } else {
              pinTimeline.to(items[index], { y: ((window.innerHeight/1.1) + items[0].clientHeight - 30*index) * -1, duration : 1 })
            pinTimeline.to(items[index-1], {scale : .9, duration : 1}, '-=.9')
          }
              if (index === (items.length - 1)) { 
                  pinTimeline.to(containerRef, { autoAlpha : 1, duration : .2})
              }
      });
    },
    { scope: containerRef }
  );
  return (
    <section className="w-full" ref={containerRef}>
      <div className="w-full pinner h-[100vh]">
        <div className="container">
          <div className="w-full relative flex h-[100vh] items-center">
            <h3 className="text-[33.2rem] leading-[1.26] font-medium uppercase">
              Services
            </h3>
          </div>

          <div className="w-full relative flex flex-col space-y-[4.8rem]">
            <div className="w-full relative max-w-[62rem] mx-auto items will-change-transform">
              <div className="w-full relative aspect-[620/706] bg-[#eee]">
                <Image
                  src={"/images/services/services-1.jpg"}
                  alt="blog"
                  fill
                />
                <div className="w-auto absolute bottom-0 left-0 bg-[#fff] px-[1rem]  py-[.5rem]">
                  <p className="text-[3rem] leading-[1.26] text-[#717171] font-medium">
                    Olive BTM
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full relative max-w-[62rem] mx-auto items will-change-transform">
              <div className="w-full relative aspect-[620/706] bg-[#eee]">
                <Image
                  src={"/images/services/services-2.jpg"}
                  alt="blog"
                  fill
                />
                <div className="w-auto absolute bottom-0 left-0 bg-[#fff] px-[1rem]  py-[.5rem]">
                  <p className="text-[3rem] leading-[1.26] text-[#717171] font-medium">
                    Olive HSR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
