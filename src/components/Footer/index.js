import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full relative bg-[#000] text-[#fff] pt-[12rem]">
      <div className="container">
        <div className="w-full relative flex flex-col">
          <div className="w-auto flex flex-wrap">
            <div className="w-full flex flex-1">
              <div className="w-auto flex flex-col">
                <div className="w-full relative flex-1">
                  <Link
                    href="mailto:info@archwaydesigners.com"
                    className="text-[6rem] leading-[1.26] text-[#fff]"
                  >
                    info@archwaydesigners.com
                  </Link>
                </div>
                <div className="w-full flex justify-between text-[3rem] leading-[1.26] mt-[6rem]">
                  <Link
                    href={"tel:+91 9605 000 234"}
                    className={"text-[#787878]"}
                  >
                    +91 9605 000 234
                  </Link>
                  <Link href={"/"} className={"text-[#787878]"}>
                    Address, Address, Address,{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[45.3rem]">
              <form action="">
                <div className="w-full relative"></div>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full relative flex  justify-between text-[1.8rem] leading-[1.26] pb-[4rem] pt-[6rem]">
          <p>© 2022 All Rights Reserved</p>
          <div className="w-auto">
            <Link href="/">Privacy Policy </Link>. | .
            <Link href="/">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
