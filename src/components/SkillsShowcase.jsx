import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMongodb, SiGraphql, SiTailwindcss } from 'react-icons/si';
import { AiFillStar } from 'react-icons/ai';

const SkillsShowcase = () => {
  const marqueeRef = useRef(null);
  const marqueeRef2 = useRef(null);
  
  const skills = [
    { name: 'React', icon: <FaReact className="w-6 h-6" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6" /> },
    { name: 'JavaScript', icon: <SiJavascript className="w-6 h-6" /> },
    { name: 'HTML5', icon: <FaHtml5 className="w-6 h-6" /> },
    { name: 'CSS', icon: <FaCss3Alt className="w-6 h-6" /> },
    { name: 'Node.js', icon: <FaNodeJs className="w-6 h-6" /> },
    { name: 'React Native', icon: <FaReact className="w-6 h-6" /> },
    { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6" /> },
    { name: 'GraphQL', icon: <SiGraphql className="w-6 h-6" /> },
    { name: 'GSAP', icon: <AiFillStar className="w-6 h-6" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="w-6 h-6" /> },
    { name: 'Git', icon: <FaGithub className="w-6 h-6" /> },
  ];

     useGSAP(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -100,
        ease: "none",
        duration: 12,
        repeat: -1,
        modifiers: {
          xPercent: gsap.utils.unitize(x => parseFloat(x) % 100)
        }
      });
        gsap.to(marqueeRef2.current, {
            xPercent: 100,
            ease: "none",
            duration: 12,
            repeat: -1,
            modifiers: {
              xPercent: gsap.utils.unitize(x => parseFloat(x) % 100)
            }
          }); 

      }); 
    

  return (
    <div className=" rounded-xl  text-white  flex flex-col gap-6  py-4 px-1">
   
      {/* First marquee row - moving left */}
      <div className="relative overflow-hidden  ">
        <div 
          ref={marqueeRef} 
          className="flex whitespace-nowrap  gap-6"
        >
          {[...skills, ...skills].map((skill, index) => (
            <div 
              key={`skill1-${index}`} 
              className="flex items-center  rounded-xl border border-gray-700 bg-gray-900 p-4"
            >
              <div className={`mr-4 scale-125 text-[#6dc1fb]`}>
                {skill.icon}
              </div>
              <span className="font-bold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Second marquee row - moving right */}
      <div className="relative overflow-hidden ">
        <div 
          ref={marqueeRef2} 
          className="flex whitespace-nowrap -translate-x-[100%]  gap-6"
        >
          {[...skills.reverse(), ...skills].map((skill, index) => (
            <div 
            key={`skill1-${index}`} 
            className="flex items-center  rounded-xl border border-gray-700 bg-gray-900 p-4"
          >
            <div className={`mr-4 scale-125 text-[#6dc1fb]`}>
              {skill.icon}
            </div>
            <span className="font-bold">{skill.name}</span>
          </div>
          ))}
        </div>
      </div>


      

    </div>
  );
};

export default SkillsShowcase;