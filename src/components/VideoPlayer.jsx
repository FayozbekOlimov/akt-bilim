import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import ReactPlayer from "react-player";

const VideoCard = styled(Card)(({ theme }) => ({
  maxWidth: "100%",
  maxHeight: "50vh",
  [theme.breakpoints.down("xs")]: {
    maxHeight: "30vh",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1rem",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  marginBottom: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "0.8rem",
    marginBottom: "0.5rem",
  },
}));

const PlayPauseButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.down("xs")]: {
    display: "none",
  },
}));

function VideoPlayer({ videoUrl }) {
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <VideoCard>
        <CardMedia sx={{ width: "300px", height: "400px" }}>
          <ReactPlayer url={videoUrl} playing={playing} />
        </CardMedia>
        {/* <CardContent>
          <Title gutterBottom variant="h5" component="h2">
            Video Title
          </Title>
          <Description variant="body2" color="textSecondary" component="p">
            Video description
          </Description>
          <PlayPauseButton onClick={handlePlayPause}>
            {playing ? <PauseIcon /> : <PlayArrowIcon />}
          </PlayPauseButton>
        </CardContent> */}
      </VideoCard>
    </Grid>
  );
}

export default VideoPlayer;

// import React from "react";
// import ReactPlayer from "react-player";
// import { Container } from "@mui/material";
// import { styled } from "@mui/material/styles";

// const PlayerWrapper = styled("div")({
//   position: "relative",
//   paddingTop: "56.25%" /* 16:9 ratio */,
// });

// // const StyledReactPlayer = styled(ReactPlayer)({
// //   position: "absolute",
// //   top: 0,
// //   left: 0,
// // });

// const VideoPlayer = ({ url }) => {
//   return (
//     <Container maxWidth="md">
//       <PlayerWrapper>
//         <ReactPlayer
//           url={url}
//           width="100%"
//           height="100%"
//           controls={true}
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//           }}
//           youtubeConfig={{
//             playerVars: {
//               autoplay: 0,
//               controls: 0,
//               disablekb: 1,
//               enablejsapi: 1,
//               modestbranding: 1,
//               showinfo: 0,
//             },
//           }}
//         />
//         <div></div>
//       </PlayerWrapper>
//     </Container>
//   );
// };

// export default VideoPlayer;
