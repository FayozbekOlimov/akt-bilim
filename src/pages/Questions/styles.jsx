import { Box, FormControlLabel, RadioGroup, styled } from "@mui/material";
import shadows from "@mui/material/styles/shadows";

export const Wrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  boxShadow: shadows[2],
  backgroundColor: theme.palette.background.sidebar,
}));

export const QueNumber = styled(Wrapper)(({ theme }) => ({
  padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`,
}));

export const Option = styled(FormControlLabel)(({ theme }) => ({
  display: "block",
  border: `2px solid ${theme.palette.primary.main}`,
  marginRight: 0,
  marginLeft: 0,
  borderRadius: theme.spacing(1),
  // "& .MuiRadio-root.Mui-checked": {
  //   color: "red",
  // },
}));

export const Options = styled(RadioGroup)(({ theme }) => ({
  gap: theme.spacing(1),
}));

export const QueWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
}));

export const QueBox = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  margin: theme.spacing(0.5),
  backgroundColor: theme.palette.primary.light,
  display: "grid",
  placeItems: "center",
  "&.active": {
    backgroundColor: theme.palette.primary.dark,
  },
}));
