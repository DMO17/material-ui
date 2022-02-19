import React from "react";

// import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import InputLabel from "@mui/material/InputLabel";

// import SaveIcon from "@material-ui/icons/Save";
import Search from "@material-ui/icons/Search";
import FolderIcon from "@material-ui/icons/Map";
import Delete from "@material-ui/icons/Delete";

const CityListWithIcons = () => {
  return (
    <>
      <ListItem sx={{ mt: 2 }}>
        <ListItemAvatar>
          <Avatar>
            <FolderIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Single-line item" />
        <ListItemAvatar>
          <Avatar>
            <Delete />
          </Avatar>
        </ListItemAvatar>
      </ListItem>
    </>
  );
};

const FormSection = () => {
  return (
    <>
      <form
        style={{ backgroundColor: "grey", margin: 5 }}
        onSubmit={(e) => {
          e.preventDefault();
          console.log("uierbgerubgaq");
        }}
      >
        <InputLabel id="gameCategoryLabel">City Name</InputLabel>
        <FormControl sx={{ display: "flex" }} variant="standard">
          <TextField
            sx={{ width: "100%" }}
            id="filled-basic"
            variant="filled"
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <Button
            fullWidth
            variant="contained"
            type="submit"
            endIcon={<Search />}
          >
            Search
          </Button>
        </FormControl>
      </form>
      <div style={{ backgroundColor: "lightblue" }}>
        <List>
          <CityListWithIcons />
          <CityListWithIcons />
          <CityListWithIcons />
        </List>
      </div>
    </>
  );
};

const CurrentWeather = () => {
  return (
    <div style={{ backgroundColor: "green" }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div>DATE</div>
        <div> Current weather Card info</div>
      </Box>
      <div> AdvancedCurrent Weather Data card</div>
    </div>
  );
};

// const WeatherForecast = () => {};

const DataSection = () => {
  return (
    <>
      <CurrentWeather></CurrentWeather>
      <div style={{ backgroundColor: "white" }}>
        <Box sx={{ display: "flex" }}>
          <Box>
            <List>
              <ListItemText primary="Single-line item" />
              <ListItemText primary="Single-line item" />
              <ListItemText primary="Single-line item" />
            </List>
          </Box>
          <Box>
            <List>
              <ListItemText primary="Single-line item" />
              <ListItemText primary="Single-line item" />
              <ListItemText primary="Single-line item" />
            </List>
          </Box>
        </Box>
      </div>
    </>
  );
};

const GridExample = () => {
  return (
    <>
      <Grid container spacing={0}>
        <Grid
          item
          lg={3}
          xs={12}
          style={{ backgroundColor: "yellow", height: 700, width: 400 }}
        >
          <FormSection />
        </Grid>
        <Grid
          item
          lg={9}
          xs={12}
          style={{ backgroundColor: "pink", height: 700, width: 400 }}
        >
          <DataSection />
        </Grid>
      </Grid>
    </>
  );
};

export default function Tutorial() {
  return (
    <>
      <GridExample />
    </>
  );
}
