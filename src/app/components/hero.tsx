import React from 'react'
import Image from 'next/image'


export default function Hero() {
  return (

    <div className="overflow-y-hidden">
    <div className="relative flex justify-start items-end md:justify-start md:items-end">
    <Image
      src="/b13.jpg"
      width={500}
      height={500}
      alt="background"
      className="hidden lg:block w-full"
    />
    <Image
      src="/b13.jpg"
      width={500}
      height={500}
      alt="background"
      className="md:block lg:hidden hidden w-full"
    />
    <Image
      src="/b13.jpg"
      width={500}
      height={500}
      alt="background"
      className="md:hidden w-full"
    />
      {/* <img className="hidden lg:block w-full" src="/b13.jpg" alt="christmas tree" />
      <img className="md:block lg:hidden hidden w-full " src="/b13.jpg" alt="christmas tree" />
      <img className="md:hidden w-full " src="/b13.jpg" alt="christmas tree" /> */}
      {/* <div className="w-40 md:w-48 lg:w-72 flex absolute justify-start flex-col md:flex-row items-center mx-4 py-8 sm:py-10 md:py-10 xl:py-20 md:mx-8 lg:mx-20 xl:mx-20"> */}
        

      <div className="absolute top-1/2 md:left-1/4 left-1/2 md:w-[40%] md:text-start text-center  transform -translate-x-1/2 -translate-y-1/2 text-white">
               <h1 className="md:text-4xl text-xl mx-auto  md:my-3 uppercase font-bold">
               Driving Excellence in Cooperative Banking
               </h1>
              
               <p className="md:text-xl text-base font-semibold">
               From Compliance to Customer Service – We&apos;ve Got You Covered
               </p>
             </div>

        {/* <div className="h-full flex z-10 justify-start items-start flex-col ">
          <p className="text-xl md:text-2xl xl:text-4xl leading-5 md:leading-6  font-bold md:font-semibold lg:leading-9 text-gray-100 md:text-gray-600">SS <span className="italic font-semibold">21</span></p>
          <p className="mt-4 text-base leading-normal text-white md:text-gray-700">Start off the new year by hitting the ground running with this purpose built workman’s bag. A culmination of productivity and luxury</p>
          <a href="javascript:void(0)" className="mt-6 text-lg lg:text-xl font-semibold leading-5 hover:underline underline-offset-2 text-gray-100 md:text-gray-800">Shop Now</a>
        </div> */}
      {/* </div> */}
    </div>
  </div>

    // <>
    // <div className="h-[30vh] md:h-[80vh] w-full relative overflow-hidden"
    //         >
    //           {/* Background Image */}
    //           <div
    //             style={{
    //               backgroundImage: `url("/b13.jpg")`,
    //               backgroundSize: "cover",
    //               backgroundPosition: "center",
    //               position: "absolute",
    //               top: "-10%",
    //               left: "-10%",
    //               right: "-10%",
    //               bottom: "-10%",
    //               zIndex: "-1",
    //             }}

    //           />
    //         </div>
    //         {/* Text Content */}
    //         <div className="absolute top-1/2 md:left-1/3 left-1/2 md:w-[40%] md:text-start text-center  transform -translate-x-1/2 -translate-y-1/2 text-white">
    //           <h1 className="md:text-5xl text-xl mx-auto  md:my-3 uppercase font-bold">
    //           Driving Excellence in Cooperative Banking
    //           </h1>
    //          
    //           <p className="md:text-xl text-base font-semibold">
    //           From Compliance to Customer Service – We've Got You Covered
    //           </p>
    //         </div>
    //         </>
  )
}












