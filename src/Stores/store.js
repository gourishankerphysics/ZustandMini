import create from "zustand";
import { devtools } from "zustand/middleware";
import { Vector3 } from "three";
const useStore = create(
  devtools((set) => ({
    position: new Vector3(),
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
