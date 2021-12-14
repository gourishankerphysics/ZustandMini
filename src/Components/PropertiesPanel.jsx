import React from "react";
import useStore from "../Stores/store";
import { Vector3 } from "three";
import ChildInput from "./ChildInput";
import Header from "./Header";
let propertyRenderTime = window.performance.now();
const PropertiesPanel = () => {
  console.log("RenderTime", window.performance.now() - propertyRenderTime);
  propertyRenderTime = window.performance.now();

  const position = useStore((state) => state.position);
  // const readPosition = useStore((state) => state.readPosition);

  const increment = useStore((state) => state.incrementPosition);
  const decrement = useStore((state) => state.decrementPosition);
  const reset = useStore((state) => state.resetPosition);

  const setPos = useStore((state) => state.setPosition);

  return (
    <div>
      {/* <Header></Header>
      <ChildInput />
      <ChildInput /> */}
      <input
        type="number"
        value={position.x}
        onChange={(e) => setPos(new Vector3(e.currentTarget.value, 0, 0))}
      />
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default PropertiesPanel;
