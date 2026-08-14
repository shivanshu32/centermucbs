import React from 'react'
import { FaGraduationCap, FaUsers } from "react-icons/fa"
import Upcomingtraining from './upcomingtraining'

export default function Trainingprograms() {
  return (
    <div id="trainingprogram">
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 2xl:px-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#004281] mb-10 md:mb-14">
            Upcoming Training Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="cursor-pointer flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white shadow mb-4">
                <FaGraduationCap className="w-8 h-8 md:w-10 md:h-10 text-[#004281]" />
              </div>
              <div className="w-full border py-10 px-6 md:px-8 flex flex-col justify-center items-center bg-white shadow rounded-lg border-gray-200 hover:shadow-2xl transition duration-500">
                <p className="text-xl md:text-2xl font-medium text-center text-gray-800">
                  Management Development Program
                </p>
                <p className="mt-4 text-base md:text-lg leading-7 text-center text-gray-600">
                  Our Management Training Program is designed to equip professionals with the skills, knowledge, and strategies needed to excel in leadership roles.
                </p>
              </div>
            </div>

            <div className="cursor-pointer flex flex-col items-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white shadow mb-4">
                <FaUsers className="w-8 h-8 md:w-10 md:h-10 text-[#004281]" />
              </div>
              <div className="w-full border py-10 px-6 md:px-8 flex flex-col justify-center items-center bg-white shadow rounded-lg border-gray-200 hover:shadow-2xl transition duration-500">
                <p className="text-xl md:text-2xl font-medium text-center text-gray-800">
                  Capacity building for staff of UCBs
                </p>
                <p className="mt-4 text-base md:text-lg leading-7 text-center text-gray-600">
                  Our Capacity Building Training Program empowers organizations to enhance their skills, resources, and capabilities for sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Upcomingtraining />
    </div>
  )
}
