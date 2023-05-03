import { Paper, styled } from "@mui/material";

export const ProfileWrapper = styled(Paper)(({ theme }) => ({
  maxWidth: "600px",
  width: "100%",
  padding: theme.spacing(2),
  margin: "auto",
}));
