import { Card, CardContent, CardHeader, Chip, styled } from "@mui/material";
import shadows from "@mui/material/styles/shadows";

export const CardWrapper = styled(Card)(({ theme }) => ({
  boxShadow: shadows[5],
}));

export const CardTitle = styled(CardHeader)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.text.primary,
}));

export const CardContentWrapper = styled(CardContent)(({ theme }) => ({
  padding: "8px 0 !important",
}));

export const StyledChip = styled(Chip)(({ theme }) => ({
  height: "20px",
}));
