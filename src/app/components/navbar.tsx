'use client'
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import Link from "next/link";

import Image from "next/image";




export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
               href="#aboutus"
                className="focus:outline-none text-base border-transparent font-bold  cursor-pointer h-full flex items-center hover:text-[#DE466C]  text-[#004281] tracking-normal border-b-2"
              >
                About
              </Link>
            </li>
            <li >
              <Link
                href="#services"
                className="focus:outline-none text-base border-transparent font-bold  cursor-pointer h-full flex items-center hover:text-[#DE466C]  text-[#004281] tracking-normal border-b-2"
              >
                {" "}
                Activities
              </Link>
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
                href="#contactus"
                // activeClass="active"
                // offset={-20}
                // duration={1500}
                // smooth={true}
                className="hidden sm:block focus:outline-none text-base border-transparent font-bold  cursor-pointer h-full md:flex items-center hover:text-[#DE466C]  text-[#004281] tracking-normal border-b-2"
              >
                Contact
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








