// import modules
import { OrbitControls, Stars, FirstPersonControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import gsap from "gsap";
import { ArcballControls } from "@react-three/drei";

// import component
import GlobeModel from "./GlobeModel";

const Light = () => {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        position={[-8, 16, -8]}
        intensity={0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[0, 50, 0]} intensity={2} />
    </>
  );
};

export const MenuAnimation = () => {
  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 4, 4], fov: 20 }}
      >
        <OrbitControls />
        <Light />
        <Stars rotateSpeed={0.1} />
        <Suspense fallback={null}>
          <GlobeModel />
        </Suspense>
      </Canvas>
    </>
  );
};
