// import modules
import { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, CurveModifier } from "@react-three/drei";

function Model() {
  const gltf = useLoader(GLTFLoader, "./models/drone/scene.gltf");
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}

export const MenuAnimation = () => {
  return (
    <>
      <Canvas colorManagement>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <OrbitControls enableZoom={false} />

        <Suspense fallback={false}>
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
};
