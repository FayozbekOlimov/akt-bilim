import { VolumeUp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";

const VoiceButton = () => {
  const [selectedText, setSelectedText] = useState("");
  const [style, setStyle] = useState(null);
  const [showButton, setShowButton] = useState(false);

  const handleSelection = (e) => {
    const selection = window.getSelection();
    setSelectedText(selection.toString());
    setStyle({
      x: e.clientX,
      y: e.clientY,
    });
    if (selection) setShowButton(true);
  };

  const speakText = () => {
    if (selectedText) {
      const utterance = new SpeechSynthesisUtterance(selectedText);
      utterance.lang = "uz-UZ";
      window.speechSynthesis.speak(utterance);
      setSelectedText("");
      setShowButton(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleSelection);
    return () => {
      document.removeEventListener("mouseup", handleSelection);
    };
  }, []);

  return (
    showButton &&
    selectedText && (
      <IconButton
        aria-label="voice"
        onClick={speakText}
        sx={{
          position: "absolute",
          left: style.x,
          top: style.y,
          zIndex: 9999,
          width: "35px",
          height: "35px",
          bgcolor: "primary.main",
          "&:hover": {
            bgcolor: "transparent",
          },
        }}
      >
        <VolumeUp
          sx={{ fontSize: "24px", color: "white", cursor: "pointer" }}
        />
      </IconButton>
    )
  );
};

export default VoiceButton;
