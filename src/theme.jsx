import { createContext, useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material/styles";

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "light"
        ? {
            primary: {
              main: "#1976d2",
              light: "#42a5f5",
              dark: "#1565c0",
            },
            secondary: {
              main: "#9c27b0",
              light: "#ba68c8",
              dark: "#1565c0",
            },
            error: {
              main: "#d32f2f",
              light: "#ef5350",
              dark: "#c62828",
            },
            warning: {
              main: "#ed6c02",
              light: "#ff9800",
              dark: "#e65100",
            },
            info: {
              main: "#0288d1",
              light: "#03a9f4",
              dark: "#01579b",
            },
            success: {
              main: "#2e7d32",
              light: "#4caf50",
              dark: "#1b5e20",
            },
            text: {
              primary: "rgba(0,0,0,0.87)",
              secondary: "rgba(0,0,0,0.6)",
              disabled: "rgba(0,0,0,0.12)",
            },
            background: {
              paper: "#fff",
              default: "#fff",
              sidebar: "#fff",
            },
          }
        : {
            primary: {
              main: "#90caf9",
              light: "#e3f2fd",
              dark: "#42a5f5",
            },
            secondary: {
              main: "#ce93d8",
              light: "#f3e5f5",
              dark: "#ab47bc",
            },
            error: {
              main: "#f44336",
              light: "#e57373",
              dark: "#d32f2f",
            },
            warning: {
              main: "#ffa726",
              light: "#ffb74d",
              dark: "#f57c00",
            },
            info: {
              main: "#29b6f6",
              light: "#4fc3f7",
              dark: "#0288d1",
            },
            success: {
              main: "#66bb6a",
              light: "#81c784",
              dark: "#388e3c",
            },
            text: {
              primary: "#fff",
              secondary: "rgba(255,255,255,0.7)",
              disabled: "rgba(255,255,255,0.5)",
            },
            background: {
              paper: "#121212",
              default: "#121212",
              sidebar: "#262626",
            },
          }),
    },
    typography: {
      fontFamily: ["Open Sans", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 40,
        fontWeight: 300,
        "@media (max-width: 768px)": {
          fontSize: 36,
        },
      },
      h2: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 32,
        fontWeight: 300,
        "@media (max-width: 768px)": {
          fontSize: 28,
        },
      },
      h3: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 28,
        fontWeight: 400,
        "@media (max-width: 768px)": {
          fontSize: 24,
        },
      },
      h4: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 24,
        fontWeight: 400,
        "@media (max-width: 768px)": {
          fontSize: 20,
        },
      },
      h5: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 500,
        "@media (max-width: 768px)": {
          fontSize: 18,
        },
      },
      h6: {
        fontFamily: ["Open Sans", "sans-serif"].join(","),
        fontSize: 18,
        fontWeight: 500,
        "@media (max-width: 768px)": {
          fontSize: 16,
        },
      },
      subtitle1: {
        lineHeight: 1.75,
        fontSize: 16,
        fontWeight: 500,
      },
      subtitle2: {
        lineHeight: 1.5,
        fontSize: 15,
        fontWeight: 500,
      },
      body1: {
        lineHeight: 1.4,
        fontSize: 15,
        fontWeight: 400,
      },
      body2: {
        lineHeight: 1.2,
        fontSize: 14,
        fontWeight: 400,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    () => localStorage.getItem("mode") || "light"
  );

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
