import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const PlayerWrapper = styled("div")({
  position: "relative",
  paddingTop: "56.25%" /* 16:9 ratio */,
});

// const StyledReactPlayer = styled(ReactPlayer)({
//   position: "absolute",
//   top: 0,
//   left: 0,
// });

const VideoPlayer = ({ url }) => {
  return (
    <Container maxWidth="md">
      <PlayerWrapper>
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls={true}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          youtubeConig={{
            playerVars: {
              autoplay: 0,
              controls: 0,
              disablekb: 1,
              enablejsapi: 1,
              modestbranding: 1,
              showinfo: 0,
            },
          }}
        />
        <div></div>
      </PlayerWrapper>
    </Container>
  );
};

export default VideoPlayer;
