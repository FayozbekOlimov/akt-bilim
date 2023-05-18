import { Box, Slider, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { DEFAULT_FONTSIZE } from "../../constants";
import { ThemeContext } from "../../hooks/useMode";

const FontSizeSlider = () => {
  const [value, setValue] = useState(0);
  const { changeFontSize } = useContext(ThemeContext);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    changeFontSize(DEFAULT_FONTSIZE + (5 * newValue) / 100);
  };

  return (
    <Box mt={1}>
      <Typography variant="subtitle2">{value} % ga kattalashtirish</Typography>
      <Slider
        sx={{ width: "92%", margin: "auto", display: "block" }}
        value={value}
        color="primary"
        onChange={handleChange}
        aria-labelledby="fontsize-slider"
      />
    </Box>
  );
};

export default FontSizeSlider;
