import { DateRange } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";

export const SlideHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const SlideTheme = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  flex: 1,
}));

export const SlideDateBox = styled(Box)(({ theme }) => ({
  fontSize: "14px",
  marginRight: theme.spacing(0.5),
  display: "flex",
  alignItems: "center",
}));

export const DateIcon = styled(DateRange)(({ theme }) => ({
  fontSize: "18px",
  marginRight: theme.spacing(0.5),
}));

export const ImgBox = styled(Box)(({ theme }) => ({
  height: "300px",
  borderRadius: theme.spacing(1),
  overflow: "hidden",
  float: "left",
  margin: `${theme.spacing(1)} ${theme.spacing(2)} ${theme.spacing(1)} 0`,

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));
