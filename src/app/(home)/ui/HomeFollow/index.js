import Icon from '@/components/Icon'
import React from 'react'

const HomeFollow = () => {
  return (
    <section className='w-full relative py-[15rem]'>
      <div className="container">
        <div className="w-full relative">
          <h4 className='text-[10rem] leading-[1.26] font-medium mb-[10rem]'>Follow US</h4>
          <div className="w-full relative flex flex-col">
            <div className="w-full text-[5rem] flex justify-between font-medium py-[4.8rem] border-b border-b-[#BEBEBE]">
            Instagram
            <span>
              <Icon icon="arrow-up" size={'6rem'} color="#000" /> 
            </span>
            </div>
            <div className="w-full text-[5rem] flex justify-between font-medium py-[4.8rem] border-b border-b-[#BEBEBE]">
            Youtube
            <span>
              <Icon icon="arrow-up" size={'6rem'} color="#000" /> 
            </span>
            </div>
            <div className="w-full text-[5rem] flex justify-between font-medium py-[4.8rem] border-b border-b-[#BEBEBE]">
            Facebook
            <span>
              <Icon icon="arrow-up" size={'6rem'} color="#000" /> 
            </span>
            </div>
            <div className="w-full text-[5rem] flex justify-between font-medium py-[4.8rem] border-b border-b-[#BEBEBE]">
            Linkedin
            <span>
              <Icon icon="arrow-up" size={'6rem'} color="#000" /> 
            </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeFollow