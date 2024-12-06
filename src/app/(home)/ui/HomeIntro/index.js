"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
gsap.registerPlugin(ScrollTrigger)

const HomeIntro = () => {
  const containerRef = useRef(null)
  useGSAP(
    (ctx, ctxSafe) => {

      const first = ctx.selector('.first');
      const second = ctx.selector('.second');
      const last = ctx.selector('.last');
      const imageScale = ctx.selector('.image-scale');
      const firstSpacing = first[0].offsetLeft + first[0].clientWidth + 300;
      const secondSpacing = second[0].offsetLeft + window.innerWidth;
      const lastSpacing = last[0].offsetLeft + last[0].clientWidth + 300;
      gsap.set(first, {x : firstSpacing*-1, autoAlpha : 1})
      gsap.set(second, { x: secondSpacing, autoAlpha: 1 })
      gsap.set(imageScale, { x: secondSpacing, autoAlpha: 1 })
      
      gsap.set(last, {x : lastSpacing*-1, autoAlpha : 1})

      const pinTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.pinner',
          pin : true,
          end: `${window.innerHeight * 3}px`,
          markers: false,
          scrub: true,
          pinSpacer: true,
          anticipatePin : true
        }
      })
      pinTimeline.to(['.image-1', '.image-3'], { y: window.innerHeight*-1, duration : 1})
      pinTimeline.to(['.image-2'], { y: window.innerHeight, duration : 1 }, '<')
      
      pinTimeline.to(['.first', '.second', '.last', '.image-scale'], { x: 0, duration: 1 }, '-=.5')
      pinTimeline.to('.image-scale', { scale: 1 })
      pinTimeline.to('.image-scale-wrap', { x: 0 }, '<')
      
      },
    { scope: containerRef }
  );
  return (
    <section className="w-full mt-[-300vh]" ref={containerRef}>
      <div className="pinner h-[100vh]">
        <div className="w-full relative h-[100vh] flex items-center overflow-hidden">
          <div className="container">
            <div className="w-full relative">
              <div className="w-full flex flex-col">
                <div className="w-auto flex flex-wrap -mx-[4.35rem]">
                  <div className="w-1/3 px-[4.35rem]">
                    <div className="w-full aspect-[437/706] bg-[#eee] relative translate-y-[80vh] will-change-transform image-1">
                    <Image src={"/images/banner/banner-1.jpg"} alt="blog" fill /></div>
                  </div>
                  <div className="w-1/3 px-[4.35rem]">
                    <div className="w-full aspect-[437/706] bg-[#eee] relative translate-y-[-90vh] will-change-transform image-2">
                    <Image src={"/images/banner/banner-2.jpg"} alt="blog" fill /></div>
                  </div>
                  <div className="w-1/3 px-[4.35rem]">
                    <div className="w-full aspect-[437/706] bg-[#eee] relative translate-y-[70vh] will-change-transform image-3">
                    <Image src={"/images/banner/banner-3.jpg"} alt="blog" fill /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full absolute left-0 top-0 h-[100vh] flex items-center">
          <div className="container relative">
            <div className="w-full relative">
            <div className="w-full flex flex-col">
              <h4 className="text-[20.3rem] leading-[1.26] uppercase font-medium">
                <span className="w-full flex whitespace-nowrap opacity-0 first">Crafting</span>
                <span className="w-full flex items-center whitespace-nowrap opacity-0 second will-change-transform">
                  <span>Spaces</span>
                  
                </span>
                <span className="w-full flex whitespace-nowrap opacity-0 last will-change-transform">
                  Inspiring Lives
                </span>
              </h4>
            </div>
            <div className="w-full absolute left-0 top-1/2 -translate-y-1/2 translate-x-[14%] image-scale-wrap"> 
            <span className="w-full block aspect-[395/211] overflow-hidden relative rounded-[10rem] bg-[#eeee] will-change-transform scale-[.23] image-scale">
                <video src="https://cdn.prod.website-files.com/648de60e4084b58c01620e50/64ac0edfa68322c8ab4bf395_1-transcode.mp4" className="absolute left-0 top-0 w-full h-full object-cover" loop muted autoPlay></video>
              </span>
            </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HomeIntro;
