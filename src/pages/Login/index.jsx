import { useContext, useState } from "react";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Lock } from "@mui/icons-material";
import { ColorModeContext } from "../../theme";

const Auth = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
        maxWidth: "400px",
        width: "100%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        left: "50%",
        top: "50%",
        bgcolor: "background.paper",
      }}
    >
      <Avatar sx={{ bgcolor: "secondary.main", m: 1 }}>
        <Lock />
      </Avatar>
      <Typography variant="subtitle1" textAlign="center">
        Axborot kommunikatsiya texnologiyalari yo'nalishidagi masofaviy ta'lim
        portali
      </Typography>
      <Box component="form" mt={2} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Foydalanuvchi"
              required
              fullWidth
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Parol"
              required
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
            >
              Kirish
            </Button>
          </Grid>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Siz tizimga kirdingiz
            </Alert>
          </Snackbar>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Auth;
