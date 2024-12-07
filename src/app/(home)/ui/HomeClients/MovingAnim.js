"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
gsap.config({ force3D: true });

const Item = ({ containerRefParent, isReverse }) => {
  const itemRef = useRef(null);
  useEffect(() => {
    let number = 0;
    let animationId;
    console.log(itemRef.current.offsetLeft);
      const handleMovement = () => {
        if (isReverse) {
            if (number > itemRef.current.clientWidth) {
              number = 0;
            }
            gsap.set(itemRef.current, { x: number * -1, z: 0 });
            number += 3;
        }
        else {
            if (number > itemRef.current.clientWidth) {
              number = 0;
            }
            gsap.set(itemRef.current, { x: number * 1, z: 0 });
            number += 3;
          }

      animationId = requestAnimationFrame(handleMovement);
    };

    requestAnimationFrame(handleMovement);
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [containerRefParent]);

  return (
    <div
      className="w-auto flex items-wrap text-[inherit] will-change-transform pointer-events-none"
      ref={itemRef}
    >
      <div className="w-[17.4rem] aspect-[174/60] relative mx-[5rem] items-moving text-[inherit] whitespace-nowrap flex items-center">
        <Image src={"/images/client/logo-1.png"} alt="clients" fill />
      </div>
      <div className="w-[17.4rem] aspect-[174/60] relative mx-[5rem] items-moving text-[inherit] whitespace-nowrap flex items-center">
        <Image src={"/images/client/logo-1.png"} alt="clients" fill />
      </div>
      <div className="w-[17.4rem] aspect-[174/60] relative mx-[5rem] items-moving text-[inherit] whitespace-nowrap flex items-center">
        <Image src={"/images/client/logo-1.png"} alt="clients" fill />
      </div>
      <div className="w-[17.4rem] aspect-[174/60] relative mx-[5rem] items-moving text-[inherit] whitespace-nowrap flex items-center">
        <Image src={"/images/client/logo-1.png"} alt="clients" fill />
      </div>
      <div className="w-[17.4rem] aspect-[174/60] relative mx-[5rem] items-moving text-[inherit] whitespace-nowrap flex items-center">
        <Image src={"/images/client/logo-1.png"} alt="clients" fill />
          </div>
          <div className="w-[17.4rem] aspect-[174/60] relative mx-[5rem] items-moving text-[inherit] whitespace-nowrap flex items-center">
        <Image src={"/images/client/logo-1.png"} alt="clients" fill />
          </div>
          <div className="w-[17.4rem] aspect-[174/60] relative mx-[5rem] items-moving text-[inherit] whitespace-nowrap flex items-center">
        <Image src={"/images/client/logo-1.png"} alt="clients" fill />
          </div>
          <div className="w-[17.4rem] aspect-[174/60] relative mx-[5rem] items-moving text-[inherit] whitespace-nowrap flex items-center">
        <Image src={"/images/client/logo-1.png"} alt="clients" fill />
      </div>
    </div>
  );
};

const MovingAnim = ({isReverse}) => {
  const containerRef = useRef(null);
  return (
    <div
      className={`w-full h-full left-0 top-0 flex items-center overflow-hidden ${!isReverse ? "flex-row-reverse" : ''}`}
      ref={containerRef}
    >
      <Item containerRefParent={containerRef} isReverse={isReverse} />
      <Item containerRefParent={containerRef} isReverse={isReverse} />
    </div>
  );
};

export default MovingAnim;
