import { Button, Grid, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Formik, Form } from "formik";
import { ProfileWrapper } from "./styles";
import { MuiFileInput } from "mui-file-input";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileData } from "../../redux/profileSlice";
import jwtDecode from "jwt-decode";

const UpdateProfile = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    location: "",
    birth_day: "",
  };

  const dispatch = useDispatch();
  const { access } = useSelector((state) => state.login?.user);
  const userId = jwtDecode(access)?.id;

  const handleSubmit = async (values) => {
    dispatch(
      updateProfileData({ accessToken: access, userId, formData: values })
    );
  };

  return (
    <ProfileWrapper elevation={4}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, isSubmitting, handleChange, setFieldValue }) => (
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
                  name="first_name"
                  label="Ism"
                  variant="outlined"
                  fullWidth
                  value={values.first_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="lastName"
                  name="last_name"
                  label="Familiya"
                  variant="outlined"
                  fullWidth
                  value={values.last_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="location"
                  name="location"
                  label="Manzil"
                  variant="outlined"
                  fullWidth
                  value={values.location}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="birthday"
                  name="birth_day"
                  label="Tug'ilgan kun"
                  variant="outlined"
                  type="date"
                  fullWidth
                  value={values.birth_day}
                  onChange={handleChange}
                />
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      label="Choose a date"
                      value={values.birth_day}
                      onChange={(date) => {
                        console.log(date);
                        setFieldValue("birth_day", date);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          // error={
                          //   formik.touched.selectedDate &&
                          //   Boolean(formik.errors.selectedDate)
                          // }
                          // helperText={
                          //   formik.touched.selectedDate &&
                          //   formik.errors.selectedDate
                          // }
                        />
                      )}
                    />
                  </DemoContainer>
                </LocalizationProvider> */}
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <TextField
                  id="phoneNumber"
                  name="phone"
                  label="Telefon raqam"
                  variant="outlined"
                  fullWidth
                  value={values.phone}
                  onChange={handleChange}
                />
              </Grid> */}
              {/* <Grid item xs={12}>
                <MuiFileInput
                  placeholder="Profil uchun rasm"
                  value={values.image}
                  name="image"
                  onChange={(event) =>
                    setFieldValue("image", event.currentTarget.files[0])
                  }
                  fullWidth
                  sx={{
                    "& .MuiInputAdornment-positionEnd": {
                      flex: 1,
                      justifyContent: "flex-end",
                    },
                  }}
                  inputProps={{ accept: "image/*" }}
                />
              </Grid> */}
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={isSubmitting}
                >
                  O'zgartirish
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </ProfileWrapper>
  );
};

export default UpdateProfile;
