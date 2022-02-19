import React from "react";
import { useShoppingContextValues } from "../../hooks";
import { ShoppingCard } from "../ShoppingCard";
import Box from "@mui/material/Box";

export const ShoppingItems = () => {
  const {
    state: { shoppingItems },
  } = useShoppingContextValues();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "30px",
      }}
    >
      {shoppingItems.map((eachItem, index) => {
        return <ShoppingCard {...eachItem} key={index} />;
      })}
    </Box>
  );
};
