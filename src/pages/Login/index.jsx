import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { login } from "../../redux/loginSlice";
import Avatar from "../../components/Avatar";
import { Button, Grid, useTheme } from "@mui/material";
import {
  ErrorMessage,
  LoginTitle,
  LoginWrapper,
  MuiInput,
  StyledPaper,
} from "./styles";

const Login = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.login);
  const navigate = useNavigate();
  const theme = useTheme();

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
        <LoginTitle variant="h6">
          Axborot kommunikatsiya texnologiyalari yo'nalishidagi masofaviy ta'lim
          portali
        </LoginTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            values,
            handleBlur,
            handleChange,
            isSubmitting,
            touched,
            errors,
          }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <MuiInput
                    label="Foydalanuvchi nomi"
                    fullWidth
                    type="username"
                    name="username"
                    color="success"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.username && Boolean(errors.username)}
                    helperText={
                      touched.username &&
                      Boolean(errors.username) &&
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
                    color="success"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={
                      touched.password &&
                      Boolean(errors.password) &&
                      "Parol kiritilishi shart!"
                    }
                  />
                </Grid>
                {status === "failed" && (
                  <Grid item xs={12}>
                    <ErrorMessage variant="body2">{error}</ErrorMessage>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    color="success"
                    disabled={isSubmitting}
                    sx={{ fontSize: theme.typography.fontSize }}
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
