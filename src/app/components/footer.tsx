import React from 'react'

import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { ImLinkedin2, ImFacebook } from "react-icons/im";
// import { BsYoutube, } from "react-icons/bs";// BsTwitter
import {FaRegCopyright} from "react-icons/fa"
import {FaRegLifeRing} from "react-icons/fa"

export default function Footer() {
  return (
  <>
 
    {/* {id="ContactUs"} */}
   
      <div className="mx-auto bg-white">
        {/* <div className="flex lg:flex-row md:flex-col flex-col gap-8 w-full">
          <div data-aos="zoom-in-up" data-aos-once="false" className="w-full">
            <img
              className=" w-full mt-5 object-cover "
              src="/contactus1.png"
              alt="map-lg"
            />
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-once="false"
            className="lg:max-w-[624px] w-full"
          >
            <div className="text-5xl font-bold text-center mx-1 md:mx-0 bg-gradient-to-r from-teal-500 via-blue-500 to-pink-500 text-transparent bg-clip-text ">
              Contact Us
            </div>
            <div className="text-xl my-[2%] text-[#5b5b98] font-medium text-center">
              We are always here to help in whatever way we can
            </div>
            <input
              className="w-full bg-transparent  p-2 pl-4 border border-gray-300 outline-none"
              type="text"
              name
              id
              placeholder="Full Name"
            />
            <input
              className="w-full bg-transparent p-2 pl-4 border border-gray-300 outline-none mt-6 mb-6"
              type="text"
              name
              id
              placeholder="Email Address"
            />
            <input
              className="w-full bg-transparent p-2 pl-4 border border-gray-300 outline-none mb-6"
              type="text"
              name
              id
              placeholder="Phone Number"
            />
            <textarea
              className="border border-gray-300 bg-transparent p-3 pl-4 outline-none  lg:block md:hidden hidden resize-none w-full mb-10"
              name
              id
              cols={0}
              rows={5}
              placeholder="Type your message here."
              defaultValue={""}
            />
            <textarea
              className="border border-gray-300 bg-transparent p-3 pl-4 outline-none mb-4 lg:hidden md:block hidden resize-none w-full"
              name
              id
              cols={0}
              rows={5}
              placeholder="Type your message here."
              defaultValue={""}
            />
            <textarea
              className="border border-gray-300 bg-transparent p-3 pl-4 outline-none mb-4 lg:hidden md:hidden block resize-none w-full"
              name
              id
              cols={0}
              rows={5}
              placeholder="Type your message here."
              defaultValue={""}
            />

            <button className="hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-medium rounded transition duration-300 ">
              Send
            </button>
          </div>
        </div> */}
       
        <div className="">
          <div className="">
            <div className="box-border w-full bg-[#004281] px-6 py-10 text-lg font-medium text-white transition duration-300 sm:px-8 lg:px-12 lg:py-12">
              <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-x-8 gap-y-10 text-left sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))] lg:gap-x-10">
                <div
                  data-aos="zoom-in-up"
                  data-aos-once="false"
                  className="box-border min-w-0 text-left text-white"
                >
                  <p className="text-lg font-semibold underline decoration-white/70 underline-offset-4">Center for Management of UCBs</p>
                  <div className="mt-4 space-y-3 text-base leading-7">
                    <p>Plot no 21, Block 5, Sector -2, Rajendra Nagar, Ghaziabad -201005</p>
                    <p>Contact Number: +91 9870265838, 0120-3551050</p>
                    <p>Email: cmucbs@gmail.com</p>
                    <p>WhatsApp: <Link href="whatsapp://send?phone=+919870265838" className="hover:underline">+91 9870265838</Link></p>
                  </div>
                </div>


                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-once="false"
                  className="box-border min-w-0 text-left text-white"
                >
                  <p className="text-lg font-semibold underline decoration-white/70 underline-offset-4">Quick Links</p>
                  <ul className="pt-3">
                    <li className="pt-4">
                      <Link
                href="/" >Home</Link>
                       
                      
                    </li>
                    <li className="pt-4">
                     <Link href="/#aboutus">About Us</Link>
                       
                    
                    </li>
                    <li className="pt-4">
                    <Link  href={"https://website.rbi.org.in/web/rbi/notifications/rbi-circulars"} >Regulatory Updates</Link>
                        
                      
                    </li>
                    <li className="pt-4">
                   <Link  href="/#contactus">Contact Us</Link>
                     
                     
                    </li>
                   
                  </ul>
                </div>
                <div
                  data-aos="fade-down"
                  data-aos-once="false"
                  data-aos-easing="linear"
                  className="box-border min-w-0 text-left text-white"
                >
                  <p className="text-lg font-semibold text-white underline decoration-white/70 underline-offset-4">Legal</p>
                  <ul className="pt-3">
                    <li className="pt-4">
                     <Link href="/privacypolicy"> Privacy Policy</Link>
                       
                      
                    </li>
                    <li className="pt-4">
                    <Link href="/termsandconditions"> Terms & Conditions</Link>
                        
                     
                    </li>
                   

                  </ul>
                </div>
                <div className="box-border min-w-0 text-left">
                  <div data-aos="zoom-in-down" data-aos-once="false">
                    <p className="text-lg font-semibold text-white underline decoration-white/70 underline-offset-4">
                      Training Programs
      
                    </p>
                    <div className="flex gap-3 pt-4 cursor-pointer">
                      <FaRegLifeRing />
                      
                      <p className="text-base e text-white"><Link href="#upcomingtraining" >Upcoming Training Programs</Link></p>
                    </div>
                    <div className="flex gap-3 pt-4 cursor-pointer">
                      <FaRegLifeRing />
                      <p className="text-base e text-white"><Link href="/archive" >Previous Training Programs</Link></p>
                    </div>
                   
                    
                  </div>
                  <div
                    data-aos="zoom-out"
                    data-aos-once="false"
                    className="mt-8 cursor-pointer"
                  >
                    <p className="text-lg font-semibold e text-white">
                      Follow Us
                    </p>
                    <div className="flex gap-4 pt-4">
                      <div className="my-auto ">
                        <ul className="flex gap-4 ">
                          <li className="w-10 hover:scale-[1.55]  duration-500 h-10 rounded-full bg-[#0077B5]  flex justify-center content-center items-center text-white ">
                          <Link href="https://www.linkedin.com/in/centre-for-management-of-ucbs-cmucbs-a19b79347/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BQ%2FxFsR6gTM6be610gkuV3A%3D%3D">
                              <ImLinkedin2 className="" />
                          </Link>
                           
                          </li>
                          <li className="hover:scale-[1.55]  duration-500 w-10 h-10 rounded-full bg-[#3b5998]  flex justify-center items-center text-white ">
                         <Link href="https://www.facebook.com/profile.php?id=61572386815695">
                              <ImFacebook className="" />
                              </Link>
                          </li>
                          {/* <li className="hover:scale-[1.55]  duration-500 w-10 h-10 rounded-full bg-[#c4302b]  flex justify-center items-center text-white ">
                           
                              <BsYoutube className="text-white" />
                          
                          </li> */}
                          <li
                            className="hover:scale-[1.55]  duration-500 w-10 h-10 rounded-full   flex justify-center items-center text-white"
                            style={{
                              background:
                                "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
                            }}
                          >
                           <Link href="https://www.instagram.com/centreformanagementof/?__pwa=1#">
                              <FaInstagramSquare className="text-white" />
                            </Link>
                         
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-10 flex max-w-7xl flex-wrap items-center justify-center border-t border-white/20 pt-6 sm:justify-between">
                {/* <div
                  data-aos="fade-down"
                  data-aos-once="false"
                  className="flex md:flex-row flex-col gap-6"
                >
                  <p className="text-sm  text-white ">
                    +91-7065000280(Support)
                  </p>

                  <p className="text-sm  text-white ">
                    +91-7065000262(Support)
                  </p>
                  <p className="text-sm  text-white ">
                    +91-7065000960(Sales)
                  </p>
                  <p className="text-sm  text-white">
                    corp.sales@ultranet.co.in
                  </p>
                </div> */}
                <div
                  data-aos="fade-down"
                  data-aos-once="false"
                  className="flex items-center gap-2"
                >
                  <FaRegCopyright />
                  <p className="text-sm e text-white">
                    Copyright : 2026, CMUCBs. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  </>
  )
}







