import React from "react";

// import ButtonGroup from "@mui/material/ButtonGroup";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// import SaveIcon from "@material-ui/icons/Save";

const FormSection = () => {
  return (
    <>
      <div style={{ backgroundColor: "grey" }}> FORM</div>
      <div style={{ backgroundColor: "lightblue" }}>CITY History</div>
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
      <div style={{ backgroundColor: "white" }}>Weather Forcast</div>
    </>
  );
};

const GridExample = () => {
  return (
    <>
      <Grid container spacing={0} justifyContent="center">
        <Grid
          item
          xs={8}
          style={{ backgroundColor: "pink", height: 700, width: 400 }}
        >
          <DataSection />
        </Grid>
        <Grid
          item
          xs={4}
          style={{ backgroundColor: "yellow", height: 700, width: 400 }}
        >
          <FormSection />
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
