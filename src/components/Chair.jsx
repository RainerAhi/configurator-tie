import React, { useEffect, useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useCustomization } from "../contexts/Customization";

export default function Chair(props) {
  const { nodes, materials } = useGLTF("./tie.gltf");
  const { cushionColor } = useCustomization();
  return (
    <group {...props} dispose={null}>
      <group scale={0.0125}>
        <group position={[0, -1109.584, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
            >
              <meshStandardMaterial color={cushionColor.color} /> 
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_3.geometry}
            >
              <meshStandardMaterial color={cushionColor.color} /> 
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./tie.gltf");
