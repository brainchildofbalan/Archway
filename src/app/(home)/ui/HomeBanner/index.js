"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import React, { useRef } from "react";
gsap.config({ force3D : true})

const HomeBanner = () => {
  const loadingRef = useRef(null);
  const bannerRef = useRef(null);
  
  useGSAP(
    (ctx, ctxSafe) => {
      CustomEase.create("customEase", "0.350, 1.375, 0.710, -0.600");
      const loadingTimeline = gsap.timeline({});
      loadingTimeline.to('.text-anim-load', {
        y: 0, z: 0, stagger: .02, duration : 1, ease: CustomEase.create("customEase1", "0.580, 0.000, 0.450, 1.000"), willChange: 'transform'})
      loadingTimeline.to('.text-anim-load', { y : -550, z : 0, stagger: .02, duration : 1, ease : CustomEase.create("customEase2", "0.580, 0.000, 0.450, 1.000"), willChange : 'transform', delay : .4})
      loadingTimeline.to('.loading_block', { scaleY : 0, z : 0, transformOrigin : 'top', duration: 1.2, stagger: .09, ease : CustomEase.create("customEase3", "0.580, 0.000, 0.450, 1.000"), willChange : 'transform' }, '<')
      loadingTimeline.to('.text-anim-load-main', { y : 0, z : 0, autoAlpha : 1,  stagger: .02, duration : 1, ease : CustomEase.create("customEase4", "0.580, 0.000, 0.450, 1.000"), willChange : 'transform'})
      
    },
    { scope: loadingRef }
  );


  useGSAP(
    (ctx, ctxSafe) => {


      const pinTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: bannerRef.current,
          pin : true,
          end: `${window.innerHeight * 2}px`,
          markers: false,
          scrub: true,
          pinSpacer: true,
          anticipatePin : true
        }
      })
      pinTimeline.to('.text-wrap', { autoAlpha : 0, scale : .7, duration : 1})
      pinTimeline.to('.text-wrap', { autoAlpha : 0, duration : 1.5})



      const loadingTimeline = gsap.timeline({ delay : 2.08});
      loadingTimeline.to('.text-anim-load-main', { y : 0, z : 0, autoAlpha : 1,  stagger: .03, duration : .7, ease : CustomEase.create("customEase4", "0.400, 0.250, 0.155, 0.860"), willChange : 'transform'})
      loadingTimeline.to('.anim-description', { y : 0, z : 0, autoAlpha : 1, duration : .7, ease : CustomEase.create("customEase5", "0.400, 0.250, 0.155, 0.860"), willChange : 'transform'}, '-=.8')
      
    },
    { scope: bannerRef }
  );

  return (
    <>
      
      <div
        className="fixed left-0 top-0 w-full h-full z-[9999] pointer-events-none"
        ref={loadingRef}
      >
        <div className="absolute left-0 top-0 flex justify-center items-center w-full h-full z-[99991] text-[#fff]">
        <div className="container">
          <div className="w-full relative">
            <div className="w-full relative flex justify-center">
              <div className="text-[37.7rem] w-full flex font-semibold text-center leading-[1.26] loading-text will-change-transform transition-none overflow-hidden">
                <span className="inline-block text-anim-load tracking-[-.4rem] translate-y-[500px] will-change-transform font-kern">A</span>
                <span className="inline-block text-anim-load tracking-[-.4rem] translate-y-[500px] will-change-transform font-kern">r</span>
                <span className="inline-block text-anim-load tracking-[-.4rem] translate-y-[500px] will-change-transform font-kern">c</span>
                <span className="inline-block text-anim-load tracking-[-.4rem] translate-y-[500px] will-change-transform font-kern">h</span>
                <span className="inline-block text-anim-load tracking-[-.4rem] translate-y-[500px] will-change-transform font-kern">w</span>
                <span className="inline-block text-anim-load tracking-[-.4rem] translate-y-[500px] will-change-transform font-kern">a</span>
                <span className="inline-block text-anim-load tracking-[-.4rem] translate-y-[500px] will-change-transform font-kern">y</span>
              </div>
            </div>
            <ul className="w-full relative flex flex-col leading-[1.26] opacity-0">
              <li>
                <p className="text-[5rem] font-medium">
                  Architectural Design Studio
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <div className="w-full h-full absolute flex top-0 left-0">
          <div className="w-1/4 h-full bg-[#000] loading_block will-change-transform scale-y-100"></div>
          <div className="w-1/4 h-full bg-[#000] loading_block will-change-transform scale-y-100"></div>
          <div className="w-1/4 h-full bg-[#000] loading_block will-change-transform scale-y-100"></div>
          <div className="w-1/4 h-full bg-[#000] loading_block will-change-transform scale-y-100"></div>
        </div>
      </div>
      <section className="w-full relative h-[100vh] flex items-center" ref={bannerRef}>
        <div className="container">
          <div className="w-full relative text-wrap will-change-transform">
            <div className="w-full relative flex justify-center">
            <h1 className="text-[37.7rem] w-full flex font-semibold text-center leading-[1.26] loading-text will-change-transform transition-none">
                <span className="inline-block text-anim-load-main tracking-[-.4rem] translate-y-[120px] will-change-transform font-kern">A</span>
                <span className="inline-block text-anim-load-main tracking-[-.4rem] translate-y-[120px] will-change-transform font-kern">r</span>
                <span className="inline-block text-anim-load-main tracking-[-.4rem] translate-y-[120px] will-change-transform font-kern">c</span>
                <span className="inline-block text-anim-load-main tracking-[-.4rem] translate-y-[120px] will-change-transform font-kern">h</span>
                <span className="inline-block text-anim-load-main tracking-[-.4rem] translate-y-[120px] will-change-transform font-kern">w</span>
                <span className="inline-block text-anim-load-main tracking-[-.4rem] translate-y-[120px] will-change-transform font-kern">a</span>
                <span className="inline-block text-anim-load-main tracking-[-.4rem] translate-y-[120px] will-change-transform font-kern">y</span>
              </h1>
            </div>
            <ul className="w-full relative flex flex-col leading-[1.26] translate-y-[120px] will-change-transform anim-description opacity-0">
              <li>
                <p className="text-[5rem] font-medium">
                  Architectural Design Studio
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
