import React, { createContext, useState, useReducer } from "react";
import { initialState, rootReducer } from "./reducer";
export type StateType = {
  [key: string]: unknown;
};
export type ContextType = {
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
};
export type ActionType = {
  type: string;
  payload?: unknown;
};
export const StoreContext = createContext<null | ContextType>(null);
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}
