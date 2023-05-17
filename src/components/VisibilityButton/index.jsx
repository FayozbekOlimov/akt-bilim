import { Visibility } from "@mui/icons-material";
import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  Grid,
  IconButton,
  Slider,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { MuiButton } from "./styles";

const VisibilityButton = () => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const normalView = () => {
    document.body.classList.remove("special-dark");
    document.body.classList.remove("special-light");
  };

  const specialLightView = () => {
    document.body.classList.remove("special-dark");
    document.body.classList.add("special-light");
  };

  const specialDarkView = () => {
    document.body.classList.remove("special-light");
    document.body.classList.add("special-dark");
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TooltipActions = () => {
    return (
      <Box p={0.5}>
        <Typography variant="subtitle1">Ko'rinish</Typography>
        <Divider color="inherit" />
        <Grid container spacing={1} my={1}>
          <Grid item>
            <MuiButton color="info" variant="contained" onClick={normalView}>
              A
            </MuiButton>
          </Grid>
          <Grid item>
            <MuiButton
              color="info"
              variant="contained"
              onClick={specialLightView}
            >
              A
            </MuiButton>
          </Grid>
          <Grid item>
            <MuiButton
              color="info"
              variant="contained"
              onClick={specialDarkView}
            >
              A
            </MuiButton>
          </Grid>
        </Grid>
        <Typography variant="subtitle1">Shrift o'lchami</Typography>
        <Divider color="inherit" />
        <Box mt={1}>
          <Typography variant="subtitle2">
            {value} % ga kattalashtirish
          </Typography>
          <Slider
            aria-label="slider"
            min={0}
            max={100}
            value={value}
            color="primary"
            onChange={handleChange}
          />
        </Box>
      </Box>
    );
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={<TooltipActions />}
          arrow
        >
          <IconButton onClick={handleTooltipOpen} color="inherit">
            <Visibility />
          </IconButton>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
};

export default VisibilityButton;
