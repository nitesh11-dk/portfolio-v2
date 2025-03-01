import { useState } from 'react';
import Button from '../components/Button.jsx';
import Location from '../components/Location.jsx';
import SkillsShowcase from '../components/SkillsShowcase.jsx'
import Education from '../components/Education.jsx'
import {skills} from '../constants/index.js'

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('niteshdk11@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };




  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div className='mt-3'>
              <p className="grid-headtext">Hi, I’m Nitesh Kushwaha</p>
              <p className="grid-subtext">
  Enthusiastic and skilled in full-stack development, passionate about creating dynamic and responsive web applications.
</p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
          <Education></Education>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4 ">
          <div className="grid-container">
             <Location></Location>
            <div>
            <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
            <p className="grid-subtext">I&apos;m based in India and open to remote work worldwide.</p>
              <Button name="Pimpri Chinchwad,  Pune" isBeam containerClass="w-full mt-8" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <SkillsShowcase></SkillsShowcase>
            <div>  
      <p className="grid-headtext">My ToolBox</p>
      <p className="grid-subtext">
        I love solving problems and building things through code. Programming isn&apos;t just my profession—it&apos;s my passion.
      </p>
      <div className="flex flex-col  mt-2 ">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-wrap  gap-1 ">
            <span className="text-white-800 font-medium  my-1">{skill.category}:</span>
            <div className=' ml-1 flex gap-2 items-center flex-wrap'>
            {skill.items.map((item, idx) => (
              <p key={idx} className="bg-zinc-600 px-3  rounded-xl text-yellow-400">
                {item}
              </p>
            ))}
            </div>
          </div>
        ))}
      </div>
      
            </div>
            
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">niteshdk11@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
