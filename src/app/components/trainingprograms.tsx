import React from 'react'
import { FaGraduationCap, FaUsers } from "react-icons/fa"
import Upcomingtraining from './upcomingtraining'

export default function Trainingprograms() {
  return (
    <div id="trainingprogram" >
    <div className="flex justify-center items-center flex-col relative">
      <div className="2xl:px-20 z-20 static  flex flex-col justify-center items-center px-4 md:px-6 py-12 bg-gray-50">
      <div className="text-5xl leading-[60px] text-[#004281] tracking-[-0.04em]  font-[800] text-center mx-1 md:mx-0  ">
       Upcoming Training Programs
      </div>
        <div className="grid mt-8 w-full md:mt-12 xl:mt-14 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center items-center gap-6 md:gap-6 xl:gap-8">
          <div className="cursor-pointer  flex flex-col   justify-center items-center">
            <FaGraduationCap className="-mb-6 md:-mb-8 xl:-mb-10 w-12 h-12 md:w-16 md:h-16 z-20 text-[#004281]" />
            <div className="flex-col transition duration-500 hover:shadow-2xl w-full border py-14 px-8 flex justify-center items-center bg-white shadow border rounded-md border-gray-200">
              <p className="w-full md:w-72 xl:w-80 text-xl xl:text-2xl font-medium text-center text-gray-800">Management Development Program 
              </p>
              <p className="w-full md:w-72 xl:w-80 mt-4 text-base xl:text-xl leading-6 xl:leading-9 text-center text-gray-600">Our Management Training Program is designed to equip professionals with the skills, knowledge, and strategies needed to excel in leadership roles. </p>
            </div>
          </div>

          <div className="cursor-pointer  flex flex-col   justify-center items-center">
            <FaUsers className="-mb-6 md:-mb-8 xl:-mb-10 w-12 h-12 md:w-16 md:h-16 z-20 text-[#004281]" />
            <div className="flex-col transition duration-500 hover:shadow-2xl w-full border py-14 px-8 flex justify-center items-center bg-white shadow border rounded-md border-gray-200">
              <p className="w-full md:w-72 xl:w-80 text-xl xl:text-2xl font-medium text-center text-gray-800">Capacity building for staff of UCBs
              </p>
              <p className="w-full md:w-72 xl:w-80 mt-4 text-base xl:text-xl leading-6 xl:leading-9 text-center text-gray-600">Our Capacity Building Training Program empowers organizations to enhance their skills, resources, and capabilities for sustainable growth. </p>
            </div>
          </div>
         
        </div>
      </div>
    </div>
    <Upcomingtraining />
  </div>
  )
}
