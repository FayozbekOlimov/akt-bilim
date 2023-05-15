import { Box, styled, Typography } from "@mui/material";

export const NotFoundWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

export const NotFoundNumber = styled(Typography)(({ theme }) => ({
  fontSize: "100px",
  fontWeight: 700,
  letterSpacing: "8px",
  lineHeight: 1,

  [theme.breakpoints.down("sm")]: {
    fontSize: "80px",
  },
}));
