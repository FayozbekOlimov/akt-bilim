import { Card, styled } from "@mui/material";
import shadows from "@mui/material/styles/shadows";

export const CardWrapper = styled(Card)(({ theme }) => ({
  boxShadow: shadows[5],
}));
