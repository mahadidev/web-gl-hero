// import modules
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Html, RoundedBox } from "@react-three/drei";

export const MenuAnimation = () => {
  return (
    <>
      <Canvas colorManagement>
        <ambientLight />
        <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4}>
          <meshPhongMaterial attach="material" color="#f3f3f3" wireframe />
        </RoundedBox>
        <Html>
          <h1>Hello</h1>
        </Html>
      </Canvas>
    </>
  );
};
