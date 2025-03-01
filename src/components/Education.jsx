import React from 'react';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {

  const educationData = [
    {
      institution: "PCET, Pimpri Chinchwad University, India",
      degree: "BTECH-CSE",
      period: "2023 - 2027 (expected)",
      grade: "CGPA: 8.45",
      icon: <FaGraduationCap className="w-8 h-8 text-purple-400" />,
      badge: "Pursuing"
    },
    {
      institution: "Maharashtra Board (SSC/HSC)",
      degree: "SSC/HSC",
      period: "2011-2023",
      grade: "Grade: 82.40% / 79.50%",
      icon: <FaSchool className="w-8 h-8 text-blue-400" />
    }
  ];

  return (
        <div className=" flex flex-col gap-4">
          {educationData.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#0e0e10] border border-[#262627] shadow-lg rounded-lg overflow-hidden transform transition duration-500  relative"
            >
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="sm:text-lg   font-normal text-white">{item.institution}</h3>
                    <p className="mt-1 text-sm text-purple-300">{item.degree}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-gray-400">{item.period}</span>
                      <span className="text-xs font-medium text-green-400">{item.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
              {index < educationData.length - 1 && (
                <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-500"></div>
              )}
            </div>
          ))}
         <div>
         <p className="grid-headtext">Education</p>
         <p className="grid-subtext">Academic qualifications and achievements</p>
         </div>
      </div>
  );
};

export default Education;
