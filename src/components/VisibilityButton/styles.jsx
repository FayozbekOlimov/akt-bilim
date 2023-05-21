import { Button, styled } from "@mui/material";

export const MuiButton = styled(Button)({
  border: "2px solid #fff",
  fontSize: "16px",
  fontWeight: 700,
  "&.white-black": {
    backgroundColor: "#bebebe",
  },
  "&.black-white": {
    backgroundColor: "#3e3e3e",
  },
});
