import { Card, styled, Typography } from "@mui/material";
import shadows from "@mui/material/styles/shadows";

export const CardWrapper = styled(Card)(({ theme }) => ({
  boxShadow: shadows[5],
}));

export const Text = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
}));
