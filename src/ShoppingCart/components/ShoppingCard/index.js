import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ShoppingCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://i8.amplience.net/i/jpl/jd_474600_bl?w=408&h=408&fmt=webp"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Price
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Shopping Item Name
        </Typography>
        <Button size="small">Add to basket</Button>
      </CardContent>
    </Card>
  );
};
