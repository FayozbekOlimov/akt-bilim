import { createTheme } from "@mui/material";
import { createContext, useEffect, useMemo, useState } from "react";
import {
  calculateFontSize,
  getFontSize,
  getModeFromLocalStorage,
  setModeToLocalStorage,
} from "../helpers";
import { themeSettings } from "../theme";

export const ThemeContext = createContext({
  toggleColorMode: () => {},
  changeFontSize: () => {},
});

const useMode = () => {
  const [mode, setMode] = useState(getModeFromLocalStorage);
  const [fontSize, setFontSize] = useState(getFontSize);

  useEffect(() => {
    setModeToLocalStorage(mode);
  }, [mode]);

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const changeFontSize = (scale) => {
    const newFontSize = calculateFontSize(scale);
    setFontSize(newFontSize);
  };

  const theme = useMemo(
    () => createTheme(themeSettings(mode, fontSize)),
    [mode, fontSize]
  );

  return { theme, toggleColorMode, changeFontSize };
};

export default useMode;
