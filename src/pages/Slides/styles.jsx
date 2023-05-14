import { Card, styled, Typography } from "@mui/material";
import shadows from "@mui/material/styles/shadows";

export const CardWrapper = styled(Card)({
  boxShadow: shadows[5],
});

export const CardSubtitle = styled(Typography)({
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
});

export const CardTitle = styled(CardSubtitle)({
  WebkitLineClamp: 1,
});
