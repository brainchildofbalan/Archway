"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const HomeTeam = () => {
  const containerRef = useRef(null)
  
  useGSAP(
    (ctx, ctxSafe) => {
      gsap.set('.panning-animation', { xPercent : -20})
      const pinTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.panning-animation',
          markers: false,
          scrub: true,
          anticipatePin: 1,
          start : 'top bottom',
          end : 'bottom -40%',
        },
      });
      pinTimeline.to('.panning-animation', { xPercent : 20})

      
    },
    { scope: containerRef }
  );

  return (
    <section className="w-full relative py-[15rem]" ref={containerRef}>
      <div className="container">
        <div className="w-full relative flex flex-col">
          <h3 className="text-[14rem] leading-[1.26] font-medium text-center">
            Meet Our Team
          </h3>
        </div>
        <div className="w-full flex flex-col mt-[10rem] ">
          <div className="w-auto flex flex-wrap justify-between panning-animation -translate-x-[10%] will-change-transform">
            <div className="w-full max-w-[33.9rem]">
              <div className="w-full relative aspect-square bg-[#eee]">
                <Image src={"/images/team/team-1.jpg"} alt="blog" fill />
                <span className="text-[1.4rem] leading-[1.26] text-[#717171] font-medium text-center px-[1rem] py-[.5rem] bg-[#fff] rounded-[2rem] absolute right-[1rem] top-[1rem]  shadow-sm">
                  Chief Architect
                </span>
                <div className="w-auto absolute bottom-0 left-0 bg-[#fff] px-[1rem]  py-[.5rem]">
                  <p className="text-[1.8rem] leading-[1.26] text-[#717171] font-medium">
                    Fuaadh zip
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[33.9rem]">
              <div className="w-full relative aspect-square bg-[#eee]">
                <Image src={"/images/team/team-2.jpg"} alt="blog" fill />
                <span className="text-[1.4rem] leading-[1.26] text-[#717171] font-medium text-center px-[1rem] py-[.5rem] bg-[#fff] rounded-[2rem] absolute right-[1rem] top-[1rem]  shadow-sm">
                  Chief Architect
                </span>
                <div className="w-auto absolute bottom-0 left-0 bg-[#fff] px-[1rem]  py-[.5rem]">
                  <p className="text-[1.8rem] leading-[1.26] text-[#717171] font-medium">
                    Fuaadh zip
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[33.9rem]">
              <div className="w-full relative aspect-square bg-[#eee]">
                <Image src={"/images/team/team-3.jpg"} alt="blog" fill />
                <span className="text-[1.4rem] leading-[1.26] text-[#717171] font-medium text-center px-[1rem] py-[.5rem] bg-[#fff] rounded-[2rem] absolute right-[1rem] top-[1rem]  shadow-sm">
                  Chief Architect
                </span>
                <div className="w-auto absolute bottom-0 left-0 bg-[#fff] px-[1rem]  py-[.5rem]">
                  <p className="text-[1.8rem] leading-[1.26] text-[#717171] font-medium">
                    Fuaadh zip
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

export default HomeTeam;
