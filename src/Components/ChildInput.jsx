import React from "react";
import useStore from "../Stores/store";
const formatNumber = (number) => {
  console.log("Formatting", number);
  return Number(number.toFixed(2));
};
const ChildInput = () => {
  const value1 = useStore((state) => state.value1);
  const setValue1 = useStore((state) => state.setValue1);
  return (
    <input
      type="number"
      value={value1}
      onChange={(e) => setValue1(e.currentTarget.value)}
      onKeyPress={(event) => {
        if (event.key === "Enter") {
          setValue1(formatNumber(Number(value1)));
        }
      }}
      onBlurCapture={(event) => {
        setValue1(formatNumber(Number(value1)));
      }}
    />
  );
};

export default ChildInput;
