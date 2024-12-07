import React from "react"
import MovingAnim from "./MovingAnim";

const HomeClients = () => {
  return (
    <section className="w-full relative h-[100vh] flex items-center">
      <div className="w-full">
        <div className="w-full relative">
          <div className="w-full relative fex flex-col">
            <MovingAnim/>
          </div>
          <h4 className="text-[15rem] leading-[1.26] font-medium text-center py-[10rem]">
            Clients
          </h4>
          <div className="w-full relative fex flex-col">
          <MovingAnim isReverse/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeClients;
