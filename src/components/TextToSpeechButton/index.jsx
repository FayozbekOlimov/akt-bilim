import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import { KeyboardVoice } from "@mui/icons-material";

const TextToSpeechButton = () => {
  const [selectedText, setSelectedText] = useState("");

  const speakText = () => {
    if (selectedText) {
      const utterance = new SpeechSynthesisUtterance(selectedText);
      utterance.lang = "uz-UZ";
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
    <IconButton aria-label="voice" color="inherit" onClick={speakText}>
      <KeyboardVoice sx={{ fontSize: "24px" }} />
    </IconButton>
  );
};

export default TextToSpeechButton;
