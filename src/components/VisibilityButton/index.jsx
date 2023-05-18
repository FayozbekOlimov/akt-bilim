import { useState } from "react";
import { Visibility } from "@mui/icons-material";
import {
  Box,
  ClickAwayListener,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { normalView, specialDarkView, specialLightView } from "../../helpers";
import FontSizeSlider from "./FontSizeSlider";
import { MuiButton } from "./styles";

const VisibilityButton = () => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const TooltipActions = () => {
    return (
      <Box p={0.5}>
        <Typography variant="subtitle1">Ko'rinish</Typography>
        <Divider color="inherit" />
        <Grid container spacing={1} my={1}>
          <Grid item>
            <MuiButton title="Normal" variant="contained" onClick={normalView}>
              A
            </MuiButton>
          </Grid>
          <Grid item>
            <MuiButton
              title="Oq-qora"
              variant="contained"
              onClick={specialLightView}
            >
              A
            </MuiButton>
          </Grid>
          <Grid item>
            <MuiButton
              title="Qora-oq"
              variant="contained"
              onClick={specialDarkView}
            >
              A
            </MuiButton>
          </Grid>
        </Grid>
        <Typography variant="subtitle1">Shrift o'lchami</Typography>
        <Divider color="inherit" />
        <FontSizeSlider />
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
            <Visibility sx={{ fontSize: "24px" }} />
          </IconButton>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
};

export default VisibilityButton;
