import { AccountCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const UpdateProfileButton = () => {
  return (
    <IconButton
      title="Mening profilim"
      color="inherit"
      LinkComponent={Link}
      to="/dashboard/profile"
    >
      <AccountCircle sx={{ fontSize: "24px" }} />
    </IconButton>
  );
};

export default UpdateProfileButton;
