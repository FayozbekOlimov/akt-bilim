import { DateRange } from "@mui/icons-material";
import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Iframe } from "./styles";

const SingleVideo = () => {
  return (
    <Grid container spacing={3}>
      <Grid item sm={12} lg={6}>
        <Iframe
          src="https://youtube.com/embed/NyjWX5bD8Dg"
          poster="./img/video-title.png"
          allowFullScreen
        />
      </Grid>
      <Grid item sm={12} lg={6}>
        <Typography variant="h5">Web dasturlashga kirish</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" color="text.secondary" flex={1}>
            HTML Tutorial
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            component="div"
            display="flex"
            alignItems="center"
          >
            <DateRange sx={{ fontSize: "18px", mr: 0.5 }} />
            04-15-2023
          </Typography>
        </Box>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body1" color="text.primary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum illo,
          quidem obcaecati eos perspiciatis quas et explicabo autem ad
          exercitationem ducimus, quaerat incidunt, voluptatem unde in aliquid.
          Qui, quas deleniti! Sint hic amet excepturi ipsa dolorum sequi odit in
          magnam eos inventore facere saepe, aut reprehenderit provident,
          dolorem quam earum dignissimos! Ipsa numquam placeat quae voluptatibus
          aspernatur corrupti unde, dolorum ipsum laboriosam? Adipisci officia
          enim ex saepe tempora error animi perferendis repudiandae quas modi
          assumenda commodi porro aperiam doloribus iusto quos explicabo,
          temporibus voluptates pariatur cupiditate. Cum, earum temporibus
          tempore laudantium suscipit ipsum, at, eius nihil quia quo ipsam
          sapiente!
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SingleVideo;
