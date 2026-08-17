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
    <nav className="bg-white shadow z-50 w-full">
      {/* Top bar with site title */}
      <div className="bg-[#004281] w-full">
        <div className="container mx-auto px-4 py-2 text-center">
          <h1 className="text-xl lg:text-3xl font-bold text-white whitespace-nowrap">
            Center for Management of UCBs
          </h1>
        </div>
        {/* Contact strip */}
        <div className="bg-[#003366] w-full">
          <div className="container mx-auto px-4 py-1.5 flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-white">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +91 9870265838
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              cmucbs@gmail.com
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              +91 9870265838
            </span>
          </div>
        </div>
      </div>

      {/* Logo and menu row */}
      <div className="container mx-auto px-4 py-2 md:flex md:items-center md:justify-between">
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








