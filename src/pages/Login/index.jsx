import { useState } from "react";
import { Alert, Box, Button, Grid, Snackbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { LoginWrapper, MuiInput, StyledPaper } from "./styles";

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
    <LoginWrapper>
      <StyledPaper elevation={4}>
        <Avatar width={65} height={65} />
        <Typography variant="h6" textAlign="center" my={3}>
          Axborot kommunikatsiya texnologiyalari yo'nalishidagi masofaviy ta'lim
          portali
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container gap={2}>
            <Grid item xs={12}>
              <MuiInput
                label="Foydalanuvchi"
                required
                fullWidth
                type="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <MuiInput
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
      </StyledPaper>
    </LoginWrapper>
  );
};

export default Login;
