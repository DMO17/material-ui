import { useContext } from "react";
import { ShoppingContext } from "../contexts/ShoppingProvider";

export const useShoppingContextValues = () => {
  return useContext(ShoppingContext);
};
