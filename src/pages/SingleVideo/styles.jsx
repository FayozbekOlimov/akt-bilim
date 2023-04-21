import { styled } from "@mui/material";

export const Iframe = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: "8px",
  border: "none",
  height: "200px",
  objectFit: "cover",
  cursor: "pointer",
  aspectRatio: 16 / 9,
  [theme.breakpoints.up("sm")]: {
    height: "280px",
  },
}));
