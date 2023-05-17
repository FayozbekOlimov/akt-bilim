import { useContext } from "react";
import { styled, useTheme } from "@mui/material";
import { Box, IconButton } from "@mui/material";
import { ColorModeContext } from "../../theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: theme.spacing(1),
}));

const ModeButton = () => {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);
  return (
    <Wrapper>
      <IconButton onClick={toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Wrapper>
  );
};

export default ModeButton;
