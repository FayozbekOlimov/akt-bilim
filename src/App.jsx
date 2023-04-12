import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import Auth from "./pages/Login";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <React.Fragment>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Auth />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </React.Fragment>
  );
}

export default App;
