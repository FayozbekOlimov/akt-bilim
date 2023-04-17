import {
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CardWrapper, ChipWrapper, PlayArrowIcon } from "./styles";

const VideoResources = () => {
  return (
    <Grid container spacing={2}>
      {Array.from(Array(6)).map((_, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <CardWrapper component={Link} to={`videos/${index}`}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="180"
                image="/images/subject.jpg"
                alt="green iguana"
              />
              <ChipWrapper>
                <Chip size="small" label="04-15-2023" color="secondary" />
              </ChipWrapper>
              <PlayArrowIcon />
              <CardContent p={2}>
                <Typography variant="subtitle1" noWrap>
                  Web dasturlashga kirish
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  HTML Tutorial
                </Typography>
              </CardContent>
            </CardActionArea>
          </CardWrapper>
        </Grid>
      ))}
    </Grid>
  );
};

export default VideoResources;
