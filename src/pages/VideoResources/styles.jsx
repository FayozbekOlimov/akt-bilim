import { keyframes } from "@emotion/react";
import { PlayArrowRounded } from "@mui/icons-material";
import { Card, Stack, styled } from "@mui/material";
import shadows from "@mui/material/styles/shadows";

const playAnimation = keyframes`
  0% {
    transform: translateX(-50%) scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.3);
  }
  50% {
    transform: translateX(-50%) scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
  }
  100% {
    transform: translateX(-50%) scale(1);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.3);
  }
`;

export const CardWrapper = styled(Card)(({ theme }) => ({
  textDecoration: "none",
  display: "block",
  borderRadius: "4px",
  boxShadow: shadows[5],
}));

export const PlayArrowIcon = styled(PlayArrowRounded)(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: "60px",
  transform: "translateX(-50%)",
  width: "60px",
  height: "60px",
  color: theme.palette.primary.main,
  borderRadius: "50%",
  boxShadow: "0 0 0 rgba(0, 0, 0, 0.3)",
  animation: `${playAnimation} 1.2s ease-in-out infinite`,
}));

export const ChipWrapper = styled(Stack)(({ theme }) => ({
  position: "absolute",
  top: "4px",
  right: "4px",
}));
