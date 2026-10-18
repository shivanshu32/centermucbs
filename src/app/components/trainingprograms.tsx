import React from 'react'
import { FaGraduationCap, FaUsers } from "react-icons/fa"
import Upcomingtraining from './upcomingtraining'

export default function Trainingprograms() {
  return (
    <div id="trainingprogram">
      <section className="bg-gradient-to-br from-[#dcecff] via-[#edf6ff] to-[#d7eaff] py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 2xl:px-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#004281] mb-10 md:mb-14">
            Upcoming Training Programs
          </h2>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <div id="training-management-development" className="scroll-mt-32 flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0b65aa] to-[#004281] shadow-lg shadow-blue-900/20 ring-4 ring-white/70 md:h-20 md:w-20">
                <FaGraduationCap className="h-8 w-8 text-white md:h-10 md:w-10" />
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

            <div id="training-capacity-building" className="scroll-mt-32 flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0b65aa] to-[#004281] shadow-lg shadow-blue-900/20 ring-4 ring-white/70 md:h-20 md:w-20">
                <FaUsers className="h-8 w-8 text-white md:h-10 md:w-10" />
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
