import { DateRange } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";

export const Iframe = styled("iframe")(({ theme }) => ({
  width: "100%",
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

export const VideoHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const VideoTheme = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  flex: 1,
}));

export const VideoText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const VideoDateBox = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.fontSize,
  marginRight: theme.spacing(0.5),
  display: "flex",
  alignItems: "center",
}));

export const DateIcon = styled(DateRange)(({ theme }) => ({
  fontSize: theme.typography.fontSize + 4,
  marginRight: theme.spacing(0.5),
}));
