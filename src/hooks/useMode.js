import { createTheme } from "@mui/material";
import { createContext, useEffect, useMemo, useState } from "react";
import { DEFAULT_FONTSIZE, DEFAULT_MODE } from "../constants";
import { themeSettings } from "../theme";

export const ThemeContext = createContext({
  toggleColorMode: () => {},
  changeFontSize: () => {},
});

const useMode = () => {
  const [mode, setMode] = useState(
    () => localStorage.getItem("mode") || DEFAULT_MODE
  );
  const [fontSize, setFontSize] = useState(DEFAULT_FONTSIZE);

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const changeFontSize = (newFontSize) => {
    setFontSize(newFontSize);
  };

  const theme = useMemo(
    () => createTheme(themeSettings(mode, fontSize)),
    [mode, fontSize]
  );

  return { theme, toggleColorMode, changeFontSize };
};

export default useMode;
