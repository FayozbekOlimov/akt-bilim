import { Box, Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import VideoPlayer from "../../components/VideoPlayer";

const VideoResources = () => {
  return (
    <Grid
      container
      rowGap={3}
    >
      {Array.from(Array(6)).map((_, index) => (
        <Grid xs={12} md={6} lg={4} key={index}>
          <VideoPlayer url={"https://youtu.be/ewZ_YWbIWXI"} />
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoResources;
