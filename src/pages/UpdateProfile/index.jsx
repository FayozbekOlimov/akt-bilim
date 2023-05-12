import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { ProfileWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/userSlice";
import { useEffect } from "react";
import { updateProfileData } from "../../redux/profileSlice";
import jwtDecode from "jwt-decode";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const { access, user } = useSelector((state) => ({
    access: state.login?.user.access,
    user: state.user.user,
  }));
  const { student_id, user_id } = jwtDecode(access);

  const initialValues = {
    first_name: "",
    last_name: "",
    location: "",
    birth_day: "",
    phone: "",
    // image: "",
  };

  useEffect(() => {
    dispatch(fetchUser({ accessToken: access, id: student_id }));
  }, [dispatch, access, student_id]);

  const handleSubmit = async (values) => {
    await dispatch(
      updateProfileData({
        accessToken: access,
        userId: user_id,
        formData: values,
      })
    );
    window.location.reload();
  };

  const formik = useFormik({
    initialValues,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    if (user) {
      formik.setValues({
        first_name: user?.user?.first_name,
        last_name: user?.user?.last_name,
        location: user?.location || "",
        birth_day: user?.birth_day || "",
        phone: user?.phone || "",
        // image: user?.image || "",
      });
    }
  }, [user]);

  return (
    <ProfileWrapper elevation={4}>
      <Box component={"form"} onSubmit={formik.handleSubmit}>
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
              value={formik.values.first_name}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="lastName"
              name="last_name"
              label="Familiya"
              variant="outlined"
              fullWidth
              value={formik.values.last_name}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="location"
              name="location"
              label="Manzil"
              variant="outlined"
              fullWidth
              value={formik.values.location}
              onChange={formik.handleChange}
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
              value={formik.values.birth_day}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="phoneNumber"
              name="phone"
              label="Telefon raqam"
              variant="outlined"
              fullWidth
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <TextField
              id="image"
              name="image"
              variant="outlined"
              fullWidth
              type="file"
              onChange={(e) =>
                formik.setFieldValue("image", e.currentTarget.files[0])
              }
            />
          </Grid> */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={formik.isSubmitting}
            >
              O'zgartirish
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ProfileWrapper>
  );
};

export default UpdateProfile;
