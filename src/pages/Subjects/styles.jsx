import { Card, CardContent, CardHeader, Chip, styled } from "@mui/material";
import shadows from "@mui/material/styles/shadows";

export const CardWrapper = styled(Card)({
  boxShadow: shadows[5],
});

export const CardTitle = styled(CardHeader)(({ theme }) => ({
  backgroundColor: theme.palette.success.dark,
  color: "#fff",
}));

export const CardContentWrapper = styled(CardContent)(({ theme }) => ({
  padding: `${theme.spacing(1)} 0 !important`,
}));

export const StyledChip = styled(Chip)({
  height: "20px",
});
