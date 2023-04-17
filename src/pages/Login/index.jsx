import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { login } from "../../redux/loginSlice";
import Avatar from "../../components/Avatar";
import { Button, Grid, Typography } from "@mui/material";
import { LoginWrapper, MuiInput, StyledPaper } from "./styles";

const Login = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.login);
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values) => {
    const res = await dispatch(login(values));
    if (res.payload) {
      navigate("/dashboard");
    }
  };

  return (
    <LoginWrapper>
      <StyledPaper elevation={4}>
        <Avatar width={65} height={65} />
        <Typography variant="h6" textAlign="center" my={3}>
          Axborot kommunikatsiya texnologiyalari yo'nalishidagi masofaviy ta'lim
          portali
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <Grid container gap={2}>
                <Grid item xs={12}>
                  <MuiInput
                    label="Foydalanuvchi nomi"
                    fullWidth
                    type="username"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.username && Boolean(formik.errors.username)
                    }
                    helperText={
                      formik.touched.username &&
                      Boolean(formik.errors.username) &&
                      "Foydalanuvchi nomi kiritilishi shart!"
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <MuiInput
                    label="Parol"
                    fullWidth
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password &&
                      Boolean(formik.errors.password) &&
                      "Parol kiritilishi shart!"
                    }
                  />
                </Grid>
                {status === "failed" && (
                  <Grid item xs={12}>
                    <Typography color="error" component="body2" pl={1.5}>
                      {error}
                    </Typography>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={formik.isSubmitting}
                  >
                    Kirish
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </StyledPaper>
    </LoginWrapper>
  );
};

export default Login;
