import { Box, Paper, styled, TextField, Typography } from "@mui/material";

export const LoginWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  padding: theme.spacing(2),
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "24px 16px",
  maxWidth: "400px",
  margin: "0 auto",
  bgcolor: theme.palette.background.paper,
  borderTop: "4px solid",
  borderTopColor: theme.palette.success.main,
}));

export const MuiInput = styled(TextField)(({ theme }) => ({
  "& input": {
    padding: "14.5px 12px",
  },
  "& label": {
    fontSize: "14px",
  },
}));

export const LoginTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  margin: `${theme.spacing(3)} 0`,
}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  paddingLeft: theme.spacing(1.5),
}));
