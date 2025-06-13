import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import {Room} from '../components/Room.jsx';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });



  return (
    <section className="min-h-screen w-full  flex flex-col relative" id="home">
      <div className="w-full z-10 mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Nitesh <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-zinc-200">Building Brands, Developing Web</p>
      </div>

      <div className="w-full h-full absolute  inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 3, 18]}    />
            <HeroCamera isMobile={isMobile}>
              <Room scale={3.57} position={[1.6, 4.9, 7.6]}  />
              </HeroCamera>

            <ambientLight intensity={20} />
            <directionalLight position={[0, 7, 0]} intensity={4} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Together We Create." isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
