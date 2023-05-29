import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FAILED, LOADING } from "../../redux/actionTypes";
import { fetchTests } from "../../redux/testsSlice";
import TestCard from "./TestCard";
import ErrorHandler from "../../components/ErrorHandler";
import { useParams } from "react-router-dom";

const Tests = () => {
  const dispatch = useDispatch();
  const { subjectId } = useParams();
  const { access } = useSelector((state) => state.login?.user);
  const { tests, status, error } = useSelector((state) => state.tests);

  useEffect(() => {
    dispatch(fetchTests({ accessToken: access, subjectId }));
  }, [dispatch, access]);

  if (status === LOADING) {
    return "Yuklanmoqda...";
  }

  if (status === FAILED) {
    return <ErrorHandler error={error} />;
  }

  if (tests.length === 0) {
    return <Typography variant="subtitle1">Testlar mavjud emas</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {tests.map((item, index) => (
        <Grid item xs={12} md={6} lg={4} key={index}>
          <TestCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Tests;
