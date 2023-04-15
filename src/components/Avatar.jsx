import React from "react";
import { Avatar as MuiAvatar } from "@mui/material";

const Avatar = ({ width, height }) => {
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
      src="/images/avatar.png"
    />
  );
};

export default Avatar;
