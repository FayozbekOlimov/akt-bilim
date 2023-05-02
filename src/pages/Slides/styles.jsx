import { Card, styled, Typography } from "@mui/material";
import shadows from "@mui/material/styles/shadows";

export const CardWrapper = styled(Card)(({ theme }) => ({
  boxShadow: shadows[5],
}));

export const CardSubtitle = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
}));

export const CardTitle = styled(CardSubtitle)(({ theme }) => ({
  WebkitLineClamp: 1,
}));
