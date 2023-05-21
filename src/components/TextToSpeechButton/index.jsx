import { useState } from "react";
import {
  IconButton,
  Modal,
  Typography,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions,
} from "@mui/material";
import { VolumeUp } from "@mui/icons-material";

const TextToSpeechButton = () => {
  // const [selectedText, setSelectedText] = useState("");

  // const speakText = () => {
  //   if (selectedText) {
  //     const utterance = new SpeechSynthesisUtterance(selectedText);
  //     utterance.lang = "uz-UZ";
  //     window.speechSynthesis.speak(utterance);
  //     setSelectedText("");
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mouseup", handleTextSelection);
  //   return () => {
  //     document.removeEventListener("mouseup", handleTextSelection);
  //   };
  // }, []);

  // const handleTextSelection = () => {
  //   const selectedText = window.getSelection().toString();
  //   setSelectedText(selectedText);
  // };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton aria-label="voice" color="inherit" onClick={handleOpen}>
        <VolumeUp sx={{ fontSize: "24px" }} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          sx={{ display: "flex", alignItems: "center", gap: 1, p: 2 }}
        >
          <VolumeUp sx={{ fontSize: "24px" }} /> Ovozli o'qish
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ px: 2.5, py: 2 }}>
          <DialogContentText color="text.primary">
            Saytda ovozli o'qish imkoniyati mavjud, Matnni ovozli eshitish uchun
            matnni belgilang va paydo bo'lgan tugmani ustiga bosing
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ pt: 0 }}>
          <Button autoFocus onClick={handleClose}>
            Yopish
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TextToSpeechButton;
