import Image from 'next/image'
import React from 'react'

const HomeServices = () => {
  return (
      <section className='w-full relative'>
          <div className="container">
              <div className="w-full relative flex flex-col">
                  <h3 className='text-[33.2rem] leading-[1.26] font-medium uppercase'>Services</h3>
              </div>

              <div className="w-full relative flex flex-col space-y-[4.8rem]">
                  <div className="w-full relative max-w-[62rem] mx-auto">
                      <div className="w-full relative aspect-[620/706] bg-[#eee]">
                      
                <Image src={"/images/services/services-1.jpg"} alt="blog" fill />
                          <div className="w-auto absolute bottom-0 left-0 bg-[#fff] px-[1rem]  py-[.5rem]">
                              <p className='text-[3rem] leading-[1.26] text-[#717171] font-medium'>Olive BTM</p>
                        </div>
                      </div>
                  </div>
                  <div className="w-full relative max-w-[62rem] mx-auto">
                      <div className="w-full relative aspect-[620/706] bg-[#eee]">
                      <Image src={"/images/services/services-2.jpg"} alt="blog" fill />
                          <div className="w-auto absolute bottom-0 left-0 bg-[#fff] px-[1rem]  py-[.5rem]">
                              <p className='text-[3rem] leading-[1.26] text-[#717171] font-medium'>Olive HSR</p>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
    </section>
  )
}

export default HomeServices