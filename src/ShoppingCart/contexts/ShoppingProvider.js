import React, { useReducer } from "react";
import { shoppingData } from "../data";

export const ShoppingContext = React.createContext();

const initialState = {
  shoppingItems: shoppingData,
};

const reducer = (state, action) => {};

export const ShoppingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const shoppingContextValues = {
    state,
    dispatch,
  };

  return (
    <ShoppingContext.Provider value={shoppingContextValues}>
      {children}
    </ShoppingContext.Provider>
  );
};
