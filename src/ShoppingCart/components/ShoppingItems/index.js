import React, { useState } from "react";
import { useShoppingContextValues } from "../../hooks";
import { ShoppingCard } from "../ShoppingCard";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const ShoppingItems = () => {
  const {
    state: { shoppingItems },
  } = useShoppingContextValues();

  const [itemsToggle, useItemToggle] = useState(true);

  const ShoppingItemToggle = () => {
    useItemToggle(!itemsToggle);
  };

  return (
    <Container>
      <Button fullWidth onClick={ShoppingItemToggle}>
        Shopping Items
      </Button>
      {itemsToggle && (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {shoppingItems.map((eachItem, index) => {
            return <ShoppingCard {...eachItem} key={index} id={eachItem.id} />;
          })}
        </Box>
      )}
    </Container>
  );
};
