import { create } from "zustand";

export const useCounter = create((set) => {
  return {
    count: 0,
    increment: (step: number) => {
      set((state: any) => {
        return { count: state.count + step };
      });
    },
    decrement: (step: number) => {
      set((state: any) => ({ count: state.count - step }));
    },
  };
});
