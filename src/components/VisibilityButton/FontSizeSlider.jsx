import { Box, Slider, Typography } from "@mui/material";
import { useContext, useState } from "react";
import {
  getScaleFromLocalStorage,
  setScaleToLocalStorage,
} from "../../helpers";
import { ThemeContext } from "../../hooks/useMode";

const FontSizeSlider = () => {
  const [value, setValue] = useState(getScaleFromLocalStorage);
  const { changeFontSize } = useContext(ThemeContext);

  const handleChange = (_, newValue) => {
    setScaleToLocalStorage(newValue);
    setValue(newValue);
    changeFontSize(newValue);
  };

  return (
    <Box mt={1}>
      <Typography variant="subtitle2">{value}% ga kattalashtirish</Typography>
      <Slider
        sx={{ width: "92%", margin: "auto", display: "block", color: "unset" }}
        value={value}
        onChange={handleChange}
        aria-labelledby="fontsize-slider"
      />
    </Box>
  );
};

export default FontSizeSlider;
