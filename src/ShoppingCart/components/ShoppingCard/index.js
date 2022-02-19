import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ShoppingCard = ({ price, itemName, itemUrl }) => {
  return (
    <Card sx={{ width: 300, margin: "20px" }}>
      <CardMedia component="img" height="140" image={itemUrl} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {itemName}
        </Typography>
        <Button size="small">Add to basket</Button>
      </CardContent>
    </Card>
  );
};
