import Image from "next/image";
import React from "react";

const HomeTeam = () => {
  return (
    <section className="w-full relative py-[15rem]">
      <div className="container">
        <div className="w-full relative flex flex-col">
          <h3 className="text-[14rem] leading-[1.26] font-medium text-center">Meet Our Team</h3>
        </div>
        <div className="w-full flex flex-col mt-[10rem]">
          <div className="w-auto flex flex-wrap justify-between">
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
