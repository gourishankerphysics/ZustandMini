import React from "react";
import useStore from "../Stores/store";
import { Vector3 } from "three";
const PropertiesPanel = () => {
  const position = useStore((state) => state.position);
  const readPosition = useStore((state) => state.readPosition);

  const increment = useStore((state) => state.incrementPosition);
  const decrement = useStore((state) => state.decrementPosition);
  const reset = useStore((state) => state.resetPosition);
  const setPos = useStore((state) => state.setPosition);
  return (
    <div>
      <h1>{position.x.toFixed(2)} position</h1>
      <button onClick={increment}>+Increment</button>
      <button onClick={decrement}>-decrement</button>
      <button onClick={reset}>Reset</button>
      <button
        onClick={() => {
          setPos(new Vector3(5, 0, 0));
        }}
      >
        Set at 5
      </button>
    </div>
  );
};

export default PropertiesPanel;
