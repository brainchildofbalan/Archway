import Icon from "@/components/Icon";
import Link from "next/link";
import React from "react";

const HomeAbout = () => {
  return (
    <section className="w-full relative py-[10rem]">
      <div className="container">
        <div className="w-full relative flex flex-col leading-[1.26]">
          <h4 className="text-[15rem] font-medium mb-[5rem]">About Us</h4>
          <div className="w-full relative max-w-[99.8rem] ml-auto">
            <p className="w-full text-[5rem] mb-[4rem]">
              {`At Archway, we believe architecture is more than constructing
              buildings – it’s about creating spaces that inspire, uplift, and
              resonate with the spirit of those who inhabit them.`}
            </p>
            <div className="w-full relative">
              <Link
                href={"/"}
                className="text-[5rem] font-semibold flex items-center space-x-[1.2rem]"
              >
                <span className="leading-none flex items-center">About Us</span>
                <span className=" flex items-center">
                  <Icon icon="arrow-1" size={"6rem"} color="#000" />{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
