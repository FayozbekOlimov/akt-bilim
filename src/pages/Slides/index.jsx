import { Box, Grid } from "@mui/material";
import SlideCard from "./SlideCard";

const Slides = () => {
  return (
    <Grid container spacing={2}>
      {Array.from(Array(3)).map((_, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <SlideCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default Slides;
