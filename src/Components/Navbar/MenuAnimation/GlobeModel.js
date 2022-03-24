import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";

export default function GlobeModel({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/oceanic_currents/scene.gltf");

  const ref1 = useRef();
  useEffect(() => {
    gsap.to(ref1.current.rotation, {
      duration: 20,
      y: Math.PI * 1.75,
    });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={ref1} rotation={[-Math.PI / 2, 0, 0]}>
        <points
          geometry={nodes.Object_4.geometry}
          material={nodes.Object_4.material}
        />
        <points
          geometry={nodes.Object_5.geometry}
          material={nodes.Object_5.material}
        />
        <points
          geometry={nodes.Object_6.geometry}
          material={nodes.Object_6.material}
        />
        <points
          geometry={nodes.Object_7.geometry}
          material={nodes.Object_7.material}
        />
        <points
          geometry={nodes.Object_8.geometry}
          material={nodes.Object_8.material}
        />
        <points
          geometry={nodes.Object_9.geometry}
          material={nodes.Object_9.material}
        />
        <points
          geometry={nodes.Object_10.geometry}
          material={nodes.Object_10.material}
        />
        <points
          geometry={nodes.Object_11.geometry}
          material={nodes.Object_11.material}
        />
        <points
          geometry={nodes.Object_12.geometry}
          material={nodes.Object_12.material}
        />
        <points
          geometry={nodes.Object_13.geometry}
          material={nodes.Object_13.material}
        />
        <points
          geometry={nodes.Object_14.geometry}
          material={nodes.Object_14.material}
        />
        <points
          geometry={nodes.Object_15.geometry}
          material={nodes.Object_15.material}
        />
        <points
          geometry={nodes.Object_16.geometry}
          material={nodes.Object_16.material}
        />
        <points
          geometry={nodes.Object_17.geometry}
          material={nodes.Object_17.material}
        />
        <points
          geometry={nodes.Object_18.geometry}
          material={nodes.Object_18.material}
        />
        <points
          geometry={nodes.Object_19.geometry}
          material={nodes.Object_19.material}
        />
        <points
          geometry={nodes.Object_20.geometry}
          material={nodes.Object_20.material}
        />
        <points
          geometry={nodes.Object_21.geometry}
          material={nodes.Object_21.material}
        />
        <points
          geometry={nodes.Object_22.geometry}
          material={nodes.Object_22.material}
        />
        <points
          geometry={nodes.Object_23.geometry}
          material={nodes.Object_23.material}
        />
        <points
          geometry={nodes.Object_24.geometry}
          material={nodes.Object_24.material}
        />
        <points
          geometry={nodes.Object_25.geometry}
          material={nodes.Object_25.material}
        />
        <points
          geometry={nodes.Object_26.geometry}
          material={nodes.Object_26.material}
        />
        <points
          geometry={nodes.Object_27.geometry}
          material={nodes.Object_27.material}
        />
        <points
          geometry={nodes.Object_28.geometry}
          material={nodes.Object_28.material}
        />
        <points
          geometry={nodes.Object_29.geometry}
          material={nodes.Object_29.material}
        />
        <points
          geometry={nodes.Object_30.geometry}
          material={nodes.Object_30.material}
        />
        <points
          geometry={nodes.Object_31.geometry}
          material={nodes.Object_31.material}
        />
        <points
          geometry={nodes.Object_32.geometry}
          material={nodes.Object_32.material}
        />
        <points
          geometry={nodes.Object_33.geometry}
          material={nodes.Object_33.material}
        />
        <points
          geometry={nodes.Object_34.geometry}
          material={nodes.Object_34.material}
        />
        <points
          geometry={nodes.Object_35.geometry}
          material={nodes.Object_35.material}
        />
        <points
          geometry={nodes.Object_36.geometry}
          material={nodes.Object_36.material}
        />
        <points
          geometry={nodes.Object_37.geometry}
          material={nodes.Object_37.material}
        />
        <points
          geometry={nodes.Object_38.geometry}
          material={nodes.Object_38.material}
        />
        <points
          geometry={nodes.Object_39.geometry}
          material={nodes.Object_39.material}
        />
        <points
          geometry={nodes.Object_40.geometry}
          material={nodes.Object_40.material}
        />
        <points
          geometry={nodes.Object_41.geometry}
          material={nodes.Object_41.material}
        />
        <points
          geometry={nodes.Object_42.geometry}
          material={nodes.Object_42.material}
        />
        <points
          geometry={nodes.Object_43.geometry}
          material={nodes.Object_43.material}
        />
        <points
          geometry={nodes.Object_44.geometry}
          material={nodes.Object_44.material}
        />
        <points
          geometry={nodes.Object_45.geometry}
          material={nodes.Object_45.material}
        />
        <points
          geometry={nodes.Object_46.geometry}
          material={nodes.Object_46.material}
        />
        <points
          geometry={nodes.Object_47.geometry}
          material={nodes.Object_47.material}
        />
        <points
          geometry={nodes.Object_48.geometry}
          material={nodes.Object_48.material}
        />
        <points
          geometry={nodes.Object_49.geometry}
          material={nodes.Object_49.material}
        />
        <points
          geometry={nodes.Object_50.geometry}
          material={nodes.Object_50.material}
        />
        <points
          geometry={nodes.Object_51.geometry}
          material={nodes.Object_51.material}
        />
        <points
          geometry={nodes.Object_52.geometry}
          material={nodes.Object_52.material}
        />
        <points
          geometry={nodes.Object_53.geometry}
          material={nodes.Object_53.material}
        />
        <points
          geometry={nodes.Object_54.geometry}
          material={nodes.Object_54.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/oceanic_currents/scene.gltf");