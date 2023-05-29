import React, { useEffect, useState } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

const TimerWithProgressBar = ({ minutes }) => {
  const totalTimeInSeconds = minutes * 60;
  const [timeLeft, setTimeLeft] = useState(totalTimeInSeconds);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTimeLeft - 1;
      });

      setProgress(
        (prevProgress) => ((timeLeft - 1) / totalTimeInSeconds) * 100
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, totalTimeInSeconds]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  };

  const padZero = (value) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <Box display="flex" gap={1} alignItems="center">
      <Typography variant="subtitle2" color="text.primary">
        {formatTime(timeLeft)}
      </Typography>
      <Box width="100%">
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ height: 6, borderRadius: 2 }}
        />
      </Box>
    </Box>
  );
};

export default TimerWithProgressBar;
