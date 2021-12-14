import React, { useEffect, useRef } from "react";
import { TransformControls } from "@react-three/drei";
import useStore from "../Stores/store";

let startTime = performance.now();
const runRaytrace = (input) => {
  // for (let index = 0; index < 50000000; index++) {
  //   const element = 5 ** 10;
  // }
  // console.log("Running Raytrace");
  // const loopTime = performance.now() - startTime;
  // console.log("Time:", loopTime);
  // startTime = performance.now();
};

const ViewportCanvas = () => {
  const pos = useStore((state) => state.position);
  const setPos = useStore((state) => state.setPosition);
  // useEffect(() => {
  //   console.log("From Effect");
  // }, [pos]);
  // const readPos = useStore((state) => state.position);

  const transControls = useRef();
  // transControls.current.addEventListener("objectChange", (e) => {
  //   console.log("ObjectChanged", e.target.object.position);
  //   setReadPos(e.target.object.position.clone());
  // });
  return (
    <>
      <gridHelper />
      <TransformControls
        ref={transControls}
        position={pos}
        onObjectChange={(e) => {
          setPos(e.target.object.position.clone());
          runRaytrace(e.target.object.position.x);
        }}
      />
    </>
  );
};

export default ViewportCanvas;
