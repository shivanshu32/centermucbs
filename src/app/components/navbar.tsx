'use client'
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Link from "next/link";


import Image from "next/image";




export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [show, setshow] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }; 
   const closeMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <nav className="bg-white shadow  z-50 w-full ">
      <div className="container mx-auto px-4 py-2 md:flex md:items-center md:justify-between ">
        <div className="flex justify-between items-center md:ml-[3%]">
         
          <Image
                    className="dark:invert"
                    src="/cmucblogo.jpg"
                    alt="cmucb logo"
                    width={100}
                    height={100}
                    priority
                  />
          
         
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            {isMenuOpen ? <MdClose size={30} /> : <BiMenuAltRight size={30} />}
          </button>
        </div>

        <div
          onClick={closeMenu}
          className={`md:flex items-center justify-around gap-10 md:mr-[3%] ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="md:flex gap-10 mt-[5%] md:mt-0 md:justify-end">
            <li >
              <Link
                href="/"
                className="focus:outline-none text-base border-transparent font-bold  cursor-pointer h-full flex items-center hover:text-[#DE466C]  text-[#004281] tracking-normal border-b-2"
              >
                Home
              </Link>
            </li>
            <li >
            
              <Link
               href="/#aboutus"
                className="focus:outline-none text-base border-transparent font-bold  cursor-pointer h-full flex items-center hover:text-[#DE466C]  text-[#004281] tracking-normal border-b-2"
              >
                About
              </Link>
            </li>
            <li >
              {/* <Link
                href="#services"
                className="focus:outline-none text-base border-transparent font-bold  cursor-pointer h-full flex items-center hover:text-[#DE466C]  text-[#004281] tracking-normal border-b-2"
              > */}
               <div className="flex items-start relative focus:outline-none text-base border-transparent font-bold  cursor-pointer h-full flex items-center hover:text-[#DE466C]  text-[#004281] tracking-normal border-b-2">
                Activities

                <span className="py-3 bg-white text-gray-500 rounded-r px-2" onClick={() => setshow(!show)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                </span>

                {show && (
                        <ul className="bg-white shadow rounded z-50 py-1 w-24 absolute right-0 left-0 top-0 mt-12 dropdown-content">
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 px-5 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                             <Link className="text-md" href="/#trainingprogram"> Training</Link>
                             
                              </li>
                            <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 px-5 hover:bg-indigo-700 hover:text-white px-3 font-normal">
                            <Link href="/#services">  Consultancy</Link>
                             
                              </li>

                        </ul>
                    )}

</div>

              {/* </Link> */}
            </li>
            <li >
              <Link
                href={"https://website.rbi.org.in/web/rbi/notifications/rbi-circulars"}
                className="focus:outline-none text-base border-transparent font-bold  cursor-pointer h-full flex items-center hover:text-[#DE466C]  text-[#004281] tracking-normal border-b-2"
              >
               Regulatory Updates
              </Link>
            </li>

            <li >
              <Link
                href="/archive"
                className="focus:outline-none text-base border-transparent font-bold  cursor-pointer h-full flex items-center hover:text-[#DE466C]  text-[#004281] tracking-normal border-b-2"
              >
               Archive
              </Link>
            </li>
           
            {/* <li onClick={() => scroll.scrollToTop()}>
              <Link
                to="/myUltranet"
                className="focus:outline-none text-base border-transparent font-bold  cursor-pointer h-full flex items-center hover:text-[#DE466C]  text-[#004281] tracking-normal border-b-2"
              >
                Regulatory Updates
              </Link>
            </li> */}
            <li >
              <Link
                href="/#contactus"
                // activeClass="active"
                // offset={-20}
                // duration={1500}
                // smooth={true}
                className="hidden sm:block focus:outline-none text-base border-transparent font-bold  cursor-pointer h-full md:flex items-center hover:text-[#DE466C]  text-[#004281] tracking-normal border-b-2"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="md:flex items-center mt-4 md:mt-0">
            <Link href={"https://forms.gle/ExCvt9jbBhp7tzg68"}>
              <button className="hover:bg-gradient-to-r from-[#DE466C] to-[#004281] bg-[#004281] px-5 text-lg py-2  text-white font-medium rounded-full transition duration-300">
                Nominations
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}








