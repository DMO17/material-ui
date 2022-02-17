import React from "react";

import ButtonGroup from "@mui/material/ButtonGroup";
import CheckBox from "@mui/material/Checkbox";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const CheckBoxExample = () => {
  return (
    <div>
      <TextField variant="outlined" type="date" />
      <CheckBox />
    </div>
  );
};

const CardExample = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://i.dailymail.co.uk/1s/2022/02/17/00/54294069-0-image-a-19_1645058502188.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default function Tutorial() {
  return (
    <div>
      <CardExample />
      <CheckBoxExample />
      <ButtonGroup variant="contained" color="secondary" size="large">
        <Button startIcon={<SaveIcon />}>SAVE</Button>
        <Button startIcon={<DeleteIcon />}>DISCARD</Button>
      </ButtonGroup>
    </div>
  );
}
