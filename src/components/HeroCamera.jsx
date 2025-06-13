import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef();

  useEffect(() => {
    if (group.current) {
      group.current.rotation.set(isMobile ? 0.1 : 0.15, 0, 0);
    }
  }, []);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 3, isMobile ? 25 : 18], 0.25, delta);

    if (!isMobile) {
      easing.dampE(
        group.current.rotation,
        [
          -state.pointer.y / 10 + 0.15,
          state.pointer.x / 10,
          0
        ],
        0.25,
        delta
      );
    }
  });

  return <group ref={group}>{children}</group>;
};

export default HeroCamera;
