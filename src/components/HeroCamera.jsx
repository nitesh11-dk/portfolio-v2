import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef();

  useEffect(() => {
    if (group.current) {
      group.current.rotation.set(isMobile ? 0.2 : 0.3, 0, 0);
    }
  }, []);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 3, isMobile ? 25 : 18], 0.25, delta);

    if (!isMobile) {
      easing.dampE(
        group.current.rotation,
        [-state.pointer.y / 5 + 0.3, state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return <group ref={group}>{children}</group>;
};

export default HeroCamera;
