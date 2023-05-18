import { useContext } from "react";
import { styled, useTheme, Box, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { ThemeContext } from "../../hooks/useMode";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: theme.spacing(1),
}));

const ModeButton = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ThemeContext);

  return (
    <Wrapper>
      <IconButton onClick={toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness7 sx={{ fontSize: "24px" }} />
        ) : (
          <Brightness4 sx={{ fontSize: "24px" }} />
        )}
      </IconButton>
    </Wrapper>
  );
};

export default ModeButton;
