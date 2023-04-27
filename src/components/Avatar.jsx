import React from "react";
import { Avatar as MuiAvatar } from "@mui/material";

const Avatar = ({ width, height, src = "/images/avatar.png" }) => {
  return (
    <MuiAvatar
      sx={{
        width: `${width}px`,
        height: `${height}px`,
        bgcolor: "primary.light",
        "& img": {
          transform: "translateY(4px)",
        },
      }}
      src={src}
    />
  );
};

export default Avatar;
