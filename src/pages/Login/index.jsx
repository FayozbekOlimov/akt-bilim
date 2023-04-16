import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Login = () => {
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

  const navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height="100%"
      p={2}
    >
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 3,
          px: 2,
          maxWidth: "400px",
          margin: "0 auto",
          bgcolor: "background.paper",
          borderTop: "4px solid",
          borderTopColor: "success.main",
        }}
      >
        <Avatar width={65} height={65} />
        <Typography variant="h6" textAlign="center" my={3}>
          Axborot kommunikatsiya texnologiyalari yo'nalishidagi masofaviy ta'lim
          portali
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container gap={2}>
            <Grid item xs={12}>
              <TextField
                label="Foydalanuvchi"
                required
                fullWidth
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{
                  "& input": {
                    padding: "14.5px 12px",
                  },
                  "& label": {
                    fontSize: "14px",
                  },
                }}
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
                sx={{
                  "& input": {
                    padding: "14.5px 12px",
                  },
                  "& label": {
                    fontSize: "14px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                onClick={() => navigate("/dashboard")}
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
    </Box>
  );
};

export default Login;
