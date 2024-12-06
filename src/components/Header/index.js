import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Icon from '../Icon'

const Header = () => {
  return (
      <header className='w-full py-[2rem] fixed left-0 top-0 z-[9999]'>
          <div className="container">
              <div className="w-full flex justify-between">
                  <div className="w-[21.3rem] aspect-[213.56/25.4] relative">
                      <Image src={'/logo.svg'} fill alt='logo' loading='eager' priority quality={100}/>
                  </div>
                  <div className="w-auto flex justify-between">
                      <ul className='text-[1.8rem] font-medium flex items-center space-x-[4.6rem] mr-[4rem]'>
                          <li>
                              <Link href={'/'}>Services</Link>
                          </li>
                          <li>
                              <Link href={'/'}>Projects</Link>
                          </li>
                          <li>
                              <Link href={'/'}>About</Link>
                          </li>
                          <li>
                              <Link href={'/'}>Blog</Link>
                          </li>
                          <li>
                              <Link href={'/'}>Contact</Link>
                          </li>
                      </ul>
                      <div className="w-[6rem] h-[6rem] rounded-full overflow-hidden bg-[#000] flex justify-center items-center">
                      <Icon icon="hamburger" size={'2.5rem'} color="#fff" />
                      </div>
                  </div>
              </div>
          </div>
    </header>
  )
}

export default Header