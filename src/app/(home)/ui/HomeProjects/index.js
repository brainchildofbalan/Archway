import Icon from "@/components/Icon";
import MovingAnimCard from "@/components/MovingAnimCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeProjects = () => {
  return (
    <section className="w-full relative">
      <div className="container">
        <div className="w-full relative">
          <h4 className="text-[31.1rem] text-center font-medium leading-[1.26]">
            PROJECTS
          </h4>
          <div className="w-full relative flex-col">
            <div className="w-auto flex flex-wrap -mx-[8.1rem]">
              <div className="w-[45%] relative px-[8.1rem]">
                <div className="w-full aspect-[650/829] bg-[#000] relative group overflow-hidden">
                <Image src={"/images/projects/projects-1.jpg"} alt="blog" fill className="transition-all scale-[1] group-hover:scale-[1.1] duration-500 group-hover:opacity-75"  />
                <div className="absolute left-0 top-0 w-full h-full scale-[1.1] opacity-0 text-[#fff] text-[6rem] will-change-transform font-semibold group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                        <MovingAnimCard />
                      </div>
                  <div className="w-auto absolute bottom-0 left-0 bg-[#fff] px-[1rem]  py-[.5rem]">
                    <p className="text-[3rem] leading-[1.26] text-[#717171] font-medium">
                      Olive HSR
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[55%] relative px-[8.1rem]">
                <div className="w-full aspect-[783/597] bg-[#000] relative group overflow-hidden">
                <Image src={"/images/projects/projects-2.jpg"} alt="blog" fill className="transition-all scale-[1] group-hover:scale-[1.1] duration-500 group-hover:opacity-75"  />
                <div className="absolute left-0 top-0 w-full h-full scale-[1.1] opacity-0 text-[#fff] text-[6rem] will-change-transform font-semibold group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                        <MovingAnimCard />
                      </div>
                  <div className="w-auto absolute bottom-0 left-0 bg-[#fff] px-[1rem]  py-[.5rem]">
                    <p className="text-[3rem] leading-[1.26] text-[#717171] font-medium">
                      Olive HSR
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[55%] relative px-[8.1rem] mt-[15rem]">
                <div className="w-full aspect-[783/597] bg-[#000] relative group overflow-hidden">
                <Image src={"/images/projects/projects-3.jpg"} alt="blog" fill className="transition-all scale-[1] group-hover:scale-[1.1] duration-500 group-hover:opacity-75"  />
                <div className="absolute left-0 top-0 w-full h-full scale-[1.1] opacity-0 text-[#fff] text-[6rem] will-change-transform font-semibold group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                        <MovingAnimCard />
                      </div>
                  <div className="w-auto absolute bottom-0 left-0 bg-[#fff] px-[1rem]  py-[.5rem]">
                    <p className="text-[3rem] leading-[1.26] text-[#717171] font-medium">
                      Olive HSR
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[45%] relative px-[8.1rem]">
                <div className="w-full aspect-[650/829] bg-[#000] relative group overflow-hidden">
                <Image src={"/images/projects/projects-4.jpg"} alt="blog" fill className="transition-all scale-[1] group-hover:scale-[1.1] duration-500 group-hover:opacity-75"  />
                <div className="absolute left-0 top-0 w-full h-full scale-[1.1] opacity-0 text-[#fff] text-[6rem] will-change-transform font-semibold group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                        <MovingAnimCard />
                      </div>
                  <div className="w-auto absolute bottom-0 left-0 bg-[#fff] px-[1rem]  py-[.5rem]">
                    <p className="text-[3rem] leading-[1.26] text-[#717171] font-medium">
                      Olive HSR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center pt-[8rem]">
          <Link href={"/"} className="text-[5rem] font-semibold flex items-center space-x-[1.2rem]">
            <span className="leading-none flex items-center">View All</span>
            <span className=" flex items-center"> <Icon icon="arrow-1" size={'6rem'} color="#000" /> </span>
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
