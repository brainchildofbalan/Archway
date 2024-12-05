import React from "react";

const HomeBanner = () => {
  return (
    <section className="w-full relative h-[100vh] flex items-center">
      <div className="container">
        <div className="w-full relative">
          <div className="w-full relative flex justify-center">
            <h1 className="text-[37.7rem] font-semibold text-center leading-[1.26]">
              Archway
            </h1>
          </div>
          <ul className="w-full relative flex flex-col leading-[1.26]">
            <li>
              <p className="text-[5rem] font-medium">
                Architectural Design Studio
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
