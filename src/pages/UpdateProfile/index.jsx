import { PhotoCamera } from "@mui/icons-material";
import {
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  useTheme,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Avatar from "../../components/Avatar";

// const validationSchema = Yup.object().shape({
//   firstName: Yup.string().required("First name is required"),
//   lastName: Yup.string().required("Last name is required"),
//   location: Yup.string(),
//   birthday: Yup.date(),
//   phoneNumber: Yup.string(),
// });

const UpdateProfile = ({
  user = { firstName: "", lastName: "", image: "" },
  onUpdate,
}) => {
  const theme = useTheme();
  return (
    <Paper
      elevation={4}
      sx={{
        maxWidth: 600,
        width: "100%",
        p: 2,
        m: 'auto'
      }}
    >
      <Formik
        initialValues={{
          firstName: user.firstName,
          lastName: user.lastName,
          image: user.image,
          location: user.location || "",
          birthday: user.birthday || "",
          phoneNumber: user.phoneNumber || "",
        }}
        // validationSchema={validationSchema}
        onSubmit={(values) => {
          onUpdate(values);
        }}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} md={6}>
                <Field
                  as={TextField}
                  id="firstName"
                  name="firstName"
                  label="Ism"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  as={TextField}
                  id="lastName"
                  name="lastName"
                  label="Familiya"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  as={TextField}
                  id="location"
                  name="location"
                  label="Manzil"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  as={TextField}
                  id="birthday"
                  name="birthday"
                  label="Tug'ilgan kun"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Field
                  as={TextField}
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Telefon raqam"
                  variant="outlined"
                  fullWidth
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
        )}
      </Formik>
    </Paper>
  );
};

export default UpdateProfile;
