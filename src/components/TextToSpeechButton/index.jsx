import React, { useEffect, useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { IconButton, Tooltip } from "@mui/material";
import { KeyboardVoice } from "@mui/icons-material";

const TextToSpeechButton = () => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  // const handleTooltipOpen = () => {
  //   setOpen(true);
  // };

  const [selectedText, setSelectedText] = useState("");

  const speakText = () => {
    if (selectedText) {
      const utterance = new SpeechSynthesisUtterance(selectedText);
      utterance.lang = "uz-UZ"; // Set the language to Uzbek (Uzbekistan)
      window.speechSynthesis.speak(utterance);
      setSelectedText("");
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleTextSelection);
    return () => {
      document.removeEventListener("mouseup", handleTextSelection);
    };
  }, []);

  const handleTextSelection = () => {
    const selectedText = window.getSelection().toString();
    setSelectedText(selectedText);
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
          title="voice"
        >
          <IconButton aria-label="voice" color="inherit" onClick={speakText}>
            <KeyboardVoice />
          </IconButton>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
};

export default TextToSpeechButton;
