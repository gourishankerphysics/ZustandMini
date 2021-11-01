import React from "react";
import useStore from "../Stores/store";

const Header = () => {
  const value1 = useStore((state) => state.value1);
  return (
    <div>
      <h1>{value1}</h1>
    </div>
  );
};

export default Header;
