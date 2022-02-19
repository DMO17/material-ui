import { useContext } from "react";
import { ShoppingContext } from "../contexts/ShoppingProvider";

const useShoppingContextValues = () => {
  return useContext(ShoppingContext);
};
