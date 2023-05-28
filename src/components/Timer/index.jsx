import React, { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";

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
    <div>
      <LinearProgress variant="determinate" value={progress} />
      <div>{formatTime(timeLeft)}</div>
    </div>
  );
};

export default TimerWithProgressBar;
