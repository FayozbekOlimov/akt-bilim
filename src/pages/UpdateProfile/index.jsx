import { Button, Grid, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Formik, Form } from "formik";
import { ProfileWrapper } from "./styles";
import { MuiFileInput } from "mui-file-input";
import { useState } from "react";

const UpdateProfile = () => {
  const [value, setValue] = useState(null);

  const handleChange = (newValue, info) => {
    setValue(newValue);
  };
  return (
    <ProfileWrapper elevation={4}>
      <Formik>
        <Form>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" my={0.5} textAlign="center">
                Mening profilim
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="firstName"
                name="firstName"
                label="Ism"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="lastName"
                name="lastName"
                label="Familiya"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="location"
                name="location"
                label="Manzil"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    label="Tug'ilgan kun"
                    sx={{ width: "100%", mt: -0.4 }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Telefon raqam"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <MuiFileInput
                placeholder="Profil uchun rasm"
                value={value}
                onChange={handleChange}
                fullWidth
                sx={{
                  "& .MuiInputAdornment-positionEnd": {
                    flex: 1,
                    justifyContent: "flex-end",
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                O'zgartirish
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </ProfileWrapper>
  );
};

export default UpdateProfile;
