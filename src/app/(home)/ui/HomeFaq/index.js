import Icon from "@/components/Icon";
import Image from "next/image";
import React from "react";

const HomeFaq = () => {
  return (
    <section className="w-full">
      <div className="container">
        <div className="w-full relative flex flex-col">
          <h4 className="text-[10rem] leading-[1.26] font-medium mb-[10rem]">
            Frequently Asked Questions
          </h4>
        </div>
        <div className="w-full relative flex flex-col">
          <div className="w-auto flex flex-wrap">
            <div className="w-1/2">
              <div className="w-full relative max-w-[63.7rem] aspect-[637/551] bg-[#eee]">
                <Image src={"/images/faq/faq.jpg"} alt="blog" fill />
              </div>
            </div>
            <div className="w-1/2">
              <div className="w-full relative flex flex-col">
                <ul>
                  <li className="w-full border-b border-b-[#BFBFBF] py-[3rem]">
                    <div className="w-full relative flex flex-col">
                      <h4 className="text-[3rem] leading-[1.26] font-medium flex items-center justify-between">
                        <span>How to start a project?</span>
                        <Icon icon="plus" size={"3.5rem"} color="#000" />
                      </h4>
                      <p className="text-[2rem] text-[#000] leading-[1.55] pt-[3rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo optio laboriosam, molestias est repudiandae rem
                        quasi tempore minima eius dignissimos, aspernatur, in
                        dolores ratione delectus facere quisquam neque facilis
                        praesentium!
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
