import React from 'react'

import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { ImLinkedin2, ImFacebook } from "react-icons/im";
// import { BsYoutube, } from "react-icons/bs";// BsTwitter
import {FaRegCopyright} from "react-icons/fa"
import {FaRegLifeRing} from "react-icons/fa"

export default function Footer() {
  return (
  
  <h2>
    {/* {id="ContactUs"} */}
    <h2 className="">
      <div className=" mx-auto py-12  bg-white">
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
            <div className=" w-full mx-auto hover:bg-gradient-to-r from-[#DE466C] to-[#004281] bg-[#004281] text-lg   text-white font-medium  transition duration-300  lg:px-10 md:px-6 px-4 py-7">
              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
                <div
                  data-aos="zoom-in-up"
                  data-aos-once="false"
                  className="text-white "
                >
                  <p className="text-lg font-semibold e ">Center for Management of UCBs</p>
                  <p className="text-base pt-7 pr-4">
                    Plot 2/25, Block B, Sector 132 Noida, Uttar Pradesh 201304
                  </p>
                  <br />
                    Contact Number: +91 9870265838, 0120-3551050


                  <br />
                  Email: cmucbs@gmail.com

                  <br />
                  Whatsapp : <Link href="whatsapp://send?phone=+919870265838">+91 9870265838 </Link>
                </div>


                <div
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-once="false"
                  className="lg:pt-0 text-white md:pt-0 pt-8"
                >
                  <p className="text-lg font-semibold e ">Quick Links</p>
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
                  className="lg:pt-0 md:pt-0 pt-8"
                >
                  <p className="text-lg font-semibold e text-white ">Legal</p>
                  <ul className="pt-3">
                    <li className="pt-4">
                     <Link href="/privacypolicy"> Privacy Policy</Link>
                       
                      
                    </li>
                    <li className="pt-4">
                    <Link href="/termsandconditions"> Terms & Conditions</Link>
                        
                     
                    </li>
                   

                  </ul>
                </div>
                <div className="lg:pt-0 md:pt-16 pt-8 lg:flex-col md:flex block lgLw-0 md:w-96 lg:justify-start md:justify-between">
                  <div data-aos="zoom-in-down" data-aos-once="false">
                    <p className="text-lg font-semibold e text-white">
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
                    className="lg:pt-10 md:pt-0 pt-8 cursor-pointer"
                  >
                    <p className="text-lg font-semibold e text-white">
                      Follow Us
                    </p>
                    <div className="flex gap-4 pt-4">
                      <div className="my-auto ">
                        <ul className="flex gap-4 ">
                          <li className="w-10 hover:scale-[1.55]  duration-500 h-10 rounded-full bg-[#0077B5]  flex justify-center content-center items-center text-white ">
                          <Link href={"https://www.linkedin.com/in/centre-for-management-of-ucbs-undefined-a19b79347/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BPa7ECdq7S%2F6jaMoJ6Frc5g%3D%3D"}>
                              <ImLinkedin2 className="" />
                          </Link>
                           
                          </li>
                          <li className="hover:scale-[1.55]  duration-500 w-10 h-10 rounded-full bg-[#3b5998]  flex justify-center items-center text-white ">
                         <Link href={"https://www.facebook.com/61572386815695/posts/pfbid0iegLkDyrxoDyHh39Qu2ky1g9kWHi33L6UJMcrnbwghmSSjCmvjNq9WEmFCiYfMw4l/?app=fbl"}></Link>
                              <ImFacebook className="" />
                           
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
                           <Link href={"https://www.instagram.com/centreformanagementof/"}>
                              <FaInstagramSquare className="text-white" />
                            </Link>
                         
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:justify-between md:justify-center lg:gap-0 md:gap-10 gap-3 flex-wrap lg:pt-32 md:pt-16 pt-16">
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
                  className="flex lg:gap-4 gap-2 lg:pt-0 md:pt-0  lg:pr-20"
                >
                  <FaRegCopyright />
                  <p className="text-sm e text-white">
                    Copyright : 2025, CMUCBs. All Rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </h2>
  </h2>
  )
}







