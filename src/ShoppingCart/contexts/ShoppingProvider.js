import React from "react";

export const ShoppingContext = React.createContext();

export const ShoppingProvider = ({ children }) => {
  const shoppingContextValues = {};

  return (
    <ShoppingContext.Provider value={shoppingContextValues}>
      {children}
    </ShoppingContext.Provider>
  );
};
