import { CssBaseline, ThemeProvider } from "@mui/material";
import useMode, { ThemeContext } from "../hooks/useMode";

const ThemeContextProvider = ({ children }) => {
  const { theme, toggleColorMode, changeFontSize } = useMode();

  return (
    <ThemeContext.Provider value={{ toggleColorMode, changeFontSize }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
