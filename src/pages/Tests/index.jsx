import { Grid } from "@mui/material";
import TestCard from "./TestCard";

const Tests = () => {
  return (
    <Grid container spacing={2}>
      {Array.from(Array(3)).map((item, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <TestCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default Tests;
