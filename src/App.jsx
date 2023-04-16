import { Fragment } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tests from "./pages/Tests";
import VideoResources from "./pages/VideoResources";
import Login from "./pages/Login";
import Presentations from "./pages/Presentations";
import { ColorModeContext, useMode } from "./theme";
import SingleVideo from "./pages/SingleVideo";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <Fragment>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Navigate to="/login" replace={true} />} />
            <Route path="login" element={<Login />} />
            <Route path="/dashboard" element={<Home />}>
              <Route index element={<VideoResources />} />
              <Route path="presentations" element={<Presentations />} />
              <Route path="tests" element={<Tests />} />
              <Route path="videos/:id" element={<SingleVideo />} />
            </Route>
            <Route path="*" element={<h2>Sahifa topilmadi</h2>} />
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </Fragment>
  );
}

export default App;
