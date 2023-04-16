import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrowRounded";
import { keyframes } from "@emotion/react";

const playAnimation = keyframes`
  0% {
    transform: translateX(-50%) scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.3);
  }
  50% {
    transform: translateX(-50%) scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  }
  100% {
    transform: translateX(-50%) scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.3);
  }
`;
const VideoResources = () => {
  return (
    <Grid container spacing={2}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <Card
            component={Link}
            to={`videos/${index}`}
            sx={{
              textDecoration: "none",
              display: "block",
              borderRadius: 1,
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image="/images/subject.jpg"
                alt="green iguana"
              />
              <Stack sx={{ position: "absolute", top: "4px", right: "4px" }}>
                <Chip size="small" label="04-15-2023" color="secondary" />
              </Stack>
              <PlayArrowIcon
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: "60px",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "60px",
                  color: "secondary.main",
                  borderRadius: "50%",
                  boxShadow: "0 0 0 rgba(0, 0, 0, 0.3)",
                  animation: `${playAnimation} 1.2s ease-in-out infinite`,
                }}
              />
              <CardContent p={2}>
                <Typography variant="subtitle1" noWrap>
                  Web dasturlashga kirish
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  HTML Tutorial
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoResources;
