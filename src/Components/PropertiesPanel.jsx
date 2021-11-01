import React from "react";
import useStore from "../Stores/store";
import { Vector3 } from "three";
import ChildInput from "./ChildInput";
import Header from "./Header";
const PropertiesPanel = () => {
  const position = useStore((state) => state.position);
  const readPosition = useStore((state) => state.readPosition);

  const increment = useStore((state) => state.incrementPosition);
  const decrement = useStore((state) => state.decrementPosition);
  const reset = useStore((state) => state.resetPosition);
  const setPos = useStore((state) => state.setPosition);

  return (
    <div>
      <Header></Header>
      <ChildInput />
      <ChildInput />
    </div>
  );
};

export default PropertiesPanel;
