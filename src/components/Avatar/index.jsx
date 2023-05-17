import React from "react";
import { Avatar as MuiAvatar, styled } from "@mui/material";

const Avatar = ({ width, height, src = "/images/avatar.png" }) => {
  const StyledAvatar = styled(MuiAvatar)(({ theme }) => ({
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: theme.palette.success.light,
    "& img": {
      transform: "translateY(4px)",
    },
  }));

  return <StyledAvatar src={src} alt="avatar img" />;
};

export default Avatar;
