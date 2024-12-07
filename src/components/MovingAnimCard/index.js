"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
gsap.config({ force3D : true})

const Item = ({ containerRefParent, length }) => {
  const itemRef = useRef(null);
    useEffect(() => {
        let number = 0;
        let animationId;
        console.log(itemRef.current.offsetLeft);
        const handleMovement = () => {
            if (number > (itemRef.current.clientWidth)) {
              
            number = 0
          }
        gsap.set(itemRef.current, { x: number * -1, z : 0 });
            number += 3;
            
            animationId = requestAnimationFrame(handleMovement);
        };
        
        containerRefParent.current.addEventListener('mouseenter', () => requestAnimationFrame(handleMovement), false)
        containerRefParent.current.addEventListener('mouseleave', () => {
            setTimeout(() => {
                cancelAnimationFrame(animationId)
            }, 300);
        }, false)
        return () => {
            cancelAnimationFrame(animationId)
    };
  }, [containerRefParent]);

  return (
    <div className="w-auto flex items-wrap text-[inherit] will-change-transform pointer-events-none" ref={itemRef}>
      <div className=" aspect-[10/5] mx-[10px] items-moving text-[inherit] whitespace-nowrap flex items-center">Click. Learn More</div>
      <div className=" aspect-[10/5] mx-[10px] items-moving text-[inherit] whitespace-nowrap flex items-center">Click. Learn More</div>
      <div className=" aspect-[10/5] mx-[10px] items-moving text-[inherit] whitespace-nowrap flex items-center">Click. Learn More</div>
      <div className=" aspect-[10/5] mx-[10px] items-moving text-[inherit] whitespace-nowrap flex items-center">Click. Learn More</div>
      <div className=" aspect-[10/5] mx-[10px] items-moving text-[inherit] whitespace-nowrap flex items-center">Click. Learn More</div>
    </div>
  );
};

const MovingAnimCard = () => {
  const containerRef = useRef(null);
  return (
    <div
      className="w-full h-full absolute left-0 top-0 flex items-center overflow-hidden"
      ref={containerRef}
    >
      <Item containerRefParent={containerRef}/>
      <Item containerRefParent={containerRef}/>
    </div>
  );
};

export default MovingAnimCard;
