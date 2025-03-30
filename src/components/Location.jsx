import React from 'react'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Location = () => {
    gsap.registerPlugin(useGSAP);

    const container = useRef();
    useGSAP(() => {
        gsap.to(container.current, { scale: 1.8,repeat:-1,duration:2,delay:0.1,opacity:0,ease: "expo.out"}); 
    },{ scope: container }); 
  
  return (
    <div  className="opacity-90  cursor-pointer relative  w-80 overflow-hidden">
          <img 
            src="/map2.png" 
            alt="Map location" 
            className="w-full h-full object-cover rounded-2xl"
          />
          
          <div className="absolute scale-90 top-1/2 left-10 flex items-center justify-center">
            <div className=" bg-sky-200  rounded-full p-2 w-24 h-24 flex items-center justify-center">
            <div  ref={container} className='absolute box h-24 w-24 rounded-full bg-sky-200/80'></div>
              <img 
                src="/avatar.png" 
                alt="Avatar" 
                className="w-20 z-20 h-20 rounded-full"
              />
        
            </div>
          </div>
      </div>
    
  )
}

export default Location
