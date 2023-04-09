import React, { useRef } from "react";
import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function App() {
  const test = useRef();

  useFrame((state, delta) => {
    test.current.rotation.y += delta;
  });

  return (
    <>
      <color attach="background" args={["#333333"]} />
      <ambientLight intensity={0.5} />
      <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4} ref={test}>
        <meshPhongMaterial color="red"/>
      </RoundedBox>
    </>
  );
}
