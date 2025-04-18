import React from 'react';
import { upcomingTrainingPrograms } from '@/data/trainingPrograms';

export default function Upcomingtraining() {
  return (
    <div id="upcomingtraining">
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8 pb-16">
        {upcomingTrainingPrograms.map((program, index) => (
          <div key={index} className="p-4 rounded border-gray-300 dark:border-gray-700 border-solid border-2">
            <div>
              <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">{program.title}</h4>
              <p className="text-gray-800 dark:text-gray-100 text-sm"><b>Location:</b> {program.location}</p>
              <br />
              <p className="text-gray-800 dark:text-gray-100 text-sm"><b>Date:</b> {program.date}</p>
              <p className="text-sm dark:text-gray-100"><b>Duration:</b> {program.duration}</p>
            </div>
            <div>
              <div className="flex items-center justify-between text-gray-800">
                <p className="text-sm dark:text-gray-100">{program.targetAudience}</p>
              </div>
              {program.brochureUrl && (
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
