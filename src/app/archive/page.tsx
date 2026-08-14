import React from 'react';
import { archivePrograms } from '@/data/archivePrograms';

export default function Index() {
  return (
    <div id="previoustraining">
      <div className="text-5xl mt-16 leading-[60px] text-[#004281] tracking-[-0.04em] font-[800] text-center mx-1 md:mx-0">
        Previous Training Programs
      </div>

      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8 pb-16">
        {archivePrograms.map((program, index) => (
          <div key={index} className="p-4 rounded border-gray-300 dark:border-gray-700 border-solid border-2">
            <div>
              <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">{program.title}</h4>
              <p className="text-gray-800 dark:text-gray-100 text-sm">
                <b>Location:</b> {program.location}
              </p>
              <br />
              <p className="text-gray-800 dark:text-gray-100 text-sm">
                <b>Conducted At:</b> {program.date}
              </p>
              {program.duration && program.duration !== "" && (
                <p className="text-sm dark:text-gray-100">
                  <b>Duration:</b> {program.duration}
                </p>
              )}
              {program.programmeFee && program.programmeFee !== "" && (
                <p className="text-sm dark:text-gray-100">
                  <b>Programme Fee:</b> {program.programmeFee}
                </p>
              )}
            </div>
            <div>
              {program.targetAudience && program.targetAudience !== "" && (
                <div className="flex items-center justify-between text-gray-800">
                  <p className="text-sm dark:text-gray-100">{program.targetAudience}</p>
                </div>
              )}
              {program.brochureUrl && program.brochureUrl !== "" && (
                <div className="pt-4">
                  <a 
                    className="hover:bg-gradient-to-r from-[#DE466C] to-[#004281] bg-[#004281] px-5 text-lg py-2 text-white font-medium rounded-full transition duration-300" 
                    href={program.brochureUrl} 
                    download="Brochure"
                  >
                    Download Brochure
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
