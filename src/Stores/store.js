import create from "zustand";
import { devtools } from "zustand/middleware";
import { Vector3 } from "three";
const useStore = create(
  devtools((set) => ({
    position: new Vector3(),

    value1: 0,
    value2: 0,
    setValue1: (newVal) =>
      set((state) => ({
        value1: newVal,
      })),
    setValue2: (newVal) =>
      set((state) => ({
        value2: newVal,
      })),

    incrementPosition: () =>
      set((state) => ({
        position: state.position.clone().add(new Vector3(1, 0, 0)),
      })),
    decrementPosition: () =>
      set((state) => ({
        position: state.position.clone().add(new Vector3(-1, 0, 0)),
      })),
    resetPosition: () =>
      set((state) => ({
        position: new Vector3(),
      })),
    setPosition: (position) =>
      set((state) => ({
        position: position,
      })),
  }))
);
export default useStore;
