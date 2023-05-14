import React from "react";
import { Avatar as MuiAvatar } from "@mui/material";

const Avatar = ({ width, height, src = "/images/avatar.png" }) => {
  return (
    <MuiAvatar
      sx={{
        width: `${width}px`,
        height: `${height}px`,
        bgcolor: "success.light",
        "& img": {
          transform: "translateY(4px)",
        },
      }}
      src={src}
      alt="avatar img"
    />
  );
};

export default Avatar;
